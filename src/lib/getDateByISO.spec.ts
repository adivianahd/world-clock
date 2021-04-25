import { getDateByISO } from "./getDateByISO";

describe("lib", () => {
  it("When date is '2021-04-25T01:03:55.780463+00:00' should be '25-04-2021'", () => {
    const ISOdate = "2021-04-25T01:03:55.780463+00:00";
    const expectedDate = "25-04-2021";

    const result = getDateByISO(ISOdate);

    expect(result).toBe(expectedDate);
  });
});
