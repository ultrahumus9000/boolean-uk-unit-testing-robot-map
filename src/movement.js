const moveLeft = (currentPosition, otherOjects = []) => {
  const predictX = currentPosition.x - 1;
  const preHitCheck = otherOjects.filter((obj) => obj.x === predictX);
  if (preHitCheck.length !== 0) {
    const secondHitCheck = preHitCheck.find(
      (obj) => obj.y === currentPosition.y
    );
    if (secondHitCheck) {
      return "ouch";
    }
  }

  if (currentPosition.x === 0) return currentPosition;

  const newPosition = {
    ...currentPosition,
    x: currentPosition.x - 1,
  };

  return newPosition;
};

const moveRight = (currentPosition, otherOjects = []) => {
  const predictX = currentPosition.x + 1;
  const preHitCheck = otherOjects.filter((obj) => obj.x === predictX);
  if (preHitCheck.length !== 0) {
    const secondHitCheck = preHitCheck.find(
      (obj) => obj.y === currentPosition.y
    );
    if (secondHitCheck) {
      return "ouch";
    }
  }

  if (currentPosition.x === 10) return currentPosition;

  const newPosition = {
    ...currentPosition,
    x: currentPosition.x + 1,
  };

  return newPosition;
};

const moveUp = (currentPosition, otherOjects = []) => {
  const predictY = currentPosition.y - 1;
  const preHitCheck = otherOjects.filter((obj) => obj.y === predictY);
  if (preHitCheck.length !== 0) {
    const secondHitCheck = preHitCheck.find(
      (obj) => obj.x === currentPosition.x
    );
    if (secondHitCheck) {
      return "ouch";
    }
  }

  if (currentPosition.y === 0) return currentPosition;

  const newPosition = {
    ...currentPosition,
    y: currentPosition.y - 1,
  };

  return newPosition;
};
const moveDown = (currentPosition, otherOjects = []) => {
  const predictY = currentPosition.y + 1;
  const preHitCheck = otherOjects.filter((obj) => obj.y === predictY);
  if (preHitCheck.length !== 0) {
    const secondHitCheck = preHitCheck.find(
      (obj) => obj.x === currentPosition.x
    );
    if (secondHitCheck) {
      return "ouch";
    }
  }

  if (currentPosition.y === 10) return currentPosition;

  const newPosition = {
    ...currentPosition,
    y: currentPosition.y + 1,
  };

  return newPosition;
};

module.exports = {
  moveLeft,
  moveRight,
  moveUp,
  moveDown,
};
