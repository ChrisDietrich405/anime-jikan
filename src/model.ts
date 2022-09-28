interface IImages {
  jpg: {
    image_url: string;
  };
  webp: {
    image_url: string;
    small_image_url: string; 
  }
}


export interface IData {
  mal_id: number;
  url: string;
  images: IImages;
  name: string;
  name_kanji: string;
  nicknames: string;
  favorites: string;
  about: string;
}

export interface IAnimeData {
  data: IData[];
  pagination: {};
  meta: {};
  links: {};
}
