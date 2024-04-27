'use client'
import Image from "next/image";
import "../../styles/section/_card-article-by-section.scss"
import { Article } from "@/interfaces/section/ISection"
import { Card, Divider, Typography } from "antd"
import Meta from "antd/es/card/Meta"
import Link from "next/link"
const { Title } = Typography;

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
import 'dayjs/locale/es';
dayjs.locale('es');


export const CardSection = ({ article }: { article: Article }) => {
    return (
        <Link href={`/${article.articleUrlTitle}`} key={article.id}>
            <Card className="card-article-section"
                bordered={false}
            >
                <Meta
                    avatar={
                        <Image
                            src={article.articleBannerImageURL}
                            width={150}
                            height={150}
                            alt={`Imagen${article.title}`}
                            className="img-article-section"
                        />
                    }
                    title={
                        <Title level={4} className="article-preview-title">
                            {article.title}
                        </Title>
                    }
                    description={
                        <div>
                            <Title level={4} className="article-date">
                                {dayjs.utc(article.schedulePostDate).local().format('D [de] MMMM [de] YYYY')}
                            </Title>

                            <Divider className="separator" />

                            <Title level={4} ellipsis={{ rows: 2, expandable: false, symbol: 'Ver más' }} className="article-preview-subtitle">
                                {article.subtitle}
                            </Title>
                        </div>
                    }
                />
            </Card>
        </Link>
    )
}
