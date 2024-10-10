

import Image from 'next/image';
import Link from 'next/link';
import React, { Suspense } from 'react';

const page = async () => {
    const data = await fetch('https://fakestoreapi.com/products',{ next: { revalidate: 60 } });
    const allProduct = await data.json();
    
  
    return (
        <div>
            <h1 className='text-center'>All Product</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {allProduct.map((val,ind)=>(
                   <div key={ind} className='border p-10 border-indigo-600 rounded-md flex flex-col items-center justify-between'>
                     <Image
                      
                        src={val.image}
                        alt="Picture of the author"
                        width={200}
                        height={200}
                        
                        />
                        <div className='flex justify-between items-center'>
                            <h1>{val.title}</h1>
                        
                            <div>
                                 <Suspense fallback="Loading...........">
                                 <Link className='p-3 bg-green-950 text-white' href={`/product/${val.id}`}>Details</Link>
                                 </Suspense>
                            </div>
                        </div>
                   </div>
                ))}
            
                
            </div>
            
        </div>
    );
};

export default page;