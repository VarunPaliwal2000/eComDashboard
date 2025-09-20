// import { products } from "../../mockData/dashboardData";

export default function TopSellingProductsTable({ darkMode ,products }) {
  const textColor = darkMode ? "#E5E7EB" : "#1C1C1C";
  const borderColor = darkMode ? "rgba(229, 231, 235, 0.4)" : "#1C1C1C66";

  return (
    <div>
      <div
        className="font-inter font-semibold text-[14px] leading-[20px] pb-2"
        style={{ color: textColor }}
      >
        Top Selling Products
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr
              className="font-inter font-semibold text-[14px] leading-[20px] border-b"
              style={{ color: textColor, borderColor }}
            >
              <th className="py-2 px-4 font-medium">Name</th>
              <th className="py-2 px-4 font-medium">Price</th>
              <th className="py-2 px-4 font-medium">Quantity</th>
              <th className="py-2 px-4 font-medium">Amount</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, idx) => (
              <tr key={idx} className="last:border-b-0" style={{ borderColor }}>
                <td className="py-2 px-4">
                  <p
                    className="font-inter font-normal text-xs leading-[18px]"
                    style={{ color: textColor }}
                  >
                    {item.name}
                  </p>
                </td>
                <td className="py-2 px-4">
                  <p
                    className="font-inter font-normal text-xs leading-[18px]"
                    style={{ color: textColor }}
                  >
                    ${item.price.toFixed(2)}
                  </p>
                </td>
                <td className="py-2 px-4">
                  <p
                    className="font-inter font-normal text-xs leading-[18px]"
                    style={{ color: textColor }}
                  >
                    {item.quantity}
                  </p>
                </td>
                <td className="py-2 px-4">
                  <p
                    className="font-inter font-normal text-xs leading-[18px]"
                    style={{ color: textColor }}
                  >
                    $
                    {item.amount.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
