import React from 'react';
import type { ITechnology } from './SkillType';

interface ITechCardProps {
    skill: ITechnology;
}

const SkillCard = ({ skill }: ITechCardProps) => {
    return (
        <div className="flex flex-col justify-between rounded-xl border border-[#e2e8f0] bg-white p-5 shadow-sm transition-all hover:shadow-md">
            <div>
                <div className="flex items-center justify-between">
                    <div className="text-2xl">
                        {skill.icon ? (
                            <img src={skill.icon} alt={skill.name} className="h-8 w-8 object-contain" />
                        ) : (
                            <span>🚀</span>
                        )}
                    </div>
                </div>
                <h3 className="mt-3 text-[18px] font-bold text-[#111827]">{skill.name}</h3>
                <p className="mt-1.5 text-[13px] leading-[1.4] text-[#64748b]">
                    {skill.description || "A powerful technology for modern development."}
                </p>
            </div>

            <div>
                <div className="mt-4 flex items-center justify-between text-[12px] text-[#64748b]">
                    <span className="rounded-[6px] bg-white px-2 py-0.5 font-medium">
                        {skill.category}
                    </span>
                    <span className="font-semibold text-cyan-950">⭐ {skill.rating}</span>
                </div>

                <button
                    className="mt-4 w-full rounded-lg bg-black px-4 py-2 text-[14px] font-medium text-white transition-colors hover:bg-black"
                >
                    Add to Stack
                </button>
            </div>
        </div>
    );
};

export default SkillCard;