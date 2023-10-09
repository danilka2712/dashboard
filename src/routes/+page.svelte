<script>
    import { onNavigate } from "$app/navigation";
    import Table from "$lib/components/table/Table.svelte";
    import { setContext } from "svelte";

    const schema = [
        {
            label: "Username",
            key: "username",
        },
        {
            label: "Firstname",
            key: "firstname",
        },
        {
            label: "Data",
            key: "data",
        },
        {
            label: "ID",
            key: "id",
        },
    ];
    let tableContent = [
        { username: "Давид", firstname: "Название1", id: 1 },
        {
            username: "sadsad",
            firstname: "Название2",
            id: 2,
        },
        { username: "Артем", firstname: "Название3", id: 3 },
        { username: "Давид", firstname: "Название4", id: 4 },
        { username: "Кирилл", firstname: "Название5", id: 5 },
        { username: "Влад", firstname: "Название6", id: 6 },
    ];
    setContext("table", schema);
    setContext("tableContent", tableContent);
    let search = "";
</script>

<div class="p-8">
    <input
        placeholder="Searce result own retyu..."
        class="p-2.5 px-12 w-full rounded-full bg-hover"
        type="text"
        bind:value={search}
    />
</div>
<Table {search} />
