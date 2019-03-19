<template>
    <div class="stuipu">
        <input type="text"  v-model="student">
        <button @click="change(student)">提交</button>
    </div>
</template>
<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
export default {
    data(){
        return {
            student:'',
        }
  },
//   computed:{
//     //   ...mapMutations(['changeStudentList'])
//   },
    methods:{
        // add(){
        //     this.$store.commit('changeStudentList',this.student)
        //     this.$store.state.studentList.push(this.student)
        //     this.$store.dispatch('change',this.student)
        // },
        ...mapActions('students',['change'])
    }

}
</script>
