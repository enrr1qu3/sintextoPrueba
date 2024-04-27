'use client'
import { Button, List, Skeleton } from "antd";
import { CardSection } from "./CardSection";
import { NotFound } from "../NotFound";

import { Article } from "@/interfaces/section/ISection";
import { useParams } from "next/navigation";
import { useState } from "react";
import { getArticlesFilterBySection, getNewsArticlesByTag, getSearch } from "@/services/publicNewsService";
const customLocale = {
  emptyText: <NotFound />,
}

export const ListSection = ({ lista, typo }: any) => {
  const { data = [], meta = { currentPage: 0, totalPages: 0 } } = lista;

  const [articulos, setArticulos] = useState(data);
  const [articuloMeta, setArticuloMeta] = useState(meta);
  const [loading, setLoading] = useState(false)

  const params = useParams<{ name: string }>();

  const getArticlesBySection = async () => {
    try {
      const response = await getArticlesFilterBySection({ SectionName: params?.name, PageSize: 15, PageNumber: (articuloMeta.currentPage + 1) });
      setArticulos([...articulos, ...response.data]);
      setArticuloMeta(response.meta)
    } catch (error) {
      return []
    }
  };
  const getArticlesByTag = async () => {
    try {
      const response = await getNewsArticlesByTag({ NameTag: params?.name, PageSize: 15, PageNumber: (articuloMeta.currentPage + 1) });
      setArticulos([...articulos, ...response.data]);
      setArticuloMeta(response.meta)
    } catch (error) {
      return []
    }
  };
  const getArticlesBySearch = async () => {
    try {
      const response = await getSearch({ NameSearch: decodeURI(params!.name), PageSize: 15, PageNumber: (articuloMeta.currentPage + 1) });
      setArticulos([...articulos, ...response.data]);
      setArticuloMeta(response.meta)
    } catch (error) {
      return []
    }
  };

  const Peticion = async () => {
    setLoading(true)
    if (typo === "tag") {
      await getArticlesByTag()
    }
    else if (typo === "busqueda") {
      await getArticlesBySearch()
    }
    else {
      await getArticlesBySection()
    }
    setLoading(false)
  };

  return (
    <List
      grid={{ column: 1 }}
      loadMore={(articuloMeta.currentPage > 0 && articuloMeta.currentPage < articuloMeta.totalPages)
        ? <div className="contenedorVerMas">
          <Button className="buttonVerMas"
            onClick={() => Peticion()}
            loading={loading}
          >VER MÁS
          </Button>
        </div>
        : < div className="buttonVerMas" />
      }
      bordered={false}
      dataSource={articulos}
      renderItem={(item: Article) => (
        <List.Item style={{ margin: 0 }} >
          <Skeleton loading={loading} active avatar >
            <CardSection article={item} />
          </Skeleton>
        </List.Item>
      )}
      locale={customLocale}
    />
  )
}


