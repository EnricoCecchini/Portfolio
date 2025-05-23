interface GenerateKeyInterface{
    title: string;
    index: number
}

export function generateKey(title: string, index: number) {
    return `${title}-${index}`
}