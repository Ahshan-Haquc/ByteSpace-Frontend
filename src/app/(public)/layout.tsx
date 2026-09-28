import { Footer } from '@/layout/Footer';
import { TopBar } from '@/layout/TopBar';
import React from 'react';

const layout = ({ children }: LayoutProps<"/">) => {
    return (
        <div className="bg-white text-black min-h-screen">
            <TopBar/>
            {children}
            <Footer/>
        </div>
    );
};

export default layout;