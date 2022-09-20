import { useState, ChangeEvent } from "react" 

type Props = {
    onAdd: (title: string, body: string) => void;
}

export const PostForm = ({onAdd}:Props) =>{

  const [addTitle, setAddTitle] = useState('')
  const [addBody, setAddBody] = useState('')

  const handleAddTitle = (e: ChangeEvent<HTMLInputElement>)=>{
    setAddTitle(e.target.value)
  }

  const handleAddBody = (e: ChangeEvent<HTMLTextAreaElement>)=>{
    setAddBody(e.target.value)
  }

  const handleAddClick = async () =>{
    if(addTitle && addBody){
         onAdd(addTitle, addBody)
    } else {
        alert('Preencha todos os campos!')
    }
  }

    return(
        <fieldset>
          <legend>Adicionar novo post</legend>
          <input 
            value={addTitle}
            onChange={handleAddTitle}
            type="text"
            placeholder='Título'
            />

            <textarea 
            value={addBody}
            onChange={handleAddBody}
            ></textarea>

          <button onClick={handleAddClick}>Adicionar</button>
        </fieldset>
    )
}