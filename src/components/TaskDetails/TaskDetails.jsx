import style from './TaskDetails.module.css'
import { ReactComponent as CloseDetails } from '../../images/closeDetails.svg';
import { Link, useParams } from 'react-router-dom';

const TaskDetails = ({ tasks, setTasks }) => {
  const { taskId } = useParams();
  const task = tasks.find(task => task.id === taskId)

  const handleChange = (e) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, description: e.target.value }
      }
      return task
    })
    setTasks(updatedTasks)
  }
  return (
    <div className={style.details_wrapper} onClick={handleChange}>
      {task ? (<>
        <div className={style.details_header}>
          <h2 className={style.details_title}>{task.title}</h2>
          <Link to='/'><CloseDetails className={style.details_close_btn} /></Link>
        </div>
        <textarea className={style.details_description}>{task.description || "This task has no description"}</textarea>
        <button onClick={handleChange}>Save</button>
      </>
      ) : (<div className={style.details_not_found} >
        <h2 className={style.details_title}>Task with ID {taskId} not found</h2>
        <Link to='/'><CloseDetails className={style.details_close_btn} /></Link>
      </div>
      )
      }
    </div>
  );
}

export default TaskDetails;