'use client'
import Image from "next/image";
import ReactPlayer from "react-player";
interface MediaArticle {
    id?: number
    title: string;
    isVideoArticle?: boolean;
    contentVideoURL?: string | any;
    articleBannerImageURL: string;
}

export const ContenVideoImg = ({ articleVI }: { articleVI: MediaArticle }) => {
    return (
        <>
            {
                articleVI.isVideoArticle && articleVI.contentVideoURL != '' && articleVI.contentVideoURL != null
                ?
                <div className="container-video">
                    <ReactPlayer
                        url={articleVI.contentVideoURL}
                        controls
                        playing
                        muted
                        width="100%"
                        height="100%"
                    />
                </div>
                :
                <Image
                    key={articleVI.id}
                    src={articleVI.articleBannerImageURL}
                    alt={articleVI.title}
                    width={1080}
                    height={800}
                    style={{ width: "100%", height: "auto" }}
                />
            }
        </>
    )
}
