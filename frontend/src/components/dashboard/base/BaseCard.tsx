import React from "react";

interface BaseCardProps {
    children: React.ReactNode;
    className?: string;
    title?: string;
    minHeight?: string;
}

const BaseCard: React.FC<BaseCardProps> = ({ children, className = "", title, minHeight = "140px" }) => {
    return (
        <div 
            className={`rounded-2xl bg-gray-100 flex flex-col items-center p-3 ${className}`}
            style={{ minHeight }}
        >
            {title && (
                <div className="text-s mb-2 text-center">
                    {title}
                </div>
            )}
            {children}
        </div>
    );
};

export default BaseCard; 