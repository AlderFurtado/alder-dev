interface MainImagePrismic {
    alt: null | any
    copyright: null | any
    dimensions: { width: 1200, height: 600 }
    url: string
}

export interface ResultResponsePrismic {
    alternate_languages: string[]
    data: { title: any, subtitle: any, main_image: MainImagePrismic, content: any, author: object[] }
    first_publication_date: string
    href: string
    id: string
    lang: string
    last_publication_date: string
    linked_documents: []
    slugs: string[]
    tags: string[]
    type: string
    uid: null | any
}

export default interface ResponsePrismic {
    license: string
    next_page: null | any
    page: number
    prev_page: null | any
    results: ResultResponsePrismic[]
    results_per_page: number
    results_size: number
    total_pages: number
    total_results_size: number
    version: string
}

