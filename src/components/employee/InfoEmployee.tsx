import { Col, Typography } from 'antd';
const { Title } = Typography;

import { IEmployee } from '@/interfaces';

interface IInfoEmployeeProps {
    employee: IEmployee
}

export const InfoEmployee = (props: IInfoEmployeeProps) => {
    const { employee } = props;
    
    const fullNameEmployee = `${employee.name}  ${employee.lastNameP}  ${employee.lastNameM}`;

    return (
        <Col xs={ 24 } md={ 15 } lg={ 17 }>
            <Title level={ 4 } className="name-employee">{ fullNameEmployee }</Title>
            <Title level={ 5 } className="active-employee">{ employee.isActive ? 'PERSONAL ACTIVO' : 'PERSONAL INACTIVO' }</Title>
            
            {
                employee.isActive && (
                    <>
                        <Title level={ 5 } className="duration">Vigencia: Diciembre </Title>
                        
                        <Title level={ 5 } className="summary">
                            A todos los servidores públicos de los diversos medios y niveles de gobierno,
                            así como a los diversos sectores de la sociedad, 
                            se les pide brindar al portador todas las facilidades
                            para el desempeño de su trabajo, respetando la libertad de
                            expresión.
                        </Title>

                    </>
                )
            }
        </Col>
    );
}