const app = Vue.createApp({
    data() {
      return {
        counter:0,

      };
    },
    watch:{
    },
    computed:{
        result(){

            if (this.counter<25){
                return '25den küçük değerdesiniz';
            }
            else if(this.counter==25 ){
                return this.counter;
            }
            else{
                return '25den büyük değerdesiniz';
            };
        }
    },
    methods:{
        add(number){
            this.counter=this.counter+number;
        },
        reduce(number){
            this.counter=this.counter-number;
        }
    },
})
  app.mount('#frontend');
  