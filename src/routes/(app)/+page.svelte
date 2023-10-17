<script lang="ts">
    import Calendary from "$lib/components/calendary/Calendary.svelte";
    import { slide } from "svelte/transition";
    let analytics = [
        { name: "Всего постов", quantity: 896 },
        { name: "Пользователи", quantity: 400 },
        { name: "Просмотры", quantity: 869 },
    ];
    let tasks = [
        {
            id: 1,
            name: "Первая небольшая задача",
            status: true,
            date: "30.9.2023",
        },
        {
            id: 2,
            name: "Вторая небольшая задача",
            status: false,
            date: "30.10.2023",
        },
    ];

    function addTask(id) {
        if (tasks.length >= 4) return;
        if (newNameTask.length < 2) return;
        let news = { id: id, name: newNameTask, status: false };
        tasks.push(news);
        newNameTask = "";
        tasks = tasks;
    }

    let newNameTask = "";

    let data = new Date().toLocaleDateString();

    function handleMessage(event: CustomEvent) {
        data = event.detail.text;
    }
</script>

<div class="flex flex-col gap-8 mt-12">
    <div class="flex justify-between h-24 p-6 bg-white rounded-lg shadow-sm">
        <div>1</div>
        <div>1</div>
    </div>
    <div class="flex flex-row space-x-8">
        <div class="p-6 bg-white rounded-lg basis-2/3">
            <p class="mb-8 text-lg font-semibold">Календарь задач</p>
            <div class="flex gap-8">
                <div class="flex w-full">
                    <Calendary on:day={handleMessage} />
                </div>
                <div class="w-full">
                    <div
                        class="relative flex flex-col justify-between h-full p-4 border rounded-lg border-line"
                    >
                        <div class="flex flex-col gap-2">
                            <ul class="flex flex-col gap-3 list-inside">
                                {#each tasks.filter((task) => task.date === data) as task}
                                    <div
                                        class="flex gap-3 pb-1 border-b borer-line"
                                    >
                                        <input
                                            bind:checked={task.status}
                                            class="w-3.5 accent-primary"
                                            type="checkbox"
                                            name=""
                                            id=""
                                        />
                                        <li
                                            class={task.status
                                                ? " line-through text-secondary"
                                                : ""}
                                        >
                                            {task.name}
                                        </li>
                                    </div>
                                {/each}
                            </ul>
                        </div>
                        <form class="flex flex-col gap-2">
                            <input
                                bind:value={newNameTask}
                                type="text"
                                placeholder="Напишите задачу "
                                class="w-full p-2 border rounded-lg placeholder:text-sm border-line"
                                maxlength="30"
                                name=""
                                id=""
                            />
                            <button
                                type="submit"
                                on:click={() => addTask(tasks.length + 1)}
                                class="self-end w-full p-2 text-white rounded-lg bg-primary"
                                >Добавить</button
                            >
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div style="flex:1" class="bg-white rounded-lg h-96 basis-1/3">
            <div>
                <p>Важное</p>
            </div>
        </div>
    </div>
</div>
