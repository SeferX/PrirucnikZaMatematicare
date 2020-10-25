export interface Question{
    id: string,
    question: string,
    answer: string,
    description: string,
    qURL: string,
    aURL: string,
    dURL: string,
    points: number,
    time: number,
    difficulty: string,
    kingCategoryId: number,
    queenCategoryId: number
}