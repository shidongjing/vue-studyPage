<template>
  <div class="student">
    <studentipt></studentipt>
    <studentShow></studentShow>
      <!-- <studentipt @add="add"></studentipt>
      <studentShow :student='studentList'></studentShow> -->
  </div>
</template>
<script>
import studentipt from '@/components/student/studentipt.vue';
import studentShow from '@/components/student/studentList.vue';
export default {
  // data(){
  //   return {
  //       studentList:'',
  //   }
  // },
  components:{
      studentipt,
      studentShow
      }

}
</script>