const defaultStyle = 'font-size: 14px; color: grey;';
const actionStyle = 'font-size: 17px; font-weight: 600; color: hotpink;';
const stateStyle = 'font-size: 14px; font-weight: 600;';

export function createLogger ({
  logPrev = true,
  logNext = true,
  logAction = true
} = {}) {
  return (action, state, getNextState) => {
    if (logAction) {
      const timer = new Date();
      console.log(`%cAction: %c${action.type} %c@ ${timer.getHours()}:${timer.getMinutes()}:${timer.getSeconds()}:${timer.getMilliseconds()}`, defaultStyle, actionStyle, defaultStyle);
    }
    if (logPrev) {
      console.log('%cPrev State: %o', `${stateStyle} color: red;`, state);
    }
    if (logNext) {
      console.log('%cNext State: %o', `${stateStyle} color: green;`, getNextState());
    }
  };
}

export default createLogger();