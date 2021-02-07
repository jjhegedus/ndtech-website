<script context="module">
  export async function preload(page, session){
    const res = await this.fetch('/getEnv/GITHUB_CLIENT_ID.json');
    const envVar = await res.json();
		const githubClientId = envVar.GITHUB_CLIENT_ID;
    return {githubClientId}
  }
</script>

<script>
  export let githubClientId;
	console.log("-------------------githubClientId-----------------");
		console.log(githubClientId);
	console.log("-------------------githubClientId-----------------\n");
	
	import Nav from '../components/Nav.svelte'
  	import LoadingBar from './_components/LoadingBar.svelte'
 	import Footer from '../components/Footer.svelte'
</script>

<LoadingBar/>
<Nav githubClientId={githubClientId}/>

<main>
	<slot></slot>
</main>

<Footer />
