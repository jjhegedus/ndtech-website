<script>
  import { CreateStory, ButtonGroup, makeRestStore } from "ndtech-svelte-components"
  import { goto, stores } from '@sapper/app'
  const {session} = stores();
  let RESTStore = makeRestStore(session);
  let story= { title: '', type: 'text', content: '' }
</script>

<CreateStory story={story} buttonGroup={ButtonGroup} goto={goto} stores={stores} restStore={RESTStore} />