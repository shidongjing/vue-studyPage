<template>
  <div id="app">
    <div id="nav">
          <div class="logo">s</div>
          <div class="router">      
              <router-link tag='li' to="/home">Home</router-link>
              <router-link tag='li' to="/student">Student</router-link>
              <router-link tag='li' to="/learning">Learning</router-link>
              <router-link tag='li' to="/show">show</router-link>
              <router-link tag='li' to="/about">About</router-link>
              <router-link tag='li' to="/community">Commnuity</router-link>
          </div>
    </div>
    <router-view class="router-view"/>
    <!-- <router-view  name="academic" /> -->
    <footer class="footer"></footer>
  </div>
</template>


<style>
*{
  margin:0;
  padding: 0;
    text-decoration: none;
}
html,body{
  height: 100%;
  width: 100%;
  min-width: 700px;
}
#app{
    border: 1px solid red;
    box-sizing: border-box;
    width: 100%;
    
}
#nav{
    height: 62px;
    background: #000;
    color: #fff;
    position: relative;
      border-bottom: 1px solid #fff;

    
}
.logo{
    display: inline-block;
    position: absolute;
    line-height: 62px;
    left: 100px;
    top: 0;
    font-size: 40px;
}
.router{
  height: 100%;
  position: absolute;
  right: 20px;
  top: 0;
}
#nav li{
  list-style: none;
  display: inline-block;
  line-height: 60px;
  padding: 0 15px 0 15px;
  color: aliceblue;
}
.router-link-active{
  border-bottom: 1px solid #fff;
  box-sizing: border-box;
  /* background: red; */
}
.router-view{
  min-height: 482px;
}
.footer{
  width: 100%;
  height: 100px;
  background: #000;

}
</style>
