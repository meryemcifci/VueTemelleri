<template>
    <div>
    <h2>Form Projesi</h2>
        <form @submit.prevent="handleSubmit()">
            <label> Email:</label>
            <input type="email" v-model="email" required>
            <label> Şifre:</label>
            <input type="password"  v-model="password" required>
            <div v-if="passwordError" >
                {{ passwordError }}
            </div>
            <label> Cinsiyet:</label>
            <select v-model="gender">
                <option value="">Lütfen seçim yapınız</option>
                <option value="male">Erkek</option>
                <option value="female">Kadın</option>
            </select>
            <label>Bildiğiniz Diller</label>
            <input type="text" v-model="skill" @keyup.alt="addSkill($event)">
            <div v-for="skillItem in skills" :key="skillItem" class="skillItem">
             <span @click="deleteSkill(skillItem)">{{skillItem}}</span>
            </div>
            <div class="term">
                <input class="termInput" v-model="term" type="checkbox" required>
                <label>Kullanım koşullarını kabul edniz</label>
            </div>
            <div class="btn">
                <button>Kaydol</button>
            </div>

        </form>
    </div>
  </template>
  
  <script>
  
  export default {
    data(){
        return{
            email:'meryemcifcii06@gmail.com',
            password:'',
            gender:'',
            term:false,
            skill:'',
            skills:[],
            passwordError:null
        }
    },
    methods:{
        addSkill(e)
        {
            if(e.key === ',' && this.skill)
            {
                if(!this.skills.includes(this.skill)){
                     this.skills.push(this.skill);
                }
               
                  this.skill=''
            }          
         
        },
        deleteSkill(skill){
            this.skills.splice(this.skills.indexOf(skill),1)
        },
        handleSubmit(){

            this.passwordError=this.password.length>5?'':'Şifreniz en az 6 karakter olmalı'
            console.log("Email:",this.email)
            console.log("Password:",this.password)
            console.log("Gender:", this.gender)
            console.log("Term:",this.term)
            console.log("Skills:",this.skills)
        }
    },

   
  }

  </script>
  
  <style>
  form {
        max-width: 450px;
        width:100%;
        padding: 40px;
        border: 1px solid #f4d0d0;
        border-radius: 20px;
        background-color: #ecd8d8;
        text-align: left;
        margin:40px auto;
    }
    input,select{
        width: 100%;
        padding: 10px;
        border-radius: 10px;
        border:none;
        display: flex;
        flex-direction: column;
        outline: none;
    }

    label{
        margin:25px 10px;
        display: inline-block;
        font-size:15px;
        font-weight: bold;
        letter-spacing: 2px;
    }
    .termInput{
        width:16px;
    }
    .term{
        display: flex;
        align-items: center;
    }
    button{
        border:none;
        background: green;
        color:white;
        padding:10px 20px;
        font-size:18px;
        border-radius: 20px;
        
    }
    .skillItem{
        background: white;
        margin: 20px 10px;
        display:inline-block;
        padding:8px 10px;
        border-radius:20px;
        color:purple;
        letter-spacing: 1px;
        font-weight: bold;
        cursor: pointer;
    }
   
  </style>
  