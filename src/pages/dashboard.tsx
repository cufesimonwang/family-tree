import { GetServerSideProps } from "next";
import { prisma } from "@/lib/prisma";
import FamilyTree from "@/components/FamilyTree";
import { Node, Edge } from "reactflow";

type Member = Awaited<ReturnType<typeof prisma.member.findFirst>>;
type StrictMember = NonNullable<Member>;



type Props = {
  nodes: Node[];
  edges: Edge[];
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
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
      <h1 className="text-xl font-bold mb-4">Family Tree</h1>
      <FamilyTree nodes={nodes} edges={edges} />
    </main>
  );
}
