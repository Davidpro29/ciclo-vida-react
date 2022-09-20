import {Post} from '../assets/types/Post'

type Props = {
    data: Post
}

export const PostItem = ({data}:Props) => {
    return(
        <div>
            <h4> Título: {data.title}</h4>   
            <small>#{data.id} - Usuario: {data.userId}</small>
            <p>Postagem: {data.body}</p>        
        </div>
    );
}