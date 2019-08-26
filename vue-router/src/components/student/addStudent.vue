<template>
    <div class="addstudent">
        <div> 添加学生  {{$store.state.student.name}} </div>
        <p>姓名:<input type="text" v-model="name"> </p>
        <p>年龄:<input type="text" v-model="age">  </p>
        <p><button @click="handClick">提交</button></p>
    </div>
</template>

<script>
import {mapMutations} from 'vuex';
export default { 
    data:function(){
        return {
            name:'',
            age:'',
        }
    },
    methods:{
        // ...mapMutations('student',['addmes']),
        handClick(){
            // this.$store.state.name = this.name;
            // this.$store.state.age  = this.age;
            var temp = {
                name:this.name,
                age:this.age,
                id:+new Date(),
            }
            this.$store.commit('student/addmes',temp);
            // this.addmes(temp);
        }
    }
}
</script>

<style scoped>
    .addstudent div{
        margin-bottom: 20px;
    }
    .addstudent p{
        margin-bottom: 20px;
    }
</style>