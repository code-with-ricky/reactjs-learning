import Header from "./components/Header"
import NoteBox from "./components/NoteBox"

const App = () => {
  return (
    <div className="h-screen max-h-screen px-5 py-4 flex flex-col">
      <Header/>
      <NoteBox/>
    </div>
  )
}

export default App