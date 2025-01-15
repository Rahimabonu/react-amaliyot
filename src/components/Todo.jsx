const Todo = (props) => {
    console.log(props);
    const onUpdateClicked =()=>{
        console.log("Update clicked !");
        
    }
    const onDeletClicked =()=>{
        console.log("Delet clicked !");
        
    }
    return (
        <div className="todo">
            <p>{props.title}</p>
            <div className="end">
                <i onClick={onUpdateClicked} class="fa-solid fa-pen"></i>
                <i onClick={onDeletClicked} class="fa-solid fa-trash"></i>
            </div>
        </div>
    )
}
export default Todo;