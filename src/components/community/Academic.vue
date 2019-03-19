<template>
<ul>
        <router-link tag='li' v-for="item in questionList" :to="{name:'question',params:{
            id:item.questionId
        }}"
        :key="item.questionList">
            {{item.title}}
        </router-link>
</ul>
</template>
<script>
export default {
    beforeRouteEnter(to,from,next){
        // console.log()
        console.log(to.matched[0].meta.login)
        if(!to.matched[0].meta.login ){
            if(confirm('请登陆')){
                next('/community/components3')
            }           
        }else{
            next(true)
        }
    },
    beforeRouteLeave(to,from,next){
        if(confirm('你确定要离开吗')){
            next()
        }else{
            next(false)
        }
    },
    data(){
        return {
            questionList: [
                {
                    questionId: 201801,
                    title: '到底什么是es6中的class（类）？怎么实现class（类）？'
                },
                {
                    questionId: 201802,
                    title: '什么是es6箭头函数？与普通函数主要区别在哪里？到底该不该使用箭头函数？'
                },
                {
                    questionId: 201803,
                    title: '什么是es6的解构赋值，每次都创建一个对象吗？会加重GC的负担吗？为什么？'
                }
            ]
        }
    }
}
</script>
<style>
    
</style>