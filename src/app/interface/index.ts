export interface IApiMarvelResponse {
  data: IDataResponse;
  status: string;
  code: number;
}

export interface IDataResponse {
  count: number;
  limit: number;
  offset: number;
  total: number;
  results: IResultCharacter[];
}

export interface IResultCharacter {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
}

export interface ICharacterDb extends Omit<IResultCharacter, 'thumbnail'> {
  idDoc?: string;
  imgUrl: string;
}
