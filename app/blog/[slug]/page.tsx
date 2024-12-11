type Params = Promise<{ slug: string }>
export default async function Page(props: { params: Params }) {
    const params = await props.params
    return <div>My Post: {params.slug}</div>
}