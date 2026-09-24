export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.zhenlongaluminum.com";

export const COMPANY = {
  name: "Shanghai Zhenlong Aluminum Industry Co., Ltd.",
  nameZh: "上海振龙铝业有限公司",
  shortName: "Zhenlong Aluminum",
  tagline: "Premium Aluminum Structures for Global Markets",
  description:
    "Shanghai Zhenlong Aluminum Industry Co., Ltd. is a professional manufacturer of aluminum carports, pergolas, canopies, railings, fences, and gates. OEM/ODM services for residential and commercial projects worldwide.",
  email: "chengbao777@gmail.com",
  phone: "+86 15727656720",
  whatsapp: "+8613800000000",
  address: "上海市松江区玉秀路39号",
  foundedYear: 2010,
  exportMarkets: [
    "North America",
    "Europe",
    "Middle East",
    "Southeast Asia",
    "Australia",
  ],
} as const;
