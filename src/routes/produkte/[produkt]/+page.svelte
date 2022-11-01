<script lang="ts">
    import type { PageData, ActionData } from './$types';
  
    export let data: PageData;
    export let form: ActionData;
</script>

<h1>Produkt</h1>

{#if form?.success}
<p>Success!</p>
{/if}

<form method="POST" action="?/cart">
    <input type="submit" value="Preis berechnen" formaction="?/calc">
    <input type="submit" value="In den Warenkorb">
</form>