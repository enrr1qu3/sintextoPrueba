import { ArticlesBySection } from "@/paginas";
import { getNewsArticlesByTag } from "@/services/publicNewsService";

interface Props {
  params: { name: string };
}

const getArticlesByTag = async (name: string) => {
  try {
    const response = await getNewsArticlesByTag({ NameTag: name, PageSize: 15 });
      return response;
  } catch (error) {
    return []
  }
}

export const metadata = {
  title: 'SINTEXTO / Secciones',
  description: 'Secciones',
};

export default async function TagPage({ params }: Props) {

  const articulos = await getArticlesByTag(params.name);
  const informacion = {
    name: `#${params.name}`,
    assignedColor: "#1f1f42",
    articles: articulos,
  }
  return (
    <>
      <ArticlesBySection data={informacion} typo="tag" />
    </>
  )
}
