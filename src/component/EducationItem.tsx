import React from "react";
interface EducationItemProps {
    institution: string;
    degree: string;
    dateRange: string[];
    location: string;
    gpa: string;
}

export const EducationItem: React.FC<EducationItemProps> = ({ institution, degree, dateRange, location, gpa }) => (
    <div className="my-0">
        <h3 className="text-lg font-bold text-gray-900 font-ubuntu">{institution}</h3>
        <p className="text-lg text-gray-900 font-ubuntu -mt-1.5">{degree}</p>
        <div className="flex justify-between items-center font-ubuntu">
            <p className="text-xs font-light text-gray-500 italic font-ubuntu">{dateRange.join(' - ')}</p>
            <p className="text-xs font-light text-gray-500 italic font-ubuntu">{location}, GPA: {gpa}</p>
        </div>
    </div>
);
