
export class MergeArrayComponent {
    callApiMethod(arr1: number[], arr2: number[]) {
      const mergedArray = this.mergeAndSortArrays(arr1, arr2);
      console.log('merged and sorted', mergedArray);
      console.log('merged');
    }
  
    mergeAndSortArrays(arr1: number[], arr2: number[]): number[] {
      const mergedArr = [...arr1, ...arr2];
      return this.quickSort(mergedArr);
    }
  
    quickSort(arr: number[]): number[] {
      if (arr.length <= 1) {
        return arr;
      }
  
      const point = arr[Math.floor(arr.length / 2)];
      const left: number[] = [];
      const right: number[] = [];
      const equal: number[] = [];
  
      for (let num of arr) {
        if (num < point) {
          left.push(num);
        } else if (num > point) {
          right.push(num);
        } else {
          equal.push(num);
        }
      }
  
      return [...this.quickSort(left), ...equal, ...this.quickSort(right)];
    }
  }
  
  const arrData1 = [12, 3, 9, 1];
  const arrData2 = [7, 10, 2, 8];
  
  const apicall = new MergeArrayComponent();
  apicall.callApiMethod(arrData1, arrData2);
  