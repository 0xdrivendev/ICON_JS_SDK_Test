import IconService from "icon-sdk-js";

const provider = new HttpProvider("https://sejong.net.solidwallet.io/api/v3");
const iconService = new IconService(provider);

console.log("hello");
