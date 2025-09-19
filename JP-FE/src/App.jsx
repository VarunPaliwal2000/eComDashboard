import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import { ThemeProvider } from "./context/ThemeContext";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <ThemeProvider>
      <div className="flex">
        <Sidebar />
        <div className="flex-1 w-full flex flex-col min-h-screen">
          <Header />
          <Dashboard />
        </div>
        <Sidebar />
      </div>
    </ThemeProvider>
  );
}

export default App;
