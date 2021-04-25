export const getHourByISO = (ISOdate: string): string => {
  return ISOdate.split('T')[1].substr(0, 5)
}
