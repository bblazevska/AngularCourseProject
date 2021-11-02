

export class User{

   constructor(
      public email: string,
      public password: string,
      private _token: string,
      private _tokenExparationDate: Date
   ) { }

   get token() {
      if (!this._tokenExparationDate || new Date() > this._tokenExparationDate) {
         return null;
      }
      return this._token;
   }
}