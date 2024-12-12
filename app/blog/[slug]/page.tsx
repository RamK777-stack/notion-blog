import BlockRenderer from "@/components/BlockRenderer"
import { getBlocks } from "@/lib/apiClient"
import { NotionBlock } from "@9gustin/react-notion-render"

type Params = Promise<{ slug: string }>
type SearchParams = Promise<{ page_id: string }>
export default async function Page(props: { params: Params, searchParams: SearchParams }) {
    const query = await props.searchParams
    const blocks: NotionBlock[] = (await getBlocks(query.page_id)).map(block => block as NotionBlock)
    return (
        <div className="prose lg:prose-xl">
            <BlockRenderer blocks={blocks}/>
        </div>
    )
}