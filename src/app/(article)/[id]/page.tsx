import { Metadata } from "next";
import { /*getAdvertisementShort, getArticlesFilterBySection, getAuthorById, getNewsArticleByIdSection, getNewsSectionById*/ getArticleByTitle, } from "@/services";

// import { notFound } from "next/navigation";
// import { Article } from "@/paginas";

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

// const getArticlesByName = async (id: string) => {
//   try {
//     const response = await getArticleByTitle(id);
//     if (response === null) { throw new Error('Error en la petición'); }
//     return response;
//   } catch (error) {
//     notFound();
//   }
// }
// const getSection = async (id: number) => {
//   try {
//     const response = await getNewsSectionById(id);
//     return response;
//   } catch (error) {
//     return []
//   }
// }
// const getAutorByID = async (id: number) => {
//   try {
//     const response = await getAuthorById(id);
//     return response.data;
//   } catch (error) {
//     return []
//   }
// }
// const getArticleByIdSection = async (id: number) => {
//   try {
//     const paramsFilter = {
//       PageSize: 6,
//       PageNumber: 1
//     };

//     // const response = await getNewsArticleByIdSection(id, paramsFilter);
//     const response = await getArticlesFilterBySection(paramsFilter);
//     return response;
//   } catch (error) {
//     return []
//   }
// }
// const ArticleAdvertisment = async (id: number, posicion:string) => {

//     const response = await getAdvertisementShort(false, posicion, id);
//     return response.data;
// }

export default async function ArticlePage({ params }: Readonly<Props>) {
  // const data = await getArticlesByName(params.id);
  // const section = await getSection(data?.newsSectionId);
  // const articleBySeccionId = await getArticleByIdSection(section.sectionTitleURL);
  // const advertisementVertical = await ArticleAdvertisment(data.newsSectionId, 'Vertical');
  // const advertisementHorizontal = await ArticleAdvertisment(data.newsSectionId, 'Horizontal');

  // let autorInfo = undefined;
  // if (data.authors.length > 0) {
  //   autorInfo = await getAutorByID(data?.authors[0].authorId);
  // }
  return (
    <>
      Al contrario del pensamiento popular, el texto de Lorem Ipsum no es
      simplemente texto aleatorio. Tiene sus raices en una pieza cl´
      sica de la literatura del Latin, que data del año 45 antes de Cristo,
      haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock,
      un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró
      una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaj

      e de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente
      indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum
      et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cris
      to. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera
      linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32


      El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para
      aquellos interesados. Las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por Cic
      ero son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de l
      a traducción realizada en 1914 por H. Rackham.
      Al contrario del pensamiento popular, el texto de Lorem Ipsum no es
      simplemente texto aleatorio. Tiene sus raices en una pieza cl´
      sica de la literatura del Latin, que data del año 45 antes de Cristo,
      haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock,
      un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró
      una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaj

      e de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente
      indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum
      et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cris
      to. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera
      linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32


      El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para
      aquellos interesados. Las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por Cic
      ero son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de l
      a traducción realizada en 1914 por H. Rackham.
      Al contrario del pensamiento popular, el texto de Lorem Ipsum no es
      simplemente texto aleatorio. Tiene sus raices en una pieza cl´
      sica de la literatura del Latin, que data del año 45 antes de Cristo,
      haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock,
      un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró
      una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaj

      e de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente
      indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum
      et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cris
      to. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera
      linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32


      El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para
      aquellos interesados. Las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por Cic
      ero son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de l
      a traducción realizada en 1914 por H. Rackham.
      Al contrario del pensamiento popular, el texto de Lorem Ipsum no es
      simplemente texto aleatorio. Tiene sus raices en una pieza cl´
      sica de la literatura del Latin, que data del año 45 antes de Cristo,
      haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock,
      un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró
      una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaj

      e de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente
      indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum
      et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cris
      to. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera
      linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32


      El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para
      aquellos interesados. Las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por Cic
      ero son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de l
      a traducción realizada en 1914 por H. Rackham.
      Al contrario del pensamiento popular, el texto de Lorem Ipsum no es
      simplemente texto aleatorio. Tiene sus raices en una pieza cl´
      sica de la literatura del Latin, que data del año 45 antes de Cristo,
      haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock,
      un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró
      una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaj

      e de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente
      indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum
      et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cris
      to. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera
      linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32


      El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para
      aquellos interesados. Las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por Cic
      ero son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de l
      a traducción realizada en 1914 por H. Rackham.
      Al contrario del pensamiento popular, el texto de Lorem Ipsum no es
      simplemente texto aleatorio. Tiene sus raices en una pieza cl´
      sica de la literatura del Latin, que data del año 45 antes de Cristo,
      haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock,
      un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró
      una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaj

      e de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente
      indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum
      et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cris
      to. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera
      linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32


      El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para
      aquellos interesados. Las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por Cic
      ero son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de l
      a traducción realizada en 1914 por H. Rackham.
      Al contrario del pensamiento popular, el texto de Lorem Ipsum no es
      simplemente texto aleatorio. Tiene sus raices en una pieza cl´
      sica de la literatura del Latin, que data del año 45 antes de Cristo,
      haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock,
      un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró
      una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaj

      e de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente
      indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum
      et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cris
      to. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera
      linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32


      El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para
      aquellos interesados. Las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por Cic
      ero son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de l
      a traducción realizada en 1914 por H. Rackham.
      Al contrario del pensamiento popular, el texto de Lorem Ipsum no es
      simplemente texto aleatorio. Tiene sus raices en una pieza cl´
      sica de la literatura del Latin, que data del año 45 antes de Cristo,
      haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock,
      un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró
      una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaj

      e de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente
      indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum
      et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cris
      to. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera
      linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32


      El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para
      aquellos interesados. Las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por Cic
      ero son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de l
      a traducción realizada en 1914 por H. Rackham.
      Al contrario del pensamiento popular, el texto de Lorem Ipsum no es
      simplemente texto aleatorio. Tiene sus raices en una pieza cl´
      sica de la literatura del Latin, que data del año 45 antes de Cristo,
      haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock,
      un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró
      una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaj

      e de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente
      indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum
      et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cris
      to. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera
      linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32


      El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para
      aquellos interesados. Las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por Cic
      ero son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de l
      a traducción realizada en 1914 por H. Rackham.
      Al contrario del pensamiento popular, el texto de Lorem Ipsum no es
      simplemente texto aleatorio. Tiene sus raices en una pieza cl´
      sica de la literatura del Latin, que data del año 45 antes de Cristo,
      haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock,
      un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró
      una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaj

      e de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente
      indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum
      et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cris
      to. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera
      linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32


      El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para
      aquellos interesados. Las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por Cic
      ero son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de l
      a traducción realizada en 1914 por H. Rackham.
      Al contrario del pensamiento popular, el texto de Lorem Ipsum no es
      simplemente texto aleatorio. Tiene sus raices en una pieza cl´
      sica de la literatura del Latin, que data del año 45 antes de Cristo,
      haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock,
      un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró
      una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaj

      e de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente
      indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum
      et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cris
      to. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera
      linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32


      El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para
      aquellos interesados. Las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por Cic
      ero son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de l
      a traducción realizada en 1914 por H. Rackham.
    </>
    // <Article 
    // article={data} 
    // section={section} 
    // autorInfo={autorInfo} 
    // articleBySection={articleBySeccionId} 
    // verticalAd={advertisementVertical} 
    // horizontalAD={advertisementHorizontal}
    // />
  )
}
