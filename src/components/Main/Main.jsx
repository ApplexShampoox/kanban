import { LIST_COPY, LIST_TYPES } from '../../config';
import Column from '../Column/Column';
import uniqid from 'uniqid';

const Main = ({ tasks, setTasks }) => {

  const addNewTask = (title, description) => {
    const newTask = {
      id: uniqid(),
      title,
      description: '',
      created: new Date().toISOString(),
      status: LIST_TYPES.BACKLOG,
    }
    setTasks([...tasks, newTask])
  }

  return (
    <>
      {Object.values(LIST_TYPES).map(type => {
        const listTasks = tasks.filter(task => task.status === type)
        return (
          <Column key={type} type={type} title={LIST_COPY[type]} allTasks={tasks} tasks={listTasks} addNewTask={addNewTask} setTasks={setTasks} />
        )
      })}
    </>
  );
}

export default Main;