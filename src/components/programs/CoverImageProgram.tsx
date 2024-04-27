import { Col } from 'antd';

import '../../styles/programs/_cover-image-program.scss';

interface ICoverImageProgramProps {
    mainImage: string;
    hoverImage: string;
    name: string;
}

export const CoverImageProgram = (props: ICoverImageProgramProps) => {
    const { mainImage, hoverImage, name } = props;

    return (
        <Col xs={ 24 } lg={ 12 }>
            <article>
                <img src={ mainImage } alt={ `Main ${ name }` } />
                <img src={ hoverImage } alt={ `Hover ${ name }` } />
            </article>
        </Col>
    );
}