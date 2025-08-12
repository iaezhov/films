export interface MovieListItem {
    id: string;
    rank: number;
    title: string;
    posterUrl?: string;
}

export interface Movie extends MovieListItem {
    description: string;
    aggregateRating: number;
    review: {
        date: string,
        title: string,
        text: string,
    }
}