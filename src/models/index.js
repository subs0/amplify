// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const NodeType = {
  "H_AUTHOR": "H_AUTHOR",
  "H_TEAM": "H_TEAM",
  "A_ARTICLE": "A_ARTICLE",
  "A_PAGE": "A_PAGE",
  "A_APPLICATION": "A_APPLICATION",
  "C_SERIES": "C_SERIES",
  "C_LIST": "C_LIST"
};

const NodeStatus = {
  "DRAFT": "DRAFT",
  "REVIEWED": "REVIEWED",
  "PUBLISHED": "PUBLISHED",
  "EDITED": "EDITED",
  "DELETED": "DELETED"
};

const EdgeType = {
  "AUTHORED": "AUTHORED",
  "HAS_NEXT": "HAS_NEXT",
  "HAS_PART": "HAS_PART",
  "HAS_CHILD": "HAS_CHILD"
};

const AssetType = {
  "DEPRECATED": "DEPRECATED",
  "A_IMAGE": "A_IMAGE",
  "A_VIDEO": "A_VIDEO",
  "A_AUDIO": "A_AUDIO",
  "J_OPEN_GRAPH": "J_OPEN_GRAPH",
  "T_BODY": "T_BODY",
  "F_PDF": "F_PDF",
  "F_KML": "F_KML",
  "F_SHP": "F_SHP",
  "F_CSV": "F_CSV"
};

const { Asset, _Asset, Node, EdgeNode, Edge } = initSchema(schema);

export {
  Asset,
  _Asset,
  Node,
  EdgeNode,
  Edge,
  NodeType,
  NodeStatus,
  EdgeType,
  AssetType
};