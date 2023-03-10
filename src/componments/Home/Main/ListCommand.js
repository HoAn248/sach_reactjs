import React from 'react';
import style from '../home.module.css'


function ListCommand({ valueSelected }) {


    const valueChange = (e) => {
        valueSelected(e.target.value)
    }

    return (
        <div className={style.list_books}>

            <ul>
                <h2>Nơi bán</h2>
                <li>
                    <input type="radio" name="choose" onClick={valueChange} value='address!~all' defaultChecked></input>
                    <span>Tất Cả</span>
                </li>
                <li>
                    <input type="radio" name="choose" onClick={valueChange} value='address!~Hồ Chí Minh' ></input>
                    <span>Hồ Chí Minh</span>
                </li>
                <li>
                    <input type="radio" name="choose" onClick={valueChange} value='address!~Hà Nội'></input>
                    <span>Hà Nội</span>
                </li>
                <li>
                    <input type="radio" name="choose" onClick={valueChange} value='address!~Đà Nẵng'></input>
                    <span>Đà Nẵng</span>
                </li>
                <li>
                    <input type="radio" name="choose" onClick={valueChange} value='address!~Gia Lai'></input>
                    <span>Gia Lai</span>
                </li>
            </ul>
            <hr></hr>
            <ul>
                <h2>Đánh giá</h2>
                <li ><input name='choose' value='star!~5' onClick={valueChange} type='radio'></input>
                    <i className={`fa-solid fa-star ${style.star_active}`}></i>
                    <i className={`fa-solid fa-star ${style.star_active}`}></i>
                    <i className={`fa-solid fa-star ${style.star_active}`}></i>
                    <i className={`fa-solid fa-star ${style.star_active}`}></i>
                    <i className={`fa-solid fa-star ${style.star_active}`}></i>
                    <span>Từ 5 sao</span>
                </li>
                <li >
                    <input name='choose' value='star!~4' onClick={valueChange} type='radio'></input>
                    <i className={`fa-solid fa-star ${style.star_active}`}></i>
                    <i className={`fa-solid fa-star ${style.star_active}`}></i>
                    <i className={`fa-solid fa-star ${style.star_active}`}></i>
                    <i className={`fa-solid fa-star ${style.star_active}`}></i>
                    <i className="fa-solid fa-star"></i>
                    <span>Từ 4 sao</span>
                </li>
                <li >
                    <input name='choose' value='star!~3' onClick={valueChange} type='radio'></input>
                    <i className={`fa-solid fa-star ${style.star_active}`}></i>
                    <i className={`fa-solid fa-star ${style.star_active}`}></i>
                    <i className={`fa-solid fa-star ${style.star_active}`}></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <span>Từ 3 sao</span>
                </li>
            </ul>
            <hr></hr>
            <ul>
                <h2>Thương hiệu</h2>
                <li>
                    <input name='choose' value='th!~Uyên Loan' type="radio" onClick={valueChange}></input>
                    <span>Uyên Loan</span>
                </li>
                <li>
                    <input name='choose' value='th!~Campus' type="radio" onClick={valueChange}></input>
                    <span>Campus</span>
                </li>
                <li>
                    <input name='choose' value='th!~Thiên Long' type="radio" onClick={valueChange}></input>
                    <span>Thiên Long</span>
                </li>
                <li>
                    <input name='choose' value='th!~Văn Lang' type="radio" onClick={valueChange}></input>
                    <span>Văn Lang</span>
                </li>
            </ul>
            <hr></hr>
            <ul>
                <h2>Giá</h2>
                <li>
                    <input type='radio' name='choose' value='price!~300000' onClick={valueChange}></input>
                    <span>dưới 300k</span>
                </li>
                <li>
                    <input type='radio' name='choose' value='price!~200000' onClick={valueChange}></input>
                    <span>dưới 200k</span>
                </li>
                <li>
                    <input type='radio' name='choose' value='price!~100000' onClick={valueChange}></input>
                    <span>dưới 100k</span>
                </li>
                <li>
                    <input type='radio' name='choose' value='price!~50000' onClick={valueChange}></input>
                    <span>dưới 50k</span>
                </li>
            </ul>
        </div>
    )
}
export default ListCommand;