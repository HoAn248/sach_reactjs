import ListCommand from './ListCommand'
import BookList from './BookList';
import style from '../home.module.css'
import data from '../../book/books'
import React from 'react';


function Main() {
    const [newData, setNewData] = React.useState(data);
    
    // React.useEffect(() => {
    //     fetch('https://63677e3cf5f549f052d66958.mockapi.io/test')
    //         .then(data => data.json())
    //         .then(data => {
    //             console.log(data);
    //             setNewData(data)

    //         })
    // }, [])




    function fillValue(array) {
        let keyArray = array[0]
        let valueArray = array[1]
        if (keyArray === 'address') {
            if (valueArray === 'all') {
                return data
            }
            return data.filter(e => e.address.toLowerCase().includes(valueArray.toLowerCase()))
        } else if (keyArray === 'star') {
            let star = Number(valueArray)
            return data.filter(e => e.star >= star)
        } else if (keyArray === 'th') {
            return data.filter(e => e.th.toLowerCase().includes(valueArray.toLowerCase()))
        } else if (keyArray === 'price') {
            let price = Number(valueArray)
            return data.filter(e => e.price <= price)
        }
        return []
    }


    const valueSelected = (value) => {
        setNewData(fillValue(value.split('!~')))
    }



    function renderProduct(e) {
        let value = e.target.title
        if (value === 'news') {
            let newArrays = data.filter(e => e.status === 'news')
            setNewData(newArrays)
        } else if (value === 'olds') {
            let newArrays = data.filter(e => e.status === 'olds')
            setNewData(newArrays)
        } else {
            setNewData(data)
        }
    }

    return (
        <main className={style.main}>

            <ListCommand valueSelected={valueSelected} ></ListCommand>
            <BookList data={newData} renderProduct={renderProduct}></BookList>

        </main>
    )
}
export default Main;