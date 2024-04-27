import Link from 'next/link';
import Image from 'next/image';
import { CSSProperties } from 'react';
import { Row, Col } from 'antd';

import '../../styles/home/_main-article.scss';

interface CustomCSSProperties extends CSSProperties {
    '--url-bg'?: any;
}

interface IMainArticleProps {
    idArticle?: number;
    mainArticleURLTitle?: string;
    mainArticleBannerUrl?: string;
}

export const MainArticle = (props: IMainArticleProps) => {
    const { idArticle, mainArticleBannerUrl, mainArticleURLTitle } = props;
    
    return (
        <Row key={ idArticle } className="row-container-img">
            <Col span={ 24 } className="h-100">
                <Link href={ mainArticleURLTitle! }>
                    <div
                        className="banner"
                        style={{ '--url-bg': `url(${mainArticleBannerUrl})` } as CustomCSSProperties}
                    >
                        <Image
                            className="img-main-article"
                            src={ mainArticleBannerUrl! }
                            width={ 1920 }
                            height={ 1080 }
                            alt="Image"
                        />

                    </div>
                </Link>
            </Col>
        </Row>
    );
}
