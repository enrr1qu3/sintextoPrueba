'use client';

import { Divider, Row, Col, Typography } from 'antd';
const { Title } = Typography;
import { INewsArticle } from '@/interfaces';

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);
import 'dayjs/locale/es';
dayjs.locale('es');

import '../../styles/home/_latest-articles.scss';
import { CardLatestArticle } from './CardLatestArticle';

interface ILatestArticlesProps {
    latestArticles: INewsArticle[]
}

export const LatestArticles = (props: ILatestArticlesProps) => {
    const { latestArticles } = props;

    return (
        <>
            <Divider className="divider-home-section" />
            <Title level={ 3 } className="section-title-home">ÚLTIMAS NOTICIAS</Title>
            <Row gutter={ 20 }>
                {
                    latestArticles?.map((article) => (
                        <Col xs={ 24 } md={ 12 } key={ article.id }>
                            <CardLatestArticle article={ article } />
                        </Col>
                    ))
                }
            </Row>
        </>
    );
}