import React from 'react'
import style from '../home.module.css'
import {Link} from 'react-router-dom'

export default function Book({ book }) {
    return (
        <li>
            <div className={style.book_card} title={book.name}>
                        <img src={book.img} alt=""></img>
                        <div className={style.book_content}>
                            <h3>{book.name}</h3>
                            <h3>{book.star}<i className={`fa-solid fa-star ${style.star_active}`}></i></h3>
                            <p>{book.price}</p>
                            <button><Link to={`/view/${book.id}`}>Thêm vào giỏ ngay ^^</Link></button>
                        </div>
                    </div>
        </li>
    )
}



{/* <ul>
    <li>
        <div className={style.book_card}>
            <img src="https://salt.tikicdn.com/cache/750x750/ts/product/45/3b/fc/aa81d0a534b45706ae1eee1e344e80d9.jpg.webp" alt=""></img>
            <div className={style.book_content}>
                <h3>Nhà Giả Kim (Tái Bản 2020)</h3>
                <h3>4.8<i className={`fa-solid fa-star ${style.star_active}`}></i></h3>
                <p>Giá: 45.000đ</p>
                <button>Thêm vào giỏ ngay ^^</button>
            </div>
        </div>
    </li>
    <li>
        <div className={style.book_card}>
            <img src="https://salt.tikicdn.com/cache/750x750/ts/product/45/3b/fc/aa81d0a534b45706ae1eee1e344e80d9.jpg.webp" alt=""></img>
            <div className={style.book_content}>
                <h3>Nhà Giả Kim (Tái Bản 2020)</h3>
                <h3>4.8<i className={`fa-solid fa-star ${style.star_active}`}></i></h3>
                <p>Giá: 45.000đ</p>
                <button>Thêm vào giỏ ngay ^^</button>
            </div>
        </div>
    </li>
    <li>
        <div className={style.book_card}>
            <img src="https://salt.tikicdn.com/cache/750x750/ts/product/45/3b/fc/aa81d0a534b45706ae1eee1e344e80d9.jpg.webp" alt=""></img>
            <div className={style.book_content}>
                <h3>Nhà Giả Kim (Tái Bản 2020)</h3>
                <h3>4.8<i className={`fa-solid fa-star ${style.star_active}`}></i></h3>
                <p>Giá: 45.000đ</p>
                <button>Thêm vào giỏ ngay ^^</button>
            </div>
        </div>
    </li>
    <li>
        <div className={style.book_card}>
            <img src="https://salt.tikicdn.com/cache/750x750/ts/product/45/3b/fc/aa81d0a534b45706ae1eee1e344e80d9.jpg.webp" alt=""></img>
            <div className={style.book_content}>
                <h3>Nhà Giả Kim (Tái Bản 2020)</h3>
                <h3>4.8<i className={`fa-solid fa-star ${style.star_active}`}></i></h3>
                <p>Giá: 45.000đ</p>
                <button>Thêm vào giỏ ngay ^^</button>
            </div>
        </div>
    </li>
    <li>
        <div className={style.book_card}>
            <img src="https://salt.tikicdn.com/cache/750x750/ts/product/45/3b/fc/aa81d0a534b45706ae1eee1e344e80d9.jpg.webp" alt=""></img>
            <div className={style.book_content}>
                <h3>Nhà Giả Kim (Tái Bản 2020)</h3>
                <h3>4.8<i className={`fa-solid fa-star ${style.star_active}`}></i></h3>
                <p>Giá: 45.000đ</p>
                <button>Thêm vào giỏ ngay ^^</button>
            </div>
        </div>
    </li>
    <li>
        <div className={style.book_card}>
            <img src="https://salt.tikicdn.com/cache/750x750/ts/product/45/3b/fc/aa81d0a534b45706ae1eee1e344e80d9.jpg.webp" alt=""></img>
            <div className={style.book_content}>
                <h3>Nhà Giả Kim (Tái Bản 2020)</h3>
                <h3>4.8<i className={`fa-solid fa-star ${style.star_active}`}></i></h3>
                <p>Giá: 45.000đ</p>
                <button>Thêm vào giỏ ngay ^^</button>
            </div>
        </div>
    </li>
    <li>
        <div className={style.book_card}>
            <img src="https://salt.tikicdn.com/cache/750x750/ts/product/45/3b/fc/aa81d0a534b45706ae1eee1e344e80d9.jpg.webp" alt=""></img>
            <div className={style.book_content}>
                <h3>Nhà Giả Kim (Tái Bản 2020)</h3>
                <h3>4.8<i className={`fa-solid fa-star ${style.star_active}`}></i></h3>
                <p>Giá: 45.000đ</p>
                <button>Thêm vào giỏ ngay ^^</button>
            </div>
        </div>
    </li>
</ul> */}