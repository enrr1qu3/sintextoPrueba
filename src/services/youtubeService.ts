export const getYoutubeThumbnail = (url: string) => {
    const regExp = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/|youtube\.com\/live\/)([a-zA-Z0-9_-]+)(\?|$)/g;
    const matches = regExp.exec(url);
    const videoId =  matches ? matches[1] : null;

    if (videoId) {
        return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }
    else {
        return '';
    }
}