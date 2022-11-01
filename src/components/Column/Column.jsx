import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LIST_TYPES } from '../../config';
import FormAddTask from '../FormAddTask/FormAddTask';
import style from './Column.module.css'


const Column = ({ title, type, tasks, addNewTask }) => {

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
      {tasks.map(task => {
        return (
          <Link key={task.id} className={style.task_list_element}>{task.title}</Link>
        )
      })}
      {addCard && type === LIST_TYPES.BACKLOG && <FormAddTask formSubmit={formSubmit} setAddCard={setAddCard} />}
      {!addCard && <button className={style.column_add_button} onClick={toggleAddCard}>Add card</button>}
    </div >
  );
}

export default Column;