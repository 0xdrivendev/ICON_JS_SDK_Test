"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const icon_sdk_js_1 = __importDefault(require("icon-sdk-js"));
const provider = new icon_sdk_js_1.default.HttpProvider('https://sejong.net.solidwallet.io/api/v3');
const iconService = new icon_sdk_js_1.default(provider);
var hello = 'Hello ICON World!';
console.log(iconService.getLastBlock);
