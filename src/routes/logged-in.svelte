<script>
  import { GitHubLoggedIn } from "ndtech-svelte-components"
  import { stores } from '@sapper/app'
  const {session} = stores();
</script>

<GitHubLoggedIn session={session} />