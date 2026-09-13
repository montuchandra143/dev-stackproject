import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "./SkillType";

interface ITechCardProps {
    skill: ITechnology;
    selectedStack: ITechnology[];
    setSelectedStack: Dispatch<SetStateAction<ITechnology[]>>;
}

const SkillCard = ({ skill, selectedStack, setSelectedStack }: ITechCardProps) => {
    const isSelected = selectedStack.some((item) => item.name === skill.name);

    const handleAddToStack = () => {
        if (!isSelected) {
            setSelectedStack((prev) => [...prev, skill]);
        }
    };

    return (
        <div
            className={`flex flex-col justify-between rounded-[16px] bg-white p-5 transition-all duration-300 ${
                isSelected
                    ? "border-2 border-[#111827] shadow-md"
                    : "border border-white shadow-sm hover:shadow-md"
            }`}
        >
            <div>
                <div className="flex items-center justify-between">
                    <div className="text-2xl">{skill.icon}</div>
                    {skill.badge && (
                        <span className={`rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${skill.badgeColor || "bg-gray-100 text-gray-800"}`}>
                            {skill.badge}
                        </span>
                    )}
                </div>
                <h3 className="mt-3 text-[18px] font-bold text-[#111827]">{skill.name}</h3>
                <p className="mt-1.5 text-[13px] leading-[1.4] text-gray-600">
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
                    onClick={handleAddToStack}
                    disabled={isSelected}
                    className={`mt-4 w-full rounded-lg px-4 py-2 text-[14px] font-medium transition-colors cursor-pointer ${
                        isSelected
                            ? "bg-[#f1f5f9] text-[#94a3b8] cursor-not-allowed"
                            : "bg-gray-800 text-white hover:bg-black"
                    }`}
                >
                    {isSelected ? "Added to Stack" : "Add to Stack"}
                </button>
            </div>
        </div>
    );
};

export default SkillCard;