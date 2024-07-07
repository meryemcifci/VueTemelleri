<template>
<form @submit.prevent="submitForm">
    <div class="formControl">
        <label>Ad </label>
        <input type="text" v-model="enteredName">
    </div>
    <div class="formControl" >
        <label>Telefon </label>
        <input type="tel"  v-model="enteredPhone">
    </div>
    <div class="formControl">
        <label>Email </label>
        <input type="email"  v-model="enteredEmail">
    </div>
    <div class="formControl">
        <label>Dersi Geçti Mi? </label>
        <input type="checkbox"  v-model="enteredIsPassed">
    </div>
   
    <button>Ekle</button>
    
</form>
</template>
  
<script>
   export default {  
     name: 'new-student',
     emits:["addStudent"],

     data(){
        return {
          enteredName: '',
          enteredPhone: '',
          enteredEmail: '',
          enteredIsPassed: false,

        }
    },
     methods:{
      submitForm(){
        this.$emit('addStudent',this.enteredName,this.enteredPhone,this.enteredEmail,this.enteredIsPassed)
        this.enteredEmail='';
        this.enteredName='';
        this.enteredPhone='';
        this.enteredIsPassed=false;
      }
     }
   }
   </script>
  
   <style>
   *{
    box-sizing:border-box;
    margin: 0;
    padding: 0;

   }
   div .formControl{ /* hata düzeltmek için template tek div içine almam gerekiyordu bunun sonucunda oluşan kutuyu css özellikleri ile yok ettim*/
    border: none;
    box-shadow: none;
    padding: 0;
    margin: 20px;
  }
  form{
    box-shadow: rgba(0,0,0,0.35) 0px 5px 15px;
    max-width: 600px;
    width: 100%;
    margin:20px auto;
    padding:15px;
    border-radius: 20px;
    text-align: center;
  }
  form input{
    width: 100%;
    padding: 5px;
    border-radius: 20px;

  }
 
  
   
   </style>