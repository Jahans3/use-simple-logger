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

    logAction && console.log(`c%Action: %c${action.type} c%@ ${timer.getHours()}:${timer.getMinutes()}`, defaultStyle, actionStyle, defaultStyle);
    logPrev && console.log('c%Prev State: %o', `${stateStyle} color: red;`, state);
    logNext && console.log('c%Next State: %o', `${stateStyle} color: green`, getNextState());
  };
}

export default createLogger();