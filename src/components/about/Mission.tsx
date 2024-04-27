'use client';

import { Typography } from 'antd';
const { Paragraph, Title } = Typography;

export const Mission = () => {
    return (
        <>
            <Title level={ 2 } className="title-section-tab">Misión</Title>

            <Paragraph>
                Ofrecer a la sociedad un espacio confiable de
                comunicación y entretenimiento que incorpore todos
                los enfoques de manera profesional sobre cualquier
                hecho, que trascienda temporalidad y espacio
                geográfico, para que puedan formar una opinión sin
                sesgos siempre apegados a la innovación tecnológica
                y los cambios sociales que hoy ocurren de forma
                constante.
            </Paragraph>
        </>
    )
}
