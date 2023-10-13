<script>
    import { createEventDispatcher } from "svelte";

    export let name = "Добавить";
    const dispatch = createEventDispatcher();

    function flash() {
        dispatch("flash");
    }
</script>

<button
    on:click={flash}
    type="button"
    class=" border-primary border-2 p-2 px-6 text-primary rounded text-font-base font-medium"
    ><i class="" />
    <span class="txt">{name}</span></button
>
