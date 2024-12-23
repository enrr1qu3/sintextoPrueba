'use client'
import { useEffect, useState } from "react";
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
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        // Marcamos que estamos en el cliente después de montar el componente
        setIsClient(true);
    }, [articleVI]);

    return (
        <div>
            {isClient && (
                // articleVI.isVideoArticle && articleVI.contentVideoURL ?
                articleVI.isVideoArticle && articleVI.contentVideoURL != '' && articleVI.contentVideoURL != null
                    ?
                    <div className="container-video">
                        <ReactPlayer
                        suppressHydrationWarning
                            url={articleVI.contentVideoURL}
                            controls
                            playing
                            muted
                            width="100%"
                            height="100%"
                        />
                    </div>
                    :
                    <Image suppressHydrationWarning
                        key={articleVI.id}
                        src={articleVI.articleBannerImageURL}
                        alt={articleVI.title}
                        width={1080}
                        height={800}
                        style={{ width: "100%", height: "auto" }}
                    />
            )
            }
        </div>
    )
}