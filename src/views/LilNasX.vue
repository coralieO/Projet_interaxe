<template>
    <div class="lylnasX">
        <img class="trace" src="../assets/Tracé2.png" alt="">
       <div id="bio">
           <div class="bio">
           <p>Lil Nas X, de son vrai nom Montero Lamar Hill, né le 9 avril 1999 à Lithia Springs en Géorgie,
                est un rappeur, auteur-compositeur-interprète et danseur-chorégraphe américain..</p>
           <p>Il se fait mondialement connaître en 2019 avec la chanson Old Town Road, mélange de country et de rap,
                    qui devient le titre ayant passé le plus de semaines à la première place du Billboard Hot 100 américain,
                    puis avec plusieurs clips dans lesquels il affirme son homosexualité de façon très militante et décomplexée.
                     Il sort son premier album, Montero (en), en 2021.
            </p>
       </div>
       <div class="artiste">
           <img src="../assets/lilnasx.png" alt="">
       </div>
       </div>
       </div>
 
      <Footer/>
</template>
<style scoped>
.lylnasX {
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