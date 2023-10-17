<script lang="ts">
    import { onNavigate } from "$app/navigation";
    import "../app.css";
    import { page } from "$app/stores";
    import HomeLine from "$lib/public/icons/home-line.svelte";
    import FileMain from "$lib/public/icons/file-main.svelte";
    import Setting from "$lib/public/icons/setting.svelte";

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
        { name: "Главная", href: "/", icon: HomeLine },
        { name: "Контент", href: "/content", icon: FileMain },
    ];
</script>

<div class="flex">
    <header
        class="sticky top-0 flex flex-col items-center justify-between w-20 h-screen p-2 py-6 bg-white border-r text-primary border-line dark:bg-black"
    >
        <div class="space-y-4">
            {#each mainMenu as menu}
                <a
                    href={menu.href}
                    class="flex flex-col items-center gap-1 text-primary font-medium hover:bg-[#D9E2EC]/50 rounded-md p-2"
                    class:active={$page.url.pathname === menu.href}
                >
                    <svelte:component this={menu.icon} />
                    <span class="flex text-xs text-center">{menu.name}</span>
                </a>
            {/each}
        </div>
        <div class="flex items-center justify-center h-12">
            <a
                class="flex flex-col items-center gap-1 text-primary font-medium hover:bg-[#D9E2EC]/50 rounded-lg p-2"
                href="/setting"
            >
                <Setting />
                <span class="flex text-xs text-center">Настройки</span>
            </a>
        </div>
    </header>

    <div class="w-full">
        <slot />
    </div>
</div>

<style>
    header {
        view-transition-name: header;
    }
    section {
        view-transition-name: section;
    }
    :root {
        background-color: var(--bg-base);
    }
    .active {
        outline: solid var(--primary-color) 2px;
    }
    .activeMenu {
        background-color: var(--hover);
        color: var(--primary-color);
    }
</style>
