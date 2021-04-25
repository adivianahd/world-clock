export const getDateByISO = (ISOdate: string): string => {
  const [year, month, day ] =  ISOdate.split('T')[0].split('-')
  return `${day}-${month}-${year}`
}
