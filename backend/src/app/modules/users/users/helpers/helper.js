import Web3 from "web3";
import { getABIJSON, getABIJSON1 } from "../../variables/web3.variable";
export const contractABI = () => {
 const web3 = new Web3('https://data-seed-prebsc-2-s2.binance.org:8545')
//  const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
  let contractAddress = "0x5B52F975F72FaF873B287ae9d5f152aFb1090337";
  let abi = getABIJSON();
  return new web3.eth.Contract(abi, contractAddress);
};
export const approveContract = () => {
 const web3 = new Web3('https://data-seed-prebsc-2-s2.binance.org:8545')
//  const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
  let contractAddress = "0x2811dE52B41267D6FD126B4F8d0ac2248E1C9624";
  let abi =  getABIJSON1();
  return new web3.eth.Contract(abi, contractAddress);
};
