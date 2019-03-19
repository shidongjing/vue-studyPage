<template>
    <div class="show">
        <academic></academic>
    </div>
</template>
<script>
import academic from './Academic.vue'
export default {
    // props:[img],
    data(){
        return {
            introduce:'this is my one'
        }
    },
    components:{
        academic
    }
}
</script>
