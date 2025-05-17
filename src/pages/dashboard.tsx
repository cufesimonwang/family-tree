import { GetServerSideProps } from "next";
import { prisma } from "@/lib/prisma";
import FamilyTree from "@/components/FamilyTree";
import { Node, Edge } from "reactflow";
import { getAuth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import InviteForm from "@/components/InviteForm";
import EditMemberForm from "@/components/EditMemberForm";
import { useUser } from "@clerk/nextjs";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LanguageSwitcher from "@/components/LanguageSwitcher";

type Member = Awaited<ReturnType<typeof prisma.member.findFirst>>;
type StrictMember = NonNullable<Member>;

type Props = {
  nodes: Node[];
  edges: Edge[];
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const { userId } = getAuth(ctx.req);

  if (!userId) {
    return {
      redirect: {
        destination: "/sign-in",
        permanent: false,
      },
    };
  }

  const user = await prisma.user.findUnique({ where: { id: userId } });

  if (!user || (user.role !== "editor" && user.role !== "admin")) {
    return {
      redirect: { destination: "/", permanent: false },
    };
  }

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
      ...(await serverSideTranslations(ctx.locale ?? "en", ["common"])),
      nodes,
      edges,
    },
  };
};

export default function Dashboard({ nodes, edges }: Props) {
  const { user } = useUser();
  const { t } = useTranslation("common");

  return (
    <main className="p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-xl font-bold">{t("familyTree")}</h1>
          {user && (
            <p className="text-sm text-gray-600">
              {t("welcomeUser", { name: user.firstName })}
            </p>
          )}
        </div>
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>

      <InviteForm />
      <EditMemberForm />
      <FamilyTree nodes={nodes} edges={edges} />
    </main>
  );
}
