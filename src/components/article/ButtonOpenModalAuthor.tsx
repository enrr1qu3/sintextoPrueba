'use client'

import { useEffect, useState } from "react";
import { Avatar, Button, Modal, Row, Typography } from "antd";
import { getAuthorSocialsMedia } from "@/services";
import { UserOutlined } from "@ant-design/icons";
import { FacebookIcon, InstagramIcon, SpotifyIcon, ThreadsIcon, TikTokIcon, WhatsAppIcon, XTwitterIcon, YouTubeIcon } from "@/helpers/CustomIcons";
import "../../styles/article/_modal-author.scss"
import { ISocialMediaAuthor } from "@/interfaces/article/ISocialMediaAuthor";

export const ButtonOpenModalAuthor = ({ author }: { author: any }) => {
    const { Title, Paragraph } = Typography;
    const [socialMediaAuthor, setSocialMediaAuthor] = useState<ISocialMediaAuthor[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleShowModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const getAuthorPerfilByID = async (id: number) => {
        const response = await getAuthorSocialsMedia(id)
        setSocialMediaAuthor(response.data)
    }

    useEffect(() => {
        getAuthorPerfilByID(author.id)
    }, [])

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
        <>
            <Button type="link" className="author-name-link" style={{ padding: 0 }} onClick={handleShowModal}>
                {author.profile.fullName}
            </Button>

            <Modal
                className="modal-author"
                open={isModalOpen}
                onOk={handleCloseModal}
                onCancel={handleCloseModal}
                footer={null}
            >
                <div className="container-modal-author">
                    <Avatar size={150} icon={
                        <>
                            {
                                author.profile.profileImageUrl == null
                                    ? <UserOutlined />
                                    : <img src={author.profile.profileImageUrl} alt="Avatar profile" />
                            }
                        </>
                    }
                    />

                    <Title level={4} className="author-name">{author.profile.fullName}</Title>

                    <Title level={5} className="author-position">Redactor</Title>

                    <Paragraph className="author-description">
                        {author.introText}
                    </Paragraph>

                    {
                        socialMediaAuthor.length > 0
                            ?
                            <>
                                <span className="badge">Síguelo en:</span>
                                <Row justify="center" className="row-social-media-authors">
                                    {
                                        socialMediaAuthor.map((social) => (
                                            <Button
                                                key={social.id}
                                                type="primary"
                                                shape="circle"
                                                className="btn-social-media-author"
                                                target="_blank"
                                                href={social.socialURL}
                                                icon={setIconSocialMedia(social.socialNetworkType!)}
                                            />
                                        ))
                                    }
                                </Row>
                            </>
                            :
                            <></>
                    }
                </div>
            </Modal>
        </>
    )
}

