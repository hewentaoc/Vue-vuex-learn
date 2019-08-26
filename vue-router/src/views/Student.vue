<template>
    <div>
        <add-student></add-student>
        <hr>
        <student-list></student-list>
    </div>
</template>


<script>
import addStudent from '../components/student/addStudent';
import studentList from '../components/student/studentList';

export default {
    components:{
        addStudent,
        studentList,
    }
}
</script>