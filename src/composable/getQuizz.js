import { ref } from 'vue'
let getQuizz = () =>{
    let questions= ref([]);
    let error = ref("");
    let fetchData = async() => {
        try {
          let response = await fetch("http://localhost:3000/questions"); 
          if(response.status == 404){
            throw new Error("404 page");
          }
          let data = await response.json();
          questions.value = data;
          }
         catch (err) {
           error.value =  err
         } 
      };
      return {questions,fetchData,error}
}
export default getQuizz;