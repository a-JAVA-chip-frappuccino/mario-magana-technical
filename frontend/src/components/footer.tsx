import React from "react";

const FooterItems = [
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

export const Footer: React.FC = () => {
    return (
        <footer>
            <p>© 2025 Oursite</p>
            <ul>
                {FooterItems.map(item => (
                    <li key={item.title}><a
                        href={item.href}>{item.title}</a></li>
                ))}
            </ul>
        </footer>
    );
}