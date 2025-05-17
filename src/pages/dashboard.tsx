import { GetServerSideProps } from "next";
import { prisma } from "@/lib/prisma";
import FamilyTree from "@/components/FamilyTree";
import { Node, Edge } from "reactflow";
import { getAuth } from "@clerk/nextjs/server";
import UserMenu from "@/components/UserMenu";
import InviteForm from "@/components/InviteForm";
import EditMemberForm from "@/components/EditMemberForm";

type Member = Awaited<ReturnType<typeof prisma.member.findFirst>>;
type StrictMember = NonNullable<Member>;

type Props = {
  nodes: Node[];
  edges: Edge[];
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const { userId } = getAuth(ctx.req);

  // 🚫 Step 1: Not logged in → redirect to sign-in
  if (!userId) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  // ✅ Step 2: Check user in DB for role
  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (!user || (user.role !== "editor" && user.role !== "admin")) {
    return {
      redirect: { destination: "/", permanent: false },
    };
  }

  // ✅ Step 3: Load members
  const members: StrictMember[] = await prisma.member.findMany();

  const nodes: Node[] = members.map((m, i) => ({
    id: m.id,
    data: { label: m.name },
    position: { x: i * 150, y: m.parentId ? 100 : 0 },
  }));

  const edges: Edge[] = members
    .filter((m) => m.parentId)
    .map((m) => ({
      id: `e-${m.parentId}-${m.id}`,
      source: m.parentId!,
      target: m.id,
    }));

  return {
    props: {
      nodes,
      edges,
    },
  };
};

export default function Dashboard({ nodes, edges }: Props) {
  return (
    <main className="p-4">
      <UserMenu />
      <h1 className="text-xl font-bold mb-4">Family Tree</h1>
      <InviteForm />
      <EditMemberForm />
      <FamilyTree nodes={nodes} edges={edges} />
    </main>
  );
}
