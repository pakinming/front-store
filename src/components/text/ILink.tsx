import Link from 'next/link';
import { ReactNode } from 'react';


interface Props { href: string, children: string, className?: string }

const ILink = ({ href, children, className }: Props) => {
    return (
        <Link href={href} className={`btn btn-ghost px-8 text-xl  text-primary  ${className ?? ''}`} >
            {children}
        </Link>
    );
}

export default ILink;
