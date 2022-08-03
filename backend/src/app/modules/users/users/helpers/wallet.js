import { createOrUpdatePools } from "../controllers/poolsController";
import { contractABI } from "./helper";

const FROM_ADDRESS = "0x92eA94E6880A93810a5e15e171D03dC57F9514Ed";
export const loadFromContract = async (req, res) => {
  let poolsCompleted = [];
  let poolsUpcoming = [];
  let poolsOngoing = [];
  let poolsMyDeal = [];
  let contract = contractABI();
  let poolLength = await contract.methods
    .poolLength()
    .call({ from: FROM_ADDRESS });

  console.log("poolLength", poolLength);

  let i;
  for (i = 0; i < poolLength; i++) {
    let set = await contract.methods.poolInfo(i).call({ from: FROM_ADDRESS });
    var myJSON = JSON.stringify(set);
    console.log("myJSON", myJSON);
    var currentlyStaked = await contract.methods.getTotalStakedInPool(i).call();
    var newDate = new Date(parseInt(set.endTime * 1000)).toLocaleString();
    set.humanEndTime = newDate;
    set.unixTime = parseInt(set.endTime);
    set.poolStakableAmount = Math.round(set.poolStakableAmount / 10 ** 18);
    set.currentlyStaked = Math.round(currentlyStaked / 10 ** 18);
    set["source"] = "bsc";
   
    var currentPercentage =
      (set.currentlyStaked * 100) / set.poolStakableAmount;
    set.currentPercentage = Math.round(currentPercentage);
    var stakedAmount = await contract.methods
      .getUserStakedTokenInPool(i, FROM_ADDRESS)
      .call();
    var currentTime = await Math.floor(Date.now() / 1000);
    console.log(currentTime);
    console.log(set.endTime);

    

    if (currentTime > set.endTime && currentTime > set.startTime) {
      poolsCompleted.push(set);
      set["poolsStatus"] = "completed";
      await createOrUpdatePools(set);
      console.log("completed");
    } else if (currentTime < set.startTime && currentTime < set.endTime) {
      poolsUpcoming.push(set);
      set["poolsStatus"] = "upcoming";
      await createOrUpdatePools(set);
      console.log("upcoming");
    } else if (currentTime < set.endTime && currentTime > set.startTime) {
      poolsOngoing.push(set);
      console.log("Ongoing");
      set["poolsStatus"] = "ongoing";
      await createOrUpdatePools(set);
    }
    if (stakedAmount > 0) {
      await createOrUpdatePools(set);
      poolsMyDeal.push(set);
    }
  }

  res.send({ poolsMyDeal, poolsOngoing, poolsUpcoming, poolsCompleted });
};

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
