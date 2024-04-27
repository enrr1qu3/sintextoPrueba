export interface ILiveStream {
    id: number;
    mainImagePath: string;
    mainImagePathUrl: string;
    hoverImagePath: string;
    hoverImagePathUrl: string;
    name: string;
    hostName: string;
    schedule: string;
    description: string;
    youtubeUrl: string;
    socialMediaUrl: string;
    isActive: boolean;
    galleriesPrograms: IGalleryImageProgram[];
    socialMediaPrograms: ISocialMediaProgram[];
    videosYoutube: IVideosProgram[];
}

export interface IGalleryImageProgram {
    filePath: string;
    filePathUrl: string;
    liveStreamScheduleId: number;
    id: number;
    createdDate: string;
    updatedDate: string;
    isDeleted: boolean;
}

export interface ISocialMediaProgram {
    socialMediaUrl: string;
    networkType: string;
    liveStreamScheduleId: number;
    id: number;
    createdDate: string;
    updatedDate: string;
    isDeleted: boolean;
}

export interface IVideosProgram {
    urlYoutube: string;
    liveStreamScheduleId: number;
    id: number;
    createdDate: string;
    updatedDate: string;
    isDeleted: boolean;
}