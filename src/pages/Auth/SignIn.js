import React, {useState, useEffect} from 'react'
import { Link} from 'react-router-dom'
import axios from 'axios'
import './style.css'

const SignIn = ({history}) => {

   const [email, setEmail] = useState()
   const [password, setPassword] = useState()

   useEffect(()=>{
      if(localStorage.getItem("name")){
         history.push("/dashboard")
      }
   })

   const submitHandler = async(e) => {
      e.preventDefault();

      await axios
      .post('http://localhost:8080/api/login',{email,password})
      .then((res)=>{
        alert("login done")
        console.log(res);
        localStorage.setItem("name",res.data.name);
        localStorage.setItem("html",res.data.html)
        localStorage.setItem("css",res.data.css)
        localStorage.setItem("javaScript",res.data.javaScript)
        window.location.reload();
      })
      .catch((err)=>{
         alert("login error");
         console.log(err)
      })
   }

   return (
      <>
       <div className="container">
          <form onSubmit={submitHandler}>
            <div>
              <p>Log in</p>
            </div>
             <div className="input-field">
                <label>Email Address :</label>
                <br />
                <input 
                   type="email"
                   required
                   value={email}
                   onChange={(e)=>setEmail(e.target.value)}
                   placeholder="Enter Email"
                />
             </div>
             <div className="input-field">
                <label>Password :</label>
                <br />
                <input 
                   type="password"
                   required
                   value={password}
                   onChange={(e)=>setPassword(e.target.value)}
                   placeholder="Enter Password"
                />
             </div>
             <div>
                <button type="submit">Log in</button>
             </div>
          </form>         
          <Link to="/">forgot Password</Link>
          <div>
             <p>Don't have an account ? 
               <a href="/register">Sign up</a>
             </p>
          </div>
       </div> 
      </>
   )
}

export default SignIn
