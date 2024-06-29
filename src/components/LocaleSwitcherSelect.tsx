'use client';

import { CheckIcon, LanguageIcon } from '@heroicons/react/24/solid';
import clsx from 'clsx';
import { useTransition } from 'react';
import { Locale } from '@/config';
import { Select } from '@headlessui/react';
import { setUserLocale } from '@/services/locale';

type Props = {
    defaultValue?: string;
    items: Array<{ value: string; label: string }>;
    label: string;
};

export default function LocaleSwitcherSelect({
    defaultValue,
    items,
    label
}: Props) {
    const [isPending, startTransition] = useTransition();

    function onChange(value: string) {
        const locale = value as Locale;

        startTransition(() => {
            setUserLocale(locale);
        });


    }

    return (
        <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">Pick the best fantasy franchise</span>
                <span className="label-text-alt">Alt label {label}</span>
            </div>
            {items.length}
            <select className="select select-bordered" defaultValue={defaultValue} onChange={event => onChange(event.target.value)} >
                {
                    items.map(e => <option key={e.value} value={e.value}>{e.label}</option>)
                }
                {/* <option selected value={'0'}>TH</option>
                <option value={'Star Wars1'}>EN</option> */}
            </select>

        </label>
    );
}