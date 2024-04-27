import Link from 'next/link';
import Image from 'next/image';
import { Col, Row } from 'antd';

import '../../styles/advertisement/_advertisement-horizontal.scss';

interface IAdvertisementHorizontalProps {
    imageUrl: string;
    urlToRedirect: string;
}

export const AdvertisementHorizontal = (props: IAdvertisementHorizontalProps) => {
    const { imageUrl, urlToRedirect } = props;

    const setImage = () => {
        if (imageUrl.startsWith('https://sintextoproduction.blob.core.windows.net')) {
            return (
                <Image
                    src={ imageUrl }
                    alt="Info Image Horizontal"
                    width={ 1920 }
                    height={ 1080 }
                    className="img-add"
                />
            )
        }
        else {
            return <img src={ imageUrl } alt="Info Add Vertical" className="img-add" />
        }
    }

    return (
        <Row>
            <Col span={ 24 }>
                <div className="container-add-1">
                    {
                        urlToRedirect != null 
                        ?
                            <Link href={ urlToRedirect } target="_blank">
                                <img
                                    src={ imageUrl }
                                    alt="Info Horizontal"
                                />
                            </Link>
                        :
                            setImage()
                    }
                </div>
            </Col>
        </Row>
    );
}