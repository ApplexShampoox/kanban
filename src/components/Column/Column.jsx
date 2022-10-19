import TaskList from '../TaskList/TaskList';
import style from './Column.module.css'

const Column = ({ columnTitle }) => {
  return (
    <div className={style.column}>
      <h2 className={style.column_title}>{columnTitle}</h2>
      <TaskList />
      <button className={style.column_add_button}>Add card</button>
    </div>
  );
}

export default Column;