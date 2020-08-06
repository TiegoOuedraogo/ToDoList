import React,{Component} from 'react';
import "./index.css";

class  ToDoList extends Component {
    constructor(props){
    super(props)
    this.state = {
      todos: [],
      currentToDo: "",
      deleteItem: "" ,
      markDone: "",
    };
  }
  handleChange = event=>{
    //console.log(event.target.value)
    this.setState({ 
      currentToDo: event.target.value 
    });
  }
  addItem = event=>{
    this.currentToDo.unshift({
      index: this.currentToDo.length+1, 
      value: this.todos.newItemValue, 
      done: false
    });
    this.setState({currentToDo: this.currentToDo});

  }
  deleteItem (itemIndex) {
    this.currentToDo.splice(itemIndex, 1);
    this.setState({currentToDo: this.currentToDo});
  }
  markDone(itemIndex) {
    let todo = this.currentToDo[itemIndex];
    this.currentToDo.splice(itemIndex, 1);
    this.todos.done = !todo.done;
    this.todo.done ? this.currentToDo.push(this.todo) : this.currentToDo.unshift(this.todo);
    this.setState({currentToDo: this.currentToDo});  
  }
  render(){
    return(
      <div className="contaier">

        <form handleChange={this.handleChange} value={this.state.currentToDo}>
          <label htmlFor="taskName">Task Name</label>

          <input className="placeholder"  placeholder="Enter the new task here please!"></input>

          <button type="submit" className="button">Add Task</button>
          <button onClick={this.deleteItem} className="button">Delete Item</button>
          <button onClick={this.markDone} className="button"> Mark Done</button>

        </form>
      </div>
    )
  }
}

export default ToDoList;
  /**We know this application is going to use state, so let's set that up as well.  First  - set up state with a key of todos and a value of an empty array.  This allows us to build out our todos list and map through it to list the individual items in the todos array.  We also need to have a key of currentToDo that we want to read from the form and then add to our todo list.  This key will have a datatype of string. 
   * When dealing with forms we need to set up functionality where the user adds data into our form, as well as when the user submits the form.  We handle these events by setting up functionality that is executed when the onChange event listener as well as the onSubmit are invoked.  onChange and onSubmit are event listeners that we can attach to the from and the input to trigger functionality.  But it’s up to us to create this functionality.  This way our state can reflect when the users submits the new task and that the input isn’t read only
   * 
   * The two methods that I attached to our listeners were addItem and handleChange.  Let's define these.  Both these methods will have the argument of event.  This event is either when the onSubmit or the onChange event listener is fired & event is what is passed/returned from that function
  */