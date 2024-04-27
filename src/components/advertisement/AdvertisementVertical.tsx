import Link from 'next/link';
import Image from 'next/image';
import '../../styles/advertisement/_advertisement-vertical.scss';

interface IAdvertisementVerticalProps {
    imageUrl: string;
    urlToRedirect: string;
}

export const AdvertisementVertical = (props: IAdvertisementVerticalProps) => {
    const { imageUrl, urlToRedirect } = props;

    const setImage = () => {
        if (imageUrl.startsWith('https://sintextoproduction.blob.core.windows.net')) {
            return (
                <Image
                    src={ imageUrl }
                    alt="Info Image Vertical"
                    width={ 1920 }
                    height={ 1080 }
                    className="img-add"
                    // style={{width:"100%", height:"100%"}}
                />
            )
        }
        else {
            return <img src={ imageUrl } alt="Info Add Vertical" className="img-add" /* style={{ width:"100%", height:"100%" }} *//>
        }
    }

    return (
        <div className="container-add-vertical">
            {
                urlToRedirect != null
                ? 
                    <Link href={ urlToRedirect } target="_blank">
                        <img src={ imageUrl } alt="Info Vertical" />
                    </Link>
                :
                    setImage()
            }
        </div>
    )
}
