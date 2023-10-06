<script>
    import { getContext } from "svelte";

    let schema = getContext("table");
    let tableContent = getContext("tableContent");
</script>

<div class=" rounded-xl overflow-x-auto">
    <div class="mb-8">
        <table class=" table-auto text-sm">
            <thead>
                <tr>
                    {#each schema as column}
                        <th
                            class=" dark:border-zinc-600 font-medium p-4 pl-8 pt-0 pb-3 text-zinc-400 lowercase text-sm dark:text-zinc-200 text-left"
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
                {#each tableContent as t}
                    <tr class=" cursor-pointer hover:bg-zinc-200">
                        {#each schema as column}
                            <td
                                class="border-b border-zinc-200 dark:border-zinc-700 p-4 pl-8 text-zinc-700 dark:text-zinc-400"
                                ><ya-tr-span
                                    data-tranzincd="true"
                                    data-target-lang="ru"
                                    data-ch="0"
                                    data-type="trSpan"
                                    >{t[column.key]}</ya-tr-span
                                ></td
                            >
                        {/each}
                    </tr>
                {/each}
            </tbody>
        </table>
    </div>
</div>
