import axios from 'axios'
const BASE = 'https://jsonplaceholder.typicode.com'

export const api = {

  getAllPost: async () =>{
  let response = await axios.get(`${BASE}/posts`);
  return response.data;

  },
  addNewPost: async (title: string, body: string, userId: number) =>{
      let response = await axios.post(`${BASE}/posts`, {
        title, body, userId
    });
    return response.data
  }
}

