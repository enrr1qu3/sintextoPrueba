'use client';

import { Typography } from 'antd';
const { Paragraph, Title } = Typography;

export const Values = () => {

    const valuesData =  [
        'Transparencia',
        'Profesionalismo',
        'Independencia',
        'Compromiso social',
    ];

    return (
        <>
            <Title level={ 2 } className="title-section-tab">Valores</Title>

            <Paragraph>
                <ul>
                    {
                        valuesData.map((item) => (
                            <li key={item}>{ item }</li>
                        ))
                    }
                </ul>
            </Paragraph>
        </>
    );
}
