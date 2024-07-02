import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const Open = () => {
  return (
    <div>
      <Navbar/>  
      <div class="searchBand" style={{marginTop: '15%'}}>
        <form class="row row-cols-lg-auto g-3 justify-content-center formStyle">
            <div class="col">
                <label for="inlineFormSelectPref">
                <h3 style={{color:'darkblue'}}>Welcome to the Application!!! Click the above links to navigate...</h3>
                </label>
            </div>
        </form>
      </div>
    </div>
  )
}

export default Open