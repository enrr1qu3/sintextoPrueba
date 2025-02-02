'use client'
import { useEffect } from "react";
import { Col, Row } from "antd";
import { TitleSectionHeader } from "@/components/section/TituloSectionHeader";
import { CardAutorArticle, /*ContenVideoImg,*/ SectionHome, SharingButtons } from "@/components";
import { CarruselArticleImage } from "@/components/article/CarruselArticleImage";
import { TextoArticle } from "@/components/article/TextoArticle";

import "@/styles/article/_article.scss"
import { ArticleTags } from "@/components/article/ArticleTags";
import AdvertisementCarousel from "@/components/article/AdvertisementCarousel";
import { AdvertisementHori } from "@/components/article/AdvertisementHori";
import { WhatsAppOutlined } from "@ant-design/icons";

export const Article = (props: any) => {
    const { article, section, autorInfo,
        articleBySection, verticalAd, horizontalAD } = props
        useEffect(() => {
            const handleScroll = () => {
                console.log("Scroll position:", window.scrollY);
            };
    
            window.addEventListener("scroll", handleScroll);
    
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }, []);

    // Filtra los artículos para que no aparezca la noticia actual
    let articlesFiltered = articleBySection.data.filter((value: any) => value.id != article.id);
    return (
        <>
            <TitleSectionHeader title={section.name} color={section.assignedColor} />
            <Row className="main-row">

                <Col xs={0} lg={3} xl={4}>
                    <div className="col-ad-left">
                        {verticalAd?.length! > 0 && <AdvertisementCarousel advertisementV={verticalAd} numberInitial={0} />}
                        {verticalAd?.length! > 2 && <AdvertisementCarousel advertisementV={verticalAd} numberInitial={2} />}
                    </div>
                </Col>

                <Col xs={24} lg={18} xl={16}>
                    <div className="container">
                        <Row>
                            <Col xs={24} md={24}>
                                <div className="container-article">
                                    {/* carta y compartir */}
                                    <Row gutter={[0, 30]} justify="space-between">
                                        <CardAutorArticle authors={autorInfo} fecha={article.schedulePostDate} />
                                        <SharingButtons title={article.title} />
                                    </Row>
                                    {/* carta y compartir fin */}

                                    {/* informacion */}

                                    <h2 className="article-title">{article.title}</h2>

                                    <h4 className="article-subtitle">{article.subtitle}</h4>

                                    {/* <ContenVideoImg articleVI={article} /> */}

                                    <p className="subtitle-video" key={"imagenes"}>
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
                                    <Col xs={24}>
                                        <h5
                                            style={{ fontFamily: "sans-serif", fontStyle: "italic", fontSize: 20, fontWeight: "lighter" }}
                                        >   Únete a nuestro canal de WhatsApp
                                        <br/>
                                            Entérate desde tu teléfono de todas las
                                            noticias dando clic aquí 👉🏻 <a href="https://whatsapp.com/channel/0029VaFPfbFC1FuHd9Ifx02X" >
                                                <span style={{ fontWeight: "700", textDecorationLine: "underline" }} >Únete a nuestro canal <WhatsAppOutlined /></span>
                                            </a>
                                        </h5>
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
                    <div className="col-ad-right">
                        {verticalAd?.length! > 1 && <AdvertisementCarousel advertisementV={verticalAd} numberInitial={1} />}
                        {verticalAd?.length! > 3 && <AdvertisementCarousel advertisementV={verticalAd} numberInitial={3} />}
                    </div>
                </Col>

            </Row >

            {/* articulos relacionados */}
            <div className="container" >
                <SectionHome
                    sectionTitle="Artículos relacionados"
                    articles={articlesFiltered}
                    sectionTitleURL={section.sectionTitleURL}
                    currentPage={articleBySection.meta.currentPage}
                />
            </div >
        </>
    )
}