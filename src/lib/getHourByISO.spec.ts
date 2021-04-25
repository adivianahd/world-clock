import { getHourByISO } from "./getHourByISO";

describe("lib", () => {
  it("When date is '2021-04-25T01:03:55.780463+00:00' should be '01:03'", () => {
    const ISOdate = "2021-04-25T01:03:55.780463+00:00";
    const expectedHour = "01:03";

    const result = getHourByISO(ISOdate);

    expect(result).toBe(expectedHour);
  });
});
