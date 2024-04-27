import Link from 'next/link';
import Image from 'next/image';
import { Card, Row, Col } from 'antd';
import { INewsArticle } from '@/interfaces';

import '../../styles/home/_card-article.scss';

interface ICardArticleProps {
    article: INewsArticle
}

export const CardArticle = (props: ICardArticleProps) => {
    const { article } = props;

    return (
        <Link href={ article.articleUrlTitle! } className="link-card">
            <Card
                className="card-article-home"
                cover={
                    <Image
                        className="img-article-home"
                        alt={ article.title! }
                        src={ article.articleBannerImageURL! }
                        width={ 1920 }
                        height={ 1080 }
                        style={{width:"100%", height:"100%"}}
                    />
                }
            >
                <div className="info">
                    <Row>
                        <Col span={ 24 } className="bg-title-article-card">
                            <Row>
                                <Col span={ 24 }>
                                    <p>{ article.title }</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Card>
        </Link>
    );
}