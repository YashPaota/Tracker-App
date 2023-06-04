import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
const CreateArea = (props) => {

const[note , setNote] = useState({
    title:"",
    content:""
});

const handleChange = (event) => {
const{name , value} = event.target;
setNote(prevNote => {
    return{...prevNote ,
         [name]:value}
})
}

const submitNote = (event) => {
  props.onAdd(note);
  event.preventDefault(); 
  setNote({title:"",content:""})
}

const [isExpended , setExpended] = useState(false);

const expand = () => {
    setExpended(true);
}


    return(
        <div>
            <form className="create-note">
                {isExpended && <input type="text" name="title" onChange = {handleChange} value={note.title} placeholder="Title" />}
                <textarea onClick={expand} name="content" onChange={handleChange} value={note.content} placeholder="Take a note .." rows={isExpended ?3 :1}/>
                <Zoom in={isExpended}><Fab onClick={submitNote}><AddIcon /></Fab></Zoom>
            </form>
        </div>
    );
}

export default CreateArea;