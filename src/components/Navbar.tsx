import { PathUrl } from '@/constant/path-url'
import { useTranslations } from 'next-intl'
import React from 'react'
import ILink from './text/ILink';

export const Navbar = () => {
    const url = useTranslations("pathUrl");
    return (
        <>
            <div className="navbar bg-base-100 justify-center">

                <div className='flex-1'>
                    <ILink href={PathUrl.home} >{url("home")}</ILink>
                    <ILink href={PathUrl.product}>{url("product")}</ILink>
                    <ILink href={PathUrl.about}>{url("about")}</ILink>
                    <ILink href={PathUrl.contact}>{url("contact")}</ILink>
                </div>

                <div className='flex-none'>
                    <a className="btn btn-ghost px-8 text-xl  " href={PathUrl.contact}>{"ID"}</a>
                </div>

            </div>
        </>
    )
}


