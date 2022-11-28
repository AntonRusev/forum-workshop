import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { IPost } from './shared/interfaces/post';
import { ITheme } from './shared/interfaces/theme';

const apiUrl = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  loadThemes() {
    return this.httpClient.get<ITheme[]>(`${apiUrl}/themes`);
  }

  loadTheme(id: number) {
    return this.httpClient.get<ITheme>(`${apiUrl}/themes/${id}`);
  }

  // TODO set limit to posts shown
  loadPosts(limit?: number) {
    return this.httpClient.get<IPost[]>(`${apiUrl}/posts${limit ? `?limit=${limit}` : '' }`);
  }
}
