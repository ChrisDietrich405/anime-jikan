export interface IData {
  mal_id: number;
  url: string;
  images: string;
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
