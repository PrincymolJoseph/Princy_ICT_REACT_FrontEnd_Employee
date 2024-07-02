import React from 'react'
import Navbar from './Navbar'

const EmpForm = () => {
  return (
    <div>
        <Navbar/>
        <br/>
        <form class="formStyle" >
        <h2 class="text-primary py-2 text-center"><u>Employee Form</u></h2>
        <br/>
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Name</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Designation</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Location</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="row mb-3">
          <label class="col-sm-2 col-form-label">Salary</label>
          <div class="col-sm-10">
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="d-grid col-4 mx-auto">
          <button type="button" class="btn btn-primary">Add Employee</button>
        </div>
      </form>
    </div>
  )
}

export default EmpForm