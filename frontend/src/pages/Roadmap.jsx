import { useState, useEffect } from "react";
import axios from "axios";

function Roadmap() {

  const [goal, setGoal] = useState("");
  const [level, setLevel] = useState("");
  const [hours, setHours] = useState("");
  const [roadmap, setRoadmap] = useState([]);
  const [loading, setLoading] = useState(false);

  // LOAD SAVED ROADMAP
  useEffect(() => {

    const savedRoadmap =
      localStorage.getItem("roadmap");

    if (savedRoadmap) {
      setRoadmap(JSON.parse(savedRoadmap));
    }

  }, []);

  // SAVE ROADMAP
  useEffect(() => {

    localStorage.setItem(
      "roadmap",
      JSON.stringify(roadmap)
    );

  }, [roadmap]);

  // CALCULATE PROGRESS
  const completedSteps = roadmap.filter(
    (step) => step.completed
  ).length;

  const progress =
    roadmap.length > 0
      ? (completedSteps / roadmap.length) * 100
      : 0;

  // TOGGLE CHECKBOX
  const toggleComplete = (index) => {

    const updatedRoadmap = [...roadmap];

    updatedRoadmap[index].completed =
      !updatedRoadmap[index].completed;

    setRoadmap(updatedRoadmap);
  };

  // GENERATE ROADMAP
  const handleSubmit = async (e) => {

    e.preventDefault();

    setLoading(true);

    try {

      const response = await axios.post(
        "https://learningroadmap.onrender.com/generate-roadmap",
        {
          goal,
          level,
          hours,
        },
        {
          timeout: 30000,
        }
      );

      console.log(
        "ROADMAP DATA:",
        response.data
      );

      if (
        response.data &&
        response.data.length > 0
      ) {

        const updatedRoadmap =
          response.data.map((step) => ({
            ...step,
            completed: false,
          }));

        setRoadmap(updatedRoadmap);

      } else {

        alert("No roadmap received");

      }

    } catch (error) {

      console.log(error);

      alert("Backend connection failed");

    } finally {

      setLoading(false);

    }

  };

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        color: "white",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >

      <div
        style={{
          maxWidth: "800px",
          margin: "auto",
          background: "#1e293b",
          padding: "30px",
          borderRadius: "20px",
        }}
      >

        <h1
          style={{
            textAlign: "center",
            color: "#38bdf8",
            marginBottom: "30px",
            fontSize: "50px",
          }}
        >
          AI Learning Roadmap Generator
        </h1>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Enter your goal"
            value={goal}
            onChange={(e) =>
              setGoal(e.target.value)
            }
            style={inputStyle}
            required
          />

          <input
            type="text"
            placeholder="Enter your level"
            value={level}
            onChange={(e) =>
              setLevel(e.target.value)
            }
            style={inputStyle}
            required
          />

          <input
            type="number"
            placeholder="Hours per day"
            value={hours}
            onChange={(e) =>
              setHours(e.target.value)
            }
            style={inputStyle}
            required
          />

          <button
            type="submit"
            style={buttonStyle}
          >
            {loading
              ? "Generating..."
              : "Generate Roadmap"}
          </button>

        </form>

        {roadmap.length > 0 && (

          <div style={{ marginTop: "40px" }}>

            <h2
              style={{
                marginBottom: "15px",
              }}
            >
              Progress: {Math.round(progress)}%
            </h2>

            {/* PROGRESS BAR */}

            <div
              style={{
                width: "100%",
                height: "20px",
                background: "#334155",
                borderRadius: "10px",
                overflow: "hidden",
                marginBottom: "30px",
              }}
            >

              <div
                style={{
                  width: `${progress}%`,
                  height: "100%",
                  background: "#38bdf8",
                  transition: "0.3s",
                }}
              ></div>

            </div>

            {/* ROADMAP STEPS */}

            {roadmap.map((step, index) => (

              <div
                key={index}
                style={cardStyle}
              >

                <input
                  type="checkbox"
                  checked={step.completed}
                  onChange={() =>
                    toggleComplete(index)
                  }
                  style={{
                    width: "22px",
                    height: "22px",
                    cursor: "pointer",
                  }}
                />

                <h3
                  style={{
                    textDecoration:
                      step.completed
                        ? "line-through"
                        : "none",

                    color:
                      step.completed
                        ? "#94a3b8"
                        : "white",

                    margin: 0,
                  }}
                >
                  {step.title}
                </h3>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>

  );

}

const inputStyle = {

  width: "100%",
  padding: "18px",
  marginBottom: "20px",
  borderRadius: "12px",
  border: "1px solid #475569",
  background: "#0f172a",
  color: "white",
  fontSize: "18px",
  outline: "none",
  boxSizing: "border-box",

};

const buttonStyle = {

  width: "100%",
  padding: "18px",
  background: "#38bdf8",
  border: "none",
  borderRadius: "12px",
  color: "black",
  fontWeight: "bold",
  fontSize: "20px",
  cursor: "pointer",

};

const cardStyle = {

  background: "#334155",
  padding: "20px",
  borderRadius: "12px",
  marginBottom: "15px",
  display: "flex",
  alignItems: "center",
  gap: "15px",

};

export default Roadmap;
