import { ref } from 'vue';
import  {db} from "../firebase/config";
let getQuizz = () =>{
    let questions= ref([]);
    let error = ref("");
    let fetchData = async() => {
        try {
          await db.collection("questions").onSnapshot((snap) => {
            questions.value = snap.docs.map((doc) => {
               return {id:doc.id,...doc.data()}
           })
         })
          }
         catch (err) {
           error.value =  err.message;
         } 
      };
      return {questions,fetchData,error}
}
export default getQuizz;