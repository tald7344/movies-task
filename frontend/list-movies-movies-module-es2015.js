(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["list-movies-movies-module"],{

/***/ "./src/app/@theme/model/image-snippet.ts":
/*!***********************************************!*\
  !*** ./src/app/@theme/model/image-snippet.ts ***!
  \***********************************************/
/*! exports provided: ImageSnippet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageSnippet", function() { return ImageSnippet; });
class ImageSnippet {
    constructor(src, file) {
        this.src = src;
        this.file = file;
    }
}


/***/ }),

/***/ "./src/app/pages/list-movies/components/all-categories/all-categories.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/pages/list-movies/components/all-categories/all-categories.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AllCategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllCategoriesComponent", function() { return AllCategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_movies_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/movies.actions */ "./src/app/pages/list-movies/store/movies.actions.ts");
/* harmony import */ var _store_movies_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/movies.selector */ "./src/app/pages/list-movies/store/movies.selector.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _theme_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../@theme/components/footer/footer.component */ "./src/app/@theme/components/footer/footer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








function AllCategoriesComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/categories/", category_r4.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 3, category_r4.created_at, "yyyy-MM-dd"));
} }
function AllCategoriesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Categories");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AllCategoriesComponent_div_0_div_6_Template, 9, 6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const categories_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", categories_r2);
} }
function AllCategoriesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AllCategoriesComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
        this.store.dispatch(_store_movies_actions__WEBPACK_IMPORTED_MODULE_1__["loadCategories"]());
        this.getAllCategories();
    }
    getAllCategories() {
        this.categories$ = this.store.select(_store_movies_selector__WEBPACK_IMPORTED_MODULE_2__["getListCategoiresSelector"]);
    }
}
AllCategoriesComponent.ɵfac = function AllCategoriesComponent_Factory(t) { return new (t || AllCategoriesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"])); };
AllCategoriesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllCategoriesComponent, selectors: [["app-all-categories"]], decls: 5, vars: 6, consts: [["class", "w-100 mb-4", 4, "ngIf"], [4, "ngIf"], [1, "w-100", "mb-4"], [1, "container"], [1, "text-center", "my-4"], [1, "latest", "mt-5"], [1, "row"], ["class", "col-12 col-sm-6 col-md-4 col-lg-3", 4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-6", "col-md-4", "col-lg-3"], [1, "card", "w-100", "mb-4", 2, "width", "18rem"], [3, "routerLink"], [1, "card-body"], [1, "card-title", "text-primary"], [1, "card-subtitle", "mb-2", "text-muted"], [1, "lds-ring"]], template: function AllCategoriesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AllCategoriesComponent_div_0_Template, 7, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AllCategoriesComponent_div_2_Template, 6, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.categories$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.categories$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _theme_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".delete[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGlzdC1tb3ZpZXMvY29tcG9uZW50cy9hbGwtY2F0ZWdvcmllcy9DOlxcVXNlcnNcXHRhbGFsXFxEZXNrdG9wXFx0YXNrc1xcbW92aWUgYXBpL3NyY1xcYXBwXFxwYWdlc1xcbGlzdC1tb3ZpZXNcXGNvbXBvbmVudHNcXGFsbC1jYXRlZ29yaWVzXFxhbGwtY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGlzdC1tb3ZpZXMvY29tcG9uZW50cy9hbGwtY2F0ZWdvcmllcy9hbGwtY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUFVLGVBQUE7QUNFViIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpc3QtbW92aWVzL2NvbXBvbmVudHMvYWxsLWNhdGVnb3JpZXMvYWxsLWNhdGVnb3JpZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGVsZXRlIHsgY3Vyc29yOiBwb2ludGVyOyB9IiwiLmRlbGV0ZSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllCategoriesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-all-categories',
                templateUrl: './all-categories.component.html',
                styleUrls: ['./all-categories.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/list-movies/components/all-movies/all-movies.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/list-movies/components/all-movies/all-movies.component.ts ***!
  \*********************************************************************************/
/*! exports provided: AllMoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllMoviesComponent", function() { return AllMoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_movies_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/movies.actions */ "./src/app/pages/list-movies/store/movies.actions.ts");
/* harmony import */ var _store_movies_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/movies.selector */ "./src/app/pages/list-movies/store/movies.selector.ts");
/* harmony import */ var src_app_pages_AdminConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/AdminConfig */ "./src/app/pages/AdminConfig.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








function AllMoviesComponent_div_0_tr_16_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AllMoviesComponent_div_0_tr_16_Template_a_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const movie_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.delete(movie_r4 == null ? null : movie_r4.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r3.baseUrl + (movie_r4 == null ? null : movie_r4.image), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "", movie_r4 == null ? null : movie_r4.name, " Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((movie_r4 == null ? null : movie_r4.name) ? movie_r4 == null ? null : movie_r4.name : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((movie_r4 == null ? null : movie_r4.description) ? movie_r4 == null ? null : movie_r4.description : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r4.created_at ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 9, movie_r4.created_at, "yyyy-MM-dd") : "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/edit/", movie_r4.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("btn btn-danger confirm btn-sm mr-1 mb-1 ", ctx_r3.isDeleted ? "disabled" : "", "");
} }
function AllMoviesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Manage Movies Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Created At");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Control");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, AllMoviesComponent_div_0_tr_16_Template, 15, 12, "tr", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movies_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", movies_r2);
} }
function AllMoviesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AllMoviesComponent {
    constructor(store) {
        this.store = store;
        this.baseUrl = src_app_pages_AdminConfig__WEBPACK_IMPORTED_MODULE_3__["AdminConfig"].sourceAPI;
    }
    ngOnInit() {
        this.store.dispatch(_store_movies_actions__WEBPACK_IMPORTED_MODULE_1__["loadMovies"]());
        this.getAllMovies();
    }
    getAllMovies() {
        this.movies$ = this.store.select(_store_movies_selector__WEBPACK_IMPORTED_MODULE_2__["getListMoviesSelector"]);
    }
    delete(movieId) {
        if (confirm('Are you sure you want to delete this Movie ?')) {
            this.store.dispatch(_store_movies_actions__WEBPACK_IMPORTED_MODULE_1__["deleteMovie"]({ id: movieId }));
        }
    }
}
AllMoviesComponent.ɵfac = function AllMoviesComponent_Factory(t) { return new (t || AllMoviesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"])); };
AllMoviesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AllMoviesComponent, selectors: [["app-all-movies"]], decls: 4, vars: 6, consts: [[4, "ngIf"], [1, "text-center", "details-title", "my-4"], [1, "table-responsive", "text-center"], [1, "table", "table-bordered", "main-table"], [1, "bg-dark", "text-white"], [4, "ngFor", "ngForOf"], [1, "img-thumbnail", "img-custom", 3, "src", "alt"], [1, "btn", "btn-success", "btn-sm", "mr-1", "mb-1", 3, "routerLink"], [3, "click"], [1, "lds-ring"]], template: function AllMoviesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AllMoviesComponent_div_0_Template, 17, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AllMoviesComponent_div_2_Template, 6, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.movies$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.movies$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]], styles: [".delete[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGlzdC1tb3ZpZXMvY29tcG9uZW50cy9hbGwtbW92aWVzL0M6XFxVc2Vyc1xcdGFsYWxcXERlc2t0b3BcXHRhc2tzXFxtb3ZpZSBhcGkvc3JjXFxhcHBcXHBhZ2VzXFxsaXN0LW1vdmllc1xcY29tcG9uZW50c1xcYWxsLW1vdmllc1xcYWxsLW1vdmllcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGlzdC1tb3ZpZXMvY29tcG9uZW50cy9hbGwtbW92aWVzL2FsbC1tb3ZpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFBVSxlQUFBO0FDRVYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9saXN0LW1vdmllcy9jb21wb25lbnRzL2FsbC1tb3ZpZXMvYWxsLW1vdmllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZWxldGUgeyBjdXJzb3I6IHBvaW50ZXI7IH0iLCIuZGVsZXRlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AllMoviesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-all-movies',
                templateUrl: './all-movies.component.html',
                styleUrls: ['./all-movies.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/list-movies/components/category-movies/category-movies.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/pages/list-movies/components/category-movies/category-movies.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CategoryMoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryMoviesComponent", function() { return CategoryMoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _store_movies_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../store/movies.actions */ "./src/app/pages/list-movies/store/movies.actions.ts");
/* harmony import */ var _store_movies_selector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../store/movies.selector */ "./src/app/pages/list-movies/store/movies.selector.ts");
/* harmony import */ var src_app_pages_AdminConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/pages/AdminConfig */ "./src/app/pages/AdminConfig.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _theme_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../@theme/components/footer/footer.component */ "./src/app/@theme/components/footer/footer.component.ts");









function CategoryMoviesComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r3.baseUrl + movie_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 4, movie_r4.created_at, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r4.description);
} }
function CategoryMoviesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "All Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CategoryMoviesComponent_div_0_div_6_Template, 11, 7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movies_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", movies_r2);
} }
function CategoryMoviesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class CategoryMoviesComponent {
    constructor(store, activatedRoute) {
        this.store = store;
        this.activatedRoute = activatedRoute;
        this.baseUrl = src_app_pages_AdminConfig__WEBPACK_IMPORTED_MODULE_3__["AdminConfig"].sourceAPI;
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((params) => {
            this.categoryId = +params.get('id');
            this.store.dispatch(_store_movies_actions__WEBPACK_IMPORTED_MODULE_1__["loadMovieByCategoryId"]({ id: this.categoryId }));
        });
        this.getAllMoviesForThisCategory();
    }
    getAllMoviesForThisCategory() {
        this.movies$ = this.store.select(_store_movies_selector__WEBPACK_IMPORTED_MODULE_2__["getMoviesByCategoryIdSelector"]);
    }
}
CategoryMoviesComponent.ɵfac = function CategoryMoviesComponent_Factory(t) { return new (t || CategoryMoviesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
CategoryMoviesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CategoryMoviesComponent, selectors: [["app-category-movies"]], decls: 5, vars: 6, consts: [["class", "w-100 mb-4", 4, "ngIf"], [4, "ngIf"], [1, "w-100", "mb-4"], [1, "container"], [1, "text-center", "my-4"], [1, "latest", "mt-5"], [1, "row"], ["class", "col-12 col-sm-6 col-md-4 col-lg-3", 4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-6", "col-md-4", "col-lg-3"], [1, "card", "w-100", "mb-4", 2, "width", "18rem"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle", "mb-2", "text-muted"], [1, "card-text"], [1, "lds-ring"]], template: function CategoryMoviesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CategoryMoviesComponent_div_0_Template, 7, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CategoryMoviesComponent_div_2_Template, 6, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.movies$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.movies$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _theme_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: [".delete[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGlzdC1tb3ZpZXMvY29tcG9uZW50cy9jYXRlZ29yeS1tb3ZpZXMvQzpcXFVzZXJzXFx0YWxhbFxcRGVza3RvcFxcdGFza3NcXG1vdmllIGFwaS9zcmNcXGFwcFxccGFnZXNcXGxpc3QtbW92aWVzXFxjb21wb25lbnRzXFxjYXRlZ29yeS1tb3ZpZXNcXGNhdGVnb3J5LW1vdmllcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGlzdC1tb3ZpZXMvY29tcG9uZW50cy9jYXRlZ29yeS1tb3ZpZXMvY2F0ZWdvcnktbW92aWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVUsZUFBQTtBQ0VWIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbGlzdC1tb3ZpZXMvY29tcG9uZW50cy9jYXRlZ29yeS1tb3ZpZXMvY2F0ZWdvcnktbW92aWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlbGV0ZSB7IGN1cnNvcjogcG9pbnRlcjsgfSIsIi5kZWxldGUge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CategoryMoviesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-category-movies',
                templateUrl: './category-movies.component.html',
                styleUrls: ['./category-movies.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/list-movies/components/edit-movie/edit-movie.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/list-movies/components/edit-movie/edit-movie.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EditMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditMovieComponent", function() { return EditMovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_theme_model_image_snippet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@theme/model/image-snippet */ "./src/app/@theme/model/image-snippet.ts");
/* harmony import */ var _store_movies_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/movies.actions */ "./src/app/pages/list-movies/store/movies.actions.ts");
/* harmony import */ var _store_movies_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/movies.selector */ "./src/app/pages/list-movies/store/movies.selector.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/movies.service */ "./src/app/pages/list-movies/services/movies.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");












function EditMovieComponent_div_0_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditMovieComponent_div_0_span_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditMovieComponent_div_0_option_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", category_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r9.name);
} }
function EditMovieComponent_div_0_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Category field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function EditMovieComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Update Movie Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Update Movie");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EditMovieComponent_div_0_Template_form_ngSubmit_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EditMovieComponent_div_0_span_15_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 15, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, EditMovieComponent_div_0_span_22_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, EditMovieComponent_div_0_option_27_Template, 2, 2, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, EditMovieComponent_div_0_span_28_Template, 2, 0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditMovieComponent_div_0_Template_input_change_34_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.updateName(_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditMovieComponent_div_0_Template_button_click_39_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.processFile(_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const categories_r2 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.updateMovieForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx_r0.updateMovieForm.get("name").errors && (ctx_r0.updateMovieForm.get("name").touched || ctx_r0.updateMovieForm.get("name").dirty)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.updateMovieForm.get("name").errors == null ? null : ctx_r0.updateMovieForm.get("name").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx_r0.updateMovieForm.get("description").errors && (ctx_r0.updateMovieForm.get("description").touched || ctx_r0.updateMovieForm.get("description").dirty)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.updateMovieForm.get("description").errors == null ? null : ctx_r0.updateMovieForm.get("description").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx_r0.updateMovieForm.get("category_id").errors && (ctx_r0.updateMovieForm.get("category_id").touched || ctx_r0.updateMovieForm.get("category_id").dirty)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", categories_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.updateMovieForm.get("category_id").errors == null ? null : ctx_r0.updateMovieForm.get("category_id").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.imageName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.fileSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.uploadButtonValue, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.updateMovieForm.invalid || ctx_r0.isSubmited);
} }
function EditMovieComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class EditMovieComponent {
    constructor(store, formBuilder, movieService, toaster, router, activatedRoute) {
        this.store = store;
        this.formBuilder = formBuilder;
        this.movieService = movieService;
        this.toaster = toaster;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.isSubmited = false;
        this.uploadButtonValue = 'Upload';
        this.coverUploadButtonValue = 'Upload';
        this.imageName = 'Select Image';
        this.fileSelected = false;
        this.fileUploaded = false;
        this.imagePathReady = false;
        this.submitButtonValue = 'Waiting Uploading Image';
    }
    ngOnInit() {
        this.activatedRoute.paramMap.subscribe((params) => {
            this.movieId = +params.get('id');
            this.store.dispatch(Object(_store_movies_actions__WEBPACK_IMPORTED_MODULE_3__["loadMovie"])({ id: this.movieId }));
            this.store.dispatch(Object(_store_movies_actions__WEBPACK_IMPORTED_MODULE_3__["loadCategories"])());
        });
        this.updateMovieForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            category_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        // dispatch categories
        this.getMovieDetails();
        // fetch all categories
        this.getListCategories();
    }
    getMovieDetails() {
        this.store.select(_store_movies_selector__WEBPACK_IMPORTED_MODULE_4__["getMovieDetailsSelector"]).subscribe(response => {
            if (response) {
                this.movieDetails = response;
                this.fillMovieForm(response);
            }
        });
    }
    getListCategories() {
        this.categories$ = this.store.select(_store_movies_selector__WEBPACK_IMPORTED_MODULE_4__["getListCategoiresSelector"]);
    }
    fillMovieForm(data) {
        this.updateMovieForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data.id),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data.description, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            category_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](data.category_id, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    updateName(imageInput) {
        const file = imageInput.files[0];
        this.uploadButtonValue = 'upload';
        this.imageName = file.name;
        this.fileSelected = true;
    }
    processFile(imageInput) {
        this.fileSelected = false;
        this.uploadButtonValue = 'uploading...';
        console.log('Processing File');
        const file = imageInput.files[0];
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            this.selectedFile = new src_app_theme_model_image_snippet__WEBPACK_IMPORTED_MODULE_2__["ImageSnippet"](event.target.result, file);
            this.movieService.uploadImage(this.selectedFile.file).subscribe((res) => {
                console.log(res);
                this.imageUrl = res;
                this.uploadButtonValue = 'uploaded';
                this.imagePathReady = true;
                this.submitButtonValue = 'update-movie';
            }, (err) => {
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
        }
        else {
            formObject.image = this.movieDetails.image;
        }
        const update = {
            id: this.movieId,
            changes: formObject
        };
        this.store.dispatch(Object(_store_movies_actions__WEBPACK_IMPORTED_MODULE_3__["updateMovie"])({ data: update }));
    }
}
EditMovieComponent.ɵfac = function EditMovieComponent_Factory(t) { return new (t || EditMovieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_movies_service__WEBPACK_IMPORTED_MODULE_6__["MoviesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"])); };
EditMovieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditMovieComponent, selectors: [["app-edit-movie"]], decls: 4, vars: 6, consts: [[4, "ngIf"], [1, "container-fluid"], [1, "content-header"], [1, "text-center", "my-5"], [1, "card", "card-info"], [1, "card-header", "bg-sidebar-item-button", "text-white"], [1, "card-title", "mb-0"], [3, "formGroup", "ngSubmit"], [1, "card-body"], [1, "form-group"], ["for", "exampleInputname1"], ["type", "text", "name", "name", "formControlName", "name", "id", "exampleInputname1", "placeholder", "Name", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "exampleInputdescription"], [1, "position-relative"], ["type", "description", "name", "description", "formControlName", "description", "id", "exampleInputdescription", "placeholder", "Movie Description", 1, "form-control", 3, "ngClass"], ["descriptionField", ""], ["for", "exampleInputEmail"], ["name", "category_id", "formControlName", "category_id", "id", "exampleInputcategory_id", 1, "form-control", 3, "ngClass"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "exampleInputupload"], [1, "input-group", "input-group-custom"], [1, "custom-file"], ["type", "file", "accept", "image/*", "id", "file-input", 1, "custom-file-input", 3, "change"], ["imageInput", ""], ["for", "file-input", 1, "custom-file-label"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-success", 3, "disabled", "click"], [1, "card-footer"], ["type", "submit", 1, "btn", "bg-sidebar-item-button", "text-white", 3, "disabled"], [1, "invalid-feedback"], [3, "value"], [1, "lds-ring"]], template: function EditMovieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditMovieComponent_div_0_Template, 44, 18, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EditMovieComponent_div_2_Template, 6, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movieDetails != null && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.categories$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.movieDetails == null && !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.categories$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], styles: [".card-footer[_ngcontent-%COMP%]   .btn.bg-sidebar-item-button[_ngcontent-%COMP%]:hover {\n  background: rgba(54, 72, 94, 0.8);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGlzdC1tb3ZpZXMvY29tcG9uZW50cy9lZGl0LW1vdmllL0M6XFxVc2Vyc1xcdGFsYWxcXERlc2t0b3BcXHRhc2tzXFxtb3ZpZSBhcGkvc3JjXFxhcHBcXHBhZ2VzXFxsaXN0LW1vdmllc1xcY29tcG9uZW50c1xcZWRpdC1tb3ZpZVxcZWRpdC1tb3ZpZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGlzdC1tb3ZpZXMvY29tcG9uZW50cy9lZGl0LW1vdmllL2VkaXQtbW92aWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFBVSxpQ0FBQTtBQ0FsQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpc3QtbW92aWVzL2NvbXBvbmVudHMvZWRpdC1tb3ZpZS9lZGl0LW1vdmllLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtZm9vdGVyIHtcclxuICAgIC5idG4uYmctc2lkZWJhci1pdGVtLWJ1dHRvbiB7XHJcbiAgICAgICAgJjpob3ZlciB7IGJhY2tncm91bmQ6IHJnYmEoNTQsIDcyLCA5NCwgMC44KTsgfVxyXG4gICAgfVxyXG59IiwiLmNhcmQtZm9vdGVyIC5idG4uYmctc2lkZWJhci1pdGVtLWJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoNTQsIDcyLCA5NCwgMC44KTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditMovieComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-movie',
                templateUrl: './edit-movie.component.html',
                styleUrls: ['./edit-movie.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_movies_service__WEBPACK_IMPORTED_MODULE_6__["MoviesService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/list-movies/components/new-movie/new-movie.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/list-movies/components/new-movie/new-movie.component.ts ***!
  \*******************************************************************************/
/*! exports provided: NewMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewMovieComponent", function() { return NewMovieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _theme_model_image_snippet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../@theme/model/image-snippet */ "./src/app/@theme/model/image-snippet.ts");
/* harmony import */ var _store_movies_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/movies.actions */ "./src/app/pages/list-movies/store/movies.actions.ts");
/* harmony import */ var _store_movies_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/movies.selector */ "./src/app/pages/list-movies/store/movies.selector.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/movies.service */ "./src/app/pages/list-movies/services/movies.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











function NewMovieComponent_div_0_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewMovieComponent_div_0_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewMovieComponent_div_0_option_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", category_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r9.name);
} }
function NewMovieComponent_div_0_span_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Category field is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function NewMovieComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "New Movie Page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NewMovieComponent_div_0_Template_form_ngSubmit_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, NewMovieComponent_div_0_span_13_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, NewMovieComponent_div_0_span_20_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, NewMovieComponent_div_0_option_25_Template, 2, 2, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, NewMovieComponent_div_0_span_26_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "input", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NewMovieComponent_div_0_Template_input_change_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.updateName(_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewMovieComponent_div_0_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](33); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.processFile(_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "create");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const categories_r2 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.addMovieForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx_r0.addMovieForm.get("name").errors && (ctx_r0.addMovieForm.get("name").touched || ctx_r0.addMovieForm.get("name").dirty)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.addMovieForm.get("name").errors == null ? null : ctx_r0.addMovieForm.get("name").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx_r0.addMovieForm.get("description").errors && (ctx_r0.addMovieForm.get("description").touched || ctx_r0.addMovieForm.get("description").dirty)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.addMovieForm.get("description").errors == null ? null : ctx_r0.addMovieForm.get("description").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx_r0.addMovieForm.get("category_id").errors && (ctx_r0.addMovieForm.get("category_id").touched || ctx_r0.addMovieForm.get("category_id").dirty)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", categories_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.addMovieForm.get("category_id").errors == null ? null : ctx_r0.addMovieForm.get("category_id").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.imageName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.fileSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.uploadButtonValue, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.addMovieForm.invalid);
} }
function NewMovieComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NewMovieComponent {
    constructor(store, movieService, toaster) {
        this.store = store;
        this.movieService = movieService;
        this.toaster = toaster;
        this.uploadButtonValue = 'upload';
        this.imageName = 'select-image';
        this.fileSelected = false;
        this.imagePathReady = false;
        this.submitButtonValue = 'waiting-uploading-image';
    }
    ngOnInit() {
        // dispatch categories
        this.store.dispatch(Object(_store_movies_actions__WEBPACK_IMPORTED_MODULE_3__["loadCategories"])());
        // init form fields
        this.addMovieForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            category_id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        // fetch all categories
        this.getListCategories();
    }
    getListCategories() {
        this.categories$ = this.store.select(_store_movies_selector__WEBPACK_IMPORTED_MODULE_4__["getListCategoiresSelector"]);
    }
    updateName(imageInput) {
        const file = imageInput.files[0];
        this.uploadButtonValue = 'upload';
        this.imageName = file.name;
        this.fileSelected = true;
    }
    processFile(imageInput) {
        this.fileSelected = false;
        this.uploadButtonValue = 'uploading...';
        console.log('Processing File');
        const file = imageInput.files[0];
        const reader = new FileReader();
        reader.addEventListener('load', (event) => {
            this.selectedFile = new _theme_model_image_snippet__WEBPACK_IMPORTED_MODULE_2__["ImageSnippet"](event.target.result, file);
            this.movieService.uploadImage(this.selectedFile.file).subscribe((res) => {
                console.log(res);
                this.imageUrl = res;
                this.uploadButtonValue = 'uploaded';
                this.imagePathReady = true;
                this.submitButtonValue = 'new-movie';
            }, (err) => {
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
        this.store.dispatch(Object(_store_movies_actions__WEBPACK_IMPORTED_MODULE_3__["addMovie"])({ data: formObject }));
    }
}
NewMovieComponent.ɵfac = function NewMovieComponent_Factory(t) { return new (t || NewMovieComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_movies_service__WEBPACK_IMPORTED_MODULE_6__["MoviesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"])); };
NewMovieComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewMovieComponent, selectors: [["app-new-movie"]], decls: 4, vars: 6, consts: [[4, "ngIf"], [1, "container-fluid"], [1, "content-header"], [1, "text-center", "mt-5", "mb-3"], [1, "card", "card-info", "mb-5"], [1, "card-header", "bg-light-blue", "text-white", "p-3"], [3, "formGroup", "ngSubmit"], [1, "card-body"], [1, "form-group"], ["for", "exampleInputname1"], ["type", "text", "name", "name", "formControlName", "name", "id", "exampleInputname1", "placeholder", "Name", 1, "form-control", 3, "ngClass"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "exampleInputdescription"], [1, "position-relative"], ["type", "description", "name", "description", "formControlName", "description", "id", "exampleInputdescription", "placeholder", "Movie Description", 1, "form-control", 3, "ngClass"], ["descriptionField", ""], ["for", "exampleInputEmail"], ["name", "category_id", "formControlName", "category_id", "id", "exampleInputcategory_id", 1, "form-control", 3, "ngClass"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "exampleInputupload"], [1, "input-group", "input-group-custom"], [1, "custom-file"], ["type", "file", "accept", "image/*", "id", "file-input", 1, "custom-file-input", 3, "change"], ["imageInput", ""], ["for", "file-input", 1, "custom-file-label"], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-success", 3, "disabled", "click"], [1, "card-footer"], ["type", "submit", 1, "btn", "bg-light-blue", "text-white", 3, "disabled"], [1, "invalid-feedback"], [3, "value"], [1, "lds-ring"]], template: function NewMovieComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NewMovieComponent_div_0_Template, 42, 18, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NewMovieComponent_div_2_Template, 6, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.categories$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.categories$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: [".fa-custom[_ngcontent-%COMP%] {\n  display: inline-block;\n  position: absolute;\n  top: 12px;\n  right: 15px;\n  cursor: pointer;\n  opacity: 0.5;\n}\n.fa-custom[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.input-group-ar[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  width: 100%;\n}\n.input-group-ar[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1 1 auto;\n  width: 1%;\n  margin-bottom: 0;\n}\n.input-group-ar[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%]   .custom-file-input[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 14rem;\n  max-width: 100%;\n  height: calc(2.25rem + 2px);\n  margin: 0;\n  opacity: 0;\n}\n.input-group-ar[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%]   .custom-file-label[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  z-index: 1;\n  height: calc(2.25rem + 2px);\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n.input-group-ar[_ngcontent-%COMP%]    > .custom-file[_ngcontent-%COMP%]   .custom-file-label[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  z-index: 3;\n  display: block;\n  height: calc(calc(2.25rem + 2px) - 1px * 2);\n  padding: 0.375rem 0.75rem;\n  line-height: 1.5;\n  color: #495057;\n  content: \"Browse\";\n  background-color: #e9ecef;\n  border-left: 1px solid #ced4da;\n  border-radius: 0.25rem 0 0 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGlzdC1tb3ZpZXMvY29tcG9uZW50cy9uZXctbW92aWUvQzpcXFVzZXJzXFx0YWxhbFxcRGVza3RvcFxcdGFza3NcXG1vdmllIGFwaS9zcmNcXGFwcFxccGFnZXNcXGxpc3QtbW92aWVzXFxjb21wb25lbnRzXFxuZXctbW92aWVcXG5ldy1tb3ZpZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGlzdC1tb3ZpZXMvY29tcG9uZW50cy9uZXctbW92aWUvbmV3LW1vdmllLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNDRjtBREFFO0VBQVUsVUFBQTtBQ0daO0FEREE7RUFDRSxrQkFBQTtFQUdBLGFBQUE7RUFFQSxlQUFBO0VBR0Esb0JBQUE7RUFDQSxXQUFBO0FDSUY7QURIRTtFQUNFLGtCQUFBO0VBR0EsY0FBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQ0tKO0FESkk7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ01OO0FESkk7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0FDTU47QURMTTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSwyQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0NBQUE7QUNPUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpc3QtbW92aWVzL2NvbXBvbmVudHMvbmV3LW1vdmllL25ldy1tb3ZpZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYS1jdXN0b20ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMnB4O1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBvcGFjaXR5OiAuNTtcclxuICAmOmhvdmVyIHsgb3BhY2l0eTogMTsgfVxyXG59XHJcbi5pbnB1dC1ncm91cC1hciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgLXdlYmtpdC1ib3gtYWxpZ246IHN0cmV0Y2g7XHJcbiAgLW1zLWZsZXgtYWxpZ246IHN0cmV0Y2g7XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgJiA+IC5jdXN0b20tZmlsZSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAtd2Via2l0LWJveC1mbGV4OiAxO1xyXG4gICAgLW1zLWZsZXg6IDEgMSBhdXRvO1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICB3aWR0aDogMSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgLmN1c3RvbS1maWxlLWlucHV0IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIG1pbi13aWR0aDogMTRyZW07XHJcbiAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiBjYWxjKDIuMjVyZW0gKyAycHgpO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICB9XHJcbiAgICAuY3VzdG9tLWZpbGUtbGFiZWwge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgIGhlaWdodDogY2FsYygyLjI1cmVtICsgMnB4KTtcclxuICAgICAgcGFkZGluZzogLjM3NXJlbSAuNzVyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgIGNvbG9yOiAjNDk1MDU3O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgei1pbmRleDogMztcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoY2FsYygyLjI1cmVtICsgMnB4KSAtIDFweCAqIDIpO1xyXG4gICAgICAgIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgICAgICBjb2xvcjogIzQ5NTA1NztcclxuICAgICAgICBjb250ZW50OiBcIkJyb3dzZVwiO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW0gMCAwIDAuMjVyZW07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLmZhLWN1c3RvbSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEycHg7XG4gIHJpZ2h0OiAxNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbi5mYS1jdXN0b206aG92ZXIge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uaW5wdXQtZ3JvdXAtYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICAtd2Via2l0LWJveC1hbGlnbjogc3RyZXRjaDtcbiAgLW1zLWZsZXgtYWxpZ246IHN0cmV0Y2g7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICB3aWR0aDogMTAwJTtcbn1cbi5pbnB1dC1ncm91cC1hciA+IC5jdXN0b20tZmlsZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcbiAgLW1zLWZsZXg6IDEgMSBhdXRvO1xuICBmbGV4OiAxIDEgYXV0bztcbiAgd2lkdGg6IDElO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuLmlucHV0LWdyb3VwLWFyID4gLmN1c3RvbS1maWxlIC5jdXN0b20tZmlsZS1pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4td2lkdGg6IDE0cmVtO1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogY2FsYygyLjI1cmVtICsgMnB4KTtcbiAgbWFyZ2luOiAwO1xuICBvcGFjaXR5OiAwO1xufVxuLmlucHV0LWdyb3VwLWFyID4gLmN1c3RvbS1maWxlIC5jdXN0b20tZmlsZS1sYWJlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTtcbiAgaGVpZ2h0OiBjYWxjKDIuMjVyZW0gKyAycHgpO1xuICBwYWRkaW5nOiAwLjM3NXJlbSAwLjc1cmVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBjb2xvcjogIzQ5NTA1NztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NlZDRkYTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbn1cbi5pbnB1dC1ncm91cC1hciA+IC5jdXN0b20tZmlsZSAuY3VzdG9tLWZpbGUtbGFiZWw6YWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB6LWluZGV4OiAzO1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiBjYWxjKGNhbGMoMi4yNXJlbSArIDJweCkgLSAxcHggKiAyKTtcbiAgcGFkZGluZzogMC4zNzVyZW0gMC43NXJlbTtcbiAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgY29sb3I6ICM0OTUwNTc7XG4gIGNvbnRlbnQ6IFwiQnJvd3NlXCI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NlZDRkYTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbSAwIDAgMC4yNXJlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewMovieComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-movie',
                templateUrl: './new-movie.component.html',
                styleUrls: ['./new-movie.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }, { type: _services_movies_service__WEBPACK_IMPORTED_MODULE_6__["MoviesService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/list-movies/list-movies.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/list-movies/list-movies.component.ts ***!
  \************************************************************/
/*! exports provided: ListMoviesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListMoviesComponent", function() { return ListMoviesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_theme_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/@theme/components */ "./src/app/@theme/components/index.ts");
/* harmony import */ var _store_movies_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/movies.actions */ "./src/app/pages/list-movies/store/movies.actions.ts");
/* harmony import */ var _store_movies_selector__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/movies.selector */ "./src/app/pages/list-movies/store/movies.selector.ts");
/* harmony import */ var _AdminConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../AdminConfig */ "./src/app/pages/AdminConfig.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _theme_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../@theme/components/footer/footer.component */ "./src/app/@theme/components/footer/footer.component.ts");









function ListMoviesComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movie_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r3.baseUrl + movie_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 4, movie_r4.created_at, "yyyy-MM-dd"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](movie_r4.description);
} }
function ListMoviesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "All Movies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ListMoviesComponent_div_0_div_6_Template, 11, 7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const movies_r2 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", movies_r2);
} }
function ListMoviesComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ListMoviesComponent {
    constructor(store) {
        this.store = store;
        this.baseUrl = _AdminConfig__WEBPACK_IMPORTED_MODULE_4__["AdminConfig"].sourceAPI;
    }
    ngOnInit() {
        this.store.dispatch(Object(_store_movies_actions__WEBPACK_IMPORTED_MODULE_2__["loadMovies"])());
        this.getListMovies();
    }
    getListMovies() {
        this.movies$ = this.store.select(_store_movies_selector__WEBPACK_IMPORTED_MODULE_3__["getListMoviesSelector"]);
    }
}
ListMoviesComponent.ɵfac = function ListMoviesComponent_Factory(t) { return new (t || ListMoviesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"])); };
ListMoviesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ListMoviesComponent, selectors: [["app-list-movies"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([src_app_theme_components__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]])], decls: 5, vars: 6, consts: [["class", "w-100 mb-4", 4, "ngIf"], [4, "ngIf"], [1, "w-100", "mb-4"], [1, "container"], [1, "text-center", "my-4"], [1, "latest", "mt-5"], [1, "row"], ["class", "col-12 col-sm-6 col-md-4 col-lg-3", 4, "ngFor", "ngForOf"], [1, "col-12", "col-sm-6", "col-md-4", "col-lg-3"], [1, "card", "w-100", "mb-4", 2, "width", "18rem"], ["alt", "Card image cap", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-subtitle", "mb-2", "text-muted"], [1, "card-text"], [1, "lds-ring"]], template: function ListMoviesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ListMoviesComponent_div_0_Template, 7, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ListMoviesComponent_div_2_Template, 6, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.movies$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.movies$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _theme_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]], styles: ["@media (min-width: 768px) and (max-width: 991px) {\n  .home-stat[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.2rem;\n  }\n}\n@media (min-width: 576px) and (max-width: 767px) {\n  .home-stat[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n@media (max-width: 575px) {\n  .home-stat[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.8rem;\n  }\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n  background: cadetblue;\n  padding: 15px;\n  margin-bottom: 5px;\n  text-align: center;\n  border-radius: 10px;\n  color: #fff;\n  border: 1px solid #ccc;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.5s ease-in-out;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 14px;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 50px;\n  font-weight: 600;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]:hover {\n  -o-box-shadow: 3px 3px 10px #888;\n  box-shadow: 3px 3px 10px #888;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  float: right;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 18px;\n}\n@media (min-width: 768px) and (max-width: 1199px) {\n  .home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 4em;\n    transform: translateY(25%);\n  }\n}\n.home-stat[_ngcontent-%COMP%]   .st_member[_ngcontent-%COMP%] {\n  background: #3498db;\n}\n.home-stat[_ngcontent-%COMP%]   .st_pending[_ngcontent-%COMP%] {\n  background: #c0392b;\n}\n.home-stat[_ngcontent-%COMP%]   .st_item[_ngcontent-%COMP%] {\n  background: #d35400;\n}\n.home-stat[_ngcontent-%COMP%]   .st_comment[_ngcontent-%COMP%] {\n  background: #8e44ad;\n}\n.home-stat[_ngcontent-%COMP%]   .st_interactions[_ngcontent-%COMP%] {\n  background: #218c74;\n}\n.home-stat[_ngcontent-%COMP%]   .st_clients[_ngcontent-%COMP%] {\n  background: #40407a;\n}\n.late[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  position: relative;\n}\n.late[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #999;\n  cursor: pointer;\n}\n.late[_ngcontent-%COMP%]   .late_info[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  padding: 7px;\n}\n.late[_ngcontent-%COMP%]   .late_info[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #eee;\n}\n.late[_ngcontent-%COMP%]   .late_info[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n}\n.late[_ngcontent-%COMP%]   .member_comment[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.late[_ngcontent-%COMP%]   .member_comment[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  float: left;\n  padding: 6px 10px;\n  color: #329de5;\n  font-size: 16px;\n  width: 140px;\n}\n.late[_ngcontent-%COMP%]   .member_comment[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  float: right;\n  width: calc(100% - 140px);\n  background: #eee;\n  padding: 10px;\n  position: relative;\n}\n.late[_ngcontent-%COMP%]   .member_comment[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  top: 10px;\n  left: -20px;\n  border-style: solid;\n  border-color: transparent #eee transparent transparent;\n  border-width: 10px;\n}\n\n\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%] {\n  background: cadetblue;\n  padding: 15px;\n  margin-bottom: 5px;\n  text-align: center;\n  border-radius: 10px;\n  color: #fff;\n  border: 1px solid #ccc;\n  position: relative;\n  overflow: hidden;\n  transition: all 0.5s ease-in-out;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-size: 14px;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 50px;\n  font-weight: 600;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]:hover {\n  -o-box-shadow: 3px 3px 10px #888;\n  box-shadow: 3px 3px 10px #888;\n}\n.home-stat[_ngcontent-%COMP%]   .st_categories[_ngcontent-%COMP%] {\n  background: #3498db;\n}\n.home-stat[_ngcontent-%COMP%]   .st_pending[_ngcontent-%COMP%] {\n  background: #008385;\n}\n.home-stat[_ngcontent-%COMP%]   .st_item[_ngcontent-%COMP%] {\n  background: #d35400;\n}\n.home-stat[_ngcontent-%COMP%]   .st_animes[_ngcontent-%COMP%] {\n  background: #8e44ad;\n}\n.home-stat[_ngcontent-%COMP%]   .st_episode_coming_soon[_ngcontent-%COMP%] {\n  background: #218c74;\n}\n.home-stat[_ngcontent-%COMP%]   .st_clients[_ngcontent-%COMP%] {\n  background: #40407a;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  float: right;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: #fff;\n}\n.home-stat[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 10px;\n  top: 18px;\n}\n.late[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  position: relative;\n}\n.late[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #999;\n  cursor: pointer;\n}\n.late[_ngcontent-%COMP%]   .late_info[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #ccc;\n  padding: 7px;\n}\n.late[_ngcontent-%COMP%]   .late_info[_ngcontent-%COMP%]:nth-child(odd) {\n  background: #eee;\n}\n.late[_ngcontent-%COMP%]   .late_info[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n}\n.late[_ngcontent-%COMP%]   .member_comment[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n}\n.late[_ngcontent-%COMP%]   .member_comment[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  float: left;\n  padding: 6px 10px;\n  color: #329de5;\n  font-size: 16px;\n  width: 140px;\n}\n.late[_ngcontent-%COMP%]   .member_comment[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  float: right;\n  width: calc(100% - 140px);\n  background: #eee;\n  padding: 10px;\n  position: relative;\n}\n.late[_ngcontent-%COMP%]   .member_comment[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 0;\n  height: 0;\n  top: 10px;\n  left: -20px;\n  border-style: solid;\n  border-color: transparent #eee transparent transparent;\n  border-width: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbGlzdC1tb3ZpZXMvQzpcXFVzZXJzXFx0YWxhbFxcRGVza3RvcFxcdGFza3NcXG1vdmllIGFwaS9zcmNcXGFwcFxccGFnZXNcXGxpc3QtbW92aWVzXFxsaXN0LW1vdmllcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbGlzdC1tb3ZpZXMvbGlzdC1tb3ZpZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUNBQUE7QUFNTTtFQUpGO0lBS0ksaUJBQUE7RUNITjtBQUNGO0FESU07RUFQRjtJQVFJLGVBQUE7RUNETjtBQUNGO0FESU07RUFaRjtJQWFJLGlCQUFBO0VDRE47QUFDRjtBREtJO0VBQ0UscUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUlBLGdDQUFBO0FDSE47QURJTTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0ZSO0FESU07RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNGUjtBRElNO0VBR0UsZ0NBQUE7RUFDQSw2QkFBQTtBQ0ZSO0FESU07RUFDRSxZQUFBO0FDRlI7QURJTTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBQ0ZSO0FESU07RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FDRlI7QURHUTtFQUpGO0lBS0ksY0FBQTtJQUNBLDBCQUFBO0VDQVI7QUFDRjtBREdJO0VBQ0UsbUJBQUE7QUNETjtBREdJO0VBQ0UsbUJBQUE7QUNETjtBREdJO0VBQ0UsbUJBQUE7QUNETjtBREdJO0VBQ0UsbUJBQUE7QUNETjtBREdJO0VBQ0UsbUJBQUE7QUNETjtBREdJO0VBQ0UsbUJBQUE7QUNETjtBRE1JO0VBQ0Usa0JBQUE7QUNITjtBRElNO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNGUjtBREtJO0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0FDSE47QURJTTtFQUNFLGdCQUFBO0FDRlI7QURJTTtFQUNFLG1CQUFBO0FDRlI7QURLSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNITjtBRElNO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0ZSO0FESU07RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ0ZSO0FER1E7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzREFBQTtFQUNBLGtCQUFBO0FDRFY7QURNRSwrQkFBQTtBQUNBLGlDQUFBO0FBQ0E7RUFDRSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBSUEsZ0NBQUE7QUNISjtBREtFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDRko7QURJRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ0RKO0FER0U7RUFHRSxnQ0FBQTtFQUNBLDZCQUFBO0FDQUo7QURFRTtFQUNFLG1CQUFBO0FDQ0o7QURDRTtFQUNFLG1CQUFBO0FDRUo7QURBRTtFQUNFLG1CQUFBO0FDR0o7QURERTtFQUNFLG1CQUFBO0FDSUo7QURGRTtFQUNFLG1CQUFBO0FDS0o7QURIRTtFQUNFLG1CQUFBO0FDTUo7QURKRTtFQUNFLFlBQUE7QUNPSjtBRExFO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FDUUo7QURORTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUNTSjtBRFBFO0VBQ0Usa0JBQUE7QUNVSjtBRFJFO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUNXSjtBRFRFO0VBQ0UsNkJBQUE7RUFDQSxZQUFBO0FDWUo7QURWRTtFQUNFLGdCQUFBO0FDYUo7QURYRTtFQUNFLG1CQUFBO0FDY0o7QURaRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7QUNlSjtBRFpFO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ2VKO0FEWkU7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBQ2VKO0FEWkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxzREFBQTtFQUNBLGtCQUFBO0FDZUo7QURiRSwrQkFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xpc3QtbW92aWVzL2xpc3QtbW92aWVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLS0tIFN0YXJ0IERhc2hib2FyZCBQYWdlIC0tLSAqL1xyXG4uaG9tZS1zdGF0IHtcclxuICAgIGgxIHtcclxuICAgICAgLy8gQG1lZGlhIChtaW4td2lkdGg6ICc5OTJweCcpIGFuZCAobWF4LXdpZHRoOiAnMTE5OXB4Jykge1xyXG4gICAgICAvLyAgIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAnNzY4cHgnKSBhbmQgKG1heC13aWR0aDogJzk5MXB4Jykge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAnNTc2cHgnKSBhbmQgKG1heC13aWR0aDogJzc2N3B4Jykge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kOiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLy8gY29sb3I6ICMyMWE1YjggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogJzU3NXB4Jykge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQ6IG5vbmUgIWltcG9ydGFudDtcclxuICAgICAgICAvLyBjb2xvcjogIzIxYTViOCAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuc3RhdCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IGNhZGV0Ymx1ZTtcclxuICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOmFsbCAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIC1tb3otdHJhbnNpdGlvbjphbGwgLjVzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAtby10cmFuc2l0aW9uOmFsbCAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgIHRyYW5zaXRpb246YWxsIC41cyBlYXNlLWluLW91dDtcclxuICAgICAgaDYge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgIH1cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgZm9udC1zaXplOjUwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMFxyXG4gICAgICB9XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIC13ZWJraXQtYm94LXNoYWRvdzozcHggM3B4IDEwcHggIzg4ODtcclxuICAgICAgICAtbW96LWJveC1zaGFkb3c6M3B4IDNweCAxMHB4ICM4ODg7XHJcbiAgICAgICAgLW8tYm94LXNoYWRvdzozcHggM3B4IDEwcHggIzg4ODtcclxuICAgICAgICBib3gtc2hhZG93OjNweCAzcHggMTBweCAjODg4O1xyXG4gICAgICB9XHJcbiAgICAgIGRpdiB7XHJcbiAgICAgICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICAgIH1cclxuICAgICAgYSB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgICAgY29sb3I6I2ZmZjtcclxuICAgICAgfVxyXG4gICAgICBpIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDoxMHB4O1xyXG4gICAgICAgIHRvcDoxOHB4O1xyXG4gICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAnNzY4cHgnKSBhbmQgKG1heC13aWR0aDogJzExOTlweCcpIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNGVtO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI1JSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuc3RfbWVtYmVyIHtcclxuICAgICAgYmFja2dyb3VuZDogIzM0OThkYjtcclxuICAgIH1cclxuICAgIC5zdF9wZW5kaW5nIHtcclxuICAgICAgYmFja2dyb3VuZDogI2MwMzkyYlxyXG4gICAgfVxyXG4gICAgLnN0X2l0ZW0ge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZDM1NDAwXHJcbiAgICB9XHJcbiAgICAuc3RfY29tbWVudCB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM4ZTQ0YWRcclxuICAgIH1cclxuICAgIC5zdF9pbnRlcmFjdGlvbnMge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjMjE4Yzc0XHJcbiAgICB9XHJcbiAgICAuc3RfY2xpZW50cyB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICM0MDQwN2FcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5sYXRlIHtcclxuICAgIC5jYXJkLWhlYWRlciB7XHJcbiAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXJcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxhdGVfaW5mbyB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNjY2M7XHJcbiAgICAgIHBhZGRpbmc6N3B4O1xyXG4gICAgICAmOm50aC1jaGlsZChvZGQpIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlXHJcbiAgICAgIH1cclxuICAgICAgJjpsYXN0LW9mLXR5cGUge1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206bm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1lbWJlcl9jb21tZW50IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICBzcGFuIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICAgICAgICBjb2xvcjogIzMyOWRlNTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgd2lkdGg6IDE0MHB4XHJcbiAgICAgIH1cclxuICAgICAgcCB7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNDBweCk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgbGVmdDogLTIwcHg7XHJcbiAgICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZWVlIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgYm9yZGVyLXdpZHRoOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvKiAtLS0gRW5kIERhc2hib2FyZCBQYWdlIC0tLSAqL1xyXG4gIC8qIC0tLSBTdGFydCBEYXNoYm9hcmQgUGFnZSAtLS0gKi9cclxuICAuaG9tZS1zdGF0IC5zdGF0IHtcclxuICAgIGJhY2tncm91bmQ6IGNhZGV0Ymx1ZTtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY29sb3I6I2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOmFsbCAuNXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246YWxsIC41cyBlYXNlLWluLW91dDtcclxuICAgIC1vLXRyYW5zaXRpb246YWxsIC41cyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246YWxsIC41cyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgLmhvbWUtc3RhdCAuc3RhdCBoNiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1zaXplOjE0cHg7XHJcbiAgfVxyXG4gIC5ob21lLXN0YXQgLnN0YXQgc3BhbiB7XHJcbiAgICBmb250LXNpemU6NTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDBcclxuICB9XHJcbiAgLmhvbWUtc3RhdCAuc3RhdDpob3ZlciB7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6M3B4IDNweCAxMHB4ICM4ODg7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6M3B4IDNweCAxMHB4ICM4ODg7XHJcbiAgICAtby1ib3gtc2hhZG93OjNweCAzcHggMTBweCAjODg4O1xyXG4gICAgYm94LXNoYWRvdzozcHggM3B4IDEwcHggIzg4ODtcclxuICB9XHJcbiAgLmhvbWUtc3RhdCAuc3RfY2F0ZWdvcmllcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMzQ5OGRiO1xyXG4gIH1cclxuICAuaG9tZS1zdGF0IC5zdF9wZW5kaW5nIHtcclxuICAgIGJhY2tncm91bmQ6ICMwMDgzODVcclxuICB9XHJcbiAgLmhvbWUtc3RhdCAuc3RfaXRlbSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZDM1NDAwXHJcbiAgfVxyXG4gIC5ob21lLXN0YXQgLnN0X2FuaW1lcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOGU0NGFkXHJcbiAgfVxyXG4gIC5ob21lLXN0YXQgLnN0X2VwaXNvZGVfY29taW5nX3Nvb24ge1xyXG4gICAgYmFja2dyb3VuZDogIzIxOGM3NFxyXG4gIH1cclxuICAuaG9tZS1zdGF0IC5zdF9jbGllbnRzIHtcclxuICAgIGJhY2tncm91bmQ6ICM0MDQwN2FcclxuICB9XHJcbiAgLmhvbWUtc3RhdCAuc3RhdCBkaXYge1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbiAgfVxyXG4gIC5ob21lLXN0YXQgLnN0YXQgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuICAgIGNvbG9yOiNmZmY7XHJcbiAgfVxyXG4gIC5ob21lLXN0YXQgLnN0YXQgaSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjEwcHg7XHJcbiAgICB0b3A6MThweDtcclxuICB9XHJcbiAgLmxhdGUgLmNhcmQtaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIH1cclxuICAubGF0ZSAuY2FyZC1oZWFkZXIgc3BhbiB7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIGN1cnNvcjogcG9pbnRlclxyXG4gIH1cclxuICAubGF0ZSAubGF0ZV9pbmZvIHtcclxuICAgIGJvcmRlci1ib3R0b206MXB4IHNvbGlkICNjY2M7XHJcbiAgICBwYWRkaW5nOjdweDtcclxuICB9XHJcbiAgLmxhdGUgLmxhdGVfaW5mbzpudGgtY2hpbGQob2RkKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZWVlXHJcbiAgfVxyXG4gIC5sYXRlIC5sYXRlX2luZm86bGFzdC1vZi10eXBlIHtcclxuICAgIGJvcmRlci1ib3R0b206bm9uZTtcclxuICB9XHJcbiAgLmxhdGUgLm1lbWJlcl9jb21tZW50IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW5cclxuICB9XHJcblxyXG4gIC5sYXRlIC5tZW1iZXJfY29tbWVudCBzcGFuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICAgIGNvbG9yOiAjMzI5ZGU1O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgd2lkdGg6IDE0MHB4XHJcbiAgfVxyXG5cclxuICAubGF0ZSAubWVtYmVyX2NvbW1lbnQgcCB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTQwcHgpO1xyXG4gICAgYmFja2dyb3VuZDogI2VlZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmVcclxuICB9XHJcblxyXG4gIC5sYXRlIC5tZW1iZXJfY29tbWVudCBwOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgbGVmdDogLTIwcHg7XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAjZWVlIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXdpZHRoOiAxMHB4O1xyXG4gIH1cclxuICAvKiAtLS0gRW5kIERhc2hib2FyZCBQYWdlIC0tLSAqL1xyXG4iLCIvKiAtLS0gU3RhcnQgRGFzaGJvYXJkIFBhZ2UgLS0tICovXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIGFuZCAobWF4LXdpZHRoOiA5OTFweCkge1xuICAuaG9tZS1zdGF0IGgxIHtcbiAgICBmb250LXNpemU6IDIuMnJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU3NnB4KSBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmhvbWUtc3RhdCBoMSB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTc1cHgpIHtcbiAgLmhvbWUtc3RhdCBoMSB7XG4gICAgZm9udC1zaXplOiAxLjhyZW07XG4gIH1cbn1cbi5ob21lLXN0YXQgLnN0YXQge1xuICBiYWNrZ3JvdW5kOiBjYWRldGJsdWU7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAtby10cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG59XG4uaG9tZS1zdGF0IC5zdGF0IGg2IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLmhvbWUtc3RhdCAuc3RhdCBzcGFuIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmhvbWUtc3RhdCAuc3RhdDpob3ZlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogM3B4IDNweCAxMHB4ICM4ODg7XG4gIC1tb3otYm94LXNoYWRvdzogM3B4IDNweCAxMHB4ICM4ODg7XG4gIC1vLWJveC1zaGFkb3c6IDNweCAzcHggMTBweCAjODg4O1xuICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggIzg4ODtcbn1cbi5ob21lLXN0YXQgLnN0YXQgZGl2IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLmhvbWUtc3RhdCAuc3RhdCBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5ob21lLXN0YXQgLnN0YXQgaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTBweDtcbiAgdG9wOiAxOHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gIC5ob21lLXN0YXQgLnN0YXQgaSB7XG4gICAgZm9udC1zaXplOiA0ZW07XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDI1JSk7XG4gIH1cbn1cbi5ob21lLXN0YXQgLnN0X21lbWJlciB7XG4gIGJhY2tncm91bmQ6ICMzNDk4ZGI7XG59XG4uaG9tZS1zdGF0IC5zdF9wZW5kaW5nIHtcbiAgYmFja2dyb3VuZDogI2MwMzkyYjtcbn1cbi5ob21lLXN0YXQgLnN0X2l0ZW0ge1xuICBiYWNrZ3JvdW5kOiAjZDM1NDAwO1xufVxuLmhvbWUtc3RhdCAuc3RfY29tbWVudCB7XG4gIGJhY2tncm91bmQ6ICM4ZTQ0YWQ7XG59XG4uaG9tZS1zdGF0IC5zdF9pbnRlcmFjdGlvbnMge1xuICBiYWNrZ3JvdW5kOiAjMjE4Yzc0O1xufVxuLmhvbWUtc3RhdCAuc3RfY2xpZW50cyB7XG4gIGJhY2tncm91bmQ6ICM0MDQwN2E7XG59XG5cbi5sYXRlIC5jYXJkLWhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5sYXRlIC5jYXJkLWhlYWRlciBzcGFuIHtcbiAgY29sb3I6ICM5OTk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5sYXRlIC5sYXRlX2luZm8ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZzogN3B4O1xufVxuLmxhdGUgLmxhdGVfaW5mbzpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQ6ICNlZWU7XG59XG4ubGF0ZSAubGF0ZV9pbmZvOmxhc3Qtb2YtdHlwZSB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG4ubGF0ZSAubWVtYmVyX2NvbW1lbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4ubGF0ZSAubWVtYmVyX2NvbW1lbnQgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogNnB4IDEwcHg7XG4gIGNvbG9yOiAjMzI5ZGU1O1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdpZHRoOiAxNDBweDtcbn1cbi5sYXRlIC5tZW1iZXJfY29tbWVudCBwIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICB3aWR0aDogY2FsYygxMDAlIC0gMTQwcHgpO1xuICBiYWNrZ3JvdW5kOiAjZWVlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubGF0ZSAubWVtYmVyX2NvbW1lbnQgcDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogLTIwcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2VlZSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXdpZHRoOiAxMHB4O1xufVxuXG4vKiAtLS0gRW5kIERhc2hib2FyZCBQYWdlIC0tLSAqL1xuLyogLS0tIFN0YXJ0IERhc2hib2FyZCBQYWdlIC0tLSAqL1xuLmhvbWUtc3RhdCAuc3RhdCB7XG4gIGJhY2tncm91bmQ6IGNhZGV0Ymx1ZTtcbiAgcGFkZGluZzogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcbn1cblxuLmhvbWUtc3RhdCAuc3RhdCBoNiB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLmhvbWUtc3RhdCAuc3RhdCBzcGFuIHtcbiAgZm9udC1zaXplOiA1MHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uaG9tZS1zdGF0IC5zdGF0OmhvdmVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAzcHggM3B4IDEwcHggIzg4ODtcbiAgLW1vei1ib3gtc2hhZG93OiAzcHggM3B4IDEwcHggIzg4ODtcbiAgLW8tYm94LXNoYWRvdzogM3B4IDNweCAxMHB4ICM4ODg7XG4gIGJveC1zaGFkb3c6IDNweCAzcHggMTBweCAjODg4O1xufVxuXG4uaG9tZS1zdGF0IC5zdF9jYXRlZ29yaWVzIHtcbiAgYmFja2dyb3VuZDogIzM0OThkYjtcbn1cblxuLmhvbWUtc3RhdCAuc3RfcGVuZGluZyB7XG4gIGJhY2tncm91bmQ6ICMwMDgzODU7XG59XG5cbi5ob21lLXN0YXQgLnN0X2l0ZW0ge1xuICBiYWNrZ3JvdW5kOiAjZDM1NDAwO1xufVxuXG4uaG9tZS1zdGF0IC5zdF9hbmltZXMge1xuICBiYWNrZ3JvdW5kOiAjOGU0NGFkO1xufVxuXG4uaG9tZS1zdGF0IC5zdF9lcGlzb2RlX2NvbWluZ19zb29uIHtcbiAgYmFja2dyb3VuZDogIzIxOGM3NDtcbn1cblxuLmhvbWUtc3RhdCAuc3RfY2xpZW50cyB7XG4gIGJhY2tncm91bmQ6ICM0MDQwN2E7XG59XG5cbi5ob21lLXN0YXQgLnN0YXQgZGl2IHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uaG9tZS1zdGF0IC5zdGF0IGEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uaG9tZS1zdGF0IC5zdGF0IGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEwcHg7XG4gIHRvcDogMThweDtcbn1cblxuLmxhdGUgLmNhcmQtaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubGF0ZSAuY2FyZC1oZWFkZXIgc3BhbiB7XG4gIGNvbG9yOiAjOTk5O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sYXRlIC5sYXRlX2luZm8ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZzogN3B4O1xufVxuXG4ubGF0ZSAubGF0ZV9pbmZvOm50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZDogI2VlZTtcbn1cblxuLmxhdGUgLmxhdGVfaW5mbzpsYXN0LW9mLXR5cGUge1xuICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4ubGF0ZSAubWVtYmVyX2NvbW1lbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5sYXRlIC5tZW1iZXJfY29tbWVudCBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiA2cHggMTBweDtcbiAgY29sb3I6ICMzMjlkZTU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgd2lkdGg6IDE0MHB4O1xufVxuXG4ubGF0ZSAubWVtYmVyX2NvbW1lbnQgcCB7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE0MHB4KTtcbiAgYmFja2dyb3VuZDogI2VlZTtcbiAgcGFkZGluZzogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubGF0ZSAubWVtYmVyX2NvbW1lbnQgcDpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIHRvcDogMTBweDtcbiAgbGVmdDogLTIwcHg7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2VlZSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLXdpZHRoOiAxMHB4O1xufVxuXG4vKiAtLS0gRW5kIERhc2hib2FyZCBQYWdlIC0tLSAqLyJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ListMoviesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-list-movies',
                templateUrl: './list-movies.component.html',
                styleUrls: ['./list-movies.component.scss'],
                providers: [src_app_theme_components__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]]
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/list-movies/movies-routing.module.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/list-movies/movies-routing.module.ts ***!
  \************************************************************/
/*! exports provided: MoviesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesRoutingModule", function() { return MoviesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_all_categories_all_categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/all-categories/all-categories.component */ "./src/app/pages/list-movies/components/all-categories/all-categories.component.ts");
/* harmony import */ var _components_all_movies_all_movies_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/all-movies/all-movies.component */ "./src/app/pages/list-movies/components/all-movies/all-movies.component.ts");
/* harmony import */ var _components_category_movies_category_movies_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/category-movies/category-movies.component */ "./src/app/pages/list-movies/components/category-movies/category-movies.component.ts");
/* harmony import */ var _components_edit_movie_edit_movie_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/edit-movie/edit-movie.component */ "./src/app/pages/list-movies/components/edit-movie/edit-movie.component.ts");
/* harmony import */ var _components_new_movie_new_movie_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/new-movie/new-movie.component */ "./src/app/pages/list-movies/components/new-movie/new-movie.component.ts");
/* harmony import */ var _list_movies_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list-movies.component */ "./src/app/pages/list-movies/list-movies.component.ts");










const routes = [
    { path: '', component: _list_movies_component__WEBPACK_IMPORTED_MODULE_7__["ListMoviesComponent"] },
    { path: 'all', component: _components_all_movies_all_movies_component__WEBPACK_IMPORTED_MODULE_3__["AllMoviesComponent"] },
    { path: 'add', component: _components_new_movie_new_movie_component__WEBPACK_IMPORTED_MODULE_6__["NewMovieComponent"] },
    { path: 'edit/:id', component: _components_edit_movie_edit_movie_component__WEBPACK_IMPORTED_MODULE_5__["EditMovieComponent"] },
    { path: 'categories', component: _components_all_categories_all_categories_component__WEBPACK_IMPORTED_MODULE_2__["AllCategoriesComponent"] },
    { path: 'categories/:id', component: _components_category_movies_category_movies_component__WEBPACK_IMPORTED_MODULE_4__["CategoryMoviesComponent"] },
    { path: 'dashboard', redirectTo: '', pathMatch: 'full' }
];
class MoviesRoutingModule {
}
MoviesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MoviesRoutingModule });
MoviesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MoviesRoutingModule_Factory(t) { return new (t || MoviesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MoviesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/list-movies/movies.module.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/list-movies/movies.module.ts ***!
  \****************************************************/
/*! exports provided: MoviesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesModule", function() { return MoviesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/@theme/theme.module */ "./src/app/@theme/theme.module.ts");
/* harmony import */ var _movies_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies-routing.module */ "./src/app/pages/list-movies/movies-routing.module.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _store_movies_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/movies.reducer */ "./src/app/pages/list-movies/store/movies.reducer.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var _list_movies_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./list-movies.component */ "./src/app/pages/list-movies/list-movies.component.ts");
/* harmony import */ var _components_new_movie_new_movie_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/new-movie/new-movie.component */ "./src/app/pages/list-movies/components/new-movie/new-movie.component.ts");
/* harmony import */ var _components_all_movies_all_movies_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/all-movies/all-movies.component */ "./src/app/pages/list-movies/components/all-movies/all-movies.component.ts");
/* harmony import */ var _store_movies_effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/movies.effects */ "./src/app/pages/list-movies/store/movies.effects.ts");
/* harmony import */ var _components_edit_movie_edit_movie_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/edit-movie/edit-movie.component */ "./src/app/pages/list-movies/components/edit-movie/edit-movie.component.ts");
/* harmony import */ var _components_all_categories_all_categories_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/all-categories/all-categories.component */ "./src/app/pages/list-movies/components/all-categories/all-categories.component.ts");
/* harmony import */ var _components_category_movies_category_movies_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/category-movies/category-movies.component */ "./src/app/pages/list-movies/components/category-movies/category-movies.component.ts");
















class MoviesModule {
}
MoviesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MoviesModule });
MoviesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MoviesModule_Factory(t) { return new (t || MoviesModule)(); }, imports: [[
            src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"],
            _movies_routing_module__WEBPACK_IMPORTED_MODULE_2__["MoviesRoutingModule"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(_store_movies_reducer__WEBPACK_IMPORTED_MODULE_4__["moviesFeatureKey"], _store_movies_reducer__WEBPACK_IMPORTED_MODULE_4__["reducer"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forFeature([_store_movies_effects__WEBPACK_IMPORTED_MODULE_9__["MoviesEffects"]])
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MoviesModule, { declarations: [_components_all_movies_all_movies_component__WEBPACK_IMPORTED_MODULE_8__["AllMoviesComponent"],
        _list_movies_component__WEBPACK_IMPORTED_MODULE_6__["ListMoviesComponent"],
        _components_new_movie_new_movie_component__WEBPACK_IMPORTED_MODULE_7__["NewMovieComponent"],
        _components_edit_movie_edit_movie_component__WEBPACK_IMPORTED_MODULE_10__["EditMovieComponent"],
        _components_all_categories_all_categories_component__WEBPACK_IMPORTED_MODULE_11__["AllCategoriesComponent"],
        _components_category_movies_category_movies_component__WEBPACK_IMPORTED_MODULE_12__["CategoryMoviesComponent"]], imports: [src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"],
        _movies_routing_module__WEBPACK_IMPORTED_MODULE_2__["MoviesRoutingModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreFeatureModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsFeatureModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_all_movies_all_movies_component__WEBPACK_IMPORTED_MODULE_8__["AllMoviesComponent"],
                    _list_movies_component__WEBPACK_IMPORTED_MODULE_6__["ListMoviesComponent"],
                    _components_new_movie_new_movie_component__WEBPACK_IMPORTED_MODULE_7__["NewMovieComponent"],
                    _components_edit_movie_edit_movie_component__WEBPACK_IMPORTED_MODULE_10__["EditMovieComponent"],
                    _components_all_categories_all_categories_component__WEBPACK_IMPORTED_MODULE_11__["AllCategoriesComponent"],
                    _components_category_movies_category_movies_component__WEBPACK_IMPORTED_MODULE_12__["CategoryMoviesComponent"]
                ],
                imports: [
                    src_app_theme_theme_module__WEBPACK_IMPORTED_MODULE_1__["ThemeModule"],
                    _movies_routing_module__WEBPACK_IMPORTED_MODULE_2__["MoviesRoutingModule"],
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forFeature(_store_movies_reducer__WEBPACK_IMPORTED_MODULE_4__["moviesFeatureKey"], _store_movies_reducer__WEBPACK_IMPORTED_MODULE_4__["reducer"]),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forFeature([_store_movies_effects__WEBPACK_IMPORTED_MODULE_9__["MoviesEffects"]])
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/list-movies/services/movies.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/list-movies/services/movies.service.ts ***!
  \**************************************************************/
/*! exports provided: MoviesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesService", function() { return MoviesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _AdminConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../AdminConfig */ "./src/app/pages/AdminConfig.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class MoviesService {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    getListMovies() {
        return this.httpClient.get(_AdminConfig__WEBPACK_IMPORTED_MODULE_1__["AdminConfig"].moviesAPI);
    }
    getMoviesCategories() {
        return this.httpClient.get(_AdminConfig__WEBPACK_IMPORTED_MODULE_1__["AdminConfig"].moviesCategoriesAPI);
    }
    getMoviesByCategoryId(categoryId) {
        return this.httpClient.get(`${_AdminConfig__WEBPACK_IMPORTED_MODULE_1__["AdminConfig"].categoryMoviesAPI}/${categoryId}`);
    }
    getMovieDetails(movieId) {
        return this.httpClient.get(`${_AdminConfig__WEBPACK_IMPORTED_MODULE_1__["AdminConfig"].moviesAPI}/${movieId}`);
    }
    newMovie(data) {
        return this.httpClient.post(_AdminConfig__WEBPACK_IMPORTED_MODULE_1__["AdminConfig"].moviesAPI, data);
    }
    updateMovie(movieId, data) {
        return this.httpClient.put(`${_AdminConfig__WEBPACK_IMPORTED_MODULE_1__["AdminConfig"].moviesAPI}/${movieId}`, JSON.stringify(data));
    }
    deleteMovie(id) {
        return this.httpClient.delete(`${_AdminConfig__WEBPACK_IMPORTED_MODULE_1__["AdminConfig"].moviesAPI}/${id}`);
    }
    //Upload Image
    uploadImage(image) {
        const formData = new FormData();
        formData.append('image', image);
        return this.httpClient.post(_AdminConfig__WEBPACK_IMPORTED_MODULE_1__["AdminConfig"].generalUploadAPI, formData);
    }
}
MoviesService.ɵfac = function MoviesService_Factory(t) { return new (t || MoviesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
MoviesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MoviesService, factory: MoviesService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/list-movies/store/movies.actions.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/list-movies/store/movies.actions.ts ***!
  \***********************************************************/
/*! exports provided: loadMovies, loadMoviesSuccess, loadMoviesFailure, loadMovie, loadMovieSuccess, loadMovieFailure, addMovie, addMovieSuccess, addMovieFailure, loadCategories, loadCategoriesSuccess, loadCategoriesFailure, loadMovieByCategoryId, loadMovieByCategoryIdSuccess, loadMovieByCategoryIdFailure, updateMovie, updateMovieSuccess, updateMovieFailure, deleteMovie, deleteMovieSuccess, deleteMovieFailure */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMovies", function() { return loadMovies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMoviesSuccess", function() { return loadMoviesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMoviesFailure", function() { return loadMoviesFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMovie", function() { return loadMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMovieSuccess", function() { return loadMovieSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMovieFailure", function() { return loadMovieFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMovie", function() { return addMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMovieSuccess", function() { return addMovieSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addMovieFailure", function() { return addMovieFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCategories", function() { return loadCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCategoriesSuccess", function() { return loadCategoriesSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadCategoriesFailure", function() { return loadCategoriesFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMovieByCategoryId", function() { return loadMovieByCategoryId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMovieByCategoryIdSuccess", function() { return loadMovieByCategoryIdSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadMovieByCategoryIdFailure", function() { return loadMovieByCategoryIdFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMovie", function() { return updateMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMovieSuccess", function() { return updateMovieSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMovieFailure", function() { return updateMovieFailure; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMovie", function() { return deleteMovie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMovieSuccess", function() { return deleteMovieSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteMovieFailure", function() { return deleteMovieFailure; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");

const loadMovies = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Movies/API] Load Movies');
const loadMoviesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Movies/API] Load Movies Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadMoviesFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Movies/API] Load Movies Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadMovie = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Movies/API] Load Movie', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadMovieSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Movies/API] Load Movie Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadMovieFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Movies/API] Load Movie Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addMovie = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Movies/API] Add Movie', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const addMovieSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Movies/API] Add Movie Success');
const addMovieFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Movies/API] Add Movie Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadCategories = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Movies/API] Load Categories');
const loadCategoriesSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Movies/API] Load Categories Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadCategoriesFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Movies/API] Load Categories Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadMovieByCategoryId = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Movies/API] Load Movies By Category Id', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadMovieByCategoryIdSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Movies/API] Load Movies By Category Id Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadMovieByCategoryIdFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Movies/API] Load Movies By Category Id Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateMovie = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Movies/API] Update Movie', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateMovieSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Movies/API] Update Movie Success');
const updateMovieFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Movies/API] Update Movie Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteMovie = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Movies/API] Delete Movie', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteMovieSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Movies/API] Delete Movie Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteMovieFailure = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Movies/API] Delete Movie Failure', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/pages/list-movies/store/movies.effects.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/list-movies/store/movies.effects.ts ***!
  \***********************************************************/
/*! exports provided: MoviesEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoviesEffects", function() { return MoviesEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var _movies_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies.actions */ "./src/app/pages/list-movies/store/movies.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _services_movies_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/movies.service */ "./src/app/pages/list-movies/services/movies.service.ts");











class MoviesEffects {
    constructor(actions$, store, router, toasterService, activatedRouter, moviesService) {
        this.actions$ = actions$;
        this.store = store;
        this.router = router;
        this.toasterService = toasterService;
        this.activatedRouter = activatedRouter;
        this.moviesService = moviesService;
        this.loadListMoviesEffect$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_movies_actions__WEBPACK_IMPORTED_MODULE_2__["loadMovies"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this.moviesService.getListMovies()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => _movies_actions__WEBPACK_IMPORTED_MODULE_2__["loadMoviesSuccess"]({ message: response.message })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_movies_actions__WEBPACK_IMPORTED_MODULE_2__["loadMoviesFailure"]({ error })))))));
        this.loadListCategoriesEffect$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_movies_actions__WEBPACK_IMPORTED_MODULE_2__["loadCategories"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this.moviesService.getMoviesCategories()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => _movies_actions__WEBPACK_IMPORTED_MODULE_2__["loadCategoriesSuccess"]({ message: response.message })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_movies_actions__WEBPACK_IMPORTED_MODULE_2__["loadCategoriesFailure"]({ error })))))));
        this.loadCategoryMovies$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_movies_actions__WEBPACK_IMPORTED_MODULE_2__["loadMovieByCategoryId"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(action => this.moviesService.getMoviesByCategoryId(+action.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            return _movies_actions__WEBPACK_IMPORTED_MODULE_2__["loadMovieByCategoryIdSuccess"]({ message: response.message });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_movies_actions__WEBPACK_IMPORTED_MODULE_2__["loadMovieByCategoryIdFailure"](error)))))));
        this.loadMovie$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_movies_actions__WEBPACK_IMPORTED_MODULE_2__["loadMovie"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(action => this.moviesService.getMovieDetails(+action.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            return _movies_actions__WEBPACK_IMPORTED_MODULE_2__["loadMovieSuccess"]({ message: response.message });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_movies_actions__WEBPACK_IMPORTED_MODULE_2__["loadMovieFailure"](error)))))));
        this.newMovieEffect$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_movies_actions__WEBPACK_IMPORTED_MODULE_2__["addMovie"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["exhaustMap"])(action => this.moviesService.newMovie(+action.data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            this.toasterService.success('Your Movie Successfully Created');
            return _movies_actions__WEBPACK_IMPORTED_MODULE_2__["addMovieSuccess"]();
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_movies_actions__WEBPACK_IMPORTED_MODULE_2__["addMovieFailure"]({ error })))))));
        this.redirectNewMovieEffect$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_movies_actions__WEBPACK_IMPORTED_MODULE_2__["addMovieSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(res => this.router.navigate(['../'], { relativeTo: this.activatedRouter }))), { dispatch: false });
        this.deleteMovie$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_movies_actions__WEBPACK_IMPORTED_MODULE_2__["deleteMovie"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(action => this.moviesService.deleteMovie(action.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(response => {
            this.toasterService.success('Your Movie Successfully Deleted');
            this.store.dispatch(_movies_actions__WEBPACK_IMPORTED_MODULE_2__["loadMovies"]());
            return _movies_actions__WEBPACK_IMPORTED_MODULE_2__["deleteMovieSuccess"]({ id: action.id });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(error => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(_movies_actions__WEBPACK_IMPORTED_MODULE_2__["deleteMovieFailure"]({ error })))))));
        this.updateMovie$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_movies_actions__WEBPACK_IMPORTED_MODULE_2__["updateMovie"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["concatMap"])(action => this.moviesService.updateMovie(+action.data.id, action.data.changes)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(res => {
            this.toasterService.success('Your Movie Successfully Updated');
            return this.router.navigate(['/all']);
        })), { dispatch: false } // We Must Use Dispatch To False To Work Correctly
        );
    }
}
MoviesEffects.ɵfac = function MoviesEffects_Factory(t) { return new (t || MoviesEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_movies_service__WEBPACK_IMPORTED_MODULE_8__["MoviesService"])); };
MoviesEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MoviesEffects, factory: MoviesEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MoviesEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_5__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"] }, { type: _services_movies_service__WEBPACK_IMPORTED_MODULE_8__["MoviesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/list-movies/store/movies.reducer.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/list-movies/store/movies.reducer.ts ***!
  \***********************************************************/
/*! exports provided: moviesFeatureKey, adapter, initialState, reducer, selectIds, selectEntities, selectAll, selectTotal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moviesFeatureKey", function() { return moviesFeatureKey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adapter", function() { return adapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIds", function() { return selectIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectEntities", function() { return selectEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectAll", function() { return selectAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectTotal", function() { return selectTotal; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/__ivy_ngcc__/fesm2015/ngrx-entity.js");
/* harmony import */ var _movies_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./movies.actions */ "./src/app/pages/list-movies/store/movies.actions.ts");



const moviesFeatureKey = 'movies';
const adapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_1__["createEntityAdapter"])();
const initialState = adapter.getInitialState({
    // additional entity state properties
    message: undefined,
    categoryMovies: undefined,
    categories: undefined,
    movieDetails: undefined,
    error: undefined
});
const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_movies_actions__WEBPACK_IMPORTED_MODULE_2__["loadMoviesSuccess"], (state, action) => {
    return Object.assign(Object.assign({}, state), { message: action.message });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_movies_actions__WEBPACK_IMPORTED_MODULE_2__["loadMovieSuccess"], (state, action) => {
    return Object.assign(Object.assign({}, state), { movieDetails: action.message });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_movies_actions__WEBPACK_IMPORTED_MODULE_2__["loadCategoriesSuccess"], (state, action) => {
    return Object.assign(Object.assign({}, state), { categories: action.message });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_movies_actions__WEBPACK_IMPORTED_MODULE_2__["loadMovieByCategoryIdSuccess"], (state, action) => {
    return Object.assign(Object.assign({}, state), { categoryMovies: action.message });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_movies_actions__WEBPACK_IMPORTED_MODULE_2__["addMovie"], (state, action) => adapter.addOne(action.data, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_movies_actions__WEBPACK_IMPORTED_MODULE_2__["addMovieFailure"], (state, action) => {
    return Object.assign(Object.assign({}, state), { error: action.error });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_movies_actions__WEBPACK_IMPORTED_MODULE_2__["deleteMovieSuccess"], (state, action) => adapter.removeOne(action.id, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_movies_actions__WEBPACK_IMPORTED_MODULE_2__["deleteMovieFailure"], (state, action) => {
    return Object.assign(Object.assign({}, state), { error: action.error });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_movies_actions__WEBPACK_IMPORTED_MODULE_2__["updateMovie"], (state, action) => adapter.updateOne(action.data, state)));
const { selectIds, selectEntities, selectAll, selectTotal, } = adapter.getSelectors();


/***/ }),

/***/ "./src/app/pages/list-movies/store/movies.selector.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/list-movies/store/movies.selector.ts ***!
  \************************************************************/
/*! exports provided: getListMoviesSelector, getListCategoiresSelector, getMoviesByCategoryIdSelector, getMovieDetailsSelector, getListMoviesErrorSelector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListMoviesSelector", function() { return getListMoviesSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListCategoiresSelector", function() { return getListCategoiresSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMoviesByCategoryIdSelector", function() { return getMoviesByCategoryIdSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMovieDetailsSelector", function() { return getMovieDetailsSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getListMoviesErrorSelector", function() { return getListMoviesErrorSelector; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
/* harmony import */ var _movies_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movies.reducer */ "./src/app/pages/list-movies/store/movies.reducer.ts");


const listMoviesFeatureState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])(_movies_reducer__WEBPACK_IMPORTED_MODULE_1__["moviesFeatureKey"]);
const getListMoviesSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(listMoviesFeatureState, (state) => state.message);
const getListCategoiresSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(listMoviesFeatureState, (state) => state.categories);
const getMoviesByCategoryIdSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(listMoviesFeatureState, (state) => state.categoryMovies);
const getMovieDetailsSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(listMoviesFeatureState, (state) => state.movieDetails);
const getListMoviesErrorSelector = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(listMoviesFeatureState, (state) => state.error);


/***/ })

}]);
//# sourceMappingURL=list-movies-movies-module-es2015.js.map