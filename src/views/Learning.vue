<template>
  <div class="learning">


    <div class="learning-wrapper">
        <a v-for="(ele,index) in courseList" :key="index">
        <img class="poster" :src="ele.poster" >
        <div class="name">{{ele.name}}</div>
        <div class="price">¥{{ele.price}}</div>
    </a>
    </div>
    <div class="fouter">
         <router-link to="/learning/remove" tag="button">点击修改11</router-link>
    </div>
   
  </div>
</template>
<script>
import {mapState,mapGetters} from 'vuex'
import { constants } from 'fs';
export default {
  created(){
      // console.log(this.courseList)
  },
  data(){
    return {   
      
    }
  },
  methods:{
    aa(){
      console.log(student)
    }
  },
  computed:{
      ...mapState('course',['courseList']),

  }
}
</script>
<style scoped>
    .learning{
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-content:flex-start;
        min-width: 870px;
        
    }
    .learning-wrapper{
      text-align: center;
      padding-top: 45px;
      min-width: 910px;
        max-width: 920px;
    }
    a{
      width: 210px;
      height: 190px;
      display: inline-block;
      vertical-align: top;
      font-size: 14px;
      border: 1px solid transparent;
      margin: 5px;
      margin-bottom: 10px;
    }
    a:hover{
      border-color: #ccc;
      
    }
    img{
      display: block;
      width: 100%;
    }
    .name{
      text-align: left;
      height: 50px;
    }
    .name:hover{
      color: orangered;
    }
    .price{
      text-align: left;
    }
    .fouter{
      width: 100%;
      text-align: center;
      line-height: 110px;
    }
    button{
      font-size: 20px;
      border-radius: 4px;
    }
</style>
