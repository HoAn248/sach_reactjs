import React from 'react';
import {Link} from 'react-router-dom'
import style from '../home.module.css'
function Logo(){
    return (
        <React.Fragment>
            <Link to="/login" className={style.logo}>
                    <img src="https://tse4.mm.bing.net/th?id=OIP.AwsJrIlgQMReIx7HVKCcwgHaHa&pid=Api&P=0" alt=""></img>
                </Link>
                
        </React.Fragment>
    )
}
export default Logo;