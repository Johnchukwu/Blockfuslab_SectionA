//Two Sum
//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any order.

function TwoSum(nums: number[], target: number): number[] {
    const numIndexMap: Record<number, number> = {};
  
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (complement in numIndexMap) {
        return [numIndexMap[complement], i];
      }
      numIndexMap[nums[i]] = i;
    }
  
    return [];
  }


  //using it in an example

  const nums2 = [8, 9, 4, 2];
  const target2 = 11;
  console.log(TwoSum(nums2, target2));
  
  //OR

  const num3 = [4, 5, 6, 7,]
  const target3 = 12;
  console.log(TwoSum(num3, target3));

