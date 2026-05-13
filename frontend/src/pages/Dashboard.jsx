function Dashboard() {

  const roadmap =
    JSON.parse(localStorage.getItem("roadmap")) || [];

  const completedSteps = roadmap.filter(
    (step) => step.completed
  ).length;

  const progress =
    roadmap.length > 0
      ? (completedSteps / roadmap.length) * 100
      : 0;

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

      <h1
        style={{
          textAlign: "center",
          color: "#38bdf8",
          marginBottom: "40px",
          fontSize: "40px",
        }}
      >
        Dashboard
      </h1>

      <div
        style={{
          maxWidth: "900px",
          margin: "auto",
        }}
      >

        {/* TOTAL TASKS */}

        <div style={cardStyle}>

          <h2 style={titleStyle}>
            Total Tasks
          </h2>

          <h1 style={numberStyle}>
            {roadmap.length}
          </h1>

        </div>

        {/* COMPLETED TASKS */}

        <div style={cardStyle}>

          <h2 style={titleStyle}>
            Completed Tasks
          </h2>

          <h1 style={numberStyle}>
            {completedSteps}
          </h1>

        </div>

        {/* PROGRESS */}

        <div style={cardStyle}>

          <h2 style={titleStyle}>
            Progress
          </h2>

          <div
            style={{
              width: "100%",
              height: "22px",
              background: "#334155",
              borderRadius: "10px",
              overflow: "hidden",
              marginTop: "15px",
            }}
          >

            <div
              style={{
                width: `${progress}%`,
                height: "100%",
                background: "#38bdf8",
                transition: "0.5s",
              }}
            ></div>

          </div>

          <p
            style={{
              marginTop: "10px",
              fontSize: "18px",
              color: "#e2e8f0",
            }}
          >
            {Math.round(progress)}% Completed
          </p>

        </div>

        {/* ROADMAP TASKS */}

        <div style={cardStyle}>

          <h2 style={titleStyle}>
            Your Roadmap
          </h2>

          {roadmap.length === 0 ? (

            <p style={{ color: "#cbd5e1" }}>
              No roadmap generated yet.
            </p>

          ) : (

            roadmap.map((step, index) => (

              <div
                key={index}
                style={{
                  background: "#334155",
                  padding: "15px",
                  borderRadius: "10px",
                  marginTop: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                }}
              >

                <input
                  type="checkbox"
                  checked={step.completed}
                  readOnly
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                />

                <p
                  style={{
                    fontSize: "18px",
                    textDecoration:
                      step.completed
                        ? "line-through"
                        : "none",

                    color:
                      step.completed
                        ? "#94a3b8"
                        : "white",
                  }}
                >
                  {step.title}
                </p>

              </div>

            ))

          )}

        </div>

        {/* MOTIVATION */}

        <div style={cardStyle}>

          <h2 style={titleStyle}>
            Motivation
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "18px",
              lineHeight: "30px",
            }}
          >
            Stay consistent 🚀 <br />
            Small progress every day leads to
            big success.
          </p>

        </div>

      </div>

    </div>

  );

}

const cardStyle = {
  background: "#1e293b",
  padding: "25px",
  borderRadius: "18px",
  marginBottom: "25px",
  boxShadow: "0px 0px 10px rgba(0,0,0,0.3)",
};

const titleStyle = {
  color: "#38bdf8",
  marginBottom: "15px",
};

const numberStyle = {
  color: "white",
  fontSize: "40px",
};

export default Dashboard;
