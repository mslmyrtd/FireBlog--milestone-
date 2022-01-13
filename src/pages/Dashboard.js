import React from "react";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";

const Dashboard = () => {
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
