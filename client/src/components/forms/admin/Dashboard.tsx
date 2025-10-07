import "../../../css/admin/Dashboard.css";
// bieu do
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";
export default function Dashboard() {
  // bieu do
  const data = [
    { name: "Feb", value: 30000 },
    { name: "Mar", value: 35000 },
    { name: "Apr", value: 40000 },
    { name: "May", value: 42000 },
    { name: "Jun", value: 45591 },
    { name: "Jul", value: 43000 },
    { name: "Aug", value: 47000 },
    { name: "Sep", value: 49000 },
    { name: "Oct", value: 52000 },
    { name: "Nov", value: 50000 },
    { name: "Dec", value: 53000 },
    { name: "Jan", value: 55000 },
  ];
  return (
    <div className="dashboard">
      <div className="cards">
        <div className="card">
          <p>USER</p>
          <h2>1,500</h2>
          <span className="green">+36%</span>
        </div>

        <div className="card">
          <p>CATEGORY</p>
          <h2>500</h2>
          <span className="red">-14%</span>
        </div>

        <div className="card">
          <p>SPENDING</p>
          <h2>84,382</h2>
          <span className="green">+36%</span>
        </div>
        <div className="card">
          <p>TOTAL MONEY</p>
          <h2>33,493,022 $</h2>
          <span className="green">+36%</span>
        </div>
      </div>

      <div className="content">
        <div className="chart-box">
          {/* <h3>Report money</h3> */}
          <div className="buttons">
            <h3>Report money</h3>
            <button>12 Months</button>
            <button>6 Months</button>
            <button>30 Days</button>
            <button>7 Days</button>
            <button>Export PDF</button>
          </div>
          {/* bieu do */}
          <div className="chart">
            {" "}
            <div className="p-4 rounded-xl border shadow-sm bg-white">
              <div className="flex justify-between items-center mb-4">
                {/* <h2 className="font-semibold text-gray-800">Report Money</h2> */}
                <div className="flex gap-2">
                  {/* <button className="px-3 py-1 bg-black text-white rounded-md">
                    12 Months
                  </button>
                  <button className="px-3 py-1 border rounded-md">
                    6 Months
                  </button>
                  <button className="px-3 py-1 border rounded-md">
                    30 Days
                  </button>
                  <button className="px-3 py-1 border rounded-md">
                    7 Days
                  </button> */}
                </div>
              </div>

              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#3b82f6"
                    fill="#bfdbfe"
                  />
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke="#3b82f6"
                    strokeWidth={2}
                    dot
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* bieu do */}
        </div>
        {/* Recent-box */}
        <div className="recent-box">
          <div className="recent-text">
            <h3>Recent Customers</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <ul className="customers-list">
            <li>
              <img
                src="https://randomuser.me/api/portraits/women/1.jpg"
                alt="Jenny Wilson"
              />
              <div className="info">
                <h4>Jenny Wilson</h4>
                <p>jenny-wilson@gmail.com</p>
              </div>
              <div className="details">
                <span className="amount">$11,234</span>
                <span className="city">Austin</span>
              </div>
            </li>

            <li>
              <img
                src="https://randomuser.me/api/portraits/men/2.jpg"
                alt="Devon Lane"
              />
              <div className="info">
                <h4>Devon Lane</h4>
                <p>devon-lane@gmail.com</p>
              </div>
              <div className="details">
                <span className="amount">$11,159</span>
                <span className="city">New York</span>
              </div>
            </li>

            <li>
              <img
                src="https://randomuser.me/api/portraits/women/3.jpg"
                alt="Jane Cooper"
              />
              <div className="info">
                <h4>Jane Cooper</h4>
                <p>jane-cooper@gmail.com</p>
              </div>
              <div className="details">
                <span className="amount">$10,483</span>
                <span className="city">Toledo</span>
              </div>
            </li>

            <li>
              <img
                src="https://randomuser.me/api/portraits/women/4.jpg"
                alt="Dianne Russell"
              />
              <div className="info">
                <h4>Dianne Russell</h4>
                <p>dianne-russell@gmail.com</p>
              </div>
              <div className="details">
                <span className="amount">$9,084</span>
                <span className="city">Naperville</span>
              </div>
            </li>
          </ul>

          <button className="see-all">SEE ALL CUSTOMERS →</button>
        </div>
      </div>
    </div>
  );
}
