let timeoutId = null;

export default function doubleClickHandler(handler, context = undefined) {
  if (!timeoutId) {
    // simple click
    timeoutId = setTimeout(() => {}, 50);
  } else {
    // double click
    handler(context);
    clearTimeout(timeoutId);
  }
}
