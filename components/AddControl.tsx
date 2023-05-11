import { Button, HStack, VStack, Input, RadioGroup, Radio } from "@chakra-ui/react"
import { FormEventHandler, useState } from "react"
import { Review } from "../types"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../util/firebase"
import Navbar from '../components/Navbar';
import { signInWithGoogle } from '../util/firebase';
import { useAuth } from "../components/auth/AuthUserProvider"

const AddControl = () => {
    const [stars, setStars] = useState("");
    const [location, setLocation] = useState("");
    const [input, setInput] = useState("");
    const { user } = useAuth()

    const addReview: FormEventHandler<HTMLFormElement> = (e) => {
        // form feedback
        e.preventDefault()
        if (input === "") return

        // add the review to firebase
        const review: Review = {stars: stars, comment: input, reviewer: user!.uid}
        addDoc(collection(db, location), review)

        // clear current input field
        setStars("");
        setInput("");
    }

    return (
        <form onSubmit={addReview}>
            <VStack>
                <Navbar />
                <RadioGroup value={stars} onChange={setStars}>
                    <VStack>
                        <Radio value='1'>★☆☆☆☆</Radio>
                        <Radio value='2'>★★☆☆☆</Radio>
                        <Radio value='3'>★★★☆☆</Radio>
                        <Radio value='4'>★★★★☆</Radio>
                        <Radio value='5'>★★★★★</Radio>
                    </VStack>
                </RadioGroup>
                <RadioGroup value={location} onChange={setLocation}>
                    <VStack>
                        <Radio value='morrison'>Morrison Dining Room</Radio>
                        <Radio value='northstar'>North Star Dining Room</Radio>
                        <Radio value='risley'>Risley Dining Room</Radio>
                        <Radio value='okenshields'>Okenshields Dining Room</Radio>
                        <Radio value='terrace'>Terrace Restaurant</Radio>
                        <Radio value='trillium'>Trillium Food Court</Radio>
                    </VStack>
                </RadioGroup>
                <textarea
                    value={input}
                    placeholder="Enter your review..."
                    onChange={(e) => setInput(e.target.value)}
                    style={{ height: '200px', width:'500px' }}
                />
                <Button type="submit">Add Review</Button>
                <Button onClick={signInWithGoogle}>Sign In</Button>;
            </VStack>
        </form>
    );
}

export default AddControl
