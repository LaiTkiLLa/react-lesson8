export type Data = {
    id: number,
    name: string
}

export type User = {
    id?: number,
    name?: string,
    avatar?: string,
    details?: {
        city?: string,
        company?: string,
        position?: string
    }
}
