<template>
<form>
    <div >
        <label>Ad </label>
        <input type="text">
    </div>
    <div >
        <label>Telefon </label>
        <input type="tel">
    </div>
    <div>
        <label>Email </label>
        <input type="email">
    </div>
    <div>
        <label>Dersi Geçti Mi? </label>
        <input type="checkbox">
    </div>
</form>
</template>
  
<script>
   export default {  
     name: 'new-student',

     data(){
        return {


        }
    },
     methods:{
      
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