<script lang="ts">
    import { onNavigate } from "$app/navigation";
    import "../app.css";
    import { page } from "$app/stores";
    import Button from "$lib/components/button/Button.svelte";
    import ButtonOutline from "$lib/components/button/ButtonOutline.svelte";
    import HomeLine from "$lib/public/icons/home-line.svelte";
    import FileMain from "$lib/public/icons/file-main.svelte";
    import Setting from "$lib/public/icons/setting.svelte";
    import { onMount } from "svelte";
    let menuTo = [];
    onMount(async () => {
        let res = await fetch("/api/menu", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });
        let data = await res.json();
        menuTo = data;
    });
    onNavigate((navigation) => {
        if (!document.startViewTransition) return;

        return new Promise((resolve) => {
            document.startViewTransition(async () => {
                resolve();
                await navigation.complete;
            });
        });
    });
    const mainMenu = [
        { name: "Рабочий стол", href: "/", icon: HomeLine },
        { name: "Контент", href: "/content", icon: FileMain },
    ];
    function toggle() {
        document.body.classList.toggle("dark");
        document.body.classList.toggle("light");
    }
</script>

<div class="flex">
    <header
        class="w-24 sticky top-0 h-screen text-primary border-r p-2 py-4 border-line bg-white dark:bg-black items-center flex flex-col justify-between"
    >
        <div class=" space-y-4">
            {#each mainMenu as menu}
                <a
                    href={menu.href}
                    class="flex flex-col items-center gap-1 text-primary font-medium hover:bg-[#D9E2EC]/50 rounded-md p-2"
                >
                    <svelte:component this={menu.icon} />
                    <span class="text-xs flex text-center">{menu.name}</span>
                </a>
            {/each}
        </div>
        <div class="flex h-12 justify-center items-center">
            <a
                class="flex flex-col items-center gap-1 text-primary font-medium hover:bg-[#D9E2EC]/50 rounded-md p-2"
                href="/setting"
            >
                <Setting />
                <span class="text-xs flex text-center">Настройки</span>
            </a>
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
                {#each menuTo as menu}
                    {#if menu.category === $page.url.pathname}
                        <li class="">
                            <a
                                class="hover:bg-hover hover:text-primary flex cursor-pointer rounded text-secondary p-2 px-4 w-full"
                                href="/">{menu.name}</a
                            >
                        </li>
                    {/if}
                {/each}
            </ul>
        </div>
    </section>
    <div class="w-full overflow-auto pt-6 text-black bg-base">
        <div>
            <div class="px-8 flex items-center justify-between">
                <nav class="breadcrumbs flex space-x-6">
                    <div class=" text-xl">
                        {$page.url.pathname}
                    </div>
                </nav>

                <div class="flex space-x-5">
                    <Button />
                    <ButtonOutline />
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
