import React, { ReactNode } from 'react';
import Link from 'next/link';
import styles from './Layout.module.css';

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link href="/">
                    <h1 className={styles.homeLink}>CU Dining</h1>
                </Link>
                <Link href="/add">
                    <h1 className={styles.homeLink}>ADD REVIEW</h1>
                </Link>
            </header>
            <main className={styles.main}>{children}</main>
        </div>
    );
};

export default Layout;