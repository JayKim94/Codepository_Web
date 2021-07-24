const utils =
{
  isEmptyOrSpaces(str) {
    return str === null || str.match(/^ *$/) !== null;
  }
}

export default utils;