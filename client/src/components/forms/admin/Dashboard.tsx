import "../../../css/admin/Dashboard.css";

export default function Dashboard() {
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
          <h3>Report money</h3>
          <div className="buttons">
            <button>12 Months</button>
            <button>6 Months</button>
            <button>30 Days</button>
            <button>7 Days</button>
            <button>Export PDF</button>
          </div>
          <div className="chart-placeholder">(Biểu đồ sẽ đặt ở đây)</div>
        </div>

        <div className="recent-box">
          <h3>Recent Customers</h3>
          <p>Lorem ipsum dolor sit amet.</p>
          <ul>
            <li>
              <div>👩 Jenny Wilson</div>
              <span>$11,234</span>
            </li>
            <li>
              <div>👨 Devon Lane</div>
              <span>$11,159</span>
            </li>
            <li>
              <div>👩 Jane Cooper</div>
              <span>$10,483</span>
            </li>
            <li>
              <div>👩‍🦰 Dianne Russell</div>
              <span>$9,084</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
