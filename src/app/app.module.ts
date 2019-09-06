import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule} from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { RoutingModule } from './routing/routing.module';
import { HeaderComponent } from './navigation/header/header.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { BlogPostMainComponent } from './blogPost-main/blogPost-main.component';
import { BlogPostListComponent } from './blogPost-list/blogPost-list.component';
import { ModalComponent } from './modal/modal.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminModule } from './admin/admin.module';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { BlogContentComponent } from './blog-content/blog-content.component';
import { UploadModule } from './upload/upload.module';
import { FileUploadModule } from 'ng2-file-upload';
import { BlogContentListComponent } from './blog-content-list/blog-content-list.component';
import { BlogContentEditComponent } from './blog-content-edit/blog-content-edit.component';
import { ModalCommentComponent } from './modal/modal-comment.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { DataService } from './data.service';
import { TransferService } from './transfer.service';
import { BlogGalleryComponent } from './blog-gallery/blog-gallery.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { RegistrationComponentComponent } from './registration/registration-component.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HighlightModule } from 'ngx-highlightjs';
import json from 'highlight.js/lib/languages/json';
import { CallbackComponent } from './pages/callback/callback.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoadingComponent } from './loading/loading.component';

library.add(fas, far, fab);

export function hljsLanguages() {
  return [{ name: 'json', func: JSON }];
}

@NgModule({ 
  declarations: [
    AppComponent,
    LayoutComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidenavListComponent,
    BlogPostMainComponent,
    BlogPostListComponent,  
    ModalComponent,
    PageNotFoundComponent,
    ContactUsComponent,
    AboutComponent,
    LoginComponent,
    BlogContentComponent,
    BlogContentListComponent,
    BlogContentEditComponent,
    ModalCommentComponent,
    BlogGalleryComponent,
    RegistrationComponentComponent,
    LoadingComponent,
    CallbackComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    RoutingModule,
    HttpClientModule,
    AdminModule,
    AuthRoutingModule,   
    UploadModule,    
    FileUploadModule,
    NoopAnimationsModule,
    AngularFontAwesomeModule,
    FontAwesomeModule,
    PdfViewerModule,
    NgbModule,
    HighlightModule.forRoot({
      languages: hljsLanguages
    }),
  ],
  providers: [DataService, TransferService],  
  entryComponents: [ModalComponent, ModalCommentComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
