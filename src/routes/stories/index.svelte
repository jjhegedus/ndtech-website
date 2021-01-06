<script>
  import { Stories, Voter, Context } from "ndtech-svelte-components"
  import { goto, stores } from '@sapper/app'
  const {session} = stores();
</script>
<Stories session={session} Voter={Voter}/>