<script>
    import { getContext } from "svelte";
    import { elasticInOut, quintOut } from "svelte/easing";
    import { slide } from "svelte/transition";

    export let show = false;

    const contextId = crypto.randomUUID();
    const active = getContext("active");

    function showActive() {
        $active = contextId;
        console.log($active);
    }

    $: show = $active === contextId;
</script>

<div class=" ">
    <div class="flex flex-col">
        <button
            class="bg-gray-600/50 p-2.5 rounded-lg w-full flex"
            on:click={showActive}><slot name="title" /></button
        >
        {#if show}
            <div class="bg-blue-200" transition:slide|local>
                <slot name="description" />
            </div>
        {/if}
    </div>
</div>
