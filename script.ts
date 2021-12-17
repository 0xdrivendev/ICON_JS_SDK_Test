import IconService from 'icon-sdk-js';
const provider = new IconService.HttpProvider('https://sejong.net.solidwallet.io/api/v3');
const iconService = new IconService(provider);

var hello = 'Hello ICON World!';
console.log(iconService.getLastBlock);
