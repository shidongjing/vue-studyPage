<template>
<div>
    用户名：<input type="text">
    密 码：<input type="password">
    <button @click="btn" >{{ key ? '退出':'登陆'}}</button>
</div>
    
</template>
<script>
export default {
    created(){
        this.key = this.$route.matched[0].meta.login
    },
    methods:{
        btn(){
            
            this.key = !this.key;
            this.$route.matched[0].meta.login = this.key;
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