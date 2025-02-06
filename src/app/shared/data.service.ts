import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class DataService{
    getDetails(){
        const myPromise = new Promise((resolve,reject) =>{
            setTimeout(()=>{
                resolve('Data');
            },1500)
        })
        return myPromise;
    }
}