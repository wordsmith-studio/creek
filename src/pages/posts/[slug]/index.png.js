import { getCollection } from "astro:content";
import { generateOgImageForPost } from "../../../utils/generateOgImages";

export async function getStaticPaths() {
    const posts = await getCollection("blog");

    return posts.map(post => ({
        params: { slug: post.slug },
        props: post,
    }));
}

export const GET = async ({ props }) =>
    new Response(await generateOgImageForPost(props), {
    headers: { "Content-Type": "image/png" },
});
