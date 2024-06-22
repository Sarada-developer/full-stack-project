import axios from 'axios';
import React, { Component } from 'react';
import api from '../components/service/api';

class Add_user extends Component {
  constructor(props){
    super(props);
    this.state = {
    name:'',
    email:'',
    phone:'',
    password:'',
    address:'',
    arr:[]
    }
  }


  saveUser = (e) => {
    e.preventDefault();
   const data = {
     name : this.state.name,
    email: this.state.email,
    phone: this.state.phone,
    password: this.state.password,
    address:this.state.address,
   }
   axios.post('http://localhost:8000/api/create', data)
      .then(res => console.log(res.data));
  }
  
    render() {
        return (
            <div className="container py-4">
       <form onSubmit={this.saveUser}>
       <div className="form-row">
    
    <div className="form-group col-md-5">
      <label htmlFor="inputEmail4">Name</label>
      <input type="text" className="form-control" name="name" onChange={(e)=>this.setState({name:e.target.value})} value={this.state.name} id="name" placeholder="Name" />
    </div>
    <div className="form-group col-md-5">
      <label htmlFor="inputPassword4">Email</label>
      <input type="email" className="form-control" name="email" onChange={(e)=>this.setState({email:e.target.value})} value={this.state.email} id="email" placeholder="Email" />
    </div>
  </div>
  <div className="form-row">
    
    <div className="form-group col-md-5">
      <label htmlFor="inputEmail4">Phone Number</label>
      <input type="text" className="form-control" name="phone" onChange={(e)=>this.setState({phone:e.target.value})} value={this.state.phone} id="phone_no" placeholder="Phone Number" />
    </div>
    <div className="form-group col-md-5">
      <label htmlFor="inputPassword4">Password</label>
      <input type="password" className="form-control" name="password" onChange={(e)=>this.setState({password:e.target.value})} value={this.state.password} id="inputPassword4" placeholder="Password" />
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress">Address</label>
    <input type="text" className="form-control" name="address" onChange={(e)=>this.setState({address:e.target.value})} value={this.state.address} id="inputAddress" placeholder="Address" />
  </div>
  
  {/* <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputCity">City</label>
      <input type="text" className="form-control" id="inputCity" />
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="inputState">State</label>
      <select id="inputState" className="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div className="form-group col-md-2">
      <label htmlFor="inputZip">Zip</label>
      <input type="text" className="form-control" id="inputZip" />
    </div>
  </div>
  <div className="form-group">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck" />
      <label className="form-check-label" htmlFor="gridCheck">
        Check me out
      </label>
    </div>
  </div> */}
  <br/>
  <button type="submit" className="btn btn-primary">Sign in</button>
</form>

            </div>
        );
    }
}

export default Add_user;