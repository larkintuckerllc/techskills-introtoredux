export default () => new Promise((resolve) => {
  setTimeout(() => resolve(Math.floor(10 * Math.random()) + 1), 3000);
});
