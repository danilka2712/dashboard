<script>
    import { setContext } from "svelte";
    import { writable } from "svelte/store";

    const activeComponent = writable(null);

    setContext("active", activeComponent);
</script>

<div class=" bg-gray-500 p-8 rounded-lg w-80 space-y-4">
    <slot />
</div>
