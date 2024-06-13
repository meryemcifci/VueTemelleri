const app = Vue.createApp({
    data() {
      return {
        skill: '',
        tasks: [],
        isVisible:true, 
      
      };
    },
    watch:{},
    computed:{},
    methods:{
      deleteSkill(){
        this.tasks.splice(index,1);
      },
      addSkill(){
        this.tasks.push(this.skill); 
      },
      toggleTasks(){
        this.isVisible= !this.isVisible;
      }

    },
})
  app.mount('#frontend');
  