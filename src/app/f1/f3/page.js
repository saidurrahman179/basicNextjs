import Link from 'next/link';
import React from 'react';

const page = () => {
    return (
        <div>
            This is page 3
            <Link href="/f1/f4">go F4</Link>
        </div>
    );
};

export default page;