<template>
  <div class="community">
    <div class="community-nav">
        <router-link to='/community/academic' class="router-link">academic</router-link>
        <router-link to='/community/components2' class="router-link">components2</router-link>
        <router-link to='/community/components3' class="router-link">个人中心</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'community',
}
</script>
<style>
    .community-nav{
      background: pink;
}
.router-link{
      color: #fff;    
      display: inline-block;
      line-height: 45px;
      padding: 10px;
      margin-bottom: 10px;
    }
</style>
