import style from './TaskList.module.css'
const TaskList = () => {
  return (
    <>
      <ul className={style.task_list}>
        <li className={style.task_list_element}>Login page – performance issues</li>
        <li className={style.task_list_element}>Sprint bugfix</li>
      </ul>
    </>);
}

export default TaskList;