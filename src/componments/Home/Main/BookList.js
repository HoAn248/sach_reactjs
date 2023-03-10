import React from 'react';
import style from '../home.module.css'
import Book from './Book';



function BookList({ data,renderProduct }) {

    return (
        <div className={style.book_items}>
            <ul className={style.menu_render}>
                <li title='all'  onClick={renderProduct}>Phổ biến</li>
                <li title='news' onClick={renderProduct}>Hàng mới</li>
                <li title='olds' onClick={renderProduct}>Hàng cũ</li>
            </ul>
            <div className={style.books}>
                <ul>
                    {data.map(e=><Book key={e.id} book={e}></Book>)}
                </ul>
            </div>
        </div>
    )
}
export default BookList;