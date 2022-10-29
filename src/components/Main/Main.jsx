
import { LIST_COPY, LIST_TYPES } from '../../config';
import Column from '../Column/Column';
import uniqid from 'uniqid';
import style from './Main.module.css'
const Main = ({ tasks, setTasks }) => {

  const addNewTask = (title) => {
    const newTask = {
      id: uniqid(),
      title,
      description : " ",
      created: new Date().toISOString(),
      status: LIST_TYPES.BACKLOG,
    }
    setTasks([...tasks, newTask])
  }


  return (
    <main className={style.main}>
      {Object.values(LIST_TYPES).map(type => {
        const listTasks = tasks.filter(task => task.status === type)
        return (
          <Column key={type} type={type} title={LIST_COPY[type]} tasks={listTasks} addNewTask={addNewTask} />
        )
      })}


    </main>
  );
}

export default Main;