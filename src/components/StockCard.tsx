import React from 'react';

const StockCard = () => {
    return (
        <div className="w-full max-w-md mx-auto lg:max-w-none rounded-[16px] border border-white bg-white p-6 shadow-sm">
            <h3 className="text-[18px] font-bold text-gray-950">Your Stack</h3>
            <p className="text-[13px] text-blue-950">0 Technology Selected</p>

            <div className="mt-6 flex flex-col gap-3 min-h-[120px]">
                <p className="text-sm text-gray-600 text-center py-6">No technologies selected yet.</p>
            </div>

            <button className="mt-6 w-full rounded-[10px] border border-[#fecdd3] bg-white py-2.5 text-[14px] font-semibold text-[#ef4444] transition-all duration-200 hover:bg-[#fff1f2] cursor-pointer">
                Remove All
            </button>
        </div>
    );
};

export default StockCard;