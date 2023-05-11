export type Review = {
  stars: string
  comment: string
}
  
export type ReviewWithId = Review & {
  id: string
}
