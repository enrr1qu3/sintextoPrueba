'use client';

import { Button, Card, Col, Form, Input, Row, Typography } from 'antd';
import { EnvelopeIcon, FacebookIcon, InstagramIcon, LocationIcon, PhoneIcon, XTwitterIcon, YouTubeIcon } from '../../helpers/CustomIcons';
const { Meta } = Card;
const { Title } = Typography;
const { TextArea } = Input;

import '../../styles/about/_contact-us.scss';

export const ContactUs = () => {

    const contacts = [
        {
            id: '1',
            text: 'errediezmultimedia@gmail.com',
            icon: <EnvelopeIcon className="icon-contact" />
        },
        {
            id: '2',
            text: 'Calle Laguna El Caracol #15 Fracc. Lagunas de San José, Villahermosa, Tabasco',
            icon: <LocationIcon className="icon-contact" />
        },
        {
            id: '3',
            text: '9933537060',
            icon: <PhoneIcon className="icon-contact" />
        }
    ];

    const [ form ] = Form.useForm();

    return (
        <>
            <Title level={ 2 } className="title-section-tab">Contacto</Title>

            <Row gutter={[ 30, 30 ]}>
                <Col xs={ 24 } md={ 12 } className="col-contact-us">
                    {
                        contacts.map((contact) => (
                            <Card key={ contact.id }>
                                <Meta
                                    avatar={ contact.icon }
                                    title={ contact.text }
                                />
                            </Card>
                        ))
                    }

                    <Row gutter={ 18 } className="row-icons">
                        <div className="wrapper-icons">
                            <Button type="primary" shape="circle" className="btn-icon-contact" icon={ <FacebookIcon /> } />
                        
                            <Button type="primary" shape="circle" className="btn-icon-contact" icon={ <InstagramIcon /> } />

                            <Button type="primary" shape="circle" className="btn-icon-contact" icon={ <XTwitterIcon /> } />
                        
                            <Button type="primary" shape="circle" className="btn-icon-contact" icon={ <YouTubeIcon /> } />
                        </div>
                    </Row>
                </Col>

                <Col xs={ 24 } md={ 12 } className="col-form-contact-us">
                    <Form
                        form={ form }
                        layout="vertical"
                    >
                        <Form.Item label="Nombre" required>
                            <Input />
                        </Form.Item>

                        <Form.Item label="Correo electrónico" required>
                            <Input />
                        </Form.Item>

                        <Form.Item label="Asunto" required>
                            <Input />
                        </Form.Item>

                        <Form.Item label="Mensaje" required>
                            <TextArea rows={ 4 } placeholder="Escribe tu mensaje..." />
                        </Form.Item>

                        <div className="container-btn-submit">
                            <Form.Item>
                                <Button type="primary" className="btn-submit">Enviar</Button>
                            </Form.Item>
                        </div>

                    </Form>
                </Col>
            </Row>
        </>
    )
}