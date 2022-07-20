import {Component, Inject, OnInit, Renderer2} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {ToastrService} from 'ngx-toastr';
import {ImageSnippet} from '../../../../@theme/model/image-snippet';
import {DOCUMENT} from '@angular/common';
import { MoviesService } from '../../services/movies.service';
import { MoviesState } from '../../store/movies.reducer';
import { addMovie, loadCategories } from '../../store/movies.actions';
import { getListCategoiresSelector } from '../../store/movies.selector';
import { ListCategories } from '../../model/list-categories.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.scss']
})
export class NewMovieComponent implements OnInit {
  categories$: Observable<ListCategories[]>;
  addMovieForm: FormGroup;
  uploadButtonValue = 'upload';
  imageName = 'select-image';
  fileSelected = false;
  imageUrl: string;
  imagePathReady = false;
  submitButtonValue = 'waiting-uploading-image';
  selectedFile: ImageSnippet;

  constructor(private store: Store<MoviesState>,
              private movieService: MoviesService,
              private toaster: ToastrService) { }

  ngOnInit(): void {
    // dispatch categories
    this.store.dispatch(loadCategories());
    // init form fields
    this.addMovieForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      category_id: new FormControl('', Validators.required),
      image: new FormControl('')
    });
    // fetch all categories
    this.getListCategories();
  }

    
  getListCategories() {
    this.categories$ = this.store.select(getListCategoiresSelector);
  }


  updateName(imageInput: any) {
    const file: File = imageInput.files[0];
    this.uploadButtonValue = 'upload';
    this.imageName = file.name;
    this.fileSelected = true;
  }

  processFile(imageInput: any) {
    this.fileSelected = false;
    this.uploadButtonValue = 'uploading...';
    console.log('Processing File');
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.movieService.uploadImage(this.selectedFile.file).subscribe(
        (res) => {
          console.log(res);
          this.imageUrl = res;
          this.uploadButtonValue = 'uploaded';
          this.imagePathReady = true;
          this.submitButtonValue = 'new-movie';
        },
        (err) => {
          this.uploadButtonValue = 'upload';
          this.fileSelected = true;
          this.toaster.error('Network Error, Please Try After a Few Seconds');
          console.log(err);
        });
    });
    reader.readAsDataURL(file);
  }

  onSubmit() {
    if (!this.addMovieForm.valid) {
      this.toaster.error('Form Not Valid !');
      return;
    }
    const formObject = this.addMovieForm.getRawValue();
    formObject.image = this.imageUrl;
    this.store.dispatch(addMovie({data: formObject}));
  }

}
