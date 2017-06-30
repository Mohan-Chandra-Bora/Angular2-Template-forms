import{Injectable} from '@angular/core';
import{Employee} from '../models/employee.model'
import{Http, Response, RequestOptions, Headers} from '@angular/http';
import 'rxjs/Rx';
import {Observable } from 'rxjs'

export class Languages {
  constructor(public name: string) { }
}

@Injectable()
export class FormPoster{

    constructor(private http : Http){
    }

    private extractData(res:Response){
        let body = res.json().data;
        return  body.fields||{ }; 
    }

    private extractLanguages(res:Response){
        let body = <Languages[]>res.json().data.languages;
        console.log("body data: ", body);
        return body||{ };
        //return body.data||{ };
    }

    private handleError(error:any){
        console.log('post error:', error);
         return Observable.throw(error.statusText);
    }

    getLanguages():Observable<any>{
        return this.http.get('http://localhost:3100/getlanguages')
                        .delay(5000)
                        .map(this.extractLanguages)
                        .catch(this.handleError);
    }

    postEmployeeForm(employee:Employee):Observable<any>{
        let body = JSON.stringify(employee);
        let headers = new Headers({'Content-Type':'application/json'});
        let options = new RequestOptions({headers : headers});

        return this.http.post('http://localhost:3100/postemployee',body,options)
                        .map(this.extractData)
                        .catch(this.handleError);
    }
}