import { ref } from 'vue'
let getResult = () =>{
    let results= ref([]);
    let error = ref("");
    let fetchData = async() => {
        try {
          let response = await fetch("http://localhost:3000/results"); 
          if(response.status == 404){
            throw new Error("404 page");
          }
          let data = await response.json();
          results.value = data;
          }
         catch (err) {
           error.value =  err
         } 
      };
      return {results,fetchData,error}
}
export default getResult;