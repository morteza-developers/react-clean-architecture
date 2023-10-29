import HttpClientSingleton from "../axios";

let axios: HttpClientSingleton;


describe("Axios", () => {

  beforeEach(() => {
    axios = new HttpClientSingleton();
  });

  it("should be able to return data on method GET", async () => {
    const { data } = await axios.get({ url: "/" });

    expect(data).toEqual(["a", "b", "c"]);
  });

  it("should be able to return data on method POST", async () => {
    const { data } = await axios.post({ url: "/" });

    expect(data).toEqual({ success: true });
  });

  it("should be able to return data on method PUT", async () => {
    const { data } = await axios.put({ url: "/" });

    expect(data).toEqual({ success: true });
  });

  it("should be able to return data on method PATCH", async () => {
    const { data } = await axios.patch({ url: "/" });

    expect(data).toEqual({ success: true });
  });

  it("should be able to DELETE", async () => {
    const { data } = await axios.delete({ url: "/" });

    expect(data).toEqual({ success: true });
  });
});
