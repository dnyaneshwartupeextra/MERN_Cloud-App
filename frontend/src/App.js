function App() {
  const testBackend = async () => {
    try {
      const response = await fetch("http://localhost:5000");
      const data = await response.text();
      alert(data);
    } catch (error) {
      alert("Backend connection failed");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>MERN Cloud Application</h1>
      <p>React Frontend</p>

      <button onClick={testBackend}>Test Backend</button>
    </div>
  );
}

export default App;
