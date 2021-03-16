import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FetcDataService {
  currData;
  rates;
  currArray;
  constructor(
    private http: HttpClient
  ) {
  }
  fetchCurrency() {
    let currencyUrl = "https://api.exchangeratesapi.io/latest?base=USD";
    console.log("Clicked");
    console.log(currencyUrl);
    return new Promise((resolve, reject) => {
      this.http.get(currencyUrl)
      .subscribe(
        (result) => {
          this.currData = result;
          this.rates = this.currData.rates;
          console.log(this.rates.CAD + "This is abbas");
          this.currArray = Object.entries(this.rates);
          console.log(this.currArray + "Array conversion")
          resolve(this.currData)
        }
      )
    })

  }
}
