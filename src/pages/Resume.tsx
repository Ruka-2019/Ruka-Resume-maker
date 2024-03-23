// src/pages/Resume.tsx
import React, {useRef} from 'react';
import {ContactItem} from '../component/ContactItem';
import {FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub} from 'react-icons/fi';
import {SiLeetcode} from "react-icons/si";
import {SkillTag} from "../component/SkillTagItem";
//@ts-ignore
import html2pdf from 'html2pdf.js';
import {WorkItem} from "../component/WorkExperienceItem";
import {EducationItem} from "../component/EducationItem";
import {LanguageItem} from "../component/LanguageItem";

const Resume = () => {
    const resumeRef = useRef(null);
    const printResume = () => {
        window.print();
    };

    const downloadResumeAsPDF = () => {
        const element = resumeRef.current;
        if (element) {
            // Use html2pdf options
            const options = {
                margin: 0,
                filename: 'resume.pdf',
                image: {type: 'jpeg', quality: 1},
                html2canvas: {
                    scale: 3,
                    letterRendering: true,
                },
                jsPDF: {unit: 'mm', format: 'a4'}
            };

            // Create PDF
            html2pdf().from(element).set(options).save();
        }
    };


    const skills: string[] = ["Python", "C# ASP.NET", "JAVA", "C/C++", "React", "Spring Framework", "MSSQL", "KQL", "AWS", "GCP", "Azure", "OpenAI GPT", "google analytics", "Github Action", "Jenkins CICD", "gRPC"];

    const workItems = [
        {
            comTitle: "Trend Micro Inc.",
            jobTitle: "Cloud Software Developer",
            dateRange: ["06/2022", "Present"],
            skills: ["Golang", "Java", "Python", "dotnet", "AWS", "Azure", "K8s", "KQL", "Terraform"],
            tasks: [
                "Developed security solutions using various `AWS Services (AWS Lambda, CloudWatch, DynamoDB, SQS, CF, ...etc).`",
                "Developed security solutions using `Azure Services (CosmosDB, FunctionApp , OpenAI, Application Insights, ...etc).`",
                "Maintained/developed multiple projects written in `Golang, Java, Python, Dotnet`, including SaaS and on premise product.",
                "Cowork with threat experts and implement `CVE scanning features` with team members.",
                "Implement features for Container Security for `EKS / ECS` to leverage container security configuration using VisionOne.",
                "Set up `APM` for services with `Grafana` dashboard, collected and visualized logs for triage, alerts and sending notifications.",
                "Design & Implement provision process for new service with `Golang, AWS Lambda, DynamoDB, Terraform, Serverless.`",
                "Performed `vulnerability scans` on projects using `Blackduck` and `Deep Security Smart Check`, implemented necessary changes.",
                "Participate in products and feature development including `VisionOne, CloudOne, TippingPoint` etc."
            ]
        },
        // Append another work item here or dynamically
        {
            comTitle: "Titansoft Pte Ltd",
            jobTitle: "Software Engineer",
            dateRange: ["10/2020", "05/2022"],
            skills: ["ASP.Net", ".Net Framework", "MSSQL", "VueJs", "GTM/GA", "GCP", "gRPC"],
            tasks: [
                "Designed survey system using `.Net, MSSQL`, with flexible data structure capable of handling multiple use cases.",
                "Designed & Implemented archtecture for `Authentication Service` using `.Net` (identity server4) for authenticate/authorize for all API calls for services.",
                "Built `API Gateway` with pure `.Net` for `traffic management, authorization` and `RBAC` for API services.",
                "Introduced full coverage of `Google Tag Manager & Analyzed` into product, increased analyzable data collection by 150%",
                "Designed `distribute system` from monolithic backend with `Kubernetes`, reduced downtime and increase maintainability.",
                "Designed and implemented a scalable `RESTful API`, written Unit tests and set up `Ci/CD` with `Gitlab/Jenkins.`",
                "Worked collaboratively with teammates and stakeholders with teammates/stakeholders with `Scrum` and `Agile Model.`",
                "Leading projects for other junior developers and conducted code reviews."
            ]
        }
    ];

    const education = [{
        institution: "National Chung Hsing University",
        degree: "Computer Science and Engineering",
        dateRange: ["09/2016","07/2020"],
        location: "Taiwan",
        gpa: "3.4"
    }];

    const languages = [
        {
            language: "English",
            proficiency: "Professional Working Proficiency",
        },
        {
            language: "Mandarin",
            proficiency: "Native or Bilingual Proficiency",
        }
    ];


    return (
        <div className="bg-gray-100 p-10 flex justify-center items-center min-h-screen">
            <button
                className="fixed bottom-10 right-10 z-50 bg-mainThemeColor hover:bg-mainThemeColorDark text-white font-bold py-3 px-4 rounded-full"
                onClick={downloadResumeAsPDF}
            >
                Download PDF
            </button>
            <div className="bg-white shadow overflow-hidden sm:rounded-lg"
                 style={{width: '210mm', height: '297mm'}}>
            <div ref={resumeRef}>
                <div className="mt-3 mx-3 px-4 py-5 sm:px-6 border-b border-gray-200">
                    <h3 className="text-4xl text-gray-900 font-ubuntu">Jian Lin</h3>
                    <p className="mt-3 mb-4 max-w-2xl text-1.5xl text-gray-500 font-ubuntu">Software Engineer</p>
                    <p className="text-gray-700 text-1xl font-ubuntu">Computer Science and Engineering</p>
                </div>
                <div className="border-t border-b border-gray-200 px-10 py-2.5 bg-gray-50">
                    <div className="grid grid-cols-2 gap-y-1">
                        <ContactItem icon={FiMail} text="ruka9278@gmail.com"/>
                        <ContactItem icon={FiPhone} text="+886 933653596"/>
                        <ContactItem icon={FiMapPin} text="Taichung, Taiwan"/>
                        <ContactItem icon={FiLinkedin} text="linkedin.com/in/jian-lin-b72465196"/>
                        <ContactItem icon={FiGithub} text="github.com/Ruka-2019"/>
                        <ContactItem icon={SiLeetcode} text="leetcode.com/Ruka_2019/"/>
                    </div>
                </div>
                <div className="mx-3 pt-0">
                    <div className="px-4 pt-2 sm:px-6">
                        <dt className="text-xl font-bold uppercase tracking-wide text-mainThemeColor">Skills</dt>
                    </div>
                    <dd className="px-4 py-1 sm:px-6 flex flex-wrap">
                        {/* Map skills here */}
                        {
                            skills.map(skill => (
                                <SkillTag text={skill}/>
                            ))
                        }
                    </dd>
                </div>
                <div className="mx-3 pt-0">
                    <div className="px-4 py-1 sm:px-6">
                        <h2 className="text-xl font-bold uppercase tracking-wide text-mainThemeColor">Work
                            Experience</h2>
                    </div>
                    <div className="bg-white px-4 sm:grid sm:grid-cols-1 sm:gap-0 sm:px-6">
                        {workItems.map((item, index) => (
                            <WorkItem
                                key={index}
                                comTitle={item.comTitle}
                                jobTitle={item.jobTitle}
                                dateRange={item.dateRange}
                                skills={item.skills}
                                tasks={item.tasks}
                            />
                        ))}
                    </div>
                </div>
                <div className="mx-3 pt-0">
                    <div className="px-4 mt-1 sm:px-6">
                        <h2 className="text-xl font-bold uppercase tracking-wide text-mainThemeColor">Education</h2>
                    </div>
                    <div className="bg-white px-4 sm:grid sm:grid-cols-1 sm:gap-0 sm:px-6">

                        {education.map((item, index) => (
                            <EducationItem
                                institution={item.institution}
                                degree={item.degree}
                                dateRange={item.dateRange}
                                location={item.location}
                                gpa={item.gpa}
                            />
                        ))}
                    </div>
                </div>
                <div className="mx-3 mt-4">
                    <div className="px-4 mt-1 sm:px-6">
                        <h2 className="text-xl font-bold uppercase tracking-wide text-mainThemeColor">Languages</h2>
                    </div>
                    <div className="bg-white px-4 pt-1 sm:grid sm:grid-cols-2 sm:gap-0 sm:px-6">
                        {languages.map((item, index) => (
                            <LanguageItem
                                key={index}
                                language={item.language}
                                proficiency={item.proficiency}
                            />
                        ))}
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Resume;
