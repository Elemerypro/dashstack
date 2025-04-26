import { useEffect, useState } from "react";
import Card from "../../Components/Card/Card";
import Charts from "../../Components/Chart/Chart";

const Dashboard = () => {
  const [usersKpis, setUserKpis] = useState([]);

  const fetchUsersKpis = async () => {
    const response = await fetch("/api/data");
    const result = await response.json();
    setUserKpis(result.data);
  };

  useEffect(() => {
    fetchUsersKpis();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {usersKpis.map((details) => (
          <Card key={details.id} cardDetails={details} />
        ))}
      </div>
      <div className="className p-10 bg-white rounded-xl m-5 shadow-xl">
        <div className="m-5">
          <h2 className="text-left mb-5 font-semibold text-xl">
            Sales Detailes
          </h2>
          <Charts />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
