import { FlashcardType } from "./type/type"

type FlashcardProps = {
	flashcard: FlashcardType
}

const Flashcard = ({ flashcard }: FlashcardProps) => {
	return (
		<div className="card">
			<div className="front">{flashcard.question}</div>
			<div className="back">{flashcard.correct_answer}</div>
		</div>
	)
}

export default Flashcard
