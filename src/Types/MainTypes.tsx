export type ScreenProps = {
    navigation: object;
    route: object;
};

export type NewsBlockProps = {
    index: number;
    item: object;
    navigation: object,
};

export type NewsItemProps = {
    urlToImage: string,
    title: string;
    description: string;
    url: string;
};
