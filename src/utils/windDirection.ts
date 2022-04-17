export const findWindDirection = (angle: number) => {
  if (angle > 45 && angle <= 135) {
    return 'east';
  }
  if (angle > 135 && angle <= 225) {
    return 'south';
  }
  if (angle > 225 && angle <= 315) {
    return 'west';
  }
  if ((angle > 315 && angle <= 360) || (angle >= 0 && angle <= 45)) {
    return 'north';
  }
  return 'no wind';
};
