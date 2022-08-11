import React from "react";


const RednerNotes = props =>{
    const {dispNotes, removenotes} = props;
    const notes = dispNotes.map((note, index)=>{
        return(
            <div key={index} className="content content-2">
               <h2>
                  {note.title}
               </h2>
               <p>
                  {note.contexts}
               </p>
               <center>
               <button className="gracefullbtn" onClick={()=>{removenotes(index)}}> Remove</button>
               </center>
            </div>
        )
    })
    return  (notes);
}


const DisplayNotes = props =>{
    const {notes, remove} = props;
    return(<RednerNotes dispNotes = {notes} removenotes = {remove}/>)
}

export default DisplayNotes;