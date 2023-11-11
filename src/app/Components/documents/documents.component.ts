import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IMyFile } from 'src/app/Models/imy-file';
import { FilesService } from 'src/app/Services/files.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css'],
})
export class DocumentsComponent implements OnInit {
  files: IMyFile[] = [];

  constructor(private filesService: FilesService) {}

  ngOnInit(): void {
    this.filesService.getAllFiles().subscribe({
      next: (data) => (this.files = data),
      error: (err) => console.log(err),
    });
  }

  doanload(id: number) {
    this.filesService.downloadFile(id).subscribe({
      next: (response) => {
        const filename = this.getFileNameFromResponse(response);
        const contentType = response.headers.get('content-type');
        this.getFile(response.body as Blob, filename, contentType as string);
      },
      error: (err) => console.log(err),
    });
  }

  private getFileNameFromResponse(response: HttpResponse<Blob>): string {
    const contentDispositionHeader = response.headers.get(
      'content-disposition'
    );
    // const matches = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/.exec(
    //   contentDispositionHeader as string
    // );
    // console.log(
    //   contentDispositionHeader?.split(';')[1].split('=')[1].replaceAll('"', '')
    // );
    // if (matches != null && matches[1]) {
    //   return matches[1].replace(/['"]/g, '');
    // } else {
    //   return 'file';
    // }
    // return matches && matches[1] ? matches[1].replace(/['"]/g, '') : 'file';
    const fileName = contentDispositionHeader
      ?.split(';')[1]
      .split('=')[1]
      .replaceAll('"', '');
    return fileName ? fileName : 'file';
  }

  private getFile(response: Blob, fileName: string, contentType: string) {
    const blob = new Blob([response], { type: contentType });
    const url = window.URL.createObjectURL(blob);
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = fileName;
    downloadLink.click();
  }
}
