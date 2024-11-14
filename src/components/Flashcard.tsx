import { useState } from "react"
import { FlashcardType } from "./type/type"

type FlashcardProps = {
	flashcard: FlashcardType
}

const Flashcard = ({ flashcard }: FlashcardProps) => {
    const [flip, setFlip] = useState(false)
    
	return (
		<div className={`card ${flip?'flip':''}`} onClick={() => setFlip(!flip)}>
			<div className="front">{flashcard.question}</div>
			<div className="back">{flashcard.correct_answer}</div>
		</div>
	)
}

export default Flashcard
