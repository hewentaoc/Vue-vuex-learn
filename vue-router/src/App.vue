<template>
  <div id="app">
    <div class="header">
      <div class="nav">
          <ul id="nav" >
          <router-link tag="li" to="/home">首页</router-link> 
          <router-link tag="li" to="/student">学生中心</router-link>
          <router-link tag="li" to="/community">交流中心</router-link>
          <router-link tag="li" to="/person">个人中心</router-link>
          <router-link tag="li" to="/about">关于我们</router-link>
        </ul>
      </div>
    </div>
     <router-view class="router-view"/>
  </div>
</template>


<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header{
  width: 100%;
  height: 80px;
  background-color: rgb(0, 119, 255);
  line-height: 80px;
  min-width: 600px;
}
.nav{
  margin: 0 auto;
  width: 1000px;
}
 .nav ul{
  float: right;
}
.nav li{
  margin-right: 50px;
  color: #fff;
  cursor: pointer;
  float: left;
}
.link-active{
  font-weight: bold;
  text-shadow: 1px 1px 3px #000;
  font-size: 18px;
}
.router-view{
  padding-top:100px;
  padding-left: 300px;
  text-align: left ;
}


</style>
