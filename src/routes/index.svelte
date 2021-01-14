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
<h1 style="text-align: center">Welcome to ndtech!!!</h1>
<h2 style="text-align: center">Are you tired of working all day under someone else's rules on someone else's ideas?</h2>
<p>ndtech is a place individuals can collaborate in open, transparent business without middle men taking most of the profit. It is built from the ground up to be a meritocracy where the benefit you get out of the community is based on what you put in. It was founded on the belief that life is not a zero sum game. It is a cooperative effort where we can create win scenarios and grow the pool of value so everyone gets more instead of fighting for the scraps with the other peasants" while our "betters" take the lions share.</p>
<p>Built from the ground up on 100% open source tools with ZERO VENTURE FUNDING to provide an alternative to working for others, ndtech enables you to follow your dreams without leaving you completely on your own. We are buidling a community of like minded, DIY builders, producers and visionaries who want to help the world move beyond working for the billionaires.</p> 
<p style="font-style: italic">If you're looking for John Galt... he's here.</p>
<br />
<ul>
  <li>Build a Website</li>
  <li>Start a Business</li>
  <li>Open a Shop</li>
  <li>Market Your Content</li>
  <li>Productivity Tools</li>
  <li>Training</li>
  <li>Stories Carousel</li>
</ul>
{/await}