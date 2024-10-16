import moment from "moment";

const now = moment();

const formatedDate1 = now.format("DD-MM-YYYY");
const formatedDate2 = now.format("MMM Do YY");
const formatedDate3 = now.format("dddd");

console.log(
  `DD-MM-YYYY: ${formatedDate1}\n, MMM Do YY: ${formatedDate2}\n, dddd:  ${formatedDate3}\n`
);
