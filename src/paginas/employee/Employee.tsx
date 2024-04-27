'use client';

import { Row, Col, Typography } from 'antd';
const { Title } = Typography;

import { InfoEmployee, PhotoEmployee } from '@/components';
import { IEmployee } from '@/interfaces';
import '../../styles/employee/_employee.scss';

interface IEmployeeProps {
    employee: IEmployee
}

export const Employee = (props: IEmployeeProps) => {
    const { employee } = props;

    return (
        <div className="container">
            <Row>
                <Col span={ 24 }>
                    <Title level={ 2 } className="title-section-employee">INFORMACIÓN DE PERSONAL</Title>

                    <Row gutter={ 20 }>
                        <PhotoEmployee employee={ employee } />

                        <InfoEmployee employee={ employee } />
                    </Row>
                </Col>
            </Row>
        </div>
    );
}