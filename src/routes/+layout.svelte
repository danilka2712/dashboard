<script lang="ts">
    import { onNavigate } from "$app/navigation";
    import "../app.css";
    import { page } from "$app/stores";

    onNavigate((navigation) => {
        if (!document.startViewTransition) return;

        return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });
    function toggle() {
        document.body.classList.toggle("dark");
        document.body.classList.toggle("light");
    }
</script>

<div class="flex">
    <header
        class="w-24 sticky top-0 h-screen text-primary border-r p-4 py-6 border-line bg-white dark:bg-black flex flex-col justify-between"
    >
        <div>1</div>
        <div class="flex h-12 justify-center items-center">
            <button
                on:click={() => toggle()}
                class="border-2 border-line hover:border-hover text-secondary h-full w-full rounded-lg"
                >Свет</button
            >
        </div>
    </header>
    <section
        class="w-72 sticky top-0 h-screen text-black border-line border-r bg-white"
    >
        <div class="border-b border-line p-4 py-6">
            <label for="search" class="block">
                <input
                    class="p-2 px-4 w-full placeholder: focus:outline-none focus:bg-hover rounded-md placeholder:text-secondary/70"
                    type="search"
                    name=""
                    id=""
                    placeholder="Поиск по базе..."
                />
            </label>
        </div>
        <div class="flex figure-caption items-center justify-center">
            <ul class="flex flex-col w-full p-4 gap-2">
                <li class="">
                    <a
                        class="hover:bg-hover hover:text-primary flex cursor-pointer rounded text-secondary p-2 px-4 w-full"
                        href="/">Пользователи</a
                    >
                </li>
                <li class="block">
                    <a
                        class="hover:bg-hover hover:text-primary flex cursor-pointer rounded text-secondary p-2 px-4 w-full"
                        href="/login">Пользователи</a
                    >
                </li>
            </ul>
        </div>
    </section>
    <div class="w-full overflow-auto pt-6 text-black bg-base">
        <div>
            <div class="px-8 flex items-center justify-between">
                <nav class="breadcrumbs flex space-x-6">
                    <div class=" text-xl">
                        {$page.url.pathname === "/" ? "Главная" : "Постыdd"}
                    </div>
                </nav>

                <div class="flex space-x-5">
                    <button
                        type="button"
                        class=" border-primary border-2 p-2 px-6 text-primary rounded text-font-base font-medium"
                        ><i class="" />
                        <span class="txt">Новая запись</span></button
                    >
                    <button
                        type="button"
                        class="bg-primary border-2 border-black p-2 px-6 text-font-base text-white rounded font-medium"
                        ><i class="" />
                        <span class="txt">+ Новая запись</span></button
                    >
                </div>
            </div>
            <slot />
        </div>
    </div>
</div>

<style lang="postcss">
    header {
        view-transition-name: header;
    }
    section {
        view-transition-name: section;
    }
    :root {
        background-color: var(--bg-base);
    }
</style>
