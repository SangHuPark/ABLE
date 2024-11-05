import { Node, Edge } from '@xyflow/react';

export const initialNodes: Node[] = [
  {
    id: '1',
    type: 'custom',
    position: { x: 50, y: 50 },
    data: {
      block: {
        type: 'data',
        name: 'data',
        fields: [
          { name: 'data_path', isRequired: true },
          { name: 'input_shape', isRequired: true },
          { name: 'classes', isRequired: true },
        ],
      },
    },
  },
];

export const initialEdges: Edge[] = [];
