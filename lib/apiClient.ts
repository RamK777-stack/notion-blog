import { Client } from '@notionhq/client'

const notion = new Client({
    auth: process.env.NOTION_TOKEN,
})

export const getDatabase = async () => {
    console.log(process.env.NOTION_TOKEN)
    const response = await notion.databases.query({
        database_id: process.env.NOTION_DATABASE_ID!,
    })
    console.log(response.results)
    return response.results
}