<template>
  <div class="w-full">
    <QuestionBox/>
    <AnswerBox/>
  </div>
</template>
<script>
import AnswerBox from '../AnswerBox.vue';
import QuestionBox from '../QuestionBox.vue';

export default {
  name: 'HomeView',
  components: {
    QuestionBox,
    AnswerBox
},
  data() {
    return {
      
    }
  },
  methods: {
    
  }

}
</script>
<style>
  .box-shadow-inset{
    box-shadow: inset 0 0 0.5rem #ef4444;
  }
</style>