import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./pages/Dashboard";
import "../src/assets/scss/Style.scss";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
