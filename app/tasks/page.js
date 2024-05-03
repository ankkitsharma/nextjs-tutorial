// import TaskForm from "@/components/TaskForm";
import TaskList from "@/components/TaskList";
import TaskFormCustom from "@/components/TaskFormCustom";
import React from "react";

const TasksPage = () => {
  return (
    <div className="max-w-lg">
      {/* <TaskForm /> */}
      <TaskFormCustom />
      <TaskList />
    </div>
  );
};

export default TasksPage;
