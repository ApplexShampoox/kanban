
import { LIST_COPY, LIST_TYPES } from '../../config';
import Column from '../Column/Column';
import uniqid from 'uniqid';
// import style from './Main.module.css'
// import TaskDetails from '../TaskDetails/TaskDetails';
const Main = ({ tasks, setTasks }) => {

  const addNewTask = (title) => {
    const newTask = {
      id: uniqid(),
      title,
      description: " ",
      created: new Date().toISOString(),
      status: LIST_TYPES.BACKLOG,
    }
    setTasks([...tasks, newTask])
  }



  // return (
  //   <main className={style.main}>
  //     <TaskDetails />
  //   </main>
  // );

  return (
    <>
      {Object.values(LIST_TYPES).map(type => {
        const listTasks = tasks.filter(task => task.status === type)
        return (
          <Column key={type} type={type} title={LIST_COPY[type]} tasks={listTasks} addNewTask={addNewTask} />
        )
      })}
    </>
  );
}

export default Main;