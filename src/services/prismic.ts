import client from "../config/prismicConfig";
import PrismicDom from "prismic-dom";
export const getPosts = async () => {
    try {
        const posts = await client().query("")
        return Promise.resolve(posts)
    } catch (error) {
        console.error(error)
    }

}

export const getPost = async (id: string) => {
    try {
        const post = await client().getByID(id, {});
        return Promise.resolve(post);
    } catch (error) {
        console.error(error)
    }
}

export const setRichTextAsHtml = (richText: any): string => {
    return PrismicDom.RichText.asHtml(richText)
}


export const setRichTextAsText = (richText: any): string => {
    return PrismicDom.RichText.asText(richText)
}
