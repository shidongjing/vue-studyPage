
<template>
<div>
    用户名：<input type="text">
    密 码：<input type="password">
    <button @click="btn" >{{ this.key?'退出':'登陆'}}</button>
</div>
    
</template>
<script>
import router from '../router.js';

export default {
    created(){
        console.log(this)
    },
    methods:{
        btn(){
            this.key = true; 
        },
        
    },
    data(){
        return {
            key:false
        }
    }
    // data(){
    //     return {
    //         from()
    //     }
    // }
    // computed:{
    //     tohref(){

    //     }
    // }
}
</script>
