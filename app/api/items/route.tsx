export async function GET() {
    const items = [
    {
        id: 1,
        title: "First Item",
        description: "Description for first item"
    },
    {
        id: 2,
        title: "Second Item",
        description: "Description for second item"
    },
    {
        id: 3,
        title: "Third Item",
        description: "Description for third item"
    },
    {
        id: 4,
        title: "Fourth Item",
        description: "Description for fourth item"
    },
    {
        id: 5,
        title: "Fifth Item",
        description: "Description for fifth item"
    }
    ]

    return Response.json(items)
}