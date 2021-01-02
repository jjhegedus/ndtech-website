<script>
  import { EditStory, ButtonGroup, makeRestStore } from "ndtech-svelte-components"
  import { goto, stores } from '@sapper/app'
  const {session} = stores();
  let RESTStore = makeRestStore(session);
</script>

<EditStory restStore={RESTStore} />