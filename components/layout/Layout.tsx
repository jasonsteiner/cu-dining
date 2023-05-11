import React, { ReactNode } from 'react';
import Link from 'next/link';
import styles from '../../styles/Layout.module.css';
import { signInWithGoogle, signOut, auth } from '../../util/firebase';
import { Button } from "@chakra-ui/react"
import { useState, useEffect } from 'react';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
        setIsLoggedIn(!!user);
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link href="/">
                    <h1 className={styles.homeLink}>CU Dining</h1>
                </Link>
                {isLoggedIn === false && (
                <Button onClick={signInWithGoogle}>
                    <h1 className={styles.homeLink}>Login</h1>
                </Button>
                )}
                {isLoggedIn && (
                <Button onClick={signOut}>
                    <h1 className={styles.homeLink}>Logout</h1>
                </Button>
                )}
            </header>
            <main className={styles.main}>{children}</main>
        </div>
    );
};

export default Layout;