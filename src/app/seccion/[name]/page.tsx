import { ArticlesBySection } from "@/paginas";
import { getArticlesFilterBySection, getSectionByName } from "@/services/publicNewsService";

interface Props {
  params: { name: string };
}

const getArticlesBySection = async (name: string) => {
  try {
    const response = await getArticlesFilterBySection({ SectionName: name, PageSize: 15 });
      return response;
  } catch (error) {
    return []
  }
}

const getSectionData = async (name: string) => {
  try {
    const response = await getSectionByName(name);
    return response.data;
  } catch (error) {
    return null
  }
}

export const metadata = {
  title: 'Secciones',
  description: 'Secciones',
};

export default async function SectionPage({ params }: Props) {
  const seccion = await getSectionData(params.name);
  const articulos = await getArticlesBySection(params.name);
  const informacion = {
    name: (seccion != null) ? seccion.name : params.name,
    assignedColor: (seccion != null) ? seccion.assignedColor : "#1f1f42",
    articles: articulos,
  }
  return (
    <>
      <ArticlesBySection data={informacion} typo="section" />
    </>
  )
}
