<script>
  
  import {getCookie, GetUser, Context} from 'ndtech-svelte-components'
  import {onMount} from 'svelte'
  import { writable } from 'svelte/store' 
  import Home from './_components/Home.svelte'

  let user = writable(new Promise(() => {}));

  onMount(async () => {
    const token = getCookie('id_token');
    var u;
    try{
      u = await GetUser(token);
      u.token = token;
      Context.user = u;
      Context.set(Context);
      user.set(Promise.resolve(u));
    }
    catch(e){
      if(e = "Unauthorized"){
      user.set(Promise.reject(e));
      }
      else{
        alert("Error: " + e + "\nTry reloading your browser. If that doesn't work, call support.");
      }
    }

  })
</script>

{#await $user}
<img alt="loading" src="loading-circles.gif" />
{:then $dog}
<Home currentPage="{1}"/>
{:catch error}

<main>
<h1>Welcome to 22<sup>nd</sup> Tech!!!</h1>

<p>Upon launch, we will initially offer a variety of content covering everything from the most intricate technology to cool DIY projects.  As we build out the community, we will provide opportunties for you to work with us!  Check back with us often to see what we've released recently.</p>
<p>Visit the <a href="about">About</a> page to learn more about 22<sup>nd</sup> Tech and our future plans.</p>
<ul>
  <li><b><a href="cooking">Cooking</a></b> - recipes, cooking at home vs. eating out, experimenting with herbs/spices, food sensitivies</li>
  <li><b>DIY</b> - the journey of some of our projects - big and small</li>
  <li><b>Fitness</b> - at home workouts, weightlifting, kickboxing, yoga, jacuzzi/hot tub</li>
  <li><b>Gardening/Landscaping</b> - propgating seeds, perenials vs, annuals, irrigation, canning/freezing</li>
  <li><b>How to Build a Website</b> - like this one</li>
  <li><b>Start a Business</b> - you're probably already doing it!</li>
  <li><b>Market Your Content</b> - just get it out there to start, then keep working on it</li>
  <li><b>Productivity Tools</b> - insights and reviews on what to use</li>
  <li><b>Training</b> - a variety of topics</li>
  
</ul>
</main>
{/await}


<style>
  main {
         text-align: left;
         color: #000000;
     padding: 1em;
     max-width: 1000px;
         margin: 0 auto;
     }
   h1 {
         color: #000000;
         text-align: center;
     text-transform: uppercase;
     font-size: 36pt;
     font-weight: 400;
     }
     p {
         font-size: 16pt;
     font-weight: 150;
     }
     ul {
         font-size: 16pt;
     font-weight: 150;
     }
 </style>