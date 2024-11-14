import Flashcard from "./Flashcard"
import { FlashcardType } from "./type/type"

type FlashcardListProps = {
	flashcards: FlashcardType[]
}

const FlashcardList = ({flashcards}:FlashcardListProps) => {
	return (
		<div className="card-grid">
			{flashcards.map(flashcard => {
                return <Flashcard flashcard={flashcard} key={flashcard.id} />
            })}
		</div>
	)
}

export default FlashcardList
