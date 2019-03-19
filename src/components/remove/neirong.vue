<template>
    <div class="neirong">
        名称：<input type="text" :value="{}">
        价格：<input type="text">
        <button>确认修改</button>
    </div>
</template>
<script>
export default {
    created(){
        console.log(this)
    }
}
</script>
