/**
 * A utility function to conditionally join class names.
 * @param {...(string|object|array)} param0 - Class names as strings, objects, or arrays.
 * @returns {string} - A single string of class names.
 */
export default function cn(...input) {
  const classes = [];

  input.forEach((item) => {
    switch (typeof item) {
      case "string":
        classes.push(item);
        break;
      case "object":
        if (Array.isArray(item)) {
          classes.push(cn(...item));
        } else {
          for (const key in item) {
            if (item[key]) {
              classes.push(key);
            }
          }
        }
        break;
      default:
        break;
    }
  });

  return classes.filter(Filter).join(" ");
}

const Filter = (item) =>
  !!item && !["undefined", "null", "false"].includes(item);
