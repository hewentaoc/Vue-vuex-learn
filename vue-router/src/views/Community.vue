<template>
<div>
    <ul class="nav">
        <router-link tag="li" to='/community/ourhtml'>Html专区</router-link>
        <router-link tag="li" to='/community/ourcss'>CSS专区</router-link>
        <router-link tag="li" to='/community/ourjs'>JS专区</router-link>
    </ul>
    <router-view class="router-view"/>
</div>
</template>




<style scoped>
  /* 有自己的作用域不会受其他作用域影响 */
  ul.nav{
      height: 40px;
      line-height: 40px;
      border: 1px solid #ccc;
      width: 400px;
  }
  ul.nav li{
      float: left;
      margin-left: 50px;
      cursor: pointer;
  }

  .link-active{
      font-weight: bold;
  }
  .router-view{
      padding-top: 50px;
  }



</style>