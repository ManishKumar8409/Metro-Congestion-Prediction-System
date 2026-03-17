import { useState, useEffect } from "react";

const AICongestionPanel = () => {

  const [lines, setLines] = useState([
    { name: "Red Line", load: 45 },
    { name: "Blue Line", load: 70 },
    { name: "Yellow Line", load: 82 }
  ]);

  const predictRisk = (value) => {
    if (value < 50) return { label: "Low", color: "#22c55e" };
    if (value < 80) return { label: "Medium", color: "#facc15" };
    return { label: "Critical", color: "#ef4444" };
  };

  useEffect(() => {

    const interval = setInterval(() => {

      setLines(prev =>
        prev.map(line => ({
          ...line,
          load: Math.floor(Math.random() * 100)
        }))
      );

    }, 5000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="ai-panel">

      <h3>AI Congestion Prediction</h3>

      {lines.map((line, index) => {

        const risk = predictRisk(line.load);

        return (
          <div key={index} className="ai-row">

            <span>{line.name}</span>

            <div className="ai-bar">
              <div
                className="ai-fill"
                style={{
                  width: `${line.load}%`,
                  background: risk.color
                }}
              />
            </div>

            <span style={{ color: risk.color }}>
              {risk.label}
            </span>

          </div>
        );

      })}

    </div>
  );
};

export default AICongestionPanel;