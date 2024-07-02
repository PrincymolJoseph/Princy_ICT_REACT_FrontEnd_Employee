import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const Home = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
      axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res)=>{
        // console.log(res);
        setData(res.data);
      })
  },[])
  return (
    <div>
      <Navbar/>
      <br/>
      <table class="table table-hover mx-5" style={{width:'90%'}}>
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((each)=>(
            <tr>
              <th scope="row">{each.id}</th>
              <td>{each.name}</td>
              <td>{each.email}</td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Home