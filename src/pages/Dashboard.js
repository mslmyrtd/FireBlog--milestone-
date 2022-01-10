import React from "react";
import DashCard from "./DashCards";
// import { useEffect, useState } from "react";

const Dashboard = () => {
  // const [dashCard, setdasCard] = useState([]);
  // useEffect(() => {
  //   getDashCard();
  // }, []);
  // const getDashCard = () => {
  //   setdasCard()
  // };
  return (
    <div style={{ marginTop: "10rem" }}>
      <h3>---Dashboard---</h3>
      <DashCard />
    </div>
  );
};

export default Dashboard;
