import { AdvertisementHorizontal, Carousel, LatestArticles, MainArticle, RowSocialNetwork, SectionHome } from "@/components";
import { getAdvertisementShort, getFrontPageLayoutPublished, getNewsSection, getSocialMediaArticles, getUltimateFiveNewsArticleApproved } from "@/services";
import { IAdvertisement, IFrontPageLayout, INewsArticle, INewsSection, ISocialMediaArticle } from "@/interfaces";
import styles from './page.module.scss';

// // Obtiene el ForontPageLayout actualmente publicado
// const getFrontPageLayout = async () => {
//     const response = await getFrontPageLayoutPublished();    
//     return response.data;
// }

// // Obtiene las últimas noticias aprobadas
// const getLatestNews = async () => {
//     const response = await getUltimateFiveNewsArticleApproved();
//     return response.data;
// }

// // Obtiene los artículos por cada sección que haya en el FrontPageLayout
// const getSectionsHome = async (idSections: any) => {
//     const response = await getNewsSection(idSections);
//     return response.data;
// }

// // Obtiene los artículos de las redes sociales
// const getSocialNetworkArticles = async () => {
//     const response = await getSocialMediaArticles();
//     return response.data;
// }

// // Obtiene los anuncios
// const getAdvertisements = async () => {
//     const response = await getAdvertisementShort(undefined, 'Carousel');
//     return response.data;
// }

export async function getServerSideProps() {
    // Obtiene el FrontPageLayout actualmente publicado
    const layoutResponse = await getFrontPageLayoutPublished();
    const layout = layoutResponse.data;

    // Obtiene las últimas noticias aprobadas
    const lastArticlesResponse = await getUltimateFiveNewsArticleApproved();
    const lastArticles = lastArticlesResponse.data;

    // Obtiene los artículos por cada sección que haya en el FrontPageLayout
    const sectionsResponse = await getNewsSection(layout.newsSections);
    const sections = sectionsResponse.data;

    // Obtiene los artículos de las redes sociales
    const socialMediaArticlesResponse = await getSocialMediaArticles();
    const socialMediaArticles = socialMediaArticlesResponse.data;

    // Obtiene los anuncios
    const adsCarouselResponse = await getAdvertisementShort(undefined, 'Carousel');
    const adsCarousel = adsCarouselResponse.data;

    return {
        props: { // Los datos se pasan al componente como props
            layout,
            socialMediaArticles,
            lastArticles,
            sections,
            adsCarousel
        }
    };
}

interface HomeProps {
    layout: IFrontPageLayout;
    socialMediaArticles: ISocialMediaArticle[];
    lastArticles: INewsArticle[];
    sections: INewsSection[];
    adsCarousel: IAdvertisement[];
}

export default async function HomePage(props: HomeProps) {
    // const layout: IFrontPageLayout = await getFrontPageLayout(); 
    // const socialMediaArticles: ISocialMediaArticle[] = await getSocialNetworkArticles();
    // const lastArticles: INewsArticle[] = await getLatestNews();
    // const sections: INewsSection[] = await getSectionsHome(layout.newsSections);
    // const adsCarousel: IAdvertisement[] = await getAdvertisements();

    const { layout, socialMediaArticles, lastArticles, sections, adsCarousel } = props;

    return (
        <>
            <MainArticle
                idArticle={ layout?.id }
                mainArticleBannerUrl={ layout?.mainArticleBannerFilePathUrl }
                mainArticleURLTitle={ layout?.mainArticleURLTitle } 
            />
            
            <Carousel articles={ layout?.naTopBannersArticle } advertisements={ adsCarousel } />
            
            <div className="container">
                {
                    layout?.advertisementMainAdSpace != null && (
                        <div className={ styles.firstAdd }>
                            <AdvertisementHorizontal
                                imageUrl={ layout?.advertisementMainAdSpace.banneUrl! ?? layout?.advertisementMainAdSpace.imagesOfAdvertisements![0].filePathUrl! }
                                urlToRedirect={ layout?.advertisementMainAdSpace.destinationUrl! }
                            />
                        </div>
                    )
                }

                {
                    socialMediaArticles.length > 0
                    ? <RowSocialNetwork sectionTitle="Redes sociales" articles={ socialMediaArticles } />
                    : <></>
                }

                <LatestArticles latestArticles={ lastArticles } />

                {
                    sections?.map((section) => (
                        <SectionHome
                            key={ section.sectionId }
                            sectionTitle={ section.name }
                            articles={ section.articles }
                        />
                    ))
                }

                {
                    layout?.twoAdvertisement != null && (
                        <div className={ styles.secondAdd }>
                            <AdvertisementHorizontal
                                imageUrl={ layout?.twoAdvertisement.banneUrl! ?? layout?.twoAdvertisement.imagesOfAdvertisements![0].filePathUrl! }
                                urlToRedirect={ layout?.twoAdvertisement.destinationUrl! }
                            />
                        </div>
                    )
                }
            </div>
        </>
    );
}
