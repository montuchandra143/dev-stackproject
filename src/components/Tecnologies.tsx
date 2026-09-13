import React, { useState, useEffect } from 'react';
import type { ITechnology } from './SkillType';
import SkillCard from './SkillCard';

const TechnologiesTec = async (): Promise<ITechnology[]> => {
    const res = await fetch("/data.json");
    const data = await res.json();
    return data;
};

const Tecnologies = () => {
    const [allTechnologies, setAllTechnologies] = useState<ITechnology[]>([]);

    useEffect(() => {
        TechnologiesTec().then((data) => setAllTechnologies(data));
    }, []);

    return (
        <div>
            <div className="container mx-auto max-w-7xl">
                <div className="mb-12">
                    <h2 className="text-[36px] sm:text-[44px] font-extrabold text-[#111827]">
                        Explore the{" "}
                        <span className="bg-gradient-to-r from-[#ff4d2e] via-[#e91e63] to-[#8b3df5] bg-clip-text text-transparent">
                            Technologies
                        </span>
                    </h2>
                    <p className="mt-2 text-[16px] text-[#64748b]">
                        Pick one technology per category to build your ideal stack.
                    </p>
                </div>

                <div>
                    {allTechnologies.map((skill) => (
                        <SkillCard key={skill.name} skill={skill}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Tecnologies;