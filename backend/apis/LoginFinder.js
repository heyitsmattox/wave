//use axios to help with our API request
import axios from "axios";

//creating a new axios instanace
export default axios.create({
  //setting the URL for all subsequent request
  //Using create with custom config as it's more efficient then Axios default instance
  //especially when we'll make multiple request to the same base URL
   baseURL: 'http://localhost:5011/api/v1/users',
});