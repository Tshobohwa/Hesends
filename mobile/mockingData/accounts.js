import KES from "../images/kenya.png";
import UGX from "../images/uganda.png";
import BIF from "../images/burundi.png";
import CDF from "../images/congo.png";
import TZS from "../images/tanzania.png";
import SSP from "../images/south-sudan.png";
import RWF from "../images/rwanda.png";

const accounts = [
  {
    name: "Kenyan Shillings",
    symbol: "KES",
    icon: KES,
    balance: 12000,
  },
  {
    name: "Burundian Franc",
    symbol: "BIF",
    icon: BIF,
    balance: 350_000,
  },
  {
    name: "Rwandan Franc",
    symbol: "RWF",
    icon: RWF,
    balance: 67000,
  },
  {
    name: "Congolese Franc",
    symbol: "CDF",
    icon: CDF,
    balance: 453000,
  },
  {
    name: "Ungandan Shillings",
    symbol: "UGX",
    icon: UGX,
    balance: 3000,
  },
  {
    name: "South Sudanese Pounds",
    symbol: "SSP",
    icon: SSP,
    balance: 3000,
  },
  {
    name: "Tanzanian Shillings",
    symbol: "TZS",
    icon: TZS,
    balance: 3000,
  },
];

export { TZS, UGX, CDF, BIF, SSP, RWF, KES };

export default accounts;
