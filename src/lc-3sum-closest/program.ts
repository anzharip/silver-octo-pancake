export function threeSumClosest(nums: number[], target: number): number {
  let answer = Infinity;
  let answerDiff = Infinity;
  nums.sort()
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const potentialAnswer = nums[i] + nums[j] + nums[k]
        const potentialAnswerDiff = Math.abs(potentialAnswer - target)
        if (potentialAnswerDiff < answerDiff) {
            answer = potentialAnswer
            answerDiff = potentialAnswerDiff
        }
      }
    }
  }
  return answer;
}
