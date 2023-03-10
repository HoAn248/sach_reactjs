import React from 'react'
import data from '../book/books'
import { useParams } from 'react-router-dom'
import style from './viewProduct.module.css';

export default function ShowImage() {
    const { id } = useParams();
    let newData;
    for (let i = 0; i < data.length; i++) {
        if (data[i].id === Number(id)) {
            newData = data[i]
        }
    }
  return (
    <div className={style.image_container}>
        <img src={newData.img} alt=''></img>
    </div>
  )
}
