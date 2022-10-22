import { useState } from 'react';
import { LIST_TYPES } from '../../config';
import style from './Column.module.css'
const Column = ({ title, type, tasks, setTasks }) => {

  const [addCard, setAddCard] = useState(false);
  const toggleAddCard = () => {
    setAddCard(!addCard)
  }
  return (
    <div className={style.column}>
      <h2 className={style.column_title}>{title}</h2>
      {tasks.map(task => {
        return (
          <div key={task.id} className={style.task_list_element}>{task.title}</div>
        )
      })}
      {addCard && type === LIST_TYPES.BACKLOG && <input className={style.column_textarea} />}
      <button className={addCard ? style.column_add_button + ' ' + style.active : style.column_add_button} onClick={toggleAddCard}>{addCard ? 'Submit' : 'Add card'}</button>
    </div >
  );
}

export default Column;