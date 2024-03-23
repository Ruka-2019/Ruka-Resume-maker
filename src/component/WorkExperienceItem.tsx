import React from "react";
import { FaMinus } from "react-icons/fa";
import {Console} from "inspector";

interface WorkItemProps {
    comTitle: string;
    jobTitle: string;
    dateRange: string[]; // Assumes an array with exactly two items
    skills: string[];
    tasks: string[];
}

export const WorkItem: React.FC<WorkItemProps> = ({ comTitle, jobTitle, dateRange, skills, tasks }) => {

    const parseAndStyleTask = (task: string) => {
        const parts = task.split(/(`.*?`)/);
        const styledTask = parts.map(part => {
            if (part.startsWith('`') && part.endsWith('`')) {
                const text = part.slice(1, -1); // Remove backticks
                return `<span style="font-weight: bold; color: black;">${text}</span>`;
            }
            return part;
        }).join('');

        return { __html: styledTask };
    };

    return (
        <div className="mb-2">
            <h3 className="text-lg font-bold text-gray-900 font-ubuntu">{comTitle}</h3>
            <p className="text-lg text-gray-900 font-ubuntu -mt-1.5">{jobTitle}</p>
            <p className="text-xs font-light text-gray-500 italic">{dateRange.join(' - ')}</p>
            <p className="text-xs font-bold text-gray-500 italic italic mb-1">{skills.join(', ')}</p>
            <p className="text-xs font-light text-gray-500 italic">Achievements/Tasks</p>
            <ul className="pl-0 text-xs text-gray-500" style={{ whiteSpace: 'pre-wrap' }}>
                {tasks.map((task, index) => (
                    <li key={index} className="flex items-start">
                        <FaMinus className="h-2 w-2 text-mainThemeColor mt-0.6 mr-2"/>
                        {/*{renderTaskWithStyle(task)}*/}
                        <span className="flex-1" dangerouslySetInnerHTML={parseAndStyleTask(task)}></span>
                    </li>
                ))}
            </ul>
        </div>
    )
};
