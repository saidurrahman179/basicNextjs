import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const generateMetadata = async ({params})=>{
    const data = await fetch(`https://fakestoreapi.com/products/${params.postId}`,{ next: { revalidate: 60 } })
    const singlePost = await data.json();
    return{
        title:singlePost.title
    }
}
// export async function generateMetadata({ params }) {
//     return {
//       title: '...',
//     }
//   }

// export const metadata = {
//     title:"Home page|saidur"
//     }

const page = async({params}) => {
    const data = await fetch(`https://fakestoreapi.com/products/${params.postId}`,{ next: { revalidate: 60 } })
    const singlePost = await data.json();
    
    return (
        <div>
           
                <div className='flex flex-row items-center justify-between'>
                   <div className='w-1/3'>
                        <h1>{singlePost.title}</h1>
                        <Image 
                        src={singlePost.image}
                        width={300}
                        height={300}
                        />
                   </div>
                   <div className='w-2/3' >
                    <p>{singlePost.description}</p>
                    <h2>price: {singlePost.price}</h2>
                    <h2>Category: {singlePost.category}</h2>
                    <Link className='bg-black text-white p-4 mt-28' href="/product">Back</Link>
                   </div>
                </div>
         
        </div>
    );
};

export default page;