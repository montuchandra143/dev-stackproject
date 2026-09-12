import React from 'react';
import HeroLogo from '../assets/hero.png';

const Hero = () => {
    return (
        <div>
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-80px)] py-12 lg:py-0 gap-8">
                    <div>
                        <h1 className="text-[36px] sm:text-[48px] lg:text-[58px] font-extrabold leading-[1.05] tracking-[-2px] sm:tracking-[-2.5px] text-[#111827]">
                            Build Your Ideal
                            <br />
                            <span className="bg-gradient-to-r from-[#ff4d2e] via-[#e91e63] to-[#8b3df5] bg-clip-text text-transparent">
                                Development Stack
                            </span>
                        </h1>

                        <p className="mt-5 sm:mt-7 max-w-[590px] text-[15px] sm:text-[18px] font-normal leading-[1.6] text-[#64748b]">
                            Explore frontend, backend, database, and tooling options,
                            <br className="hidden sm:block" />
                            compare them side by side, and put together the stack that fits your
                            <br className="hidden sm:block" />
                            next project.
                        </p>

                        <div className="mt-8 sm:mt-12 flex flex-wrap items-center gap-3">
                            <button className="rounded-[8px] bg-gradient-to-r from-[#ff7417] via-[#ff4d5c] to-[#ed3b91] px-[16px] py-[11px] text-[14px] font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-[1px] hover:shadow-md cursor-pointer">
                                Explore Technologies
                            </button>
                            <button className="h-[41px] w-[170px] rounded-[8px] border border-[#e2e8f0] bg-white text-[14px] font-medium text-[#64748b] transition-all duration-300 hover:border-[#cbd5e1] hover:bg-[#f8fafc] cursor-pointer">
                                Learn More
                            </button>
                        </div>
                    </div>  
                    
                    <div className="w-full lg:w-auto flex justify-center">
                        <img src={HeroLogo} alt="hero" className="max-w-full h-auto" />
                    </div>
                      
                </div>
            </div>
        </div>
    );
};

export default Hero;