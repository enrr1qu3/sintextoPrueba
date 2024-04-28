import { MainArticle } from "@/components";
import { getFrontPageLayoutPublished } from "@/services";
import { IFrontPageLayout } from "@/interfaces";


// Obtiene el ForontPageLayout actualmente publicado
const getFrontPageLayout = async () => {
    const response = await getFrontPageLayoutPublished();    
    return response.data;
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
