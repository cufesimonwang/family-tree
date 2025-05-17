"use client";
import React, { useCallback } from "react";
import ReactFlow, { Background, Controls, Node, Edge } from "reactflow";
import "reactflow/dist/style.css";

type Props = {
  nodes: Node[];
  edges: Edge[];
};

export default function FamilyTree({ nodes, edges }: Props) {
  return (
    <div className="h-[90vh] w-full border rounded bg-white">
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}
