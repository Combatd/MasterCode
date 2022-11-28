/*
  Test cases

  [1, 3, 7, 9, 2] where the target is 11 => return [3, 4]

  [1, 3, 7, 9, 2] where the target is 25 => return null

  [] where target = 1 => return null

  [5] where t = 5 => return null

  [1, 6] where t = 7 => return [0, 1]
*/

/*
  Psuedocode
  (two pointer technique)
1. pick the first number in the array and check it with each other number for a sum equal to target
2. we return the locations/index in the array for the two numbers where the sum equals the target if there is a match
3. If not found, we repeat this process for every number in the array
4. If we get through every number without a match we return null


[1, 3, 7, 9, 2] where the target is 11 => return [3, 4]
numberToFind = target - nums[p1]
10 = 11 - 1 when starting at the beginning
*/