import { getCollection } from "astro:content";
import { generateOgImageForPost } from "../../../utils/generateOgImages";
import { slug as slugifyStr } from "github-slugger";

export async function getStaticPaths() {
    const posts = await getCollection("blog");

    return posts.map(post => ({
        params: { slug: slugifyStr(post.data.title) },
        props: post,
    }));
}

export const GET = async ({ props }) =>
    new Response(await generateOgImageForPost(props), {
    headers: { "Content-Type": "image/png" },
});
