import React from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import Navbar from "../components/Navbar";


const Dashboard: React.FC = () => {
 
  return (
    <>
      <Navbar />
      <div className="m-4 p-4 ">
        <h1>Task Dashboard</h1>
        <TaskForm />
        <TaskList />
      </div>
    </>
  );
};

export default Dashboard;
