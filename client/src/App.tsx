import Dashboard from "./components/forms/admin/Dashboard";
import Navbar from "./components/forms/common/Navbar";
import Sidebar from "./components/forms/common/Sidebar";
import "./App.css";

function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <div className="main-layout">
        <Sidebar />
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
