import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {

  constructor(props){
    super(props);
    this.state={
      student: []
    }
  }
  componentDidMount(){
    axios.get('http://localhost:8000/api/view')
    .then(response=>{
      // console.log(response)
      this.setState({student:response.data})
    })
  }

    render() {
        return (
            <div>
              <h1>Bootstrap Table</h1>
              <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone Number</th>
      <th scope="col">Password</th>
      <th scope="col">Address</th>
    </tr>
  </thead>
  <tbody>
    {
      this.state.student.map(stu=>{
        return(
    <tr>
      <th scope="row">{stu.id}</th>
      <td>{stu.name}</td>
      <td>{stu.email}</td>
      <td>{stu.phone_no}</td>
      <td>{stu.password}</td>
      <td>{stu.address}</td>
    </tr>
    )
  })
}
  </tbody>
</table>  
            </div>
        );
    }
}

export default Home;