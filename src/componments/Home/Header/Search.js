import React from 'react';
import style from '../home.module.css'
import SeachItems from './SeachItems';
import book from '../../book/books'

function Search(){
    const [newsearch,setnewsearch] = React.useState([])

    function valueChange(e){
        let search = e.target.value.trim()
        if(search){
            setnewsearch(book.filter(e=> e.name.toLowerCase().includes(search.toLowerCase())))
        }else{
            setnewsearch([])
        }
        
    }
    return (
        <div className={style.search_box}>
                    <div className={style.search}>
                        <input onChange={valueChange}  type="text" placeholder="Tìm kiếm sách mà bạn muốn">
                        </input>
                        <button ><i className="fa-solid fa-magnifying-glass"></i>Tìm Kiếm</button>
                        <div className={style.search_item}>
                            <ul>
                                {newsearch.map(e => <SeachItems data ={e} key={e.id}></SeachItems>)}
                            </ul>
                        </div>
                    </div>
                </div>
    )
}
export default Search;