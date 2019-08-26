import Vue from 'vue'
import Vuex from 'vuex'
import student from '../store/student'
Vue.use(Vuex)

export default new Vuex.Store({
  // strict:true,
  strict:process.env.NODE_ENV != "production",
  modules:{
    student:student,
  },
  
})
