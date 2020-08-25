import React, {Component} from 'react';

class AddContact extends Component{
    state = {
        name : null,
        age : null,
        email : null,
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id] : e.target.value
        });
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        console.log(this.state);
    }
    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name : </label>
                    <input type="text" id="name" placeholder="Enter name" onChange ={this.handleChange}/>
                    <br/>
                    <label htmlFor="age">Age : </label>
                    <input type="number" id="age" placeholder="Enter age" onChange ={this.handleChange}/>
                    <br/>
                    <label htmlFor="email">Email : </label>
                    <input type="email" id="email" placeholder="Enter email address" onChange ={this.handleChange}/>
                    <br/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}
export default AddContact