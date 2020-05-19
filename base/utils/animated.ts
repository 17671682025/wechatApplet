interface Animate {
  rotateY:Function
}

/**
 * 滑入滑出
 * @param {*} animate
 */
export function animatedSlide(animate: Animate,distance:Number) {
	animate.rotateY(distance).step();
}

/**
 * 淡入淡出
 * @param {*} animate
 */
export function animatedFade(animate: Animate) {}

// let animate={
//   slide: animatedSlide(animate),
//   fade:animatedFade(animate),
// }

// export default animate;
