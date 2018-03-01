<template>
  <div class="todo">
  <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet"> 
    <div v-if="done">
    <h1>Create Recipe</h1>
    <p v-show="ingredients.title === ''">Add a title!</p>
    <p>{{title}}<p/>
    <form v-on:submit.prevent="changeTitle">
      <input type="text" v-model="messagetitle">
      <button type="submit">Add Title</button>
    </form>
    <ul>
      <li v-for="item in ingredients">{{item.text}}
      </li>
    </ul>
    <p v-show="ingredients.length === 0">Add an ingredient!</p>
    <form v-on:submit.prevent="addIngredient">
      <input type="text" v-model="messageingredient">
      <button type="submit">Add Ingredient</button>
    </form>
    <ol>
      <li v-for="item in steps">{{item.text}}
      </li>
    </ol>
    <p v-show="steps.length === 0">Add a step!</p>
    <form v-on:submit.prevent="addStep">
      <input type="text" v-model="messagestep">
      <button type="submit">Add Step</button>
    </form>
    <div class="bu">
     <button class="bu" v-on:click="finish">Finish</button>
     </div>
    </div>
    <div v-else>
    <h1>Finished Recipe</h1>
    <h2>{{title}}</h2>
    <p>Ingredients:</p>
    <ul>
      <li v-for="item in ingredients">{{item.text}}
      </li>
    </ul>
    <p>Steps:</p>
     <ol>
      <li v-for="item in steps">{{item.text}}
      </li>
    </ol>
    </div>
   <div class="footer" style="position: fixed; right: 0;bottom: 0;left: 0; padding: 1rem;background-color: white;
  text-align: center; color:gray;"><a href="https://github.com/ry98/creative3" style="color: #666;">My Github</a></div>
  </div>

</template>

<script>
 export default {
   name: 'Todo',
   data () {
     return {
        title:'',
        ingredients:[],
        steps:[],
        messagetitle:'',
        messageingredient:'',
        messagestep:'',
        done:true,
     
     }
   },
   computed: {
     
   },
   methods: {
     addIngredient: function() {
      
        this.ingredients.push({text: this.messageingredient});
       this.messageingredient = '';
     },
     addStep: function() {
     this.steps.push({text: this.messagestep});
       this.messagestep = '';;
      
     },
     changeTitle: function()
     {
  
        this.title=this.messagetitle;
     this.messagetitle='';
     },
     finish:function()
     {
      this.done= false;
     }
     
   }
 }
</script>

<style scoped>
 ul,p,ol, form {
     
     text-align: left;
     margin-left:25%;
     margin-right:25%;

 }
 button
{
    font-family: 'Raleway', sans-serif;
    background-color:#FF5733;
    color:white;
    border:none;
        padding:3px;
}
input
{
  border:none;
  border-bottom: 2px solid #FF5733;
}
 .bu
 {
  text-align: left;
     margin-left:25%;
     margin-right:25%;
 }
 h1, h2, button
 {
 text-align: center;
 }

 .todo
 {
 background: url("../../static/b.png");
 min-height: 800px;
 text-align: left;
 }

 

 .delete {
     display: none;
     margin-left: auto;
 }

 li:hover .delete {
     display: block;
 }

 label {
     width: 400px;
 }

 .completed {
     text-decoration: line-through;
 }

 /* Form */

 input[type=checkbox] {
     transform: scale(1.5);
     margin-right: 10px;
 }

 input[type=text] {
     font-size: 1em;
 }


 .controls {
     margin-top: 20px;
 }
</style>


