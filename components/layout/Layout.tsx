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
                    <span>
                        <a className={styles.homeLink}>Home</a>
                    </span>
                </Link>
            </header>
            <main className={styles.main}>{children}</main>
        </div>
    );
};

export default Layout;