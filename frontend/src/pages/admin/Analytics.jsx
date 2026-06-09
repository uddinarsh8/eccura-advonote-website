import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";

function Analytics() {

  const data = [
    {
      name: "Leads",
      value: 10
    },
    {
      name: "Contact",
      value: 6
    },
    {
      name: "Demo",
      value: 4
    }
  ];

  return (

    <div className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        Analytics
      </h1>

      <div
        style={{
          width: "100%",
          height: 400
        }}
      >

        <ResponsiveContainer>

          <BarChart data={data}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="value"
              fill="#2563eb"
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>

  );

}

export default Analytics;