import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { transactionsData } from "../data/transactionsData";

const COLORS = ["#4F46E5", "#22C55E", "#F59E0B", "#EF4444", "#06B6D4"];
 const getCategoryData = (transactions) => {
  const categoryMap = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    }
  });

  return Object.keys(categoryMap).map((key) => ({
    name: key,
    value: categoryMap[key],
  }));
};
const CategoryPieChart = () => {
  const data = getCategoryData(transactionsData);
 

  return (
    <div className="w-full h-75">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CategoryPieChart;