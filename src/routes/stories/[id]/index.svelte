<script context="module">

  export async function preload({ params }, session) {
    if (!session.user) {
      // return this.redirect(302, 'login')
      console.log('page:stories:[id]/index.svelte:preload: !session.user: JSON.stringify(session) = ' + JSON.stringify(session))
    }
  }
</script>

<script>
  import { writable } from 'svelte/store'
  import { Story, CreateStoryStore, RESTStore, Voter } from "ndtech-svelte-components"
  import { stores } from '@sapper/app'
  import {onMount} from 'svelte'
  const {page} = stores();
  let StoryStore = CreateStoryStore(RESTStore);
  const { id } = $page.params;
  console.log("id = " + id);
  let story = writable(new Promise(() => {}));

  onMount(async () => {
    const localStory = await StoryStore.getStory(id);
    story.set(Promise.resolve(localStory));
  })
</script>
{#await $story}
<img alt="loading" src="loading-circles.gif" />
{:then $story}
<Story story={$story} Voter={Voter} />
{:catch error}
<h1>Error accessing Story!!!</h1>
<h2>{error}</h2>
{/await}