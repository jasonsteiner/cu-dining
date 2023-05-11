import { Text, VStack } from "@chakra-ui/react"
import { ReviewWithId } from "../../types"
import ReviewItem from "./ReviewItem"

type Props = {
  readonly reviews: ReviewWithId[]
}

const ReviewList = ({ reviews }: Props) => {
  return (
    <VStack>
      {reviews.length ? (
        reviews.map((review) => <ReviewItem key={review.id} review={review} />)
      ) : (
        <Text>There are no reviews...</Text>
      )}
    </VStack>
  )
}

export default ReviewList
