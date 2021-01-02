<script>
  import { Stories, Voter, getData, makeRestStore } from "ndtech-svelte-components"
  import { goto, stores } from '@sapper/app'
  const {session} = stores();
  let RESTStore = makeRestStore(session);
</script>

<Stories session={session} restStore={RESTStore} Voter={Voter}/>