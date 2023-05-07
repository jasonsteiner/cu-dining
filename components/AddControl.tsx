import { Button, HStack, Input } from "@chakra-ui/react"
import { FormEventHandler, useState } from "react"
import { Review } from "../types"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../util/firebase"

const AddControl = () => {
  const [input, setInput] = useState("")

  const addReview: FormEventHandler<HTMLFormElement> = (e) => {
    // form feedback
    e.preventDefault()
    if (input === "") return

    // add the task to firebase
    const task: Review = {stars: 5, comment: input}
    addDoc(collection(db, "tasks"), task)

    // clear current input field
    setInput("")
  }

  return (
    <form onSubmit={addReview}>
      <HStack shouldWrapChildren>
        <Input
          value={input}
          type="text"
          placeholder="Enter your review..."
          onChange={(e) => setInput(e.target.value)}
        />
        <Button type="submit">Add Review</Button>
      </HStack>
    </form>
  )
}

export default AddControl
