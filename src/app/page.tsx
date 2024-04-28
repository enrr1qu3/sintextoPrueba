import { MainArticle } from "@/components";
// import { getFrontPageLayoutPublished } from "@/services";
import { IFrontPageLayout } from "@/interfaces";


// Obtiene el ForontPageLayout actualmente publicado
// const getFrontPageLayout = async () => {
//     const response = await getFrontPageLayoutPublished();    
//     return response.data;
// }
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
      
      }
}

export default async function HomePage() {
    const layout: IFrontPageLayout = await getFrontPageLayout(); 


    return (
            <MainArticle
                idArticle={ layout?.id }
                mainArticleBannerUrl={ layout?.mainArticleBannerFilePathUrl }
                mainArticleURLTitle={ layout?.mainArticleURLTitle } 
            />
    );
}
