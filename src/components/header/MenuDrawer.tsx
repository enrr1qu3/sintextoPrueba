'use client';

import { useState } from 'react';
import Link from 'next/link';

import { Button, Col, Drawer, Row } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

import { ISectionHome } from '@/interfaces';
import '../../styles/header/_menu-drawer.scss';

interface IMenuDrawerProps {
    sections: ISectionHome[]
}

export const MenuDrawer = (props: IMenuDrawerProps) => {
    const [ isDrawerVisible, setIsDrawerVisible ] = useState(false);
    const { sections } = props;

    const onShowDrawer = () => {
        setIsDrawerVisible(true);
    };

    const onCloseDrawer = () => {
        setIsDrawerVisible(false);
    };

    return (
        <>
            <Button type="link" className="btn-menu" size="large" onClick={ onShowDrawer }>
                <MenuOutlined />
            </Button>

            <Drawer
                placement="left"
                onClick={ onCloseDrawer }
                onClose={ onCloseDrawer }
                open={ isDrawerVisible }
            >
                <Row gutter={[0, 30]}>
                    {
                        sections.map(section => (
                            <Col span={ 8 } key={ section.id }>
                                <Link
                                    className="menu-item-section"
                                    href={
                                        section.name == 'Programas' 
                                        ? '/programas'
                                        : `/seccion/${section.sectionTitleURL}`
                                    }
                                >
                                    <Col>
                                        <img src={ section.sectionFilePathUrl } alt={ section.name } height={ 26 } />
                                        <br />
                                        <span>{ section.name }</span>
                                    </Col>
                                </Link>
                            </Col>
                        ))
                    }
                </Row>
            </Drawer>
        </>
    );
}