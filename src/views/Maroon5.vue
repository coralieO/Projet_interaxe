<template>
    <div class="maroon5">
        <img class="trace" src="../assets/Tracé2.png" alt="">
       <div id="bio">
           <div class="bio">
           <p>Maroon 5 est un groupe de pop rock américain, originaire de Los Angeles, en Californie. 
               Le groupe est récompensé à de nombreuses reprises pour son premier album Songs About Jane, sorti en juin 2002, 
               qui se retrouve en tête des classements musicaux de nombreux pays. De même, leur second album, 1.22.03.Acoustic,
                qui reprend des titres en version acoustique de l'album Songs About Jane, est certifié disque de platine[Où ?]. 
                Maroon 5 est en permanence en tournée depuis la formation du groupe en 1997, se produisant notamment côtés de John Mayer, Michelle Branch, Gavin DeGraw,
                 Phantom Planet, The Like, Jason Mraz, The Thrills ou encore The Donnas.
                Ils ont joué en première partie des Rolling Stones en août 2005.
            </p>
       </div>
       <div class="artiste">
           <img src="../assets/maroon5.png" alt="">
       </div>
       </div>
       </div>
 
      <Footer/>
</template>
<style scoped>
.maroon5 {
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
   padding: 10px 30px 40px 30px;
   width: 45%;
   height: 50vh;
   font-size: 18px;
   margin-right: 40px;
}
.artiste img{
 width: 90%;
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