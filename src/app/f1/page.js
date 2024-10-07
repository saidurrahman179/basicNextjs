import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            This is F1 page
            <Link href="f1/f2">go to F2</Link>
        </div>
    );
};

export default page;