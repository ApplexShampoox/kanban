import style from './Footer.module.css'
const Footer = ({ activeTasks, finishedTasks }) => {
  return (
    <footer className={style.footer}>
      <div className={style.tasks_statistic}>
        <p>Active tasks: {activeTasks}</p>
        <p>Finished tasks: {finishedTasks}</p>
      </div>
      <p>Kanban board by Pavel Bolotov, 2022</p>
    </footer>
  );
}

export default Footer;