<template>
    <div class="Tayc">
      <img class="trace" src="../assets/Tracé1.png" alt="">
       <div id="bio">
           <div class="bio">
               <p class="Tayct">De son véritable patronyme Julien Bouadjie, Tayc (qu’il faut prononcer "Taykee") naît au cœur de la ville de Marseille dans les Bouches-du-Rhône. 
              Fruit de l’union entre une mère et un père camerounais, Tayc grandit dans la cité phocéenne baigné dans la culture musicale de ses géniteurs
              et dans une partie de culture musicale locale. Au cours de sa jeunesse, le Marseillais semble toutefois peu s’intéresser à la musique. 
              Ce n’est que lorsqu’il décide de quitter le sud de la France pour rejoindre la capitale que Tayc décide de se consacrer 
              à cette forme d’expression artistique.</p>
              <div class="Tayct">
              <h2>Un enfant de Marseille</h2>
              <p>De son véritable patronyme Julien Bouadjie, Tayc (qu’il faut prononcer "Taykee") naît au cœur de la ville de Marseille dans
                les Bouches-du-Rhône. Fruit de l’union entre une mère et un père camerounais, Tayc grandit dans la cité phocéenne baigné dans la culture musicale 
                de ses géniteurs et dans une partie de culture musicale locale. Au cours de sa jeunesse, le Marseillais semble toutefois peu s’intéresser à la musique. 
                Ce n’est que lorsqu’il décide de quitter le sud de la France pour rejoindre la capitale que Tayc décide de se consacrer à cette forme d’expression artistique.</p>
              </div>
            <div class="Tayct">
              <h2>L’amour et les femmes comme source d’inspiration</h2>
              <p>L’histoire d’amour entre les femmes et Tayc a débuté dès la sortie de la chanson "Un verre de trop". Depuis, le Français semble vouloir
                  aborder toutes les facettes des relations amoureuses (l’amour démesuré, la tristesse, la trahison, etc.), se positionnant tantôt en amoureux transi, 
                  tantôt en consolateur d’une amie déçue par l’échec d’une relation sentimentale. Souvent comparé à Dadju pour cette capacité à parler des femmes et
                    des relations amoureuses en termes poétiques, Tayc a d’ores et déjà conquis une bonne partie de la gent féminine. Nul doute que l’on devrait 
                    retrouver dans son album "Fleur Froide" 
                  quelques textes sentimentaux portés par une musique aux sonorités africaines.</p>
              </div>
                <div class="Tayct">
                <h2> <a href="https://youtu.be/mUTsvbridvM">"Le Temps"</a>, gros succès pour Tayc</h2>
                <p>En mars 2021, Tayc dévoile son nouveau single nommé "Le Temps". Le chanteur y parle des bienfaits du temps qui passe et qui efface tous les malheurs,
                    même les déceptions amoureuses. Dans le clip, on peut voir trois femmes aux vies bien différentes qui décident 
                    de reprendre leur destin en main. La chanson "Le Temps" récolte un énorme succès, avec plus d'un million de vues sur YouTube en seulement 24 heures.
                      Elle se classe directement en tête du classement des singles les plus écoutés en France.</p>
                      <iframe width="560" height="315" src="https://www.youtube.com/embed/mUTsvbridvM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
            <div class="artiste">
                <img src="../assets/tayc.png" alt="">
            </div>
            </div>  
  </div>
 
      <Footer/>
</template>
<style scoped>
.Tayc{
  display: flex;
}
.Tayct a {
    text-decoration: none;
    color: white;
}
.trace{
  position: absolute;
    left: 62.43410%;
    top: -26%;
    height: 238vh;
    z-index: 0;
}
body{
    background-color: white;
    width: 50%;
}
#bio{
    display: flex;
    margin: 0 60px;
    z-index: 1;
}
.bio{
   border: 1px #f5f3f1 solid;
   height: auto;
   text-align: left;
   padding: 10px 30px;
   margin-bottom: 30px;
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