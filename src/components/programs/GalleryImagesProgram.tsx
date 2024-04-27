import { Card, Col, Image, Row, Typography } from 'antd';
const { Title } = Typography;

import { IGalleryImageProgram } from '@/interfaces';
import '../../styles/programs/_gallery-images-program.scss';

interface IGalleryImagesProgramProps {
    images: IGalleryImageProgram[]
}

export const GalleryImagesProgram = (props: IGalleryImagesProgramProps) => {
    const { images } = props;

    return (
        <div>
            <Title level={ 4 } className="title-program title-gallery">Galería</Title>

            <Row gutter={ 20 }>
                <Image.PreviewGroup>
                    {
                        images.map((image, index) => (
                            <Col span={ 8 } key={ image.id }>
                                <Card
                                    style={ index > 2 ? { display: 'none' } : { display: 'inherit' } }
                                    hoverable
                                    bordered={ false }
                                    className="card-program-gallery"
                                    cover={
                                        <Image
                                            alt={ `Image Program ${image.id}` }
                                            className="img-program-gallery"
                                            src={ image.filePathUrl }
                                        />
                                    }
                                >
                                    {
                                        images.length > 3 && index == 2
                                        ? <div className="overlay-text">+{ images.length - 3 }</div>
                                        : <></>
                                    }
                                </Card>
                            </Col>
                        ))
                    }
                </Image.PreviewGroup>
            </Row>
        </div>
    );
}