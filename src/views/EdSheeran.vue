<template>
    <div class="EdSheeran">
        <img class="trace" src="../assets/Tracé2.png" alt="">
       <div id="bio">
           <div class="bio">
           <p>Ed Sheeran, né le 17 février 19<span>9</span>1 à Halifax dans le Yorkshire de l'Ouest, est un auteur-compositeur-interprète et guitariste anglais. 
               Sa carrière professionnelle commence en 2011 avec la maison de disques Atlantic Records, qui signe son premier album, +, 
               écoulé à <span> 4 </span>millions de copies1. Suivent les albums x (2014) et ÷ (2017), qui rencontrent un succès international encore plus grand2.
            </p>
            <p>Il écrit par ailleurs des chansons pour plusieurs autres artistes, tels que Justin Bieber, Taylor Swift, Robbie Williams, James Blunt ou encore les One Direction, BTS.</p>
            <p>Il signe un contrat avec le label Asylum Records, filiale d'Atlantic Records, au début de l'année 2011. Son premier album, +, 
                sorti en septembre 2011, atteint la 1re place des ventes au Royaume-Uni7, où il figure parmi les dix meilleures ventes de l'année 20118. 
                L'album connaît également le succès à l'international (no 1 en Australie, no <span>5</span> aux États-Unis et au Canada...), 
                atteignant les 4 millions de copies vendues 9 grâce aux singles The A Team, You need me I don't need you,
                 Lego House (qui se classent tous dans le Top 5 au Royaume-Uni), Drunk, Small Bump et Give me love.
                  The A-Team deviens son 1er international et se classe dans le top <span>1</span>0 dans plusieurs pays, lançant la carrière d'Ed Sheeran à travers le monde.</p>
       </div>
       <div class="artiste">
           <img src="../assets/sheeran.png" alt="">
       </div>
       </div>
       </div>
 
      <Footer/>
</template>
<style scoped>
.EdSheeran {
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
span:hover{
    cursor:pointer
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
   padding: 10px 30px 40px 30px;
   width: 45%;
   height: 60vh;
   font-size: 18px;
   margin-right: 40px;
}
.artiste {
 text-align: right;
}
.artiste img{
 width: 90%;
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