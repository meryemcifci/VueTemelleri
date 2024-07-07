<template>
 <div>
    <h2>{{ username }}</h2>
    <h3>{{ point }}</h3>
 </div>
</template>

<script>
export default {
  name:"student-info",
  props: {
    username:{
      type:String,
      required:true,
    },
    point: {
      type:Number,
      required:true,
    }

  }
}  
</script>

<style scoped>

</style>

