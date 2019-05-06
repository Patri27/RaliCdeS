import { Component, OnInit, Input } from '@angular/core';
import { MediaService } from 'src/app/media/services/media.service';

class ImageSnippet {
  pending = false;
  status = 'init';

  constructor(public src: string, public file: File) { }
}

@Component({
  selector: 'rcs-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.scss']
})
export class UploadPhotoComponent {
  selectedFile: File;
  constructor(private mediaService: MediaService) { }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    const formdata = new FormData();
    formdata.append('file', this.selectedFile, this.selectedFile.name);
    this.mediaService.uploadPhoto(formdata).subscribe();
  }
}

