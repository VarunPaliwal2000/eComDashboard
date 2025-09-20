const products = [
  {
    name: "ASOS Ridley High Waist",
    price: 79.49,
    quantity: 82,
    amount: 6518.18,
  },
  {
    name: "Marco Lightweight Shirt",
    price: 128.5,
    quantity: 37,
    amount: 4754.5,
  },
  {
    name: "Half Sleeve  Shirt",
    price: 39.99,
    quantity: 64,
    amount: 2559.36,
  },
  {
    name: "Lightweight Jacket",
    price: 20.0,
    quantity: 184,
    amount: 3680.0,
  },
  {
    name: "Marco Shoes",
    price: 79.49,
    quantity: 64,
    amount: 1965.81,
  },
];

export default function TopSellingProductsTable() {
  return (
    <div className="">
      <div className="font-inter font-semibold text-[14px] leading-[20px] pb-2">
        Top Selling Products
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr className="font-inter font-semibold text-[14px] leading-[20px] border-b text-[#1C1C1C66] border-[#1C1C1C66]">
              <th className="py-2 px-4 font-medium">Name</th>
              <th className="py-2 px-4 font-medium">Price</th>
              <th className="py-2 px-4 font-medium">Quantity</th>
              <th className="py-2 px-4 font-medium">Amount</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, idx) => (
              <tr key={idx} className="last:border-b-0">
                <td className="py-2 px-4">
                  <p className="font-inter font-normal text-xs leading-[18px]">
                    {item.name}
                  </p>
                </td>
                <td className="py-2 px-4">
                  <p className="font-inter font-normal text-xs leading-[18px]">
                    ${item.price.toFixed(2)}
                  </p>
                </td>
                <td className="py-2 px-4">
                  <p className="font-inter font-normal text-xs leading-[18px]">
                    {item.quantity}
                  </p>
                </td>
                <td className="py-2 px-4">
                  <p className="font-inter font-normal text-xs leading-[18px]">
                    $
                    {item.amount.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                    })}
                  </p>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
