import React, {useState, useEffect} from 'react'
import Base from '../core/Base';
import { isAuthenticated } from '../auth/helper';
import { Link } from 'react-router-dom';
import { createCategory, updateCategory, getCategory} from './helper/adminapicall';



const UpdateCategory = () => {

  const [name, setName] = useState("")
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  
  const {user, token} = isAuthenticated()


  const goBack = () => (
    <div className="mt-5">
        <Link 
        className="btn btn-sm btn-success mb-3"
        to="/admin/dashboard"
        >
       Admin Home
        </Link>   
    </div>
  )

  const handleChange = (event) => {
    setError("")
    setName(event.target.value)
  }

  var url= window.location.pathname;
  var stuff = url.split('/');
  var categoryId = stuff[stuff.length-1]


  const onSubmit = (event) => {
     event.preventDefault()
     setError("")
     setSuccess(false)

     //backend request fired
     updateCategory(categoryId ,user._id, token , name)
     .then(data => {
       if(data.error){
         setError(true)
       }else{
        setError("")
        setSuccess(true)
        setName("")
       }
        
     })
  }

   const successMessage = () => {
     if(success){
       return <h4 className="text-success">Category updated successfully</h4>
     }
   }

   const warningMessage = () => {
    if(error){
      return <h4 className="text-success">Failed to update category</h4>
    }
  }


     const myCategoryForm = () => (
       <form>
         <div className="form-group">
           <p className="lead">Enter the category</p>
           <input 
           type="text" 
           className="form-control my-3"
           onChange ={handleChange}
           value={name}
           autoFocus
           required
           placeholder="For ex. Summer" />
           <button onClick={onSubmit} className= "btn btn-outline-info">Update Category</button>
         </div>
       </form>
     )  


    return (
        <Base
         title="Create a category here"
         description="Add a new category for new t shirts"
         className="container bg-info p-4"
         >
          <div class="row bg-white rounded">
            <div className="col-md-8 offset-md-2">
             {successMessage()}
             {warningMessage()}
             {myCategoryForm()}
             {goBack()}
            </div>
          </div>

         </Base>
   )
}

export default UpdateCategory;