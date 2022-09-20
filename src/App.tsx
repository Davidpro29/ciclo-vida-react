import { useState, useEffect, ChangeEvent } from 'react'
import './App.css'
import {PostForm} from './components/PostForm';
import {PostItem} from './components/PostItem';


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
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    let json = await response.json();
    setLoading(false)
    setPosts(json)
  }

  const handleAddPost = async(title: string, body: string)=>{
    let response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({title, body,userId: 1}),
          headers: {
            'Content-type': 'application/json'
          }
      });

      let json = await response.json();
      
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