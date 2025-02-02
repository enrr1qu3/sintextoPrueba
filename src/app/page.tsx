import { AdvertisementHorizontal, Carousel, LatestArticles, MainArticle, RowSocialNetwork, SectionHome } from "@/components";
import { IAdvertisement, IAdvertisementsFrontPage, IArticlesBySectionHome, IFrontPageLayout, INewsArticle, /*INewsSection,*/ ISocialMediaArticle } from "@/interfaces";
import styles from './page.module.scss';
import { notFound } from "next/navigation";
import { baseUrl } from '../services/global';
// Obtiene el ForontPageLayout actualmente publicado
const getFrontPageLayout = async () => {
    try {
        // const res = await fetch(`${baseUrl}/FrontPageLayout/UltimateFrontPageLayoutPublished`,{
        const res = await fetch(`${baseUrl}/FrontPageLayout/UltimateFrontPageLayoutPublished`,{
          cache: 'no-store',

        }).then( resp => resp.json() );
      
        return res.data;
        
      } catch (error) {
        notFound();
      }
}

// Obtiene las últimas noticias aprobadas
const getLatestNews = async () => {
    try {
        // const res = await fetch(`${baseUrl}/NewsArticle/UltimateFiveNewsArticleApproved`,{
        const res = await fetch(`${baseUrl}/NewsArticle/UltimateFiveNewsArticleApproved`,{
          cache: 'no-store',

        }).then( resp => resp.json() );
      
        return res.data;
        
      } catch (error) {
      return []
      }
}

// Obtiene los artículos por cada sección que haya en el FrontPageLayout
const getSectionsHome = async (idSections: any) => {
    try {
        // const queryParams = '?' + idSections.map((item: any) => {
        //     return `Sections=${item.id}`
        // }).join('&');
        // // const res = await fetch(`${baseUrl}/PublicNews/GetSectionNews${queryParams}&OnlyFrontPageNews=true`,{
        // const res = await fetch(`${baseUrl}/PublicNews/GetSectionNews${queryParams}&OnlyFrontPageNews=true`,{
        //   cache: 'no-store',

        // }).then( resp => resp.json() );
      
        // return res.data;

        const sections: IArticlesBySectionHome[] = await Promise.all(
            idSections.map(async (item: any) => {

                const response = await fetch(`${baseUrl}/PublicNews/GetArticlesFilterBySection?SectionName=${item.sectionTitleURL}&PageSize=6&PageNumber=1`, { 
                    cache: 'no-store' 
                }).then(resp => resp.json());

                return { ...item, articles: response.data!, currentPage: response.meta.currentPage! }
            })
        );

        return sections;
        
    } catch (error) {
        return [];
    }
}

// Obtiene los artículos de las redes sociales
const getSocialNetworkArticles = async () => {
    try {
        // const res = await fetch(`${baseUrl}/PublicNews/GetSocialMediaArticles`,{
        const res = await fetch(`${baseUrl}/PublicNews/GetSocialMediaArticles`,{
          cache: 'no-store',
        }).then( resp => resp.json() );
      
        return res.data;
        
      } catch (error) {
      return []
      }
}

// Obtiene los anuncios
const getAdvertisements = async () => {
    try {
        // const res = await fetch(`${baseUrl}/PublicNews/GetAdvertisementShort?OnlyValidAds=true&position=Carousel`,{
        const res = await fetch(`${baseUrl}/PublicNews/GetAdvertisementShort?OnlyValidAds=true&position=Carousel`,{
          cache: 'no-store',

        }).then( resp => resp.json() );
      
        return res.data;
        
      } catch (error) {
      return []
      }
    
}

// Obtiene los anuncios principales del FrontPage (anuncio principal, anuncio secundario, tercer anuncio)
const getMainAdvertisements = async () => {
    try {
        const response = await fetch(`${baseUrl}/FrontPageLayout/FrontPageLayoutAdversiments`,{
            cache: 'no-store',
        }).then( resp => resp.json() );
      
        return response.data;
    }
    catch (error) {
        return error;
    }
}

export default async function HomePage() {
    const layout: IFrontPageLayout = await getFrontPageLayout(); 
    const socialMediaArticles: ISocialMediaArticle[] = await getSocialNetworkArticles();
    const lastArticles: INewsArticle[] = await getLatestNews();
    // const sections: INewsSection[] = await getSectionsHome(layout.newsSections);
    const sections: IArticlesBySectionHome[] = await getSectionsHome(layout.newsSections);
    const adsCarousel: IAdvertisement[] = await getAdvertisements();
    const advertisementsLayout: IAdvertisementsFrontPage = await getMainAdvertisements();

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
                    advertisementsLayout?.advertisementMainAdSpace != null && (
                        <div className={ styles.firstAdd }>
                            <AdvertisementHorizontal
                                imageUrl={ advertisementsLayout?.advertisementMainAdSpace.banneUrl! ?? advertisementsLayout?.advertisementMainAdSpace.imagesOfAdvertisements![0].filePathUrl! }
                                urlToRedirect={ advertisementsLayout?.advertisementMainAdSpace.destinationUrl! }
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
                            key={ section.id }
                            sectionTitle={ section.name }
                            sectionTitleURL={ section.sectionTitleURL }
                            articles={ section.articles }
                            currentPage={ section.currentPage }
                        />
                    ))
                }

                {
                    advertisementsLayout?.twoAdvertisement != null && (
                        <div className={ styles.secondAdd }>
                            <AdvertisementHorizontal
                                imageUrl={ advertisementsLayout?.twoAdvertisement.banneUrl! ?? advertisementsLayout?.twoAdvertisement?.imagesOfAdvertisements![0]?.filePathUrl! }
                                urlToRedirect={ advertisementsLayout?.twoAdvertisement.destinationUrl! }
                            />
                        </div>
                    )
                }
            </div>
        </>
    );
}
