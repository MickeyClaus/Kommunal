import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })

export class BackendApiSevice {

    // apiURL = environment.mainApiUrl;

    // apiURL = 'https://localhost:7131/api/';
    apiURL = 'http://api-communal.somee.com/api/';


    constructor(private http: HttpClient) { }

    // AUTH

    public getToken(): any {
        return localStorage.getItem('token');
    }

    login(params: any): Observable<any> {
        return this.http.post(`${this.apiURL}Auth/login`, params);
    }

    loginGetAll(): Observable<any> {
        return this.http.get(`${this.apiURL}Auth/GetAll`);
    }

    loginGetById(id: number): Observable<any> {
        return this.http.get(`${this.apiURL}Auth/GetById?id=${id}`);
    }

    loginUpdate(params: any): Observable<any> {
        return this.http.post(`${this.apiURL}Auth/Update`, params);
    }

    loginDelete(params: any): Observable<any> {
        return this.http.post(`${this.apiURL}Auth/Delete`, params);
    }

    // CONTRACT

    contractGetAll(): Observable<any> {
        return this.http.get(`${this.apiURL}Contract/GetAll`);
    }

    contractGetById(id: number): Observable<any> {
        return this.http.get(`${this.apiURL}Contract/GetById?id=${id}`);
    }

    contractUpdate(params: any): Observable<any> {
        return this.http.put(`${this.apiURL}Contract/Update`, params);
    }

    contractAdd(params: any): Observable<any> {
        return this.http.post(`${this.apiURL}Contract/Create`, params);
    }

    contractDelete(id: number): Observable<any> {
        return this.http.delete(`${this.apiURL}Contract/Delete?id=${id}`);
    }

    // CONTRACT CLAUSE

    contractClauseGetAll(): Observable<any> {
        return this.http.get(`${this.apiURL}ContractClause/GetAll`);
    }

    contractClauseGetById(id: number): Observable<any> {
        return this.http.get(`${this.apiURL}ContractClause/GetById`);
    }

    contractClauseUpdate(params: any): Observable<any> {
        return this.http.put(`${this.apiURL}ContractClause/Update`, params);
    }

    contractClauseAdd(params: any): Observable<any> {
        return this.http.post(`${this.apiURL}ContractClause/Add`, params);
    }

    contractClauseDelete(params: any): Observable<any> {
        return this.http.delete(`${this.apiURL}ContractClause/Delete`, params);
    }

    // PAYMENT

    paymentGetAll(): Observable<any> {
        return this.http.get(`${this.apiURL}Payment/GetAll`);
    }

    paymentGetById(id: number): Observable<any> {
        return this.http.get(`${this.apiURL}Payment/GetById?id=${id}`);
    }

    paymentUpdate(params: any): Observable<any> {
        return this.http.put(`${this.apiURL}Payment/Update`, params);
    }

    paymentAdd(params: any): Observable<any> {
        return this.http.post(`${this.apiURL}Payment/Create`, params);
    }

    paymentDelete(id: number): Observable<any> {
        return this.http.delete(`${this.apiURL}Payment/Delete?id=${id}`);
    }

    // REGION

    regionGetAll(): Observable<any> {
        return this.http.get(`${this.apiURL}Region/GetAll`);
    }

    regionGetById(id: number): Observable<any> {
        return this.http.get(`${this.apiURL}Region/GetById`);
    }

    regionUpdate(params: any): Observable<any> {
        return this.http.put(`${this.apiURL}Region/Update`, params);
    }

    regionAdd(params: any): Observable<any> {
        return this.http.post(`${this.apiURL}Region/Add`, params);
    }

    regionDelete(params: any): Observable<any> {
        return this.http.delete(`${this.apiURL}Region/Delete`, params);
    }

    // Service

    serviceGetAll(): Observable<any> {
        return this.http.get(`${this.apiURL}Service/GetAll`);
    }

    serviceGetById(id: number): Observable<any> {
        return this.http.get(`${this.apiURL}Service/GetById`);
    }

    serviceUpdate(params: any): Observable<any> {
        return this.http.put(`${this.apiURL}Service/Update`, params);
    }

    serviceAdd(params: any): Observable<any> {
        return this.http.post(`${this.apiURL}Service/Add`, params);
    }

    serviceDelete(params: any): Observable<any> {
        return this.http.delete(`${this.apiURL}Service/Delete`, params);
    }

    
    // Subscriber

    subscriberGetAll(): Observable<any> {
        return this.http.get(`${this.apiURL}Subscriber/GetAll`);
    }

    subscriberGetById(id: number): Observable<any> {
        return this.http.get(`${this.apiURL}Subscriber/GetById?id=${id}`);
    }

    subscriberUpdate(params: any): Observable<any> {
        return this.http.put(`${this.apiURL}Subscriber/Update`, params);
    }

    subscriberAdd(params: any): Observable<any> {
        return this.http.post(`${this.apiURL}Subscriber/Create`, params);
    }

    subscriberDelete(id: number): Observable<any> {
        return this.http.delete(`${this.apiURL}Subscriber/Delete?id=${id}`);
    }

    
    // SubscriberType

    subscriberTypeGetAll(): Observable<any> {
        return this.http.get(`${this.apiURL}SubscriberType/GetAll`);
    }

    subscriberTypeGetById(id: number): Observable<any> {
        return this.http.get(`${this.apiURL}SubscriberType/GetById`);
    }

    subscriberTypeUpdate(params: any): Observable<any> {
        return this.http.put(`${this.apiURL}SubscriberType/Update`, params);
    }

    subscriberTypeAdd(params: any): Observable<any> {
        return this.http.post(`${this.apiURL}SubscriberType/Add`, params);
    }

    subscriberTypeDelete(params: any): Observable<any> {
        return this.http.delete(`${this.apiURL}SubscriberType/Delete`, params);
    }

    
    // Territory

    territoryGetAll(): Observable<any> {
        return this.http.get(`${this.apiURL}Territory/GetAll`);
    }

    territoryGetById(id: number): Observable<any> {
        return this.http.get(`${this.apiURL}Territory/GetById`);
    }

    territoryUpdate(params: any): Observable<any> {
        return this.http.put(`${this.apiURL}Territory/Update`, params);
    }

    territoryAdd(params: any): Observable<any> {
        return this.http.post(`${this.apiURL}Territory/Add`, params);
    }

    territoryDelete(params: any): Observable<any> {
        return this.http.delete(`${this.apiURL}Territory/Delete`, params);
    }

    
    // TerritoryResponsiblePerson

    territoryResponsiblePersonGetAll(): Observable<any> {
        return this.http.get(`${this.apiURL}TerritoryResponsiblePerson/GetAll`);
    }

    territoryResponsiblePersonGetById(id: number): Observable<any> {
        return this.http.get(`${this.apiURL}TerritoryResponsiblePerson/GetById`);
    }

    territoryResponsiblePersonUpdate(params: any): Observable<any> {
        return this.http.put(`${this.apiURL}TerritoryResponsiblePerson/Update`, params);
    }

    territoryResponsiblePersonAdd(params: any): Observable<any> {
        return this.http.post(`${this.apiURL}TerritoryResponsiblePerson/Add`, params);
    }

    territoryResponsiblePersonDelete(params: any): Observable<any> {
        return this.http.delete(`${this.apiURL}TerritoryResponsiblePerson/Delete`, params);
    }

    
    // UserType

    userTypeGetAll(): Observable<any> {
        return this.http.get(`${this.apiURL}UserType/GetAll`);
    }

    userTypeGetById(id: number): Observable<any> {
        return this.http.get(`${this.apiURL}UserType/GetById`);
    }

    userTypeUpdate(params: any): Observable<any> {
        return this.http.put(`${this.apiURL}UserType/Update`, params);
    }

    userTypeAdd(params: any): Observable<any> {
        return this.http.post(`${this.apiURL}UserType/Add`, params);
    }

    userTypeDelete(params: any): Observable<any> {
        return this.http.delete(`${this.apiURL}UserType/Delete`, params);
    }
}
