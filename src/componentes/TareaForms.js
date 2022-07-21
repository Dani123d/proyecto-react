import React, { useState }  from 'react';
import '../App.css';
const TareaForms = (props) => { 
const [inputText, setInputText] = useState(" ");
const [validacion , setValidacion] = useState(true);


const manejarformulario= (event) => {
setInputText(event.target.value);
console.log(inputText)
}



const submit = (event) => {
    event.preventDefault();
    if (inputText.trim() !== ""){
    props.nuevaTarea(inputText);
    setInputText ("");
    setValidacion(true)


}else{
    setValidacion (false);
}

}

    return(
        <div>
            <form className='form' onSubmit={submit}>
        <span>Añadir tarea</span>
          
          <input value = {inputText}  onChange = {manejarformulario}/>

          <button>Añadir</button>
          
            </form>
{

!validacion &&
<div className='validacion'>Añada una nueva tarea por favor</div>


} 






             </div>
    )
}

export default TareaForms;