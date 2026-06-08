import { useState } from "react";
import axios from "axios";

function DemoForm() {

 const [formData,setFormData] = useState({
  name:"",
  email:"",
  phone:"",
  company:"",
  message:""
 });

 const handleSubmit = async(e)=>{
  e.preventDefault();

  await axios.post(
   "http://localhost:5000/api/demo",
   formData
  );

  alert("Demo Request Submitted");
 }

 return (
  <form onSubmit={handleSubmit}>
   <input placeholder="Name" />
   <input placeholder="Email" />
   <input placeholder="Phone" />
   <input placeholder="Company" />
   <textarea />
   <button>Request Demo</button>
  </form>
 )
}

export default DemoForm;