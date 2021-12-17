<template>
  <div class="questions-ctr">
        <div class="progesscontainer">
                <div class="progessstep"
                :style="{ width: (questionsAnswered)/ (questions.length-1) * 100 +'%'}"
                ></div>
                <div class="circle" :class="number <= questionsAnswered+1 ? 'active' : ''"
                v-for="number in questions.length"
                :key="number">
                {{number}}
                </div>
            </div>
        <div
        class="single-question"
        v-for="(question, qi) in questions"
        :key="question.q"
        v-show="questionsAnswered === qi"
      >
            <div class="question">{{question.q}}</div>
            <div class="answers">
              <div
                class="answer"
                v-for="answer in question.answers"
                :key="answer.text"
                @click.prevent="selectAnswer(answer.is_correct)"
              >
              {{ answer.text }}
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
 props: ["questions","questionsAnswered"],
 emits: ["question-answered"],
  methods: {
    selectAnswer(is_correct) {
      this.$emit("question-answered", is_correct);
    },
  },
}
</script>

<style>
.progesscontainer{
  display:flex;
  justify-content:space-between;
  width:350px;
  max-width: 100%;
  margin:15px auto;
  position: relative;
}
.progesscontainer:before{
  content:'';
  position: absolute;
  top:50%;
  left:0;
  background:rgb(211, 212, 212);
  width:100%;
  height:3px;
  transform:translateY(-50%);
  z-index: 1;
}
.progessstep{
  position: absolute;
  top:50%;
  left:0;
  background:rgb(240, 240, 10);
  width:0;
  height:3px;
  transition:0.7s;
  transform:translateY(-50%);
  z-index: 1;
}
.circle{
  color:#999;
  background:#fff;
  border:3px solid #e0e0e0;
  border-radius:50%;
  width:30px;
  height:30px;
  display: flex;
  align-items:center;
  justify-content:center;
  transition:1.2s;
  z-index: 5;
}
.circle.active{
  border-color:rgb(240, 240, 10);
}
.question{
    background:#fff;
    padding:20px;
    font-size:2em;
    color:#8741A6;
    border-radius: 10px;
    margin: 15px auto;
}
.answers{
    display: flex;
    justify-content:flex-start;
    align-items:center;
    flex-wrap: wrap;
    padding: 20px;
}
.answer{
    background:#fff;
    padding:35px 0;
    width:40%;
    font-size:1em;
    color:#8741A6;
    border-radius: 10px;
    margin: 15px auto;
    box-shadow:0 4px 7px rgb(109, 109, 109);
    transition:0.3s ease-out;
}
.answer:not(.is-answered) {
    cursor: pointer;
  }
  .answer:not(.is-answered):hover {
    background-color: #F0B67F;
    color: #fff;
    box-shadow:none;
  }
</style>