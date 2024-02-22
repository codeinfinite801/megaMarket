import { useQuery } from "@tanstack/react-query";
import { PieChart, Pie, Cell, Legend } from "recharts";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { FaSearch } from "react-icons/fa";

const AdminDashboard = () => {
  const axiosPublic = useAxiosPublic();
  const { data: countData = [] } = useQuery({
    queryKey: ["countData"],
    queryFn: async () => {
      const res = await axiosPublic.get("/count-data");
      return res?.data;
    },
  });

  const data = [
    { name: "Books", value: countData?.Books },
    { name: "Electronics", value: countData?.electronics },
    { name: "Kids", value: countData?.kidsItem },
    { name: "Others", value: countData?.othersItem },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div>
      <div className="bg-[#FF5001] w-full h-24 -mt-4 flex items-center justify-center">
        <p className="flex input input-bordered md:w-full max-w-2xl items-center gap-3">
          <FaSearch />
          <input type="text" placeholder="Search here" className="" />
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8 p-5">
        <div className="shadow-lg">
          <h2 className="mt-3 text-4xl font-bold">Total Sales</h2>
          <p className="font-bold text-4xl my-8 text-orange-500">
            $ {countData?.totalPrice}
          </p>
        </div>
        <div className="shadow-lg my-2 rounded-lg text-center ">
          <h2 className="mt-3 text-4xl font-bold">Total Data in our project</h2>
          <PieChart width={300} height={300} className="mx-auto ">
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={90}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend className="" />
          </PieChart>
        </div>
        <div className="shadow-lg">
          <h2 className="mt-3 text-3xl font-bold">Total Subscribers</h2>
          <p className="font-bold text-4xl my-8 text-orange-500">
            {" "}
            {countData?.user}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
