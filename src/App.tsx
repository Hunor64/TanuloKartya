import { useState } from "react"
import FlashcardList from "./components/FlashcardList"
import { FlashcardType } from "./components/type/type"
import { sampleData } from "./components/data/data"

const App = () => {
	const [flashcards, setFlashcards] = useState<FlashcardType[]>(sampleData)

	const fetchQuestions = async () => {
		const data = await fetch("https://opentdb.com/api.php?amount=10").then(
			(res) => res.json()
		)
    if (data.results) {
      setFlashcards(data.results)
    }
	}
	fetchQuestions()
	return (
		<div className="Container">
			<FlashcardList flashcards={flashcards} />
		</div>
	)
}

export default App
