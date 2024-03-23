import React from "react";

interface LanguageItemProps {
    language: string;
    proficiency: string;
}

export const LanguageItem: React.FC<LanguageItemProps> = ({ language, proficiency }) => (
    <div className="grid grid-cols-1">
        <span className="text-sm text-gray-900 font-ubuntu">{language}</span>
        <span className="text-xs text-gray-500 italic text-mainThemeColor font-ubuntu">{proficiency}</span>
    </div>
);
