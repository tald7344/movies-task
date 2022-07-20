import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Update } from '@ngrx/entity';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { ImageSnippet } from 'src/app/@theme/model/image-snippet';
import { ListCategories } from '../../model/list-categories.model';
import { MovieDetailsResponse } from '../../model/movie-details-response';
import { MovieDetails } from '../../model/movie-details.model';
import { MoviesService } from '../../services/movies.service';
import { loadCategories, loadMovie, updateMovie } from '../../store/movies.actions';
import { MoviesState } from '../../store/movies.reducer';
import { getListCategoiresSelector, getMovieDetailsSelector } from '../../store/movies.selector';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.scss']
})
export class EditMovieComponent implements OnInit {
  categories$: Observable<ListCategories[]>;
  movieDetails: MovieDetails;
  movieId: number;
  isSubmited = false;
  updateMovieForm: FormGroup;
  uploadButtonValue = 'Upload';
  coverUploadButtonValue = 'Upload';
  imageName = 'Select Image';
  fileSelected = false;
  fileUploaded = false;
  imageUrl: string;
  imagePathReady = false;
  submitButtonValue = 'Waiting Uploading Image';
  selectedFile: ImageSnippet;

  constructor(private store: Store<MoviesState>,
              private formBuilder: FormBuilder,
              private movieService: MoviesService,
              private toaster: ToastrService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params: ParamMap) => {
        this.movieId = +params.get('id');
        this.store.dispatch(loadMovie({id: this.movieId}));
        this.store.dispatch(loadCategories());
      });

    this.updateMovieForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      category_id: new FormControl('', Validators.required),
      image: new FormControl('')
    });
    // dispatch categories
    this.getMovieDetails();
    // fetch all categories
    this.getListCategories();
  }

  getMovieDetails() {
    this.store.select(getMovieDetailsSelector).subscribe(
      response => {
        if (response) {
          this.movieDetails = response;
          this.fillMovieForm(response);
        }
      }
    );
  }

  getListCategories() {
    this.categories$ = this.store.select(getListCategoiresSelector);
  }

  fillMovieForm(data: MovieDetails) {
    this.updateMovieForm = new FormGroup({
      id: new FormControl(data.id),
      name: new FormControl(data.name, Validators.required),
      description: new FormControl(data.description, Validators.required),
      category_id: new FormControl(data.category_id, Validators.required),
      image: new FormControl('')
    });
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
          this.submitButtonValue = 'update-movie';
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
    if (!this.updateMovieForm.valid) {
      this.toaster.error('Form Not Valid !');
      return;
    }
    const formObject = this.updateMovieForm.getRawValue();
    if (this.imageUrl != '') {
      formObject.image = this.imageUrl;
    } else {
      formObject.image = this.movieDetails.image;
    }
    const update: Update<MovieDetails> = {
      id: this.movieId,
      changes: formObject
    };
    this.store.dispatch(updateMovie({data: update}));
  }



}
