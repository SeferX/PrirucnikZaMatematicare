import { Injectable } from '@angular/core';
import { Notify } from 'notiflix';

@Injectable({
  providedIn: 'root'
})
export class NotiflixService {

  success(message: string) {
    Notify.Success(message, { timeout: 6000, position: 'right-bottom' })
  }

  failure(message: string) {
    Notify.Failure(message, { timeout: 6000, position: 'right-bottom' })
  }

  warning(message: string) {
    Notify.Warning(message, { timeout: 6000, position: 'right-bottom' })
  }

  info(message: string) {
    Notify.Info(message, { timeout: 6000, position: 'right-bottom' })
  }
}
