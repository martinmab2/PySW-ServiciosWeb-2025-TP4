export interface Source {
    id: string;
    name: string;
}

export interface MainMedia {
    type: string;
    article: {
        thumbnail: {
            href: string;
        };
    };
}

export interface Noticia {
    id: string;
    title: string;
    description: string;
    mainMedia: MainMedia;
    categoryLabel: string;
    publishedAt: string;
    imageUrl?: string;
}
