import React, {Component} from "react";
import AddNotes from './AddNotes';
import DisplayNotes from "./DisplayNotes";

class Notebox extends Component{
    state = {
        notebooks : [
            
            {
                title: 'Study Flutter',
                contexts: ' review dart language and its object oriented concepts from the documnettion then setup the SDKs and android studio'
            },{
                title: 'Read The Battle of Adwa',
                contexts: "Main description: In March 1896 a well-disciplined and massive Ethiopian army did the unthinkable-it routed an invading Italian force and brought Italy's war of conquest in Africa to an end"
            }
       ]
    };
    removeNotes = (index) =>{
        const {notebooks} = this.state;
        this.setState({notebooks : notebooks.filter((data, i)=>{
            return i !== index;
        })
    });
    };

    handleNewNotes = (notebook)=>{
        this.setState({notebooks: [...this.state.notebooks, notebook]})
    }

    render(){
        const {notebooks} = this.state;
        return(
            <div>
            <div className="services">
                <DisplayNotes notes={notebooks} remove= {this.removeNotes}/>
            </div>
            <AddNotes handleNewNotes={this.handleNewNotes}/>
            </div>
        )
    }
}

export default Notebox;