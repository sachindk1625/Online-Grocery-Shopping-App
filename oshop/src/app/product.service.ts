import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class ProductService {

  constructor(private db:AngularFireDatabase) { }

  create(product)
  {
    this.db.list('/products').push(product);
  }

  getAll()
  {
    return this.db.list('/products');
  }

  getProduct(productId)
  {
    return this.db.object('/products/'+productId);
  }

  update(productId,product)
  {
    this.db.object('/products/'+productId).update(product);
  }

  delete(productId)
  {
    this.db.object('/products/'+productId).remove();
  }

}
