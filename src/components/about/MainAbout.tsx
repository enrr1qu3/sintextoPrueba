'use client'; 

import { usePathname, useRouter } from 'next/navigation';
import { Row, Col, Tabs } from 'antd';
import { AboutUs, ContactUs, Mission, PrivacyPolicy, Values, Vision } from '..';

import '../../styles/about/_about-us.scss';

export const MainAbout = () => {
    const pathName = usePathname();
    const router = useRouter();

    const titleTabs = [
        { id: '5', name: 'Política de privacidad', urlPath: '/nosotros/politica-de-privacidad' },
        { id: '1', name: 'Quiénes somos', urlPath: '/nosotros/quienes-somos' },
        { id: '2', name: 'Misión', urlPath: '/nosotros/mision' },
        { id: '3', name: 'Visión', urlPath: '/nosotros/vision' },
        { id: '4', name: 'Valores', urlPath: '/nosotros/valores' },
        { id: '6', name: 'Contacto', urlPath: '/nosotros/contacto' },
    ];

    const findActiveTab = (path: string) => {
        const activeTab = titleTabs.find(tab => path.startsWith(tab.urlPath));
        return activeTab?.id;
    };

    const handleTabChange = (activeKey: string) => {
        const findTab = titleTabs.find(tab => tab.id === activeKey);
        if (findTab) {
            router.push(findTab.urlPath);
        }
    }

    const setChildrenTab = (indexTab: string) => {
        switch (indexTab) {
            case '1':
                return <AboutUs />
            case '2':
                return <Mission />
            case '3':
                return <Vision />
            case '4':
                return <Values />
            case '5':
                return <PrivacyPolicy />
            case '6':
                return <ContactUs />
        }
    }

    return (
        <div className="container">            
            <Row>
                <Col xs={ 0 } md={ 1 } lg={ 2 } xl={ 3 }></Col>
                <Col xs={ 24 } md={ 22 } lg={ 20 } xl={ 18 }>
                    <div className="container-tabs">
                        <Tabs
                            activeKey={ findActiveTab(pathName!) }
                            onChange={ handleTabChange }
                            type="card"
                            size="large"
                            centered
                            items={titleTabs.map((item) => {
                                return {
                                    label: item.name,
                                    key: item.id,
                                    children: setChildrenTab(item.id),
                                };
                            })}
                        />
                    </div>
                </Col>
                <Col xs={ 0 } md={ 1 } lg={ 2 } xl={ 3 }></Col>
            </Row>
        </div>
    );
}