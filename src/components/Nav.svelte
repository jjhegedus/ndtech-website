<script>
  import { goto, stores } from '@sapper/app'
  import axios from 'axios'
  import {GithubLogin} from 'ndtech-svelte-components'

  const { session } = stores()

  async function logout () {
    await axios.post('/auth/logout')
    $session.user = null
    goto('/')
  }
</script>

<nav class="navbar">
  <div class="navbar-left">
  	<a
  		class="logo"
  		href="/"
  	>
  		22nd Tech
  	</a>
  </div>

  <div>
    <ul>
        <li><a href="contact">Contact</a></li>
        <li><a href="about">About</a></li>
        <li><a href="stories">Stories</a></li>
    </ul>
</div>

  <div class="navbar-right">
    {#if $session.user}
      <span class="username">
        {$session.user.username}
        <span
          class="logout-button"
          on:click="{logout}"
        >
          logout
        </span>
      </span>
      <a
        href="/story/create"
        class="new-story-button primary-button"
      >
        New Story
      </a>
    {:else}
      <GithubLogin clientId="2d4079dfff80ceb2c3a7" />
    {/if}
  </div>
</nav>

<style>
	nav div {
		max-width: 960px;
		padding: 0 10px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: 1fr 1fr;
    align-items: center;
    /* background-image: url("/AR_1.jpg"); */
	}
	ul {
		padding: 0;
   		margin: 0;
    		text-align: right;
	}
	li {
		display: inline-block;
	}
	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
		}
</style>