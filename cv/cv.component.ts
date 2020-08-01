import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  Name: 'Name';
  Surname: 'Surname';
  Jobb: 'Jobb';
  JD: 'Jobdescription';
  KEYWORDS: 'MOTCLES';
  bestquote: 'bestqute';
  selectedFile: File;
  private http: any;
  onFileChanged(event){
    this.selectedFile = event.target.files[0];
  }
  onUpload() {
    // this.http is the injected HttpClient
    const uploadData = new FormData();
    uploadData.append('myFile', this.selectedFile, this.selectedFile.name);
    this.http.post('my-backend.com/file-upload', uploadData);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
