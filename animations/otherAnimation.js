// Animation needs to be loaded last to ensure cats have been created
let animation = gsap.timeline({onComplete: animationComplete});
animation
.to(".ears .left-ear", { duration: 3, x: 5, y: 5, skewX: 15, scale: .9, rotation: 25}, "initial")
.to(".ears .right-ear", { duration: 3, x: 5, y: 5, skewX: 15, scale: .9, rotation: 25}, "initial")
.to(".mouth .right-side", { duration: 1, rotation: -20}, "initial")
.to(".mouth .left-side", { duration: 1, rotation: 20}, "initial")
.to(".tail", { duration: 8, rotationY: 180, rotationX: 0, y: 0, x: 220}, "initial")
.to(".ears .left-ear", { duration: 3, x: 0, y: 0, skewY: 25, scale: .9, rotation: -5}, "second")
.to(".ears .right-ear", { duration: 3, x: 0, y: 0, skewY: 35, scale: .9, rotation: -5}, "second")
.to(".mouth .right-side", { duration: 1, rotation: 0}, "second")
.to(".mouth .left-side", { duration: 1, rotation: 0}, "second")
.to(".tail", { duration: 8, rotationY: 0, rotationX: 0, x: 0}, "second")


function animationComplete() {
  animation.restart();
}