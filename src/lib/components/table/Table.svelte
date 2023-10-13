<script lang="ts">
    import { getContext } from "svelte";
    import { slide, fade } from "svelte/transition";
    import { quadInOut, quartInOut } from "svelte/easing";
    export let search = "";
    let schema = getContext("table");
    let tableContent: any = getContext("tableContent");

    $: if (search) filterSearch();
    $: if (search.length < 1) filteredContents = tableContent;

    let selectedData = "null";
    let filteredContents: any = [];
    function filterSearch() {
        const searchRegex = new RegExp(search, "i");
        filteredContents = tableContent.filter((element) => {
            return Object.values(element).some((value) =>
                searchRegex.test(value.toString())
            );
        });
    }

    function openSidebar(data) {
        selectedData = data;
        show = true;
        // Здесь код для открытия бокового меню
    }

    function createBd(data) {
        data = data;
        tableContent = tableContent;
    }

    function formatData(data) {
        if (data === undefined || data.length === 0) return "N/A";
        return data.length > 40 ? data.substring(0, 120) + "..." : data;
    }

    let show = false;
</script>

{search}
{#if show}
    <div
        transition:fade={{ duration: 150 }}
        class="flex justify-end absolute w-full h-screen top-0 left-0 bg-black/10"
    >
        <div
            transition:slide={{
                duration: 300,
                easing: quadInOut,
                axis: "x",
            }}
            class="w-2/5 h-screen shadow-lg bg-white"
        >
            <button on:click={() => (show = false)}>Закрыть</button>

            <div class="flex flex-col p-6 gap-5">
                {#each Object.keys(selectedData) as key (key)}
                    {#if key !== "username"}
                        <div class="flex flex-col gap-1">
                            <label for="key">{key}</label>
                            <input
                                class="p-2 bg-hover rounded-lg"
                                bind:value={selectedData[key]}
                                type="text"
                            />
                        </div>
                    {/if}
                {/each}
                <textarea
                    bind:value={selectedData.username}
                    name=""
                    id=""
                    class="p-4 border-line border-2 rounded-lg"
                    cols="30"
                    rows="10"
                />
                <button on:click={() => createBd(selectedData)}
                    >Отправить</button
                >
            </div>
        </div>
    </div>
{/if}
<div class="mt-6 rounded-xl overflow-scroll">
    <div class="mb-8">
        <table class="table-auto w-full">
            <thead>
                <tr>
                    {#each schema as column}
                        <th
                            class=" dark:border-zinc-600 font-medium p-4 pl-8 pt-0 pb-3 text-zinc-400 lowercase dark:text-zinc-200 text-left"
                            ><ya-tr-span
                                data-index="42-0"
                                data-tranzincd="true"
                                data-source-lang="en"
                                data-target-lang="ru"
                                data-value="Song"
                                data-translation="Песня"
                                data-ch="0"
                                data-type="trSpan">{column.label}</ya-tr-span
                            ></th
                        >
                    {/each}
                </tr>
            </thead>
            <tbody class=" dark:bg-zinc-800">
                {#each filteredContents as t}
                    <tr
                        on:click={() => openSidebar(t)}
                        class="  cursor-pointer hover:bg-hover"
                    >
                        {#each schema as column}
                            <td
                                class="
                                     border-b border-line py-6 text-font-base font-normal dark:border-zinc-700 p-4 pl-8 dark:text-zinc-400 max-w-[8rem] break-words"
                                ><ya-tr-span
                                    data-tranzincd="true"
                                    data-target-lang="ru"
                                    data-ch="0"
                                    data-type="trSpan"
                                    >{formatData(t[column.key])}</ya-tr-span
                                ></td
                            >
                        {/each}
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>
