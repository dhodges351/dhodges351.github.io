import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map, filter } from 'rxjs/operators';
import { Contact } from './models/contact.model';
import { BlogContent } from './models/blogcontent';
import { Comment } from './models/comment';
import { all } from 'q';
import { User } from './models/user';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = "/api";
const loginUrl = apiUrl + '/login';
const blogContentUrl = apiUrl + '/blogContent';
const commentUrl = apiUrl + '/comment';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  };

  login(email:string, password:string): Observable<any> {
    return this.http.post<User>(loginUrl, {email, password}, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }  

  getBlogPosts(): Observable<any> {
    return this.http.get(apiUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  
  getBlogPost(id: string): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  
  postBlogPost(data): Observable<any> {
    return this.http.post(apiUrl, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  updateBlogPost(id: string, data): Observable<any> {    
    return this.http.put(apiUrl + '/' + id, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  deleteBlogPost(id: string): Observable<{}> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  saveContact(contact: Contact): Observable<any>{
    return this.http.post(apiUrl + '/contact',  
    {
      firstname: contact.firstname,
      lastname: contact.lastname,
      email: contact.email,
      subject: contact.subject,
      message: contact.message
    }, 
    httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  } 

  saveBlogContent(data): Observable<any>{
    return this.http.post(apiUrl + '/blogContent', data, 
    httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }  

  getAllBlogContent(): Observable<any> {
    return this.http.get(apiUrl + '/blogContent', httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  updateBlogContent(id: string, data): Observable<any> {
    return this.http.put(apiUrl + '/blogContent/' + id, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  deleteBlogContent(id: string): Observable<{}> {   
    const url = `${blogContentUrl}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  getBlogContentDetails(id: string): Observable<any> {   
    const url = `${blogContentUrl}/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  saveComment(data): Observable<any>{
    return this.http.post(commentUrl, data, 
    httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  getCommentDetails(id: string): Observable<any> {   
    const url = `${commentUrl}/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  updateComment(id: string, data): Observable<any> {
    return this.http.put(commentUrl + '/' + id, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  
  deleteComment(id: string): Observable<{}> {   
    const url = `${commentUrl}/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  getComments(): Observable<any> {
    return this.http.get(commentUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
    
}
