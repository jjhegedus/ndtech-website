<script>
	import Nav from '../components/Nav.svelte'
  	import LoadingBar from './_components/LoadingBar.svelte'
 	import Footer from '../components/Footer.svelte'
</script>

<LoadingBar/>
<Nav/>

<main>
	<slot></slot>
</main>

<Footer />
