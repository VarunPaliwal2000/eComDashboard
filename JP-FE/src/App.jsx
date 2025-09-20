import { useEffect, useMemo } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import Header from "./components/header/Header";
import { ThemeProvider } from "./context/ThemeContext";
import Dashboard from "./pages/Dashboard";
import OrderList from "./pages/OrderList";
import setSideNavParams from "./utils/SetSidenavVisibilty";
import RightSidebar from "./components/sidebar/RightSidebar";
import Sidebar from "./components/sidebar/SideBar";

function AppContent() {
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  // useEffect(() => {}, [location.pathname, location.search, navigate]);
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
      console.log("navigatenavigate", newUrl.pathname, newUrl.searchParams);
      navigate(newUrl.pathname + newUrl.searchParams, { replace: true });
    }
    console.log(
      "newUrl",
      newUrl.pathname + newUrl.searchParams,
      window.location.search,
      location?.pathname
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname, JSON.stringify(location.search)]);

  // // Memoize reading of current params for Sidebar visibility
  const queryParams = useMemo(() => {
    const params = new URLSearchParams(location.search);
    return {
      leftsidenav: params.get("leftsidenav") === "true",
      rightsidenav: params.get("rightsidenav") === "true",
    };
  }, [location.search]);
  console.log("queryParams", queryParams, queryParams?.rightsidenav);

  return (
    <div className="flex h-full">
      {queryParams?.leftsidenav && <Sidebar />}
      <div className="flex-1 w-full flex flex-col">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboards/*" element={<Dashboard />} />
          <Route path="/pages/*" element={<OrderList />} />
          {/* Add additional routes here */}
        </Routes>
      </div>
      {queryParams?.rightsidenav && <RightSidebar />}
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
