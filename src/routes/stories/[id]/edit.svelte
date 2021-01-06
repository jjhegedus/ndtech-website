<script context="module">

  export async function preload({ params }, session) {
    if (!session.user) {
      // return this.redirect(302, 'login')
      console.log('ndtech-svelte-components:edit.svelte:preload: !session.user: JSON.stringify(session) = ' + JSON.stringify(session))
    }
  }
</script>

<script>
  import { EditStory, ButtonGroup, RESTStore, Context } from "ndtech-svelte-components"
  import { goto, stores } from '@sapper/app'
  const {session, page} = stores();
  console.log("JSON.stringify(page) = " + JSON.stringify(page));
  const { id } = $page.params;
  console.log("page:stories:edit.svelte: id = " + id);
</script>

<EditStory storyId={id} restStore={RESTStore} session={session} goto={goto} />