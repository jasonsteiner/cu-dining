export type Review = {
  stars: string
  comment: string
  reviewer: string
}
  

export type ReviewWithId = Review & {
  id: string
}
