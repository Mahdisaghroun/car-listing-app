import axios from "axios"

export const commentAPI={
getCommentsByID:(id)=>{
return axios.get('https://jsonplaceholder.typicode.com/comments?postId='+id)
    }
}