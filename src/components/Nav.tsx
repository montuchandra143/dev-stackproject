import React from 'react';
import Logo from '../assets/logo-text.png';

const Nav = () => {
    return (
        <div>
            <nav className='mx-auto container px-6'>
                <div className='flex gap-2 justify-between items-center py-4'>
                   <img src={Logo} alt='Logo'/>
                    <ul className='hidden md:flex gap-6 text-[14px] font-medium text-[#475569]'>
                        <li className='cursor-pointer hover:text-[#111827] transition-colors'>Home</li>
                        <li className='cursor-pointer hover:text-[#111827] transition-colors'>Technologies</li>
                        <li className='cursor-pointer hover:text-[#111827] transition-colors'>Project</li>
                        <li className='cursor-pointer hover:text-[#111827] transition-colors'>About</li>
                        <li className='cursor-pointer hover:text-[#111827] transition-colors'>Contact</li>
                    </ul>
                   <div className='flex gap-2 items-center'>
                    <button className="btn btn-soft btn-primary cursor-pointer">Sign in</button>
                    <button className="btn btn-secondary cursor-pointer">Sign Up</button>
                   </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;