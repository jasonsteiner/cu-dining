import { HStack, Text } from "@chakra-ui/react"
import { ReviewWithId } from "../types"

type Props = {
  readonly review: ReviewWithId
}

const ReviewItem = ({ review: { id, stars, comment } }: Props) => {
  return (
    <HStack w="100%">
      <Text>
        {id}
        {stars}
        {comment}
      </Text>
    </HStack>
  )
}

export default ReviewItem