<template>
  <div class="result">
       <div class="title">{{ results[resultIndex].title }}</div>
        <div class="desc">{{ results[resultIndex].desc }}</div>
    </div>
</template>

<script>
import {ref, computed } from '@vue/reactivity';
import getResult from "../composable/getResult"
export default {
 props: ["totalCorrect","questionsAnswered"],
 setup(props){
     let {results} = getResult();
      let index = ref(0);
      let resultIndex = computed(() => {
         results.value.forEach((e, i) => {
            if (e.percent <= (props.totalCorrect/ props.questionsAnswered) * 100 ) {
            index.value = i;
            }
        });
        return index.value
      })
    return {results,index,resultIndex}
 }
}
</script>

<style>
.result{
    background:#fff;
    padding:20px;
    font-size:1.5em;
    color:#8741A6;
    border-radius: 10px;
    margin: 15px auto;
}
</style>