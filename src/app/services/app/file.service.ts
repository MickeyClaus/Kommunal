import { Injectable } from '@angular/core';
import { saveAs } from 'file-saver-es';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class FileService {

  apiUrl = environment.mainApiUrl;

  constructor(private http: HttpClient) { }

  // Download with ByteArray

  downloadFileClient(responseFile: string, fileName: any): void {
    const byteCharacters = atob(responseFile);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray]);
    const data = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = data;
    link.download = fileName;
    link.click();
    setTimeout(() => {
      window.URL.revokeObjectURL(data);
    }, 100);
  }

  // Download with Blob

  downLoadFile(data: any, name: string): void {
    const blob = new Blob([data]);
    saveAs(blob, name);
  }
}
