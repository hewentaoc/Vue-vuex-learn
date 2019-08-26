<template>
    <ul>
        <!-- {{$store.state.name}}
        {{$store.state.age}}
        <hr>
        {{name}}
        {{age}}
        <hr>
        {{$store.getters.person}}
        {{person}} -->
        <li v-for="item in studentList" :key="item.id">
            {{item.name}}
            {{item.age}}
        </li>
        
    </ul>
</template>

<script>
    import {mapState,mapGetters,mapMutations} from 'vuex';
export default {
    methods:{
        
    },
    computed:{
        ...mapState('student',['name','age','studentList']),
        ...mapGetters(['person']),
    }
}
</script>

<style scoped>
     @import '../../assets/style/reset.css';
     li{
         margin-bottom: 15px;
     }
  
</style>
