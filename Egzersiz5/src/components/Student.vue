<template>

  <div>
    {{name}} {{ studentIsPassed === '1' ? '(Geçti)':'(Kaldı)' }}
    <button @click="toggleIsPassed()">Geçti  Kaldı Değiştir </button>


    <button @click="toggleDetail">Bilgileri {{ isVisible? 'Gizle' : 'Göster' }}</button>
    <ul v-if="isVisible" >
      <li>
        <p>Mailiniz</p> 
        {{email}}
      </li>
      <li>
        <p>Telefon Numaranız</p> 
        {{phone}}
      </li>
    </ul>
  </div>
  <!-- Student Componenti -->
 </template>

 <script>
 export default {  
   name: 'student-information',
  //  props:[
  //  'name',
  //  'phone',
  //  'email',
  //  'isPassed',
  //  ],
  props:{
    name:{
      type:String,
      required:true
    },
    phone:{
      type:String,
      required:true
    },
    email:{
      type:String,
      required:true
    },  
    isPassed:{
      type:String,
      required:false,
      default:'0',
      validator:function(value){
        return value=== '1' || value==='0'
      }
    },
  },
   data(){
     return {
       isVisible:false,
       studentIsPassed:this.isPassed,
     }
   },
   methods:{
    toggleDetail(){
      this.isVisible = !this.isVisible
    },
    toggleIsPassed(){
      if(this.studentIsPassed==='1'){
        this.studentIsPassed='0'
      }
      else{
        this.studentIsPassed='1'
      }
      },
   }
 }
 </script>

 <style>
  div {
  font-family: Arial, sans-serif;
  max-width: 400px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #0055ff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  button {
  display: block;
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #0056b3;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin-top: 10px;
  }

  li {
    margin-bottom: 10px;
  }

  li p {
    font-weight: bold;
    margin: 0;
    color: #fc0707;
  }

  li::before {
    content: "• ";
    color: #007bff;
    font-weight: bold;
  }

  @media (max-width: 600px) {
    div {
      padding: 15px;
    }

    button {
      font-size: 14px;
    }

    li p {
      font-size: 14px;
    }
  }
 </style>