import style from './TaskDetails.module.css'
import { ReactComponent as CloseDetails } from '../../images/closeDetails.svg';
const TaskDetails = ({ title, description }) => {
  return (<div className={style.details_wrapper}>
    <div className={style.details_header}>
      <h2 className={style.details_title}>Main page – performance issues</h2>
      <CloseDetails className={style.details_close_btn} />
    </div>
    <p className={style.details_description}> Это был темный лес, издали казавшийся непроходимым.Там Пахапиль охотился, глушил рыбу, спал на еловых ветках.Короче – жил, пока русские не выгнали оккупантов.А когда немцы ушли, Пахапиль вернулся.Он появился в Раквере, где советский капитан наградил его медалью.Медаль была украшена четырьмя непонятными словами, фигурой и восклицательным знаком.  </p>
  </div>);
}

export default TaskDetails;