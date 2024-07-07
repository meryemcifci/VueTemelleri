<template>
  <div class="mainContent">
    <StudentForm @addStudent="addInformation"/>
    <h2>Öğrencilerim</h2>
    <Student v-for="student in students" :key="student.id" :id="student.id" :name="student.name" :phone="student.phone" :email="student.email" :isPassed="student.isPassed"
    @toggleStudentIsPassed="toggleStudentStatus"/>
  </div>
 </template>
 
 <script>
 import Student from './components/Student.vue'
  import StudentForm from './components/StudentForm.vue'
 
 export default {  
   name: 'App',
   components:{Student,StudentForm},
   
   data(){
     return {
      students:[
        {
          id:155,
          name:"Can Boz",
          phone:"555 555 55 55",
          email:"ccc@hotmail.com",
          isPassed:true

        },
        {
          id:255,
          name:"Hakan Elif",
          phone:"555 555 55 44",
          email:"hhh@hotmail.com",
          isPassed:false
        },
        {
          id:355,
          name:"Mustafa Elif",
          phone:"555 555 55 33",
          email:"mmm@hotmail.com",
          isPassed:true
        },
      ]
     }
   },
   methods:{
    toggleStudentStatus(studentId){
      console.log(studentId)
      const myStudent = this.students.find((student)=>student.id===studentId)
      myStudent.isPassed = !myStudent.isPassed
    },
    addInformation(name,phone,email,isPassed){
      const newStudentObject = {
        id:new Date().toISOString(),//unıq değer için
        name:name,
        phone:phone,
        email:email,
        isPassed:isPassed
      }
      this.students.push(newStudentObject)
    }

   },
   
  
}
</script>
<style>
h2{
  text-align: center;
  color:#000000;
}
div .mainContent{ /* hata düzeltmek için template tek div içine almam gerekiyordu bunun sonucunda oluşan kutuyu css özellikleri ile yok ettim*/
  border: none;
  box-shadow: none;
  padding: 0;
  margin: 0;
}
form .formControl{
  margin:20px;
}
form label{
    font-weight:bold;
    font-size:15px;
  
}
</style>