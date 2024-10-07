import { redirect } from "next/navigation";
import { data } from "../data"
import { cookies, headers } from "next/headers";

export async function GET(request,{params}){
    const comment = data.find((val)=>val.id==parseInt(params.id));
    if(parseInt(params.id)>data.length){
        redirect('/product')
    }
    const allHeader = headers()
    const allCookies = cookies();
   
    allCookies.set({
        name:"myinfo",
        value:"Enginner"
    })
    return Response.json(comment,{
        headers:{
            "Auth-Token" : "saidur630174",
            "Content-Type":"text/html"
        },
        status:201

    })
}
 // patch function
export async function PATCH(request,{params}){
    const comment = await request.json();
    const {title} = comment;
    const findInd = data.findIndex((val)=>val.id===parseInt(params.id))
    data[findInd].title = title;
    return Response.json(data[findInd])
}

export async function DELETE(request,{params}){
    
    const ind =  data.findIndex((val)=>val.id===parseInt(params.id))
    data.splice(ind,1)
    return Response.json(data)
}