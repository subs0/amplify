import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum NodeType {
  H_AUTHOR = "H_AUTHOR",
  H_TEAM = "H_TEAM",
  A_ARTICLE = "A_ARTICLE",
  A_PAGE = "A_PAGE",
  A_APPLICATION = "A_APPLICATION",
  C_SERIES = "C_SERIES",
  C_LIST = "C_LIST"
}

export enum NodeStatus {
  DRAFT = "DRAFT",
  REVIEWED = "REVIEWED",
  PUBLISHED = "PUBLISHED",
  EDITED = "EDITED",
  DELETED = "DELETED"
}

export enum EdgeType {
  AUTHORED = "AUTHORED",
  HAS_NEXT = "HAS_NEXT",
  HAS_PART = "HAS_PART",
  HAS_CHILD = "HAS_CHILD"
}

export enum AssetType {
  DEPRECATED = "DEPRECATED",
  A_IMAGE = "A_IMAGE",
  A_VIDEO = "A_VIDEO",
  A_AUDIO = "A_AUDIO",
  J_OPEN_GRAPH = "J_OPEN_GRAPH",
  T_BODY = "T_BODY",
  F_PDF = "F_PDF",
  F_KML = "F_KML",
  F_SHP = "F_SHP",
  F_CSV = "F_CSV"
}



export declare class Asset {
  readonly id: string;
  readonly node_id: string;
  readonly createdAt: string;
  readonly type: AssetType | keyof typeof AssetType;
  readonly name: string;
  readonly content?: string;
  constructor(init: ModelInit<Asset>);
  static copyOf(source: Asset, mutator: (draft: MutableModel<Asset>) => MutableModel<Asset> | void): Asset;
}

export declare class _Asset {
  readonly id: string;
  readonly node_id: string;
  readonly createdAt: string;
  readonly type: AssetType | keyof typeof AssetType;
  readonly name: string;
  readonly content?: string;
  constructor(init: ModelInit<_Asset>);
  static copyOf(source: _Asset, mutator: (draft: MutableModel<_Asset>) => MutableModel<_Asset> | void): _Asset;
}

export declare class Node {
  readonly id: string;
  readonly status: NodeStatus | keyof typeof NodeStatus;
  readonly type: NodeType | keyof typeof NodeType;
  readonly createdAt: string;
  readonly updatedAt: string;
  readonly assets?: (Asset | null)[];
  readonly _assets?: (_Asset | null)[];
  readonly edges?: (EdgeNode | null)[];
  constructor(init: ModelInit<Node>);
  static copyOf(source: Node, mutator: (draft: MutableModel<Node>) => MutableModel<Node> | void): Node;
}

export declare class EdgeNode {
  readonly id: string;
  readonly edge: Edge;
  readonly node: Node;
  constructor(init: ModelInit<EdgeNode>);
  static copyOf(source: EdgeNode, mutator: (draft: MutableModel<EdgeNode>) => MutableModel<EdgeNode> | void): EdgeNode;
}

export declare class Edge {
  readonly id: string;
  readonly type: EdgeType | keyof typeof EdgeType;
  readonly createdAt: string;
  readonly weight?: number;
  readonly nodes?: (EdgeNode | null)[];
  constructor(init: ModelInit<Edge>);
  static copyOf(source: Edge, mutator: (draft: MutableModel<Edge>) => MutableModel<Edge> | void): Edge;
}