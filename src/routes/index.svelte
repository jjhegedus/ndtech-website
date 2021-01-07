<script>
  import {getCookie, GetUser, Context} from 'ndtech-svelte-components'
  import {onMount} from 'svelte'
  import { writable } from 'svelte/store' 
  import Home from './_components/Home.svelte'

  let user = writable(new Promise(() => {}));

  onMount(async () => {
    const token = getCookie('id_token');
    const u = await GetUser(token);
    u.token = token;
    Context.user = u;
    Context.set(Context);
    user.set(Promise.resolve(u));
  })
</script>

{#await $user}
<img alt="loading" src="loading-circles.gif" />
{:then $user}
<Home currentPage="{1}"/>
{:catch error}
<h1>Error verifying user!!!</h1>
<h2>{error}</h2>
{/await}