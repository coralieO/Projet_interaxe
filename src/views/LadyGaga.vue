<template>
    <div class="ladygaga">
<img class="trace" src="../assets/Tracé2.png" alt="">
       <div id="bio">
           <div class="bio">
           <p>Stefani Germanotta, dite Lady Gaga, née le 28 mars 1986 dans l'arrondissement de Manhattan, 
               à New York, est une auteure-compositrice-interprète, actrice et danseuse américaine.</p>
           <p>Elle fait ses débuts sur la scène musicale rock du Lower East Side, avant de se faire <br/> avec son premier album, 
               The Fame (2008), qui est un immense succès <br/> commercial à travers avec les numéros-un Just Dance et Poker Face. 
               Son second album <br/>nommé The Fame Monster (2009) sera très bien accueilli par la critique.
                Une tournée mondiale de plus de dix-huit mois suivra, The Monster Ball Tour,
             qui deviendra l’un des spectacles les plus lucratifs de tous les temps.</p>
           <p>Avec ses troisième et quatrième albums, Born This Way (2011) et Artpop (2013), 
               elle atteint de nouveau le sommet de la plupart des palmarès, 
               et arrive en tête du classement Forbes 2013 des musiciens les plus influents devant Beyoncé, Madonna et Bon Jovi2. 
               Elle aborde le jazz en enregistrant deux albums en duo avec Tony Bennett.
                Son cinquième album studio Joanne marque un tournant musical 
                pour la chanteuse en allant du country au pop-rock.</p>
       </div>
       <div class="artiste">
           <img src="../assets/LadyGaga.png" alt="">
       </div>
       </div>
       </div>
 
      <Footer/>
</template>
<style scoped>
.ladygaga {
    height: 72.8vh;
    display:flex
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
.bio{
   border: 1px #f5f3f1 solid;
   height: auto;
   text-align: left;
   padding: 10px 30px;
   width: 45%;
   font-size: 18px;
}
.artiste img{
 width: 80%;
 text-align: right;
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