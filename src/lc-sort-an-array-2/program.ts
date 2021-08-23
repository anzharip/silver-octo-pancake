export function sortArray(nums: number[]): number[] {
    const start = 0; 
    const end = nums.length
    return mergeSortHelper(nums, start, end)
};

function mergeSortHelper(nums: number[], start: number, end: number): number[] {
    const middle = Math.floor((start + end) / 2) 
    if (end - start <= 1) return nums.slice(start, end)
    const left = mergeSortHelper(nums, start, middle)
    const right = mergeSortHelper(nums, middle, end)
    return merge(left, right)
}

function merge(left: number[], right: number[]): number[] {
    let i = 0; 
    let j = 0; 
    const merged = []
    while (i < left.length || j < right.length) {
        if (i >= left.length) {
            merged.push(right[j])
            j++
        } else if (j >= right.length) {
            merged.push(left[i])
            i++
        } else {
            if (left[i] < right[j]) {
                merged.push(left[i])
                i++
            } else if (left[i] > right[j]) {
                merged.push(right[j])
                j++
            } else {
                merged.push(left[i])
                merged.push(right[j])
                i++
                j++
            }
        }
    }
    return merged
}