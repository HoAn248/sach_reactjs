import React from 'react';
import style from './login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { checkEmail, checkPass } from '../utility'

function Login() {
    const [email, setemail] = React.useState('')
    const [password, setpassword] = React.useState('')
    const navigate = useNavigate()
    
    function changeEmail(e) {
        setemail(e.target.value.trim())
    }

    function changePassword(e) {
        setpassword(e.target.value.trim())
    }

    function checkBtn() {

        if (checkEmail(email) && checkPass(password)) {
            alert('Đăng nhập thành công')

            navigate('/home')
        }
    }

    return (
        <React.Fragment>
            <div className={style.box}>
                <header>
                    <Link to="/" className={style.logo}>
                        <img src="https://tse4.mm.bing.net/th?id=OIP.AwsJrIlgQMReIx7HVKCcwgHaHa&pid=Api&P=0" alt=""></img>
                    </Link>
                </header>
                <main className={style.main}>
                    <div className={style.container}>
                        <div className={style.signin}>
                            <h1>Sign in</h1>
                            <div className={style.connect_with_gg}>
                                <img src="./image/fb.png" alt=""></img>
                                <img src="./image/gg.png" alt=""></img>
                                <img src="./image/in.png" alt=""></img>
                            </div>
                            <p>of use your account</p>
                            <div className={style.form}>
                                <input type="text" placeholder="email" name='email' onChange={changeEmail}></input>
                                <input type="password" placeholder="password" name='password' onChange={changePassword}></input>
                            </div>
                            <Link href="">forgot your password?</Link>
                            <button onClick={checkBtn}>Sign in</button>
                        </div>
                        <div className={style.signup}>
                            <div>
                                <h2>Hello, friend!</h2>
                                <p>Enter your personal details and start journey with us!</p>
                                <button><Link to="/register">Sign up</Link></button>
                            </div>

                        </div>
                    </div>
                </main>
            </div>

        </React.Fragment>
    )
}
export default Login;




