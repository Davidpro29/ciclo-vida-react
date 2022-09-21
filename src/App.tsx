import { useState, useEffect } from 'react'
import './App.css'
import {PostForm} from './components/PostForm';

import {api} from './api'


type Post = {
  userId: number;
  id: string;
  title: string;
  body: string;
}

function App() {
  const [loading, setLoading] = useState(false)
  const [posts, setPosts] = useState<Post[]>([])

  useEffect(()=>{
    loadPost();
  },[])

  const loadPost = async () =>{
    setLoading(true)
    let json = await api.getAllPost();
    setLoading(false)
    setPosts(json)
  }

  const handleAddPost = async(title: string, body: string)=>{
    let json = await api.addNewPost(title, body, 1);
    if(json.id){
      alert('Post adicionado!')
    }else{
      alert('erro')
    }     
  }

  return (
    <div>      
        {loading &&
          <div>Espere um pouco...</div>
        }

        <PostForm onAdd={handleAddPost} />

        {!loading && posts.length > 0 &&
          <>
            <div>Total de Posts {posts.length}</div>
            <div>
              {posts.map((item, index) =>(
                <div>
                <h4> Título: {item.title}</h4>   
                <small>#{item.id} - Usuario: {item.userId}</small>
                <p>Postagem: {item.body}</p>        
            </div>
              ))}
            </div>
          </>          
        }    
        {!loading && posts.length === 0 &&
          <div>Tente novamente mais tarde</div>
        }       
    </div>
  )
}

export default App