import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IMyFile } from 'src/Models/imy-file';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class FilesService {
  constructor(private httpClient: HttpClient) {}

  getAllFiles(): Observable<IMyFile[]> {
    return this.httpClient.get<IMyFile[]>(
      `${environment.BaseApiUrl}/api/files/all`
    );
  }

  downloadFile(id: number): Observable<IMyFile> {
    return this.httpClient.get<IMyFile>(
      `${environment.BaseApiUrl}/api/files/downlaodFile/${id}`
    );
  }
}
