import { ref } from 'vue'
let getResult = () =>{
    let results= ref([
      {
          percent: 50,
          title: "Try again!",
          desc: "Do a little more studying and you may succeed!"
      },{
          percent: 75,
          title: "Nice, you're good",
          desc: "Keep going to be a genius!"
      },{
          percent: 100,
          title: "Wow, you're a genius!",
          desc: "Studying has definitely paid off for you!"
      }
  ]);
    // let error = ref("");
    // let fetchData = async() => {
    //     try {
    //       let response = await fetch("http://localhost:3000/results"); 
    //       if(response.status == 404){
    //         throw new Error("404 page");
    //       }
    //       let data = await response.json();
    //       results.value = data;
    //       }
    //      catch (err) {
    //        error.value =  err
    //      } 
    //   };
      return {results}
}
export default getResult;