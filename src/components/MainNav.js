import Link from 'next/link';
import React from 'react';

const MainNav = () => {
    return (
        <div className="bg-green-950 text-white p-7">
           <ul className='flex gap-4'>
                <li>
                    <Link href="/">home</Link>
                    
                    
                </li>
                <li>
                    <Link href="/about">about</Link>
                    
                </li>
                <li>
                    <Link href="/product">product</Link>
                    
                </li>
                
            </ul> 
        </div>
    );
};

export default MainNav;