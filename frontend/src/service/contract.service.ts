// import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';


export const ContractService ={
  
  account:{},
   accountObserve: Observable<{
    address: string,
    chainId: string,
    network: string,
    key: string
  }>,

  constructor() { 
    this.account = new BehaviorSubject({
      address: '',
      chainId: '',
      network: '',
      key: ''
    });
    this.accountObserve = this.account.asObservable();
  },
  setAccount(data: {
    address: string,
    chainId: string,
    network: string,
    key: string
  }) {
    this.account=(data);
  }
}
