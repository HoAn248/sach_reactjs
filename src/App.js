//npm install react-router-dom@6


import Home from './componments/Home/Home'
import Cart from './componments/Cart/Cart';
import Register from "./componments/Login_register/Register";
import Login from "./componments/Login_register/Login";
import ViewProduct from "./componments/ViewProduct/ViewProduct";
import { Routes, Route, Navigate } from 'react-router-dom'
import ShowImage from './componments/ViewProduct/ShowImage';

function App() {

  return (
    // <Home></Home>
    <Routes>
      <Route path='/' element={<Navigate to='/login' />}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/register' element={<Register></Register>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
      <Route path='/view/:id' element={<ViewProduct></ViewProduct>}></Route>
      <Route path='/image/:id' element={<ShowImage></ShowImage>}></Route>

      <Route path='/*' element={<Navigate to='/login' />}></Route>

    </Routes>
  );
}

export default App;
// eslint-disable-next-line no-lone-blocks
{/*
- id
- tên sách
- ảnh sách
- đánh giá sách
- Giá sách
- Tác giả
- Tiêu đề sách
- Địa chỉ bán sách
- Thương hiệu sách


*/}
