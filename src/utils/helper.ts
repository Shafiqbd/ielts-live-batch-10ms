import moment from "moment";

export const apiUrl =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://api.10minuteschool.com/discovery-service/api/v1";

const banglaMonths = [
  "জানুয়ারি",
  "ফেব্রুয়ারি",
  "মার্চ",
  "এপ্রিল",
  "মে",
  "জুন",
  "জুলাই",
  "আগস্ট",
  "সেপ্টেম্বর",
  "অক্টোবর",
  "নভেম্বর",
  "ডিসেম্বর",
];

const convertToBanglaNumerals = (num: number | string): string => {
  const banglaDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return num
    .toString()
    .split("")
    .map((digit) => banglaDigits[parseInt(digit, 10)])
    .join("");
};

export const formatDateBanglaWithMoment = (
  startDate: string,
  endDate: string
): string => {
  const start = moment(startDate);
  const end = moment(endDate);

  const startDay = convertToBanglaNumerals(start.date());
  const startMonth = banglaMonths[start.month()];
  const startYear = convertToBanglaNumerals(start.year());

  const endDay = convertToBanglaNumerals(end.date());
  const endMonth = banglaMonths[end.month()];
  const endYear = convertToBanglaNumerals(end.year());

  return `১০: ${startDay} ${startMonth}, ${startYear} - ${endMonth} ${endDay}, ${endYear}`;
};
