import ReactFlow from "reactflow";
import "reactflow/dist/style.css";

const nodes = [
  {
    id: "1",
    position: { x: 0, y: 100 },
    data: { label: "Central" },
    style: {
      background: "#fff",
      border: "3px solid #ef4444",
      borderRadius: "50%",
      width: 70,
      height: 70,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "12px"
    }
  },
  {
    id: "2",
    position: { x: 200, y: 100 },
    data: { label: "City Park" },
    style: {
      background: "#fff",
      border: "3px solid #ef4444",
      borderRadius: "50%",
      width: 70,
      height: 70,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "12px"
    }
  },
  {
    id: "3",
    position: { x: 400, y: 100 },
    data: { label: "Tech Hub" },
    style: {
      background: "#fff",
      border: "3px solid #ef4444",
      borderRadius: "50%",
      width: 70,
      height: 70,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "12px"
    }
  },
  {
    id: "4",
    position: { x: 600, y: 100 },
    data: { label: "Airport" },
    style: {
      background: "#fff",
      border: "3px solid #ef4444",
      borderRadius: "50%",
      width: 70,
      height: 70,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "12px"
    }
  }
];

const edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
    style: { stroke: "#ef4444", strokeWidth: 6 }
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    animated: true,
    style: { stroke: "#ef4444", strokeWidth: 6 }
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    animated: true,
    style: { stroke: "#ef4444", strokeWidth: 6 }
  }
];

const MetroNetwork = () => {
  return (
    <div style={{ height: 300 }}>
      <ReactFlow nodes={nodes} edges={edges} fitView />
    </div>
  );
};

export default MetroNetwork;