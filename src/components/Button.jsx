function Button(props){
    return(
        <button {...props} className="text-white rounded-md bg-slate-400 p-2">{props.children}</button>
    );
}

export default Button;