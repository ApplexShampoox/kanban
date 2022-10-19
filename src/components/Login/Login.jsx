import style from './Login.module.css'
import UserAvatar from '../../images/user-menu.png';
import { useState } from 'react';

const Login = () => {

  const [isActive, setActive] = useState(false);

  const toggleClass = () => {
    setActive(!isActive);

  };
  return (<div className={style.login_wrapper}>
    <img src={UserAvatar} alt="user avatar" className={style.user_avatar} />
    <div className={isActive ? style.icon + ' ' + style.isopen : style.icon}
      onClick={toggleClass} ></div>
  </div>);
}

export default Login;