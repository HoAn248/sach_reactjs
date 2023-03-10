
import React from 'react'

import style from './cart.module.css';

import { Link } from 'react-router-dom'
import Items from './Items';

import { sumPrice, makeid } from '../utility';

function Cart() {

    let dataProducts = localStorage.getItem('dataProducts');
    dataProducts = JSON.parse(dataProducts)

    const [data, setdata] = React.useState(dataProducts)


    function deleteProduct(index) {
        let dataProducts = localStorage.getItem('dataProducts');
        dataProducts = JSON.parse(dataProducts)
        dataProducts.splice(index, 1)
        localStorage.setItem('dataProducts', JSON.stringify(dataProducts))
        setdata(dataProducts)
    }

    function updateProduct(index, address, count) {
        let dataProducts = localStorage.getItem('dataProducts');
        dataProducts = JSON.parse(dataProducts)
        dataProducts[index].count = count;
        dataProducts[index].addressUser = address;
        dataProducts[index].sumPrice = dataProducts[index].price * count
        localStorage.setItem('dataProducts', JSON.stringify(dataProducts))

        setdata(dataProducts)
        alert('Lưu thành công')
    }

    function delAllProducts() {
        localStorage.clear();
        setdata([])
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
                    <div className={style.buyer_icon}>
                        <i className="fa-solid fa-cart-shopping">
                            <div>{data ? data.length : 0}</div>
                        </i>
                    </div>

                </div>
            </header>
            <main>
                <div className={style.container}>
                    <div className={style.all_product}>
                        <table>
                            <caption><h1>Sản phẩm trong giỏ</h1></caption>
                            <tbody>
                                <tr>
                                    <th className={style.bold_items}>Đơn giá</th>
                                    <th className={style.bold_items}>Địa chỉ liên hệ</th>
                                    <th className={style.bold_items}>Giá sản phẩm</th>
                                    <th className={style.bold_items}>Số lượng</th>
                                    <th className={style.bold_items}>Thành tiền</th>
                                </tr>

                                {data ? data.map((e, i) => <Items data={e} deleteProduct={deleteProduct} updateProduct={updateProduct} index={i} key={makeid()}></Items>) : console.log('k')}

                                <tr>
                                    <th colSpan="3">Tổng cộng: {data ? sumPrice(data) : 0}</th>
                                    <th><i onClick={delAllProducts} title="Xóa tất cả sản phẩm" className={`fa-solid fa-trash ${style.trash_icon}`}></i></th>
                                </tr>



                            </tbody>
                        </table>


                    </div>
                </div>
            </main>
        </React.Fragment>

    )
}
export default Cart;