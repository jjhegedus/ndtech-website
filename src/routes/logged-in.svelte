<script>
  import { GitHubLoggedIn } from "ndtech-svelte-components"
  import { stores } from '@sapper/app'
  const {session} = stores();
  console.log("JSON.stringify(session) = " + JSON.stringify(session));

  const test = (newSession) => {
    console.log("JSON.stringify(newSession) = " + JSON.stringify(newSession));
  }

  session.subscribe(test);

</script>

<!-- <GitHubLoggedIn goto={goto} restStore={RESTStore} Voter={Voter}/> -->
<GitHubLoggedIn session={session} />