import {IconType} from "react-icons";
import React from "react";

interface SkillItemProps {
    text: string;
}
export const SkillTag: React.FC<SkillItemProps> = ({ text }) => (
    <span className="inline-block bg-mainThemeColor rounded-full px-3 py-1 text-xs font-semibold text-skillTagText mr-2 mb-2">{text}</span>
);