import "./App.css";
import Header from "./components/Header";

function App() {
  console.log("hello");
  return (
    <>
      <Header />
      <h1 style={{ color: "red" }}>Je suis le titre</h1>
      <h2 style={{ color: "green" }}>Coucou</h2>
      <h3>Bonjour</h3>
      <h3 style={{ color: "blue" }}>Salut</h3>
    </>
  );
}

export default App;
