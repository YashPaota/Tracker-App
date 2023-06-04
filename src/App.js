import  React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import "./index.css"
// import notes from "./notes";
import CreateArea from "./CreateArea";


const App = () => {

  const [notes , setNotes] = useState([]);

  const addNote = (newNote) => {
    // console.log(note);
    setNotes(prevNotes => {
      return [...prevNotes,newNote]
    })

  }

  const deleteNote = (id) => {
    //  console.log("Delete was triggered.")
    setNotes(prevNotes => {
      return prevNotes.filter((noteitem , index , ) => {
        return index!== id

      })
    })
  }
  return(
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {/* {notes.map((elem) => <Note  key = {elem.key} title={elem.title} content={elem.content} /> )} */}
      {/* <Note key={1} title="Note title" content="Note Content" /> */}

      {notes.map((noteItem , index) => <Note key={index} id={index} title={noteItem.title} content={noteItem.content} onDelete={deleteNote} />)} 
      <Footer />
    </div>
  )
}

export default App;