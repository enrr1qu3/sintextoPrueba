'use client';

import { Typography } from 'antd';
const { Paragraph, Title } = Typography;

export const Vision = () => {
    return (
        <>
            <Title level={ 2 } className="title-section-tab">Visión</Title>

            <Paragraph>
                Consolidar a la empresa en México como la
                referencia inmediata y confiable de periodismo y
                entretenimiento con espacios específicos dedicados
                a cada segmento de interés de la población,
                interlocutores con las necesidades de la sociedad
                para que puedan tener una visión completa sobre
                cualquier problemática y como abordarla.
            </Paragraph>
        </>
    )
}
