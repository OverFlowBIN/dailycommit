// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// pesudocde
// 맨앞 요소를 비교하여 작은쪽부터 시작
// 빈배열을 만들고 비교하여 작거나 같으면 앞에 붙이고
// 크면은 뒤에 붙이기
var mergeTwoLists = function (list1, list2) {
  // console.log(list1.val);
};

let list1 = [1, 2, 4],
  list2 = [1, 3, 4];
// console.log(mergeTwoLists(list1, list2));

// Example 1:
// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Example 2:
// Input: list1 = [], list2 = []
// Output: []

// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]

// [1, 2, 4]

// [1, 3, 4]

// [1, 1, 2, 3, 4, 4]

// Method -1 To create a new linkedlist from existing lists

var mergeTwoLists = function (l1, l2) {
  if (!l1 || !l2) return l1 ? l1 : l2;

  let mergedList = new ListNode(0, null);
  let curr = mergedList;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1;
      l1 = l1.next;
    } else {
      curr.next = l2;
      l2 = l2.next;
    }
    curr = curr.next;
  }
  curr.next = l1 || l2;
  return mergedList.next;
};

// Runtime: 83 ms, faster than 73.86% of JavaScript online submissions for Merge Two Sorted Lists.
// Memory Usage: 40.6 MB, less than 43.41% of JavaScript online submissions for Merge Two Sorted Lists.
// Shortend version of method - 1

var mergeTwoLists = function (l1, l2) {
  if (!l1 || !l2) return l1 ? l1 : l2;

  let mergedList = new ListNode(),
    curr = mergedList;

  while (l1 && l2)
    l1.val < l2.val
      ? ((curr.next = l1), (l1 = l1.next))
      : ((curr.next = l2), (l2 = l2.next)),
      (curr = curr.next),
      (curr.next = l1 || l2);
  return mergedList.next;
};

// Runtime: 124 ms, faster than 20.79% of JavaScript online submissions for Merge Two Sorted Lists.
// Memory Usage: 40.4 MB, less than 72.07% of JavaScript online submissions for Merge Two Sorted Lists.
// Method - 2 : Mix and match

var mergeTwoLists = function (l1, l2) {
  if (!l1 || !l2) return l1 || l2;
  console.log("l1", l1.val);
  console.log("l2", l2.val);
  if (l1.val > l2.val) {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
  l1.next = mergeTwoLists(l2, l1.next);
  return l1;
};

mergeTwoLists(list1, list2);

// Runtime: 84 ms, faster than 73.74% of JavaScript online submissions for Merge Two Sorted Lists.
// Memory Usage: 40.6 MB, less than 43.41% of JavaScript online submissions for Merge Two Sorted Lists.
