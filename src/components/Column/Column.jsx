import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LIST_TYPES } from '../../config';
import FormAddTask from '../FormAddTask/FormAddTask';
import style from './Column.module.css'

const Column = ({ title, type, tasks, addNewTask, allTasks }) => {

  const [addCard, setAddCard] = useState(false);
  const toggleAddCard = () => {
    setAddCard(!addCard)
  }
  const formSubmit = (title) => {
    addNewTask(title)
  }

  return (
    <div className={style.column}>
      <h2 className={style.column_title}>{title}</h2>
      {tasks.length === 0 && <p className={style.empty_column}>No tasks added yet</p>}
      {tasks.map(task => {
        return (
          <Link to={`/tasks/${task.id}`} className={style.link} >
            <div key={task.id} className={style.task_list_element}>{task.title}</div>
          </Link>
        )
      })}
      {addCard && type === LIST_TYPES.BACKLOG && <FormAddTask formSubmit={formSubmit} setAddCard={setAddCard} />}
      {addCard && type === LIST_TYPES.IN_PROGRESS &&
        <form onSubmit={(e) => {
          e.preventDefault();
          setAddCard(false)
        }
        }>
          <select>
            {allTasks.filter(task => task.status === "backlog").map((task) => { return <option key={task.id}>{task.title}</option> })}
          </select>
          <button className={style.column_add_button} type='submit'>Submit</button>
        </form>
      }
      {addCard && type === LIST_TYPES.READY && <form onSubmit={(e) => {
        e.preventDefault();
        setAddCard(false)
      }
      }>
        <select>
          {allTasks.filter(task => task.status === "inProgress").map((task) => { return <option key={task.id}>{task.title}</option> })}
        </select>
        <button className={style.column_add_button} type='submit'>Submit</button>
      </form>}
      {addCard && type === LIST_TYPES.DONE && <form onSubmit={(e) => {
        e.preventDefault();
        setAddCard(false)
      }
      }>
        <select>
          {allTasks.filter(task => task.status === "ready").map((task) => { return <option key={task.id}>{task.title}</option> })}
        </select>
        <button className={style.column_add_button} type='submit'>Submit</button>
      </form>}

      {!addCard && <button className={style.column_add_button} onClick={toggleAddCard}>Add card</button>}
    </div >
  );
}

export default Column;