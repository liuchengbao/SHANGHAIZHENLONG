import type { Locale } from "@/i18n/routing";
import type { CategorySlug } from "@/lib/catalog";

export type SeoLanding = {
  title: string;
  description: string;
  h1: string;
  lead: string;
  suffix: string;
  keywords: string[];
  faqs: { question: string; answer: string }[];
};

type PageKey = "home" | "products" | "projects" | "about" | "oem" | "blog" | "contact";

const pages: Record<Locale, Record<PageKey, string[]>> = {
  en: {
    home: ["aluminum carport manufacturer", "aluminum pergola manufacturer", "aluminum gazebo factory", "aluminum fence supplier", "aluminum gate manufacturer", "aluminum awning factory", "OEM aluminum structures China", "6063-T5 aluminum pergola"],
    products: ["custom aluminum carport", "aluminum pergola catalog", "aluminum fence models", "aluminum sliding door manufacturer", "aluminum gate factory", "aluminum canopy supplier"],
    projects: ["aluminum carport project", "aluminum pergola installation", "export aluminum fence project", "commercial aluminum canopy"],
    about: ["Shanghai aluminum factory", "aluminum structure manufacturer China", "EN 1090 aluminum pavilion", "aluminum fabrication plant Songjiang"],
    oem: ["OEM aluminum pergola", "ODM aluminum carport", "custom aluminum gate factory", "private label aluminum fence"],
    blog: ["how to choose an aluminum carport", "powder coating vs PVDF aluminum", "OEM aluminum pergola guide"],
    contact: ["aluminum carport quote", "aluminum pergola factory contact", "request aluminum gate quotation"],
  },
  zh: {
    home: ["铝艺凉亭厂家", "铝合金车棚厂家", "铝艺围栏厂家", "铝艺大门厂家", "铝合金雨棚定制", "铝艺凉亭 OEM", "6063铝型材凉亭", "上海铝艺工厂"],
    products: ["铝艺凉亭定制", "铝合金车棚批发", "铝艺围栏型号", "铝合金推拉门厂家", "庭院铝艺大门", "铝合金遮阳篷"],
    projects: ["铝车棚出口案例", "铝艺凉亭工程", "铝合金围栏项目", "商业雨棚案例"],
    about: ["上海铝艺厂家", "松江铝结构工厂", "铝艺凉亭生产厂家", "EN 1090 铝凉亭"],
    oem: ["铝艺凉亭OEM", "铝合金车棚贴牌", "铝艺大门定制加工", "铝艺围栏代工"],
    blog: ["铝车棚怎么选", "粉末喷涂和PVDF", "铝凉亭OEM采购"],
    contact: ["铝艺凉亭报价", "铝合金车棚询价", "铝艺大门厂家联系方式"],
  },
  es: {
    home: ["fabricante de pérgolas de aluminio", "fabricante de cocheras de aluminio", "fábrica de vallas de aluminio", "portones de aluminio a medida", "toldos de aluminio OEM"],
    products: ["pérgola de aluminio a medida", "cochera de aluminio", "valla de aluminio", "puerta corredera de aluminio", "marquesina de aluminio"],
    projects: ["proyecto de cochera de aluminio", "pérgola de aluminio para hotel", "valla de aluminio de exportación"],
    about: ["fábrica de aluminio en Shanghái", "fabricante de estructuras de aluminio", "pérgola EN 1090"],
    oem: ["pérgola de aluminio OEM", "cochera de aluminio ODM", "portón de aluminio personalizado"],
    blog: ["cómo elegir una cochera de aluminio", "lacado en polvo o PVDF", "guía OEM de pérgolas"],
    contact: ["presupuesto de pérgola de aluminio", "cotización de cochera de aluminio"],
  },
  fr: {
    home: ["fabricant de pergola aluminium", "fabricant de carport aluminium", "usine de clôture aluminium", "portail aluminium sur mesure", "auvent aluminium OEM"],
    products: ["pergola aluminium sur mesure", "carport aluminium", "clôture aluminium", "porte coulissante aluminium", "marquise aluminium"],
    projects: ["projet de carport aluminium", "pergola aluminium hôtel", "clôture aluminium export"],
    about: ["usine aluminium Shanghai", "fabricant de structures aluminium", "pergola EN 1090"],
    oem: ["pergola aluminium OEM", "carport aluminium ODM", "portail aluminium personnalisé"],
    blog: ["choisir un carport aluminium", "thermolaquage ou PVDF", "guide OEM pergola aluminium"],
    contact: ["devis pergola aluminium", "devis carport aluminium"],
  },
  de: {
    home: ["Alu-Pergola Hersteller", "Alu-Carport Hersteller", "Alu-Zaun Fabrik", "Alu-Tor nach Maß", "Alu-Vordach OEM"],
    products: ["Alu-Pergola nach Maß", "Alu-Carport", "Alu-Zaun", "Alu-Schiebetür", "Alu-Markise"],
    projects: ["Alu-Carport Projekt", "Alu-Pergola Hotel", "Alu-Zaun Export"],
    about: ["Aluminiumfabrik Shanghai", "Hersteller von Aluminiumkonstruktionen", "Pergola EN 1090"],
    oem: ["Alu-Pergola OEM", "Alu-Carport ODM", "Alu-Tor Sonderanfertigung"],
    blog: ["Alu-Carport auswählen", "Pulverbeschichtung oder PVDF", "OEM-Leitfaden Alu-Pergola"],
    contact: ["Angebot Alu-Pergola", "Angebot Alu-Carport"],
  },
  pt: {
    home: ["fabricante de pérgola de alumínio", "fabricante de carport de alumínio", "fábrica de cerca de alumínio", "portão de alumínio sob medida", "marquise de alumínio OEM"],
    products: ["pérgola de alumínio sob medida", "carport de alumínio", "cerca de alumínio", "porta de correr de alumínio", "marquise de alumínio"],
    projects: ["projeto de carport de alumínio", "pérgola de alumínio para hotel", "cerca de alumínio para exportação"],
    about: ["fábrica de alumínio em Xangai", "fabricante de estruturas de alumínio", "pérgola EN 1090"],
    oem: ["pérgola de alumínio OEM", "carport de alumínio ODM", "portão de alumínio personalizado"],
    blog: ["como escolher um carport de alumínio", "pintura a pó ou PVDF", "guia OEM de pérgola"],
    contact: ["orçamento de pérgola de alumínio", "cotação de carport de alumínio"],
  },
  ru: {
    home: ["производитель алюминиевых пергол", "производитель алюминиевых навесов для авто", "завод алюминиевых ограждений", "алюминиевые ворота на заказ", "OEM алюминиевый козырёк"],
    products: ["алюминиевая пергола на заказ", "алюминиевый навес для авто", "алюминиевое ограждение", "алюминиевая раздвижная дверь", "алюминиевый козырёк"],
    projects: ["проект алюминиевого навеса", "алюминиевая пергола для отеля", "экспорт алюминиевых ограждений"],
    about: ["алюминиевый завод в Шанхае", "производитель алюминиевых конструкций", "пергола EN 1090"],
    oem: ["алюминиевая пергола OEM", "навес для авто ODM", "алюминиевые ворота на заказ"],
    blog: ["как выбрать алюминиевый навес", "порошковая окраска или PVDF", "руководство OEM по перголам"],
    contact: ["расчёт алюминиевой перголы", "запрос на алюминиевый навес"],
  },
  ar: {
    home: ["مصنع برجولا ألمنيوم", "مصنع مظلة سيارات ألمنيوم", "مصنع سياج ألمنيوم", "بوابة ألمنيوم حسب الطلب", "مظلة ألمنيوم OEM"],
    products: ["برجولا ألمنيوم مخصصة", "مظلة سيارات ألمنيوم", "سياج ألمنيوم", "باب ألمنيوم منزلق", "مظلة مدخل ألمنيوم"],
    projects: ["مشروع مظلة سيارات ألمنيوم", "برجولا ألمنيوم لفندق", "تصدير سياج ألمنيوم"],
    about: ["مصنع ألمنيوم في شنغهاي", "مصنع هياكل ألمنيوم", "برجولا EN 1090"],
    oem: ["برجولا ألمنيوم OEM", "مظلة سيارات ODM", "بوابة ألمنيوم مخصصة"],
    blog: ["كيف تختار مظلة سيارات ألمنيوم", "طلاء مسحوق أو PVDF", "دليل OEM للبرجولا"],
    contact: ["عرض سعر برجولا ألمنيوم", "طلب تسعير مظلة سيارات"],
  },
  ja: {
    home: ["アルミパーゴラメーカー", "アルミカーポートメーカー", "アルミフェンス工場", "アルミ門扉オーダー", "アルミ庇 OEM"],
    products: ["オーダーアルミパーゴラ", "アルミカーポート", "アルミフェンス", "アルミ引き戸", "アルミ庇"],
    projects: ["アルミカーポート施工例", "ホテル用アルミパーゴラ", "アルミフェンス輸出"],
    about: ["上海のアルミ工場", "アルミ構造物メーカー", "パーゴラ EN 1090"],
    oem: ["アルミパーゴラ OEM", "アルミカーポート ODM", "アルミ門扉特注"],
    blog: ["アルミカーポートの選び方", "粉体塗装とPVDF", "アルミパーゴラOEMガイド"],
    contact: ["アルミパーゴラ見積", "アルミカーポート問い合わせ"],
  },
  ko: {
    home: ["알루미늄 퍼걸러 제조사", "알루미늄 카포트 제조사", "알루미늄 펜스 공장", "알루미늄 대문 주문제작", "알루미늄 캐노피 OEM"],
    products: ["맞춤 알루미늄 퍼걸러", "알루미늄 카포트", "알루미늄 펜스", "알루미늄 미닫이문", "알루미늄 어닝"],
    projects: ["알루미늄 카포트 시공", "호텔 알루미늄 퍼걸러", "알루미늄 펜스 수출"],
    about: ["상하이 알루미늄 공장", "알루미늄 구조물 제조사", "퍼걸러 EN 1090"],
    oem: ["알루미늄 퍼걸러 OEM", "알루미늄 카포트 ODM", "알루미늄 대문 맞춤"],
    blog: ["알루미늄 카포트 고르는 법", "분체도장과 PVDF", "알루미늄 퍼걸러 OEM 가이드"],
    contact: ["알루미늄 퍼걸러 견적", "알루미늄 카포트 문의"],
  },
};

function landing(
  title: string,
  description: string,
  h1: string,
  lead: string,
  suffix: string,
  keywords: string[],
  faqs: [string, string][],
): SeoLanding {
  return {
    title,
    description,
    h1,
    lead,
    suffix,
    keywords,
    faqs: faqs.map(([question, answer]) => ({ question, answer })),
  };
}

const enLandings: Record<CategorySlug, SeoLanding> = {
  "aluminum-gazebos": landing(
    "Custom Aluminum Pergola Manufacturer",
    "Shanghai factory for custom aluminum pergolas and gazebos. Bioclimatic louver roofs, 6063-T5 frames, powder coating or PVDF, OEM/ODM and export packing.",
    "Custom aluminum pergola and gazebo manufacturer",
    "Zhenlong builds aluminum pergolas and gazebos to drawing for villa, restaurant, and hotel projects. Frames use 6063-T5 profiles, with louvered or fixed roofs, powder coating or PVDF, and OEM branding for importers.",
    "Aluminum pergola manufacturer",
    ["custom aluminum pergola", "aluminum gazebo manufacturer", "bioclimatic louvered pergola factory", "OEM aluminum gazebo", "6063-T5 aluminum pergola", "powder coated aluminum pergola"],
    [
      ["Can you manufacture a custom aluminum pergola to our drawings?", "Yes. Span, length, height, louver or fixed roof, and powder-coated color are made from your drawings or site sizes."],
      ["Do you supply OEM bioclimatic aluminum gazebos?", "Yes. Motorized louver pergolas and fixed gazebos can be sized and branded for your market."],
      ["Are aluminum pavilions covered by EN 1090 verification?", "Pavilion models listed on our ICR verification are checked against EN 1090 and CPR (EU) 305/2011. Ask which model numbers are included."],
    ],
  ),
  "aluminum-fences": landing(
    "Custom Aluminum Fence Manufacturer",
    "Aluminum fence factory for privacy slats, horizontal louvers, pool fences, and security panels. Powder-coated 6063-T5, cut to size, OEM export from Shanghai.",
    "Custom aluminum fence manufacturer",
    "Each fence on this page is a separate model: horizontal louver, privacy screen, vertical picket, pool barrier, or anti-climb security fence. Panels are 6063-T5 aluminum with powder coating, made to your height and module.",
    "Aluminum fence manufacturer",
    ["custom aluminum fence", "aluminum privacy fence manufacturer", "powder coated aluminum fence", "aluminum pool fence factory", "OEM aluminum slat fence", "EN 1090 aluminum fence"],
    [
      ["Do you manufacture powder-coated aluminum privacy fences?", "Yes. Slat and louver privacy panels are produced as their own models, in RAL powder-coated colors."],
      ["Can aluminum pool fences and security fences be ordered separately?", "Yes. Pool barriers and anti-climb security fences are listed as separate models, not mixed into one generic fence."],
      ["Is the aluminum fence verified to EN 1090?", "Fence models covered by our ICR verification follow EN 1090 and CPR (EU) 305/2011. Confirm the model list with our export team."],
    ],
  ),
  "aluminum-carports": landing(
    "Aluminum Carport Manufacturer",
    "Custom aluminum carport factory for single- and double-bay parking canopies. 6063-T5 frames, polycarbonate or metal roofs, powder coating, OEM export from Shanghai.",
    "Aluminum carport manufacturer for single and double bays",
    "Zhenlong manufactures freestanding aluminum carports and parking canopies for one or two vehicles. Width, length, roof sheet, and powder-coated color follow your drawing. This category does not use the pavilion or canopy EN 1090 certificate.",
    "Aluminum carport manufacturer",
    ["aluminum carport manufacturer", "custom double carport", "aluminum parking canopy factory", "OEM aluminum carport", "6063-T5 aluminum carport", "powder coated carport China"],
    [
      ["Can you build a custom double aluminum carport?", "Yes. Single-bay and double-bay carports are both in the catalog, with width and length made to site measurements."],
      ["What aluminum is used for the carport frame?", "Frames are 6063-T5 aluminum profiles, powder coated. Roofs are polycarbonate or metal sheet, depending on the model."],
      ["Do you export aluminum carports for villas and hotels?", "Yes. Orders are packed for export to North America, Europe, the Middle East, Southeast Asia, and Australia."],
    ],
  ),
  "aluminum-sliding-doors": landing(
    "Aluminum Sliding Door Manufacturer",
    "Factory for architectural aluminum sliding doors and automatic aluminum sliding gates. Powder-coated profiles, tempered glass options, custom width, OEM from Shanghai.",
    "Aluminum sliding door and automatic sliding gate manufacturer",
    "This range covers architectural aluminum sliding doors and automatic sliding gates for homes and hotels. Opening width, powder-coated finish, and glass or solid infill follow your drawing. Sliding doors are not covered by the gate EN 1090 certificate.",
    "Aluminum sliding door manufacturer",
    ["aluminum sliding door manufacturer", "automatic aluminum sliding gate", "custom aluminum patio sliding door", "OEM aluminum sliding gate", "powder coated aluminum sliding door"],
    [
      ["Do you make automatic aluminum sliding gates?", "Yes. Several models are automatic aluminum sliding gates with a powder-coated finish."],
      ["Can aluminum sliding doors be made to our opening size?", "Yes. Width and height are produced from your drawings or site measurements."],
      ["Are sliding doors the same certificate as courtyard gates?", "No. The gate verification covers listed gate models. Ask us before treating a sliding door as EN 1090 verified."],
    ],
  ),
  "aluminum-doors": landing(
    "Custom Aluminum Gate Manufacturer",
    "Aluminum courtyard and driveway gate factory. Swing and sliding gates, CAD-based OEM, powder coating, EN 1090 verification on listed gate models. Shanghai export.",
    "Custom aluminum gate and courtyard door manufacturer",
    "Zhenlong fabricates aluminum courtyard gates, main gates, and driveway gates, including electric sliding gates and decorative villa gates. Listed gate models are covered by an ICR verification to EN 1090 and CPR (EU) 305/2011.",
    "Aluminum gate manufacturer",
    ["custom aluminum gate", "aluminum courtyard gate manufacturer", "aluminum driveway gate factory", "OEM aluminum villa gate", "powder coated aluminum gate", "EN 1090 aluminum gate"],
    [
      ["Can aluminum courtyard gates be made from our CAD drawings?", "Yes. Entrance and courtyard gates are produced from your CAD files and site sizes."],
      ["Do you manufacture both swing and sliding aluminum gates?", "Yes. The catalog includes swing gates and electric sliding gates as separate models."],
      ["Which aluminum gates are EN 1090 verified?", "Only the gate models named on the ICR verification. We can match a model number before you specify it in a tender."],
    ],
  ),
  awnings: landing(
    "Aluminum Awning and Canopy Manufacturer",
    "Custom aluminum door canopies and patio awnings. Powder-coated 6063-T5 frames, polycarbonate roofs, OEM sizes. Listed canopy models carry EN 1090 verification.",
    "Aluminum awning and door canopy manufacturer",
    "These are aluminum patio awnings and door or window canopies for villas and commercial entrances. Frames are powder-coated aluminum, usually with a polycarbonate cover. Canopy models on our ICR certificate are verified to EN 1090.",
    "Aluminum awning manufacturer",
    ["aluminum awning manufacturer", "custom aluminum door canopy", "aluminum patio awning factory", "OEM aluminum canopy", "powder coated aluminum awning", "EN 1090 aluminum canopy"],
    [
      ["Do you manufacture aluminum door canopies and patio awnings?", "Yes. Terrace awnings and entrance canopies are made to width and projection from your drawings."],
      ["What roof material is used on the awnings?", "Most use a powder-coated aluminum frame with polycarbonate or a similar outdoor cover."],
      ["Are the canopies verified to EN 1090?", "Canopy models listed on the ICR verification follow EN 1090 and CPR (EU) 305/2011. Carports are a different category and are not on that certificate."],
    ],
  ),
};

const zhLandings: Record<CategorySlug, SeoLanding> = {
  "aluminum-gazebos": landing(
    "定制铝艺凉亭厂家",
    "上海铝艺凉亭、百叶凉亭生产厂家。6063-T5 铝型材，电动百叶或固定顶，粉末喷涂或 PVDF，支持 OEM/ODM 与出口包装。",
    "定制铝艺凉亭与遮阳棚厂家",
    "振龙按图纸生产铝艺凉亭和凉棚，用于别墅、餐厅和酒店。框架为 6063-T5 铝型材，可选电动百叶或固定顶，表面粉末喷涂或 PVDF，并可按采购商要求做 OEM。",
    "铝艺凉亭厂家",
    ["铝艺凉亭厂家", "铝合金凉亭定制", "百叶凉亭生产厂家", "铝艺凉棚 OEM", "6063铝凉亭", "粉末喷涂铝艺凉亭"],
    [
      ["可以按图纸定制铝艺凉亭尺寸吗？", "可以。跨度、长度、高度，以及百叶或固定顶、喷涂颜色，都按图纸或现场尺寸生产。"],
      ["能做 OEM 电动百叶凉亭吗？", "可以。电动百叶凉亭和固定顶凉亭都可以按你的市场做尺寸和品牌。"],
      ["铝凉亭有 EN 1090 验证吗？", "列入 ICR 符合性验证的凉亭型号，按 EN 1090 和 CPR (EU) 305/2011 核查。下单前可核对具体型号。"],
    ],
  ),
  "aluminum-fences": landing(
    "铝合金围栏厂家",
    "铝艺围栏定制工厂，分型号供应横百叶、格栅隐私、竖条、泳池围栏和安防围栏。6063-T5，粉末喷涂，上海出口。",
    "定制铝合金围栏厂家",
    "这里每一款都是独立型号：横百叶、隐私格栅、竖条、泳池围栏或防攀爬安防围栏。型材为 6063-T5，粉末喷涂，高度和模数按项目裁切。",
    "铝艺围栏厂家",
    ["铝艺围栏厂家", "铝合金护栏定制", "粉末喷涂铝围栏", "泳池铝艺围栏", "铝艺格栅围栏 OEM", "EN 1090 铝围栏"],
    [
      ["能做粉末喷涂的铝合金隐私围栏吗？", "可以。格栅和百叶隐私围栏按独立型号生产，颜色按 RAL 粉末喷涂。"],
      ["泳池围栏和安防围栏能分开采购吗？", "可以。泳池围栏和防攀爬安防围栏都是单独型号，不是混在一个通用围栏里。"],
      ["铝艺围栏有 EN 1090 验证吗？", "列入 ICR 证书的围栏型号按 EN 1090 和欧盟建筑产品法规核查。具体型号请和出口团队确认。"],
    ],
  ),
  "aluminum-carports": landing(
    "铝合金车棚厂家",
    "单车位、双车位铝合金车棚和停车棚定制。6063-T5 框架，聚碳酸酯或金属顶，粉末喷涂，上海工厂 OEM 出口。",
    "单车位与双车位铝合金车棚厂家",
    "振龙生产独立式铝艺车棚和停车棚，覆盖一辆或两辆车。宽度、长度、顶板和喷涂颜色按图纸制作。车棚不使用凉亭或雨棚的 EN 1090 证书。",
    "铝合金车棚厂家",
    ["铝合金车棚厂家", "双车位铝车棚定制", "铝艺停车棚工厂", "铝车棚 OEM", "6063铝车棚", "粉末喷涂车棚"],
    [
      ["可以做定制双车位铝车棚吗？", "可以。目录里有单车位和双车位，宽度和长度按现场尺寸生产。"],
      ["车棚框架用什么铝合金？", "框架是 6063-T5 铝型材，表面粉末喷涂。顶板按型号用聚碳酸酯或金属板。"],
      ["铝车棚可以出口到别墅和酒店项目吗？", "可以。按出口包装发往北美、欧洲、中东、东南亚和澳大利亚。"],
    ],
  ),
  "aluminum-sliding-doors": landing(
    "铝合金推拉门厂家",
    "建筑铝艺推拉门和自动铝艺平移门工厂。粉末喷涂型材，可配钢化玻璃，宽度按洞口定制，上海 OEM。",
    "铝合金推拉门与自动平移门厂家",
    "这一类包括建筑用铝艺推拉门，以及住宅、酒店用的自动平移门。洞口宽度、喷涂颜色、玻璃或实心填芯按图纸生产。推拉门不套用大门的 EN 1090 证书。",
    "铝合金推拉门厂家",
    ["铝合金推拉门厂家", "自动铝艺平移门", "定制铝合金推拉门", "铝艺平移门 OEM", "粉末喷涂推拉门"],
    [
      ["有自动铝合金平移门吗？", "有。多款是粉末喷涂的自动铝艺平移门。"],
      ["推拉门可以按洞口尺寸做吗？", "可以。宽度和高度按图纸或现场尺寸生产。"],
      ["推拉门和大门用的是同一张 EN 1090 证书吗？", "不是。大门验证只覆盖证书上的大门型号。推拉门是否列入，需要单独确认。"],
    ],
  ),
  "aluminum-doors": landing(
    "铝艺大门厂家",
    "庭院铝艺大门、入户门和车道门定制工厂。平开与平移，按 CAD 做 OEM，粉末喷涂。列入证书的大门型号具备 EN 1090 验证。",
    "定制铝艺大门与庭院门厂家",
    "振龙制作庭院门、主门和车道大门，包括电动平移门和别墅装饰门。列入 ICR 验证的大门型号，按 EN 1090 和 CPR (EU) 305/2011 核查。",
    "铝艺大门厂家",
    ["铝艺大门厂家", "铝合金庭院门定制", "铝合金车道门工厂", "别墅铝艺大门 OEM", "粉末喷涂铝大门", "EN 1090 铝大门"],
    [
      ["庭院铝门可以按我们的 CAD 图纸生产吗？", "可以。入口门和庭院门按 CAD 和现场尺寸制作。"],
      ["平开铝门和平移铝门都有吗？", "有。平开门和电动平移门在目录里是不同型号。"],
      ["哪些铝大门有 EN 1090 验证？", "只有 ICR 证书上列出的大门型号。投标前可以把型号发给我们核对。"],
    ],
  ),
  awnings: landing(
    "铝合金雨棚厂家",
    "门窗雨棚和露台遮阳篷定制。6063-T5 粉末喷涂框架，聚碳酸酯顶，尺寸按项目 OEM。列入证书的雨棚型号具备 EN 1090 验证。",
    "铝合金雨棚与遮阳篷厂家",
    "这里是别墅露台雨棚，以及门窗入口遮阳篷。框架为粉末喷涂铝材，顶面多为聚碳酸酯。列入 ICR 证书的雨棚型号按 EN 1090 验证。",
    "铝合金雨棚厂家",
    ["铝合金雨棚厂家", "铝合金遮阳篷定制", "门口铝艺雨棚工厂", "铝艺雨棚 OEM", "粉末喷涂雨棚", "EN 1090 铝雨棚"],
    [
      ["能做门口雨棚和露台遮阳篷吗？", "可以。露台雨棚和入口雨棚的宽度、出挑都按图纸生产。"],
      ["雨棚顶面用什么材料？", "多数是粉末喷涂铝框架，加聚碳酸酯或其他户外盖板。"],
      ["雨棚有 EN 1090 验证吗？", "列入 ICR 验证的雨棚型号按 EN 1090 和欧盟建筑产品法规核查。车棚是另一类，不在这张雨棚证书上。"],
    ],
  ),
};

function cloneLanding(
  base: SeoLanding,
  text: Pick<SeoLanding, "title" | "description" | "h1" | "lead" | "suffix" | "keywords"> & {
    faqs: [string, string][];
  },
): SeoLanding {
  return landing(text.title, text.description, text.h1, text.lead, text.suffix, text.keywords, text.faqs);
}

const esLandings: Record<CategorySlug, SeoLanding> = {
  "aluminum-gazebos": cloneLanding(enLandings["aluminum-gazebos"], {
    title: "Fabricante de pérgolas de aluminio a medida",
    description: "Fábrica en Shanghái de pérgolas y cenadores de aluminio. Techo de lamas, estructura 6063-T5, lacado en polvo o PVDF, OEM y embalaje de exportación.",
    h1: "Fabricante de pérgolas y cenadores de aluminio a medida",
    lead: "Zhenlong fabrica pérgolas y cenadores de aluminio según plano para villas, restaurantes y hoteles. La estructura es 6063-T5, con techo de lamas o fijo, lacado en polvo o PVDF, y marca OEM para importadores.",
    suffix: "Fabricante de pérgolas de aluminio",
    keywords: ["pérgola de aluminio a medida", "fabricante de cenadores de aluminio", "pérgola bioclimática de lamas", "cenador de aluminio OEM", "pérgola 6063-T5"],
    faqs: [
      ["¿Fabrican pérgolas de aluminio a medida según planos?", "Sí. Luz, largo, alto, techo de lamas o fijo y color se producen según sus planos o medidas de obra."],
      ["¿Ofrecen cenadores bioclimáticos OEM?", "Sí. Las pérgolas motorizadas de lamas y las de techo fijo pueden llevar su marca y sus medidas."],
      ["¿Las pérgolas tienen verificación EN 1090?", "Los modelos de pabellón incluidos en la verificación ICR se comprueban según EN 1090 y CPR (UE) 305/2011."],
    ],
  }),
  "aluminum-fences": cloneLanding(enLandings["aluminum-fences"], {
    title: "Fabricante de vallas de aluminio a medida",
    description: "Fábrica de vallas de aluminio: lamas, privacidad, piscina y seguridad. 6063-T5 lacado en polvo, a medida, exportación OEM desde Shanghái.",
    h1: "Fabricante de vallas de aluminio a medida",
    lead: "Cada ficha es un modelo distinto: lama horizontal, pantalla de privacidad, piquete, valla de piscina o seguridad antiescalada. Aluminio 6063-T5 con lacado en polvo, cortado a la altura del proyecto.",
    suffix: "Fabricante de vallas de aluminio",
    keywords: ["valla de aluminio a medida", "fabricante de valla de privacidad", "valla de aluminio lacada", "valla de piscina de aluminio", "valla de aluminio EN 1090"],
    faqs: [
      ["¿Fabrican vallas de privacidad de aluminio lacadas?", "Sí. Los paneles de lamas y de ocultación son modelos propios, en colores RAL."],
      ["¿La valla de piscina y la de seguridad se piden por separado?", "Sí. Cada una tiene su modelo, no van mezcladas en una valla genérica."],
      ["¿La valla de aluminio tiene verificación EN 1090?", "Los modelos incluidos en el certificado ICR siguen EN 1090 y CPR (UE) 305/2011."],
    ],
  }),
  "aluminum-carports": cloneLanding(enLandings["aluminum-carports"], {
    title: "Fabricante de cocheras de aluminio",
    description: "Fábrica de cocheras de aluminio de una o dos plazas. Estructura 6063-T5, techo de policarbonato o metal, lacado en polvo, OEM desde Shanghái.",
    h1: "Fabricante de cocheras de aluminio de una y dos plazas",
    lead: "Zhenlong fabrica cocheras y marquesinas de aparcamiento para uno o dos vehículos. Ancho, largo, cubierta y color siguen su plano. Esta categoría no usa el certificado EN 1090 de pérgolas o toldos.",
    suffix: "Fabricante de cocheras de aluminio",
    keywords: ["fabricante de cocheras de aluminio", "cochera doble a medida", "marquesina de aparcamiento de aluminio", "cochera de aluminio OEM", "cochera 6063-T5"],
    faqs: [
      ["¿Pueden fabricar una cochera doble a medida?", "Sí. Hay modelos de una y dos plazas, con ancho y largo según la obra."],
      ["¿Qué aluminio usa la estructura?", "Perfiles 6063-T5 lacados en polvo. La cubierta es policarbonato o chapa, según el modelo."],
      ["¿Exportan cocheras para villas y hoteles?", "Sí. El embalaje de exportación cubre Norteamérica, Europa, Oriente Medio, el Sudeste Asiático y Australia."],
    ],
  }),
  "aluminum-sliding-doors": cloneLanding(enLandings["aluminum-sliding-doors"], {
    title: "Fabricante de puertas correderas de aluminio",
    description: "Fábrica de puertas correderas de aluminio y cancelas automáticas. Perfiles lacados, vidrio opcional, ancho a medida, OEM desde Shanghái.",
    h1: "Fabricante de puertas correderas y cancelas automáticas de aluminio",
    lead: "Esta gama incluye puertas correderas arquitectónicas y cancelas correderas automáticas. El ancho, el lacado y el vidrio o panel siguen su plano. Las puertas correderas no entran en el certificado EN 1090 de portones.",
    suffix: "Fabricante de puertas correderas de aluminio",
    keywords: ["puerta corredera de aluminio", "cancela corredera automática", "puerta de patio de aluminio a medida", "puerta corredera OEM"],
    faqs: [
      ["¿Fabrican cancelas correderas automáticas de aluminio?", "Sí. Varios modelos son cancelas automáticas con lacado en polvo."],
      ["¿La puerta corredera se hace al hueco?", "Sí. Ancho y alto salen de sus planos o de las medidas de obra."],
      ["¿Usan el mismo certificado EN 1090 que los portones?", "No. La verificación de portones cubre solo los modelos listados. Confirme el modelo antes de indicarlo."],
    ],
  }),
  "aluminum-doors": cloneLanding(enLandings["aluminum-doors"], {
    title: "Fabricante de portones de aluminio a medida",
    description: "Fábrica de portones de patio y de acceso en aluminio. Batientes y correderos, OEM según CAD, lacado en polvo. Los modelos listados tienen verificación EN 1090.",
    h1: "Fabricante de portones y cancelas de aluminio a medida",
    lead: "Zhenlong fabrica portones de patio, principales y de acceso, incluidos portones correderos eléctricos y decorativos. Los modelos listados en la verificación ICR cumplen EN 1090 y CPR (UE) 305/2011.",
    suffix: "Fabricante de portones de aluminio",
    keywords: ["portón de aluminio a medida", "cancela de patio de aluminio", "portón de acceso de aluminio", "portón de villa OEM", "portón EN 1090"],
    faqs: [
      ["¿Los portones de patio se fabrican según CAD?", "Sí. Se producen a partir de sus archivos CAD y de las medidas de obra."],
      ["¿Hay portones batientes y correderos?", "Sí. Son modelos distintos en el catálogo."],
      ["¿Qué portones tienen verificación EN 1090?", "Solo los modelos nombrados en la verificación ICR. Podemos cruzar el número antes de la licitación."],
    ],
  }),
  awnings: cloneLanding(enLandings.awnings, {
    title: "Fabricante de toldos y marquesinas de aluminio",
    description: "Toldos de puerta y de terraza en aluminio a medida. Estructura 6063-T5 lacada, cubierta de policarbonato. Los modelos de marquesina listados tienen EN 1090.",
    h1: "Fabricante de toldos y marquesinas de aluminio",
    lead: "Son toldos de terraza y marquesinas de puerta o ventana. El marco es aluminio lacado en polvo, normalmente con policarbonato. Los modelos del certificado ICR están verificados según EN 1090.",
    suffix: "Fabricante de toldos de aluminio",
    keywords: ["fabricante de toldos de aluminio", "marquesina de puerta a medida", "toldo de terraza de aluminio", "marquesina de aluminio OEM", "toldo EN 1090"],
    faqs: [
      ["¿Fabrican marquesinas de puerta y toldos de terraza?", "Sí. El ancho y el vuelo se hacen según plano."],
      ["¿Qué material lleva la cubierta?", "Casi siempre un marco de aluminio lacado con policarbonato u otra cubierta de exterior."],
      ["¿Los toldos tienen verificación EN 1090?", "Los modelos de marquesina del certificado ICR siguen EN 1090. Las cocheras son otra categoría y no están en ese certificado."],
    ],
  }),
};

const frLandings: Record<CategorySlug, SeoLanding> = {
  "aluminum-gazebos": cloneLanding(enLandings["aluminum-gazebos"], {
    title: "Fabricant de pergola aluminium sur mesure",
    description: "Usine à Shanghai de pergolas et gazebos aluminium. Toit à lames, ossature 6063-T5, thermolaquage ou PVDF, OEM et emballage export.",
    h1: "Fabricant de pergolas et gazebos aluminium sur mesure",
    lead: "Zhenlong fabrique des pergolas et gazebos aluminium sur plan pour villas, restaurants et hôtels. Ossature 6063-T5, toit à lames ou fixe, thermolaquage ou PVDF, et marque OEM pour les importateurs.",
    suffix: "Fabricant de pergola aluminium",
    keywords: ["pergola aluminium sur mesure", "fabricant de gazebo aluminium", "pergola bioclimatique à lames", "gazebo aluminium OEM", "pergola 6063-T5"],
    faqs: [
      ["Fabriquez-vous une pergola aluminium selon nos plans ?", "Oui. Portée, longueur, hauteur, toit à lames ou fixe et couleur suivent vos plans ou cotes."],
      ["Proposez-vous des gazebos bioclimatiques OEM ?", "Oui. Les pergolas à lames motorisées et les toits fixes peuvent porter votre marque."],
      ["Les pavillons sont-ils vérifiés EN 1090 ?", "Les modèles de pavillon figurant sur la vérification ICR sont contrôlés selon EN 1090 et CPR (UE) 305/2011."],
    ],
  }),
  "aluminum-fences": cloneLanding(enLandings["aluminum-fences"], {
    title: "Fabricant de clôture aluminium sur mesure",
    description: "Usine de clôtures aluminium : lames, occultation, piscine et sécurité. 6063-T5 thermolaqué, sur mesure, export OEM depuis Shanghai.",
    h1: "Fabricant de clôtures aluminium sur mesure",
    lead: "Chaque fiche est un modèle distinct : lame horizontale, écran occultant, barreaux, clôture de piscine ou sécurité anti-escalade. Aluminium 6063-T5 thermolaqué, coupé à la hauteur du chantier.",
    suffix: "Fabricant de clôture aluminium",
    keywords: ["clôture aluminium sur mesure", "fabricant de clôture occultante", "clôture aluminium thermolaquée", "clôture de piscine aluminium", "clôture EN 1090"],
    faqs: [
      ["Fabriquez-vous des clôtures occultantes thermolaquées ?", "Oui. Les panneaux à lames sont des modèles séparés, teintés RAL."],
      ["La clôture piscine et la clôture sécurité se commandent à part ?", "Oui. Chacune a son modèle."],
      ["La clôture aluminium est-elle vérifiée EN 1090 ?", "Les modèles du certificat ICR suivent EN 1090 et le règlement européen sur les produits de construction."],
    ],
  }),
  "aluminum-carports": cloneLanding(enLandings["aluminum-carports"], {
    title: "Fabricant de carport aluminium",
    description: "Usine de carports aluminium une ou deux places. Ossature 6063-T5, toit polycarbonate ou métal, thermolaquage, OEM depuis Shanghai.",
    h1: "Fabricant de carports aluminium une et deux places",
    lead: "Zhenlong fabrique des carports autoportants pour un ou deux véhicules. Largeur, longueur, couverture et couleur suivent votre plan. Cette catégorie n'utilise pas le certificat EN 1090 des pergolas ou auvents.",
    suffix: "Fabricant de carport aluminium",
    keywords: ["fabricant de carport aluminium", "carport double sur mesure", "auvent de parking aluminium", "carport aluminium OEM", "carport 6063-T5"],
    faqs: [
      ["Pouvez-vous fabriquer un carport double sur mesure ?", "Oui. Les modèles une et deux places sont au catalogue, aux cotes du site."],
      ["Quel aluminium pour l'ossature ?", "Profils 6063-T5 thermolaqués. Toit polycarbonate ou tôle selon le modèle."],
      ["Exportez-vous des carports pour villas et hôtels ?", "Oui, avec emballage export vers l'Amérique du Nord, l'Europe, le Moyen-Orient, l'Asie du Sud-Est et l'Australie."],
    ],
  }),
  "aluminum-sliding-doors": cloneLanding(enLandings["aluminum-sliding-doors"], {
    title: "Fabricant de porte coulissante aluminium",
    description: "Usine de portes coulissantes aluminium et portails coulissants automatiques. Profils laqués, vitrage en option, largeur sur mesure, OEM à Shanghai.",
    h1: "Fabricant de portes coulissantes et portails automatiques aluminium",
    lead: "Cette gamme couvre les portes coulissantes architecturales et les portails coulissants automatiques. Largeur, laque et vitrage suivent votre plan. Les portes coulissantes ne sont pas couvertes par le certificat EN 1090 des portails.",
    suffix: "Fabricant de porte coulissante aluminium",
    keywords: ["porte coulissante aluminium", "portail coulissant automatique", "porte de terrasse aluminium sur mesure", "porte coulissante OEM"],
    faqs: [
      ["Fabriquez-vous des portails coulissants automatiques ?", "Oui. Plusieurs modèles sont des portails automatiques thermolaqués."],
      ["La porte coulissante est-elle faite à l'ouverture ?", "Oui. Largeur et hauteur viennent de vos plans ou cotes."],
      ["Même certificat EN 1090 que les portails de cour ?", "Non. La vérification des portails ne couvre que les modèles listés."],
    ],
  }),
  "aluminum-doors": cloneLanding(enLandings["aluminum-doors"], {
    title: "Fabricant de portail aluminium sur mesure",
    description: "Usine de portails de cour et d'allée en aluminium. Battants et coulissants, OEM selon CAO, thermolaquage. Les modèles listés ont une vérification EN 1090.",
    h1: "Fabricant de portails aluminium sur mesure",
    lead: "Zhenlong fabrique des portails de cour, principaux et d'entrée, y compris portails coulissants électriques. Les modèles listés sur la vérification ICR suivent EN 1090 et CPR (UE) 305/2011.",
    suffix: "Fabricant de portail aluminium",
    keywords: ["portail aluminium sur mesure", "portail de cour aluminium", "portail d'allée aluminium", "portail de villa OEM", "portail EN 1090"],
    faqs: [
      ["Les portails de cour sont-ils faits selon nos plans CAO ?", "Oui, à partir de vos fichiers CAO et des cotes du site."],
      ["Y a-t-il des portails battants et coulissants ?", "Oui. Ce sont des modèles distincts."],
      ["Quels portails sont vérifiés EN 1090 ?", "Uniquement les modèles nommés sur la vérification ICR."],
    ],
  }),
  awnings: cloneLanding(enLandings.awnings, {
    title: "Fabricant d'auvent et marquise aluminium",
    description: "Auvents de porte et de terrasse en aluminium sur mesure. Cadre 6063-T5 thermolaqué, polycarbonate. Les modèles de marquise listés sont vérifiés EN 1090.",
    h1: "Fabricant d'auvents et marquises aluminium",
    lead: "Auvents de terrasse et marquises de porte ou fenêtre. Cadre aluminium thermolaqué, le plus souvent avec polycarbonate. Les modèles du certificat ICR sont vérifiés EN 1090.",
    suffix: "Fabricant d'auvent aluminium",
    keywords: ["fabricant d'auvent aluminium", "marquise de porte sur mesure", "auvent de terrasse aluminium", "marquise aluminium OEM", "auvent EN 1090"],
    faqs: [
      ["Fabriquez-vous des marquises de porte et des auvents de terrasse ?", "Oui. Largeur et avancée suivent le plan."],
      ["Quel matériau de couverture ?", "En général un cadre aluminium thermolaqué avec polycarbonate."],
      ["Les auvents sont-ils vérifiés EN 1090 ?", "Les modèles de marquise du certificat ICR suivent EN 1090. Les carports sont une autre catégorie."],
    ],
  }),
};

const deLandings: Record<CategorySlug, SeoLanding> = {
  "aluminum-gazebos": cloneLanding(enLandings["aluminum-gazebos"], {
    title: "Hersteller für Alu-Pergolen nach Maß",
    description: "Werk in Shanghai für Alu-Pergolen und Pavillons. Lamellendach, 6063-T5, Pulverbeschichtung oder PVDF, OEM und Exportverpackung.",
    h1: "Hersteller für Alu-Pergolen und Pavillons nach Maß",
    lead: "Zhenlong fertigt Alu-Pergolen und Pavillons nach Zeichnung für Villen, Restaurants und Hotels. Rahmen aus 6063-T5, Lamellen- oder Festdach, Pulver oder PVDF, OEM für Importeure.",
    suffix: "Alu-Pergola Hersteller",
    keywords: ["Alu-Pergola nach Maß", "Alu-Pavillon Hersteller", "bioklimatische Lamellenpergola", "Alu-Pavillon OEM", "Pergola 6063-T5"],
    faqs: [
      ["Fertigen Sie Alu-Pergolen nach unseren Zeichnungen?", "Ja. Spannweite, Länge, Höhe, Lamellen- oder Festdach und Farbe folgen der Zeichnung oder dem Aufmaß."],
      ["Gibt es bioklimatische Pavillons als OEM?", "Ja. Motorisierte Lamellenpergolen und feste Dächer können Ihre Marke tragen."],
      ["Sind die Pavillons nach EN 1090 geprüft?", "Die auf der ICR-Verifizierung genannten Pavillonmodelle werden nach EN 1090 und CPR (EU) 305/2011 geprüft."],
    ],
  }),
  "aluminum-fences": cloneLanding(enLandings["aluminum-fences"], {
    title: "Hersteller für Alu-Zäune nach Maß",
    description: "Alu-Zaunfabrik für Lamellen, Sichtschutz, Pool und Sicherheit. 6063-T5 pulverbeschichtet, zugeschnitten, OEM-Export aus Shanghai.",
    h1: "Hersteller für Alu-Zäune nach Maß",
    lead: "Jeder Eintrag ist ein eigenes Modell: Horizontallamelle, Sichtschutz, Stakete, Poolzaun oder klettersicherer Sicherheitszaun. 6063-T5 mit Pulverbeschichtung, auf die Höhe des Projekts geschnitten.",
    suffix: "Alu-Zaun Hersteller",
    keywords: ["Alu-Zaun nach Maß", "Sichtschutzzaun Hersteller", "pulverbeschichteter Alu-Zaun", "Alu-Poolzaun", "Alu-Zaun EN 1090"],
    faqs: [
      ["Fertigen Sie pulverbeschichtete Sichtschutzzäune?", "Ja. Lamellenfelder sind eigene Modelle in RAL-Farben."],
      ["Poolzaun und Sicherheitszaun getrennt bestellbar?", "Ja. Jedes ist ein eigenes Modell."],
      ["Ist der Alu-Zaun nach EN 1090 verifiziert?", "Die Modelle auf dem ICR-Zertifikat folgen EN 1090 und der EU-Bauproduktenverordnung."],
    ],
  }),
  "aluminum-carports": cloneLanding(enLandings["aluminum-carports"], {
    title: "Alu-Carport Hersteller",
    description: "Fabrik für Alu-Carports mit einem oder zwei Stellplätzen. 6063-T5, Polycarbonat- oder Metalldach, Pulverbeschichtung, OEM aus Shanghai.",
    h1: "Hersteller für Alu-Carports mit einem und zwei Stellplätzen",
    lead: "Zhenlong fertigt freistehende Alu-Carports für ein oder zwei Fahrzeuge. Breite, Länge, Dach und Farbe folgen Ihrer Zeichnung. Diese Kategorie nutzt nicht das EN-1090-Zertifikat für Pavillons oder Vordächer.",
    suffix: "Alu-Carport Hersteller",
    keywords: ["Alu-Carport Hersteller", "Doppelcarport nach Maß", "Alu-Parküberdachung", "Alu-Carport OEM", "Carport 6063-T5"],
    faqs: [
      ["Können Sie einen Doppelcarport nach Maß bauen?", "Ja. Einzel- und Doppelstellplatz sind im Katalog, Breite und Länge nach Aufmaß."],
      ["Welche Legierung hat der Rahmen?", "6063-T5-Profile, pulverbeschichtet. Dach aus Polycarbonat oder Blech je nach Modell."],
      ["Exportieren Sie Carports für Villen und Hotels?", "Ja, mit Exportverpackung nach Nordamerika, Europa, in den Nahen Osten, nach Südostasien und Australien."],
    ],
  }),
  "aluminum-sliding-doors": cloneLanding(enLandings["aluminum-sliding-doors"], {
    title: "Hersteller für Alu-Schiebetüren",
    description: "Fabrik für Alu-Schiebetüren und automatische Schiebetore. Pulverbeschichtete Profile, Glas optional, Breite nach Maß, OEM aus Shanghai.",
    h1: "Hersteller für Alu-Schiebetüren und automatische Schiebetore",
    lead: "Diese Reihe umfasst architektonische Schiebetüren und automatische Schiebetore. Breite, Beschichtung und Glas folgen der Zeichnung. Schiebetüren stehen nicht auf dem EN-1090-Zertifikat für Tore.",
    suffix: "Alu-Schiebetür Hersteller",
    keywords: ["Alu-Schiebetür Hersteller", "automatisches Alu-Schiebetor", "Alu-Terrassenschiebetür nach Maß", "Schiebetür OEM"],
    faqs: [
      ["Bauen Sie automatische Alu-Schiebetore?", "Ja. Mehrere Modelle sind automatische, pulverbeschichtete Schiebetore."],
      ["Wird die Schiebetür auf die Öffnung gefertigt?", "Ja. Breite und Höhe kommen aus Zeichnung oder Aufmaß."],
      ["Gleiches EN-1090-Zertifikat wie Hoftore?", "Nein. Die Tor-Verifizierung gilt nur für die genannten Tormodelle."],
    ],
  }),
  "aluminum-doors": cloneLanding(enLandings["aluminum-doors"], {
    title: "Hersteller für Alu-Tore nach Maß",
    description: "Fabrik für Alu-Hof- und Einfahrtstore. Dreh- und Schiebetore, OEM nach CAD, Pulverbeschichtung. Gelistete Modelle haben eine EN-1090-Verifizierung.",
    h1: "Hersteller für Alu-Tore und Hoftore nach Maß",
    lead: "Zhenlong fertigt Hoftore, Haupttore und Einfahrtstore, einschließlich elektrischer Schiebetore. Die auf der ICR-Verifizierung genannten Modelle folgen EN 1090 und CPR (EU) 305/2011.",
    suffix: "Alu-Tor Hersteller",
    keywords: ["Alu-Tor nach Maß", "Alu-Hoftor Hersteller", "Alu-Einfahrtstor", "Villa-Tor OEM", "Alu-Tor EN 1090"],
    faqs: [
      ["Werden Hoftore nach CAD gefertigt?", "Ja, nach Ihren CAD-Dateien und dem Aufmaß."],
      ["Gibt es Dreh- und Schiebetore?", "Ja, als getrennte Modelle."],
      ["Welche Tore sind EN 1090 verifiziert?", "Nur die auf der ICR-Verifizierung genannten Modelle."],
    ],
  }),
  awnings: cloneLanding(enLandings.awnings, {
    title: "Hersteller für Alu-Vordächer und Markisen",
    description: "Türvordächer und Terrassenmarkisen aus Aluminium nach Maß. 6063-T5 pulverbeschichtet, Polycarbonat. Gelistete Vordachmodelle sind EN 1090 verifiziert.",
    h1: "Hersteller für Alu-Vordächer und Markisen",
    lead: "Terrassenvordächer sowie Tür- und Fenstermarkisen. Pulverbeschichteter Alurahmen, meist mit Polycarbonat. Die Modelle auf dem ICR-Zertifikat sind nach EN 1090 geprüft.",
    suffix: "Alu-Vordach Hersteller",
    keywords: ["Alu-Vordach Hersteller", "Türvordach nach Maß", "Alu-Terrassenmarkise", "Alu-Markise OEM", "Vordach EN 1090"],
    faqs: [
      ["Fertigen Sie Türvordächer und Terrassenmarkisen?", "Ja. Breite und Ausladung folgen der Zeichnung."],
      ["Welches Dachmaterial?", "Meist ein pulverbeschichteter Alurahmen mit Polycarbonat."],
      ["Sind die Vordächer EN 1090 verifiziert?", "Die Markisenmodelle auf dem ICR-Zertifikat folgen EN 1090. Carports sind eine andere Kategorie."],
    ],
  }),
};

const ptLandings: Record<CategorySlug, SeoLanding> = {
  "aluminum-gazebos": cloneLanding(enLandings["aluminum-gazebos"], {
    title: "Fabricante de pérgola de alumínio sob medida",
    description: "Fábrica em Xangai de pérgolas e gazebos de alumínio. Telhado de lâminas, estrutura 6063-T5, pintura a pó ou PVDF, OEM e embalagem de exportação.",
    h1: "Fabricante de pérgolas e gazebos de alumínio sob medida",
    lead: "A Zhenlong fabrica pérgolas e gazebos de alumínio conforme desenho para villas, restaurantes e hotéis. Estrutura 6063-T5, telhado de lâminas ou fixo, pintura a pó ou PVDF, e marca OEM.",
    suffix: "Fabricante de pérgola de alumínio",
    keywords: ["pérgola de alumínio sob medida", "fabricante de gazebo de alumínio", "pérgola bioclimática", "gazebo de alumínio OEM", "pérgola 6063-T5"],
    faqs: [
      ["Fabricam pérgolas de alumínio conforme desenho?", "Sim. Vão, comprimento, altura, telhado e cor seguem o desenho ou as medidas da obra."],
      ["Há gazebos bioclimáticos OEM?", "Sim. Pérgolas motorizadas de lâminas e telhados fixos podem levar a sua marca."],
      ["As pérgolas têm verificação EN 1090?", "Os modelos de pavilhão na verificação ICR são conferidos segundo EN 1090 e CPR (UE) 305/2011."],
    ],
  }),
  "aluminum-fences": cloneLanding(enLandings["aluminum-fences"], {
    title: "Fabricante de cerca de alumínio sob medida",
    description: "Fábrica de cercas de alumínio: lâminas, privacidade, piscina e segurança. 6063-T5 com pintura a pó, sob medida, exportação OEM de Xangai.",
    h1: "Fabricante de cercas de alumínio sob medida",
    lead: "Cada ficha é um modelo: lâmina horizontal, privacidade, piquete, cerca de piscina ou segurança anti-escalada. Alumínio 6063-T5 pintado a pó, cortado à altura do projeto.",
    suffix: "Fabricante de cerca de alumínio",
    keywords: ["cerca de alumínio sob medida", "fabricante de cerca de privacidade", "cerca de alumínio pintada", "cerca de piscina de alumínio", "cerca EN 1090"],
    faqs: [
      ["Fabricam cercas de privacidade com pintura a pó?", "Sim. Painéis de lâminas são modelos próprios, em cores RAL."],
      ["Cerca de piscina e de segurança são pedidas à parte?", "Sim. Cada uma é um modelo separado."],
      ["A cerca de alumínio tem verificação EN 1090?", "Os modelos do certificado ICR seguem EN 1090 e o regulamento europeu de produtos de construção."],
    ],
  }),
  "aluminum-carports": cloneLanding(enLandings["aluminum-carports"], {
    title: "Fabricante de carport de alumínio",
    description: "Fábrica de carports de alumínio para um ou dois carros. Estrutura 6063-T5, telhado de policarbonato ou metal, pintura a pó, OEM em Xangai.",
    h1: "Fabricante de carports de alumínio para uma e duas vagas",
    lead: "A Zhenlong fabrica carports independentes para um ou dois veículos. Largura, comprimento, cobertura e cor seguem o desenho. Esta categoria não usa o certificado EN 1090 de pérgolas ou marquises.",
    suffix: "Fabricante de carport de alumínio",
    keywords: ["fabricante de carport de alumínio", "carport duplo sob medida", "cobertura de estacionamento de alumínio", "carport OEM", "carport 6063-T5"],
    faqs: [
      ["Fabricam carport duplo sob medida?", "Sim. Há modelos de uma e duas vagas, com medidas da obra."],
      ["Qual alumínio da estrutura?", "Perfis 6063-T5 com pintura a pó. Telhado de policarbonato ou chapa, conforme o modelo."],
      ["Exportam carports para villas e hotéis?", "Sim, com embalagem para América do Norte, Europa, Oriente Médio, Sudeste Asiático e Austrália."],
    ],
  }),
  "aluminum-sliding-doors": cloneLanding(enLandings["aluminum-sliding-doors"], {
    title: "Fabricante de porta de correr de alumínio",
    description: "Fábrica de portas de correr de alumínio e portões automáticos. Perfis pintados, vidro opcional, largura sob medida, OEM em Xangai.",
    h1: "Fabricante de portas de correr e portões automáticos de alumínio",
    lead: "Esta linha inclui portas de correr arquitetônicas e portões de correr automáticos. Largura, pintura e vidro seguem o desenho. Portas de correr não entram no certificado EN 1090 dos portões.",
    suffix: "Fabricante de porta de correr de alumínio",
    keywords: ["porta de correr de alumínio", "portão de correr automático", "porta de pátio de alumínio sob medida", "porta de correr OEM"],
    faqs: [
      ["Fabricam portões de correr automáticos?", "Sim. Vários modelos são portões automáticos com pintura a pó."],
      ["A porta de correr é feita no vão?", "Sim. Largura e altura vêm do desenho ou das medidas."],
      ["O mesmo certificado EN 1090 dos portões?", "Não. A verificação cobre apenas os modelos de portão listados."],
    ],
  }),
  "aluminum-doors": cloneLanding(enLandings["aluminum-doors"], {
    title: "Fabricante de portão de alumínio sob medida",
    description: "Fábrica de portões de pátio e de acesso em alumínio. De abrir e de correr, OEM em CAD, pintura a pó. Modelos listados têm verificação EN 1090.",
    h1: "Fabricante de portões de alumínio sob medida",
    lead: "A Zhenlong fabrica portões de pátio, principais e de acesso, incluindo portões de correr elétricos. Os modelos listados na verificação ICR seguem EN 1090 e CPR (UE) 305/2011.",
    suffix: "Fabricante de portão de alumínio",
    keywords: ["portão de alumínio sob medida", "portão de pátio de alumínio", "portão de acesso de alumínio", "portão de villa OEM", "portão EN 1090"],
    faqs: [
      ["Portões de pátio são feitos em CAD?", "Sim, a partir dos seus arquivos CAD e das medidas da obra."],
      ["Há portões de abrir e de correr?", "Sim, como modelos separados."],
      ["Quais portões têm verificação EN 1090?", "Apenas os modelos citados na verificação ICR."],
    ],
  }),
  awnings: cloneLanding(enLandings.awnings, {
    title: "Fabricante de marquise e toldo de alumínio",
    description: "Marquises de porta e toldos de terraço em alumínio sob medida. Estrutura 6063-T5 pintada, policarbonato. Modelos de marquise listados têm EN 1090.",
    h1: "Fabricante de marquises e toldos de alumínio",
    lead: "Toldos de terraço e marquises de porta ou janela. Estrutura de alumínio pintada a pó, em geral com policarbonato. Os modelos do certificado ICR são verificados segundo EN 1090.",
    suffix: "Fabricante de marquise de alumínio",
    keywords: ["fabricante de marquise de alumínio", "marquise de porta sob medida", "toldo de terraço de alumínio", "marquise OEM", "toldo EN 1090"],
    faqs: [
      ["Fabricam marquises de porta e toldos de terraço?", "Sim. Largura e avanço seguem o desenho."],
      ["Qual material da cobertura?", "Na maioria, estrutura de alumínio pintada com policarbonato."],
      ["Os toldos têm verificação EN 1090?", "Os modelos de marquise do certificado ICR seguem EN 1090. Carports são outra categoria."],
    ],
  }),
};

const ruLandings: Record<CategorySlug, SeoLanding> = {
  "aluminum-gazebos": cloneLanding(enLandings["aluminum-gazebos"], {
    title: "Производитель алюминиевых пергол на заказ",
    description: "Завод в Шанхае: алюминиевые перголы и беседки. Ламельная крыша, профиль 6063-T5, порошковая окраска или PVDF, OEM и экспортная упаковка.",
    h1: "Производитель алюминиевых пергол и беседок на заказ",
    lead: "Zhenlong изготавливает алюминиевые перголы и беседки по чертежам для вилл, ресторанов и отелей. Каркас 6063-T5, ламельная или глухая крыша, порошок или PVDF, OEM для импортёров.",
    suffix: "Производитель алюминиевых пергол",
    keywords: ["алюминиевая пергола на заказ", "производитель алюминиевых беседок", "биоклиматическая пергола", "алюминиевая беседка OEM", "пергола 6063-T5"],
    faqs: [
      ["Делаете алюминиевые перголы по нашим чертежам?", "Да. Пролёт, длина, высота, тип крыши и цвет — по чертежу или обмерам."],
      ["Есть биоклиматические беседки OEM?", "Да. Моторизованные ламельные перголы и глухие крыши могут идти под вашим брендом."],
      ["Перголы подтверждены по EN 1090?", "Модели павильонов из верификации ICR проверяются по EN 1090 и CPR (EU) 305/2011."],
    ],
  }),
  "aluminum-fences": cloneLanding(enLandings["aluminum-fences"], {
    title: "Производитель алюминиевых ограждений на заказ",
    description: "Завод алюминиевых ограждений: ламели, приватность, бассейн и безопасность. 6063-T5 с порошковой окраской, в размер, OEM из Шанхая.",
    h1: "Производитель алюминиевых ограждений на заказ",
    lead: "Каждая позиция — отдельная модель: горизонтальная ламель, экран, штакетник, ограждение бассейна или антивандальный забор. 6063-T5 с порошковой окраской, по высоте объекта.",
    suffix: "Производитель алюминиевых ограждений",
    keywords: ["алюминиевое ограждение на заказ", "производитель забора из алюминия", "порошковое алюминиевое ограждение", "ограждение бассейна", "ограждение EN 1090"],
    faqs: [
      ["Делаете порошковые экраны приватности?", "Да. Ламельные панели — отдельные модели в цветах RAL."],
      ["Ограждение бассейна и security заказываются отдельно?", "Да, это разные модели."],
      ["Есть верификация EN 1090?", "Модели из сертификата ICR соответствуют EN 1090 и регламенту ЕС о строительной продукции."],
    ],
  }),
  "aluminum-carports": cloneLanding(enLandings["aluminum-carports"], {
    title: "Производитель алюминиевых навесов для авто",
    description: "Завод навесов на одно или два машиноместа. Каркас 6063-T5, поликарбонат или металл, порошковая окраска, OEM из Шанхая.",
    h1: "Производитель алюминиевых навесов на одно и два места",
    lead: "Zhenlong делает отдельно стоящие навесы для одного или двух автомобилей. Ширина, длина, кровля и цвет — по чертежу. Эта категория не использует сертификат EN 1090 пергол или козырьков.",
    suffix: "Производитель алюминиевых навесов для авто",
    keywords: ["производитель алюминиевых навесов", "двойной навес на заказ", "алюминиевый навес для парковки", "навес OEM", "навес 6063-T5"],
    faqs: [
      ["Можно сделать двойной навес по размерам?", "Да. В каталоге есть одно и два места, ширина и длина по объекту."],
      ["Какой сплав у каркаса?", "Профиль 6063-T5 с порошковой окраской. Кровля — поликарбонат или лист, в зависимости от модели."],
      ["Экспортируете навесы для вилл и отелей?", "Да, с экспортной упаковкой в Северную Америку, Европу, на Ближний Восток, в Юго-Восточную Азию и Австралию."],
    ],
  }),
  "aluminum-sliding-doors": cloneLanding(enLandings["aluminum-sliding-doors"], {
    title: "Производитель алюминиевых раздвижных дверей",
    description: "Завод раздвижных алюминиевых дверей и автоматических откатных ворот. Порошковые профили, стекло по запросу, ширина по проёму, OEM из Шанхая.",
    h1: "Производитель раздвижных дверей и автоматических откатных ворот",
    lead: "Линейка включает архитектурные раздвижные двери и автоматические откатные ворота. Ширина, покрытие и стекло — по чертежу. Раздвижные двери не входят в сертификат EN 1090 на ворота.",
    suffix: "Производитель алюминиевых раздвижных дверей",
    keywords: ["алюминиевая раздвижная дверь", "автоматические откатные ворота", "раздвижная дверь на террасу", "раздвижная дверь OEM"],
    faqs: [
      ["Делаете автоматические откатные ворота?", "Да. Несколько моделей — автоматические ворота с порошковой окраской."],
      ["Дверь изготавливается по проёму?", "Да. Ширина и высота берутся из чертежа или обмеров."],
      ["Тот же сертификат EN 1090, что у ворот?", "Нет. Верификация ворот покрывает только перечисленные модели."],
    ],
  }),
  "aluminum-doors": cloneLanding(enLandings["aluminum-doors"], {
    title: "Производитель алюминиевых ворот на заказ",
    description: "Завод дворовых и въездных алюминиевых ворот. Распашные и откатные, OEM по CAD, порошковая окраска. Перечисленные модели имеют EN 1090.",
    h1: "Производитель алюминиевых ворот на заказ",
    lead: "Zhenlong делает дворовые, главные и въездные ворота, включая электрические откатные. Модели из верификации ICR соответствуют EN 1090 и CPR (EU) 305/2011.",
    suffix: "Производитель алюминиевых ворот",
    keywords: ["алюминиевые ворота на заказ", "дворовые алюминиевые ворота", "въездные ворота", "ворота для виллы OEM", "ворота EN 1090"],
    faqs: [
      ["Дворовые ворота делаются по CAD?", "Да, по вашим CAD-файлам и обмерам."],
      ["Есть распашные и откатные?", "Да, это разные модели."],
      ["Какие ворота подтверждены EN 1090?", "Только модели, указанные в верификации ICR."],
    ],
  }),
  awnings: cloneLanding(enLandings.awnings, {
    title: "Производитель алюминиевых козырьков и навесов",
    description: "Дверные козырьки и террасные навесы из алюминия на заказ. Каркас 6063-T5, поликарбонат. Перечисленные модели козырьков имеют EN 1090.",
    h1: "Производитель алюминиевых козырьков и маркиз",
    lead: "Террасные навесы и козырьки над дверью или окном. Порошковый алюминиевый каркас, обычно с поликарбонатом. Модели сертификата ICR проверены по EN 1090.",
    suffix: "Производитель алюминиевых козырьков",
    keywords: ["производитель алюминиевых козырьков", "дверной козырёк на заказ", "террасный алюминиевый навес", "козырёк OEM", "козырёк EN 1090"],
    faqs: [
      ["Делаете дверные козырьки и террасные навесы?", "Да. Ширина и вылет — по чертежу."],
      ["Какой материал кровли?", "Обычно порошковый алюминиевый каркас с поликарбонатом."],
      ["Козырьки подтверждены по EN 1090?", "Модели козырьков из сертификата ICR соответствуют EN 1090. Навесы для авто — другая категория."],
    ],
  }),
};

const arLandings: Record<CategorySlug, SeoLanding> = {
  "aluminum-gazebos": cloneLanding(enLandings["aluminum-gazebos"], {
    title: "مصنع برجولا ألمنيوم حسب الطلب",
    description: "مصنع في شنغهاي لبرجولا وجناح الألمنيوم. سقف شفرات، هيكل 6063-T5، طلاء مسحوق أو PVDF، وتصنيع OEM مع تغليف للتصدير.",
    h1: "مصنع برجولا وأجنحة ألمنيوم حسب الطلب",
    lead: "تصنّع تشنلونغ برجولا وأجنحة ألمنيوم حسب المخطط للفلل والمطاعم والفنادق. الهيكل 6063-T5، بسقف شفرات أو ثابت، وطلاء مسحوق أو PVDF، مع علامة OEM للمستوردين.",
    suffix: "مصنع برجولا ألمنيوم",
    keywords: ["برجولا ألمنيوم حسب الطلب", "مصنع جناح ألمنيوم", "برجولا بيوكليماتية", "جناح ألمنيوم OEM", "برجولا 6063-T5"],
    faqs: [
      ["هل تصنّعون برجولا ألمنيوم حسب مخططاتنا؟", "نعم. البحر والطول والارتفاع ونوع السقف واللون تُنتج حسب المخطط أو مقاسات الموقع."],
      ["هل تتوفر أجنحة بيوكليماتية بنظام OEM؟", "نعم. برجولا الشفرات المتحركة والأسقف الثابتة يمكن أن تحمل علامتكم."],
      ["هل الأجنحة متحققة وفق EN 1090؟", "نماذج الجناح الواردة في تحقق ICR تُراجع وفق EN 1090 وCPR (EU) 305/2011."],
    ],
  }),
  "aluminum-fences": cloneLanding(enLandings["aluminum-fences"], {
    title: "مصنع سياج ألمنيوم حسب الطلب",
    description: "مصنع أسوار ألمنيوم: شفرات وخصوصية ومسبح وأمن. 6063-T5 بطلاء مسحوق، مقاس المشروع، وتصدير OEM من شنغهاي.",
    h1: "مصنع أسوار ألمنيوم حسب الطلب",
    lead: "كل بطاقة نموذج مستقل: شفرة أفقية أو حاجب خصوصية أو قضبان أو سياج مسبح أو سياج أمان. ألمنيوم 6063-T5 بطلاء مسحوق، بارتفاع المشروع.",
    suffix: "مصنع سياج ألمنيوم",
    keywords: ["سياج ألمنيوم حسب الطلب", "مصنع سياج خصوصية", "سياج ألمنيوم مطلي", "سياج مسبح ألمنيوم", "سياج EN 1090"],
    faqs: [
      ["هل تصنّعون أسوار خصوصية بطلاء مسحوق؟", "نعم. ألواح الشفرات نماذج مستقلة بألوان RAL."],
      ["هل سياج المسبح وسياج الأمان يُطلبان منفصلين؟", "نعم. لكل منهما نموذج خاص."],
      ["هل سياج الألمنيوم متحقق وفق EN 1090؟", "النماذج الواردة في شهادة ICR تتبع EN 1090 ولائحة منتجات البناء الأوروبية."],
    ],
  }),
  "aluminum-carports": cloneLanding(enLandings["aluminum-carports"], {
    title: "مصنع مظلة سيارات ألمنيوم",
    description: "مصنع مظلات سيارات لموضع واحد أو اثنين. هيكل 6063-T5، سقف بولي كربونات أو معدن، طلاء مسحوق، وOEM من شنغهاي.",
    h1: "مصنع مظلات سيارات ألمنيوم لموضع ومواضع",
    lead: "تصنّع تشنلونغ مظلات سيارات مستقلة لمركبة أو اثنتين. العرض والطول والسقف واللون حسب المخطط. هذه الفئة لا تستخدم شهادة EN 1090 الخاصة بالبرجولا أو المظلات.",
    suffix: "مصنع مظلة سيارات ألمنيوم",
    keywords: ["مصنع مظلة سيارات ألمنيوم", "مظلة سيارتين حسب الطلب", "مظلة موقف ألمنيوم", "مظلة سيارات OEM", "مظلة 6063-T5"],
    faqs: [
      ["هل تصنّعون مظلة لسيارتين حسب المقاس؟", "نعم. توجد نماذج لموضع ومواضع، والعرض والطول حسب الموقع."],
      ["ما سبيكة الهيكل؟", "مقاطع 6063-T5 بطلاء مسحوق. السقف بولي كربونات أو لوح معدني حسب النموذج."],
      ["هل تُصدَّر المظلات للفلل والفنادق؟", "نعم، مع تغليف تصدير إلى أمريكا الشمالية وأوروبا والشرق الأوسط وجنوب شرق آسيا وأستراليا."],
    ],
  }),
  "aluminum-sliding-doors": cloneLanding(enLandings["aluminum-sliding-doors"], {
    title: "مصنع باب ألمنيوم منزلق",
    description: "مصنع أبواب ألمنيوم منزلقة وبوابات منزلقة أوتوماتيكية. مقاطع مطلية، زجاج عند الطلب، عرض حسب الفتحة، وOEM من شنغهاي.",
    h1: "مصنع أبواب منزلقة وبوابات أوتوماتيكية من الألمنيوم",
    lead: "تشمل هذه الفئة الأبواب المنزلقة المعمارية والبوابات المنزلقة الأوتوماتيكية. العرض والطلاء والزجاج حسب المخطط. الأبواب المنزلقة ليست ضمن شهادة EN 1090 للبوابات.",
    suffix: "مصنع باب ألمنيوم منزلق",
    keywords: ["باب ألمنيوم منزلق", "بوابة منزلقة أوتوماتيكية", "باب فناء ألمنيوم حسب الطلب", "باب منزلق OEM"],
    faqs: [
      ["هل تصنّعون بوابات منزلقة أوتوماتيكية؟", "نعم. عدة نماذج بوابات أوتوماتيكية بطلاء مسحوق."],
      ["هل يُصنع الباب حسب فتحة الموقع؟", "نعم. العرض والارتفاع من المخطط أو المقاسات."],
      ["هل شهادة EN 1090 هي نفسها للبوابات؟", "لا. تحقق البوابات يغطي النماذج المذكورة فقط."],
    ],
  }),
  "aluminum-doors": cloneLanding(enLandings["aluminum-doors"], {
    title: "مصنع بوابة ألمنيوم حسب الطلب",
    description: "مصنع بوابات فناء ومدخل من الألمنيوم. مفصلية ومنزلقة، OEM حسب CAD، طلاء مسحوق. النماذج المذكورة لها تحقق EN 1090.",
    h1: "مصنع بوابات ألمنيوم حسب الطلب",
    lead: "تصنّع تشنلونغ بوابات الفناء والمدخل، بما فيها البوابات المنزلقة الكهربائية. النماذج الواردة في تحقق ICR تتبع EN 1090 وCPR (EU) 305/2011.",
    suffix: "مصنع بوابة ألمنيوم",
    keywords: ["بوابة ألمنيوم حسب الطلب", "بوابة فناء ألمنيوم", "بوابة مدخل ألمنيوم", "بوابة فيلا OEM", "بوابة EN 1090"],
    faqs: [
      ["هل تُصنع بوابات الفناء حسب ملفات CAD؟", "نعم، حسب ملفات CAD ومقاسات الموقع."],
      ["هل توجد بوابات مفصلية ومنزلقة؟", "نعم، كنماذج منفصلة."],
      ["أي البوابات متحققة وفق EN 1090؟", "فقط النماذج المذكورة في تحقق ICR."],
    ],
  }),
  awnings: cloneLanding(enLandings.awnings, {
    title: "مصنع مظلة ومدخل ألمنيوم",
    description: "مظلات أبواب وتراسات ألمنيوم حسب الطلب. هيكل 6063-T5 مطلي، بولي كربونات. نماذج المظلة المذكورة لها EN 1090.",
    h1: "مصنع مظلات ومداخل ألمنيوم",
    lead: "مظلات تراسات ومداخل أبواب ونوافذ. إطار ألمنيوم بطلاء مسحوق، غالباً مع بولي كربونات. نماذج شهادة ICR متحققة وفق EN 1090.",
    suffix: "مصنع مظلة ألمنيوم",
    keywords: ["مصنع مظلة ألمنيوم", "مظلة باب حسب الطلب", "مظلة تراس ألمنيوم", "مظلة OEM", "مظلة EN 1090"],
    faqs: [
      ["هل تصنّعون مظلات أبواب وتراسات؟", "نعم. العرض والبروز حسب المخطط."],
      ["ما مادة الغطاء؟", "غالباً إطار ألمنيوم مطلي مع بولي كربونات."],
      ["هل المظلات متحققة وفق EN 1090؟", "نماذج المظلة في شهادة ICR تتبع EN 1090. مظلات السيارات فئة أخرى."],
    ],
  }),
};

const jaLandings: Record<CategorySlug, SeoLanding> = {
  "aluminum-gazebos": cloneLanding(enLandings["aluminum-gazebos"], {
    title: "オーダーアルミパーゴラメーカー",
    description: "上海のアルミパーゴラ・ガゼボ工場。ルーバー屋根、6063-T5、粉体塗装またはPVDF、OEMと輸出梱包。",
    h1: "オーダーアルミパーゴラ・ガゼボメーカー",
    lead: "振龍は別荘、レストラン、ホテル向けに図面どおりのアルミパーゴラとガゼボを作ります。フレームは6063-T5、ルーバーまたは固定屋根、粉体塗装またはPVDF、輸入業者向けのOEMに対応します。",
    suffix: "アルミパーゴラメーカー",
    keywords: ["オーダーアルミパーゴラ", "アルミガゼボメーカー", "電動ルーバーパーゴラ", "アルミガゼボOEM", "6063-T5パーゴラ"],
    faqs: [
      ["図面どおりのアルミパーゴラは作れますか？", "はい。スパン、長さ、高さ、屋根形式、色は図面または現場寸法で製作します。"],
      ["バイオクライマック型のOEMはありますか？", "はい。電動ルーバーと固定屋根は、寸法とブランドを市場に合わせて作れます。"],
      ["パビリオンはEN 1090の検証がありますか？", "ICR検証に載るパビリオン型式は、EN 1090とCPR (EU) 305/2011で確認しています。"],
    ],
  }),
  "aluminum-fences": cloneLanding(enLandings["aluminum-fences"], {
    title: "オーダーアルミフェンスメーカー",
    description: "アルミフェンス工場。ルーバー、目隠し、プール、防犯を型式別に供給。6063-T5粉体塗装、上海からOEM輸出。",
    h1: "オーダーアルミフェンスメーカー",
    lead: "各製品は別型式です。横ルーバー、目隠し、縦桟、プールフェンス、よじ登り防止。6063-T5に粉体塗装し、高さとモジュールは案件に合わせます。",
    suffix: "アルミフェンスメーカー",
    keywords: ["オーダーアルミフェンス", "目隠しフェンスメーカー", "粉体塗装アルミフェンス", "プール用アルミフェンス", "EN 1090フェンス"],
    faqs: [
      ["粉体塗装の目隠しフェンスは作れますか？", "はい。ルーバーパネルは独立した型式で、RALの粉体色に対応します。"],
      ["プール用と防犯用は別に注文できますか？", "はい。それぞれ別型式です。"],
      ["アルミフェンスにEN 1090検証はありますか？", "ICR証明書に載る型式はEN 1090とEU建設製品規則に沿っています。"],
    ],
  }),
  "aluminum-carports": cloneLanding(enLandings["aluminum-carports"], {
    title: "アルミカーポートメーカー",
    description: "1台用・2台用アルミカーポート工場。6063-T5、ポリカーボネートまたは金属屋根、粉体塗装、上海からOEM。",
    h1: "1台用・2台用アルミカーポートメーカー",
    lead: "振龍は1台または2台用の独立式アルミカーポートを製作します。幅、長さ、屋根、色は図面どおりです。このカテゴリーはパーゴラや庇のEN 1090証明書を使いません。",
    suffix: "アルミカーポートメーカー",
    keywords: ["アルミカーポートメーカー", "2台用カーポート特注", "アルミ駐車シェルター", "カーポートOEM", "6063-T5カーポート"],
    faqs: [
      ["2台用カーポートを寸法指定で作れますか？", "はい。1台用と2台用があり、幅と長さは現場寸法です。"],
      ["フレームの合金は何ですか？", "6063-T5の粉体塗装です。屋根は型式によりポリカーボネートまたは金属板です。"],
      ["別荘やホテル向けに輸出できますか？", "はい。北米、欧州、中東、東南アジア、オーストラリア向けの輸出梱包に対応します。"],
    ],
  }),
  "aluminum-sliding-doors": cloneLanding(enLandings["aluminum-sliding-doors"], {
    title: "アルミ引き戸メーカー",
    description: "建築用アルミ引き戸と自動スライド門の工場。粉体塗装、ガラス選択、開口寸法、上海からOEM。",
    h1: "アルミ引き戸・自動スライド門メーカー",
    lead: "建築用のアルミ引き戸と、住宅・ホテル向け自動スライド門を含みます。開口幅、塗装、ガラスは図面どおりです。引き戸は門扉のEN 1090証明書の対象ではありません。",
    suffix: "アルミ引き戸メーカー",
    keywords: ["アルミ引き戸メーカー", "自動アルミスライド門", "テラス用アルミ引き戸", "引き戸OEM"],
    faqs: [
      ["自動のアルミスライド門はありますか？", "はい。粉体塗装の自動スライド門が複数あります。"],
      ["開口サイズに合わせて作れますか？", "はい。幅と高さは図面または現場寸法です。"],
      ["門扉と同じEN 1090証明書ですか？", "いいえ。門扉の検証は記載された門扉型式だけです。"],
    ],
  }),
  "aluminum-doors": cloneLanding(enLandings["aluminum-doors"], {
    title: "オーダーアルミ門扉メーカー",
    description: "中庭・入口のアルミ門扉工場。開き戸と引き戸、CADによるOEM、粉体塗装。記載型式はEN 1090検証あり。",
    h1: "オーダーアルミ門扉メーカー",
    lead: "振龍は中庭門、主門、車路門を製作します。電動スライド門や装飾門を含みます。ICR検証に載る門扉型式はEN 1090とCPR (EU) 305/2011で確認しています。",
    suffix: "アルミ門扉メーカー",
    keywords: ["オーダーアルミ門扉", "アルミ中庭門", "アルミ車路門", "別荘門扉OEM", "EN 1090門扉"],
    faqs: [
      ["中庭門はCAD図面で作れますか？", "はい。CADと現場寸法から製作します。"],
      ["開き戸と引き戸の両方がありますか？", "はい。別型式です。"],
      ["どの門扉がEN 1090ですか？", "ICR検証に名前がある型式だけです。入札前に型式を照合できます。"],
    ],
  }),
  awnings: cloneLanding(enLandings.awnings, {
    title: "アルミ庇・オーニングメーカー",
    description: "玄関庇とテラスオーニングをオーダー製作。6063-T5粉体塗装、ポリカーボネート。記載のキャノピー型式はEN 1090。",
    h1: "アルミ庇・オーニングメーカー",
    lead: "別荘テラスのオーニングと、ドア・窓の入口庇です。粉体塗装のアルミフレームに、多くはポリカーボネートを使います。ICR証明書のキャノピー型式はEN 1090です。",
    suffix: "アルミ庇メーカー",
    keywords: ["アルミ庇メーカー", "玄関庇オーダー", "テラスアルミオーニング", "キャノピーOEM", "EN 1090キャノピー"],
    faqs: [
      ["玄関庇とテラスオーニングは作れますか？", "はい。幅と出は図面どおりです。"],
      ["屋根材は何ですか？", "多くは粉体塗装アルミフレームにポリカーボネートです。"],
      ["庇はEN 1090ですか？", "ICR証明書のキャノピー型式はEN 1090です。カーポートは別カテゴリーです。"],
    ],
  }),
};

const koLandings: Record<CategorySlug, SeoLanding> = {
  "aluminum-gazebos": cloneLanding(enLandings["aluminum-gazebos"], {
    title: "맞춤 알루미늄 퍼걸러 제조사",
    description: "상하이 알루미늄 퍼걸러·가제보 공장. 루버 지붕, 6063-T5, 분체도장 또는 PVDF, OEM과 수출 포장.",
    h1: "맞춤 알루미늄 퍼걸러·가제보 제조사",
    lead: "전롱은 빌라, 레스토랑, 호텔용 알루미늄 퍼걸러와 가제보를 도면대로 제작합니다. 프레임은 6063-T5, 루버 또는 고정 지붕, 분체도장 또는 PVDF, 수입사용 OEM이 가능합니다.",
    suffix: "알루미늄 퍼걸러 제조사",
    keywords: ["맞춤 알루미늄 퍼걸러", "알루미늄 가제보 제조사", "전동 루버 퍼걸러", "알루미늄 가제보 OEM", "6063-T5 퍼걸러"],
    faqs: [
      ["도면대로 알루미늄 퍼걸러를 만들 수 있나요?", "네. 경간, 길이, 높이, 지붕 형식, 색상은 도면이나 현장 치수로 제작합니다."],
      ["바이오클리매틱 OEM이 되나요?", "네. 전동 루버와 고정 지붕은 시장에 맞게 치수와 브랜드를 넣을 수 있습니다."],
      ["파빌리온에 EN 1090 검증이 있나요?", "ICR 검증에 있는 파빌리온 모델은 EN 1090과 CPR (EU) 305/2011 기준으로 확인합니다."],
    ],
  }),
  "aluminum-fences": cloneLanding(enLandings["aluminum-fences"], {
    title: "맞춤 알루미늄 펜스 제조사",
    description: "알루미늄 펜스 공장. 루버, 프라이버시, 수영장, 보안을 모델별로 공급. 6063-T5 분체도장, 상하이 OEM 수출.",
    h1: "맞춤 알루미늄 펜스 제조사",
    lead: "각 제품은 별도 모델입니다. 가로 루버, 프라이버시, 세로 피켓, 수영장 펜스, 월담 방지. 6063-T5에 분체도장하고 높이는 현장에 맞춥니다.",
    suffix: "알루미늄 펜스 제조사",
    keywords: ["맞춤 알루미늄 펜스", "프라이버시 펜스 제조사", "분체도장 알루미늄 펜스", "수영장 알루미늄 펜스", "EN 1090 펜스"],
    faqs: [
      ["분체도장 프라이버시 펜스를 만드나요?", "네. 루버 패널은 별도 모델이며 RAL 분체 색상이 가능합니다."],
      ["수영장용과 보안용을 따로 주문할 수 있나요?", "네. 각각 별도 모델입니다."],
      ["알루미늄 펜스에 EN 1090 검증이 있나요?", "ICR 인증서의 모델은 EN 1090과 EU 건설제품규정을 따릅니다."],
    ],
  }),
  "aluminum-carports": cloneLanding(enLandings["aluminum-carports"], {
    title: "알루미늄 카포트 제조사",
    description: "1대·2대용 알루미늄 카포트 공장. 6063-T5, 폴리카보네이트 또는 금속 지붕, 분체도장, 상하이 OEM.",
    h1: "1대·2대용 알루미늄 카포트 제조사",
    lead: "전롱은 1대 또는 2대용 독립형 알루미늄 카포트를 제작합니다. 폭, 길이, 지붕, 색상은 도면을 따릅니다. 이 분류는 퍼걸러나 캐노피의 EN 1090 인증을 쓰지 않습니다.",
    suffix: "알루미늄 카포트 제조사",
    keywords: ["알루미늄 카포트 제조사", "2대용 카포트 맞춤", "알루미늄 주차 캐노피", "카포트 OEM", "6063-T5 카포트"],
    faqs: [
      ["2대용 카포트를 치수에 맞춰 만들 수 있나요?", "네. 1대용과 2대용이 있고 폭과 길이는 현장 치수입니다."],
      ["프레임 합금은 무엇인가요?", "6063-T5 분체도장입니다. 지붕은 모델에 따라 폴리카보네이트 또는 금속판입니다."],
      ["빌라와 호텔로 수출하나요?", "네. 북미, 유럽, 중동, 동남아, 호주용 수출 포장이 가능합니다."],
    ],
  }),
  "aluminum-sliding-doors": cloneLanding(enLandings["aluminum-sliding-doors"], {
    title: "알루미늄 미닫이문 제조사",
    description: "건축용 알루미늄 미닫이문과 자동 슬라이딩 대문 공장. 분체도장, 유리 선택, 개구 치수, 상하이 OEM.",
    h1: "알루미늄 미닫이문·자동 슬라이딩 대문 제조사",
    lead: "건축용 미닫이문과 주택·호텔용 자동 슬라이딩 대문을 포함합니다. 개구 폭, 도장, 유리는 도면을 따릅니다. 미닫이문은 대문 EN 1090 인증 범위가 아닙니다.",
    suffix: "알루미늄 미닫이문 제조사",
    keywords: ["알루미늄 미닫이문 제조사", "자동 알루미늄 슬라이딩 대문", "테라스 미닫이문 맞춤", "미닫이문 OEM"],
    faqs: [
      ["자동 알루미늄 슬라이딩 대문이 있나요?", "네. 분체도장 자동 슬라이딩 대문 모델이 있습니다."],
      ["개구 크기에 맞춰 만들 수 있나요?", "네. 폭과 높이는 도면이나 현장 치수입니다."],
      ["대문과 같은 EN 1090 인증인가요?", "아닙니다. 대문 검증은 적힌 대문 모델만 해당합니다."],
    ],
  }),
  "aluminum-doors": cloneLanding(enLandings["aluminum-doors"], {
    title: "맞춤 알루미늄 대문 제조사",
    description: "마당·진입 알루미늄 대문 공장. 여닫이와 미닫이, CAD OEM, 분체도장. 등재 모델은 EN 1090 검증.",
    h1: "맞춤 알루미늄 대문 제조사",
    lead: "전롱은 마당문, 주출입문, 진입 대문을 제작합니다. 전동 슬라이딩 대문과 장식 대문을 포함합니다. ICR 검증에 있는 대문 모델은 EN 1090과 CPR (EU) 305/2011 기준입니다.",
    suffix: "알루미늄 대문 제조사",
    keywords: ["맞춤 알루미늄 대문", "알루미늄 마당문", "알루미늄 진입 대문", "빌라 대문 OEM", "EN 1090 대문"],
    faqs: [
      ["마당문을 CAD 도면으로 만들 수 있나요?", "네. CAD와 현장 치수로 제작합니다."],
      ["여닫이와 미닫이가 모두 있나요?", "네. 서로 다른 모델입니다."],
      ["어떤 대문이 EN 1090인가요?", "ICR 검증에 적힌 모델만 해당합니다."],
    ],
  }),
  awnings: cloneLanding(enLandings.awnings, {
    title: "알루미늄 어닝·캐노피 제조사",
    description: "출입 캐노피와 테라스 어닝 맞춤 제작. 6063-T5 분체도장, 폴리카보네이트. 등재된 캐노피 모델은 EN 1090.",
    h1: "알루미늄 어닝·캐노피 제조사",
    lead: "빌라 테라스 어닝과 문·창 입구 캐노피입니다. 분체도장 알루미늄 프레임에 주로 폴리카보네이트를 씁니다. ICR 인증서의 캐노피 모델은 EN 1090입니다.",
    suffix: "알루미늄 어닝 제조사",
    keywords: ["알루미늄 어닝 제조사", "출입 캐노피 맞춤", "테라스 알루미늄 어닝", "캐노피 OEM", "EN 1090 캐노피"],
    faqs: [
      ["출입 캐노피와 테라스 어닝을 만드나요?", "네. 폭과 돌출은 도면을 따릅니다."],
      ["지붕 재료는 무엇인가요?", "대부분 분체도장 알루미늄 프레임에 폴리카보네이트입니다."],
      ["어닝에 EN 1090 검증이 있나요?", "ICR 인증서의 캐노피 모델은 EN 1090입니다. 카포트는 다른 분류입니다."],
    ],
  }),
};

const landings: Record<Locale, Record<CategorySlug, SeoLanding>> = {
  en: enLandings,
  zh: zhLandings,
  es: esLandings,
  fr: frLandings,
  de: deLandings,
  pt: ptLandings,
  ru: ruLandings,
  ar: arLandings,
  ja: jaLandings,
  ko: koLandings,
};

export function getSeoLanding(locale: string, slug: CategorySlug): SeoLanding {
  const pack = landings[locale as Locale] ?? landings.en;
  return pack[slug];
}

const titleToPage: Record<string, PageKey> = {
  homeTitle: "home",
  productsTitle: "products",
  projectsTitle: "projects",
  aboutTitle: "about",
  oemTitle: "oem",
  blogTitle: "blog",
  contactTitle: "contact",
};

export function pageKeywordsForTitle(locale: string, titleKey: string): string[] | undefined {
  const page = titleToPage[titleKey];
  if (!page) return undefined;
  const pack = pages[locale as Locale] ?? pages.en;
  return pack[page];
}
