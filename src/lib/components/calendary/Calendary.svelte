<script lang="ts">
    import { createEventDispatcher, onMount } from "svelte";

    export let date: Date = new Date();

    let year = date.getFullYear();
    let month = date.getMonth();
    let dayone = new Date(year, month, 0).getDay();

    let day = date.getDate();
    // Get the last date of the month
    let lastdate = new Date(year, month + 1, 0).getDate();

    // Get the day of the last date of the month
    let dayend = new Date(year, month, lastdate).getDay();

    // Get the last date of the previous month
    let monthlastdate = new Date(year, month, 0).getDate();

    let last: Last[] = [];

    for (let j = dayone; j > 0; j--) {
        last.push({
            day: monthlastdate + 1 - j,
            data: `${monthlastdate + 1 - j}.${month}.${year}`,
        });
    }
    for (let i = 1; i <= lastdate; i++) {
        last.push({
            day: i,
            data: `${i}.${month + 1}.${year}`,
        });
    }
    for (let k = dayend; k < 7; k++) {
        last.push({
            day: k - dayend + 1,
            data: `${k - dayend + 1}.${month + 2}.${year}`,
        });
    }
    let startActive = 0;
    let endActive = 0;

    for (let index = 0; index < last.length; index++) {
        if (index < 7) {
            if (last[index].day === 1) {
                startActive = index;
            }
        }
        if (index >= 7) {
            if (last[index].day === 1) {
                endActive = index - 1;
            }
        }
    }

    const dispatch = createEventDispatcher();

    function dateDay(d: number, date: string) {
        ddd = date;
        dispatch("day", {
            text: date,
        });
    }
    let ddd = date.toLocaleDateString();
</script>

<div class="w-full">
    <ul class="grid grid-cols-7 py-2 font-semibold">
        <li class="flex items-center justify-center">ПН</li>
        <li class="flex items-center justify-center">ВТ</li>
        <li class="flex items-center justify-center">СР</li>
        <li class="flex items-center justify-center">ЧТ</li>
        <li class="flex items-center justify-center">ПТ</li>
        <li class="flex items-center justify-center">СБ</li>
        <li class="flex items-center justify-center">ВС</li>
    </ul>
    <ul class="grid items-center grid-cols-7 mt-4 text-sm">
        {#each last as l, i}
            <li
                class={i < startActive || i > endActive
                    ? "text-line flex items-center justify-center rounded-full"
                    : "flex items-center justify-center rounded-full"}
            >
                <button
                    disabled={i < startActive || i > endActive}
                    on:click={() => dateDay(l.day, l.data)}
                    class:active={l.data === ddd}
                    class="flex items-center justify-center p-1 rounded-full w-9 h-9 hover:bg-hover"
                >
                    {l.day}
                </button>
            </li>
        {/each}
    </ul>
</div>

<style>
    .active {
        background-color: var(--hover);
    }
</style>
