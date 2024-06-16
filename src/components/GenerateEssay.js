import React, { useState } from 'react';
import axios from 'axios';
import ReactFlow, { addEdge, Background, Controls, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css';
import '../styles/GenerateEssay.css'; // Ensure this path is correct

function GenerateEssay({ user }) {
  const [background1, setBackground1] = useState('');
  const [background2, setBackground2] = useState('');
  const [background3, setBackground3] = useState('');
  const [loading, setLoading] = useState(false);
  const [essay, setEssay] = useState(null);
  const [nodes, setNodes] = useState([
    { id: '1', type: 'input', data: { label: 'User Background' }, position: { x: 0, y: 0 } },
    { id: '2', data: { label: 'Essay Topic' }, position: { x: 200, y: 0 } },
    { id: '3', data: { label: 'Generated Essay' }, position: { x: 400, y: 0 } },
  ]);
  const [edges, setEdges] = useState([
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e2-3', source: '2', target: '3', animated: true },
  ]);

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5001/generate-essay', {
        userBackground: [background1, background2, background3],
        userId: user.uid,
      });

      const { topic, essay } = response.data;
      setEssay(essay);

      // Update nodes with generated content
      setNodes((nds) =>
        nds.map((node) => {
          if (node.id === '2') {
            node.data = { ...node.data, label: `Essay Topic: ${topic}` };
          } else if (node.id === '3') {
            node.data = { ...node.data, label: `Generated Essay: ${essay}` };
          }
          return node;
        })
      );
    } catch (error) {
      console.error('Error generating essay:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="generate-essay">
      <h2>Generate Essay</h2>
      <textarea
        value={background1}
        onChange={(e) => setBackground1(e.target.value)}
        placeholder="Describe your academic achievements and challenges..."
        rows={3}
        cols={50}
      />
      <textarea
        value={background2}
        onChange={(e) => setBackground2(e.target.value)}
        placeholder="Share a significant personal experience that has shaped your perspective..."
        rows={3}
        cols={50}
      />
      <textarea
        value={background3}
        onChange={(e) => setBackground3(e.target.value)}
        placeholder="What are your career aspirations and why?"
        rows={3}
        cols={50}
      />
      <button onClick={handleGenerate} disabled={loading}>
        {loading ? 'Generating...' : 'Generate'}
      </button>
      {essay && (
        <div className="essay-result">
          <h3>Your Essay</h3>
          <p>{essay}</p>
        </div>
      )}

      <div style={{ height: 500 }}>
        <ReactFlow nodes={nodes} edges={edges} fitView>
          <Background />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>
    </div>
  );
}

export default GenerateEssay;