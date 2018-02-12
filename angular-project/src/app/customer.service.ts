import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Customer} from './customer';
import {Observable} from 'rxjs/Observable';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) {
  }

  getCustomersPromise(): Promise<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:3000/customer').toPromise();
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>('http://localhost:3000/customer')
      .pipe(
        catchError(this.handleError('Fehler', []))
      );
  }

  handleError(operation = 'operation', result?: Customer[]) {
    console.log(operation);
    return (error: any): Observable<Customer[]> => {

      // TODO: send the error to remote logging infrastructure
      // console.error(error); // log to console instead

      console.log('Fehler XY');
      // Let the app keep running by returning an empty result.
      return of(result as Customer[]);
    };
  }

  getOneCustomer(id): Observable<Customer> {
    return this.http.get<Customer>('http://localhost:3000/customer/' + id);
  }

  deleteCustomer(id) {
    return this.http.delete(`http://localhost:3000/customer/${id}`);
  }

  createCustomer(customer: Customer) {
    return this.http.post(`http://localhost:3000/customer`, customer);
  }

  editCustomer(customer: Customer) {
    return this.http.put(`http://localhost:3000/customer/${customer.id}`, customer);
  }
}
