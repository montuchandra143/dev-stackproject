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
        <section className="min-h-screen bg-[#fcfcfd] px-6 py-16 lg:px-16">
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

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {allTechnologies.map((skill) => (
                        <SkillCard key={skill.name} skill={skill} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tecnologies;