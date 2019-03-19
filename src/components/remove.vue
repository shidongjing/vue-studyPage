<template>
    <div class="remove">
        <template v-if="isshow">
            <ul >
              <li v-for="(ele,index) in courseList" :key="index">
                  <span>{{ele.name}}</span>
                  <span>¥{{ele.price}}</span>
              
                  <button @click="recompose(ele,index)">点击修改</button>
              </li>
            </ul>  
        <router-link to="/learning">已完成全部修改</router-link>
        </template>
        <div class="neirong" v-else>
            名称：<input type="text" v-model="name">
            价格：<input type="text" v-model="price">
            <button @click="changeClass({index,name,price}),isshow='false'">确认修改</button>
        </div>
    </div>
</template>
<script>
import {mapState,mapMutations} from 'vuex'
export default {
    data(){
        return {
            name:'',
            price:'',
            index:'',
            isshow:true
        }
    },
    methods:{
        recompose(ele,index){
            this.isshow = false ;
            this.name = ele.name;
            this.price = ele.price;
            this.index = index;
        },
        ...mapMutations('course',['changeClass'])
    },
    computed:{
        // ...mapState('course',['courseList']),
        courseList(){
            return this.$store.state.course.courseList;
        }

    },
    
}
</script>
<style scoped>
    .remove{
        margin-left: 20px;
        margin-top: 20px;
    }
    button{
        font-size: 15px;
        color: #fff;
        background: #000;
        outline: none;
    }
    li{
        list-style: none;
        padding: 5px;
    }
    span{
        margin: 0 10px 0 10px;
    }
</style>


