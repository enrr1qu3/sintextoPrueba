import { CSSProperties } from 'react';
import Link from 'next/link';

import { ISectionHome } from '@/interfaces';
import '../../styles/header/_headband.scss';

interface CustomCSSProperties extends CSSProperties {
    '--section-color'?: string;
}

interface IHeadbandProps {
    sections: ISectionHome[];
}

export const Headband = (props: IHeadbandProps) => {
    const { sections } = props;

    return (
        <div className="row-headband">
            <ul className="wrap-headband">
                {sections.filter(section => section.showInFrontPage).map(section => (
                    <li
                        key={ section.id }
                        className="item-headband"
                        style={{ '--section-color': section.assignedColor } as CustomCSSProperties}
                    >
                        <Link
                            key={ section.id }
                            href={
                                section.name == 'Programas' 
                                ? '/programas'
                                : `/seccion/${section.sectionTitleURL}`
                            }
                        >
                            { section.name }
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}