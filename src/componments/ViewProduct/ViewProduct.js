import React from "react";
import style from './viewProduct.module.css';
import { Link, useParams } from 'react-router-dom'
import data from "../book/books";


function ViewProduct() {
    let dataProducts = localStorage.getItem('dataProducts');

    dataProducts = JSON.parse(dataProducts)
    
    const [countCart, setcountCart] = React.useState(dataProducts?dataProducts.length:0)
    const [count, setcount] = React.useState(1)
    const [address, setaddress] = React.useState('')

    const { id } = useParams();
    
    let productID = Number(id);

    

    let product;

    data.forEach(e => {
        if (e.id === productID) {
            product = e;

            product['addressUser'] = address;
            product['count'] = count;
            product['sumPrice'] = e.price * count;
        }
    })

    function subtract() {
        if (count > 1) {
            setcount(count - 1)
        }
    }

    function add() {
        setcount(count + 1)

    }

    function changeValue(e) {
        console.log(e.target.value);
        setcount(Number(e.target.value))
    }

    function changeAddress(e) {
        setaddress(e.target.value);
    }

    function addCart() {
        if (address) {
            let isDatas = localStorage.getItem('dataProducts')
            let products = [];

            if (isDatas === null) {
                products.push(product)
                localStorage.setItem('dataProducts', JSON.stringify(products));
            } else {
                let database = localStorage.getItem('dataProducts')
                database = JSON.parse(database)

                database.push(product)

                localStorage.setItem('dataProducts', JSON.stringify(database))
            }
            
            setcountCart(JSON.parse(localStorage.getItem('dataProducts')).length)

            alert('Đặt hàng thành công, sản phẩm đang ở trong giỏ')

            console.log(product);
        }else{
            alert('Vui lòng nhập địa chỉ')
        }

    }

    return (
        <React.Fragment>
            <header>
                <Link to="/" className={style.logo}>
                    <img src="https://tse4.mm.bing.net/th?id=OIP.AwsJrIlgQMReIx7HVKCcwgHaHa&pid=Api&P=0" alt=""></img>
                </Link>
                <div className={style.search_box}>
                    <div className={style.search}>
                        <input type="text" placeholder="Tìm kiếm sách mà bạn muốn"></input>
                        <button><i className="fa-solid fa-magnifying-glass"></i>Tìm Kiếm</button>
                    </div>
                </div>
                <div className={style.user}>
                    <div>
                        <i className="fa-regular fa-user"></i>
                    </div>
                </div>
                <div className={style.buyer}>
                    <Link to='/cart'>
                        <div className={style.buyer_icon}>
                            <i className="fa-solid fa-cart-shopping">
                                <div>{countCart}</div>
                            </i>
                        </div>
                    </Link>

                </div>
            </header>

            <main>
                <div className={style.container}>
                    <Link to={`/image/${id}`} target='_blank' className={style.product_img}>
                        <img src={product.img}
                            alt=""></img>
                    </Link>
                    <div className={style.product_info}>
                        <h3>Tác giả: {product.author}</h3>
                        <h1>{product.name}</h1>
                        <div className={style.start_level}>
                            <span> {product.star}</span> <i className={`fa-solid fa-star ${style.star_active}`}></i>
                        </div>
                        <h2>Giá: {product.price}</h2>
                        <input onChange={changeAddress} className={style.address} type="text" placeholder="Địa chỉ giao hàng"></input>
                        <div className={style.order}>
                            <button onClick={subtract}>-</button>
                            <input type="text" onChange={changeValue} value={count}></input>
                            <button onClick={add}>+</button>
                        </div>
                        <button onClick={addCart} className={style.buy_product}>Mua hàng</button>
                    </div>
                </div>
                <hr></hr>
            </main>
        </React.Fragment>
    )
}
export default ViewProduct;