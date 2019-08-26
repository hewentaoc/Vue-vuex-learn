export default {
    namespaced:true,
    state: {
        name: 'hwt',
        age: 23,
        studentList: [],
    },
    getters: {
        person(state) {
            return "姓名:" + state.name + ",年龄:" + state.age + "";
        }
    },
    mutations: {
        addmes(state, payload) {
            state.studentList.push(payload);
        }
    },
    actions: {

    }
}