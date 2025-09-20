import { useContext } from "react";
import OrderListTableContainer from "../components/tables/OrderListTableContainer";
import ThemeContext from "../context/ThemeContext";

const OrderList = () => {
  const { darkMode } = useContext(ThemeContext);

  return <OrderListTableContainer darkMode={darkMode} />;
};

export default OrderList;
