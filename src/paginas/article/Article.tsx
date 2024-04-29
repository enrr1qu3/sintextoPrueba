import { Col, Row } from "antd";
import "@/styles/article/_article.scss"
export const Article = (props: any) => {
    const { article} = props

    return (
        <>
            {/* <TitleSectionHeader title={section.name} color={section.assignedColor} /> */}
            <Row className="main-row">

                <Col xs={0} lg={3} xl={4}>
                    {/* <div className="col-ad-left">
                        {verticalAd?.length! > 0 && <AdvertisementCarousel advertisementV={verticalAd} numberInitial={0} />}
                        {verticalAd?.length! > 2 && <AdvertisementCarousel advertisementV={verticalAd} numberInitial={2} />}
                    </div> */}
                </Col>

                <Col xs={24} lg={18} xl={16}>
                    <div className="container">
                        <Row>
                            <Col xs={24} md={24}>
                                <div className="container-article">
                                    {/* carta y compartir */}
                                    {/* <Row gutter={[0, 30]} justify="space-between">
                                        <CardAutorArticle authors={autorInfo} fecha={article.schedulePostDate} />
                                        <SharingButtons title={article.title} />
                                    </Row> */}
                                    {/* carta y compartir fin */}

                                    {/* informacion */}

                                    <h2 className="article-title">{article.title}</h2>

                                    <h4 className="article-subtitle">{article.subtitle}</h4>

                                    {/* <ContenVideoImg articleVI={article} /> */}

                                    {/* <p className="subtitle-video" key={"imagenes"}>
                                        {article.subtitleVideo}
                                    </p> */}

                                    {/* <TextoArticle texto={article.content} /> */}
                                    {/* informacion fin */}
                                    {
                                        // article.imagesOfArticles?.length > 0 && <CarruselArticleImage imagenesArticle={article.imagesOfArticles} />
                                    }

                                    <Col xs={24}>
                                        {/* <ArticleTags tags={article.newsTags} /> */}
                                    </Col>
                                    {/* publicidad horizontal */}
                                    {/* {horizontalAD?.length > 0 && <AdvertisementHori advertisementH={horizontalAD} />} */}
                                    {/* publicidad horizontal */}
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>

                <Col xs={0} lg={3} xl={4}>
                    <div className="col-ad-right">
                        {/* {verticalAd?.length! > 1 && <AdvertisementCarousel advertisementV={verticalAd} numberInitial={1} />} */}
                        {/* {verticalAd?.length! > 3 && <AdvertisementCarousel advertisementV={verticalAd} numberInitial={3} />} */}
                    </div>
                </Col>

            </Row >

            {/* articulos relacionados */}
            <div className="container" >
                {/* <SectionHome sectionTitle="Artículos relacionados" articles={articleBySection} /> */}
            </div >
        </>
    )
}