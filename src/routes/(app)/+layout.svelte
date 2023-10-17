<script lang="ts">
    import { page } from "$app/stores";

    let navItems = [
        { name: "Статистика", href: "/" },
        { name: "Контент", href: "/content" },
        { name: "Контент", href: "/content" },
        { name: "Контент", href: "/content" },
    ];
</script>

<div class="flex">
    <section
        class="sticky top-0 h-screen text-black bg-white border-r w-72 border-line"
    >
        <div class="block p-4 py-6 border-b border-line">
            <label for="search" class="block">
                <input
                    class="w-full p-2 px-4 rounded-md placeholder: focus:outline-none focus:bg-hover placeholder:text-secondary/70"
                    type="search"
                    name=""
                    id=""
                    placeholder="Поиск по базе..."
                />
            </label>
        </div>
        <div class="flex items-center justify-center figure-caption">
            <menu class="flex flex-col w-full gap-2 p-4">
                {#each navItems as item}
                    <li class="">
                        <a
                            class:activeMenu={$page.url.pathname === item.href}
                            class="flex w-full p-2 px-4 rounded cursor-pointer hover:bg-hover hover:text-primary text-secondary"
                            href={item.href}>{item.name}</a
                        >
                    </li>
                {/each}
            </menu>
        </div>
    </section>
    <div class="w-full p-8 overflow-auto text-black bg-base">
        <div class="flex gap-4">
            <h1 class="text-xl text-secondary">Главная</h1>
            <p class="text-xl font-semibold lowercase text-secondary">/</p>
            {#each navItems as item}
                {#if item.href === $page.url.pathname}
                    <h1 class="text-xl lowercase">{item.name}</h1>
                {/if}
            {/each}
        </div>

        <slot />
    </div>
</div>

<style>
    .activeMenu {
        background-color: var(--hover);
        color: var(--primary-color);
    }
</style>
