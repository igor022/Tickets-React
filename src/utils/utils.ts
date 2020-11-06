export const convertDate = (date: string): string => {
  const parsedDate = /([0-9]{4}-[0-9]{2}-[0-9]{2})T([0-9]{2}:[0-9]{2}):[0-9]{2}/.exec(date);
  if (parsedDate && parsedDate.length >= 3) {
    return `${parsedDate[1]} ${parsedDate[2]}`;
  }
  return date;
}