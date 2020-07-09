import React, {useState, useEffect} from 'react'
import Base from '../core/Base';
import { isAuthenticated } from '../auth/helper';
import { Link } from 'react-router-dom';
import { createOrder } from './helper/adminapicall';



const CreateOrder = () => {

  const [values, setValues] =  useState({
      name: "",
      address:"",
      contact:"",
      pincode:"",
      houseno: "", 
      area: "",
      landmark:"" ,
      city:"",
      State:"",
      loading: false,
      getaRedirect: false,
      formData:""
  })


  const { name,
   address,
   contact,
   pincode,
   houseno,
   area,
   landmark,
   city,
   State,
   loading,
   getaRedirect,
   formData
 } = values
 

 const preload= () => {

 setValues({...values,  formData: new FormData()})
           
  
}


useEffect(()=> {
  preload()
}, [])


  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  
  const {user, token} = isAuthenticated()

  const goBack = () => (
    <div className="mt-3">
        <Link 
        className="btn btn-sm btn-success mb-3"
        to="/cart"
        >
      Manage Cart
        </Link>   
    </div>
  )

  const handleChange= name => event =>{
    const value = name === "photo" ? event.target.files[0]: event.target.value
    setError("")
    formData.set(name, value)
    setValues({...values, [name]: value}) 
  }




  const data={
    name: "asfd",
    address: "daf",
    contact:"sdfsfa"
  }

  const onSubmit = (event) => {
     event.preventDefault()
     setError("")
     setSuccess(false)

     //backend request fired
     createOrder(user._id, token , formData)
     .then(data => {
       if(!data){
         setError(true)
       }else{
        setError("")
        setSuccess(true)
        setValues({
          ...values,
          name: "",
          address:"",
         contact:"" ,
         pincode:"",
         houseno: "", 
         area: "",
         landmark:"" ,
         city:"",
         State:"",
         loading:false   
      })
       }
        
     })
  }

   const successMessage = () => {
     if(success){
       return <h6 className="text-success st ">Order placed successfully !</h6>
     }
   }

   const warningMessage = () => {
    if(error){
      return <h6 className="text-success st">Ops! Failed to place the order. Please try again later or contact us directly.</h6>
    }
  }


     const myCategoryForm = () => (
       <form>
         <div className="form-group">
           <input 
           type="text" 
           className="form-control my-3"
           onChange ={handleChange("name")}
           value={name}
           autoFocus
           required
           placeholder="Full Name" />
           
         </div>
       
         <div className="form-group">
           <input 
           type="text" 
           className="form-control my-3"
           onChange ={handleChange("contact")}
           value={contact}
           autoFocus
           required
           placeholder="Mobile Number" />
         </div>
         <div className="form-group">
           <input 
           type="text" 
           className="form-control my-3"
           onChange ={handleChange("pincode")}
           value={pincode}
           autoFocus
           required
           placeholder="Pincode" />
         </div>
         <div className="form-group">
           <input 
           type="text" 
           className="form-control my-3"
           onChange ={handleChange("houseno")}
           value={houseno}
           autoFocus
           required
           placeholder="Flat, House no." />
         </div>
         <div className="form-group">
           <input 
           type="text" 
           className="form-control my-3"
           onChange ={handleChange("area")}
           value={area}
           autoFocus
           required
           placeholder="Area, Colony, Street, Village" />
         </div>
         <div className="form-group">
           <input 
           type="text" 
           className="form-control my-3"
           onChange ={handleChange("landmark")}
           value={landmark}
           autoFocus
           required
           placeholder="Landmark e.g. near city hall" />
         </div>
         <div className="form-group">
           <input 
           type="text" 
           className="form-control my-3"
           onChange ={handleChange("city")}
           value={city}
           autoFocus
           required
           placeholder="Town/City" />
         </div>
         <div className="form-group">
           <input 
           type="text" 
           className="form-control my-3"
           onChange ={handleChange("State")}
           value={State}
           autoFocus
           required
           placeholder="State" />
         </div>
         
         <button type="submit" onClick={onSubmit} className= "btn btn-outline-info">Confirm Order</button>

       </form>
     )  


    return (
        <Base
         title="Create a category here"
         description="Buy your gift now. We will be happy to serve you !"
         className=""
         >
         
          <div className="row text-center ">
      <div className="col-md-1"></div>

          <div className="col-md-5">
          <div class="jumbotron" style={{ margin: "0.5rem 2rem"}} >
          <div style={{backgroundColor :"#3282b8", padding:"10px" }}><h5>Address Details</h5></div>
          <br/>
        <div class="row rounded ad">
            <div className="col-md-8 offset-md-2">

             {successMessage()}
             {warningMessage()}
             {myCategoryForm()}
             {goBack()}
    
            </div>
          </div>
          </div>
        </div>
      <div className="col-md-1"></div>
        
      <div className="col-md-4 mt-2">
      <hr class="my-4"/>
          <h6>Dear customer,</h6>
          <p className="cd">We will get in touch with you within 24 hrs to know about the customized design you want in your item. In case you are in a hurry, you can contact us from your side.</p>
           <p className="cd">Let us know if you want to pay via Net banking, Paytm, PhonePay, GooglePay or any other means.Contact us directly <Link  to="/contact">here</Link></p>
           <Link to="/contact" className = "btn btn-warning btn-sm">Contact Us</Link>
           <hr class="my-4"/>
      </div>
        
        
        
     
      </div>
          

         </Base>
   )
}

export default CreateOrder;