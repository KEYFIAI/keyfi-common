import aave from "./aave";
import * as airdrop from "./airdrop";
import * as common from "./common";
import * as dydx from "./dydx";
import * as compound from "./compound";
import * as curve from "./curve";
import * as keyfipool from "./keyfipool";
import * as uniswap from "./uniswap";
import inch from "./1inch";
import whitelist from "./whitelist";

export default {
  // Services
  aave,
  airdrop,
  compound,
  curve,
  dydx,
  keyfipool,
  inch,
  uniswap,
  whitelist,

  // // Helpers
  ...common,
};
