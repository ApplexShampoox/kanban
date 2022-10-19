import Column from '../Column/Column';
import style from './Main.module.css'
const Main = () => {
  return (
    <main className={style.main}>
      <Column columnTitle={'Backlog'} />
      <Column columnTitle={'Ready'} />
      <Column columnTitle={'In Progress'} />
      <Column columnTitle={'Finished'} />
    </main>
  );
}

export default Main;