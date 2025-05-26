import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Noticia } from '../models/noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {
  private options = {
    headers: new HttpHeaders({
      'X-RapidAPI-Key': 'a3fea8f835msh76144ccaefaa664p1700c1jsn4bdb9062049a',
      'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
    })
  };

  constructor(private http: HttpClient) { }

  private getImageUrl(article: any): string {
    try {
      if (!article.mainMedia || !Array.isArray(article.mainMedia) || article.mainMedia.length === 0) {
        return 'https://via.placeholder.com/400x300?text=No+Image';
      }

      const mediaItem = article.mainMedia[0];
      
      // Intentar obtener la mejor calidad de imagen disponible
      return mediaItem.gallery?.url ||
             mediaItem.original?.url ||
             mediaItem.thumbnail?.url ||
             'https://via.placeholder.com/400x300?text=No+Image';
    } catch (error) {
      console.error('Error getting image URL:', error);
      return 'https://via.placeholder.com/400x300?text=No+Image';
    }
  }

  getNoticias(): Observable<Noticia[]> {
    return this.http.get('https://livescore6.p.rapidapi.com/news/v2/list', this.options)
      .pipe(
        map((response: any) => {
          console.log('Raw API response:', response);
          if (response?.homepageArticles?.[0]?.articles) {
            return response.homepageArticles[0].articles.map((article: any) => ({
              id: article.id,
              title: article.title,
              description: article.description || article.subtitle,
              mainMedia: article.mainMedia,
              categoryLabel: article.categoryLabel,
              publishedAt: article.publishedAt,
              imageUrl: this.getImageUrl(article)
            }));
          }
          throw new Error('No se encontraron noticias');
        })
      );
  }
}
