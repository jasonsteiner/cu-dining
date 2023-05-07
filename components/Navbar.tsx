import React from 'react';
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/reviews">
                <a>Add Review</a>
            </Link>
        </nav>
    );
}