<template>
  <div>
    <Student :username="student.name" :point="student.score" />
    <StudentForm @updateData="updateStudent"/>
  </div>
</template>

<script>
import Student from './components/Student.vue'
import StudentForm from './components/StudentForm.vue'

export default {
  name: 'App',
  components: {
    Student,
    StudentForm
  },
  data() {
    return{
      student:{
        name:'Meryem ÇİFCİ',
        score:95
      }
     
    }
  },
  methods:{
    updateStudent(nameStudent,scoreStudent){
      this.student={
        name:nameStudent,
        score:scoreStudent,
      }
    }
  }
}
</script>

<style>

</style>
