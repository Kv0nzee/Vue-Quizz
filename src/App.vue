<template>
<div class="ctr" v-if="questions.length > 0">
    <Questions
    v-if="questionsAnswered < questions.length"
    :questions="questions"
    :questionsAnswered="questionsAnswered"
    @question-answered="questionAnswered"
    ></Questions>
    <Results
    v-else 
    :totalCorrect="totalCorrect"
    :questionsAnswered="questionsAnswered"
    ></Results>
    <div class="btn">
      <button
      type="button"
      class="reset-btn"
      @click.prevent="reset"
    >
    </button>
    </div>
</div>
<div class="loading" v-else>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
  <div class="item"></div>
</div>
</template>

<script>

import Results from './components/Results'
import Questions from './components/Questions'
import getQuizz from './composable/getQuizz'
import{ref} from "vue"
export default {
  name: 'App',
  components: {
    Results,
    Questions,
  },
  setup(){
    let questionsAnswered = ref(0);
    let  totalCorrect = ref(0);
    let questionAnswered = (is_correct) => {
      if(is_correct){
        totalCorrect.value++
      }
       questionsAnswered.value++;
    }
    let reset = () =>{
        questionsAnswered.value = 0;
        totalCorrect.value = 0;
    }
    let {questions,fetchData,error} = getQuizz();
      fetchData();
    return {questionsAnswered,totalCorrect,questions,error,reset,questionAnswered}
  }
}
</script>

<style>
body{
  background-color: rgb(122, 156, 230);
  margin:0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0;
  background:#8741A6;
  padding:60px 30px;
}
.ctr {
    margin: 0 auto;
    max-width: 600px;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    background:#eeeeee;
    border-radius:10px;
    padding:15px;
  }
.btn{
  position: relative;
  display: inline-flex;
  width: 180px;
  height: 55px;
  /* margin-top: -10px; */
  perspective: 1000px;
}
.btn button{
  border:none;
  font-size: 19px;
  letter-spacing: 1px;
  transform-style: preserve-3d;
  transform: translateZ(-25px);
  transition: transform .25s;
  font-family: 'Montserrat', sans-serif;
  
}
.btn button:before,
.btn button:after{
  position: absolute;
  content: "Reset";
  height: 55px;
  width: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid black;
  box-sizing: border-box;
  border-radius: 5px;
}
.btn button:before{
  color: #fff;
  background: #000;
  transform: rotateY(0deg) translateZ(25px);
}
.btn button:after{
  color: #000;
  transform: rotateX(90deg) translateZ(25px);
}
.btn button:hover{
  transform: translateZ(-25px) rotateX(-90deg);
}

.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}
.item {
  width: 20px;
  height: 20px;
  margin: 10px;
  list-style-type: none;
  transition: 0.5s all ease;
}
.item:nth-child(1) {
  animation: right-1 1s infinite alternate;
  background-color: #49b8e5;
  animation-delay: 100ms;
}
@keyframes right-1 {
  0% {
    transform: translateY(-60px);
  }
  100% {
    transform: translateY(60px);
  }
}
.item:nth-child(2) {
  animation: right-2 1s infinite alternate;
  background-color: #1e98d4;
  animation-delay: 200ms;
}
@keyframes right-2 {
  0% {
    transform: translateY(-70px);
  }
  100% {
    transform: translateY(70px);
  }
}
.item:nth-child(3) {
  animation: right-3 1s infinite alternate;
  background-color: #2a92d0;
  animation-delay: 300ms;
}
@keyframes right-3 {
  0% {
    transform: translateY(-80px);
  }
  100% {
    transform: translateY(80px);
  }
}
.item:nth-child(4) {
  animation: right-4 1s infinite alternate;
  background-color: #3a88c8;
  animation-delay: 400ms;
}
@keyframes right-4 {
  0% {
    transform: translateY(-90px);
  }
  100% {
    transform: translateY(90px);
  }
}
.item:nth-child(5) {
  animation: right-5 1s infinite alternate;
  background-color: #507cbe;
  animation-delay: 500ms;
}
@keyframes right-5 {
  0% {
    transform: translateY(-100px);
  }
  100% {
    transform: translateY(100px);
  }
}

</style>
