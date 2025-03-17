import { User } from "@frontend/app/api/user/route";
import Image from "next/image";

const NavBarItems = [
    {
        title: 'Home',
        href: '#',
    },
    {
        title: 'About',
        href: '#',
    },
    {
        title: 'Contact',
        href: '#',
    },
    {
        title: 'Blog',
        href: '#',
    },
    {
        title: 'Careers',
        href: '#',
    },
    {
        title: 'Support',
        href: '#',
    }
];

type NavBarProps = {
    user: User;
};

export const NavBar: React.FC<NavBarProps> = ({ user }) => {
    return (
        <nav>
            <ul>
                {NavBarItems.map(item => (
                    <li key={item.title}><a
                        href={item.href}>{item.title}</a></li>
                ))}
            </ul>
            {/* Add avatar here */}
            <Image
                src={user.avatar_url}
                alt={user.name}
                width={50}
                height={50}
            />
        </nav>
    );
}