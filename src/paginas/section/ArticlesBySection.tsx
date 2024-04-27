import { Col, Row, } from 'antd';
import { TitleSectionHeader } from "@/components/section/TituloSectionHeader";
import { ListSection } from "@/components/section/ListSection";
import "../../styles/section/_article-by-section.scss"

interface props {
  data: any, search?: boolean, searchParam?: string, typo?: string
}

export const ArticlesBySection = ({ data, searchParam = "?", typo }: props) => {
  const { articles } = data;
  
  return (
    <div style={{ background: "#FFF" }}>
      <TitleSectionHeader color={data?.assignedColor} title={data?.name} />
      <div className="container">
        <Row>
          <Col xs={24} xl={{ span: 20, offset: 2 }}>
            {
              (typo === "busqueda")
                ? <p className="result-search-text"><span>Resultados de: </span> { decodeURI(searchParam) } </p>
                : <></>
            }
            <h4 className="ant-typography section-by-article-title css-dev-only-do-not-override-1e9x2yf">ÚLTIMAS NOTICIAS</h4>

            <ListSection lista={articles} typo={typo} />

          </Col>

        </Row>
      </div>
    </div>
  );
}
