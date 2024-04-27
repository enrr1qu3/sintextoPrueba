import { ArticlesBySection } from "@/paginas";
import { getSearch } from "@/services/publicNewsService";

interface Props {
  params: { name: string };
}

const getArticlesBySearch = async (name: string) => {
  try {
    const response = await getSearch({ NameSearch: name, PageSize: 15 });
      return response;
  } catch (error) {
    return []
  }
}

// export const metadata = {
//   title: 'SINTEXTO / Secciones',
//   description: 'Secciones',
// };

export default async function BuscadorPage({ params }: Props) {

  const articulos = await getArticlesBySearch(params.name);
  const informacion = {
    name: `Búsqueda`,
    assignedColor: "#1f1f42",
    articles: articulos,
  }
  return (
    <>
      <ArticlesBySection data={informacion} typo="busqueda" searchParam={params.name} />
    </>
  )
}

