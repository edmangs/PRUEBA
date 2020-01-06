export class MantenimientoCriteria {
  public page: number = 0;
  public size: number = 10;
  public sortBy: string = 'lastName';

  public sortOrder: string = 'asc';

  constructor() {}

  public getUrlParameters(): string {
    return ('');
  }
}
