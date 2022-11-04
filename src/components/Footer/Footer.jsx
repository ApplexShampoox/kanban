import style from './Footer.module.css'

const Footer = ({ tasks }) => {

  return (
    <footer className={style.footer}>
      <div className={style.tasks_statistic}>
        <p>Active tasks: {tasks.filter(task => task.status === "backlog").length}</p>
        <p>Finished tasks: {tasks.filter(task => task.status === "done").length}</p>
      </div>
      <p>Kanban board by Pavel Bolotov, 2022</p>
    </footer>
  );
}

export default Footer;