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
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  imgUrl?: string;
}
