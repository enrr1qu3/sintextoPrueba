'use client';

import Link from 'next/link';
import { Button, ButtonProps, Col, Row, Layout } from 'antd';
const { Footer } = Layout;
import dayjs from 'dayjs';

import '../../styles/footer/_footer.scss';

import { FacebookIcon, InstagramIcon, TikTokIcon, XTwitterIcon, YouTubeIcon } from '../../helpers/CustomIcons';

export const MainFooter = () => {

    const currentYear = dayjs().year();

    const buttonLinkProps: ButtonProps  = {
        type: "primary",
        shape: "circle",
        target: "_blank",
        role: "link",
        className: "icon-social-media",
        size: "large"
    }

    const socialNetworksButton = [
        { 
            id: 1,
            icon: <FacebookIcon />,
            href: 'https://www.facebook.com/profile.php?id=100092656646515',
        },
        { 
            id: 2,
            icon: <InstagramIcon />,
            href: 'https://www.instagram.com/sintextomx/',
        },
        { 
            id: 3,
            icon: <XTwitterIcon />,
            href: 'https://twitter.com/SintextoMX',
        },
        { 
            id: 4,
            icon: <YouTubeIcon />,
            href: 'https://www.youtube.com/@Sintexto.noticias',
        },
        { 
            id: 5,
            icon: <TikTokIcon />,
            href: 'https://www.tiktok.com/@sintexto_',
        },
    ]

    return (
        <Footer className="footer">
            <Row className="row-footer-container" gutter={[ 0, 25 ]}>
                <Col xs={ 24 } md={ 12 }>
                    <Row>
                        <Col span={ 8 }>
                            <span className="link-footer">
                                © {currentYear} SINTEXTO
                            </span>
                        </Col>

                        <Col span={ 8 }>
                            <Link className="link-footer" href="/nosotros/quienes-somos">
                                Nosotros
                            </Link>
                        </Col>

                        <Col span={ 8 }>
                            <Link className="link-footer" href="/nosotros/politica-de-privacidad">
                                Política de privacidad
                            </Link>
                        </Col>
                    </Row>
                </Col>
                <Col xs={ 24 } md={ 12 }>
                    <Row justify="center">
                        {
                            socialNetworksButton.map(network => (
                                <Button
                                    { ...buttonLinkProps }
                                    key={ network.id }
                                    href={ network.href }
                                    icon={ network.icon }
                                />
                            ))
                        }
                    </Row>
                </Col>
            </Row>
        </Footer>
    );
}