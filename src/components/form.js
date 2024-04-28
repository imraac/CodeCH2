
import { useState } from "react";

function Form({handleNewData}) {

    const [formData, setFormData] = useState({description:"", category: "", amount: "", date: ""} )



    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()
        setFormData({description:"", category: "", amount: "", date: ""})


        handleNewData(formData) 
    }



  return(
  <form className="" onSubmit={handleSubmit} style={{ border: "2px solid black" }}>
    <div style={{ display: "flex", justifyContent: "center", flexDirection: "row", flexWrap: "wrap", fontFamily: "sans-serif"}}>
      <div className="col-md-3 p-1 ">
        <input
          type="text"
          className="form-control"
          placeholder="Description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <div className="col-md-3 p-1">
        <input
          type="text"
          className="form-control"
          placeholder="Category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />
      </div>

      <div className="col-md-3 p-1">
        <input
          type="number"
          className="form-control"
          placeholder="Amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
      </div>

      <div className="col-md-3 d-flex align-items-center">
        <label className="me-2"></label>
        <input type="date" className="form-control" name="date" 
        value={formData.date}
        onChange={handleChange}
        required />
      </div>
    </div>

    <button
      type="submit"
      className="btn btn-secondary col-md-2 mx-auto d-block mt-3">
      Add Transaction
    </button>
  </form>
  )


}
export default Form;
