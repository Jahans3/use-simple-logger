const defaultStyle = 'font-size: 14px; color: grey;';
const actionStyle = 'font-size: 17px; font-weight: 600; color: pink;';
const stateStyle = 'font-size: 14px; font-weight: 600;';

export function createLogger ({
  logPrev = true,
  logNext = true,
  logAction = true
} = {}) {
  return (state, action, getNextState) => {
    const timer = new Date();
    const logParams = [];
    const logStr = `
      ${logAction
        ? logParams.push(defaultStyle, actionStyle, defaultStyle) && `c%Action: %c${action.type} c%@ ${timer.getHours()}:${timer.getMinutes()}`
        : undefined}
      ${logPrev
        ? logParams.push(`${stateStyle} color: red;`, state) && 'c%Prev State: %o' : undefined}
      ${logNext
        ? logParams.push(`${stateStyle} color: green`, getNextState()) && 'c%Next State: %o' : undefined}
    `;
  };
}

export default createLogger();