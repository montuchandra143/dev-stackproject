import React from 'react';

const Footer = () => {
    return (
        <div>
             <footer className="bg-white border-t border-[#e2e8f0] px-6 py-12 lg:px-16">
            <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="md:col-span-2 flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-[8px] bg-gradient-to-tr from-[#ff4d2e] via-[#e91e63] to-[#8b3df5] text-white font-bold text-sm">
                            DS
                        </div>
                        <span className="text-[20px] font-extrabold tracking-tight text-[#111827]">
                            Dev<span className="text-[#e91e63]">Stack</span>
                        </span>
                    </div>
                    <p className="text-[13px] text-[#64748b] max-w-sm leading-relaxed">
                        Curated tools, technologies, and resources for developers building modern software.
                    </p>
                    <div className="flex items-center gap-6 pt-2 text-[13px] font-semibold">
                        <a href="#github" className="text-gray-600">GitHub</a>
                        <a href="#twitter" className="text-gray-600">Twitter</a>
                        <a href="#linkedin" className="text-gray-600">LinkedIn</a>
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <h4 className="text-[12px] font-bold text-[#111827]">Product</h4>
                    <ul className="flex flex-col gap-2.5 text-[13px]">
                        <li><a href="#home" className="text-gray-600">Home</a></li>
                        <li><a href="#technologies" className="text-gray-600">Technologies</a></li>
                        <li><a href="#projects" className="text-gray-600">Projects</a></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3">
                    <h4 className="text-[12px] font-bold tracking-wider text-[#111827] uppercase">Company</h4>
                  <ul className="flex flex-col gap-2.5 text-[13px]">
                        <li><a href="#about" className="text-gray-600">About</a></li>
                        <li><a href="#contact" className="text-gray-600">Contact</a></li>
                        <li><a href="#careers" className="text-gray-600">Careers</a></li>
                    </ul>
                </div>

                <div className="flex flex-col gap-3">
                    <h4 className="text-[12px] font-bold tracking-wider text-[#111827] uppercase">Legal</h4>
                    <ul className="flex flex-col gap-2.5 text-[13px]">
                        <li><a href="#privacy" className="text-gray-600">Privacy Policy</a></li>
                        <li><a href="#terms" className="text-gray-600">Terms of Service</a></li>
                    </ul>
                </div>

            </div>
        </footer>
        </div>
    );
};

export default Footer;