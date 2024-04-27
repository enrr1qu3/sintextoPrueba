'use client'
import { Avatar, Card } from "antd"
import { ButtonOpenModalAuthor } from "./ButtonOpenModalAuthor";
const { Meta } = Card;
import "@/styles/article/_card-autor-article.scss"
import dayjs from "dayjs";
import { IAuthor } from "@/interfaces/article/IAuthor";

export const CardAutorArticle = ({ authors, fecha }: { authors?: any, fecha:string }) => {
  const getAvatarIcon = (author: IAuthor) => {
    if (author === undefined) {
        return 'A';
    } else if (author.profile.profileImageUrl === null) {
        return author.profile.fullName?.toString()[0];
    } else {
        return <img src={ author.profile.profileImageUrl } alt="Avatar Author" />;
    }
};
  return (
    <div>
      <Card className="row-info-author" >
        <Meta
          avatar={
            <Avatar
              style={{ backgroundColor: authors == undefined ? '#F56A00' : '#9D9F9F' }}
              size="large"
              icon={getAvatarIcon(authors!)}
            >
            </Avatar>
          }
          title={
            <p className="info-date-published">Publicado el {dayjs.utc(fecha).local().format('D [de] MMMM [de] YYYY')}</p>
          }
          description={
            <p className="info-author-name">
              Por:&nbsp;
              {
                authors != undefined
                  ? <ButtonOpenModalAuthor author={authors} /* socialMedia={socialMediaAuthor!} */  />
                  : <b>Admin</b>
              }
            </p>
          }
        />
      </Card>
    </div>
  )
}
