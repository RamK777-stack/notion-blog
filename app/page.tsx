import { getDatabase } from '@/lib/apiClient'
import Link from "next/link";
import slugify from "slugify";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

const getPosts = async () => {
  const posts = await getDatabase();
  return posts as PageObjectResponse[]
}

export default async function Page() {
  const posts = await getPosts();
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center justify-items-center sm:items-start">
      <h3 className="text-4xl font-bold">Blog app powered by Notion API</h3>
      {
        posts?.length && posts.map((post) => {
          const slug = slugify(post.properties?.Slug?.rich_text[0].plain_text);
          return (
            <div>
              <Link href={{
                pathname: `/blog/${slug}`,
                query: {
                  page_id: post.id
                }
              }} key={post.id}>
                <h3 className="text-3xl">{post.properties?.Title?.title[0]?.plain_text}</h3>
              </Link>
              <p className="text-xs">{new Date(post.last_edited_time).toLocaleString()}</p>
            </div>
          )
        })
      }
    </main>
  );
}
