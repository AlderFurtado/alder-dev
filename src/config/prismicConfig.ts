import Prismic from '@prismicio/client'

const apiEndpoint = 'https://testetestetcom.cdn.prismic.io/api/v2'
const accessToken = process.env.PrismicAccessToken

// Client method to query documents from the Prismic repo
const client = (req: string = null) => (
    Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
)

const createClientOptions = (req = "", prismicAccessToken: any = null) => {
    const reqOption = req ? { req } : {}
    const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
    return {
        ...reqOption,
        ...accessTokenOption,
    }
}

export default client;