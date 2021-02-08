<script>
	import Nav from '../components/Nav.svelte'
  	import LoadingBar from './_components/LoadingBar.svelte'
 	import Footer from '../components/Footer.svelte'
</script>

<LoadingBar/>
<Nav/>
<head>
	<script data-ad-client="ca-pub-6882490618446355" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
</head>

<main>
	<slot></slot>
</main>

<Footer />
