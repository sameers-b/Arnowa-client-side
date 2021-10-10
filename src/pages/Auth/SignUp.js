import React, {useState, useEffect} from 'react';
import axios from 'axios'

const SignUp = ({history}) => {
   const [name, setName] = useState()
   const [email, setEmail] = useState()
   const [password, setPassword] = useState()

   useEffect(()=>{
      if(localStorage.getItem("name")){
         history.push("/dashboard")
      }
   })

   const submitHandler = async(e) =>{
      e.preventDefault();
 
      await axios
      .post('http://localhost:8080/api/register',{name,email,password})
      .then((res)=>{
        alert("account Create")
        console.log(res);
        localStorage.setItem("name",res.data.name)
        localStorage.setItem("html",res.data.html)
        localStorage.setItem("css",res.data.css)
        localStorage.setItem("javaScript",res.data.javaScript)
        window.location.reload();
      })
      .catch((err)=>{
         alert("account not create");
         console.log(err)
      })
   }

   return (
      <>
       <div className="container">
          <form onSubmit={submitHandler}>
            <div>
              <p>Create Account</p>
            </div>
            <div className="input-field">
                <label>Name :</label>
                <br />
                <input 
                   type="name"
                   required
                   value={name}
                   onChange={(e)=>setName(e.target.value)}
                   placeholder="Enter name"
                />
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
                <button type="submit">Sign up</button>
             </div>
          </form>         
          <div>
             <p>Do have an account ? 
               <a href="/">Sign in</a>
             </p>
          </div>
       </div> 
      </>
   )
}

export default SignUp
