export class UserCriteria {
  public lastName: string = '';
  public firstName: string = '';
  public email: string = '';
  public page: number = 0;
  public size: number = 10;
  public sortBy: string = 'lastName';

  public sortOrder: string = 'asc';

  constructor() {}

  public getUrlParameters(): string {
    return (
      'lastName=' + this.lastName +
      '&firstName=' + this.firstName +
      '&email=' + this.email +
      '&page=' + this.page +
      '&size=' + this.size +
      '&sortBy=' + this.sortBy +
      '&sortOrder=' + this.sortOrder
    );
  }
}
