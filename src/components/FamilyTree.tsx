import ReactFlow, {
  Background,
  Controls,
  Node,
  Edge,
  useNodesState,
  useEdgesState,
  NodeProps,
} from "reactflow";
import "reactflow/dist/style.css";

const CustomNode = ({ data }: NodeProps) => (
  <div className="bg-white border rounded px-2 py-1 shadow">
    <p>{data.label}</p>
    <div className="text-xs text-right">
      <button onClick={() => alert(`Edit ${data.label}`)}>✏️</button>
      <button onClick={() => alert(`Delete ${data.label}`)}>🗑️</button>
    </div>
  </div>
);

const nodeTypes = { custom: CustomNode };

export default function FamilyTree({
  nodes,
  edges,
}: {
  nodes: Node[];
  edges: Edge[];
}) {
  const customNodes = nodes.map((n) => ({ ...n, type: "custom" }));

  return (
    <div className="h-[90vh] w-full">
      <ReactFlow
        nodes={customNodes}
        edges={edges}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
