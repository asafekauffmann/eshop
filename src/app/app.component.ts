import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CartModel } from './models/cart.model';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  cart$: Observable<CartModel>;

  constructor(private store: Store<CartModel>) {
    this.cart$ = store.pipe(select('cart'));
  }
}
