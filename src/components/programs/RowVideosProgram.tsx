import Link from 'next/link';
import Image from 'next/image';
import { Card, Col, Row, Typography } from 'antd';
const { Title } = Typography;

import { IVideosProgram } from '@/interfaces';
import { getYoutubeThumbnail } from '@/services';

import '../../styles/programs/_row-videos-program.scss';

interface IRowVideosProgramProps {
    videos: IVideosProgram[]
}

export const RowVideosProgram = (props: IRowVideosProgramProps) => {
    const { videos } = props;

    return (
        <Col span={ 24 } className="container-videos-youtube">
            <Title level={ 4 } className="title-program">Videos</Title>

            <Row gutter={[ 50, 30 ]}>
                {
                    videos.map(video => (
                        <Col xs={ 24 } sm={ 12 } lg={ 6 } key={ video.id }>
                            <Card
                                hoverable
                                bordered={ false }
                                className="image-video-youtube"
                                cover={
                                    <Link className="link-card-program" href={ video.urlYoutube } target="_blank">
                                        <Image
                                            className="img-program-gallery"
                                            src={ getYoutubeThumbnail(video.urlYoutube)! }
                                            alt={ video.urlYoutube }
                                            width={ 2048 }
                                            height={ 1080 }
                                        />
                                    </Link>
                                }
                            >
                            </Card>
                        </Col>
                    ))
                }
            </Row>
        </Col>
    );
}