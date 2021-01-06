<script>
  import { CreateStory, ButtonGroup, RESTStore } from "ndtech-svelte-components"
  import { goto, stores } from '@sapper/app'
  const {session} = stores();
  let story= { title: '', type: 'text', content: '' }
</script>

<CreateStory story={story} buttonGroup={ButtonGroup} goto={goto} stores={stores} restStore={RESTStore} />