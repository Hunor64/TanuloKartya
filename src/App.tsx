import { useState } from "react"
import FlashcardList from "./components/FlashcardList"
import { FlashcardType } from "./components/type/type"
import { sampleData } from "./components/data/data"

const App = () => {
  const [flashcards, setFlashcards] = useState<FlashcardType[]>(sampleData)
  return (
    <div className="Container">
    <FlashcardList flashcards={flashcards} />
    </div>
  )
}

export default App