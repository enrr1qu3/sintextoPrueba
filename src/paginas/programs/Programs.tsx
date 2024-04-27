'use client';

import { Col, Row, Typography, Divider } from 'antd';
const { Title } = Typography;

import { ILiveStream } from '@/interfaces';
import { CoverImageProgram, DetailsProgram, GalleryImagesProgram, RowVideosProgram, TitleSectionHeader } from '../../components';
import '../../styles/programs/_programs.scss';

interface IProgramsProps {
    programs: ILiveStream[]
}

export const Programs = (props: IProgramsProps) => {
    const { programs } = props;

    return (
        <>
            <TitleSectionHeader color={ '#3E61AF' } title={ 'Programas' } />

            <div className="container">
                {
                    programs?.map((program, index) => (
                        <div key={ program.id }>
                            <Row gutter={[ 30, 20 ]} className="row-program" key={ program.id }>
                                <CoverImageProgram
                                    mainImage={ program.mainImagePathUrl }
                                    hoverImage={ program.hoverImagePathUrl }
                                    name={ program.name }
                                />

                                <Col xs={ 24 } lg={ 12 } className="col-details-program">
                                    <DetailsProgram program={ program } />

                                    {
                                        program.galleriesPrograms.length > 0 && (
                                            <GalleryImagesProgram images={ program.galleriesPrograms } />
                                        )
                                    }
                                </Col>                                
                            </Row>

                            <Row>
                                {
                                    program.videosYoutube.length > 0 && (
                                        <RowVideosProgram videos={ program.videosYoutube } />
                                    )
                                }

                                {
                                    index != programs.length - 1 && (
                                        <Col span={ 24 }>
                                            <div className="row-divider-program">
                                                <Divider className="divider-program" />
                                            </div>
                                        </Col>
                                    )
                                }
                            </Row>
                        </div>
                    ))
                }
            </div>
        </>
    );
}