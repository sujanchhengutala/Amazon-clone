import React, { useState } from 'react'
import '../Login.css'
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'


function Login() {
    const history = useHistory()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const signIn = async (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
            setEmail('')
            setPassword('')


    }
    const signUp = async (e) => {
        e.preventDefault()
        createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                console.log(auth)
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
        setEmail('')
        setPassword('')
    }
    return (
        <div className='login'>
            <Link to='/'>
                <img className='login__logo' src='https://www.pngmart.com/files/8/Amazon-PNG-Transparent-Image.png' />
            </Link>
            <div className='login__container'>
                <h1>Sign-in</h1>
                <form>
                    <h5>Email</h5>
                    <input type='text' value={email} onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
                    <button type='submit' onClick={signIn} className='login__signinButton'>Sign in</button>
                </form>
                <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                <button onClick={signUp} className='login__signupButton'>Create your Amazon account</button>
            </div>

        </div>
    )
}

export default Login