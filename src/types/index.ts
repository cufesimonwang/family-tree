export interface Member {
  id: string;
  name: string;
  birthDate: Date;
  parentId: string | null;
  children: Member[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Node {
  id: string;
  type: string;
  data: {
    label: string;
    member?: Member;
  };
  position: {
    x: number;
    y: number;
  };
}

export interface Edge {
  id: string;
  source: string;
  target: string;
  type?: string;
}
