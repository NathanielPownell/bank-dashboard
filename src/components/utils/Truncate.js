export default function truncateString(str) {
    let num = 14;
    if (str.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }