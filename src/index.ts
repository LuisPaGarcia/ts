interface Point {
  x: number
  y: number
}

function distance(pointA: Point, pointB: Point) {
  return Math.sqrt((pointA.x - pointB.x) ** 2 + (pointA.y - pointB.y) ** 2)
}

const pointA = { x: 1, y: 5 }
const pointB = { x: 1, y: 5 }
console.log(distance(pointA, pointB))

const b: number = 10
