export const dateStringToDate = (dateString: string): Date => {
  const [day, month, year] = dateString.split('/').map((el: string): number => parseInt(el, 10));

  return new Date(year, month - 1, day);
};
