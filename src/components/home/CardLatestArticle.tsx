import Link from 'next/link';
import Image from 'next/image';
import { Card, Divider, Typography } from 'antd';
const { Meta } = Card;
const { Title, Paragraph } = Typography;

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import 'dayjs/locale/es';
dayjs.extend(utc);
dayjs.locale('es');

import { INewsArticle } from '@/interfaces';

interface ICardLatestArticleProps {
    article: INewsArticle
}

export const CardLatestArticle = (props: ICardLatestArticleProps) => {
    const { article } = props;

    return (
        <Link href={ `/${ article.articleUrlTitle}` }>
            <Card className="card-article-section-home">
                <Meta
                    avatar={
                        <Image
                            src={ article.articleBannerImageURL! }
                            width={ 235 }
                            height={ 235 }
                            alt={ article.title! }
                            className="img-article-section"
                        />
                    }
                    title={
                        <Title level={ 4 } className="article-preview-title">
                            { article.title }
                        </Title>
                    }
                    description={
                        <div>
                            <Title level={ 4 } className="article-date">
                                { dayjs.utc(article.schedulePostDate).local().format('D [de] MMMM [de] YYYY') }
                            </Title>

                            <Divider className="separator" />

                            <Paragraph 
                                ellipsis={{ rows: 2, expandable: false, symbol: 'Ver más' }}
                                className="article-preview-subtitle"
                            >
                                { article.subtitle }
                            </Paragraph >
                        </div>
                    }
                />
            </Card>             
        </Link>
    );
}