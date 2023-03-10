import React from 'react'
import style from './cart.module.css';

export default function Items({ data, index, deleteProduct, updateProduct }) {

    const [address, setaddress] = React.useState(data.addressUser);
    const [count, setcount] = React.useState(data.count);

    function delProduct() {
        deleteProduct(index)
        alert('Xóa thành công')
    }
    function updProduct() {
        updateProduct(index, address, count)
    }

    function changeAddress(e) {
        setaddress(e.target.value)
    }

    function changeCount(e) {
        setcount(Number(e.target.value))
    }

    return (
        <tr>
            <th>{data.name}</th>
            <th><input onChange={changeAddress} value={address}></input></th>
            <th>{data.price}</th>
            <th><input onChange={changeCount} value={count}></input></th>
            <th>{data.sumPrice}</th>
            <th><i onClick={updProduct} className={`fa-solid fa-pen-to-square ${style.trash_icon}`}></i></th>
            <th><i className={`fa-solid fa-trash ${style.trash_icon}`} onClick={delProduct}></i></th>
        </tr>
    )
}
