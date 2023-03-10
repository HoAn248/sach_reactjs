import style from '../home.module.css'
import {Link } from 'react-router-dom'


function Buyer(){
    let dataProducts = localStorage.getItem('dataProducts');
    dataProducts = JSON.parse(dataProducts)
    return (
        <div className={style.buyer}>
            <Link to='/cart'>
            <div className={style.buyer_icon}>
                        <i className="fa-solid fa-cart-shopping">
                            <div>{dataProducts?dataProducts.length:0}</div>
                        </i>
                    </div>
            </Link>
                    

                </div>
    )
}
export default Buyer;