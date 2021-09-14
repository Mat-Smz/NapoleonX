import axios from "axios";

const data = JSON.stringify({
  encryptedUid: "8D27A8FA0C0A726CF01A7D11E0095577",
  tradeType: "PERPETUAL",
});

const config = {
  method: "post",
  url: "https://www.binance.com/bapi/futures/v1/public/future/leaderboard/getOtherPosition",
  headers: {
    "x-trace-id": "19c0d9e6-6a81-4593-bde0-50f89d7f758b",
    csrftoken: "d41d8cd98f00b204e9800998ecf8427e",
    "x-ui-request-trace": "19c0d9e6-6a81-4593-bde0-50f89d7f758b",
    "User-Agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36",
    "content-type": "application/json",
    lang: "en",
    "fvideo-id": "310145da0511ad86be0b60040a5b770ddc02cd2d",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua":
      '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
    "device-info":
      "eyJzY3JlZW5fcmVzb2x1dGlvbiI6IjE2ODAsMTA1MCIsImF2YWlsYWJsZV9zY3JlZW5fcmVzb2x1dGlvbiI6Ijk3NiwxNjgwIiwic3lzdGVtX3ZlcnNpb24iOiJNYWMgT1MgMTAuMTQuNiIsImJyYW5kX21vZGVsIjoidW5rbm93biIsInN5c3RlbV9sYW5nIjoiZnItRlIiLCJ0aW1lem9uZSI6IkdNVCsyIiwidGltZXpvbmVPZmZzZXQiOi0xMjAsInVzZXJfYWdlbnQiOiJNb3ppbGxhLzUuMCAoTWFjaW50b3NoOyBJbnRlbCBNYWMgT1MgWCAxMF8xNF82KSBBcHBsZVdlYktpdC81MzcuMzYgKEtIVE1MLCBsaWtlIEdlY2tvKSBDaHJvbWUvOTMuMC40NTc3LjYzIFNhZmFyaS81MzcuMzYiLCJsaXN0X3BsdWdpbiI6IkNocm9tZSBQREYgUGx1Z2luLENocm9tZSBQREYgVmlld2VyLE5hdGl2ZSBDbGllbnQiLCJjYW52YXNfY29kZSI6IjlkODViNTFhIiwid2ViZ2xfdmVuZG9yIjoiSW50ZWwgSW5jLiIsIndlYmdsX3JlbmRlcmVyIjoiSW50ZWwoUikgSXJpcyhUTSkgUGx1cyBHcmFwaGljcyA2NDAiLCJhdWRpbyI6IjEyNC4wNDM0NzY1NzgwODEwMyIsInBsYXRmb3JtIjoiTWFjSW50ZWwiLCJ3ZWJfdGltZXpvbmUiOiJFdXJvcGUvUGFyaXMiLCJkZXZpY2VfbmFtZSI6IkNocm9tZSBWOTMuMC40NTc3LjYzIChNYWMgT1MpIiwiZmluZ2VycHJpbnQiOiJkMTcwZmM4NWU2NDFlMTU4Y2ExMGMyNTUwZjg2YWE5YSIsImRldmljZV9pZCI6IiIsInJlbGF0ZWRfZGV2aWNlX2lkcyI6IjE2MTcyNzY5MTU1Mzk5dXlJdHpSaXdQWWJUUlRoTTU5In0=",
    "bnc-uuid": "dc99cf24-440c-4fb9-8014-f7f508a0a91a",
    clienttype: "web",
    "sec-ch-ua-platform": '"macOS"',
    Accept: "*/*",
    Cookie: "cid=W3ZSTyN0",
  },
  data: data,
};

const request = async () => {
  try {
    const response = await axios(config);
    return response.data.data.otherPositionRetList;
  } catch (error) {
    console.error(error);
  }
};

export default request;
