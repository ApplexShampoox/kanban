// import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import { useState } from "react";
import data from "./mock.json"
function App() {
  const [tasks, setTasks] = useState(data);
  return (
    <div className="App">
      <Header />
      <Main tasks={tasks} setTasks={setTasks} />
      <Footer activeTasks={8} finishedTasks={8} />
    </div>
  );
}

export default App;
