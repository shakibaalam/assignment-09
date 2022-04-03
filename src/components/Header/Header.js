import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='sticky top-0 bg-white px-12 py-8 flex justify-center md:justify-between bg-slate-700'>
            <div className='hidden md:block'>
                <Link to="/" className='text-3xl font-serif font-bold text-orange-400'>Uno Wear</Link>
            </div>
            <div className='flex gap-4 text-xl'>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/review">Reviews</CustomLink>
                <CustomLink to="/dashboard">DashBoard</CustomLink>
                <CustomLink to="/blog">Blog</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </div>
        </nav>
    );
};

export default Header;