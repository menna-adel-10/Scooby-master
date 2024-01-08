import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatDateService {
  formatDate(date: Date, config?: Intl.DateTimeFormatOptions): string {
    const defaultOptions: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' };
    const options: Intl.DateTimeFormatOptions = config ? config : defaultOptions;

    return new Date(date).toLocaleDateString('en-US', options);
  }
}
