import React from "react";
import BlogCard from "../components/BlogCard";

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
    <div
      style={{
        marginTop: "8rem",
        fontSize: "3rem",
        color: "#046582",
        fontFamily: "Girassol",
        fontWeight: 800,
      }}
    >
      <h3>─── Dashboard ───</h3>
      <BlogCard />
    </div>
  );
};

export default Dashboard;
