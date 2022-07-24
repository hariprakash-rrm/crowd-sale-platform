import Web3 from "web3";
import { getABIJSON, getABIJSON1 } from "../../variables/web3.variable";
export const contractABI = () => {
 const web3 = new Web3('https://goerli.infura.io/v3/f0ca46701a414fe18cb6269eb0f9bafd')
//  const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
  let contractAddress = "0x336a7847E0e8C8456814d6eAC54a5E90610e2628";
  let abi = getABIJSON();
  return new web3.eth.Contract(abi, contractAddress);
};
export const approveContract = () => {
 const web3 = new Web3('https://goerli.infura.io/v3/f0ca46701a414fe18cb6269eb0f9bafd')
//  const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
  let contractAddress = "0xF77afD529983226E6Bb15Aa3e7f9ADD58BCab035";
  let abi =  getABIJSON1();
  return new web3.eth.Contract(abi, contractAddress);
};
