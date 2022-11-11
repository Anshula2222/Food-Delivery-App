import './loginui.css';
import React, { Component } from 'react';
import profile from './person.png';
class SignUp extends Component{
    state={
      fname:"Full Name",
      username:"Username",
      email:"Email",
      phone_number:"Phone Number",
      password:"Password"
  };
  handleChange1=(e)=>{
  this.setState({
      fname:e.target.value,
  });
  }
  handleChange2=(e)=>{
  this.setState({
      username:e.target.value,
  });
  }
  handleChange3=(e)=>{
  this.setState({
      email:e.target.value,
  });
  }
  handleChange4=(e)=>{
  this.setState({
      phone_number:e.target.value,
  });
  }
  handleChange5=(e)=>{
  this.setState({
      password:e.target.value,
  });
  }

buttonClick=()=>{
const customer={
    fname:this.state.fname,
    username:this.state.username,
    email:this.state.email,
    phone_number:this.state.phone_number,
    password:this.state.password
};
if(customer.fname && customer.fname.length>0 &&
    customer.username && customer.username.length>0 &&
    customer.email && customer.email.length>0 &&
    customer.phone_number && customer.phone_number.length>0 &&
    customer.password && customer.password.length>0)
    {
        axios
            .post('http://localhost:5000/api/signup',customer,{headers:{"Content-Type" : "application/json"}})
            .then((res)=>{
                if(res.data){
                    this.setState({
                        name:"",
                        destination:"",
                        phone_number:"",
                        number_of_days:"",
                        dateOfArrival:""
                    })
                    console.log("all ok")
                    .catch((err)=> console.log(err.response.data));
                }else{
                    console.log("Input empty");
                }
            })
    }
    else{
        console.log(customer.name.length);
        console.log(customer.destination.length);
        console.log(customer.phone_number.length);
        console.log(customer.number_of_days.length);
        console.log(customer.dateOfArrival.length);
    }

}
  render(){
  return (
    <div className="main" style={{fontFamily: 'Shalimar cursive'}}>
     <div className="sub-main" style={{height: 800}}>
       <div>
         <div className="imgs" >
           <div className="container-image">
             <img src={profile} alt="profile" className="profile"/>

           </div>


         </div>
         <div>
           <h1>Sign up</h1>   
           <div>
             <input type="text" placeholder="Full Name" className="name"/>
           </div> 
           <br/>      
           <div>
             <input type="text" placeholder="Username" className="name"/>
           </div>
           <br/>
           <div>
             <input type="text" placeholder="Contact number" className="name"/>
           </div>
           <br/>
           <div>
             <input type="text" placeholder="Email ID" className="name"/>
           </div>
           <br/>
           <div >
             <input type="password" placeholder="Password" className="name"/>
           </div>
          <div className="login-button">
          <button style={{width: 300}}>Sign up</button>
          <br/>
          <br/>
          
          <a href="http://localhost:3000/Login">Login</a>
          </div>
         </div>
       </div>
       

     </div>
    </div>
  );
  }
}
export default SignUp;