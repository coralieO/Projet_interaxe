<template>
  <div class="Accueil">
    <div class="main">
  <div class="titre">
   <img src="../assets/STUDIOUNIVERSEL.png" alt="">
  </div>
   <div class="piano">
     <img src="../assets/synthesizer.png" alt="">
     <div class="tutoriel"><router-link to="/Tutoriel"><p>Tutoriel</p></router-link></div>
  </div>
  </div>
  <Footer/>
  </div>

</template>

<style scoped>
.main{
  text-align: center;
  margin: 0 0 0 60px;
 
  display: flex;
}
.titre{
  width: 65%;
}
.titre img{
  width: 100%;
}
.tutoriel p{
    background-color: rgba(245, 245, 245, 0.578);
    width: 10%;
    right: 5%;
    bottom: -10%;
    POSITION: ABSOLUTE;
    padding: 10px 0px;
    color: black;
    border-radius: 25px;
    border: 1px solid black;
}
</style>

<script>

import Footer  from '../components/Footer.vue'
export default {
  name: 'Accueil',
  components: {
     Footer
  }
}
</script>
