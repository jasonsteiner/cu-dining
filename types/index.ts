export type Review = {
  stars: number
  comment: string
}
  

export type ReviewWithId = Review & {
  id: string
}
