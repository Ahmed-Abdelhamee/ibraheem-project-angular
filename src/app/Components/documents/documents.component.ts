import { Component, OnInit } from '@angular/core';
import { IMyFile } from 'src/Models/imy-file';
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
      next: (data) => {
        // data.forEach((prod) => {
        //   prod.imageBase64 = this.getBase64Image(prod.imageBase64);
        // });
        this.files = data;
      },
      error: (err) => console.log(err),
    });
  }

  doanload(id: number) {
    this.filesService.downloadFile(id).subscribe({
      next: (data) => {
        // if (data) alert('Thanks for using our website 😍🤩');
        // else alert('The requested file is not found');
        console.log(data);
        const blob = new Blob([data.content], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url);
      },
      error: (err) => console.log(err),
    });
  }
}
