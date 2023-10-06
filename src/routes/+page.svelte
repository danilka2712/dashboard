<script>
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
            label: "ID",
            key: "id",
        },
    ];
    let tableContent = [
        { username: "sadsad", firstname: "Название1", id: 1 },
        { username: "sadsad", firstname: "Название2", id: 2 },
        { username: "sadsad", firstname: "Название3", id: 3 },
        { username: "sadsad", firstname: "Название4", id: 4 },
        { username: "sadsad", firstname: "Название5", id: 5 },
        { username: "sadsad", firstname: "Название6", id: 6 },
    ];
    setContext("table", schema);
    setContext("tableContent", tableContent);
</script>

<Table />
