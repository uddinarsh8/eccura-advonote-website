import axios from "axios";

export default axios.create({

 baseURL:
 "http://localhost:5000/api"

});
import axios from "../services/api";

const submitForm = async()=>{

 await axios.post(
   "/contact",
   {
     name,
     email,
     phone,
     message
   }
 );

};
await axios.post(
 "/demo",
 {
   name,
   email,
   phone,
   company,
   message
 }
);