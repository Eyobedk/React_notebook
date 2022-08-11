import React , {Component} from "react";

class AddNotes extends Component {
    
    initState = {
        title: '',
        contexts: ''
    };
    state = this.initState;
    

    handleChange=(event)=>{
        const {name, value} = event.target;
        this.setState({
            [name] : value,
        })
    };

    submitForm=()=>{
        this.props.handleNewNotes(this.state);
        this.setState(this.initState);
    }

    render(){
        const {title, contexts} = this.state;
        return(
            <center>
            <form>
                <label htmlFor="title">Title</label>
                <input
                type="text"
                name="title"
                id="title"
                value={title}
                onChange={this.handleChange} />
                <label htmlFor="contexts">contexts</label>
                <input
                type="text"
                name="contexts"
                className="context"
                id="contexts"
                value={contexts}
                onChange={this.handleChange} />
                <input type="button" value="Submit" onClick={ this.submitForm } />
          </form>
          </center>
        )
    }
}

export default AddNotes;