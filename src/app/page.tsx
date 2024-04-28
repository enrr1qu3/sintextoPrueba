import { AdvertisementHorizontal, Carousel, LatestArticles, MainArticle, RowSocialNetwork, SectionHome } from "@/components";
import { getAdvertisementShort, getNewsSection, getSocialMediaArticles, getUltimateFiveNewsArticleApproved } from "@/services";
import { IAdvertisement, IFrontPageLayout, INewsArticle, INewsSection, ISocialMediaArticle } from "@/interfaces";
import styles from './page.module.scss';
import { notFound } from "next/navigation";

// Obtiene el ForontPageLayout actualmente publicado
const getFrontPageLayout = async () => {
    try {
        const res = await fetch(`https://sintexto-api-dev.azurewebsites.net/api/FrontPageLayout/UltimateFrontPageLayoutPublished`,{
          cache: 'no-store',
          next: {
            revalidate: 2
          }
        }).then( resp => resp.json() );
      
        return res.data;
        
      } catch (error) {
        notFound();
      }
}

// Obtiene las últimas noticias aprobadas
const getLatestNews = async () => {
    try {
        const res = await fetch(`https://sintexto-api-dev.azurewebsites.net/api/NewsArticle/UltimateFiveNewsArticleApproved`,{
          cache: 'no-store',
          next: {
            revalidate: 2
          }
        }).then( resp => resp.json() );
      
        return res.data;
        
      } catch (error) {
      return []
      }
}

// Obtiene los artículos por cada sección que haya en el FrontPageLayout
const getSectionsHome = async (idSections: any) => {
    try {
        const queryParams = '?' + idSections.map((item: any) => {
            return `Sections=${item.id}`
        }).join('&');
        const res = await fetch(`https://sintexto-api-dev.azurewebsites.net/api//PublicNews/GetSectionNews${queryParams}&OnlyFrontPageNews=true`,{
          cache: 'no-store',
          next: {
            revalidate: 2
          }
        }).then( resp => resp.json() );
      
        return res.data;
        
      } catch (error) {
      
      }
}

// Obtiene los artículos de las redes sociales
const getSocialNetworkArticles = async () => {
    try {
        const res = await fetch(`https://sintexto-api-dev.azurewebsites.net/api/PublicNews/GetSocialMediaArticles`,{
          cache: 'no-store',
          next: {
            revalidate: 2
          }
        }).then( resp => resp.json() );
      
        return res.data;
        
      } catch (error) {
      return []
      }
}

// Obtiene los anuncios
const getAdvertisements = async () => {
    try {
        const res = await fetch(`https://sintexto-api-dev.azurewebsites.net/api/PublicNews/GetAdvertisementShort?OnlyValidAds=true&position=Carousel`,{
          cache: 'no-store',
          next: {
            revalidate: 2
          }
        }).then( resp => resp.json() );
      
        return res.data;
        
      } catch (error) {
      return []
      }
    
}

export default async function HomePage() {
    const layout: IFrontPageLayout = await getFrontPageLayout(); 
    const socialMediaArticles: ISocialMediaArticle[] = await getSocialNetworkArticles();
    const lastArticles: INewsArticle[] = await getLatestNews();
    const sections: INewsSection[] = await getSectionsHome(layout.newsSections);
    const adsCarousel: IAdvertisement[] = await getAdvertisements();

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
