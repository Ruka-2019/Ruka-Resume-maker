import React from "react";
import { FaMinus } from "react-icons/fa";

interface WorkItemProps {
    comTitle: string;
    jobTitle: string;
    dateRange: string[]; // Assumes an array with exactly two items
    skills: string[];
    tasks: string[];
}

export const WorkItem: React.FC<WorkItemProps> = ({ comTitle, jobTitle, dateRange, skills, tasks }) => (
    <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-900 font-ubuntu">{comTitle} - {jobTitle}</h3>
        <p className="text-xs font-light text-gray-500 italic">{dateRange.join(' - ')}</p>
        <p className="text-xs font-bold text-gray-500 italic italic mb-1">{skills.join(', ')}</p>
        <p className="text-xs font-light text-gray-500 italic">Achievements/Tasks</p>
        <ul className="pl-0 text-xs text-gray-500">
            {tasks.map((task, index) => (
                <li key={index} className="flex items-start">
                    <FaMinus className="h-2 w-2 text-mainThemeColor mt-1 mr-2" />
                    {task}
                </li>
            ))}
        </ul>
    </div>
);
