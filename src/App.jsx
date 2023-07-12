import "./App.css";
import Card from "./components/Card";
import ShowHide from "./components/ShowHide";
function App() {
  return (
    <>
      <div className="App">
        <h1>Hola React!</h1>
        <div className="container">
          <Card title="Titulo" description="Descripcion"/>
          <Card title="Titulo2" description="Descripcion"/>
          <Card />
        </div>
        <ShowHide />
      </div>
    </> 
  );
}

export default App;
