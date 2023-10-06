<script lang="ts">
    import "../app.css";

    function toggle() {
        document.body.classList.toggle("dark");
        document.body.classList.toggle("light");
    }
</script>

<div class="flex">
    <div
        class="w-24 sticky top-0 h-screen text-black border-r p-4 dark:bg-black flex flex-col justify-between"
    >
        <div>1</div>
        <div class="flex h-12 justify-center items-center">
            <button
                on:click={() => toggle()}
                class="border h-full w-full rounded-lg">Свет</button
            >
        </div>
    </div>
    <div class="w-80 sticky top-0 h-screen text-black border-r">
        <div class="border-b p-4">
            <label for="search" class="block">
                <input
                    class="p-3 placeholder:text-sm focus:outline-none focus:bg-zinc-100 rounded-md placeholder:text-zinc-400/70"
                    type="search"
                    name=""
                    id=""
                    placeholder="Поиск по базе..."
                />
            </label>
        </div>
        <div class="flex items-center justify-center">
            <ul class="flex flex-col w-full p-6">
                <li
                    class="p-3 hover:bg-zinc-100 cursor-pointer rounded text-sm text-zinc-500"
                >
                    <a class="" href="/">Пользователи</a>
                </li>
                <li
                    class="p-3 hover:bg-zinc-100 cursor-pointer rounded text-sm text-zinc-500"
                >
                    <a class="" href="/login">Посты</a>
                </li>
                <li
                    class="p-3 hover:bg-zinc-100 cursor-pointer rounded text-sm text-zinc-500"
                >
                    <a class="" href="/login">Посты</a>
                </li>
                <li
                    class="p-3 hover:bg-zinc-100 cursor-pointer rounded text-sm text-zinc-500"
                >
                    <a class="" href="/login">Посты</a>
                </li>
                <li
                    class="p-3 hover:bg-zinc-100 cursor-pointer rounded text-sm text-zinc-500"
                >
                    <a class="" href="/login">Посты</a>
                </li>
            </ul>
        </div>
    </div>
    <div class=" overflow-auto py-4 text-black block bg-zinc-100">
        <div>
            <header
                class="page-header px-8 flex justify-between items-center mb-12"
            >
                <nav class="breadcrumbs flex space-x-6">
                    <div class="breadcrumb-item">Collections</div>
                    <div class="breadcrumb-item">users</div>
                </nav>

                <div class="flex space-x-5">
                    <button
                        type="button"
                        class="border-black border-2 p-2 px-4 text-black rounded text-sm font-medium"
                        ><i class="" />
                        <span class="txt">Новая запись</span></button
                    >
                    <button
                        type="button"
                        class="bg-black border-2 border-black p-2 px-4 text-white rounded text-sm font-medium"
                        ><i class="" />
                        <span class="txt">+ Новая запись</span></button
                    >
                </div>
            </header>
            <slot />
        </div>
    </div>
</div>
