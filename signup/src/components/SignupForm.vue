<template>
    <div>
    <h2>Form Projesi</h2>
        <form>
            <label> Email:</label>
            <input type="email" v-model="email" required>
            <label> Şifre:</label>
            <input type="password"  v-model="password" required>
            <label> Cinsiyet:</label>
            <select>
                <option value="erkek">Erkek</option>
                <option value="kadın">Kadın</option>
            </select>
            <div class="term">
                <input class="termInput" type="checkbox" required>
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
            email:'',
            password:'',
        }
    }
   
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
  </style>
  