import { Observable, from } from 'rxjs';
import { mergeMap, toArray } from 'rxjs/operators';

export class AppComponent {
  callApiMethod(arr1: any, arr2: any) {
    this.mergeArrays(arr1, arr2).subscribe({
      next: (result) => console.log('merged and sorted', result),
      error: (err) => console.error('error:', err),
      complete: () => console.log('merged'),
    });
  }

  mergeArrays(arr1: number[], arr2: number[]): Observable<number[]> {
    return from([...arr1, ...arr2]).pipe(
      toArray(),
      mergeMap((mergedArr) => from([mergedArr.sort((a, b) => a - b)]))
    );
  }
}
const arrData1 = [12, 3, 9, 1];
const arrData2 = [7, 10, 2, 8];

const apicall = new AppComponent();
apicall.callApiMethod(arrData1, arrData2);
