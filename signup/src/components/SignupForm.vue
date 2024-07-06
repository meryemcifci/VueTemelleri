<template>
    <div>
    <h2>Form Projesi</h2>
        <form>
            <label> Email:</label>
            <input type="email" v-model="email" required>
            <label> Şifre:</label>
            <input type="password"  v-model="password" required>
            <label> Cinsiyet:</label>
            <select v-model="gender">
                <option value="">Lütfen seçim yapınız</option>
                <option value="male">Erkek</option>
                <option value="female">Kadın</option>
            </select>
            <label>Bildiğiniz Diller</label>
            <input type="text" v-model="skill" @keyup.alt="addSkill($event)">
            <div v-for="skillItem in skills" :key="skillItem" class="skillItem">
            <span>{{skillItem}}</span>
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
            skills:[]
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
  