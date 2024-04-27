'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Card, Button } from 'antd';
import { FacebookIcon, InstagramIcon, XTwitterIcon, TikTokIcon, ThreadsIcon, WhatsAppIcon, YouTubeIcon, SpotifyIcon } from '@/helpers/CustomIcons';
import { ISocialMediaArticle } from '@/interfaces';

interface ICardSocialMediaArticleProps {
    socialMediaArticle: ISocialMediaArticle
}

export const CardSocialMediaArticle = (props: ICardSocialMediaArticleProps) => {
    const { socialMediaArticle } = props;
    
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
            case 'YouTube':
                return <YouTubeIcon />;
            case 'Spotify':
                return <SpotifyIcon />;
        }
    }
    
    return (
        <Link href={ socialMediaArticle.socialNetworkArticleURL! } target="_blank">
            <Card
                hoverable
                className="card-social-network"
                cover={
                    <Image
                        className="img-article-social-network"
                        alt={ socialMediaArticle.articleTitle! }
                        src={ socialMediaArticle.articleImageURL! }
                        width={ 150 }
                        height={ 150 }
                    />
                }
            >
                <div className="info-social-media">
                    <Button
                        type="primary"
                        shape="circle"
                        name="button-social-media"
                        className="btn-social-media"
                        icon={ setIconSocialMedia(socialMediaArticle.socialNetwork!) }
                        size="large"
                    />
                </div>
            </Card>
        </Link>
    );
}