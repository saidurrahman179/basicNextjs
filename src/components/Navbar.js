import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='bg-black text-white p-7'>
           <ul className='flex gap-4'>
                <li>
                    <Link href="/admin">Admin</Link>
                    
                </li>
                <li>
                    <Link href="/admin/addpost">add Post</Link>
                    
                </li>
                <li>
                    <Link href="/admin/allpost">allpost</Link>
                    
                </li>
                
            </ul> 
        </div>
    );
};

export default Navbar;