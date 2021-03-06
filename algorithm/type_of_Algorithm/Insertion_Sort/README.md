# INSERTION SORT 삽입 정렬

삽입정렬은 각 숫자를 적절한 위치에 삽입하는 방법으로 문제를 해결한다
다른 정렬 방식들은 무조건 위치를 바꾸는 방식이었다면 삽입정력은 '필요한 때만' 위치를 바꾸게 된다

삽입정렬의 시간복잡도는 O(N^2)로 비교적 느린 정렬 알고리즘에 속하지만
실제로는 <b>필요할 때만</b> 위치를 바꾼다는 특성 때문에 버블,선택 정렬보다는 빠르게 작동한다.
하지만 쉽게 생각 할 수 없는, 조금 복잡합 구조이다.

---

로직 순서
오름차순으로 하기!

1 2 3 4 6 5 7 8 9 10 -> 오름차순을할 수있다

1. [1]
2. [10] _ 1 _ 10 5 8 7 6 4 3 2 9
3. [5] _ 1 _ 10 \_ 5 8 7 6 4 3 2 9
4. [8] _ 1 _ 5 _ 10 _ 8 7 6 4 3 2 9
5. ...
6. [6] 1 5 7 8 10 6 4 3 2 9 -> 6을 보았을때 6의 앞에 있는 원소들은 정렬이 되어있다!
   6의 앞에가 크다면 왼쪽으로 가준다. -> 반복하여 위치 잡음
   .
   .
   .
   ... 1 2 3 4 5 6 7 8 9 10
