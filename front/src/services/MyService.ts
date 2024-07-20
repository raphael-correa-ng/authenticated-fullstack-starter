export interface MyModel {
    id: number;
    text: string;
}

export default class MyService {

  private readonly url;

  constructor(url: string) {
    this.url = url;
  }

  public async getMyModels(): Promise<MyModel[]> {
    const requestOptions = {
      method: 'GET',
      credentials: 'include' as RequestCredentials
    };

    return await fetch(this.url + '/my-models', requestOptions)
      .then(response => response.json());
  }
}