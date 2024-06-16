import React, { useState, useCallback } from 'react';
import ReactFlow, { ReactFlowProvider, addEdge, MiniMap, Controls, Background } from 'react-flow-renderer';

const initialElements = [
  { id: '1', type: 'input', data: { label: 'Start' }, position: { x: 250, y: 0 } },
  { id: '2', data: { label: 'Provide Academic Background' }, position: { x: 100, y: 100 } },
  { id: '3', data: { label: 'Share Personal Experience' }, position: { x: 400, y: 100 } },
  { id: '4', data: { label: 'State Career Aspirations' }, position: { x: 250, y: 200 } },
  { id: '5', type: 'output', data: { label: 'Generate Essay' }, position: { x: 250, y: 300 } },
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3', animated: true },
  { id: 'e2-4', source: '2', target: '4', animated: true },
  { id: 'e3-4', source: '3', target: '4', animated: true },
  { id: 'e4-5', source: '4', target: '5', animated: true }
];

const Workflow = () => {
  const [elements, setElements] = useState(initialElements);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);

  const onConnect = (params) => setElements((els) => addEdge(params, els));

  const onLoad = (rfi) => {
    setReactFlowInstance(rfi);
    rfi.fitView();
  };

  return (
    <div style={{ height: 500 }}>
      <ReactFlowProvider>
        <ReactFlow
          elements={elements}
          onConnect={onConnect}
          onLoad={onLoad}
          style={{ width: '100%', height: '100%' }}
        >
          <MiniMap />
          <Controls />
          <Background />
        </ReactFlow>
      </ReactFlowProvider>
    </div>
  );
};

export default Workflow;