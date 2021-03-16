import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-barcode',
  templateUrl: './barcode.component.html',
  styleUrls: ['./barcode.component.scss'],
})
export class BarcodeComponent implements OnInit {
scannedData:any;
  constructor(
    private barcodeScanner: BarcodeScanner
  ) { }

  ngOnInit() {}

  scanBarcode(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.scannedData=barcodeData;
     }).catch(err => {
         console.log('Error', err);
     });
     
  }
}
