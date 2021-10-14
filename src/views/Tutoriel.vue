<template>
    <div class="Tutoriel">
        <img class="trace" src="../assets/Tracé2.png" alt="">
       <div id="bio">
           <img src="../assets/C_sharp_keyboard.png" alt="">
       </div>
       
    </div>
 
      <Footer/>
</template>
<style scoped>
.Tutoriel {
    height: 72.8vh;
    display: flex;
}
.trace{
    position: absolute;
    left: 73.2%;
    top: -32.95%;
    height: 130vh;
    z-index: 0;
}
body{
    background-color: white;
    width: 50%;
}
#bio{
    display: flex;
    margin: 0 60px;
    z-index: 2;
}
#bio img{
    width: 80%;
    height: 40vh;
}

</style>
<script>
import Footer  from '../components/Footer.vue'
export default {
    components: {
    Footer
  }
}
</script>