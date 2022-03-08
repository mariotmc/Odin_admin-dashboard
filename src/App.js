import "./styles/dist/style.css";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <Sidebar></Sidebar>
      <div className="wrapper">
        <Header></Header>
        <Dashboard></Dashboard>
      </div>
    </>
  );
}

export default App;
