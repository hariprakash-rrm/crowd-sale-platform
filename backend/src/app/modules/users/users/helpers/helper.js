import Web3 from "web3";
import { getABIBSCAPPROVE, getABIBSCCONTRACT, getABIJSON, getABIJSON1, getABIRINKEBYCONTRACT } from "../../variables/web3.variable";
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

export const contractABIBSC = () => {
  const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545')
 //  const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
   let contractAddress = "0x8e1c9A9c7C784D588588f869070fCf7844bDBbe0";
   let abi = getABIBSCCONTRACT();
   return new web3.eth.Contract(abi, contractAddress);
 };
 export const approveContractBSC = () => {
  const web3 = new Web3('https://data-seed-prebsc-1-s1.binance.org:8545')
 //  const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
   let contractAddress = "0x465983d7E7e9dEd0FE64ed380f25245D16e0cd28";
   let abi =  getABIBSCAPPROVE();
   return new web3.eth.Contract(abi, contractAddress);
 };
 


export const contractABIPOLY = () => {
  const web3 = new Web3('https://rinkeby.infura.io/v3/f0ca46701a414fe18cb6269eb0f9bafd')
 //  const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
   let contractAddress = "0x5e4Fe14260eB20cDfEE5D6dcA34F6DeB87F2c2FB";
   let abi = getABIRINKEBYCONTRACT();
   return new web3.eth.Contract(abi, contractAddress);
 };
 export const approveContractPOLY = () => {
  const web3 = new Web3('https://rinkeby.infura.io/v3/f0ca46701a414fe18cb6269eb0f9bafd')
 //  const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
   let contractAddress = "0x4C4978B1390f48E07776a60f71BF76FC3308e7C6";
   let abi =  getABIRINKEBYCONTRACT();
   return new web3.eth.Contract(abi, contractAddress);
 };
 