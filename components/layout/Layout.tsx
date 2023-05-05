import React from 'react';
import Link from 'next/link';
import styles from './Layout.module.css';

interface Props {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <Link href="/">
                    <a className={styles.homeButton}>Home</a>
                </Link>
            </header>
            <main className={styles.main}>{children}</main>
        </div>
    );
};

export default Layout;
