import { createOrUpdatePools, createOrUpdatePoolsMyDeal, getPoolsList } from "../controllers/poolsController";
import { contractABI, contractABIBSC, contractABIPOLY } from "./helper";

const FROM_ADDRESS = "0x92eA94E6880A93810a5e15e171D03dC57F9514Ed";
export const loadFromContractAndSave = async (req, res) => {
  
let fromAddress = req.query.fromAddress || FROM_ADDRESS
  let poolsCompleted = [];
  let poolsUpcoming = [];
  let poolsOngoing = [];
  let poolsMyDeal = [];

  console.log("fromAddress",fromAddress)
  let networks = ["bsc", "eth", "ply"];
  for (let index = 0; index < networks.length; index++) {
    const source = networks[index];
    let contract;
    

    switch (source) {
      case "bsc":
        contract = contractABIBSC();
        break;
      case "ply":
        contract = contractABIPOLY();
        break;
      case "eth":
        contract = contractABI();
        break;
    }

    let poolLength = await contract.methods
      .poolLength()
      .call({ from: fromAddress});

    console.log("poolLength", poolLength);

    let i;
    for (i = 0; i < poolLength; i++) {
      let set = await contract.methods.poolInfo(i).call({ from: fromAddress });
      var myJSON = JSON.stringify(set);
      console.log("myJSON", myJSON);
      var currentlyStaked = await contract.methods
        .getTotalStakedInPool(i)
        .call();
      var newDate = new Date(parseInt(set.endTime * 1000)).toLocaleString();
      set.humanEndTime = newDate;
      set.poolStakableAmount = Math.round(set.poolStakableAmount / 10 ** 18);
      set.currentlyStaked = Math.round(currentlyStaked / 10 ** 18);
      set["source"] = source;
      var currentPercentage =
        (set.currentlyStaked * 100) / set.poolStakableAmount;
      set.currentPercentage = Math.round(currentPercentage);
      var stakedAmount = await contract.methods
        .getUserStakedTokenInPool(i, fromAddress)
        .call();
      var currentTime = await Math.floor(Date.now() / 1000);
   //   console.log(currentTime);
     // console.log(set.endTime);

      if (currentTime > set.endTime && currentTime > set.startTime) {
        poolsCompleted.push(set);
        set["poolsStatus"] = "completed";
        await createOrUpdatePools(set);
        console.log("completed", source);
      } else if (currentTime < set.startTime && currentTime < set.endTime) {
        poolsUpcoming.push(set);
        set["poolsStatus"] = "upcoming";
        await createOrUpdatePools(set);
        console.log("upcoming", source);
      } else if (currentTime < set.endTime && currentTime > set.startTime) {
        poolsOngoing.push(set);
        console.log("Ongoing", source);
        set["poolsStatus"] = "ongoing";
        await createOrUpdatePools(set);
      }

      if (stakedAmount > 0) {
      set["poolsStatus"] = "poolsMyDeal";
        await createOrUpdatePoolsMyDeal(set);
        poolsMyDeal.push(set);
      }
    }
  }
 return 1;
};
export const loadFromContract = async (req, res) => {

req.query.isDefault = true;
  let response =  await getPoolsList(req, res);
  loadFromContractAndSave(req, res);
  res.send(response);
}

//   "lpToken": "0x2811dE52B41267D6FD126B4F8d0ac2248E1C9624",
//             "name": "madhan",
//             "symbol": "mad",
//             "startTime": "1656229556",
//             "endTime": "1656315956",
//             "poolStakableAmount": 1000,
//             "minimumContributeAmount": "1000000000000000000",
//             "id": "1",
//             "humanEndTime": "27/06/2022, 13:15:56",
//             "currentlyStaked": 523,
//             "currentPercentage": 52.3
