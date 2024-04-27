import { Metadata } from "next";
import { getAdvertisementShort, getArticleByTitle, getAuthorById, getNewsArticleByIdSection, getNewsSectionById } from "@/services";

import { notFound } from "next/navigation";
import { Article } from "@/paginas";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props ): Promise<Metadata> {
  const response = await getArticleByTitle(params.id);

  return {
    title: (response != null) ? response?.title : "SINTEXTO NOTICIAS",
    description: (response != null) ? response?.subtitle : "ARTICULO DE SINTEXTO NOTICIAS",
    openGraph: {
      title: (response != null) ? response?.title : "SINTEXTO NOTICIAS",
      description: (response != null) ? response?.subtitle : "ARTICULO DE SINTEXTO NOTICIAS",
      images: [ response?.articleBannerImageURL],
      type: "article",  
      // url:`https://sintexto.com/article/${params.id}`
    },
  }
}

const getArticlesByName = async (id: string) => {
  try {
    const response = await getArticleByTitle(id);
    if (response === null) { throw new Error('Error en la petición'); }
    return response;
  } catch (error) {
    notFound();
  }
}
const getSection = async (id: number) => {
  try {
    const response = await getNewsSectionById(id);
    return response;
  } catch (error) {
    return []
  }
}
const getAutorByID = async (id: number) => {
  try {
    const response = await getAuthorById(id);
    return response.data;
  } catch (error) {
    return []
  }
}
const getArticleByIdSection = async (id: number, idArticle: number) => {
  try {
    const response = await getNewsArticleByIdSection(id);
    let data = response.data;
    let articlesFiltered = data.filter((article: any) => article.id != idArticle);
    return articlesFiltered;
  } catch (error) {
    return []
  }
}
const ArticleAdvertisment = async (id: number, posicion:string) => {

    const response = await getAdvertisementShort(false, posicion, id);
    return response.data;
}

export default async function ArticlePage({ params }: Readonly<Props>) {
  const data = await getArticlesByName(params.id);
  const section = await getSection(data?.newsSectionId);
  const articleBySeccionId = await getArticleByIdSection(data?.newsSectionId, data.id);
  const advertisementVertical = await ArticleAdvertisment(data.newsSectionId, 'Vertical');
  const advertisementHorizontal = await ArticleAdvertisment(data.newsSectionId, 'Horizontal');
  
  let autorInfo = undefined;
  if (data.authors.length > 0) {
    autorInfo = await getAutorByID(data?.authors[0].authorId);
  }
  return (
    <Article 
    article={data} 
    section={section} 
    autorInfo={autorInfo} 
    articleBySection={articleBySeccionId} 
    verticalAd={advertisementVertical} 
    horizontalAD={advertisementHorizontal}
    />
  )
}
