<template>
  <div>
    <!-- {{questionList[index].title}} -->
    {{title}}
    <button @click="handClick" v-show="flag">下一题</button>
  </div>
</template>

<script>
export default {
  beforeRouteUpdate(to,from,next) {
    const id  = to.params.id;
    this.getDate(id);
    next();
  },
  data() {
    return {
      id: "",
      title: "",
      flag:true,
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
    };
  },
  mounted() {
        // 可以得到此时页面的路由地址
        const id = this.$route.params.id * 1;
        this.getDate(id);
    },
  methods: {
    handClick() {
        this.$router.push({
            name:"question",
            params:{
                id: this.id + 1,
            }
        });
    },
     getDate(id){
        // 值相等时返回此时数组索引的数组方法
        const index = this.questionList.findIndex(ele => ele.questionId == id);
        console.log(index);
        if(index != -1){
            this.title = this.questionList[index].title;
            this.id = id;
        }else{
            this.flag = false;
            this.title = '没有题目!';
        }
     }
  },
 
};
</script>