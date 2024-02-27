export type IDailyNewsProps = {
    id: number;
    headline: string;
    abstract: string;
    body: string;
    author: string;
    section: string;
    date: string;
    article_uri: string;
    pfd_uri: string;
}

export interface IDailyNews {
    news: IDailyNewsProps[];
    getDailyNews: () => void;
}