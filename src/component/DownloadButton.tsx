import React, { RefObject }  from 'react';
import ReactDOMServer from 'react-dom/server';
import Resume from '../pages/Resume';
import App from '../App';
import generatePDF, { Resolution, Margin, Options } from "react-to-pdf";

interface DownloadPDFButtonProps {
    resumeRef: RefObject<HTMLDivElement>; // Assuming the ref is attached to a div element
}

const DownloadPDFButton: React.FC<DownloadPDFButtonProps> = ({ resumeRef }) => {
    const options: Options = {
        filename: "resume.pdf",
        method: "save",
        // default is Resolution.MEDIUM = 3, which should be enough, higher values
        // increases the image quality but also the size of the PDF, so be careful
        // using values higher than 10 when having multiple pages generated, it
        // might cause the page to crash or hang.
        resolution: Resolution.EXTREME,
        page: {
            // margin is in MM, default is Margin.NONE = 0
            // margin: Margin.SMALL,
            // default is 'A4'
            // format: "letter",
            // default is 'portrait'
            // orientation: "landscape"
        },
        canvas: {
            // default is 'image/jpeg' for better size performance
            mimeType: "image/jpeg",
            qualityRatio: 1
        },
        // Customize any value passed to the jsPDF instance and html2canvas
        // function. You probably will not need this and things can break,
        // so use with caution.
        overrides: {
            // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
            pdf: {
                compress: true
            },
            // see https://html2canvas.hertzen.com/configuration for more options
            canvas: {
                useCORS: true
            }
        }
    };
    const downloadPdf = () => generatePDF(resumeRef, options);

    return (
        <button className="fixed bottom-10 right-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={downloadPdf}>
            Download PDF
        </button>
    )
};

export default DownloadPDFButton;