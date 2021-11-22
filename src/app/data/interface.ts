export interface Gamee{
    background_image: string;
    name: string;
    released: string;
    metacritic_url: string;
    website: string;
    description: string;
    metacritic: number;
    genres: Array<Genre>;
    parent_platforms: Array<ParentPlatform>;
    publishers: Array<Publishers>;
    ratings: Array<Rating>;
    screenshots: Array<Screenshots>;
    trailers: Array<Trailer>;
}

export interface APIResponse<T>{
    results: Array<T>;
}

interface Genre{
    name: string;
}

interface ParentPlatform{
    platform: {
        name: string;
        slug: string
    }; 
}

interface Publishers {
    name: string;
}

interface Screenshots{
    image: string;
}

interface Rating {
    id: number;
    count: number;
    title: string;
}

interface Trailer{
    // data: {
    //     max: string;
    // };
    data: Data;
}


///////////////////////////////

export interface Video {
    count:    number;
    next:     null;
    previous: null;
    results:  Result[];
}

export interface Result {
    id:      number;
    name:    string;
    preview: string;
    data:    Data;
}

export interface Data {
    "480": string;
    max:   string;
}
