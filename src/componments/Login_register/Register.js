import React from "react";
import style from './login.module.css'
import { Link } from 'react-router-dom'
import { checkEmail, checkPass, checkName, checkAddress } from '../utility'

function Register() {
    const [email, setemail] = React.useState('')
    const [password, setpassword] = React.useState('')
    const [repassword, setrepassword] = React.useState('')
    const [name, setname] = React.useState('')
    const [address, setaddress] = React.useState('')

    function changeEmail(e) {
        setemail(e.target.value.trim())
    }

    function changePassword(e) {
        setpassword(e.target.value.trim())
    }
    function changeRePassword(e){
        setrepassword(e.target.value.trim())
    }


    function changeName(e){
        setname(e.target.value.trim())
    }

    function changeAddress(e){
        setaddress(e.target.value.trim())
    }

    function checkBtn(){
        checkEmail(email)
        checkPass(password, repassword)
        checkName(name)
        checkAddress(address)
    }

    return (
        <div className={style.box}>

            <header>
                <Link to="/" className={style.logo}>
                    <img src="https://tse4.mm.bing.net/th?id=OIP.AwsJrIlgQMReIx7HVKCcwgHaHa&pid=Api&P=0" alt=""></img>
                </Link>
            </header>
            <main className={style.main}>
                <div className={style.container}>
                    <div className={style.signin}>
                        <h1>Sign up</h1>
                        <div className={style.form}>
                            <input type="text" placeholder="email" onChange={changeEmail}></input>
                            <input type="password" placeholder="password" onChange={changePassword}></input>
                            <input type="password" placeholder="Re-password" onChange={changeRePassword}></input>
                            <input type="text" placeholder="name" onChange={changeName}></input>
                            <input type="text" placeholder="address" onChange={changeAddress}></input>
                        </div>
                        <button onClick={checkBtn}>Sign up</button>
                    </div>
                    <div className={style.signup}>
                        <div>
                            <h2>Hello, friend!</h2>
                            <p>If you already have an account, please click here ^^!</p>
                            <button><Link to="/login">Sign in</Link></button>
                        </div>

                    </div>
                </div>
            </main>
        </div>
    )
}
export default Register;