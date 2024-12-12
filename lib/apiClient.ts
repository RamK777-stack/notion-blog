import { Client } from '@notionhq/client'

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
})

export const getDatabase = async () => {
    const response = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID!,
    })
    return response.results
}

export const getPages = async (page_id: string) => {
    const response = await notion.pages.retrieve({
        page_id: page_id
    })
    return response
}

//Pages are blocks so page_id is block_id
export const getBlocks = async (page_id: string) => {
    const response = await notion.blocks.children.list({
        block_id: page_id,
        page_size: 50,
    });
    return response.results;
}