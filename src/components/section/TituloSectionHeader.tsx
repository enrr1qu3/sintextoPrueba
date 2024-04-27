'use client'
import { Row, Typography } from 'antd';
const { Title } = Typography;

import "../../styles/section/_title-section-header.scss"

interface ITitleSection {
    title?: string,
    color?: string
}

export const TitleSectionHeader = (props: ITitleSection) => {

    const { title, color } = props;

    return (
        <Row justify="center" style={{  backgroundColor: color }} className="container-title-section" align="middle">
            <Title level={ 2 } className="title-section">{ title }</Title>
        </Row>
    );
}
