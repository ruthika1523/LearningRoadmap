function Login() {

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "Arial",
      }}
    >

      <div
        style={{
          background: "#1e293b",
          padding: "40px",
          borderRadius: "20px",
          width: "350px",
          boxShadow: "0px 0px 15px rgba(0,0,0,0.4)",
        }}
      >

        <h1
          style={{
            color: "white",
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Login
        </h1>

        <input
          type="email"
          placeholder="Enter Email"
          style={inputStyle}
        />

        <input
          type="password"
          placeholder="Enter Password"
          style={inputStyle}
        />

        <button style={buttonStyle}>
          Login
        </button>

      </div>

    </div>

  );

}

const inputStyle = {
  width: "100%",
  padding: "14px",
  marginBottom: "15px",
  borderRadius: "10px",
  border: "none",
  outline: "none",
  background: "#334155",
  color: "white",
  fontSize: "16px",
};

const buttonStyle = {
  width: "100%",
  padding: "14px",
  background: "#38bdf8",
  color: "white",
  border: "none",
  borderRadius: "10px",
  fontSize: "16px",
  fontWeight: "bold",
  cursor: "pointer",
};

export default Login;
