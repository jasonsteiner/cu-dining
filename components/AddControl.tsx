import { Button, HStack, VStack, Input, RadioGroup, Radio } from "@chakra-ui/react"
import { FormEventHandler, useState } from "react"
import { Review } from "../types"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../util/firebase"

const AddControl = () => {
    const [stars, setStars] = useState("");
    const [input, setInput] = useState("");

    const addReview: FormEventHandler<HTMLFormElement> = (e) => {
        // form feedback
        e.preventDefault()
        if (input === "") return

        // add the review to firebase
        const review: Review = {stars: stars, comment: input}
        addDoc(collection(db, "morrison"), review)

        // clear current input field
        setStars("");
        setInput("");
    }

    return (
        <form onSubmit={addReview}>
            <HStack>
                <RadioGroup value={stars} onChange={setStars}>
                    <VStack>
                      <Radio value='1'>★☆☆☆☆</Radio>
                        <Radio value='2'>★★☆☆☆</Radio>
                        <Radio value='3'>★★★☆☆</Radio>
                        <Radio value='4'>★★★★☆</Radio>
                        <Radio value='5'>★★★★★</Radio>
                    </VStack>
                </RadioGroup>
                <Input
                    value={input}
                    type="text"
                    placeholder="Enter your review..."
                    onChange={(e) => setInput(e.target.value)}
                />
                <Button type="submit">Add Review</Button>
            </HStack>
        </form>
    );
}

export default AddControl
