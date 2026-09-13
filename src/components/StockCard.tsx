import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import type { ITechnology } from './SkillType';

interface IStockCardProps {
    selectedStack: ITechnology[];
    onRemoveItem: (name: string) => void;
    onRemoveAll: () => void;
}

const StockCard = ({ selectedStack, onRemoveItem, onRemoveAll }: IStockCardProps) => {
    return (
        <div className="w-full max-w-md mx-auto lg:max-w-none rounded-[16px] border border-amber-50 bg-white p-6 shadow-sm">
            <h3 className="text-[18px] font-bold text-blue-950">Your Stack</h3>
            <p className="text-[13px] text-teal-900">
                {selectedStack.length} {selectedStack.length === 1 ? "Technology" : "Technologies"} Selected
            </p>

            <div className="mt-6 flex flex-col gap-3 min-h-[120px]">
                {selectedStack.length === 0 ? (
                    <p className="text-sm text-[#94a3b8] text-center py-6">No technologies selected yet.</p>
                ) : (
                    selectedStack.map((item) => (
                        <div key={item.name} className="flex items-center justify-between rounded-[12px] border border-amber-50 bg-[#fcfcfd] p-3 shadow-2xs">
                            <div className="flex items-center gap-3">
                               <div className="text-2xl">{item.icon}</div>
                                <div>
                                    <h4 className="text-[14px] font-bold text-blue-950">{item.name}</h4>
                                    <span className="text-[11px] text-teal-900">{item.category}</span>
                                </div>
                            </div>
                            <button 
                                onClick={() => onRemoveItem(item.name)}
                                className="text-teal-900 px-2 py-1 text-sm font-bold cursor-pointer transition-colors"
                            >
                                <RxCross2 />
                            </button>
                        </div>
                    ))
                )}
            </div>

            {selectedStack.length > 0 && (
                <button 
                    onClick={onRemoveAll} 
                    className="mt-6 w-full rounded-[10px] border border-red-700 bg-white py-2.5 text-[14px] font-semibold text-red-400 transition-all duration-200 hover:bg-[#fff1f2] cursor-pointer"
                >  Remove All </button>
            )}
        </div>
    );
};

export default StockCard;