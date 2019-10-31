import axios from "axios"
export default{
  getIndex(callback){
    axios.get("/index").then(callback) 
  }

}