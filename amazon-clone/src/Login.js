import React from 'react'
import { Link ,useHistory } from 'react-router-dom'
import "./Login.css"
import { auth } from './firebase';
import { useState } from 'react';


function Login() {
    const history = useHistory();

    const [email ,setEmail] = useState("");
    const [password,setPassword] = useState("");




    const login = (event) =>{
        event.preventDefault();
        auth
        .signInWithEmailAndPassword(email,password)
        .then((auth) =>{
            history.push("/");
            
        })
        .catch((e)=>alert(e.message))
    }



    const register = event =>{
        event.preventDefault();

        auth.createUserWithEmailAndPassword(email,password)
        .then(auth => {
            history.push("/");

        })
        .catch((e)=>alert(e.message))
        
    }  


    return (
        <div className="login">
            <Link to ="/">
                <img 
                className="login__image"
                src="https://lh3.googleusercontent.com/proxy/029aBX3e_z1ZIskjwQQweqR-tLFXEA_12WAVBvl1yAs1-OfN-E1VAc9asenjZ77PRGKQcnCKD9scRQtIvUGnEspQuQL20-CmimLV_b5mHQTkg74K3yw9OTIyvaqMlF2fHdT7CMWbdPVVs45F-Q"
                alt =""
                />
            </Link>
            <div className="login__container">
                <h1>Signin</h1>
                <form>
                    <h5>Email</h5>
                    <input value={email} onChange={event=> setEmail(event.target.value)} type="email"/>
                    <h5>password</h5>
                    <input value={password} onChange={event=> setPassword(event.target.value)} type="password"/>
                    <button onClick={login} type="submit" className="login__signinButton">Signin</button>
                    <p>By continuing, you agree to Amazon's Conditions of 
                        Use and Privacy Notice.</p>
                    <button onClick={register} className="login__registerButton">Create your account</button>

                </form>
            </div>
        </div>
    )
}

export default Login
