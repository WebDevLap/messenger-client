export function lazyPattern() {
  return (
    document.documentElement.scrollHeight -
      (document.documentElement.scrollTop + window.innerHeight) <
    10
  );
}