import { NextApiResponse } from 'next';
import { getSitemapXML } from '@/services';

interface ISitemapPageProps {
    res: NextApiResponse
}

export const metadata = {
    title: 'Sitemap',
    description: 'Mapa de sitio de SINTEXTO',
};

export default function SiteMap() {
    // Componente vacío ya que toda la lógica está en getServerSideProps
}

export async function getServerSideProps({ res }: ISitemapPageProps) {
    const xmlContent = await getSitemapXML();
  
    // Establece el Content-Type a 'text/xml'
    res.setHeader('Content-Type', 'text/xml');

    // Envía el XML como respuesta
    res.write(xmlContent);
    res.end();
  
    return {
        props: {},
    };
}