import { Col, Row } from "antd";
import { TitleSectionHeader } from "@/components/section/TituloSectionHeader";
import { CardAutorArticle, ContenVideoImg, SectionHome, SharingButtons } from "@/components";
import { CarruselArticleImage } from "@/components/article/CarruselArticleImage";
import { TextoArticle } from "@/components/article/TextoArticle";

import "@/styles/article/_article.scss"
import { ArticleTags } from "@/components/article/ArticleTags";
import AdvertisementCarousel from "@/components/article/AdvertisementCarousel";
import { AdvertisementHori } from "@/components/article/AdvertisementHori";

export const Article = (props: any) => {
    const { article, section, autorInfo,
        articleBySection, verticalAd, horizontalAD } = props

        // Filtra los artículos para que no aparezca la noticia actual
        let articlesFiltered = articleBySection.data.filter((value: any) => value.id != article.id);
    return (
        <>
            {/* <TitleSectionHeader title={section.name} color={section.assignedColor} /> */}
            <Row >

                <Col xs={0} lg={3} xl={4}>
                    <div >
                        {verticalAd?.length! > 0 && <AdvertisementCarousel advertisementV={verticalAd} numberInitial={0} />}
                        {verticalAd?.length! > 2 && <AdvertisementCarousel advertisementV={verticalAd} numberInitial={2} />}
                    </div>
                </Col>

                <Col xs={24} lg={18} xl={16}>
                    <div >
                        <Row>
                            <Col xs={24} md={24}>
                                <div >
                                    {/* carta y compartir */}
                                    <Row gutter={[0, 30]} >
                                        <CardAutorArticle authors={autorInfo} fecha={article.schedulePostDate} />
                                        <SharingButtons title={article.title} />
                                    </Row>
                                    {/* carta y compartir fin */}

                                    {/* informacion */}

                                    <h2 >{article.title}</h2>

                                    <h4 >{article.subtitle}</h4>

                                    <ContenVideoImg articleVI={article} />

                                    <p key={"imagenes"}>
                                        {article.subtitleVideo}
                                    </p>

                                    <TextoArticle texto={article.content} />
                                    {/* informacion fin */}
                                    {
                                        article.imagesOfArticles?.length > 0 && <CarruselArticleImage imagenesArticle={article.imagesOfArticles} />
                                    }

                                    <Col xs={24}>
                                        <ArticleTags tags={article.newsTags} />
                                    </Col>
                                    {/* publicidad horizontal */}
                                    {horizontalAD?.length > 0 && <AdvertisementHori advertisementH={horizontalAD} />}
                                    {/* publicidad horizontal */}
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Col>

                <Col xs={0} lg={3} xl={4}>
                    <div >
                        {verticalAd?.length! > 1 && <AdvertisementCarousel advertisementV={verticalAd} numberInitial={1} />}
                        {verticalAd?.length! > 3 && <AdvertisementCarousel advertisementV={verticalAd} numberInitial={3} />}
                    </div>
                </Col>

            </Row >

            {/* articulos relacionados */}
            <div >
                <SectionHome
                    sectionTitle="Artículos relacionados"
                    articles={ articlesFiltered }
                    sectionTitleURL={ section.sectionTitleURL }
                    currentPage={ articleBySection.meta.currentPage }
                />
            </div >
        </>
    )
}