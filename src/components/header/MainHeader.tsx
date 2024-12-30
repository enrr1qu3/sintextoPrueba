'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Row, Col, Layout, Typography } from 'antd';
const { Header } = Layout;
const { Title } = Typography;
import { getAllNewsSection } from '@/services';
import { Datetime, Headband, MenuDrawer, SearchButton } from '..';

import '../../styles/header/_header.scss'
import { ISectionHome } from '@/interfaces';

export const MainHeader = () => {
    const [ sections, setSections ] = useState<ISectionHome[]>([]);

    useEffect(() => {
        getSections();
    }, []);

    const getSections = async () => {
        const response = await getAllNewsSection();
        setSections(response.data);
    }
    
    return (
        <Header id="navbar" className="header">
            <Row justify="space-between" className="row-header">
                <Col xs={ 9 } sm={ 8 }>
                    <Row align="middle">
                        <MenuDrawer sections={ sections } />

                        <Link href={'/'} className="link-icon">
                            <img src="/images/logo.png" alt="Icon SINTEXTO" className="img-icon" />
                        </Link>

                        <Datetime />
                    </Row>
                </Col>

                <Col xs={ 0 } sm={ 8 }>
                    <div className="link-logo">
                        <Link href="/" className="link-logo">
                            <img src="/images/logo_navbar_sintexto.png" className="img-logo" alt="Logo SINTEXTO" />
                        </Link>
                    </div>
                </Col>

                <Col xs={ 15 } sm={ 8 } className="column-search" >
                    <SearchButton />
                </Col>
            </Row>

            {/* <Row className="wrap-row-headband">
                <Headband sections={ sections } />
            </Row> */}
        </Header>
    );
}
