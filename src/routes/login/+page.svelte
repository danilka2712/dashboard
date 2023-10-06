<script>
    import Table from "$lib/components/table/Table.svelte";
    import { setContext } from "svelte";

    const schema = [
        {
            label: "Username",
            key: "username",
        },
        {
            label: "Data",
            key: "data",
        },
        {
            label: "Firstname",
            key: "firstname",
        },
        {
            label: "Content",
            key: "content",
        },
        {
            label: "ID",
            key: "id",
        },
    ];
    let tableContent = [
        {
            username: "вфывыфвыфв",
            firstname: "Название1",
            content:
                "asdsadsadsdsadsadsaasdsadsadsdsadsadsaasdsadsadsdsadsadsaasdsadsadsdsadsadsa",
            data: "27.12.19997 сегодня",
            id: 1,
        },
        {
            username: "ыфвыфвыфв",
            firstname: "Название2",
            content:
                "asdsadsadsdsadsadsaasdsadsadsdsadsadsaasdsadsadsdsadsadsaasdsadsadsdsadsadsaasdsadsadsdsadsadsa",
            data: "27.12.19997 сегодня",
            id: 2,
        },
        {
            username: "фывфывыф",
            firstname: "Название3",
            content:
                "asdsadsadsdsadsadsaasdsadsadsdsadsadsaasdsadsadsdsadsadsaasdsadsadsdsadsadsaasdsadsadsdsadsadsa",
            data: "27.12.19997 сегодня",
            id: 3,
        },
        {
            username: "ыфвыфв",
            firstname: "Название4",
            content:
                "asdsadsadsdsadsadsaasdsadsadsdsadsadsaasdsadsadsdsadsadsaasdsadsadsdsadsadsaasdsadsadsdsadsadsa",
            data: "27.12.19997 сегодня",
            id: 4,
        },
        {
            username: "sadsфывыфвad",
            firstname: "Название5",
            content: "",
            data: "27.12.19997 сегодня",
            id: 5,
        },
        {
            username: "фывыфв",
            firstname: "Название6",
            content: "asdsadsadsdsadsadsa",
            data: "27.12.19997 сегодня",
            id: 6,
        },
    ];
    setContext("table", schema);
    setContext("tableContent", tableContent);
</script>

<Table />
