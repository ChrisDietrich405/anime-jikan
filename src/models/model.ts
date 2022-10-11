interface IImages {
  jpg: {
    image_url: string;
  };
  webp: {
    image_url: string;
    small_image_url: string;
  };
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
  pagination: IPagination;
  meta: {};
  links: {};
}

export interface IPagination {
  current_page?: number;
  has_next_page?: boolean;
  items?: IPaginationItems;
  last_visible_page?: any;
}

export interface IPaginationItems {
  count: number;
  per_page: number;
  total: number;
}
