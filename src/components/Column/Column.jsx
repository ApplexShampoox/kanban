import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LIST_TYPES } from '../../config';
import AddButton from '../AddButton/AddButton';
import FormAddTask from '../FormAddTask/FormAddTask';
import style from './Column.module.css'

const Column = ({ title, type, tasks, addNewTask, allTasks, setTasks, prevTaskList }) => {



  const [addCard, setAddCard] = useState(false);

  const toggleAddCard = () => {
    setAddCard(!addCard);
  }
  const formSubmit = (title) => {
    addNewTask(title)
  }

  const changeStatus = (e, status) => {
    const tasksList = JSON.parse(window.localStorage.getItem('tasks'));
    const tasksCopy = tasksList.map((t) => {
      if (t.id === e.target.value) { t.status = status }
      return t
    });
    setTasks(tasksCopy);
    setAddCard(!addCard);
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
      {!addCard && type === LIST_TYPES.BACKLOG && <button className={style.column_add_button} onClick={toggleAddCard}>Add card</button>}




      {/* 2 column */}

      {addCard
        && type === LIST_TYPES.IN_PROGRESS
        &&
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setAddCard(false);
          }}
          className={style.option_form}>
          <select
            className={style.select}
            onChange={(e) => changeStatus(e, 'inProgress')}
            defaultValue={"default"}>
            <option
              className={style.option}
              value={"default"}>Select task</option>
            {prevTaskList.map(task => {
              return <option
                className={style.option}
                key={task.id}
                value={task.id}>{task.title}</option>
            })}
          </select>
        </form>
      }
      {!addCard
        && type !== LIST_TYPES.BACKLOG
        && <AddButton
          className={style.column_add_button}
          addCard={addCard}
          setAddCard={setAddCard}
          toggleAddCard={toggleAddCard}
          prevTaskList={prevTaskList}
        >Add card </AddButton>}




      {/* 3 column */}
      {addCard && type === LIST_TYPES.READY && <>
        <form onSubmit={(e) => {
          e.preventDefault();
          setAddCard(false);
        }
        } className={style.option_form}>
          <select className={style.select} onChange={(e) => changeStatus(e, 'ready')} defaultValue={"default"}>
            <option className={style.option} value={"default"}>Select task</option>
            {prevTaskList.map((task) => { return <option className={style.option} key={task.id} value={task.id} >{task.title}</option> })}
          </select>
        </form>
        {!addCard && type !== LIST_TYPES.BACKLOG && <AddButton className={style.column_add_button} addCard={addCard} setAddCard={setAddCard} toggleAddCard={toggleAddCard}>Add card</AddButton>}
      </>
      }

      {/* 4 column */}
      {addCard && type === LIST_TYPES.DONE &&
        <>
          <form onSubmit={(e) => {
            e.preventDefault();
            setAddCard(false)
          }
          } className={style.option_form}>
            <select
              className={style.select}
              onChange={(e) => changeStatus(e, 'done')}
              defaultValue={"default"}>
              <option
                className={style.option}
                value={"default"}>Select task</option>
              {prevTaskList.map((task) => {
                return <option
                  className={style.option}
                  key={task.id}
                  value={task.id}>{task.title}</option>
              })}
            </select>
          </form>
          {!addCard && type !== LIST_TYPES.BACKLOG && <AddButton className={style.column_add_button} addCard={addCard} setAddCard={setAddCard} toggleAddCard={toggleAddCard}>Add card</AddButton>}
        </>
      }


    </div >
  );
}

export default Column;