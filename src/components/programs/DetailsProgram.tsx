'use client';

import { Button, ButtonProps, Col, Row, Typography } from 'antd';
const { Text, Paragraph, Title } = Typography;

import { FacebookIcon, InstagramIcon, SpotifyIcon, ThreadsIcon, TikTokIcon, WhatsAppIcon, XTwitterIcon, YouTubeIcon } from '@/helpers/CustomIcons';
import { ILiveStream } from '@/interfaces';

import '../../styles/programs/_details-program.scss';

interface IDetailsProgramProps {
    program: ILiveStream
}

export const DetailsProgram = (props: IDetailsProgramProps) => {
    const { program } = props;

    const buttonLinkProps: ButtonProps = {
        className: "btn-social-media-program",
        role: "link",
        shape: "circle",
        size: "large",
        target: "_blank",
        type: "primary"
    }

    const setIconSocialMedia = (socialNetwork: string) => {
        switch (socialNetwork) {
            case 'Facebook':
                return <FacebookIcon />;
            case 'Instagram':
                return <InstagramIcon />;
            case 'Twitter':
                return <XTwitterIcon />;
            case 'TikTok':
                return <TikTokIcon />;
            case 'Threads':
                return <ThreadsIcon />;
            case 'WhatsApp':
                return <WhatsAppIcon />;
            case 'Spotify':
                return <SpotifyIcon />;
            case 'YouTube':
                return <YouTubeIcon />;
        }
    }
    
    return (
        <div>
            <Row>
                <Col span={ 24 }>
                    <Row gutter={[ 20, 25 ]}>
                        <Col xs={{ span: 24, order: 2 }} sm={{ span: 12, order: 1 }} md={{ span: 12, order: 1 }}>
                            <Title level={ 4 } className="title-program">{ program.name }</Title>
                        </Col>

                        <Col xs={{ span: 24, order: 1 }} sm={{ span: 12, order: 2 }} md={{ span: 12, order: 2 }}>
                            <Row justify="end" className="row-social-media">
                                {
                                    program.socialMediaPrograms.map((socialMedia) => (
                                        <Button
                                            key={ socialMedia.id }
                                            { ...buttonLinkProps }
                                            href={ socialMedia.socialMediaUrl }
                                            icon={ setIconSocialMedia(socialMedia.networkType) }
                                            target="_blank"
                                        />
                                    ))
                                }
                            </Row>
                        </Col>
                    </Row>
                </Col>

                <Col span={ 24 }>
                    <Paragraph>
                        <Text strong>Conduce:</Text> <Text>{ program.hostName }</Text>
                    </Paragraph>

                    <Paragraph>
                        <Text strong>{ program.schedule }</Text>
                    </Paragraph>
                </Col>
            </Row>

            <Paragraph>
                { program.description }
            </Paragraph>
        </div>
    )
}