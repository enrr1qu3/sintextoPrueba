import type { Metadata } from 'next';
import './globals.css';

import { Layout, ConfigProvider, theme } from 'antd';
import { Content } from 'antd/es/layout/layout';
import { MainFooter, MainHeader } from '@/components';

import { AntdRegistry } from '@ant-design/nextjs-registry';
import themeConfig from '../theme/themeConfig';

export const metadata: Metadata = {
  title: {
    template:'%s | SINTEXTO',
    default:"Inicio | SINTEXTO"
  },
  description: "Explorar la verdad detrás de las noticias con análisis imparcial y cobertura exhaustiva. Nuestro noticiero es el pilar para una sociedad informada, que presenta las noticias de México y del mundo con un enfoque innovador y sin precedentes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <ConfigProvider theme={ themeConfig }>
          <AntdRegistry>
            <Layout className="container-layout">
              <MainHeader />
                <Content className="content-layout">
                  { children }
                </Content>
              <MainFooter />
            </Layout>
          </AntdRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}