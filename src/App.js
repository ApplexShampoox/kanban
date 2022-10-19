// import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer activeTasks={8} finishedTasks={8} />
    </div>
  );
}

export default App;
