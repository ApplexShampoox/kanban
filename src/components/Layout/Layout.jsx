import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet } from 'react-router-dom'
import style from './Layout.module.css'


const Layout = ({ tasks, setTasks }) => {
  return (
    <div className="App">
      <Header />
      <main className={style.main}>
        <Outlet />
      </main >
      <Footer activeTasks={8} finishedTasks={8} />
    </div>
  );
}

export default Layout;