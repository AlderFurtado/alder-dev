import client from "../config/prismicConfig";

export const getPosts = async () => {
    try {
        const posts = await client().query("")
        return Promise.resolve(posts)
    } catch (error) {
        console.error(error)
    }

}
