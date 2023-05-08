import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav>
            <Link href="/">
                <h1>Back to Home</h1>
            </Link>
        </nav>
    );
}