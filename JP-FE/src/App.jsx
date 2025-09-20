import { useContext, useEffect, useMemo } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Header from "./components/header/Header";
import RightSidebar from "./components/sidebar/RightSidebar";
import Sidebar from "./components/sidebar/SideBar";
import ThemeContext, { ThemeProvider } from "./context/ThemeContext";
import Dashboard from "./pages/Dashboard";
import OrderList from "./pages/OrderList";
import setSideNavParams from "./utils/SetSidenavVisibilty";

function AppContent() {
  const location = useLocation();
  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext); 

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "#121212"; 
      document.body.style.color = "#E5E7EB"; 
    } else {
      document.body.style.backgroundColor = "#ffffff"; 
      document.body.style.color = "#1C1C1C";
    }

    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.color = "";
    };
  }, [darkMode]);
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/dashboards/default/overview" + location.search, {
        replace: true,
      });
    }
    const newUrl = setSideNavParams({
      pathname: location.pathname,
      search: location.search,
    });
    if (newUrl.search !== window.location.search && location.pathname !== "/") {
      navigate(newUrl.pathname + newUrl.searchParams, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, JSON.stringify(location.search)]);

  const queryParams = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return {
      leftsidenav: params.get("leftsidenav") === "true",
      rightsidenav: params.get("rightsidenav") === "true",
    };
  }, [location.search]);

  return (
    <div
      className={`flex bg-${darkMode ? "[#121212]" : "white"} text-${
        darkMode ? "gray-200" : "gray-900"
      }`}
    >
      {queryParams?.leftsidenav && <Sidebar darkMode={darkMode} />}
      <div
        className="flex-1 w-full flex flex-col"
        style={{
          backgroundColor: darkMode ? "#121212" : "#fff",
          minHeight: "100vh",
        }}
      >
        <Header darkMode={darkMode} />
        <Routes>
          <Route path="/" element={<Dashboard darkMode={darkMode} />} />
          <Route
            path="/dashboards/*"
            element={<Dashboard darkMode={darkMode} />}
          />
          <Route path="/pages/*" element={<OrderList darkMode={darkMode} />} />
        </Routes>
      </div>
      {queryParams?.rightsidenav && <RightSidebar darkMode={darkMode} />}
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
