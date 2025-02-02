import { Metadata } from "next";
import { getAdvertisementShort, getArticleByTitle, getArticlesFilterBySection, getAuthorById, getNewsSectionById } from "@/services";

import { notFound } from "next/navigation";
import { Article } from "@/paginas";

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const response = await getArticleByTitle(params.id);

  return {
    title: (response != null) ? response?.title : "SINTEXTO NOTICIAS",
    description: (response != null) ? response?.subtitle : "ARTICULO DE SINTEXTO NOTICIAS",
    openGraph: {
      title: (response != null) ? response?.title : "SINTEXTO NOTICIAS",
      description: (response != null) ? response?.subtitle : "ARTICULO DE SINTEXTO NOTICIAS",
      images: [response?.articleBannerImageURL],
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
const getArticleByIdSection = async (id: string) => {
  try {
    const paramsFilter = {
      SectionName: id,
      PageSize: 6,
      PageNumber: 1
    };
    const response = await getArticlesFilterBySection(paramsFilter);
    return response;
  } catch (error) {
    return []
  }
}
const ArticleAdvertisment = async (id: number, posicion: string) => {

  const response = await getAdvertisementShort(false, posicion, id);
  return response.data;
}

export default async function ArticlePage({ params }: Readonly<Props>) {
  const data = await getArticlesByName(params.id);
  const section = await getSection(data?.newsSectionId);
  const articleBySeccionId = await getArticleByIdSection(section.sectionTitleURL);
  const advertisementVertical = await ArticleAdvertisment(data.newsSectionId, 'Vertical');
  const advertisementHorizontal = await ArticleAdvertisment(data.newsSectionId, 'Horizontal');

  let autorInfo = undefined;
  if (data.authors.length > 0) {
    autorInfo = await getAutorByID(data?.authors[0].authorId);
  }
  return (
    <div style={{width:"100vw", height:"100vh"}}>
      <Article
        article={data}
        section={section}
        autorInfo={autorInfo}
        articleBySection={articleBySeccionId}
        verticalAd={advertisementVertical}
        horizontalAD={advertisementHorizontal}
      />
    </div>
  )
}
