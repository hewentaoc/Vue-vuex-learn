<template>
    <div class="wrapper">
        <ul class="nav">
            <router-link  tag="li"
                v-for="items in questionList" :key="items.questionId"
                :to="{name:'question',params:{id:items.questionId}}"
                >
                {{items.title}}
            </router-link>
        </ul>
        <br>
        <br>
        输入: <input type="text" v-model="mes" @keydown.enter="handClick">
        <button @click="handClick">提交</button>
    </div>
</template>




<script>
export default {
    // 在进行跳转路径之前触发的函数
    beforeRouteLeave (to, from, next) {
        if(this.mes){
            let flag = window.confirm('你确定要跳转吗?');
            if(flag){
                next();
            }
        }else{
            next();
        }
    },
    data:function(){
      return {
        mes:'',
        questionList: [
                {
                questionId: 201801,
                title: "到底什么是es6中的class（类）？怎么实现class（类）？"
                },
                {
                questionId: 201802,
                title:
                    "什么是es6箭头函数？与普通函数主要区别在哪里？到底该不该使用箭头函数？"
                },
                {
                questionId: 201803,
                title:
                    "什么是es6的解构赋值，每次都创建一个对象吗？会加重GC的负担吗？为什么？"
                }
        ]
      }  
    },
    methods:{
        handClick(){
            this.mes = '';
            // console.log(this.$router)
        }
    }
}
</script>
<style scoped>
    .wrapper{
        min-width: 600px;
    } 
    .nav li{
        line-height: 40px;
        cursor: pointer;
    }
</style>