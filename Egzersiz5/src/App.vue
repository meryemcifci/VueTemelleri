<template>
  <div class="none">
    <h2>Öğrencilerim</h2>
    <Student v-for="student in students" :key="student.id" :name="student.name" :phone="student.phone" :email="student.email" :isPassed="student.isPassed"/>
  </div>
 </template>
 
 <script>
 import Student from './components/Student.vue'
 
 
 export default {  
   name: 'App',
   components:{Student},
   
   data(){
     return {
      students:[
        {
          id:1,
          name:"Can Boz",
          phone:"555 555 55 55",
          email:"ccc@hotmail.com",
          isPassed:true

        },
        {
          id:2,
          name:"Hakan Elif",
          phone:"555 555 55 44",
          email:"hhh@hotmail.com",
          isPassed:false
        },
        {
          id:3,
          name:"Mustafa Elif",
          phone:"555 555 55 33",
          email:"mmm@hotmail.com",
          isPassed:false
        },
      ]
     }
   }
  
}
</script>
<style>
h2{
  text-align: center;
  color:#000000;
}
div .none{ /* hata düzeltmek için template tek div içine almam gerekiyordu bunun sonucunda oluşan kutuyu css özellikleri ile yok ettim*/
  border: none;
  box-shadow: none;
  padding: 0;
  margin: 0;
}
</style>