(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./auth_config.json":
/*!**************************!*\
  !*** ./auth_config.json ***!
  \**************************/
/*! exports provided: clientId, domain, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"clientId\":\"N7z6SDZ8D8LwJRL47vIFq626uzbulXNv\",\"domain\":\"dev-51sjkzh3.auth0.com\"}");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar>\n    ABOUT ME\n </mat-toolbar>\n <mat-card>   \n    <mat-card-content>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore\n        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut\n        aliquip ex ea commodo consequat. Excepteur sint\n        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum\n        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut\n        enim ad minim veniam, quis nostrud exercitation ullamco\n        laboris nisi ut aliquip ex ea commodo consequat.\n    </mat-card-content>   \n </mat-card>\n <p>\n     &nbsp;\n </p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"column\" fxFlexFill><app-layout>\n    <mat-sidenav-container>\n      <mat-sidenav #sidenav role=\"navigation\">\n        <app-sidenav-list (sidenavClose)=\"sidenav.close()\"></app-sidenav-list>\n      </mat-sidenav>\n      <mat-sidenav-content>\n        <app-header (sidenavToggle)=\"sidenav.toggle()\"></app-header>\n        <main>\n          <router-outlet></router-outlet>\n        </main>\n        <app-footer (sidenavToggle)=\"sidenav.toggle()\"></app-footer>\n      </mat-sidenav-content>\n    </mat-sidenav-container>\n  </app-layout>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog-content-edit/blog-content-edit.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog-content-edit/blog-content-edit.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"margin:20px;\">\n  <div class=\"button-row\">\n    <a mat-raised-button color=\"primary\" (click)=\"allBlogContent()\">\n      <mat-icon>list</mat-icon>\n    </a>\n  </div>\n  <form [formGroup]=\"blogContentForm\" (ngSubmit)=\"onFormSubmit(blogContentForm.value)\">\n    <div style=\"margin-top:30px; margin-bottom:10px;\" class=\"example-full-width\">\n      <mat-checkbox after=\"true\" [checked]=\"false\" formControlName=\"currentBlog\">Current Blog\n      </mat-checkbox>\n    </div>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Image\" formControlName=\"image\">\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Title\" formControlName=\"title\" [errorStateMatcher]=\"matcher\">\n      <mat-error>\n        <span *ngIf=\"!blogContentForm.get('title').valid && blogContentForm.get('title').touched\">Please enter Blog\n          Content Title</span>\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <input matInput placeholder=\"Category\" formControlName=\"category\" [errorStateMatcher]=\"matcher\">\n      <mat-error>\n        <span *ngIf=\"!blogContentForm.get('category').valid && blogContentForm.get('category').touched\">Please enter\n          Blog\n          Content Category</span>\n      </mat-error>\n    </mat-form-field>\n    <mat-form-field class=\"example-full-width\">\n      <textarea matInput placeholder=\"Content\" formControlName=\"content\" [errorStateMatcher]=\"matcher\"></textarea>\n      <mat-error>\n        <span *ngIf=\"!blogContentForm.get('content').valid && blogContentForm.get('content').touched\">Please enter Blog\n          Content Text</span>\n      </mat-error>\n    </mat-form-field>\n    <div class=\"button-row\">\n      <button type=\"submit\" [disabled]=\"!blogContentForm.valid\" mat-raised-button color=\"primary\">\n        <mat-icon>save</mat-icon>\n      </button>\n      &nbsp;&nbsp;<input type=\"file\" name=\"photo\" ng2FileSelect [uploader]=\"uploader\" />\n      <button mat-raised-button [disabled]=\"!uploader.getNotUploadedItems().length\" (click)=\"uploader.uploadAll()\">\n        Upload Image\n      </button>\n      <button mat-button (click)=\"returnToAllBlogContent()\">\n          RETURN\n      </button>\n    </div>\n  </form>\n  <div style=\"margin:30px;\">\n   &nbsp;\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog-content-list/blog-content-list.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog-content-list/blog-content-list.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"margin:20px;\">\n  <div class=\"button-row\">\n    <a mat-raised-button color=\"primary\" [routerLink]=\"['/content']\">\n      <mat-icon>list</mat-icon>\n    </a>\n  </div>\n  <table mat-table #table [dataSource]=\"dataSource\">\n    <ng-container matColumnDef=\"image\">\n      <th mat-header-cell *matHeaderCellDef> Image </th>\n      <td mat-cell *matCellDef=\"let element\">{{element.image}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"title\">\n      <th mat-header-cell *matHeaderCellDef> Title </th>\n      <td mat-cell *matCellDef=\"let element\">{{element.title}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"category\">\n      <th mat-header-cell *matHeaderCellDef> Category </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.category}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"content\">\n      <th mat-header-cell *matHeaderCellDef> Content </th>\n      <td mat-cell *matCellDef=\"let element\"> {{element.content}} </td>\n    </ng-container>\n    <ng-container matColumnDef=\"edit\">\n      <th mat-header-cell *matHeaderCellDef> </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <a class=\"iconLink\" [routerLink]=\"['/contentEdit/', element._id]\">\n          <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n        </a>\n      </td>\n    </ng-container>\n    <ng-container matColumnDef=\"delete\">\n      <th mat-header-cell *matHeaderCellDef> </th>\n      <td mat-cell *matCellDef=\"let element\">\n        <a class=\"iconLink\" href=\"#\" (click)=\"deleteItem(element._id)\">\n          <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n        </a>\n      </td>\n    </ng-container>\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let element; columns: displayedColumns;\" [routerLink]=\"['/contentEdit/', element._id]\"></tr>\n  </table>\n  <div style=\"margin:20px;\">\n    &nbsp;\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog-content/blog-content.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog-content/blog-content.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar>\n  <span>Add Blog Content</span>\n</mat-toolbar>\n<div style=\"margin:20px;\">\n<form [formGroup]=\"blogContentForm\" (ngSubmit)=\"onFormSubmit(blogContentForm.value)\">   \n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Title\" formControlName=\"title\" [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!blogContentForm.get('title').valid && blogContentForm.get('title').touched\">Please enter the Blog\n        Title</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <input matInput placeholder=\"Category\" formControlName=\"category\" [errorStateMatcher]=\"matcher\">\n    <mat-error>\n      <span *ngIf=\"!blogContentForm.get('category').valid && blogContentForm.get('category').touched\">Please enter the\n        Blog Category</span>\n    </mat-error>\n  </mat-form-field>\n  <mat-form-field class=\"example-full-width\">\n    <textarea matInput cdkTextareaAutosize cdkAutosizeMinRows=\"5\" cdkAutosizeMaxRows=\"7\" placeholder=\"Content\"\n      formControlName=\"content\" [errorStateMatcher]=\"matcher\"></textarea>\n    <mat-error>\n      <span *ngIf=\"!blogContentForm.get('content').valid && blogContentForm.get('content').touched\">Please enter the\n        Blog Content</span>\n    </mat-error>\n  </mat-form-field>\n  <div class=\"button-row\">\n    <button type=\"submit\" [disabled]=\"!blogContentForm.valid\" mat-raised-button color=\"primary\">\n      <mat-icon>save</mat-icon>\n    </button>\n    &nbsp;&nbsp;<input type=\"file\" name=\"photo\" ng2FileSelect [uploader]=\"uploader\" />\n    <button mat-raised-button [disabled]=\"!uploader.getNotUploadedItems().length\" (click)=\"uploader.uploadAll()\">\n      Upload Image</button>\n    <!-- &nbsp;&nbsp;<app-upload></app-upload>  -->\n  </div>\n</form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog-gallery/blog-gallery.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blog-gallery/blog-gallery.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout fxLayout.xs=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"5px\" fxLayoutGap.xs=\"0\">\n  <div fxFlex=\"25%\">\n    <mat-card>\n      <mat-card-title>1830 Brighton Penny Post</mat-card-title>\n      <mat-card-content>\n        <img mat-card-image class=\"img\" src=\"../assets/images/1830 Brighton Penny Post.jpg\">\n      </mat-card-content>\n      <mat-card-footer><a href=\"#\" onclick=\"return false;\">Details...</a></mat-card-footer>\n    </mat-card>\n  </div>\n  <div fxFlex=\"25%\">\n    <mat-card>\n      <mat-card-title>1841 Maltese Cross</mat-card-title>\n      <mat-card-content>\n        <img mat-card-image class=\"img\" src=\"../assets/images/1841 Maltese Cross.jpg\">\n      </mat-card-content>\n      <mat-card-footer><a href=\"#\" onclick=\"return false;\">Details...</a></mat-card-footer>\n    </mat-card>\n  </div>\n  <div fxFlex=\"25%\">\n    <mat-card>\n      <mat-card-title>Milwaukee Precancel Error</mat-card-title>\n      <mat-card-content>\n        <img mat-card-image class=\"img\" src=\"../assets/images/Milwaukee Precancel Error.jpg\">\n      </mat-card-content>\n      <mat-card-footer><a href=\"#\" onclick=\"return false;\">Details...</a></mat-card-footer>\n    </mat-card>\n  </div>\n  <div fxFlex=\"25%\">\n    <mat-card>\n      <mat-card-title>GLYN Perfin</mat-card-title>\n      <mat-card-content>\n        <img mat-card-image class=\"img\" src=\"../assets/images/GLYN Perfin.jpg\">\n      </mat-card-content>\n      <mat-card-footer><a href=\"#\" onclick=\"return false;\">Details...</a></mat-card-footer>\n    </mat-card>\n  </div>\n</div>\n<br />\n<div fxLayout fxLayout.xs=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"5px\" fxLayoutGap.xs=\"0\">\n  <div fxFlex=\"25%\">\n    <mat-card>\n      <mat-card-title>1872 London EC Duplex</mat-card-title>\n      <mat-card-content>\n        <img mat-card-image class=\"img\" src=\"../assets/images/1872 London EC Duplex.jpg\">\n      </mat-card-content>\n      <mat-card-footer><a href=\"#\" onclick=\"return false;\">Details...</a></mat-card-footer>\n    </mat-card>\n  </div>\n  <div fxFlex=\"25%\">\n    <mat-card>\n      <mat-card-title>Q000.6 front</mat-card-title>\n      <mat-card-content>\n        <img mat-card-image class=\"img\" src=\"../assets/images/Q000.6 front.jpg\">\n      </mat-card-content>\n      <mat-card-footer><a href=\"#\" onclick=\"return false;\">Details...</a></mat-card-footer>\n    </mat-card>\n  </div>\n  <div fxFlex=\"25%\">\n    <mat-card>\n      <mat-card-title>Rare 48ED29</mat-card-title>\n      <mat-card-content>\n        <img mat-card-image class=\"img\" src=\"../assets/images/Rare 48ED29.jpg\">\n      </mat-card-content>\n      <mat-card-footer><a href=\"#\" onclick=\"return false;\">Details...</a></mat-card-footer>\n    </mat-card>\n  </div>\n  <div fxFlex=\"25%\">\n    <mat-card>\n      <mat-card-title>N048.5I NCH Perfin 1870</mat-card-title>\n      <mat-card-content>\n        <img mat-card-image class=\"img\" src=\"../assets/images/N048.5I NCH Perfin 1870.jpg\">\n      </mat-card-content>\n      <mat-card-footer><a href=\"#\" onclick=\"return false;\">Details...</a></mat-card-footer>\n    </mat-card>\n  </div>\n</div>\n<br />\n<div fxLayout fxLayout.xs=\"column\" fxLayoutAlign=\"center\" fxLayoutGap=\"5px\" fxLayoutGap.xs=\"0\">\n  <div fxFlex=\"25%\">\n    <mat-card>\n      <mat-card-title>Image</mat-card-title>\n      <mat-card-content>\n        <img mat-card-image class=\"img\" src=\"\" alt=\"&nbsp;photo\">\n      </mat-card-content>\n      <mat-card-footer><a href=\"#\" onclick=\"return false;\">Details...</a></mat-card-footer>\n    </mat-card>\n  </div>\n  <div fxFlex=\"25%\">\n    <mat-card>\n      <mat-card-title>Image</mat-card-title>\n      <mat-card-content>\n        <img mat-card-image class=\"img\" src=\"\" alt=\"&nbsp;photo\">\n      </mat-card-content>\n      <mat-card-footer><a href=\"#\" onclick=\"return false;\">Details...</a></mat-card-footer>\n    </mat-card>\n  </div>\n  <div fxFlex=\"25%\">\n    <mat-card>\n      <mat-card-title>Image</mat-card-title>\n      <mat-card-content>\n        <img mat-card-image class=\"img\" src=\"\" alt=\"&nbsp;photo\">\n      </mat-card-content>\n      <mat-card-footer><a href=\"#\" onclick=\"return false;\">Details...</a></mat-card-footer>\n    </mat-card>\n  </div>\n  <div fxFlex=\"25%\">\n    <mat-card>\n      <mat-card-title>Image</mat-card-title>\n      <mat-card-content>\n        <img mat-card-image class=\"img\" src=\"\" alt=\"&nbsp;photo\">\n      </mat-card-content>\n      <mat-card-footer><a href=\"#\" onclick=\"return false;\">Details...</a></mat-card-footer>\n    </mat-card>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/blogPost-list/blogPost-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blogPost-list/blogPost-list.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"button-row\">\n  <a mat-raised-button color=\"primary\" (click)=\"addPost()\">\n    <mat-icon>add</mat-icon>\n  </a>\n</div>\n<ul id=\"mainUL\" fxLayout fxShow=\"{{listOpen ?'true':'false'}}\" #sectionToScrollTo *ngFor=\"let blogPost of blogPosts\">\n  <mat-card>\n    <table>\n      <tr>\n        <td>\n          <div>\n            <h2>{{blogPost.title}}</h2>\n            <h3>{{blogPost.category}}</h3>\n            <p>\n              <!-- {{blogPost.author}} - {{blogPost.createdAt | date: 'MM/dd/yyyy HH:mm:ss'}} -->\n              {{blogPost.author}} - {{ blogPost.createdAt}}\n              <br />\n              {{blogPost.short_desc}}\n            </p>\n          </div>\n        </td>\n        <td>\n          <div fxLayoutAlign=\"end\">\n           <img fxShow=\"{{blogPost.image == '' ? 'false':'true'}}\" \n              src=\"{{blogPost.image}}\" height=\"50%\" width=\"50%\" alt=\"stamp photo\">\n          </div>\n        </td>\n      </tr>\n      <tr>\n        <td colspan=\"2\">\n          <div style=\"margin-bottom:5px;\">\n            <button mat-button (click)=\"addComment(blogPost._id)\">REPLY</button>\n            <button mat-button id=\"btnShowHideComments\" (click)=\"showHideComments(this.blogPost._id)\">COMMENTS</button>\n            <button mat-button style=\"display:inline-block;\"\n              fxShow=\"{{this.blogPost.author == this.loggedInUser ?'true':'false'}}\"\n              (click)=\"editItem(this.blogPost._id)\">EDIT</button>\n            <button mat-button style=\"display:inline-block;\"\n              fxShow=\"{{this.blogPost.author == this.loggedInUser ?'true':'false'}}\"\n              (click)=\"deleteItem(this.blogPost._id)\">DELETE</button>\n          </div>\n        </td>\n      </tr>\n      <tr>\n        <td colspan=\"2\">\n          <table fxShow=\"{{this.blogPost._id == this.id ?'true':'false'}}\" mat-table [dataSource]=\"dataSource1\"\n            class=\"mat-elevation-z8\">\n            <ng-container matColumnDef=\"author\">\n              <th mat-header-cell *matHeaderCellDef> Author </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.author}} </td>\n            </ng-container>\n            <ng-container matColumnDef=\"comment\">\n              <th mat-header-cell *matHeaderCellDef> Comment </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.comment}} </td>\n            </ng-container>\n            <ng-container matColumnDef=\"createdAt\">\n              <th mat-header-cell *matHeaderCellDef> Date Created </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element.createdAt | date: 'MM/dd/yyyy HH:mm:ss' }} </td>\n            </ng-container>\n            <ng-container matColumnDef=\"edit\">\n              <th mat-header-cell *matHeaderCellDef> </th>\n              <td mat-cell *matCellDef=\"let element\">\n                <br />\n                <a class=\"iconLink1\" id=\"btnEdit\" (click)=\"editComment(element._id)\">\n                  <i class=\"fa fa-pencil-square-o\" aria-hidden=\"true\"></i>\n                </a>\n              </td>\n            </ng-container>\n            <ng-container matColumnDef=\"delete\">\n              <th mat-header-cell *matHeaderCellDef></th>\n              <td mat-cell *matCellDef=\"let element\">\n                <br />\n                <a class=\"iconLink1\" id=\"btnDelete\" (click)=\"deleteComment(element._id)\">\n                  <i class=\"fa fa-trash\"></i>\n                </a>\n              </td>\n            </ng-container>\n            <ng-container matColumnDef=\"_id\">\n              <mat-header-cell *matHeaderCellDef [style.display]=\"'none'\">Id</mat-header-cell>\n              <mat-cell *matCellDef=\"let element\" [style.display]=\"'none'\"> {{element._id}} </mat-cell>\n            </ng-container>\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          </table>\n        </td>\n      </tr>\n    </table>\n  </mat-card>\n</ul>\n<div id=\"container\">\n  <div fxShow=\"{{listOpen ?'true':'false'}}\">\n    <a mat-raised-button color=\"primary\" (click)=\"scrollToTop()\">\n      Back to Top\n    </a>\n  </div>\n  <div style=\"margin-right:5px;\" fxShow=\"{{listOpen ?'true':'false'}}\">\n    <a mat-raised-button color=\"primary\" (click)=\"loadPreviousBlogPosts()\">\n      <<\n    </a>\n    &nbsp;<a mat-raised-button color=\"primary\" (click)=\"loadNextBlogPosts()\">\n      >>\n    </a>\n  </div>\n</div>\n\n<div fxLayout fxShow=\"{{detailsEditOpen ?'true':'false'}}\">\n  <div fxFlex=\"100%\">\n    <form [formGroup]=\"blogPostForm\">\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"image\" formControlName=\"image\">\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Title\" formControlName=\"title\" [errorStateMatcher]=\"matcher\">\n        <mat-error>\n          <span *ngIf=\"!blogPostForm.get('title').valid && blogPostForm.get('title').touched\">Please enter Blog Post\n            Title</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Category\" formControlName=\"category\" [errorStateMatcher]=\"matcher\">\n        <mat-error>\n          <span *ngIf=\"!blogPostForm.get('category').valid && blogPostForm.get('category').touched\">Please enter Blog\n            Post Category</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <input matInput placeholder=\"Author\" formControlName=\"author\" [errorStateMatcher]=\"matcher\">\n        <mat-error>\n          <span *ngIf=\"!blogPostForm.get('author').valid && blogPostForm.get('author').touched\">Please enter Blog Post\n            Author</span>\n        </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n        <textarea matInput placeholder=\"Short Description\" formControlName=\"short_desc\"\n          [errorStateMatcher]=\"matcher\"></textarea>\n        <mat-error>\n          <span *ngIf=\"!blogPostForm.get('short_desc').valid && blogPostForm.get('short_desc').touched\">Please enter\n            Blog Post Short Description</span>\n        </mat-error>\n      </mat-form-field>\n      <div class=\"button-row\">\n        <button [disabled]=\"!blogPostForm.valid\" mat-raised-button color=\"primary\"\n          (click)=\"saveForm(blogPostForm.value)\">\n          <mat-icon>save</mat-icon>\n        </button>\n        &nbsp;&nbsp;<input type=\"file\" name=\"photo\" ng2FileSelect [uploader]=\"uploader\" />\n        <button mat-raised-button [disabled]=\"!uploader.getNotUploadedItems().length\"\n          (click)=\"$event.preventDefault(); this.uploader.uploadAll();\">\n          Upload Image\n        </button>\n        <button mat-button (click)=\"swapWhatIsOpen('list')\">\n          RETURN\n        </button>\n      </div>\n    </form>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/blogPost-main/blogPost-main.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blogPost-main/blogPost-main.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"margin:0px;background-color: lightgray;\">\n    <table width=\"100%\">\n        <tr>\n            <td>\n                <div style=\"margin-top:5px;margin-left:10px;font-size:x-large;font-weight:bold;\">\n                    {{title}} - {{category}}\n                </div>\n                <div style=\"margin-bottom:10px;margin-top:5px;margin-left:10px;font-size:small;font-weight:normal;\">\n                    By Bob Hodges {{createdAt | date: 'MM/dd/yyyy HH:mm:ss' }}\n                </div>\n            </td>\n            <td>\n                <div style=\"margin-right:10px;text-align: right;\">\n                    <a color=\"primary\" mat-raised-button class=\"orangeButton\" (click)=\"openDialog()\">\n                        Comment\n                    </a>\n                </div>\n            </td>\n        </tr>\n    </table>\n</div>\n<div id=\"container1\">\n    <p style=\"font-size:14px;\">\n        <!-- {{content}} -->\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n    </p>\n    <div fxLayoutAlign=\"center\">\n        <!-- <img src=\"{{image}}\" height=\"35%\" width=\"35%\" alt=\"stamp photo\" /> -->\n        <img src=\"assets/images/1841 Maltese Cross.jpg\" height=\"35%\" width=\"35%\" alt=\"stamp photo\" />\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar>\n   CONTACT US\n</mat-toolbar>\n<mat-card>\n   <mat-card-title>\n      Want to get in touch? Fill out the form below to send me a message \n      and I will get back to you as soon as possible.\n   </mat-card-title>\n   <mat-card-content>\n      <script type=\"text/javascript\" src=\"//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js\"></script>   \n      <script type=\"text/javascript\" src=\"https://cdn.emailjs.com/sdk/2.3.2/email.min.js\"></script>\n      <form>\n         <mat-form-field class=\"full-width\">\n            <mat-label>First Name</mat-label>\n            <input matInput placeholder=\"First Name\" name=\"first\" [(ngModel)]=\"contact.firstname\">\n         </mat-form-field>\n         <br />\n         <mat-form-field class=\"full-width\">\n            <mat-label>Last Name</mat-label>\n            <input matInput placeholder=\"Last Name\" name=\"last\" [(ngModel)]=\"contact.lastname\">\n         </mat-form-field>\n         <br />\n         <mat-form-field class=\"full-width\">\n            <mat-label>Email</mat-label>\n            <input matInput placeholder=\"Email\" name=\"email\" [(ngModel)]=\"contact.email\">\n         </mat-form-field>\n         <br />\n         <mat-form-field class=\"full-width\">\n            <mat-label>Subject</mat-label>\n            <input matInput placeholder=\"Subject\" name=\"subject\" [(ngModel)]=\"contact.subject\">\n         </mat-form-field>\n         <br />\n         <mat-form-field class=\"full-width\">\n            <mat-label>Message</mat-label>\n            <textarea matInput placeholder=\"Message\" name=\"message\" [(ngModel)]=\"contact.message\"></textarea>\n         </mat-form-field>\n      </form>  \n   </mat-card-content>\n   <mat-card-actions>\n      <button mat-raised-button (click)=\"onSubmit();\" color=\"primary\">SUBMIT</button>\n   </mat-card-actions>\n</mat-card>\n<p>   \n</p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section fxLayout=\"column\" fxFlexAlign=\"stretch\">\n  <mat-tab-group #tabs [selectedIndex]=\"selectedIndex\" (selectedTabChange)=\"executeSelectedChange($event)\">\n    <mat-tab label=\"Blog\">\n      <app-blogPost-main></app-blogPost-main>\n    </mat-tab>\n    <mat-tab label=\"Posts\">\n      <mat-card>\n        <app-blogPost-list></app-blogPost-list> \n      </mat-card>\n    </mat-tab>\n    <mat-tab label=\"Gallery\">\n      <mat-card>\n        <app-blog-gallery></app-blog-gallery>\n      </mat-card>\n    </mat-tab>\n    <mat-tab label=\"Exhibits\">\n      <div id=\"container\">\n          <mat-form-field style=\"width: 100%;\">\n              <mat-label>Select an option</mat-label>\n              <mat-select [(value)]=\"selected\">\n                <mat-option>None</mat-option>\n                <mat-option value=\"../assets/exhibits/US Private Die Proprietary.pdf\">US Private Die Proprietary</mat-option>\n                <mat-option value=\"../assets/exhibits/US Perfins - Their First Year.pdf\">US Perfins - Their First Year</mat-option>\n                <mat-option value=\"../assets/exhibits/US Perfins - The Classics and Rarities.pdf\">US Perfins - The Classics and Rarities</mat-option>\n                <mat-option value=\"../assets/exhibits/A Journey Through History with a Single Postal Cover.pdf\">A Journey Through History with a Single Postal Cover</mat-option>\n              </mat-select>\n            </mat-form-field>\n          <pdf-viewer src=\"{{selected}}\"></pdf-viewer>\n      </div>       \n    </mat-tab>\n    <mat-tab label=\"Profile\">\n      <app-profile></app-profile>\n  </mat-tab>\n  </mat-tab-group>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" class=\"layout-wrapper\" >\n  <div fxFlex=\"100%\" fxFlex.lt-md=\"100%\" class=\"flex-wrapper\">\n      <ng-content></ng-content>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loading/loading.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loading/loading.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"loading\">\n  <img src=\"../../../assets/loading.svg\" alt=\"Loading...\" />\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar>\n   <span>LOGIN</span>\n</mat-toolbar>\n<div style=\"margin:20px;\">\n   <form [formGroup]=\"loginForm\" (ngSubmit)=\"onFormSubmit(loginForm.value)\">\n      <mat-form-field class=\"example-full-width\">\n         <input matInput placeholder=\"Email\" formControlName=\"email\" [errorStateMatcher]=\"matcher\">\n         <mat-error>\n            <span *ngIf=\"!loginForm.get('email').valid && loginForm.get('email').touched\">\n               Please enter your email address</span>\n         </mat-error>\n      </mat-form-field>\n      <mat-form-field class=\"example-full-width\">\n         <input matInput placeholder=\"Password\" formControlName=\"password\" type=\"password\" [errorStateMatcher]=\"matcher\">\n         <mat-error>\n            <span *ngIf=\"!loginForm.get('password').valid && loginForm.get('password').touched\">\n               Please enter your password</span>\n         </mat-error>\n      </mat-form-field>     \n      <div class=\"button-row\">\n         <button type=\"submit\" [disabled]=\"!loginForm.valid\" mat-raised-button color=\"primary\">\n               <span>LOGIN</span>\n         </button>        \n      </div>\n   </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal/modal-comment.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/modal-comment.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-content>\n    <form [formGroup]=\"blogCommentForm\" (ngSubmit)=\"onFormSubmit(blogCommentForm.value)\">       \n        <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Author\" formControlName=\"author\" [errorStateMatcher]=\"matcher\">\n            <mat-error>\n                <span *ngIf=\"!blogCommentForm.get('author').valid && blogCommentForm.get('author').touched\">\n                    Please enter your name</span>\n            </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n            <textarea matInput placeholder=\"Comment\" formControlName=\"comment\" [errorStateMatcher]=\"matcher\"></textarea>\n            <mat-error>\n                <span *ngIf=\"!blogCommentForm.get('comment').valid && blogCommentForm.get('comment').touched\">\n                    Please enter your comment</span>\n            </mat-error>\n        </mat-form-field>\n        <div class=\"button-row\">\n            <button type=\"submit\" [disabled]=\"!blogCommentForm.valid\" mat-raised-button color=\"primary\">\n                <mat-icon>save</mat-icon>\n            </button>\n        </div>\n    </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal/modal.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modal/modal.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div mat-dialog-content>    \n    <form [formGroup]=\"blogPostForm\" (ngSubmit)=\"onFormSubmit(blogPostForm.value);\">        \n        <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Title\" formControlName=\"title\" [errorStateMatcher]=\"matcher\">\n            <mat-error>\n                <span *ngIf=\"!blogPostForm.get('title').valid && blogPostForm.get('title').touched\">Please enter Blog\n                    Post Title</span>\n            </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Category\" formControlName=\"category\" [errorStateMatcher]=\"matcher\">\n            <mat-error>\n                <span *ngIf=\"!blogPostForm.get('category').valid && blogPostForm.get('category').touched\">Please enter Blog\n                    Post Category</span>\n            </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Author\" formControlName=\"author\" [errorStateMatcher]=\"matcher\">\n            <mat-error>\n                <span *ngIf=\"!blogPostForm.get('author').valid && blogPostForm.get('author').touched\">Please enter Blog\n                    Post Author</span>\n            </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n            <textarea matInput placeholder=\"Short Description\" formControlName=\"short_desc\"\n                [errorStateMatcher]=\"matcher\"></textarea>\n            <mat-error>\n                <span *ngIf=\"!blogPostForm.get('short_desc').valid && blogPostForm.get('short_desc').touched\">Please\n                    enter Blog Post short description</span>\n            </mat-error>\n        </mat-form-field>\n        <mat-form-field class=\"example-full-width\">\n            <input matInput placeholder=\"Image\" formControlName=\"image\" [errorStateMatcher]=\"matcher\">\n            <mat-error>\n                <span *ngIf=\"!blogPostForm.get('image').valid && blogPostForm.get('image').touched\">Please enter Blog\n                    Post Image</span>\n            </mat-error>\n        </mat-form-field>\n        <div class=\"button-row\">\n            <button type=\"submit\" [disabled]=\"!blogPostForm.valid\" mat-raised-button color=\"primary\">\n                <mat-icon>save</mat-icon>\n            </button>\n            &nbsp;&nbsp;<input type=\"file\" name=\"photo\" ng2FileSelect [uploader]=\"uploader\" />\n            <button mat-raised-button [disabled]=\"!uploader.getNotUploadedItems().length\" (click)=\"$event.preventDefault(); this.uploader.uploadAll();\">\n              Upload Image</button>     \n        </div>\n    </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-8 col-md-10 mx-auto\">\n        <ul class=\"list-inline text-center\">\n          <li class=\"list-inline-item\">\n            <a href=\"#\" onclick=\"return false;\">\n              <span class=\"fa-stack fa-lg\">\n                <i class=\"fas fa-circle fa-stack-2x\"></i>\n                <i class=\"fab fa-twitter fa-stack-1x fa-inverse\"></i>\n              </span>\n            </a>\n          </li>\n          <li class=\"list-inline-item\">\n            <a href=\"#\" onclick=\"return false;\">\n              <span class=\"fa-stack fa-lg\">\n                <i class=\"fas fa-circle fa-stack-2x\"></i>\n                <i class=\"fab fa-facebook-f fa-stack-1x fa-inverse\"></i>\n              </span>\n            </a>\n          </li>\n          <li class=\"list-inline-item\">\n            <a href=\"#\" onclick=\"return false;\">\n              <span class=\"fa-stack fa-lg\">\n                <i class=\"fas fa-circle fa-stack-2x\"></i>\n                <i class=\"fab fa-github fa-stack-1x fa-inverse\"></i>\n              </span>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <span style=\"margin-left:10px; margin-bottom:10px;text-align:left;\" class=\"copyright text-muted\">Copyright &copy; Gourmet Philatelist 2019</span>  \n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\r\n  <mat-toolbar-row>\r\n    <button mat-icon-button (click)=\"onToggleSidenav()\">\r\n      <mat-icon>menu</mat-icon>\r\n    </button>\r\n    <div class=\"box\">\r\n      <a routerLink=\"/home\">\r\n        <span style=\"font-family:cursive;\">The Gourmet Philatelist</span>\r\n      </a>\r\n    </div>\r\n    <div fxFlex fxLayout fxLayoutAlign=\"center\">\r\n      <ul class=\"imgUl\" fxLayout fxLayoutGap=\"5px\">\r\n        <li>\r\n          <img src=\"assets/images/greenguy.jpg\" />\r\n        </li>\r\n        <li>\r\n          <img src=\"assets/images/belgie.jpg\" />\r\n        </li>\r\n        <li>\r\n          <img src=\"assets/images/queenblack.png\" />\r\n        </li>\r\n        <li>\r\n          <img src=\"assets/images/stlucia.png\" />\r\n        </li>\r\n        <li>\r\n            <img src=\"assets/images/segei.png\" />\r\n        </li>\r\n        <li>\r\n            <img src=\"assets/images/blueguy.png\" />\r\n        </li>\r\n        <li>\r\n            <img src=\"assets/images/monalisa1.jpg\" />\r\n        </li>\r\n      </ul>\r\n    </div>\r\n    <div fxFlex fxLayout fxLayoutAlign=\"end\">\r\n        <ul class=\"imgUl\" fxLayout fxLayoutGap=\"5px\">\r\n        <li *ngIf=\"auth.loggedIn === false\">\r\n          <button class=\"btn btn-primary btn-margin\" id=\"qsLoginBtn\" (click)=\"auth.login()\">\r\n            Log in\r\n          </button>\r\n        </li>\r\n        <li *ngIf=\"auth.loggedIn === true\">\r\n          <button class=\"btn btn-primary btn-margin\" id=\"qsLoginBtn\" (click)=\"auth.logout()\">\r\n            Log Out\r\n          </button>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </mat-toolbar-row>\r\n</mat-toolbar>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/sidenav-list/sidenav-list.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/sidenav-list/sidenav-list.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-nav-list>\n  <a mat-list-item routerLink=\"/home\" (click)=\"onSidenavClose()\">\n    <mat-icon>home</mat-icon> <span class=\"nav-caption\">Home</span>\n  </a>\n  <a mat-list-item routerLink=\"/about\" (click)=\"onSidenavClose()\">\n    <mat-icon>assignment_ind</mat-icon> <span class=\"nav-caption\">About</span>\n  </a>\n  <a mat-list-item routerLink=\"/contact\" (click)=\"onSidenavClose()\">\n    <mat-icon>contact_support</mat-icon><span class=\"nav-caption\">Contact</span>\n  </a>\n  <a mat-list-item routerLink=\"/content\" (click)=\"onSidenavClose()\" *ngIf=\"auth.loggedIn === true\">\n    <mat-icon>add_comment</mat-icon><span class=\"nav-caption\">Content</span>\n  </a>\n  <a mat-list-item routerLink=\"/allBlogContent\" (click)=\"onSidenavClose()\" *ngIf=\"auth.loggedIn === true\">\n    <mat-icon>menu</mat-icon><span class=\"nav-caption\">All Blog Content</span>\n  </a>\n  <!-- <a mat-list-item routerLink=\"/login\" (click)=\"onSidenavClose()\">\n    <mat-icon>account_box</mat-icon><span class=\"nav-caption\">Login</span>\n  </a> \n  <a mat-list-item routerLink=\"/registration\" (click)=\"onSidenavClose()\">\n    <mat-icon>edit</mat-icon><span class=\"nav-caption\">Register</span>\n  </a>  -->\n</mat-nav-list>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"cmspage mtb-40\">\n  <div class=\"container\">\n    <div class=\"error-404\">\n      <h1>404</h1>\n      <h2>There is nothing here!</h2>\n      <p>Sorry, the page you were looking for in this blog does not exist.</p>\n      <button (click)=\"gotoHome()\" class=\"btn btn-danger\">Go to Home</button>\n    </div>\n  </div>\n</section>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/callback/callback.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/callback/callback.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-loading></app-loading>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container mt-5\" *ngIf=\"auth.userProfile$ | async as profile\">\n  <div\n    class=\"row align-items-center profile-header mb-5 text-center text-md-left\"\n  >\n    <div class=\"col-md-2\">\n      <img\n        [src]=\"profile.picture\"\n        class=\"rounded-circle img-fluid profile-picture mb-3 mb-md-0\"\n      />\n    </div>\n    <div class=\"col-md\">\n      <h2>{{ profile.name }}</h2>\n      <p class=\"lead text-muted\">{{ profile.email }}</p>\n    </div>\n  </div>\n\n  <div class=\"row\" *ngIf=\"profileJson\">\n    <!-- <pre class=\"rounded\"><code class=\"json\" [highlight]=\"profileJson\"></code></pre> -->\n    \n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration-component.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration-component.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <mat-toolbar>\r\n  <span>Registration</span>\r\n</mat-toolbar>\r\n<mat-card class=\"my-card\">\r\n   <mat-card-content>\r\n      <form class=\"my-form\">  \r\n         <mat-form-field class=\"full-width\">\r\n            <mat-label>First Name</mat-label>\r\n            <input  matInput  placeholder=\"First name\"  name=\"fname\"  required>\r\n         </mat-form-field>\r\n         <mat-form-field class=\"full-width\">\r\n            <mat-label>Last Name</mat-label>\r\n            <input  matInput  placeholder=\"Last Name\" name=\"lname\"  required>\r\n         </mat-form-field>\r\n         <mat-form-field class=\"full-width\">\r\n            <mat-label>Address</mat-label>\r\n            <input  matInput  placeholder=\"Address\" name=\"address\"  required>\r\n         </mat-form-field>\r\n         <mat-form-field class=\"full-width\">\r\n            <mat-label>Email</mat-label>\r\n            <input  matInput  placeholder=\"Email\" name=\"email\">\r\n         </mat-form-field>\r\n         <mat-form-field class=\"full-width\">\r\n            <mat-label>Password</mat-label>\r\n            <input  matInput  placeholder=\"Password\"  name=\"password\">\r\n         </mat-form-field>\r\n         <!-- <section class=\"example-section\">\r\n            <label class=\"full-width\">Gender:</label>\r\n            <br>\r\n            <br>\r\n            <mat-radio-group>\r\n               <mat-radio-button class=\"example-margin\" value=\"after\">Male</mat-radio-button>\r\n               <mat-radio-button class=\"example-margin\" value=\"before\">Female</mat-radio-button>\r\n               <mat-radio-button class=\"example-margin\" value=\"before\">Other</mat-radio-button>\r\n            </mat-radio-group>\r\n         </section> -->\r\n         <mat-form-field class=\"full-width\">\r\n            <mat-label>Date of Birth</mat-label>\r\n            <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\">\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker></mat-datepicker>\r\n         </mat-form-field>\r\n      </form>\r\n   </mat-card-content>\r\n   <mat-card-actions>\r\n      <button mat-raised-button color=\"primary\">REGISTER</button>\r\n   </mat-card-actions>\r\n</mat-card>\r\n<p>   \r\n</p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/upload/dialog/dialog.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upload/dialog/dialog.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<input\n  type=\"file\"\n  #file\n  style=\"display: none\"\n  (change)=\"onFilesAdded()\"\n  multiple\n/>\n\n<div class=\"container\" fxLayout=\"column\" fxLayoutAlign=\"space-evenly stretch\">\n  <h1 mat-dialog-title>Upload Files</h1>\n  <div>\n    <button\n      [disabled]=\"uploading || uploadSuccessful\"\n      mat-raised-button\n      color=\"primary\"\n      class=\"add-files-btn\"\n      (click)=\"addFiles()\"\n    >\n      Add Files\n    </button>\n  </div>\n\n  <!-- This is the content of the dialog, containing a list of the files to upload -->\n  <mat-dialog-content fxFlex>\n    <mat-list>\n      <mat-list-item *ngFor=\"let file of files\">\n        <h4 mat-line>{{file.name}}</h4>\n        <mat-progress-bar\n          *ngIf=\"progress\"\n          mode=\"determinate\"\n          [value]=\"progress[file.name].progress | async\"\n        ></mat-progress-bar>\n      </mat-list-item>\n    </mat-list>\n  </mat-dialog-content>\n\n  <!-- This are the actions of the dialog, containing the primary and the cancel button-->\n  <mat-dialog-actions class=\"actions\">\n    <button *ngIf=\"showCancelButton\" mat-button mat-dialog-close>Cancel</button>\n    <button\n      mat-raised-button\n      color=\"primary\"\n      [disabled]=\"!canBeClosed\"\n      (click)=\"closeDialog()\"\n    >\n      {{primaryButtonText}}\n    </button>\n  </mat-dialog-actions>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/upload/upload.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upload/upload.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<input type=\"file\" name=\"photo\" ng2FileSelect [uploader]=\"uploader\" />\r\n<!-- <button type=\"button\" class=\"btn btn-success btn-s\" \r\n  (click)=\"uploader.uploadAll()\" \r\n  [disabled]=\"!uploader.getNotUploadedItems().length\" >\r\n      Upload an Image\r\n</button> -->\r\n\r\n<!-- <button mat-raised-button (click)=\"openUploadDialog()\">Upload</button> -->\r\n\r\n<button mat-raised-button [disabled]=\"!uploader.getNotUploadedItems().length\" (click)=\"uploader.uploadAll()\">Upload Image</button>");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __importDefault(__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/about/about.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var routes = [];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/admin.module.ts":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/admin/admin-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_2__["AdminRoutingModule"]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var apiUrl = "/api";
var loginUrl = apiUrl + '/login';
var blogContentUrl = apiUrl + '/blogContent';
var commentUrl = apiUrl + '/comment';
var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.handleError = function (error) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error("Backend returned code " + error.status + ", " +
                ("body was: " + error.error));
        }
        // return an observable with a user-facing error message
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Something bad happened; please try again later.');
    };
    ;
    ApiService.prototype.login = function (email, password) {
        return this.http.post(loginUrl, { email: email, password: password }, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    ApiService.prototype.getBlogPosts = function () {
        return this.http.get(apiUrl, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getBlogPost = function (id) {
        var url = apiUrl + "/" + id;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.postBlogPost = function (data) {
        return this.http.post(apiUrl, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.updateBlogPost = function (id, data) {
        return this.http.put(apiUrl + '/' + id, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.deleteBlogPost = function (id) {
        var url = apiUrl + "/" + id;
        return this.http.delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.saveContact = function (contact) {
        return this.http.post(apiUrl + '/contact', {
            firstname: contact.firstname,
            lastname: contact.lastname,
            email: contact.email,
            subject: contact.subject,
            message: contact.message
        }, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.saveBlogContent = function (data) {
        return this.http.post(apiUrl + '/blogContent', data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getAllBlogContent = function () {
        return this.http.get(apiUrl + '/blogContent', httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.updateBlogContent = function (id, data) {
        return this.http.put(apiUrl + '/blogContent/' + id, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.deleteBlogContent = function (id) {
        var url = blogContentUrl + "/" + id;
        return this.http.delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getBlogContentDetails = function (id) {
        var url = blogContentUrl + "/" + id;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.saveComment = function (data) {
        return this.http.post(commentUrl, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getCommentDetails = function (id) {
        var url = commentUrl + "/" + id;
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.updateComment = function (id, data) {
        return this.http.put(commentUrl + '/' + id, data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.deleteComment = function (id) {
        var url = commentUrl + "/" + id;
        return this.http.delete(url, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.prototype.getComments = function () {
        return this.http.get(commentUrl, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.extractData), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    };
    ApiService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-sidenav-container, mat-sidenav-content, mat-sidenav {\n    height: 100%;\n}\n\nmat-sidenav {\n    width: 250px;\n}\n\nmain {\n    padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1zaWRlbmF2LWNvbnRhaW5lciwgbWF0LXNpZGVuYXYtY29udGVudCwgbWF0LXNpZGVuYXYge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxubWF0LXNpZGVuYXYge1xuICAgIHdpZHRoOiAyNTBweDtcbn1cblxubWFpbiB7XG4gICAgcGFkZGluZzogMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var AppComponent = /** @class */ (function () {
    function AppComponent(auth) {
        this.auth = auth;
        this.title = 'ng-dh-nav';
    }
    AppComponent.prototype.ngOnInit = function () {
        // On initial load, check authentication state with authorization server
        // Set up local auth streams if user is already authenticated
        this.auth.localAuthSetup();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: hljsLanguages, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hljsLanguages", function() { return hljsLanguages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/layout.component */ "./src/app/layout/layout.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _routing_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routing/routing.module */ "./src/app/routing/routing.module.ts");
/* harmony import */ var _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./navigation/header/header.component */ "./src/app/navigation/header/header.component.ts");
/* harmony import */ var _navigation_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navigation/footer/footer.component */ "./src/app/navigation/footer/footer.component.ts");
/* harmony import */ var _navigation_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navigation/sidenav-list/sidenav-list.component */ "./src/app/navigation/sidenav-list/sidenav-list.component.ts");
/* harmony import */ var _blogPost_main_blogPost_main_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./blogPost-main/blogPost-main.component */ "./src/app/blogPost-main/blogPost-main.component.ts");
/* harmony import */ var _blogPost_list_blogPost_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./blogPost-list/blogPost-list.component */ "./src/app/blogPost-list/blogPost-list.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/modal/modal.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _admin_admin_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/admin.module */ "./src/app/admin/admin.module.ts");
/* harmony import */ var _auth_auth_routing_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth/auth-routing.module */ "./src/app/auth/auth-routing.module.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _blog_content_blog_content_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./blog-content/blog-content.component */ "./src/app/blog-content/blog-content.component.ts");
/* harmony import */ var _upload_upload_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./upload/upload.module */ "./src/app/upload/upload.module.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var _blog_content_list_blog_content_list_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./blog-content-list/blog-content-list.component */ "./src/app/blog-content-list/blog-content-list.component.ts");
/* harmony import */ var _blog_content_edit_blog_content_edit_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./blog-content-edit/blog-content-edit.component */ "./src/app/blog-content-edit/blog-content-edit.component.ts");
/* harmony import */ var _modal_modal_comment_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./modal/modal-comment.component */ "./src/app/modal/modal-comment.component.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _transfer_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./transfer.service */ "./src/app/transfer.service.ts");
/* harmony import */ var _blog_gallery_blog_gallery_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./blog-gallery/blog-gallery.component */ "./src/app/blog-gallery/blog-gallery.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/fesm5/ng2-pdf-viewer.js");
/* harmony import */ var _registration_registration_component_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./registration/registration-component.component */ "./src/app/registration/registration-component.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ngx-highlightjs */ "./node_modules/ngx-highlightjs/fesm5/ngx-highlightjs.js");
/* harmony import */ var _pages_callback_callback_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pages/callback/callback.component */ "./src/app/pages/callback/callback.component.ts");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./pages/profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
/* harmony import */ var _loading_loading_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./loading/loading.component */ "./src/app/loading/loading.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};














































_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_34__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_35__["fas"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_36__["far"], _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_37__["fab"]);
function hljsLanguages() {
    return [{ name: 'json', func: JSON }];
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _layout_layout_component__WEBPACK_IMPORTED_MODULE_8__["LayoutComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _navigation_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _navigation_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_13__["SidenavListComponent"],
                _blogPost_main_blogPost_main_component__WEBPACK_IMPORTED_MODULE_14__["BlogPostMainComponent"],
                _blogPost_list_blogPost_list_component__WEBPACK_IMPORTED_MODULE_15__["BlogPostListComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_16__["ModalComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_17__["PageNotFoundComponent"],
                _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_20__["ContactUsComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_21__["AboutComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
                _blog_content_blog_content_component__WEBPACK_IMPORTED_MODULE_23__["BlogContentComponent"],
                _blog_content_list_blog_content_list_component__WEBPACK_IMPORTED_MODULE_26__["BlogContentListComponent"],
                _blog_content_edit_blog_content_edit_component__WEBPACK_IMPORTED_MODULE_27__["BlogContentEditComponent"],
                _modal_modal_comment_component__WEBPACK_IMPORTED_MODULE_28__["ModalCommentComponent"],
                _blog_gallery_blog_gallery_component__WEBPACK_IMPORTED_MODULE_31__["BlogGalleryComponent"],
                _registration_registration_component_component__WEBPACK_IMPORTED_MODULE_39__["RegistrationComponentComponent"],
                _loading_loading_component__WEBPACK_IMPORTED_MODULE_44__["LoadingComponent"],
                _pages_callback_callback_component__WEBPACK_IMPORTED_MODULE_42__["CallbackComponent"],
                _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_43__["ProfileComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                _routing_routing_module__WEBPACK_IMPORTED_MODULE_10__["RoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _admin_admin_module__WEBPACK_IMPORTED_MODULE_18__["AdminModule"],
                _auth_auth_routing_module__WEBPACK_IMPORTED_MODULE_19__["AuthRoutingModule"],
                _upload_upload_module__WEBPACK_IMPORTED_MODULE_24__["UploadModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_25__["FileUploadModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["NoopAnimationsModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_32__["AngularFontAwesomeModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_33__["FontAwesomeModule"],
                ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_38__["PdfViewerModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_40__["NgbModule"],
                ngx_highlightjs__WEBPACK_IMPORTED_MODULE_41__["HighlightModule"].forRoot({
                    languages: hljsLanguages
                }),
            ],
            providers: [_data_service__WEBPACK_IMPORTED_MODULE_29__["DataService"], _transfer_service__WEBPACK_IMPORTED_MODULE_30__["TransferService"]],
            entryComponents: [_modal_modal_component__WEBPACK_IMPORTED_MODULE_16__["ModalComponent"], _modal_modal_comment_component__WEBPACK_IMPORTED_MODULE_28__["ModalCommentComponent"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/auth/auth-routing.module.ts ***!
  \*********************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var routes = [];
var AuthRoutingModule = /** @class */ (function () {
    function AuthRoutingModule() {
    }
    AuthRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AuthRoutingModule);
    return AuthRoutingModule;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(auth) {
        this.auth = auth;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.auth.isAuthenticated$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (loggedIn) {
            if (!loggedIn) {
                _this.auth.login(state.url);
            }
        }));
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
    ]; };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @auth0/auth0-spa-js */ "./node_modules/@auth0/auth0-spa-js/dist/auth0-spa-js.production.js");
/* harmony import */ var _auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var auth_config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! auth_config.json */ "./auth_config.json");
var auth_config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! auth_config.json */ "./auth_config.json", 1);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var AuthService = /** @class */ (function () {
    function AuthService(router) {
        var _this = this;
        this.router = router;
        // Create an observable of Auth0 instance of client
        this.auth0Client$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(_auth0_auth0_spa_js__WEBPACK_IMPORTED_MODULE_1___default()({
            domain: auth_config_json__WEBPACK_IMPORTED_MODULE_2__["domain"],
            client_id: auth_config_json__WEBPACK_IMPORTED_MODULE_2__["clientId"],
            redirect_uri: window.location.origin + "/callback"
        })).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["shareReplay"])(1), // Every subscription receives the same shared value
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err); }));
        // Define observables for SDK methods that return promises by default
        // For each Auth0 SDK method, first ensure the client instance is ready
        // concatMap: Using the client instance, call SDK method; SDK returns a promise
        // from: Convert that resulting promise into an observable
        this.isAuthenticated$ = this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (client) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(client.isAuthenticated()); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (res) { return _this.loggedIn = res; }));
        this.handleRedirectCallback$ = this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (client) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(client.handleRedirectCallback()); }));
        // Create subject and public observable of user profile data
        this.userProfileSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.userProfile$ = this.userProfileSubject$.asObservable();
        // Create a local property for login status
        this.loggedIn = null;
    }
    // When calling, options can be passed if desired
    // https://auth0.github.io/auth0-spa-js/classes/auth0client.html#getuser
    AuthService.prototype.getUser$ = function (options) {
        var _this = this;
        return this.auth0Client$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (client) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(client.getUser(options)); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (user) { return _this.userProfileSubject$.next(user); }));
    };
    AuthService.prototype.localAuthSetup = function () {
        var _this = this;
        // This should only be called on app initialization
        // Set up local authentication streams
        var checkAuth$ = this.isAuthenticated$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (loggedIn) {
            if (loggedIn) {
                // If authenticated, get user and set in app
                // NOTE: you could pass options here if needed
                return _this.getUser$();
            }
            // If not authenticated, return stream that emits 'false'
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(loggedIn);
        }));
        var checkAuthSub = checkAuth$.subscribe(function (response) {
            // If authenticated, response will be user object
            // If not authenticated, response will be 'false'
            _this.loggedIn = !!response;
            // Clean up subscription
            checkAuthSub.unsubscribe();
        });
    };
    AuthService.prototype.login = function (redirectPath) {
        if (redirectPath === void 0) { redirectPath = '/'; }
        // A desired redirect path can be passed to login method
        // (e.g., from a route guard)
        // Ensure Auth0 client instance exists
        this.auth0Client$.subscribe(function (client) {
            // Call method to log in
            client.loginWithRedirect({
                redirect_uri: window.location.origin + "/callback",
                appState: { target: redirectPath }
            });
        });
    };
    AuthService.prototype.handleAuthCallback = function () {
        var _this = this;
        // Only the callback component should call this method
        // Call when app reloads after user logs in with Auth0
        var targetRoute; // Path to redirect to after login processsed
        var authComplete$ = this.handleRedirectCallback$.pipe(
        // Have client, now call method to handle auth callback redirect
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (cbRes) {
            // Get and set target redirect route from callback results
            targetRoute = cbRes.appState && cbRes.appState.target ? cbRes.appState.target : '/';
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function () {
            // Redirect callback complete; get user and login status
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(_this.getUser$(), _this.isAuthenticated$);
        }));
        // Subscribe to authentication completion observable
        // Response will be an array of user and login status
        var authCompleteSub = authComplete$.subscribe(function (_a) {
            var user = _a[0], loggedIn = _a[1];
            // Redirect to target route after callback processing
            _this.router.navigate([targetRoute]);
            // Clean up subscription
            authCompleteSub.unsubscribe();
        });
    };
    AuthService.prototype.logout = function () {
        // Ensure Auth0 client instance exists
        this.auth0Client$.subscribe(function (client) {
            // Call method to log out
            client.logout({
                client_id: auth_config_json__WEBPACK_IMPORTED_MODULE_2__["clientId"],
                returnTo: window.location.origin
            });
        });
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/blog-content-edit/blog-content-edit.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/blog-content-edit/blog-content-edit.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.button-row {\r\n  margin: 10px 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy1jb250ZW50LWVkaXQvYmxvZy1jb250ZW50LWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9ibG9nLWNvbnRlbnQtZWRpdC9ibG9nLWNvbnRlbnQtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5idXR0b24tcm93IHtcclxuICBtYXJnaW46IDEwcHggMDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/blog-content-edit/blog-content-edit.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/blog-content-edit/blog-content-edit.component.ts ***!
  \******************************************************************/
/*! exports provided: BlogContentEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogContentEditComponent", function() { return BlogContentEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var URL = '/api/upload';
var BlogContentEditComponent = /** @class */ (function () {
    function BlogContentEditComponent(router, route, api, formBuilder) {
        this.router = router;
        this.route = route;
        this.api = api;
        this.formBuilder = formBuilder;
        this.id = '';
        this.currentBlog = false;
        this.image = '';
        this.title = '';
        this.category = '';
        this.content = '';
        this.imagePathAndFilename = '';
        this.uploadOnly = false;
        this.matcher = '';
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploader"]({ url: URL, itemAlias: 'photo' });
    }
    BlogContentEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getBlogContentDetails(this.route.snapshot.params['id']);
        this.blogContentForm = this.formBuilder.group({
            'currentBlog': [null, !_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'image': [null, !_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'title': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'category': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'content': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.uploader.onAfterAddingFile = function (file) {
            file.withCredentials = false;
        };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log('ImageUpload:uploaded:', item, status, response);
            _this.imagePathAndFilename = 'assets/images/' + item._file.name;
            _this.uploadOnly = true;
            _this.blogContentForm.setValue({
                currentBlog: _this.blogContent.currentBlog,
                image: _this.imagePathAndFilename,
                title: _this.blogContent.title,
                category: _this.blogContent.category,
                content: _this.blogContent.content,
            });
        };
    };
    BlogContentEditComponent.prototype.getBlogContentDetails = function (id) {
        var _this = this;
        this.api.getBlogContentDetails(id).subscribe(function (data) {
            _this.id = data._id;
            _this.blogContent = data;
            _this.blogContentForm.setValue({
                currentBlog: data.currentBlog,
                image: data.image,
                title: data.title,
                category: data.category,
                content: data.content,
            });
        });
    };
    BlogContentEditComponent.prototype.onFormSubmit = function (form) {
        if (!this.uploadOnly) {
            if (this.blogContentForm.get('currentBlog').touched ||
                this.blogContentForm.get('title').touched ||
                this.blogContentForm.get('category').touched ||
                this.blogContentForm.get('content').touched) {
                this.completeSubmit(form);
            }
            else {
                return;
            }
        }
        else {
            this.completeSubmit(form);
        }
    };
    BlogContentEditComponent.prototype.completeSubmit = function (form) {
        var _this = this;
        var allBlogContent = [];
        this.api.getAllBlogContent().subscribe(function (res) {
            allBlogContent = res;
            for (var i = 0; i < allBlogContent.length; i++) {
                var data = allBlogContent[i];
                data.currentBlog = false;
                var id = data._id;
                _this.api.updateBlogContent(id, data)
                    .subscribe(function (res) { }, function (err) {
                    console.log(err);
                });
            }
            _this.api.updateBlogContent(_this.id, form)
                .subscribe(function (res) {
                _this.uploadOnly = false;
                _this.imagePathAndFilename = '';
                _this.router.navigate(['/allBlogContent']);
            }, function (err) {
                console.log(err);
            });
        }, function (err) {
            console.log(err);
        });
    };
    BlogContentEditComponent.prototype.allBlogContent = function () {
        this.router.navigate(['/allBlogContent']);
    };
    BlogContentEditComponent.prototype.returnToAllBlogContent = function () {
        this.router.navigate(['/allBlogContent']);
    };
    BlogContentEditComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    BlogContentEditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-content-edit',
            template: __importDefault(__webpack_require__(/*! raw-loader!./blog-content-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog-content-edit/blog-content-edit.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./blog-content-edit.component.css */ "./src/app/blog-content-edit/blog-content-edit.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], BlogContentEditComponent);
    return BlogContentEditComponent;
}());



/***/ }),

/***/ "./src/app/blog-content-list/blog-content-list.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/blog-content-list/blog-content-list.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    max-height: 550px;\r\n    min-width: 300px;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .isbn-col {\r\n    flex: 0 0 100px !important;\r\n    white-space: unset !important;\r\n  }\r\n  \r\n  .button-row {\r\n    margin: 10px 0;\r\n  }\r\n  \r\n  .highlight {\r\n    background-color: yellow;\r\n  }\r\n  \r\n  .iconLink\r\n  {    \r\n    margin-left: 10px;\r\n    margin-right: 10px;      \r\n    position: relative;\r\n    bottom: 10px;\r\n    color: #3f51b5;\r\n  }\r\n  \r\n  td.mat-cell {\r\n    font-size: small;   \r\n    padding:5px;    \r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy1jb250ZW50LWxpc3QvYmxvZy1jb250ZW50LWxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSwwQkFBMEI7SUFDMUIsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsY0FBYztFQUNoQjs7RUFFQTtJQUNFLHdCQUF3QjtFQUMxQjs7RUFFQTs7SUFFRSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osY0FBYztFQUNoQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2IiLCJmaWxlIjoic3JjL2FwcC9ibG9nLWNvbnRlbnQtbGlzdC9ibG9nLWNvbnRlbnQtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWF4LWhlaWdodDogNTUwcHg7XHJcbiAgICBtaW4td2lkdGg6IDMwMHB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLmlzYm4tY29sIHtcclxuICAgIGZsZXg6IDAgMCAxMDBweCAhaW1wb3J0YW50O1xyXG4gICAgd2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b24tcm93IHtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gIH1cclxuXHJcbiAgLmhpZ2hsaWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XHJcbiAgfVxyXG5cclxuICAuaWNvbkxpbmtcclxuICB7ICAgIFxyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7ICAgICAgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICBjb2xvcjogIzNmNTFiNTtcclxuICB9XHJcblxyXG4gIHRkLm1hdC1jZWxsIHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7ICAgXHJcbiAgICBwYWRkaW5nOjVweDsgICAgXHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/blog-content-list/blog-content-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/blog-content-list/blog-content-list.component.ts ***!
  \******************************************************************/
/*! exports provided: BlogContentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogContentListComponent", function() { return BlogContentListComponent; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var BlogContentListComponent = /** @class */ (function () {
    function BlogContentListComponent(document, route, api, router) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.displayedColumns = ['image', 'title', 'category', 'content', 'edit', 'delete'];
    }
    BlogContentListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.api.getAllBlogContent()
            .subscribe(function (res) {
            console.log(res);
            _this.allBlogContent = res;
            _this.dataSource = _this.allBlogContent;
        }, function (err) {
            console.log(err);
        });
    };
    BlogContentListComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this.api.deleteBlogContent(id)
            .subscribe(function (res) {
            _this.router.navigate(['/allBlogContent']);
        }, function (err) {
            console.log(err);
        });
    };
    BlogContentListComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"] }
    ]; };
    BlogContentListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog-content-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./blog-content-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog-content-list/blog-content-list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./blog-content-list.component.css */ "./src/app/blog-content-list/blog-content-list.component.css")).default]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_0__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], BlogContentListComponent);
    return BlogContentListComponent;
}());



/***/ }),

/***/ "./src/app/blog-content/blog-content.component.css":
/*!*********************************************************!*\
  !*** ./src/app/blog-content/blog-content.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width:nth-last-child() {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.button-row {\r\n  margin: 10px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy1jb250ZW50L2Jsb2ctY29udGVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYmxvZy1jb250ZW50L2Jsb2ctY29udGVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XHJcbiAgbWluLXdpZHRoOiAxNTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aDpudGgtbGFzdC1jaGlsZCgpIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uLXJvdyB7XHJcbiAgbWFyZ2luOiAxMHB4IDA7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/blog-content/blog-content.component.ts":
/*!********************************************************!*\
  !*** ./src/app/blog-content/blog-content.component.ts ***!
  \********************************************************/
/*! exports provided: BlogContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogContentComponent", function() { return BlogContentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _models_blogcontent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/blogcontent */ "./src/app/models/blogcontent.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var URL = '/api/upload';
var BlogContentComponent = /** @class */ (function () {
    function BlogContentComponent(document, api, formBuilder, router, snackBar) {
        this.api = api;
        this.formBuilder = formBuilder;
        this.router = router;
        this.snackBar = snackBar;
        this.currentBlog = false;
        this.image = '';
        this.title = '';
        this.category = '';
        this.content = '';
        this.imagePathAndFilename = '';
        this.uploadOnly = false;
        this.matcher = '';
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_6__["FileUploader"]({ url: URL, itemAlias: 'photo' });
        this.blogContent = new _models_blogcontent__WEBPACK_IMPORTED_MODULE_2__["BlogContent"]();
    }
    BlogContentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blogContentForm = this.formBuilder.group({
            'currentBlog': [null, !_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'image': [null, !_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'title': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'category': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'content': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
        this.uploader.onAfterAddingFile = function (file) {
            file.withCredentials = false;
        };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log('ImageUpload:uploaded:', item, status, response);
            _this.imagePathAndFilename = '/uploads/' + item._file.name;
            _this.uploadOnly = true;
        };
    };
    BlogContentComponent.prototype.onFormSubmit = function (form) {
        form.image = this.imagePathAndFilename;
        if (!this.uploadOnly) {
            if (this.blogContentForm.get('currentBlog').touched ||
                this.blogContentForm.get('title').touched ||
                this.blogContentForm.get('category').touched ||
                this.blogContentForm.get('content').touched) {
                this.completeSubmit(form);
            }
            else {
                return;
            }
        }
        else {
            this.completeSubmit(form);
        }
    };
    BlogContentComponent.prototype.completeSubmit = function (form) {
        var _this = this;
        this.api.saveBlogContent(form)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.openSnackBar('Blog content submitted!', '');
            _this.router.navigate(['/allBlogContent']);
            _this.uploadOnly = false;
            _this.imagePathAndFilename = '';
            form.image = '';
        }, function (err) {
            console.log(err);
        });
    };
    BlogContentComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
            verticalPosition: 'top'
        });
    };
    BlogContentComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"],] }] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
    ]; };
    BlogContentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-content',
            template: __importDefault(__webpack_require__(/*! raw-loader!./blog-content.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog-content/blog-content.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./blog-content.component.css */ "./src/app/blog-content/blog-content.component.css")).default]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"])),
        __metadata("design:paramtypes", [Object, _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], BlogContentComponent);
    return BlogContentComponent;
}());



/***/ }),

/***/ "./src/app/blog-gallery/blog-gallery.component.css":
/*!*********************************************************!*\
  !*** ./src/app/blog-gallery/blog-gallery.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".img {\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    margin: 5px;\r\n  }\r\n \r\n \r\nmat-card \r\n{   \r\n    height: 100%;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n \r\n \r\nmat-card-title {\r\n  font-size: small;\r\n  font-weight: bold;\r\n  display: flex;\r\n    flex-direction: column;\r\n}\r\n \r\n \r\nmat-card-footer\r\n{\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-direction: row;\r\n  flex-shrink: 0;\r\n  margin-left: 10px;\r\n  margin-bottom: 0px;\r\n}\r\n \r\n \r\nmat-card-content\r\n{\r\n  flex-grow: 1;\r\n  overflow: hidden;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZy1nYWxsZXJ5L2Jsb2ctZ2FsbGVyeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsV0FBVztFQUNiOzs7QUFHRjs7SUFFSSxZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsYUFBYTtJQUNYLHNCQUFzQjtBQUMxQjs7O0FBRUE7O0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7OztBQUVBOztFQUVFLFlBQVk7RUFDWixnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9ibG9nLWdhbGxlcnkvYmxvZy1nYWxsZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgfVxyXG4gXHJcbiBcclxubWF0LWNhcmQgXHJcbnsgICBcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5tYXQtY2FyZC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxubWF0LWNhcmQtZm9vdGVyXHJcbntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LXNocmluazogMDtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbm1hdC1jYXJkLWNvbnRlbnRcclxue1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/blog-gallery/blog-gallery.component.ts":
/*!********************************************************!*\
  !*** ./src/app/blog-gallery/blog-gallery.component.ts ***!
  \********************************************************/
/*! exports provided: BlogGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogGalleryComponent", function() { return BlogGalleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var BlogGalleryComponent = /** @class */ (function () {
    function BlogGalleryComponent() {
    }
    BlogGalleryComponent.prototype.ngOnInit = function () {
    };
    BlogGalleryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-gallery',
            template: __importDefault(__webpack_require__(/*! raw-loader!./blog-gallery.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/blog-gallery/blog-gallery.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./blog-gallery.component.css */ "./src/app/blog-gallery/blog-gallery.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], BlogGalleryComponent);
    return BlogGalleryComponent;
}());



/***/ }),

/***/ "./src/app/blogPost-list/blogPost-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/blogPost-list/blogPost-list.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card \r\n{   \r\n    height: 100%;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n    padding: 10px;\r\n}\r\n\r\n\r\n#container {\r\n  display: flex; \r\n  align-content:right;\r\n  flex-direction:row; \r\n  margin:10px;\r\n}\r\n\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n\r\nul {\r\n  padding: 0px;\r\n}\r\n\r\n\r\n.button-row {\r\n  margin: 10px 0;\r\n}\r\n\r\n\r\nmat-card-footer\r\n{\r\n  margin-top: 5px;\r\n  margin-left: 0px;\r\n  margin-right: 0px;\r\n  margin-bottom: 0px;\r\n  text-align: left;\r\n}\r\n\r\n\r\n.iconLink\r\n{    \r\n  margin-left: 10px;\r\n  margin-right: 10px;      \r\n  position: relative;\r\n  bottom: 10px;\r\n  font-size: large;\r\n  color: #3f51b5;\r\n}\r\n\r\n\r\n.iconLink1\r\n{    \r\n  margin-left: 10px;\r\n  margin-right: 10px; \r\n  position: relative;\r\n  bottom: 10px;\r\n}\r\n\r\n\r\ntable {\r\n  width: 100%;\r\n}\r\n\r\n\r\ntd.mat-cell {\r\n    font-size: small;   \r\n    padding:5px;\r\n  }\r\n\r\n\r\nth.mat-header-cell {\r\n    text-align: left;\r\n  }\r\n\r\n\r\nth.mat-header-cell.cdk-column-author {    \r\n    width: 20%;\r\n  }\r\n\r\n\r\nth.mat-header-cell.cdk-column-comment {    \r\n    width: 25%;\r\n    white-space: pre-wrap;\r\n  }\r\n\r\n\r\nth.mat-header-cell.cdk-column-createdAt {    \r\n    width: 25%;    \r\n  }\r\n\r\n\r\nth.mat-header-cell.cdk-column-edit {    \r\n    width: 5%;\r\n  }\r\n\r\n\r\nth.mat-header-cell.cdk-column-delete {    \r\n    width: 5%;\r\n  }\r\n\r\n\r\n#container {\r\n  display: flex;\r\n  justify-content: space-between; \r\n}\r\n\r\n\r\n#container > div {\r\n  width: auto;\r\n  height: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZ1Bvc3QtbGlzdC9ibG9nUG9zdC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksWUFBWTtJQUNaLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsYUFBYTtBQUNqQjs7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7OztBQUVBO0VBQ0UsV0FBVztBQUNiOzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOzs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOzs7QUFFQTs7RUFFRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7OztBQUVBOztFQUVFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7OztBQUVFO0lBQ0UsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjs7O0FBRUE7SUFDRSxnQkFBZ0I7RUFDbEI7OztBQUVBO0lBQ0UsVUFBVTtFQUNaOzs7QUFFQTtJQUNFLFVBQVU7SUFDVixxQkFBcUI7RUFDdkI7OztBQUVBO0lBQ0UsVUFBVTtFQUNaOzs7QUFFQTtJQUNFLFNBQVM7RUFDWDs7O0FBRUE7SUFDRSxTQUFTO0VBQ1g7OztBQUdGO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvYmxvZ1Bvc3QtbGlzdC9ibG9nUG9zdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCBcclxueyAgIFxyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuXHJcbiNjb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7IFxyXG4gIGFsaWduLWNvbnRlbnQ6cmlnaHQ7XHJcbiAgZmxleC1kaXJlY3Rpb246cm93OyBcclxuICBtYXJnaW46MTBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbnVsIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuICBcclxuLmJ1dHRvbi1yb3cge1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG59ICBcclxuICBcclxubWF0LWNhcmQtZm9vdGVyXHJcbntcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufSAgXHJcbiAgICBcclxuLmljb25MaW5rXHJcbnsgICAgXHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4OyAgICAgIFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3R0b206IDEwcHg7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxuICBjb2xvcjogIzNmNTFiNTtcclxufVxyXG5cclxuLmljb25MaW5rMVxyXG57ICAgIFxyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDsgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJvdHRvbTogMTBweDtcclxufVxyXG5cclxudGFibGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4gIHRkLm1hdC1jZWxsIHtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7ICAgXHJcbiAgICBwYWRkaW5nOjVweDtcclxuICB9XHJcblxyXG4gIHRoLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIH1cclxuICBcclxuICB0aC5tYXQtaGVhZGVyLWNlbGwuY2RrLWNvbHVtbi1hdXRob3IgeyAgICBcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgfVxyXG5cclxuICB0aC5tYXQtaGVhZGVyLWNlbGwuY2RrLWNvbHVtbi1jb21tZW50IHsgICAgXHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gIH1cclxuXHJcbiAgdGgubWF0LWhlYWRlci1jZWxsLmNkay1jb2x1bW4tY3JlYXRlZEF0IHsgICAgXHJcbiAgICB3aWR0aDogMjUlOyAgICBcclxuICB9XHJcblxyXG4gIHRoLm1hdC1oZWFkZXItY2VsbC5jZGstY29sdW1uLWVkaXQgeyAgICBcclxuICAgIHdpZHRoOiA1JTtcclxuICB9XHJcblxyXG4gIHRoLm1hdC1oZWFkZXItY2VsbC5jZGstY29sdW1uLWRlbGV0ZSB7ICAgIFxyXG4gICAgd2lkdGg6IDUlO1xyXG4gIH1cclxuIFxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IFxyXG59XHJcblxyXG4jY29udGFpbmVyID4gZGl2IHtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/blogPost-list/blogPost-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/blogPost-list/blogPost-list.component.ts ***!
  \**********************************************************/
/*! exports provided: BlogPostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPostListComponent", function() { return BlogPostListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _modal_modal_comment_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modal/modal-comment.component */ "./src/app/modal/modal-comment.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modal/modal.component */ "./src/app/modal/modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};









var URL = '/api/upload';
var BlogPostListComponent = /** @class */ (function () {
    function BlogPostListComponent(api, route, router, dialog, formBuilder, snackBar) {
        this.api = api;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.snackBar = snackBar;
        this.id = '';
        this.image = '';
        this.title = '';
        this.short_desc = '';
        this.author = '';
        this.createdAt = '';
        this.updatedAt = '';
        this.matcher = '';
        this.loggedInUser = '';
        this.isCommentOwner = false;
        this.imagePathAndFilename = '';
        this.uploadOnly = false;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploader"]({ url: URL, itemAlias: 'photo' });
        this.commentsOpen = false;
        this.detailsEditOpen = false;
        this.listOpen = true;
        this.displayedColumns = null;
        this.displayedPostColumns = null;
        this.startSet = 0;
        this.endSet = 5;
        this.blogPostListJson = [
            { "_id": "5d328f47ee6658054cc8ecbf", "title": "Canadian Stamps", "category": "Canadian", "short_desc": "Very expensive stamps!  These are very awesome!", "author": "Debra Hodges", "image": "assets/images/bluenose-1293452__340.png", "createdAt": "02/09/2019", "updatedAt": { "$date": { "$numberLong": "1567281571927" } }, "__v": { "$numberInt": "0" } },
            { "_id": "5d3d18486c064f2eb4a321c6", "title": "Bavarian Stamps", "category": "Western European", "short_desc": "Stamps from Bavaria.", "author": "Debra Hodges", "image": "assets/images/GLYN Perfin.jpg", "createdAt": "03/16/2019", "updatedAt": { "$date": { "$numberLong": "1567281797424" } }, "__v": { "$numberInt": "0" } },
            { "_id": "5d3d18726c064f2eb4a321c7", "title": "Danish Stamps", "category": "Western Europe", "short_desc": "Stamps from Denmark.", "author": "Debra Hodges", "image": "assets/images/1841 Maltese Cross.jpg", "createdAt": "07/31/2019", "updatedAt": { "$date": { "$numberLong": "1567281814098" } }, "__v": { "$numberInt": "0" } },
            { "_id": "5d3d18a36c064f2eb4a321c8", "title": "Peruvian Stamps", "category": "Very Rare", "short_desc": "Extremely expensive.", "author": "Debra Hodges", "image": "assets/images/Milwaukee Precancel Error.jpg", "createdAt": "08/15/2019", "updatedAt": { "$date": { "$numberLong": "1567281841162" } }, "__v": { "$numberInt": "0" } },
            { "_id": "5d3d19686c064f2eb4a321cb", "title": "French Stamps", "category": "Western European", "short_desc": "Stamps from Paris", "author": "Debra Hodges", "image": "assets/images/UpsideDownJenney.png", "createdAt": "09/22/2019", "updatedAt": { "$date": { "$numberLong": "1567281858272" } }, "__v": { "$numberInt": "0" } },
            { "_id": "5d3d19986c064f2eb4a321cc", "title": "Perfins", "category": "Rare Perfins", "short_desc": "Stamps with holes in them.", "author": "Debra Hodges", "image": "assets/images/N048.5I NCH Perfin 1870.jpg", "createdAt": "10/11/2019", "updatedAt": { "$date": { "$numberLong": "1567281879262" } }, "__v": { "$numberInt": "0" } },
            { "_id": "5d3d1b9a18b64851fc21185c", "title": "Republic of Congo", "category": "African", "short_desc": "Stamps from Congo.", "author": "Debra Hodges", "image": "", "createdAt": "12/10/2019", "updatedAt": { "$date": { "$numberLong": "1567480492403" } }, "__v": { "$numberInt": "0" } },
        ];
        this.blogPostCommentListJson = [
            { "_id": "5d20ff8ee6b32e48e0a9d035", "blogPostId": "5d3d18486c064f2eb4a321c6", "author": "Debra Hodges", "comment": "I love Pre-Cancel stamps!", "createdAt": "02/09/2019", "updatedAt": { "$date": { "$numberLong": "1562452987910" } }, "__v": { "$numberInt": "0" } },
            { "_id": "5d211109c041a8094051653f", "blogPostId": "5d3d18486c064f2eb4a321c6", "author": "Debra Hodges", "comment": "These are great British stamps!", "createdAt": "02/09/2019", "updatedAt": { "$date": { "$numberLong": "1562448137509" } }, "__v": { "$numberInt": "0" } },
            { "_id": "5d211877d97ed428ec4ab4b2", "blogPostId": "5d3d18726c064f2eb4a321c7", "author": "Debra Hodges", "comment": "Test", "createdAt": "02/09/2019", "updatedAt": { "$date": { "$numberLong": "1562450039561" } }, "__v": { "$numberInt": "0" } },
            { "_id": "5d34d887a82a1c4b1cf4ecc1", "blogPostId": "5d3d18726c064f2eb4a321c7", "author": "Debra Hodges", "comment": "This is test 3.", "createdAt": "02/09/2019", "updatedAt": { "$date": { "$numberLong": "1563757670218" } }, "__v": { "$numberInt": "0" } },
            { "_id": "5d34ecc9a82a1c4b1cf4ecc7", "blogPostId": "5d3d18a36c064f2eb4a321c8", "author": "Debra Hodges", "comment": "Pretty stamp! I heard it was the most expensive stamp in the world!", "createdAt": "02/09/2019", "updatedAt": { "$date": { "$numberLong": "1563749577988" } }, "__v": { "$numberInt": "0" } },
            { "_id": "5d34ece3a82a1c4b1cf4ecc8", "blogPostId": "5d3d18a36c064f2eb4a321c8", "author": "Debra Hodges", "comment": "Queen stamps are cool!", "createdAt": "02/09/2019", "updatedAt": { "$date": { "$numberLong": "1563749603134" } }, "__v": { "$numberInt": "0" } },
            { "_id": "5d34ed32a82a1c4b1cf4ecca", "blogPostId": "5d328f47ee6658054cc8ecbf", "author": "Elliott Smith", "comment": "I've always wanted some Hawaiian stamps, but they are too expensive.", "createdAt": "02/09/2019", "updatedAt": { "$date": { "$numberLong": "1563935986725" } }, "__v": { "$numberInt": "0" } },
            { "_id": "5d34ed77a82a1c4b1cf4eccb", "blogPostId": "5d3d19686c064f2eb4a321cb", "author": "Debra Hodges", "comment": "Cool green stamp!", "createdAt": "02/09/2019", "updatedAt": { "$date": { "$numberLong": "1563749751719" } }, "__v": { "$numberInt": "0" } },
            { "_id": "5d34ed8aa82a1c4b1cf4eccc", "blogPostId": "5d3d1b9a18b64851fc21185c", "author": "Harrold Alvin", "comment": "Test", "createdAt": "02/09/2019", "updatedAt": { "$date": { "$numberLong": "1563749770953" } }, "__v": { "$numberInt": "0" } },
        ];
        BlogPostListComponent_1.blogPostListApp = this;
        this.loggedInUser = 'Debra Hodges';
        this.isCommentOwner = true;
    }
    BlogPostListComponent_1 = BlogPostListComponent;
    BlogPostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.displayedPostColumns = ['image', 'title', 'category', 'author', 'createdAt', 'edit'];
        if (this.isCommentOwner == false) {
            this.displayedColumns = ['author', 'comment', 'createdAt', '_id'];
        }
        else if (this.isCommentOwner == true) {
            this.displayedColumns = ['author', 'comment', 'createdAt', 'edit', 'delete', '_id'];
        }
        this.getBlogPost(this.id);
        this.blogPostForm = this.formBuilder.group({
            'image': [null, !_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'title': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'category': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'short_desc': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'author': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
        this.api.getBlogPosts()
            .subscribe(function (res) {
            console.log(res);
            _this.blogPosts = _this.blogPostListJson; //res;      
            _this.blogPosts = _this.blogPosts.slice(_this.startSet, _this.endSet);
            _this.dataSource = _this.blogPosts;
        }, function (err) {
            console.log(err);
        });
        this.uploader.onAfterAddingFile = function (file) {
            file.withCredentials = false;
        };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log('ImageUpload:uploaded:', item, status, response);
            _this.imagePathAndFilename = 'assets/images/' + item._file.name;
            _this.blogPost = _this.blogPostForm.getRawValue();
            _this.blogPostForm.setValue({
                image: _this.imagePathAndFilename,
                title: _this.blogPost.title,
                category: _this.blogPost.category,
                author: _this.blogPost.author,
                short_desc: _this.blogPost.short_desc,
            });
        };
    };
    BlogPostListComponent.prototype.cloneComments = function () {
        return this.blogPostCommentListJson;
    };
    BlogPostListComponent.prototype.scrollToTop = function () {
        var element = document.getElementById("mainUL");
        element.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
        return false;
    };
    BlogPostListComponent.prototype.deleteItem = function (id) {
        var _this = this;
        this.api.deleteBlogPost(id)
            .subscribe(function (res) {
            _this.openSnackBar('Blog post deleted!', '');
            _this.api.getBlogPosts()
                .subscribe(function (res) {
                console.log(res);
                _this.blogPosts = res;
                _this.dataSource = _this.blogPosts;
            }, function (err) {
                console.log(err);
            });
            _this.swapWhatIsOpen('list');
        }, function (err) {
            console.log(err);
        });
    };
    BlogPostListComponent.prototype.getBlogPost = function (id) {
        var _this = this;
        this.api.getBlogPost(id).subscribe(function (data) {
            _this.id = data._id;
            _this.blogPostForm.setValue({
                image: data.image,
                title: data.title,
                category: data.category,
                short_desc: data.short_desc,
                author: data.author,
            });
        });
    };
    BlogPostListComponent.prototype.saveForm = function (form) {
        var _this = this;
        this.api.updateBlogPost(this.id, form)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.openSnackBar('Blog post updated!', '');
            _this.api.getBlogPosts()
                .subscribe(function (res) {
                console.log(res);
                _this.blogPosts = res;
                if (_this.blogPosts && _this.blogPosts.length > 0) {
                    _this.swapWhatIsOpen('list');
                }
            }, function (err) {
                console.log(err);
            });
        }, function (err) {
            console.log(err);
        });
    };
    BlogPostListComponent.prototype.editItem = function (id) {
        this.getBlogPost(id);
        this.swapWhatIsOpen('detailsEdit');
    };
    BlogPostListComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
            verticalPosition: 'top'
        });
    };
    BlogPostListComponent.prototype.swapWhatIsOpen = function (divToShow) {
        if (divToShow == 'detailsEdit') {
            this.detailsEditOpen = true;
            this.listOpen = false;
        }
        if (divToShow == 'detailsEditBack') {
            this.detailsEditOpen = false;
            this.listOpen = false;
        }
        if (divToShow == 'list') {
            this.id = '';
            this.detailsEditOpen = false;
            this.listOpen = true;
        }
    };
    BlogPostListComponent.prototype.addPost = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_8__["ModalComponent"], {
            width: '600px', data: { blogPostId: this.id },
        });
        var sub = dialogRef.componentInstance.onAdd.subscribe(function () {
            _this.ngOnInit();
        });
        dialogRef.afterClosed().subscribe(function () {
            var unsub = dialogRef.componentInstance.onAdd.unsubscribe();
        });
    };
    BlogPostListComponent.prototype.addComment = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_modal_modal_comment_component__WEBPACK_IMPORTED_MODULE_7__["ModalCommentComponent"], {
            width: '550px', data: { blogPostId: id },
        });
        var sub = dialogRef.componentInstance.onAdd.subscribe(function () {
            _this.getFilteredComments(id);
        });
        dialogRef.afterClosed().subscribe(function () {
            var unsub = dialogRef.componentInstance.onAdd.unsubscribe();
        });
    };
    BlogPostListComponent.prototype.getFilteredComments = function (id) {
        this.comments = this.cloneComments();
        this.dataSource1 = this.comments.filter(function (item) { return item.blogPostId === id; });
        //this.api.getComments()
        //.subscribe(res => {        
        //this.comments = //res;        
        // if (this.comments.length > 0)
        // {         
        //   this.comments.forEach(element => {
        //     if (element.blogPostId === id)
        //     {
        //       this.comment = element;
        //     }            
        //   });  
        // }       
        // this.dataSource1 = this.comments.filter(
        //   item => item.blogPostId === id
        //   && item.author === this.loggedInUser);
        //}, (err) => {
        //  console.log(err);
        //});      
    };
    BlogPostListComponent.prototype.showHideComments = function (blogPostId) {
        if (!this.commentsOpen) {
            this.id = blogPostId;
            this.commentsOpen = true;
            this.getFilteredComments(this.id);
        }
        else {
            this.id = '';
            this.commentsOpen = false;
        }
    };
    BlogPostListComponent.prototype.editComment = function (commentId) {
        var _this = this;
        var dialogRef = this.dialog.open(_modal_modal_comment_component__WEBPACK_IMPORTED_MODULE_7__["ModalCommentComponent"], {
            width: '550px', data: { blogPostId: this.id, commentId: commentId },
        });
        var sub = dialogRef.componentInstance.onAdd.subscribe(function () {
            _this.getFilteredComments(_this.id);
        });
        dialogRef.afterClosed().subscribe(function () {
            var unsub = dialogRef.componentInstance.onAdd.unsubscribe();
        });
    };
    BlogPostListComponent.prototype.deleteComment = function (commentId) {
        var _this = this;
        this.api.deleteComment(commentId)
            .subscribe(function (res) {
            _this.openSnackBar('Comment deleted!', '');
            _this.getFilteredComments(_this.id);
        }, function (err) {
            console.log(err);
        });
    };
    BlogPostListComponent.prototype.loadPreviousBlogPosts = function () {
        var _this = this;
        this.api.getBlogPosts()
            .subscribe(function (res) {
            console.log(res);
            _this.blogPosts = res;
            _this.startSet = _this.startSet - 5;
            _this.endSet = _this.endSet - 5;
            _this.blogPosts = _this.blogPosts.slice(_this.startSet, _this.endSet);
            _this.dataSource = _this.blogPosts;
        }, function (err) {
            console.log(err);
        });
        if (this.startSet > 0 && this.endSet > 0) {
        }
    };
    BlogPostListComponent.prototype.loadNextBlogPosts = function () {
        var _this = this;
        this.api.getBlogPosts()
            .subscribe(function (res) {
            console.log(res);
            _this.blogPosts = res;
            _this.blogPosts = _this.blogPosts.slice(_this.startSet, _this.endSet);
            _this.dataSource = _this.blogPosts;
        }, function (err) {
            console.log(err);
        });
        this.startSet = this.endSet;
        this.endSet = this.endSet + 5;
        if (this.startSet > 0 && this.endSet > 0) {
        }
    };
    var BlogPostListComponent_1;
    BlogPostListComponent.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sectionToScrollTo', { static: true }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BlogPostListComponent.prototype, "sectionToScrollTo", void 0);
    BlogPostListComponent = BlogPostListComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blogPost-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./blogPost-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/blogPost-list/blogPost-list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./blogPost-list.component.css */ "./src/app/blogPost-list/blogPost-list.component.css")).default]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], BlogPostListComponent);
    return BlogPostListComponent;
}());



/***/ }),

/***/ "./src/app/blogPost-main/blogPost-main.component.css":
/*!***********************************************************!*\
  !*** ./src/app/blogPost-main/blogPost-main.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".orangeButton\r\n{\r\n  background-color: orangered;\r\n}\r\n\r\n#container {\r\n  display: flex;\r\n  justify-content:center;\r\n  align-content:center;\r\n  flex-direction:column; \r\n  background-color: lightgray;\r\n  padding: 10px;\r\n}\r\n\r\n#container1 {\r\n  display: flex;\r\n  justify-content:center;\r\n  align-content:center;\r\n  flex-direction:column; \r\n  margin:10px;  \r\n}\r\n\r\n#container2 {\r\n  margin:20px;\r\n  text-align:center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvZ1Bvc3QtbWFpbi9ibG9nUG9zdC1tYWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUUsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2Jsb2dQb3N0LW1haW4vYmxvZ1Bvc3QtbWFpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm9yYW5nZUJ1dHRvblxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlcmVkO1xyXG59XHJcblxyXG4jY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgYWxpZ24tY29udGVudDpjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246Y29sdW1uOyBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuI2NvbnRhaW5lcjEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OmNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47IFxyXG4gIG1hcmdpbjoxMHB4OyAgXHJcbn1cclxuXHJcbiNjb250YWluZXIyIHtcclxuICBtYXJnaW46MjBweDtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/blogPost-main/blogPost-main.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/blogPost-main/blogPost-main.component.ts ***!
  \**********************************************************/
/*! exports provided: BlogPostMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPostMainComponent", function() { return BlogPostMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/modal.component */ "./src/app/modal/modal.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _blogPost_list_blogPost_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../blogPost-list/blogPost-list.component */ "./src/app/blogPost-list/blogPost-list.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _transfer_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../transfer.service */ "./src/app/transfer.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var BlogPostMainComponent = /** @class */ (function () {
    function BlogPostMainComponent(transferService, router, route, apiService, dialog) {
        this.transferService = transferService;
        this.router = router;
        this.route = route;
        this.apiService = apiService;
        this.dialog = dialog;
        this.title = '';
        this.image = '';
        this.category = '';
        this.content = '';
        this.createdAt = '';
    }
    BlogPostMainComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(_modal_modal_component__WEBPACK_IMPORTED_MODULE_3__["ModalComponent"], {
            width: '600px', data: { title: '' },
        });
        var sub = dialogRef.componentInstance.onAdd.subscribe(function () {
            _blogPost_list_blogPost_list_component__WEBPACK_IMPORTED_MODULE_5__["BlogPostListComponent"].blogPostListApp.ngOnInit();
            _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"].homeApp.selectedIndex = 1;
        });
        dialogRef.afterClosed().subscribe(function () {
            var unsub = dialogRef.componentInstance.onAdd.unsubscribe();
        });
    };
    BlogPostMainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getAllBlogContent()
            .subscribe(function (res) {
            console.log(res);
            if (res) {
                _this.blogContent = res.filter(function (o) { return o.currentBlog == true; });
                _this.title = _this.blogContent[0].title;
                _this.image = _this.blogContent[0].image;
                _this.category = _this.blogContent[0].category;
                _this.content = _this.blogContent[0].content;
                _this.createdAt = _this.blogContent[0].createdAt;
                //BlogPostListComponent.blogPostListApp.ngOnInit();         
            }
        }, function (err) {
            console.log(err);
        });
    };
    BlogPostMainComponent.ctorParameters = function () { return [
        { type: _transfer_service__WEBPACK_IMPORTED_MODULE_7__["TransferService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
    ]; };
    BlogPostMainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blogPost-main',
            template: __importDefault(__webpack_require__(/*! raw-loader!./blogPost-main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/blogPost-main/blogPost-main.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./blogPost-main.component.css */ "./src/app/blogPost-main/blogPost-main.component.css")).default]
        }),
        __metadata("design:paramtypes", [_transfer_service__WEBPACK_IMPORTED_MODULE_7__["TransferService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], BlogPostMainComponent);
    return BlogPostMainComponent;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.css":
/*!*****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".my-form{\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .full-width {\r\n    width: 100%;\r\n  }\r\n  \r\n  mat-card \r\n{   \r\n    height: 100%;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n}\r\n  \r\n  body {\r\n  font-family: arial;\r\n  font-size: 12px;\r\n  color: #666;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLFdBQVc7RUFDYjs7RUFHQTs7SUFFRSxZQUFZO0lBQ1osV0FBVztJQUNYLHNCQUFzQjtBQUMxQjs7RUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdC11cy9jb250YWN0LXVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXktZm9ybXtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuXHJcbiAgbWF0LWNhcmQgXHJcbnsgICBcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4gIFxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogYXJpYWw7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiAjNjY2O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _models_contact_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/contact.model */ "./src/app/models/contact.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! emailjs-com */ "./node_modules/emailjs-com/source/index.js");
/* harmony import */ var emailjs_com__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(emailjs_com__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};






var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent(api, router, snackBar) {
        this.api = api;
        this.router = router;
        this.snackBar = snackBar;
        this.contact = new _models_contact_model__WEBPACK_IMPORTED_MODULE_2__["Contact"]();
    }
    ContactUsComponent.prototype.ngOnInit = function () {
    };
    ContactUsComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.contact.firstname && this.contact.lastname && this.contact.email
            && this.contact.subject && this.contact.message) {
            this.api.saveContact(this.contact).subscribe(function (result) {
                console.log('result is ', result);
                if (result['_id'] != '') {
                    _this.openSnackBar('Message submitted', '');
                    emailjs_com__WEBPACK_IMPORTED_MODULE_5__["init"]("user_NVqyc8NO6ozXZIUD43yMd");
                    var service_id = "gmail";
                    var template_id = "template_92biXOC3";
                    var template_params = {
                        "reply_to": _this.contact.email,
                        "from_name": _this.contact.firstname + " " + _this.contact.lastname,
                        "to_name": "dhodges351@gmail.com",
                        "subject": _this.contact.subject,
                        "message_html": _this.contact.message
                    };
                    emailjs_com__WEBPACK_IMPORTED_MODULE_5__["send"](service_id, template_id, template_params)
                        .then(function () {
                        alert("Sent!");
                    }, function (err) {
                        alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
                    });
                    _this.router.navigate(['/home']);
                }
                else {
                    alert('Invalid form');
                }
            }, function (error) {
                console.log('error is ', error);
            });
        }
        else {
            alert('enter all form fields');
        }
    };
    ContactUsComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
            verticalPosition: 'top'
        });
    };
    ContactUsComponent.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
    ]; };
    ContactUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact-us',
            template: __importDefault(__webpack_require__(/*! raw-loader!./contact-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./contact-us.component.css */ "./src/app/contact-us/contact-us.component.css")).default]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var DataService = /** @class */ (function () {
    function DataService() {
        this._listener = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.tabListener = this._listener.asObservable();
    }
    DataService.prototype.changeTab = function (newTabIndex) {
        this._listener.next(newTabIndex);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("section div p{\n    color: #3f51b5;\n    font-size: 30px;\n    text-shadow: 2px 3px 5px grey;\n    margin: 30px 0;\n}\n\nsection div + p{\n    color: #3f51b5;\n    font-weight: bold;\n    font-size: 20px;\n    padding-bottom: 20px;\n}\n\nmat-tab-group {\n    text-align: left;\n}\n\nmat-tab-group p {\n    padding-top: 20px;\n}\n\n#container {\n    margin: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLDZCQUE2QjtJQUM3QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiBkaXYgcHtcbiAgICBjb2xvcjogIzNmNTFiNTtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgdGV4dC1zaGFkb3c6IDJweCAzcHggNXB4IGdyZXk7XG4gICAgbWFyZ2luOiAzMHB4IDA7XG59XG5cbnNlY3Rpb24gZGl2ICsgcHtcbiAgICBjb2xvcjogIzNmNTFiNTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbm1hdC10YWItZ3JvdXAge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbm1hdC10YWItZ3JvdXAgcCB7XG4gICAgcGFkZGluZy10b3A6IDIwcHg7XG59XG5cbiNjb250YWluZXIge1xuICAgIG1hcmdpbjogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _blogPost_list_blogPost_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blogPost-list/blogPost-list.component */ "./src/app/blogPost-list/blogPost-list.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(data) {
        var _this = this;
        this.data = data;
        this.selectedIndex = 0;
        this.selected = "../assets/exhibits/US Perfins - Their First Year.pdf";
        this.executeSelectedChange = function (event) {
            console.log(event);
            if (event.index == 1) {
                _blogPost_list_blogPost_list_component__WEBPACK_IMPORTED_MODULE_2__["BlogPostListComponent"].blogPostListApp.swapWhatIsOpen('list');
            }
        };
        this.data.tabListener.subscribe(function (newIndex) { return _this.selectedIndex = newIndex; });
    }
    HomeComponent_1 = HomeComponent;
    HomeComponent.prototype.ngOnInit = function () {
        HomeComponent_1.homeApp = this;
    };
    var HomeComponent_1;
    HomeComponent.ctorParameters = function () { return [
        { type: _data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"] }
    ]; };
    HomeComponent = HomeComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
        }),
        __metadata("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.component.css":
/*!*********************************************!*\
  !*** ./src/app/layout/layout.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".layout-wrapper{\n    height: 100%;\n}\n\n.flex-wrapper{\n    height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2xheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvbGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGF5b3V0LXdyYXBwZXJ7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZmxleC13cmFwcGVye1xuICAgIGhlaWdodDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/layout/layout.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/layout.component.ts ***!
  \********************************************/
/*! exports provided: LayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutComponent", function() { return LayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var LayoutComponent = /** @class */ (function () {
    function LayoutComponent() {
    }
    LayoutComponent.prototype.ngOnInit = function () {
    };
    LayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-layout',
            template: __importDefault(__webpack_require__(/*! raw-loader!./layout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/layout.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./layout.component.css */ "./src/app/layout/layout.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], LayoutComponent);
    return LayoutComponent;
}());



/***/ }),

/***/ "./src/app/loading/loading.component.css":
/*!***********************************************!*\
  !*** ./src/app/loading/loading.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loading {\n  display: flex;\n  min-height: 500px;\n  align-items: center;\n  justify-content: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9sb2FkaW5nL2xvYWRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogNTAwcHg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/loading/loading.component.ts":
/*!**********************************************!*\
  !*** ./src/app/loading/loading.component.ts ***!
  \**********************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var LoadingComponent = /** @class */ (function () {
    function LoadingComponent() {
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    LoadingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-loading',
            template: __importDefault(__webpack_require__(/*! raw-loader!./loading.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loading/loading.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./loading.component.css */ "./src/app/loading/loading.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-form {\r\n  min-width: 150px;\r\n  max-width: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n.example-full-width:nth-last-child() {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.button-row {\r\n  margin: 10px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1mb3JtIHtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoOm50aC1sYXN0LWNoaWxkKCkge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5idXR0b24tcm93IHtcclxuICBtYXJnaW46IDEwcHggMDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(api, formBuilder, router, snackBar) {
        this.api = api;
        this.formBuilder = formBuilder;
        this.router = router;
        this.snackBar = snackBar;
        this.isLoggedIn = false;
        this.email = '';
        this.password = '';
        this.matcher = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    LoginComponent.prototype.onFormSubmit = function (form) {
        // this.api.saveBlogContent(form)
        //   .subscribe(res => {          
        this.openSnackBar('Login successful!', '');
        this.router.navigate(['/home']);
        //     }, (err) => {
        //       console.log(err);
        //     }
        //   );
    };
    LoginComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
            verticalPosition: 'top'
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
        }),
        __metadata("design:paramtypes", [_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"]
            ],
            declarations: []
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/modal/modal-comment.component.css":
/*!***************************************************!*\
  !*** ./src/app/modal/modal-comment.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-full-width {\r\n    width: 100%;\r\n  }\r\n  \r\n  .example-full-width:nth-last-child() {\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  .button-row {\r\n    margin: 10px 0;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwvbW9kYWwtY29tbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0VBQ2I7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxjQUFjO0VBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbW9kYWwvbW9kYWwtY29tbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZm9ybSB7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1mdWxsLXdpZHRoOm50aC1sYXN0LWNoaWxkKCkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbi1yb3cge1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgfVxyXG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/modal/modal-comment.component.ts":
/*!**************************************************!*\
  !*** ./src/app/modal/modal-comment.component.ts ***!
  \**************************************************/
/*! exports provided: ModalCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalCommentComponent", function() { return ModalCommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var ModalCommentComponent = /** @class */ (function () {
    function ModalCommentComponent(dialogRef, router, route, api, formBuilder, data) {
        this.dialogRef = dialogRef;
        this.router = router;
        this.route = route;
        this.api = api;
        this.formBuilder = formBuilder;
        this.data = data;
        this.blogPostId = '';
        this.author = '';
        this.comment = '';
        this.commentId = '';
        this.matcher = '';
        this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.blogPostId = data.blogPostId;
        if (data.commentId != undefined) {
            this.commentId = data.commentId;
        }
    }
    ModalCommentComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ModalCommentComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    ModalCommentComponent.prototype.ngOnInit = function () {
        this.blogCommentForm = this.formBuilder.group({
            'blogPostId': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'author': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'comment': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        if (this.commentId != '') {
            this.getCommentDetails(this.commentId);
        }
        else {
            this.blogCommentForm.setValue({
                blogPostId: this.blogPostId,
                author: '',
                comment: ''
            });
        }
    };
    ModalCommentComponent.prototype.getCommentDetails = function (id) {
        var _this = this;
        this.api.getCommentDetails(id)
            .subscribe(function (data) {
            console.log(data);
            _this.commentObject = data;
            _this.commentId = data._id;
            _this.blogCommentForm.setValue({
                blogPostId: _this.data.blogPostId,
                author: _this.commentObject.author,
                comment: _this.commentObject.comment
            });
        });
    };
    ModalCommentComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.onAdd.emit();
        if (this.commentId != '') {
            this.api.updateComment(this.commentId, form)
                .subscribe(function (data) {
                console.log(data);
                _this.commentObject = data;
                _this.commentId = data._id;
                _this.blogCommentForm.setValue({
                    blogPostId: _this.data.blogPostId,
                    author: _this.commentObject.author,
                    comment: _this.commentObject.comment
                });
            });
        }
        else {
            this.api.saveComment(form)
                .subscribe(function (res) {
            }, function (err) {
                console.log(err);
            });
        }
        this.onClose();
    };
    ModalCommentComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"],] }] }
    ]; };
    ModalCommentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-comment',
            template: __importDefault(__webpack_require__(/*! raw-loader!./modal-comment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal/modal-comment.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./modal-comment.component.css */ "./src/app/modal/modal-comment.component.css")).default]
        }),
        __param(5, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], Object])
    ], ModalCommentComponent);
    return ModalCommentComponent;
}());



/***/ }),

/***/ "./src/app/modal/modal.component.css":
/*!*******************************************!*\
  !*** ./src/app/modal/modal.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dialogTitle {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.example-form {\r\n    min-width: 150px;\r\n    max-width: 500px;\r\n    width: 100%;\r\n  }\r\n\r\n.example-full-width {\r\n    width: 100%;\r\n  }\r\n\r\n.example-full-width:nth-last-child() {\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n.button-row {\r\n    margin: 10px 0;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2I7O0FBRUE7SUFDRSxXQUFXO0VBQ2I7O0FBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxjQUFjO0VBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbW9kYWwvbW9kYWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2dUaXRsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmV4YW1wbGUtZm9ybSB7XHJcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1mdWxsLXdpZHRoOm50aC1sYXN0LWNoaWxkKCkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbi1yb3cge1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/modal/modal.component.ts":
/*!******************************************!*\
  !*** ./src/app/modal/modal.component.ts ***!
  \******************************************/
/*! exports provided: ModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComponent", function() { return ModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _models_Blogpost__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/Blogpost */ "./src/app/models/Blogpost.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};








var URL = '/api/upload';
var ModalComponent = /** @class */ (function () {
    function ModalComponent(dialogRef, router, route, api, formBuilder, snackBar) {
        this.dialogRef = dialogRef;
        this.router = router;
        this.route = route;
        this.api = api;
        this.formBuilder = formBuilder;
        this.snackBar = snackBar;
        this.id = '';
        this.title = '';
        this.category = '';
        this.short_desc = '';
        this.author = '';
        this.image = '';
        this.imagePathAndFilename = '';
        this.uploadOnly = false;
        this.matcher = '';
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_5__["FileUploader"]({ url: URL, itemAlias: 'photo' });
        this.onAdd = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ModalComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    ModalComponent.prototype.onClose = function () {
        this.dialogRef.close();
    };
    ModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blogPost = new _models_Blogpost__WEBPACK_IMPORTED_MODULE_6__["Blogpost"]();
        this.blogPostForm = this.formBuilder.group({
            'title': [null, !_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'category': [null, !_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'short_desc': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'author': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'image': [null, !_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.uploader.onAfterAddingFile = function (file) {
            file.withCredentials = false;
        };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log('ImageUpload:uploaded:', item, status, response);
            _this.imagePathAndFilename = 'assets/images/' + item._file.name;
            _this.blogPost = _this.blogPostForm.getRawValue();
            _this.blogPostForm.setValue({
                image: _this.imagePathAndFilename,
                title: _this.blogPost.title,
                category: _this.blogPost.category,
                author: _this.blogPost.author,
                short_desc: _this.blogPost.short_desc,
            });
        };
    };
    ModalComponent.prototype.getBlogPost = function (id) {
        var _this = this;
        this.api.getBlogPost(id).subscribe(function (data) {
            _this.id = data._id;
            _this.blogPostForm.setValue({
                title: data.title,
                category: data.category,
                short_desc: data.short_desc,
                author: data.author,
                image: data.image
            });
        });
    };
    ModalComponent.prototype.onFormSubmit = function (form) {
        var _this = this;
        this.onAdd.emit();
        this.api.postBlogPost(form)
            .subscribe(function (res) {
            _this.openSnackBar('Blog post submitted!', '');
        }, function (err) {
            console.log(err);
        });
        this.onClose();
    };
    ModalComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
            verticalPosition: 'top'
        });
    };
    ModalComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"] }
    ]; };
    ModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal',
            template: __importDefault(__webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modal/modal.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./modal.component.css */ "./src/app/modal/modal.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_7__["MatSnackBar"]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/models/Blogpost.ts":
/*!************************************!*\
  !*** ./src/app/models/Blogpost.ts ***!
  \************************************/
/*! exports provided: Blogpost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Blogpost", function() { return Blogpost; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Blogpost = /** @class */ (function () {
    function Blogpost() {
    }
    return Blogpost;
}());



/***/ }),

/***/ "./src/app/models/blogcontent.ts":
/*!***************************************!*\
  !*** ./src/app/models/blogcontent.ts ***!
  \***************************************/
/*! exports provided: BlogContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogContent", function() { return BlogContent; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var BlogContent = /** @class */ (function () {
    function BlogContent() {
        this.id = '';
        this.title = '';
        this.image = '';
        this.content = '';
        this.category = '';
        this.currentBlog = false;
    }
    return BlogContent;
}());



/***/ }),

/***/ "./src/app/models/contact.model.ts":
/*!*****************************************!*\
  !*** ./src/app/models/contact.model.ts ***!
  \*****************************************/
/*! exports provided: Contact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var Contact = /** @class */ (function () {
    function Contact() {
        this.id = '';
        this.firstname = '';
        this.lastname = '';
        this.email = '';
        this.subject = '';
        this.message = '';
    }
    return Contact;
}());



/***/ }),

/***/ "./src/app/navigation/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/navigation/footer/footer.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container\r\n{\r\n    margin-top: 40px;\r\n}\r\n\r\nfooter {\r\n    background-color: white;\r\n    margin:0px;\r\n    padding:0px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJcclxue1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luOjBweDtcclxuICAgIHBhZGRpbmc6MHB4O1xyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/navigation/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/navigation/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/footer/footer.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./footer.component.css */ "./src/app/navigation/footer/footer.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/navigation/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/navigation/header/header.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\r\n    text-decoration: none;\r\n    color: white;\r\n    font-family: cursive;\r\n}\r\n\r\na:hover, a:active{\r\n    color: lightgray;\r\n}\r\n\r\n.navigation-items{\r\n    list-style-type: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nmat-toolbar{\r\n    border-radius: 3px;\r\n    height:77px;\r\n}\r\n\r\n@media(max-width: 959px){\r\n    mat-toolbar{\r\n        border-radius: 0px;\r\n    }\r\n}\r\n\r\n.box {\r\n    display: flex;\r\n    align-items:center;\r\n    margin-left: 10px;\r\n    margin-top: 10px;\r\n }\r\n\r\nli {\r\n     list-style: none;\r\n }\r\n\r\n.imgUl {\r\n     padding-top:25px;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixnQkFBZ0I7Q0FDbkI7O0FBRUE7S0FDSSxnQkFBZ0I7Q0FDcEI7O0FBRUE7S0FDSSxnQkFBZ0I7Q0FDcEIiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbn1cclxuXHJcbmE6aG92ZXIsIGE6YWN0aXZle1xyXG4gICAgY29sb3I6IGxpZ2h0Z3JheTtcclxufVxyXG5cclxuLm5hdmlnYXRpb24taXRlbXN7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5tYXQtdG9vbGJhcntcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGhlaWdodDo3N3B4O1xyXG59XHJcblxyXG5AbWVkaWEobWF4LXdpZHRoOiA5NTlweCl7XHJcbiAgICBtYXQtdG9vbGJhcntcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5ib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuIH1cclxuXHJcbiBsaSB7XHJcbiAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuIH0gXHJcblxyXG4gLmltZ1VsIHtcclxuICAgICBwYWRkaW5nLXRvcDoyNXB4O1xyXG4gfSJdfQ== */");

/***/ }),

/***/ "./src/app/navigation/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/navigation/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(auth) {
        var _this = this;
        this.auth = auth;
        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onToggleSidenav = function () {
            _this.sidenavToggle.emit();
        };
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "sidenavToggle", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __importDefault(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/header/header.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./header.component.css */ "./src/app/navigation/header/header.component.css")).default]
        }),
        __metadata("design:paramtypes", [src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/navigation/sidenav-list/sidenav-list.component.css":
/*!********************************************************************!*\
  !*** ./src/app/navigation/sidenav-list/sidenav-list.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\n    text-decoration: none;\n    color: white;\n}\n\na:hover, a:active{\n    color: lightgray;\n}\n\n.nav-caption{\n    display: inline-block;\n    padding-left: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9zaWRlbmF2LWxpc3Qvc2lkZW5hdi1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixpQkFBaUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uL3NpZGVuYXYtbGlzdC9zaWRlbmF2LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbmE6aG92ZXIsIGE6YWN0aXZle1xuICAgIGNvbG9yOiBsaWdodGdyYXk7XG59XG5cbi5uYXYtY2FwdGlvbntcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcGFkZGluZy1sZWZ0OiA2cHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/navigation/sidenav-list/sidenav-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/navigation/sidenav-list/sidenav-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: SidenavListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavListComponent", function() { return SidenavListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var SidenavListComponent = /** @class */ (function () {
    function SidenavListComponent(auth) {
        var _this = this;
        this.auth = auth;
        this.sidenavClose = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onSidenavClose = function () {
            _this.sidenavClose.emit();
        };
    }
    SidenavListComponent.prototype.ngOnInit = function () {
    };
    SidenavListComponent.ctorParameters = function () { return [
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SidenavListComponent.prototype, "sidenavClose", void 0);
    SidenavListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidenav-list',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sidenav-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/sidenav-list/sidenav-list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./sidenav-list.component.css */ "./src/app/navigation/sidenav-list/sidenav-list.component.css")).default]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SidenavListComponent);
    return SidenavListComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2Utbm90LWZvdW5kL3BhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent(router) {
        this.router = router;
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent.prototype.gotoHome = function () {
        this.router.navigate(['/']);
    };
    PageNotFoundComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __importDefault(__webpack_require__(/*! raw-loader!./page-not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/page-not-found/page-not-found.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pages/callback/callback.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/callback/callback.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhbGxiYWNrL2NhbGxiYWNrLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/callback/callback.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/callback/callback.component.ts ***!
  \******************************************************/
/*! exports provided: CallbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallbackComponent", function() { return CallbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var CallbackComponent = /** @class */ (function () {
    function CallbackComponent(auth) {
        this.auth = auth;
    }
    CallbackComponent.prototype.ngOnInit = function () {
        this.auth.handleAuthCallback();
    };
    CallbackComponent.ctorParameters = function () { return [
        { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
    ]; };
    CallbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-callback',
            template: __importDefault(__webpack_require__(/*! raw-loader!./callback.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/callback/callback.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./callback.component.css */ "./src/app/pages/callback/callback.component.css")).default]
        }),
        __metadata("design:paramtypes", [src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], CallbackComponent);
    return CallbackComponent;
}());



/***/ }),

/***/ "./src/app/pages/profile/profile.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".userImg {\n  border-radius: 100px;\n  display: block;\n  height: 100px;\n  margin: 0 auto;\n  width: 100px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGFBQWE7RUFDYixjQUFjO0VBQ2QsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlckltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAxMDBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(auth) {
        this.auth = auth;
        this.profileJson = null;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.userProfile$.subscribe(function (profile) { return _this.profileJson = JSON.stringify(profile, null, 2); });
        if (this.profileJson != '') {
            var test = JSON.parse(this.profileJson);
            if (test) {
                //alert(test.name);
            }
        }
    };
    ProfileComponent.ctorParameters = function () { return [
        { type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
    ]; };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __importDefault(__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./profile.component.css */ "./src/app/pages/profile/profile.component.css")).default]
        }),
        __metadata("design:paramtypes", [src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration-component.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/registration/registration-component.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".my-form{\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.full-width {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi1jb21wb25lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi1jb21wb25lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1mb3Jte1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/registration/registration-component.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/registration/registration-component.component.ts ***!
  \******************************************************************/
/*! exports provided: RegistrationComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponentComponent", function() { return RegistrationComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var RegistrationComponentComponent = /** @class */ (function () {
    function RegistrationComponentComponent() {
    }
    RegistrationComponentComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration-component',
            template: __importDefault(__webpack_require__(/*! raw-loader!./registration-component.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/registration/registration-component.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./registration-component.component.css */ "./src/app/registration/registration-component.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], RegistrationComponentComponent);
    return RegistrationComponentComponent;
}());



/***/ }),

/***/ "./src/app/routing/routing.module.ts":
/*!*******************************************!*\
  !*** ./src/app/routing/routing.module.ts ***!
  \*******************************************/
/*! exports provided: RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoutingModule", function() { return RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _blogPost_list_blogPost_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../blogPost-list/blogPost-list.component */ "./src/app/blogPost-list/blogPost-list.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _blog_content_blog_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../blog-content/blog-content.component */ "./src/app/blog-content/blog-content.component.ts");
/* harmony import */ var _blog_content_list_blog_content_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../blog-content-list/blog-content-list.component */ "./src/app/blog-content-list/blog-content-list.component.ts");
/* harmony import */ var _blog_content_edit_blog_content_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../blog-content-edit/blog-content-edit.component */ "./src/app/blog-content-edit/blog-content-edit.component.ts");
/* harmony import */ var _registration_registration_component_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../registration/registration-component.component */ "./src/app/registration/registration-component.component.ts");
/* harmony import */ var _pages_callback_callback_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pages/callback/callback.component */ "./src/app/pages/callback/callback.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../pages/profile/profile.component */ "./src/app/pages/profile/profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
















var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'blogPosts', component: _blogPost_list_blogPost_list_component__WEBPACK_IMPORTED_MODULE_4__["BlogPostListComponent"], data: { title: 'Blog Posts' } },
    { path: 'contact', component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_6__["ContactUsComponent"], data: { title: 'Contact Us' } },
    { path: 'content', component: _blog_content_blog_content_component__WEBPACK_IMPORTED_MODULE_9__["BlogContentComponent"], data: { title: 'Blog Content' }, canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'allBlogContent', component: _blog_content_list_blog_content_list_component__WEBPACK_IMPORTED_MODULE_10__["BlogContentListComponent"], data: { title: 'All Blog Content' }, canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]] },
    { path: 'contentEdit/:id', component: _blog_content_edit_blog_content_edit_component__WEBPACK_IMPORTED_MODULE_11__["BlogContentEditComponent"], data: { title: 'Edit Blog Content' } },
    { path: 'about', component: _about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"], data: { title: 'About' } },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], data: { title: 'Login' } },
    {
        path: 'callback',
        component: _pages_callback_callback_component__WEBPACK_IMPORTED_MODULE_13__["CallbackComponent"]
    },
    {
        path: 'profile',
        component: _pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_14__["AuthGuard"]]
    },
    { path: 'registration', component: _registration_registration_component_component__WEBPACK_IMPORTED_MODULE_12__["RegistrationComponentComponent"], data: { title: 'Register' } },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"] },
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ],
            declarations: []
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/app/transfer.service.ts":
/*!*************************************!*\
  !*** ./src/app/transfer.service.ts ***!
  \*************************************/
/*! exports provided: TransferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferService", function() { return TransferService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var TransferService = /** @class */ (function () {
    function TransferService(router) {
        this.router = router;
    }
    TransferService.prototype.setData = function (data) {
        this.data = data;
    };
    TransferService.prototype.getData = function () {
        var temp = this.data;
        this.clearData();
        return temp;
    };
    TransferService.prototype.clearData = function () {
        this.data = undefined;
    };
    TransferService.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    TransferService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TransferService);
    return TransferService;
}());



/***/ }),

/***/ "./src/app/upload/dialog/dialog.component.css":
/*!****************************************************!*\
  !*** ./src/app/upload/dialog/dialog.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".add-files-btn {\r\n    float: right;\r\n  }\r\n  \r\n  :host {\r\n    height: 100%;\r\n    display: flex;\r\n    flex: 1;\r\n    flex-direction: column;\r\n  }\r\n  \r\n  .actions {\r\n    justify-content: flex-end;\r\n  }\r\n  \r\n  .container {\r\n    height: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2IsT0FBTztJQUNQLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLFlBQVk7RUFDZCIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC9kaWFsb2cvZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkLWZpbGVzLWJ0biB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgfVxyXG4gIFxyXG4gIDpob3N0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgLmFjdGlvbnMge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/upload/dialog/dialog.component.ts":
/*!***************************************************!*\
  !*** ./src/app/upload/dialog/dialog.component.ts ***!
  \***************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _upload_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../upload.service */ "./src/app/upload/upload.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var DialogComponent = /** @class */ (function () {
    function DialogComponent(dialogRef, uploadService) {
        this.dialogRef = dialogRef;
        this.uploadService = uploadService;
        this.files = new Set();
        this.canBeClosed = true;
        this.primaryButtonText = 'Upload';
        this.showCancelButton = true;
        this.uploading = false;
        this.uploadSuccessful = false;
    }
    DialogComponent.prototype.ngOnInit = function () {
    };
    DialogComponent.prototype.addFiles = function () {
        this.file.nativeElement.click();
    };
    DialogComponent.prototype.onFilesAdded = function () {
        var files = this.file.nativeElement.files;
        for (var key in files) {
            if (!isNaN(parseInt(key))) {
                this.files.add(files[key]);
            }
        }
    };
    DialogComponent.prototype.closeDialog = function () {
        var _this = this;
        // if everything was uploaded already, just close the dialog
        if (this.uploadSuccessful) {
            return this.dialogRef.close();
        }
        // set the component state to "uploading"
        this.uploading = true;
        // start the upload and save the progress map
        this.progress = this.uploadService.upload(this.files);
        // convert the progress map into an array
        var allProgressObservables = [];
        for (var key in this.progress) {
            allProgressObservables.push(this.progress[key].progress);
        }
        // Adjust the state variables
        // The OK-button should have the text "Finish" now
        this.primaryButtonText = 'Finish';
        // The dialog should not be closed while uploading
        this.canBeClosed = false;
        this.dialogRef.disableClose = true;
        // Hide the cancel-button
        this.showCancelButton = false;
        // When all progress-observables are completed...
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["forkJoin"])(allProgressObservables).subscribe(function (end) {
            // ... the dialog can be closed again...
            _this.canBeClosed = true;
            _this.dialogRef.disableClose = false;
            // ... the upload was successful...
            _this.uploadSuccessful = true;
            // ... and the component is no longer uploading
            _this.uploading = false;
        });
    };
    DialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] },
        { type: _upload_service__WEBPACK_IMPORTED_MODULE_2__["UploadService"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('file', { static: true }),
        __metadata("design:type", Object)
    ], DialogComponent.prototype, "file", void 0);
    DialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dialog',
            template: __importDefault(__webpack_require__(/*! raw-loader!./dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/upload/dialog/dialog.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./dialog.component.css */ "./src/app/upload/dialog/dialog.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"],
            _upload_service__WEBPACK_IMPORTED_MODULE_2__["UploadService"]])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/upload/upload.component.css":
/*!*********************************************!*\
  !*** ./src/app/upload/upload.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC91cGxvYWQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/upload/upload.component.ts":
/*!********************************************!*\
  !*** ./src/app/upload/upload.component.ts ***!
  \********************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/upload/dialog/dialog.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



//import { UploadService } from './upload.service'

var URL = '/api/upload';
var UploadComponent = /** @class */ (function () {
    function UploadComponent(dialog) {
        this.dialog = dialog;
        this.title = 'Upload';
        //public uploadService: UploadService
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_3__["FileUploader"]({ url: URL, itemAlias: 'photo' });
    }
    UploadComponent.prototype.openUploadDialog = function () {
        var dialogRef = this.dialog.open(_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"], {
            width: '50%',
            height: '50%',
        });
    };
    UploadComponent.prototype.ngOnInit = function () {
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            console.log('ImageUpload:uploaded:', item, status, response);
            alert('File uploaded successfully');
        };
    };
    UploadComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }
    ]; };
    UploadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upload',
            template: __importDefault(__webpack_require__(/*! raw-loader!./upload.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/upload/upload.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./upload.component.css */ "./src/app/upload/upload.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/upload/upload.module.ts":
/*!*****************************************!*\
  !*** ./src/app/upload/upload.module.ts ***!
  \*****************************************/
/*! exports provided: UploadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadModule", function() { return UploadModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _upload_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upload.component */ "./src/app/upload/upload.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _upload_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./upload.service */ "./src/app/upload/upload.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/upload/dialog/dialog.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};










var UploadModule = /** @class */ (function () {
    function UploadModule() {
    }
    UploadModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressBarModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__["FileUploadModule"]
            ],
            declarations: [_upload_component__WEBPACK_IMPORTED_MODULE_2__["UploadComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"]],
            exports: [_upload_component__WEBPACK_IMPORTED_MODULE_2__["UploadComponent"]],
            entryComponents: [_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"]],
            providers: [_upload_service__WEBPACK_IMPORTED_MODULE_6__["UploadService"]],
        })
    ], UploadModule);
    return UploadModule;
}());



/***/ }),

/***/ "./src/app/upload/upload.service.ts":
/*!******************************************!*\
  !*** ./src/app/upload/upload.service.ts ***!
  \******************************************/
/*! exports provided: UploadService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadService", function() { return UploadService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var url = '/api/upload';
var UploadService = /** @class */ (function () {
    function UploadService(http) {
        this.http = http;
    }
    UploadService.prototype.upload = function (files) {
        var _this = this;
        // this will be the our resulting map
        var status = {};
        files.forEach(function (file) {
            // create a new multipart-form for every file
            var formData = new FormData();
            formData.append('file', file, file.name);
            // create a http-post request and pass the form
            // tell it to report the upload progress
            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpRequest"]('POST', url, formData, {
                reportProgress: true
            });
            // create a new progress-subject for every file
            var progress = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            // send the http-request and subscribe for progress-updates
            _this.http.request(req).subscribe(function (event) {
                if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpEventType"].UploadProgress) {
                    // calculate the progress percentage
                    var percentDone = Math.round(100 * event.loaded / event.total);
                    // pass the percentage into the progress-stream
                    progress.next(percentDone);
                }
                else if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                    // Close the progress-stream if we get an answer form the API
                    // The upload is complete
                    progress.complete();
                }
            });
            // Save every progress-observable in a map of all observables
            status[file.name] = {
                progress: progress.asObservable()
            };
        });
        // return the map of progress.observables
        return status;
    };
    UploadService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    UploadService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UploadService);
    return UploadService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dhodg\OneDrive\Documents\Visual Studio 2017\Projects\ng-dh-nav\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map