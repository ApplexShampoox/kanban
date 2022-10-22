
import { LIST_COPY, LIST_TYPES } from '../../config';
import Column from '../Column/Column';
import style from './Main.module.css'
const Main = props => {
  const { tasks, setTasks } = props
  return (
    <main className={style.main}>
      {Object.values(LIST_TYPES).map(type => {
        const listTasks = tasks.filter(task => task.status === type)
        return (
          <Column key={type} type={type} title={LIST_COPY[type]} tasks={listTasks} setTasks={setTasks} />
        )
      })}


    </main>
  );
}

export default Main;