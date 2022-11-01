
import Main from "./components/Main/Main";
import { useState } from "react";
import data from "./mock.json"
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import TaskDetails from "./components/TaskDetails/TaskDetails";

function App() {
  const [tasks, setTasks] = useState(data);

  return (
    <Routes>
      <Route path='/' element={<Layout tasks={tasks} setTasks={setTasks} />}>
        <Route index element={<Main tasks={tasks} setTasks={setTasks} />} />
        <Route path={'/tasks/:taskId'} element={<TaskDetails tasks={tasks} setTasks={setTasks} />} />
      </Route>
    </Routes>

  );
}

export default App;
