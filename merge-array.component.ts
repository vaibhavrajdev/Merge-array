export class MergeArrayComponent {
  smallSorting: number = 30;

  callApiMethod(arr1: number[], arr2: number[]) {
    const mergedArray = this.mergeAndSortArrays(arr1, arr2);
    console.log('Merged and Sorted:', mergedArray);
  }

  mergeAndSortArrays(arr1: number[], arr2: number[]): number[] {
    const mergedArr = arr1.concat(arr2);
    return this.timSort(mergedArr);
  }

  timSort(arr: number[]): number[] {
    const n = arr.length;
    
    for (let i = 0; i < n; i += this.smallSorting) {
      this.insertionSort(arr, i, Math.min(i + this.smallSorting - 1, n - 1));
    }

    let size = this.smallSorting;
    while (size < n) {
      for (let left = 0; left < n; left += 2 * size) {
        const mid = left + size - 1;
        const right = Math.min(left + 2 * size - 1, n - 1);
        if (mid < right) {
          this.merge(arr, left, mid, right);
        }
      }
      size *= 2;
    }

    return arr;
  }

  private insertionSort(arr: number[], left: number, right: number) {
    for (let i = left + 1; i <= right; i++) {
      let temp = arr[i];
      let j = i - 1;
      while (j >= left && arr[j] > temp) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = temp;
    }
  }

  private merge(arr: number[], left: number, mid: number, right: number) {
    const leftArr = arr.slice(left, mid + 1);
    const rightArr = arr.slice(mid + 1, right + 1);
    
    let i = 0, j = 0, k = left;

    while (i < leftArr.length && j < rightArr.length) {
      arr[k++] = leftArr[i] <= rightArr[j] ? leftArr[i++] : rightArr[j++];
    }
    
    while (i < leftArr.length) arr[k++] = leftArr[i++];
    while (j < rightArr.length) arr[k++] = rightArr[j++];
  }
}

const arr1 = [12, 3, 9, 1];
const arr2 = [7, 10, 2, 8];

const apiCall = new MergeArrayComponent();
apiCall.callApiMethod(arr1, arr2);
