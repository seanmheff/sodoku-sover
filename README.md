## Sodoku solver

Simple sodoku solver that uses a smart depth-first search to solve sodoku puzzles.

Written with TypeScript <3

### Install dependencies:

```sh
yarn
```

### Run:

```sh
yarn solve
```

```sh
yarn run v1.15.2
$ ts-node index.ts
3,4,1,2
1,2,3,4
4,3,2,1
2,1,4,3


4,5,6,8,1,7,9,3,2
3,9,7,2,5,6,8,1,4
1,2,8,9,3,4,5,6,7
2,6,3,5,4,8,7,9,1
9,8,4,1,7,2,3,5,6
5,7,1,3,6,9,2,4,8
7,3,5,6,2,1,4,8,9
8,1,2,4,9,5,6,7,3
6,4,9,7,8,3,1,2,5


3,6,9,2,8,5,4,1,7
7,1,5,4,6,3,9,8,2
2,8,4,9,1,7,5,3,6
4,5,7,6,3,8,2,9,1
6,9,2,7,4,1,3,5,8
8,3,1,5,2,9,7,6,4
5,7,6,1,9,4,8,2,3
9,2,8,3,7,6,1,4,5
1,4,3,8,5,2,6,7,9


Done in 1.25s.
```

### Tests

```sh
yarn test
```
