import { IconType } from 'react-icons';

interface ContactItemProps {
    icon: IconType;
    text: string;
}

export const ContactItem: React.FC<ContactItemProps> = ({ icon: Icon, text }) => (
    <div className="flex items-center mb-1">
        <Icon className="text-primary mr-2" />
        <span className="text-sm text-gray-700 font-ubuntu">{text}</span>
    </div>
);
