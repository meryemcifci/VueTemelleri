<template>
  <div class="none">
    <h2>Öğrencilerim</h2>
    <Student  name="Can Boz" phone="555 555 55 55" email="ccc@hotmail.com" isPassed="1"/>
    <Student  name="Hakan Elif" phone="555 555 55 44" email="hhh@hotmail.com" isPassed="0"/>
    <Student  name="Mustafa Elif" phone="555 555 55 33" email="mmm@hotmail.com" isPassed="1"/>
  </div>
 </template>
 
 <script>
 import Student from './components/Student.vue'
 
 
 export default {  
   name: 'App',
   components:{Student},
   
   data(){
     return {
      
     }
   }
  
}
</script>
<style>
h2{
  text-align: center;
  color:#000000;
}
div .none{
  border: none;
  box-shadow: none;
  padding: 0;
  margin: 0;
}
</style>