<template>
    <ul class="stuList">
        <li v-for="(ele,index) in studentList" :key="index">{{ele}}</li>
    </ul>
</template>
<script>
import {mapState,mapGetters} from 'vuex'
export default {
    data(){
        return {
            
        }
    },
    computed:{
        // ...mapState(['studentList']),
        // ...mapState({
        //     studentList:state=>state.studentList
        // })
        ...mapGetters('students',['studentList'])
        // ...mapGetters({
            // student:'student'
        // })
       

    },
    // created(){
    //     this.bus.$on('add',(data)=>{
    //         this.studentList.push(data)
    //     })
    // }
    
}
</script>
