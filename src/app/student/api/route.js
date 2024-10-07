import { data } from "./data";


export async function GET() {
 
    return  Response.json(data)
     
       
    
}

export async function POST(request){
  const comment = await request.json();
  const newComment = {
    id:data.length+1,
    title:comment.title
  }
  data.push(newComment)
  return new Response(JSON.stringify(data),{
    headers:{
      "Content-Type":"application/json"
    },
    status:201
  })
}

