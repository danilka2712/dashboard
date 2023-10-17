<script lang="ts">
    import { page } from "$app/stores";

    let navItems = [
        { name: "Пользователь", href: "/" },
        { name: "Безопасность", href: "/content" },
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
        <slot />
    </div>
</div>
