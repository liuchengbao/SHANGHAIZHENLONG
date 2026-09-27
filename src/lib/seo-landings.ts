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
    "Factory for louvered and fixed aluminum pergolas and gazebos for outdoor living. 6063-T5 frames, motor options, powder coating or PVDF, OEM export from Shanghai. Separate from carports and door canopies.",
    "Aluminum pergola and gazebo manufacturer for outdoor living",
    "Buyers come here for outdoor living roofs: bioclimatic louvered pergolas, fixed gazebos, and pavilion-style shade for villas, restaurants, and hotels. Tell us free span, post layout, manual or motorized louvers, drainage, and RAL finish. Frames are 6063-T5. Pavilion models named on our ICR file follow EN 1090—do not use this page for parking carports or wall-mounted entrance canopies.",
    "What importers ask before ordering a pergola",
    ["custom aluminum pergola", "bioclimatic louvered pergola factory", "aluminum gazebo manufacturer", "OEM aluminum pavilion", "6063-T5 aluminum pergola", "powder coated aluminum pergola China"],
    [
      ["How is a pergola different from a carport on your site?", "Pergolas and gazebos are outdoor living roofs. Carports are freestanding parking shelters with vehicle bay sizes and a different certificate path."],
      ["Can you motorize louvers and match our RAL color?", "Yes. Louver models can be manual or motorized; span, bay count, drainage, and powder-coated or PVDF finish follow your drawing."],
      ["Which pergola models follow EN 1090?", "Only pavilion models named on the ICR verification. Ask us to match a model number before you write a tender."],
    ],
  ),
  "aluminum-fences": landing(
    "Custom Aluminum Fence Manufacturer",
    "Model-by-model aluminum fence factory: privacy slats, louvers, pickets, pool barriers, and anti-climb panels. 6063-T5, powder coating, cut-to-height modules, OEM export from Shanghai.",
    "Aluminum fence manufacturer with separate models per style",
    "Fence projects fail when every style is treated as one SKU. On this page each listing stays a distinct model—horizontal louvers, privacy slats, vertical pickets, pool barriers, wood-grain screens, or anti-climb security panels. Send run length, height, module width, post detail, gate openings, and finish. Listed fence models on the ICR file follow EN 1090.",
    "Fence quoting checklist for importers",
    ["custom aluminum fence", "aluminum privacy fence manufacturer", "aluminum pool fence factory", "anti-climb aluminum fence", "OEM aluminum slat fence", "powder coated aluminum fence China"],
    [
      ["Why do you separate privacy, pool, and security fences?", "Infill, height rules, and fixings differ. Mixing them into one generic fence creates the wrong panel on site."],
      ["What information do you need for a fence quote?", "Total length, height, panel style, posts, gate positions, and RAL finish. A site plan shortens engineering questions."],
      ["Are fence models EN 1090 verified?", "Fence models covered by our ICR verification follow EN 1090 and CPR (EU) 305/2011. Confirm the model list with export before tender."],
    ],
  ),
  "aluminum-carports": landing(
    "Aluminum Carport Manufacturer",
    "Single- and double-bay aluminum carport factory for driveway parking. 6063-T5 freestanding frames, polycarbonate or metal roofs, powder coating, OEM export. Not a pergola living roof.",
    "Aluminum carport manufacturer for single and double parking bays",
    "This category is for vehicles: freestanding single-bay and double-bay carports with clear width, length, and height sized to the driveway. Choose polycarbonate or metal roof sheet, then powder-coated frame color. Share wind or snow notes for the destination market. Carports do not use pavilion, gate, or canopy EN 1090 certificates.",
    "Carport details that change the quote",
    ["aluminum carport manufacturer", "custom double aluminum carport", "aluminum parking canopy factory", "OEM aluminum carport China", "6063-T5 aluminum carport", "polycarbonate aluminum carport"],
    [
      ["Can you build a double-bay carport for two cars?", "Yes. Confirm clear bay width, overall length, approach path, and roof sheet type on your plan."],
      ["What frame and roof materials do you use?", "Frames are 6063-T5 aluminum with powder coating. Roofs are polycarbonate or metal sheet by model."],
      ["May we cite the pergola EN 1090 certificate for a carport?", "No. Carports are a parking line. Use only documents that name the carport model you are buying."],
    ],
  ),
  "aluminum-sliding-doors": landing(
    "Aluminum Sliding Door Manufacturer",
    "Architectural aluminum sliding doors and automatic sliding gates sized to the opening. Powder-coated profiles, glass options, OEM from Shanghai. Distinct from courtyard swing gates.",
    "Aluminum sliding door and automatic sliding gate manufacturer",
    "Use this range when the leaf must slide: glazed patio or balcony doors, and automatic aluminum sliding gates for driveways. Quotes need opening width and height, track type, glass or solid infill, and motor requirement. Powder-coated 6063-T5 profiles. Do not treat this page as the courtyard-gate EN 1090 list unless we confirm a model in writing.",
    "Sliding opening questions we ask first",
    ["aluminum sliding door manufacturer", "automatic aluminum sliding gate", "custom aluminum patio sliding door", "OEM aluminum sliding gate", "powder coated aluminum sliding door"],
    [
      ["How do sliding doors differ from your gate category?", "Gates focus on courtyard entrance identity, often swing or decorative leaves. This page focuses on sliding operation and automatic sliding gate runs."],
      ["Can sliding gates include a motor package?", "Yes. Several models are automatic sliding gates; share clear opening size and on-site power."],
      ["Are sliding doors EN 1090 verified like courtyard gates?", "Usually not by default. Gate verification covers listed gate models. Ask before you specify EN 1090 on a sliding door."],
    ],
  ),
  "aluminum-doors": landing(
    "Custom Aluminum Gate Manufacturer",
    "Courtyard and driveway aluminum gate factory. Swing and sliding entrance gates from CAD, powder coating, EN 1090 on listed gate models. Shanghai OEM export.",
    "Custom aluminum courtyard gate and entrance door manufacturer",
    "This page is for entrance gates: villa courtyard gates, main gates, and driveway gates in swing or sliding layouts, including decorative house gates. Send CAD, clear opening, leaf count, and finish. Listed gate models on our ICR verification follow EN 1090 and CPR (EU) 305/2011. Glazed architectural sliding doors belong under sliding doors.",
    "Gate project notes for distributors",
    ["custom aluminum gate", "aluminum courtyard gate manufacturer", "aluminum driveway gate factory", "OEM aluminum villa gate", "powder coated aluminum gate", "EN 1090 aluminum gate"],
    [
      ["Can you manufacture a gate from our CAD file?", "Yes. Pattern, leaf size, hinge or roller side, and finish are produced from your CAD and site opening."],
      ["Do you offer both swing and sliding entrance gates?", "Yes. They are listed as separate models so hardware and posts are quoted correctly."],
      ["Which gate models are EN 1090 verified?", "Only models named on the ICR gate verification. Match the number with us before a tender submission."],
    ],
  ),
  awnings: landing(
    "Aluminum Awning and Canopy Manufacturer",
    "Door, window, and terrace aluminum canopies with defined projection. 6063-T5 powder-coated frames, polycarbonate covers, OEM sizes. EN 1090 on listed canopy models—not freestanding carports.",
    "Aluminum awning and entrance canopy manufacturer",
    "Awnings cover entrances and terraces with a set width and projection, usually mounted to a wall or light posts. Typical build is a powder-coated aluminum frame with polycarbonate cover. Share mounting height and wall type. Listed canopy models on the ICR file follow EN 1090. Freestanding parking shelters are carports; large louver living roofs are pergolas.",
    "Awning measurements that matter",
    ["aluminum awning manufacturer", "custom aluminum door canopy", "aluminum patio awning factory", "OEM aluminum canopy China", "powder coated aluminum awning", "EN 1090 aluminum canopy"],
    [
      ["How is an awning different from a carport?", "Awnings project from a building to cover a door, window, or terrace. Carports are freestanding vehicle bays with parking dimensions."],
      ["What do you need to quote a door canopy?", "Width, projection, mounting height, wall or post condition, and preferred cover sheet."],
      ["Which canopies follow EN 1090?", "Canopy models listed on the ICR verification. Carports are outside that canopy certificate."],
    ],
  ),
};

const zhLandings: Record<CategorySlug, SeoLanding> = {
  "aluminum-gazebos": landing(
    "定制铝艺凉亭厂家",
    "专注户外起居的百叶凉亭与固定顶凉棚工厂。6063-T5 框架，可选电机，粉末喷涂或 PVDF，上海 OEM 出口。与车棚、门头雨棚区分清楚。",
    "面向户外起居的铝艺凉亭与遮阳棚厂家",
    "来这里采购的是户外起居顶：电动百叶凉亭、固定顶凉棚，以及别墅、餐厅、酒店用的亭式遮阳。请说明净跨、立柱布局、手动或电动百叶、排水和 RAL 颜色。框架为 6063-T5。列入 ICR 的凉亭型号按 EN 1090 核查——停车车棚与墙出挑雨棚请看对应品类，不要混用。",
    "进口商下凉亭订单前常问的问题",
    ["铝艺凉亭厂家", "百叶凉亭生产厂家", "铝合金凉亭定制", "铝艺凉棚 OEM", "6063铝凉亭", "粉末喷涂铝艺凉亭"],
    [
      ["你们网站上的凉亭和车棚有什么区别？", "凉亭用于户外起居遮阳；车棚是按车位尺寸做的独立停车棚，证书路径也不同。"],
      ["百叶可以做电机并配 RAL 颜色吗？", "可以。百叶可手动或电动；跨度、开间、排水和粉末喷涂 / PVDF 按图纸执行。"],
      ["哪些凉亭型号按 EN 1090 核查？", "仅 ICR 证书上列出的凉亭型号。投标前把型号发给我们核对。"],
    ],
  ),
  "aluminum-fences": landing(
    "铝合金围栏厂家",
    "按型号供应隐私格栅、百叶、竖条、泳池围栏与防攀爬板。6063-T5，粉末喷涂，按高度裁切模数，上海 OEM 出口。",
    "按型号分开的定制铝合金围栏厂家",
    "围栏项目最怕把所有款式当成一个 SKU。本页每一款都是独立型号：横百叶、隐私格栅、竖条、泳池围栏、木纹屏风或防攀爬安防板。请提供长度、高度、模数宽度、立柱、门洞与颜色。列入 ICR 的围栏型号按 EN 1090 核查。",
    "围栏询价前请准备这些信息",
    ["铝艺围栏厂家", "铝合金隐私围栏", "泳池铝艺围栏", "防攀爬铝围栏", "铝艺格栅 OEM", "粉末喷涂铝围栏"],
    [
      ["为什么隐私、泳池、安防围栏要分开？", "填芯、高度要求和安装方式不同，混成一个通用围栏容易做错板型。"],
      ["围栏报价需要哪些资料？", "总长、高度、板型、立柱、门洞位置和 RAL 颜色。有总平图会更快。"],
      ["围栏有 EN 1090 验证吗？", "列入 ICR 的围栏型号按 EN 1090 与欧盟建筑产品法规核查。投标前请和出口团队确认型号清单。"],
    ],
  ),
  "aluminum-carports": landing(
    "铝合金车棚厂家",
    "单车位、双车位车道停车棚工厂。独立式 6063-T5 框架，阳光板或金属顶，粉末喷涂，OEM 出口。不是凉亭起居顶。",
    "单车位与双车位铝合金车棚厂家",
    "本品类服务停车：独立式单车 / 双车车棚，按车道净宽、长度和净高定制。可选阳光板或金属顶板，再定粉末喷涂颜色。请说明目的地风雪条件。车棚不使用凉亭、大门或雨棚的 EN 1090 证书。",
    "会影响车棚报价的关键尺寸",
    ["铝合金车棚厂家", "双车位铝车棚定制", "铝艺停车棚工厂", "铝车棚 OEM", "6063铝车棚", "阳光板铝车棚"],
    [
      ["可以做遮两辆车的双车位车棚吗？", "可以。请确认车位净宽、总长、进出路径和顶板类型。"],
      ["框架和顶板用什么材料？", "框架为 6063-T5 铝型材粉末喷涂；顶板按型号用阳光板或金属板。"],
      ["车棚能引用凉亭的 EN 1090 证书吗？", "不能。车棚是停车产品线，只能使用点名该车棚型号的文件。"],
    ],
  ),
  "aluminum-sliding-doors": landing(
    "铝合金推拉门厂家",
    "按洞口定制的建筑推拉门与自动平移门。粉末喷涂型材，可选玻璃，上海 OEM。与庭院平开大门区分。",
    "铝合金推拉门与自动平移门厂家",
    "当门扇需要滑动时看这一类：露台 / 阳台推拉门，以及车道自动铝艺平移门。询价请带洞口宽高、轨道、玻璃或实心填芯、是否要电机。型材 6063-T5 粉末喷涂。除非我们书面确认型号，否则不要把本页当作庭院大门 EN 1090 清单。",
    "推拉开启项目我们先确认这些",
    ["铝合金推拉门厂家", "自动铝艺平移门", "定制铝合金推拉门", "铝艺平移门 OEM", "粉末喷涂推拉门"],
    [
      ["推拉门和大门品类有什么不同？", "大门偏庭院入口形象，多为平开或装饰门扇；本页聚焦推拉开启与自动平移门系统。"],
      ["平移门可以带电机吗？", "可以。多款为自动平移门，请提供净开洞口与现场电源。"],
      ["推拉门是否默认具备大门那种 EN 1090？", "通常不是。大门验证覆盖证书上的大门型号。推拉门若要写 EN 1090，需先向我们确认。"],
    ],
  ),
  "aluminum-doors": landing(
    "铝艺大门厂家",
    "庭院与车道铝艺大门工厂。平开 / 平移入口门按 CAD 定制，粉末喷涂；列入证书的型号具备 EN 1090。上海 OEM 出口。",
    "定制铝艺庭院门与入口大门厂家",
    "本页是入口大门：别墅庭院门、主门、车道门（平开或平移），以及装饰住宅门。请提供 CAD、净开洞口、门扇数量和颜色。列入 ICR 的大门型号按 EN 1090 与 CPR (EU) 305/2011 核查。建筑玻璃推拉门请到推拉门品类。",
    "大门项目给经销商的说明",
    ["铝艺大门厂家", "铝合金庭院门定制", "铝合金车道门工厂", "别墅铝艺大门 OEM", "粉末喷涂铝大门", "EN 1090 铝大门"],
    [
      ["可以按我们的 CAD 生产大门吗？", "可以。花型、门扇尺寸、铰链或滑轮方向、颜色都按 CAD 与现场洞口制作。"],
      ["平开门和平移门都有吗？", "有，并且分成不同型号，方便正确报价五金与立柱。"],
      ["哪些大门型号有 EN 1090？", "仅 ICR 大门证书点名的型号。投标前提前把型号发给我们核对。"],
    ],
  ),
  awnings: landing(
    "铝合金雨棚厂家",
    "有明确出挑的门窗与露台铝艺雨棚。6063-T5 粉末喷涂框架，阳光板顶，尺寸 OEM。列入证书的雨棚型号具备 EN 1090——不是独立车棚。",
    "铝合金雨棚与入口遮阳篷厂家",
    "雨棚用设定宽度和出挑覆盖门口与露台，多固定在墙面或轻型立柱上。常见为粉末喷涂铝框 + 阳光板。请提供安装高度和墙体条件。列入 ICR 的雨棚型号按 EN 1090 核查。独立停车棚归车棚；大型百叶起居顶归凉亭。",
    "雨棚尺寸里真正影响报价的点",
    ["铝合金雨棚厂家", "门口铝艺雨棚定制", "露台遮阳篷工厂", "铝艺雨棚 OEM", "粉末喷涂雨棚", "EN 1090 铝雨棚"],
    [
      ["雨棚和车棚怎么区分？", "雨棚多从建筑出挑遮门口或露台；车棚是按车位做的独立停车棚。"],
      ["门口雨棚报价要哪些尺寸？", "宽度、出挑、安装高度、墙面或立柱条件，以及顶板偏好。"],
      ["哪些雨棚按 EN 1090 核查？", "ICR 证书上列出的雨棚型号。车棚不在这张雨棚证书范围内。"],
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
    title: "Fabricante de pérgolas de aluminio para outdoor living",
    description: "Cubiertas de ocio con lamas o techo fijo—no cochera ni marquesina de puerta. OEM Shanghai.",
    h1: "Fabricante de pérgolas y cenadores de aluminio para ocio exterior",
    lead: "Outdoor living: pérgolas bioclimáticas, cenadores fijos y pabellones. Indique luz, postes, lamas manuales o motorizadas, drenaje y RAL. 6063-T5. Pabellones ICR: EN 1090. Cocheras y marquesinas son otras categorías.",
    suffix: "Preguntas habituales antes de pedir una pérgola",
    keywords: ["pérgola de aluminio a medida", "pérgola bioclimática fábrica", "cenador de aluminio OEM", "pérgola 6063-T5", "pérgola lacada China"],
    faqs: [
      ["¿Pérgola = cochera?", "No. La pérgola es ocio; la cochera es aparcamiento sin certificado de pabellón."],
      ["¿Motor y color RAL?", "Sí. Lamas manuales o motorizadas según plano."],
      ["¿Qué pérgolas siguen EN 1090?", "Solo los pabellones del expediente ICR. Cruce el número antes de licitar."],
    ],
  }),
  "aluminum-fences": cloneLanding(enLandings["aluminum-fences"], {
    title: "Fabricante de vallas de aluminio por modelo",
    description: "Perímetro por modelo: privacidad, lamas, piquete, piscina y antiescalada. OEM Shanghai.",
    h1: "Fabricante de vallas de aluminio con modelos separados por estilo",
    lead: "Cada ficha es un modelo distinto. Indique longitud, altura, módulo, postes y puertas. 6063-T5 lacado. Modelos ICR de valla: EN 1090.",
    suffix: "Lista para cotizar vallas",
    keywords: ["valla de aluminio a medida", "valla de privacidad aluminio", "valla de piscina aluminio", "valla antiescalada", "valla aluminio OEM"],
    faqs: [
      ["¿Por qué tantas páginas?", "Altura, relleno y fijación cambian; no son intercambiables."],
      ["¿Datos para cotizar?", "Longitud, altura, estilo, postes, puertas y color."],
      ["¿Las vallas tienen EN 1090?", "Los modelos del certificado ICR siguen EN 1090. Confirme la lista antes de licitar."],
    ],
  }),
  "aluminum-carports": cloneLanding(enLandings["aluminum-carports"], {
    title: "Fabricante de cocheras de aluminio",
    description: "Aparcamiento de una o dos plazas—no pérgola de ocio. OEM Shanghai.",
    h1: "Fabricante de cocheras de aluminio de una y dos plazas",
    lead: "Cocheras exentas: ancho de plaza, largo, altura libre, cubierta policarbonato/metal, viento o nieve. Sin EN 1090 de pabellón, portón o marquesina.",
    suffix: "Detalles que cambian el precio de la cochera",
    keywords: ["fabricante de cocheras de aluminio", "cochera doble a medida", "marquesina de aparcamiento", "cochera aluminio OEM", "cochera 6063-T5"],
    faqs: [
      ["¿Dos coches?", "Sí. Confirme ancho libre, largo y acceso."],
      ["¿Citar EN 1090 de pérgola?", "No. Solo documentos del modelo de cochera."],
      ["¿Camino de certificado?", "No cite EN 1090 de pabellón, portón o marquesina para cocheras."],
    ],
  }),
  "aluminum-sliding-doors": cloneLanding(enLandings["aluminum-sliding-doors"], {
    title: "Fabricante de puertas correderas de aluminio",
    description: "Hojas correderas y cancelas automáticas—no portones batientes. OEM Shanghai.",
    h1: "Fabricante de puertas correderas y cancelas automáticas",
    lead: "Para deslizamiento: puertas de patio/balcón y cancelas automáticas. Cotice hueco, carril, vidrio/panel y motor. No es la lista EN 1090 de portones sin confirmación escrita.",
    suffix: "Preguntas de hueco corredero",
    keywords: ["puerta corredera de aluminio", "cancela corredera automática", "puerta de patio aluminio", "cancela OEM aluminio"],
    faqs: [
      ["¿Diferencia con el portón?", "El portón es identidad de entrada; aquí el foco es deslizar."],
      ["¿Motor en la cancela?", "Sí. Indique hueco y alimentación."],
      ["¿EN 1090 como los portones?", "Por defecto no. Confirme antes de especificar EN 1090 en una corredera."],
    ],
  }),
  "aluminum-doors": cloneLanding(enLandings["aluminum-doors"], {
    title: "Fabricante de portones de aluminio a medida",
    description: "Portones de patio según CAD—no correderas acristaladas. OEM Shanghai.",
    h1: "Fabricante de portones de patio y acceso en aluminio",
    lead: "Identidad de entrada: portones de patio y acceso, batiente o corredera. Envíe CAD, hueco, hojas y acabado. Portones ICR: EN 1090. Correderas acristaladas van en la categoría corredera.",
    suffix: "Notas de proyecto para distribuidores",
    keywords: ["portón de aluminio a medida", "cancela de patio aluminio", "portón de acceso", "portón villa OEM", "portón EN 1090"],
    faqs: [
      ["¿Según nuestro CAD?", "Sí. Dibujo, hoja y herrajes siguen CAD y hueco."],
      ["¿Qué portones EN 1090?", "Solo los del ICR de portones."],
      ["¿Qué portones tienen EN 1090?", "Solo los nombrados en la verificación ICR de portones."],
    ],
  }),
  awnings: cloneLanding(enLandings.awnings, {
    title: "Fabricante de toldos y marquesinas de aluminio",
    description: "Marquesinas con vuelo definido—no cocheras ni pérgolas grandes. OEM Shanghai.",
    h1: "Fabricante de toldos y marquesinas de entrada",
    lead: "Toldos de entrada/terraza con ancho y vuelo, marco lacado + policarbonato. Modelos ICR: EN 1090. Cocheras y pérgolas de lamas son otras categorías.",
    suffix: "Medidas que importan en un toldo",
    keywords: ["fabricante de toldos de aluminio", "marquesina de puerta a medida", "toldo de terraza aluminio", "marquesina OEM", "toldo EN 1090"],
    faqs: [
      ["¿Diferencia con cochera?", "El toldo vuela del edificio; la cochera es aparcamiento exento."],
      ["¿Datos para cotizar?", "Ancho, vuelo, altura, muro/poste y cubierta."],
      ["¿Qué marquesinas siguen EN 1090?", "Solo las del certificado ICR. Las cocheras quedan fuera."],
    ],
  }),
};

const frLandings: Record<CategorySlug, SeoLanding> = {
  "aluminum-gazebos": cloneLanding(enLandings["aluminum-gazebos"], {
    title: "Fabricant de pergola aluminium outdoor living",
    description: "Toits de vie extérieure à lames ou fixes—pas un carport ni une marquise de porte. OEM Shanghai.",
    h1: "Fabricant de pergolas et gazebos aluminium pour la vie extérieure",
    lead: "Outdoor living : pergolas bioclimatiques, gazebos fixes et pavillons. Indiquez portée, poteaux, lames manuelles ou motorisées, drainage et RAL. 6063-T5. Pavillons ICR : EN 1090. Carports et marquises : autres catégories.",
    suffix: "Questions avant de commander une pergola",
    keywords: ["pergola aluminium sur mesure", "pergola bioclimatique usine", "gazebo aluminium OEM", "pergola 6063-T5", "pergola thermolaquée Chine"],
    faqs: [
      ["Pergola = carport ?", "Non. La pergola est un toit de séjour ; le carport est un abri parking."],
      ["Motoriser et RAL ?", "Oui. Lames manuelles ou motorisées selon plan."],
      ["Quelles pergolas suivent EN 1090 ?", "Uniquement les pavillons du dossier ICR. Vérifiez le numéro avant appel d’offres."],
    ],
  }),
  "aluminum-fences": cloneLanding(enLandings["aluminum-fences"], {
    title: "Fabricant de clôture aluminium par modèle",
    description: "Périmètres par modèle : occultation, lames, barreaux, piscine et anti-escalade. OEM Shanghai.",
    h1: "Fabricant de clôtures aluminium avec modèles séparés par style",
    lead: "Chaque fiche est un modèle distinct. Indiquez longueur, hauteur, module, poteaux et portillons. 6063-T5 thermolaqué. Modèles ICR clôture : EN 1090.",
    suffix: "Checklist devis clôture",
    keywords: ["clôture aluminium sur mesure", "clôture occultante aluminium", "clôture piscine aluminium", "clôture anti-escalade", "clôture aluminium OEM"],
    faqs: [
      ["Pourquoi tant de pages ?", "Hauteur, remplissage et fixations diffèrent."],
      ["Infos pour devis ?", "Longueur, hauteur, style, poteaux, portillons et teinte."],
      ["Les clôtures ont-elles EN 1090 ?", "Les modèles du certificat ICR suivent EN 1090. Confirmez la liste avant appel d’offres."],
    ],
  }),
  "aluminum-carports": cloneLanding(enLandings["aluminum-carports"], {
    title: "Fabricant de carport aluminium",
    description: "Abris parking une ou deux places—pas des pergolas de séjour. OEM Shanghai.",
    h1: "Fabricant de carports aluminium une et deux places",
    lead: "Carports autoportants : largeur de place, longueur, hauteur libre, couverture polycarbonate/métal, notes vent/neige. Pas d’EN 1090 pavillon/portail/marquise.",
    suffix: "Détails qui changent le devis carport",
    keywords: ["fabricant carport aluminium", "carport double sur mesure", "auvent parking aluminium", "carport aluminium OEM", "carport 6063-T5"],
    faqs: [
      ["Deux voitures ?", "Oui. Confirmez largeur libre, longueur et accès."],
      ["Citer EN 1090 pergola ?", "Non. Uniquement les documents du modèle carport."],
      ["Chemin de certificat ?", "Ne citez pas l’EN 1090 pavillon, portail ou marquise pour un carport."],
    ],
  }),
  "aluminum-sliding-doors": cloneLanding(enLandings["aluminum-sliding-doors"], {
    title: "Fabricant de porte coulissante aluminium",
    description: "Vantaux coulissants et portails automatiques—pas des portails battants de cour. OEM Shanghai.",
    h1: "Fabricant de portes coulissantes et portails automatiques",
    lead: "Pour le coulissement : portes patio/balcon et portails coulissants automatiques. Cotez ouverture, rail, vitrage/panneau et moteur. Pas la liste EN 1090 portail sans confirmation écrite.",
    suffix: "Questions d’ouverture coulissante",
    keywords: ["porte coulissante aluminium", "portail coulissant automatique", "porte patio aluminium", "portail OEM aluminium"],
    faqs: [
      ["Différence avec le portail ?", "Le portail vise l’entrée ; ici le focus est le coulissement."],
      ["Portail motorisé ?", "Oui. Indiquez ouverture et alimentation."],
      ["EN 1090 comme les portails ?", "Pas par défaut. Confirmez avant de spécifier EN 1090 sur une coulissante."],
    ],
  }),
  "aluminum-doors": cloneLanding(enLandings["aluminum-doors"], {
    title: "Fabricant de portail aluminium sur mesure",
    description: "Portails de cour selon CAO—pas des portes coulissantes vitrées. OEM Shanghai.",
    h1: "Fabricant de portails de cour et d’entrée en aluminium",
    lead: "Identité d’entrée : portails de cour et d’accès, battants ou coulissants. Envoyez CAO, ouverture, vantaux et finition. Portails ICR : EN 1090. Les coulissants vitrés sont dans la catégorie coulissante.",
    suffix: "Notes projet pour distributeurs",
    keywords: ["portail aluminium sur mesure", "portail de cour aluminium", "portail d’accès", "portail villa OEM", "portail EN 1090"],
    faqs: [
      ["Selon notre CAO ?", "Oui. Motif, vantail et quincaillerie suivent CAO et ouverture."],
      ["Quels portails EN 1090 ?", "Uniquement ceux du ICR portail."],
      ["Quels portails ont EN 1090 ?", "Uniquement ceux nommés sur la vérification ICR portail."],
    ],
  }),
  awnings: cloneLanding(enLandings.awnings, {
    title: "Fabricant d’auvent et marquise aluminium",
    description: "Marquises à projection définie—pas carports ni grandes pergolas. OEM Shanghai.",
    h1: "Fabricant d’auvents et marquises d’entrée",
    lead: "Auvents d’entrée/terrasse avec largeur et projection, cadre laqué + polycarbonate. Modèles marquise ICR : EN 1090. Carports et pergolas à lames : autres catégories.",
    suffix: "Cotes qui comptent pour un auvent",
    keywords: ["fabricant auvent aluminium", "marquise de porte sur mesure", "auvent terrasse aluminium", "marquise OEM", "auvent EN 1090"],
    faqs: [
      ["Différence avec carport ?", "L’auvent déborde du bâtiment ; le carport est un abri parking."],
      ["Infos pour devis ?", "Largeur, projection, hauteur, mur/poteau et couverture."],
      ["Quelles marquises suivent EN 1090 ?", "Uniquement celles du certificat ICR. Les carports sont hors certificat."],
    ],
  }),
};

const deLandings: Record<CategorySlug, SeoLanding> = {
  "aluminum-gazebos": cloneLanding(enLandings["aluminum-gazebos"], {
    title: "Hersteller von Alu-Pergolen für Outdoor-Living",
    description: "Outdoor-Living mit Lamellen- oder Festdach—kein Carport und kein Türvordach. OEM Shanghai.",
    h1: "Hersteller von Alu-Pergolen und Pavillons für Outdoor-Living",
    lead: "Outdoor-Living: bioklimatische Lamellenpergolen und feste Pavillons. Spannweite, Pfosten, manuelle/motorisierte Lamellen, Entwässerung und RAL. 6063-T5. ICR-Pavillons: EN 1090. Carports und Eingangsvordächer sind andere Kategorien.",
    suffix: "Fragen vor der Pergola-Bestellung",
    keywords: ["Alu-Pergola nach Maß", "bioklimatische Lamellenpergola Fabrik", "Alu-Pavillon OEM", "Pergola 6063-T5", "pulverbeschichtete Pergola China"],
    faqs: [
      ["Pergola = Carport?", "Nein. Pergolen sind Wohnüberdachungen; Carports sind Parkprodukte."],
      ["Motor und RAL?", "Ja. Manuell oder motorisiert nach Zeichnung."],
      ["Welche Pergolen folgen EN 1090?", "Nur Pavillons auf der ICR-Datei. Nummer vor der Ausschreibung abstimmen."],
    ],
  }),
  "aluminum-fences": cloneLanding(enLandings["aluminum-fences"], {
    title: "Hersteller von Alu-Zäunen nach Modell",
    description: "Perimeter nach Modell: Sichtschutz, Lamellen, Staketen, Pool und Anti-Kletter. OEM Shanghai.",
    h1: "Alu-Zaunhersteller mit getrennten Modellen je Stil",
    lead: "Jeder Eintrag ist ein eigenes Modell. Länge, Höhe, Modul, Pfosten und Tore angeben. 6063-T5 pulverbeschichtet. ICR-Zaunmodelle: EN 1090.",
    suffix: "Checkliste Zaunangebot",
    keywords: ["Alu-Zaun nach Maß", "Alu-Sichtschutzzaun", "Alu-Poolzaun", "Anti-Kletter-Zaun", "Alu-Zaun OEM"],
    faqs: [
      ["Warum so viele Seiten?", "Höhe, Füllung und Befestigung unterscheiden sich."],
      ["Angaben für Angebot?", "Länge, Höhe, Stil, Pfosten, Tore und Farbe."],
      ["Haben Zäune EN 1090?", "ICR-gelistete Modelle folgen EN 1090. Liste vor der Ausschreibung bestätigen."],
    ],
  }),
  "aluminum-carports": cloneLanding(enLandings["aluminum-carports"], {
    title: "Hersteller von Alu-Carports",
    description: "Freistehende Ein- und Doppelstellplätze—keine Wohnpergola. OEM Shanghai.",
    h1: "Hersteller von Alu-Carports für ein und zwei Stellplätze",
    lead: "Carports für Fahrzeuge: Stellplatzbreite, Länge, lichte Höhe, Dach Polycarbonat/Metall, Wind-/Schneehinweise. Kein EN-1090 von Pavillon, Tor oder Vordach.",
    suffix: "Details, die den Carport-Preis ändern",
    keywords: ["Alu-Carport Hersteller", "Doppelcarport nach Maß", "Parküberdachung Aluminium", "Carport OEM China", "Carport 6063-T5"],
    faqs: [
      ["Doppelcarport?", "Ja. Lichte Breite, Länge und Zufahrt bestätigen."],
      ["Pergola-EN-1090 zitieren?", "Nein. Nur Dokumente des Carport-Modells."],
      ["Zertifikatspfad?", "Pavillon-, Tor- oder Vordach-EN-1090 nicht für Carports zitieren."],
    ],
  }),
  "aluminum-sliding-doors": cloneLanding(enLandings["aluminum-sliding-doors"], {
    title: "Hersteller von Alu-Schiebetüren",
    description: "Schiebeflügel und Automatik-Schiebetore—keine Drehtore. OEM Shanghai.",
    h1: "Hersteller von Schiebetüren und Automatik-Schiebetoren",
    lead: "Für Schiebebetrieb: Patio-/Balkontüren und Automatik-Schiebetore. Öffnung, Laufschiene, Glas/Füllung, Motor. Nicht die EN-1090-Torliste ohne Bestätigung.",
    suffix: "Fragen zur Schiebeöffnung",
    keywords: ["Alu-Schiebetür Hersteller", "automatisches Alu-Schiebetor", "Patio-Schiebetür", "Schiebetor OEM"],
    faqs: [
      ["Unterschied zum Hoftor?", "Hoftore sind Eingangsidentität; hier geht es um Schieben."],
      ["Tor mit Motor?", "Ja. Lichte Öffnung und Strom angeben."],
      ["EN 1090 wie bei Toren?", "Standardmäßig nein. Vor EN-1090-Angabe nachfragen."],
    ],
  }),
  "aluminum-doors": cloneLanding(enLandings["aluminum-doors"], {
    title: "Hersteller von Alu-Toren nach Maß",
    description: "Hof- und Einfahrtstore nach CAD—keine verglasten Schiebesysteme. OEM Shanghai.",
    h1: "Hersteller von Alu-Hof- und Einfahrtstoren",
    lead: "Eingangsidentität: Hof- und Einfahrtstore, Dreh oder Schiebe. CAD, Öffnung, Flügel und Finish senden. ICR-Tore: EN 1090. Verglaste Schiebetüren gehören zur Kategorie Schiebetür.",
    suffix: "Projekthinweise für Händler",
    keywords: ["Alu-Tor nach Maß", "Alu-Hoftor Hersteller", "Einfahrtstor Aluminium", "Villentor OEM", "Tor EN 1090"],
    faqs: [
      ["Nach unserem CAD?", "Ja. Motiv, Flügel und Beschlag folgen CAD und Öffnung."],
      ["Welche Tore EN 1090?", "Nur Modelle auf der ICR-Torverifizierung."],
      ["Welche Tore haben EN 1090?", "Nur Modelle auf der ICR-Torverifizierung."],
    ],
  }),
  awnings: cloneLanding(enLandings.awnings, {
    title: "Hersteller von Alu-Vordächern und Markisen",
    description: "Tür-/Fenstervordächer mit definierter Ausladung—keine Carports. OEM Shanghai.",
    h1: "Hersteller von Eingangs- und Terrassenvordächern",
    lead: "Vordächer mit Breite und Ausladung, Rahmen mit Polycarbonat. ICR-Vordachmodelle: EN 1090. Carports und Lamellenpergolen sind andere Kategorien.",
    suffix: "Maße, die beim Vordach zählen",
    keywords: ["Alu-Vordach Hersteller", "Türvordach nach Maß", "Terrassenmarkise Aluminium", "Vordach OEM", "Vordach EN 1090"],
    faqs: [
      ["Unterschied zum Carport?", "Das Vordach kragt vom Gebäude; der Carport ist freistehender Parkplatz."],
      ["Angaben für Angebot?", "Breite, Ausladung, Höhe, Wand/Pfosten und Eindeckung."],
      ["Welche Vordächer EN 1090?", "Nur ICR-gelistete Modelle. Carports gehören nicht dazu."],
    ],
  }),
};

const ptLandings: Record<CategorySlug, SeoLanding> = {
  "aluminum-gazebos": cloneLanding(enLandings["aluminum-gazebos"], {
    title: "Fabricante de pérgola de alumínio para outdoor living",
    description: "Coberturas de lazer com lâminas ou teto fixo—não é carport nem marquise de porta. OEM Shanghai.",
    h1: "Fabricante de pérgolas e gazebos de alumínio para lazer exterior",
    lead: "Outdoor living: pérgolas bioclimáticas, gazebos fixos e pavilhões. Indique vão, postes, lâminas manuais ou motorizadas, drenagem e RAL. 6063-T5. Pavilhões ICR: EN 1090. Carports e marquises são outras categorias.",
    suffix: "Perguntas antes de encomendar uma pérgola",
    keywords: ["pérgola de alumínio sob medida", "pérgola bioclimática fábrica", "gazebo de alumínio OEM", "pérgola 6063-T5", "pérgola pintada China"],
    faqs: [
      ["Pérgola = carport?", "Não. A pérgola é lazer; o carport é estacionamento."],
      ["Motor e RAL?", "Sim. Lâminas manuais ou motorizadas conforme desenho."],
      ["Que pérgolas seguem EN 1090?", "Só os pavilhões do ficheiro ICR. Confirme o número antes do concurso."],
    ],
  }),
  "aluminum-fences": cloneLanding(enLandings["aluminum-fences"], {
    title: "Fabricante de cercas de alumínio por modelo",
    description: "Perímetro por modelo: privacidade, lâminas, piquete, piscina e anti-escalada. OEM Shanghai.",
    h1: "Fabricante de cercas de alumínio com modelos separados por estilo",
    lead: "Cada ficha é um modelo distinto. Indique comprimento, altura, módulo, postes e portões. 6063-T5 com pintura a pó. Modelos ICR de cerca: EN 1090.",
    suffix: "Lista para orçar cercas",
    keywords: ["cerca de alumínio sob medida", "cerca de privacidade alumínio", "cerca de piscina alumínio", "cerca anti-escalada", "cerca alumínio OEM"],
    faqs: [
      ["Por que tantas páginas?", "Altura, preenchimento e fixação mudam."],
      ["Dados para orçar?", "Comprimento, altura, estilo, postes, portões e cor."],
      ["As cercas têm EN 1090?", "Modelos do certificado ICR seguem EN 1090. Confirme a lista antes do concurso."],
    ],
  }),
  "aluminum-carports": cloneLanding(enLandings["aluminum-carports"], {
    title: "Fabricante de carport de alumínio",
    description: "Estacionamento de uma ou duas vagas—não é pérgola de lazer. OEM Shanghai.",
    h1: "Fabricante de carports de alumínio de uma e duas vagas",
    lead: "Carports independentes: largura da vaga, comprimento, altura livre, cobertura policarbonato/metal, vento/neve. Sem EN 1090 de pavilhão, portão ou marquise.",
    suffix: "Detalhes que mudam o preço do carport",
    keywords: ["fabricante de carport de alumínio", "carport duplo sob medida", "cobertura de estacionamento", "carport alumínio OEM", "carport 6063-T5"],
    faqs: [
      ["Dois carros?", "Sim. Confirme largura livre, comprimento e acesso."],
      ["Citar EN 1090 da pérgola?", "Não. Só documentos do modelo de carport."],
      ["Caminho de certificado?", "Não cite EN 1090 de pavilhão, portão ou marquise para carports."],
    ],
  }),
  "aluminum-sliding-doors": cloneLanding(enLandings["aluminum-sliding-doors"], {
    title: "Fabricante de porta de correr de alumínio",
    description: "Folhas de correr e portões automáticos—não portões de batente. OEM Shanghai.",
    h1: "Fabricante de portas de correr e portões automáticos",
    lead: "Para deslizar: portas de pátio/varanda e portões de correr automáticos. Orce vão, trilho, vidro/painel e motor. Não é a lista EN 1090 de portões sem confirmação escrita.",
    suffix: "Perguntas de vão de correr",
    keywords: ["porta de correr de alumínio", "portão de correr automático", "porta de pátio alumínio", "portão OEM alumínio"],
    faqs: [
      ["Diferença do portão de pátio?", "O portão é identidade de entrada; aqui o foco é deslizar."],
      ["Portão com motor?", "Sim. Informe vão livre e energia."],
      ["EN 1090 como os portões?", "Por defeito não. Confirme antes de especificar EN 1090 numa de correr."],
    ],
  }),
  "aluminum-doors": cloneLanding(enLandings["aluminum-doors"], {
    title: "Fabricante de portão de alumínio sob medida",
    description: "Portões de pátio sob CAD—não sistemas de correr envidraçados. OEM Shanghai.",
    h1: "Fabricante de portões de pátio e acesso em alumínio",
    lead: "Identidade de entrada: portões de pátio e acesso, batente ou correr. Envie CAD, vão, folhas e acabamento. Portões ICR: EN 1090. Portas de correr envidraçadas ficam na categoria de correr.",
    suffix: "Notas de projeto para distribuidores",
    keywords: ["portão de alumínio sob medida", "portão de pátio alumínio", "portão de acesso", "portão villa OEM", "portão EN 1090"],
    faqs: [
      ["Segundo nosso CAD?", "Sim. Desenho, folha e ferragens seguem CAD e vão."],
      ["Quais portões EN 1090?", "Só os do ICR de portões."],
      ["Que portões têm EN 1090?", "Só os nomeados na verificação ICR de portões."],
    ],
  }),
  awnings: cloneLanding(enLandings.awnings, {
    title: "Fabricante de toldo e marquise de alumínio",
    description: "Marquises com balanço definido—não carports nem grandes pérgolas. OEM Shanghai.",
    h1: "Fabricante de toldos e marquises de entrada",
    lead: "Toldos de entrada/terraço com largura e balanço, quadro pintado + policarbonato. Modelos ICR: EN 1090. Carports e pérgolas de lâminas são outras categorias.",
    suffix: "Medidas que importam num toldo",
    keywords: ["fabricante de toldo de alumínio", "marquise de porta sob medida", "toldo de terraço alumínio", "marquise OEM", "toldo EN 1090"],
    faqs: [
      ["Diferença do carport?", "O toldo avança do edifício; o carport é estacionamento independente."],
      ["Dados para orçar?", "Largura, balanço, altura, parede/poste e cobertura."],
      ["Que marquises seguem EN 1090?", "Só as do certificado ICR. Carports ficam de fora."],
    ],
  }),
};

const ruLandings: Record<CategorySlug, SeoLanding> = {
  "aluminum-gazebos": cloneLanding(enLandings["aluminum-gazebos"], {
    title: "Производитель алюминиевых пергол для outdoor living",
    description: "Крыши для outdoor living с ламелями или глухие—не автонавес и не козырёк двери. OEM Shanghai.",
    h1: "Производитель алюминиевых пергол и беседок для outdoor living",
    lead: "Outdoor living: биоклиматические перголы, стационарные беседки. Укажите пролёт, стойки, ручные/моторные ламели, дренаж и RAL. 6063-T5. Павильоны ICR: EN 1090. Автонавесы и входные козырьки — другие категории.",
    suffix: "Вопросы перед заказом перголы",
    keywords: ["алюминиевая пергола на заказ", "биоклиматическая пергола завод", "алюминиевый павильон OEM", "пергола 6063-T5", "порошковая пергола Китай"],
    faqs: [
      ["Пергола = навес для авто?", "Нет. Пергола — для отдыха; навес — для парковки."],
      ["Мотор и RAL?", "Да. Ламели вручную или с мотором по чертежу."],
      ["Какие перголы по EN 1090?", "Только павильоны из файла ICR. Сверьте номер до тендера."],
    ],
  }),
  "aluminum-fences": cloneLanding(enLandings["aluminum-fences"], {
    title: "Производитель алюминиевых заборов по моделям",
    description: "Периметр по моделям: приватность, ламели, штакетник, бассейн и антиподъём. OEM Shanghai.",
    h1: "Производитель алюминиевых заборов с отдельными моделями по стилю",
    lead: "Каждая карточка — отдельная модель. Укажите длину, высоту, модуль, столбы и калитки. 6063-T5 с порошковой окраской. Модели ICR забора: EN 1090.",
    suffix: "Чек-лист расчёта забора",
    keywords: ["алюминиевый забор на заказ", "забор приватности алюминий", "забор бассейна алюминий", "антиподъёмный забор", "забор алюминий OEM"],
    faqs: [
      ["Зачем столько страниц?", "Высота, заполнение и крепления разные."],
      ["Что нужно для расчёта?", "Длина, высота, стиль, столбы, калитки и цвет."],
      ["Есть ли EN 1090 у заборов?", "Модели сертификата ICR следуют EN 1090. Подтвердите список до тендера."],
    ],
  }),
  "aluminum-carports": cloneLanding(enLandings["aluminum-carports"], {
    title: "Производитель алюминиевых навесов для авто",
    description: "Парковка на одно–два авто—не пергола для отдыха. OEM Shanghai.",
    h1: "Производитель алюминиевых навесов на одно и два авто",
    lead: "Отдельно стоящие навесы: ширина места, длина, высота, кровля поликарбонат/металл, ветер/снег. Без EN 1090 павильона, ворот или козырька.",
    suffix: "Детали, которые меняют цену навеса",
    keywords: ["производитель навесов для авто", "навес на два авто", "парковочный козырёк алюминий", "навес OEM Китай", "навес 6063-T5"],
    faqs: [
      ["На два авто?", "Да. Подтвердите ширину, длину и подъезд."],
      ["Цитировать EN 1090 перголы?", "Нет. Только документы модели навеса."],
      ["Путь сертификата?", "Не ссылайтесь на EN 1090 павильона, ворот или козырька для навесов."],
    ],
  }),
  "aluminum-sliding-doors": cloneLanding(enLandings["aluminum-sliding-doors"], {
    title: "Производитель алюминиевых раздвижных дверей",
    description: "Раздвижные створки и автоматические откатные ворота—не распашные дворовые. OEM Shanghai.",
    h1: "Производитель раздвижных дверей и автоматических откатных ворот",
    lead: "Для сдвига: двери патио/балкона и автоматические откатные ворота. Укажите проём, направляющую, стекло/заполнение и мотор. Не список EN 1090 ворот без письменного подтверждения.",
    suffix: "Вопросы по раздвижному проёму",
    keywords: ["алюминиевая раздвижная дверь", "автоматические откатные ворота", "дверь патио алюминий", "ворота OEM алюминий"],
    faqs: [
      ["Отличие от дворовых ворот?", "Дворовые ворота — образ входа; здесь фокус на сдвиге."],
      ["Ворота с мотором?", "Да. Укажите проём и питание."],
      ["EN 1090 как у ворот?", "По умолчанию нет. Уточните перед указанием EN 1090 на раздвижной двери."],
    ],
  }),
  "aluminum-doors": cloneLanding(enLandings["aluminum-doors"], {
    title: "Производитель алюминиевых ворот на заказ",
    description: "Дворовые ворота по CAD—не остеклённые раздвижные системы. OEM Shanghai.",
    h1: "Производитель дворовых и въездных алюминиевых ворот",
    lead: "Образ входа: дворовые и въездные ворота, распашные или откатные. Пришлите CAD, проём, створки и отделку. Ворота ICR: EN 1090. Остеклённые раздвижные — в категории раздвижных дверей.",
    suffix: "Заметки для дистрибьюторов",
    keywords: ["алюминиевые ворота на заказ", "дворовые ворота алюминий", "въездные ворота", "ворота виллы OEM", "ворота EN 1090"],
    faqs: [
      ["По нашему CAD?", "Да. Рисунок, створка и фурнитура по CAD и проёму."],
      ["Какие ворота EN 1090?", "Только модели из ICR по воротам."],
      ["Какие ворота EN 1090?", "Только модели из ICR по воротам."],
    ],
  }),
  awnings: cloneLanding(enLandings.awnings, {
    title: "Производитель алюминиевых козырьков и навесов",
    description: "Козырьки с заданным вылетом—не автонавесы и не крупные перголы. OEM Shanghai.",
    h1: "Производитель входных и террасных козырьков",
    lead: "Входные и террасные козырьки с шириной и вылетом, рама с поликарбонатом. Модели ICR: EN 1090. Автонавесы и ламельные перголы — другие категории.",
    suffix: "Размеры, важные для козырька",
    keywords: ["производитель козырьков алюминий", "козырёк двери на заказ", "навес террасы алюминий", "козырёк OEM", "козырёк EN 1090"],
    faqs: [
      ["Отличие от автонавеса?", "Козырёк выносится от здания; автонавес — отдельно стоящая парковка."],
      ["Данные для расчёта?", "Ширина, вылет, высота, стена/стойка и покрытие."],
      ["Какие козырьки EN 1090?", "Только из сертификата ICR. Автонавесы вне этого сертификата."],
    ],
  }),
};

const arLandings: Record<CategorySlug, SeoLanding> = {
  "aluminum-gazebos": cloneLanding(enLandings["aluminum-gazebos"], {
    title: "مصنع برجولا ألمنيوم للمعيشة الخارجية",
    description: "أسقف معيشة خارجية بشفرات أو ثابتة—ليست مظلة سيارات ولا مظلة باب. OEM Shanghai.",
    h1: "مصنع برجولات ومظلات ألمنيوم للمعيشة الخارجية",
    lead: "للمعيشة الخارجية: برجولات مناخية وشرفات ثابتة. حدّدوا البحر والأعمدة والشفرات اليدوية أو بمحرك والصرف وRAL. 6063-T5. أجنحة ICR: EN 1090. مظلات السيارات ومداخل الأبواب فئات أخرى.",
    suffix: "أسئلة قبل طلب البرجولا",
    keywords: ["برجولا ألمنيوم حسب الطلب", "برجولا مناخية مصنع", "جناح ألمنيوم OEM", "برجولا 6063-T5", "برجولا طلاء مسحوق الصين"],
    faqs: [
      ["هل البرجولا = مظلة سيارات؟", "لا. البرجولا للمعيشة؛ مظلة السيارات للوقوف."],
      ["محرك ولون RAL؟", "نعم. شفرات يدوية أو بمحرك حسب المخطط."],
      ["أي برجولات تتبع EN 1090؟", "أجنحة ملف ICR فقط. طابقوا الرقم قبل المناقصة."],
    ],
  }),
  "aluminum-fences": cloneLanding(enLandings["aluminum-fences"], {
    title: "مصنع سياج ألمنيوم حسب الموديل",
    description: "حدود حسب الموديل: خصوصية وشفرات وأعمدة ومسبح ومضاد للتسلق. OEM Shanghai.",
    h1: "مصنع سياج ألمنيوم بموديلات منفصلة حسب الطراز",
    lead: "كل بطاقة موديل مستقل. اذكروا الطول والارتفاع والوحدة والأعمدة والأبواب. 6063-T5 بطلاء مسحوق. موديلات ICR للسياج: EN 1090.",
    suffix: "قائمة لتسعير السياج",
    keywords: ["سياج ألمنيوم حسب الطلب", "سياج خصوصية ألمنيوم", "سياج مسبح ألمنيوم", "سياج مضاد للتسلق", "سياج ألمنيوم OEM"],
    faqs: [
      ["لماذا صفحات كثيرة؟", "الارتفاع والتعبئة والتثبيت تختلف."],
      ["بيانات العرض؟", "الطول والارتفاع والطراز والأعمدة والأبواب واللون."],
      ["هل للسياج EN 1090؟", "موديلات شهادة ICR تتبع EN 1090. أكّدوا القائمة قبل المناقصة."],
    ],
  }),
  "aluminum-carports": cloneLanding(enLandings["aluminum-carports"], {
    title: "مصنع مظلة سيارات ألمنيوم",
    description: "موقف لسيارة أو سيارتين—ليست برجولا للمعيشة. OEM Shanghai.",
    h1: "مصنع مظلات سيارات ألمنيوم لموقف أو موقفين",
    lead: "مظلات مستقلة: عرض الموقف والطول والارتفاع الحر والسقف بولي كربونات/معدن والرياح/الثلج. بلا EN 1090 للجناح أو البوابة أو مظلة المدخل.",
    suffix: "تفاصيل تغيّر سعر مظلة السيارات",
    keywords: ["مصنع مظلة سيارات ألمنيوم", "مظلة سيارتين حسب الطلب", "تغطية موقف ألمنيوم", "مظلة سيارات OEM", "مظلة 6063-T5"],
    faqs: [
      ["سيارتان؟", "نعم. أكّدوا العرض الحر والطول والمسار."],
      ["استشهاد EN 1090 للبرجولا؟", "لا. فقط وثائق موديل مظلة السيارات."],
      ["مسار الشهادة؟", "لا تستشهدوا بـ EN 1090 للجناح أو البوابة أو مظلة المدخل لمظلات السيارات."],
    ],
  }),
  "aluminum-sliding-doors": cloneLanding(enLandings["aluminum-sliding-doors"], {
    title: "مصنع باب ألمنيوم منزلق",
    description: "ضلف منزلقة وبوابات أوتوماتيكية—ليست بوابات مفصلية للفناء. OEM Shanghai.",
    h1: "مصنع أبواب منزلقة وبوابات أوتوماتيكية",
    lead: "للانزلاق: أبواب فناء/شرفة وبوابات منزلقة أوتوماتيكية. سعّروا الفتحة والمسار والزجاج/التعبئة والمحرك. ليست قائمة EN 1090 للبوابات دون تأكيد كتابي.",
    suffix: "أسئلة فتحة الانزلاق",
    keywords: ["باب ألمنيوم منزلق", "بوابة منزلقة أوتوماتيكية", "باب فناء ألمنيوم", "بوابة OEM ألمنيوم"],
    faqs: [
      ["الفرق عن بوابة الفناء؟", "بوابة الفناء لهوية المدخل؛ هنا التركيز على الانزلاق."],
      ["بوابة بمحرك؟", "نعم. اذكروا الفتحة والطاقة."],
      ["EN 1090 مثل البوابات؟", "ليس افتراضياً. أكّدوا قبل كتابة EN 1090 على باب منزلق."],
    ],
  }),
  "aluminum-doors": cloneLanding(enLandings["aluminum-doors"], {
    title: "مصنع بوابة ألمنيوم حسب الطلب",
    description: "بوابات فناء حسب CAD—ليست أنظمة منزلقة زجاجية. OEM Shanghai.",
    h1: "مصنع بوابات فناء ومداخل من الألمنيوم",
    lead: "هوية المدخل: بوابات فناء ومداخل، مفصلية أو منزلقة. أرسلوا CAD والفتحة والضلف والتشطيب. بوابات ICR: EN 1090. الأبواب المنزلقة الزجاجية في فئة المنزلقة.",
    suffix: "ملاحظات مشروع للموزعين",
    keywords: ["بوابة ألمنيوم حسب الطلب", "بوابة فناء ألمنيوم", "بوابة مدخل", "بوابة فيلا OEM", "بوابة EN 1090"],
    faqs: [
      ["حسب CAD لدينا؟", "نعم. الرسم والضلفة والملحقات حسب CAD والفتحة."],
      ["أي بوابات EN 1090؟", "فقط موديلات ICR للبوابات."],
      ["أي بوابات EN 1090؟", "فقط الموديلات في تحقق ICR للبوابات."],
    ],
  }),
  awnings: cloneLanding(enLandings.awnings, {
    title: "مصنع مظلات ومداخل ألمنيوم",
    description: "مظلات ببروز محدد—ليست مظلات سيارات ولا برجولات كبيرة. OEM Shanghai.",
    h1: "مصنع مظلات ومداخل الأبواب",
    lead: "مظلات مدخل وتراس بعرض وبروز، إطار مطلي + بولي كربونات. موديلات ICR: EN 1090. مظلات السيارات وبرجولات الشفرات فئات أخرى.",
    suffix: "مقاسات مهمة للمظلة",
    keywords: ["مصنع مظلات ألمنيوم", "مظلة باب حسب الطلب", "مظلة تراس ألمنيوم", "مظلة OEM", "مظلة EN 1090"],
    faqs: [
      ["الفرق عن مظلة السيارات؟", "المظلة تبرز من المبنى؛ مظلة السيارات موقف مستقل."],
      ["بيانات العرض؟", "العرض والبروز والارتفاع والجدار/العمود والغطاء."],
      ["أي مظلات EN 1090؟", "فقط من شهادة ICR. مظلات السيارات خارجها."],
    ],
  }),
};

const jaLandings: Record<CategorySlug, SeoLanding> = {
  "aluminum-gazebos": cloneLanding(enLandings["aluminum-gazebos"], {
    title: "アウトドアリビング向けアルミパーゴラメーカー",
    description: "ルーバーまたは固定のアウトドアリビング屋根。カーポートやドア庇ではありません。 OEM Shanghai.",
    h1: "アウトドアリビング向けアルミパーゴラ・ガゼボメーカー",
    lead: "アウトドアリビング向け：バイオクライマティックなルーバーパーゴラと固定ガゼボ。スパン、柱、手動/電動ルーバー、排水、RAL を指定。6063-T5。ICR パビリオンは EN 1090。カーポートと入口庇は別カテゴリ。",
    suffix: "パーゴラ発注前によくある質問",
    keywords: ["オーダーアルミパーゴラ", "バイオクライマティックパーゴラ工場", "アルミパビリオン OEM", "パーゴラ 6063-T5", "粉体塗装パーゴラ 中国"],
    faqs: [
      ["パーゴラ＝カーポート？", "いいえ。パーゴラは居住用屋根、カーポートは駐車です。"],
      ["モーターと RAL？", "はい。手動または電動を図面どおりに。"],
      ["EN 1090 のパーゴラは？", "ICR ファイル記載のパビリオンのみ。入札前に型番を照合。"],
    ],
  }),
  "aluminum-fences": cloneLanding(enLandings["aluminum-fences"], {
    title: "モデル別アルミフェンスメーカー",
    description: "モデル別の境界：目隠し、ルーバー、縦桟、プール、よじ登り防止。 OEM Shanghai.",
    h1: "スタイル別にモデルを分けたアルミフェンスメーカー",
    lead: "各掲載は別モデル。長さ、高さ、モジュール、柱、門扉を提示。6063-T5 粉体。ICR フェンスは EN 1090。",
    suffix: "フェンス見積チェックリスト",
    keywords: ["オーダーアルミフェンス", "アルミ目隠しフェンス", "アルミプールフェンス", "よじ登り防止フェンス", "アルミフェンス OEM"],
    faqs: [
      ["なぜページが多い？", "高さ・充填・固定が違うため。"],
      ["見積に必要な情報は？", "長さ、高さ、スタイル、柱、門、色。"],
      ["フェンスに EN 1090 は？", "ICR 記載モデルは EN 1090。入札前に一覧を確認。"],
    ],
  }),
  "aluminum-carports": cloneLanding(enLandings["aluminum-carports"], {
    title: "アルミカーポートメーカー",
    description: "1台・2台の駐車シェルター。居住用パーゴラではありません。 OEM Shanghai.",
    h1: "1台・2台用アルミカーポートメーカー",
    lead: "独立カーポート：車幅、長さ、有効高さ、ポリカ/金属屋根、風雪条件。パビリオン/門/庇の EN 1090 は使いません。",
    suffix: "カーポート価格を変えるポイント",
    keywords: ["アルミカーポートメーカー", "2台用カーポート特注", "駐車キャノピー アルミ", "カーポート OEM 中国", "カーポート 6063-T5"],
    faqs: [
      ["2台用は？", "はい。有効幅・長さ・動線を確認。"],
      ["パーゴラ EN 1090 を引用可？", "不可。カーポート型番の書類のみ。"],
      ["証明書の扱いは？", "パビリオン・門・庇の EN 1090 をカーポートに引用しないでください。"],
    ],
  }),
  "aluminum-sliding-doors": cloneLanding(enLandings["aluminum-sliding-doors"], {
    title: "アルミ引き戸メーカー",
    description: "引き戸と自動スライドゲート。庭の開き門扉ではありません。 OEM Shanghai.",
    h1: "引き戸と自動スライドゲートのメーカー",
    lead: "スライド用途：パティオ/バルコニー引き戸と自動スライドゲート。開口、棚、ガラス/パネル、モーターを提示。書面確認なしに門の EN 1090 一覧とみなさないでください。",
    suffix: "スライド開口の確認事項",
    keywords: ["アルミ引き戸メーカー", "自動アルミスライドゲート", "パティオ引き戸", "スライドゲート OEM"],
    faqs: [
      ["門扉との違いは？", "門扉は入口の顔、ここはスライド動作が焦点。"],
      ["ゲートにモーターは？", "はい。有効開口と電源を提示。"],
      ["門と同じ EN 1090？", "原則いいえ。引き戸で EN 1090 を書く前に確認を。"],
    ],
  }),
  "aluminum-doors": cloneLanding(enLandings["aluminum-doors"], {
    title: "特注アルミ門扉メーカー",
    description: "CAD による庭・進入門扉。ガラス引き戸システムではありません。 OEM Shanghai.",
    h1: "アルミ中庭・進入門扉メーカー",
    lead: "入口の顔：庭門・主門・進入門（開き/引き）。CAD、開口、扉枚数、仕上げを送付。ICR 門は EN 1090。ガラス引き戸は引き戸カテゴリへ。",
    suffix: "販売店向けプロジェクトメモ",
    keywords: ["特注アルミ門扉", "アルミ中庭門", "進入門 アルミ", "ヴィラ門 OEM", "門 EN 1090"],
    faqs: [
      ["CAD どおり？", "はい。意匠・扉・金物は CAD と開口に従う。"],
      ["EN 1090 の門は？", "ICR 門検証に載る型番のみ。"],
      ["EN 1090 の門は？", "ICR 門検証に載る型番のみ。"],
    ],
  }),
  awnings: cloneLanding(enLandings.awnings, {
    title: "アルミ庇・オーニングメーカー",
    description: "出幅が明確なドア・窓・テラス庇。カーポートや大型パーゴラではありません。 OEM Shanghai.",
    h1: "入口・テラス庇メーカー",
    lead: "入口・テラス庇は幅と出幅で見積。粉体フレーム＋ポリカが一般的。ICR 庇は EN 1090。カーポートとルーバーパーゴラは別カテゴリ。",
    suffix: "庇で重要な寸法",
    keywords: ["アルミ庇メーカー", "ドア庇特注", "テラスオーニング アルミ", "庇 OEM", "庇 EN 1090"],
    faqs: [
      ["カーポートとの違いは？", "庇は建物から出る。カーポートは独立駐車。"],
      ["見積に必要な寸法は？", "幅、出幅、取付高さ、壁/柱、屋根材。"],
      ["EN 1090 の庇は？", "ICR 記載モデルのみ。カーポートは対象外。"],
    ],
  }),
};

const koLandings: Record<CategorySlug, SeoLanding> = {
  "aluminum-gazebos": cloneLanding(enLandings["aluminum-gazebos"], {
    title: "아웃도어 리빙 알루미늄 퍼골라 제조사",
    description: "루버 또는 고정 아웃도어 리빙 지붕. 카포트나 문 캐노피가 아닙니다. OEM Shanghai.",
    h1: "아웃도어 리빙용 알루미늄 퍼골라·가제보 제조사",
    lead: "아웃도어 리빙: 바이오클리매틱 루버 퍼골라와 고정 가제보. 경간, 기둥, 수동/전동 루버, 배수, RAL 지정. 6063-T5. ICR 파빌리온은 EN 1090. 카포트와 입구 캐노피는 다른 카테고리.",
    suffix: "퍼골라 주문 전 자주 묻는 질문",
    keywords: ["맞춤 알루미늄 퍼골라", "바이오클리매틱 퍼골라 공장", "알루미늄 파빌리온 OEM", "퍼골라 6063-T5", "분체 퍼골라 중국"],
    faqs: [
      ["퍼골라=카포트?", "아니요. 퍼골라는 거주용 지붕, 카포트는 주차입니다."],
      ["모터와 RAL?", "네. 수동 또는 전동을 도면대로."],
      ["EN 1090 퍼골라는?", "ICR 파일에 오른 파빌리온만. 입찰 전 모델 번호를 대조하세요."],
    ],
  }),
  "aluminum-fences": cloneLanding(enLandings["aluminum-fences"], {
    title: "모델별 알루미늄 펜스 제조사",
    description: "모델별 경계: 프라이버시, 루버, 피켓, 수영장, 기어오름 방지. OEM Shanghai.",
    h1: "스타일별 모델이 나뉜 알루미늄 펜스 제조사",
    lead: "각 항목은 별도 모델. 길이, 높이, 모듈, 기둥, 대문 제시. 6063-T5 분체. ICR 펜스는 EN 1090.",
    suffix: "펜스 견적 체크리스트",
    keywords: ["맞춤 알루미늄 펜스", "알루미늄 프라이버시 펜스", "알루미늄 수영장 펜스", "기어오름 방지 펜스", "알루미늄 펜스 OEM"],
    faqs: [
      ["왜 페이지가 많나요?", "높이·채움·고정이 다르기 때문입니다."],
      ["견적에 필요한 정보는?", "길이, 높이, 스타일, 기둥, 대문, 색상."],
      ["펜스에 EN 1090이 있나요?", "ICR 등재 모델은 EN 1090. 입찰 전 목록을 확인하세요."],
    ],
  }),
  "aluminum-carports": cloneLanding(enLandings["aluminum-carports"], {
    title: "알루미늄 카포트 제조사",
    description: "1·2대 주차 셸터. 거주용 퍼골라가 아닙니다. OEM Shanghai.",
    h1: "1·2대용 알루미늄 카포트 제조사",
    lead: "독립 카포트: 주차 폭, 길이, 유효 높이, 폴리카/금속 지붕, 풍설 조건. 파빌리온/대문/캐노피 EN 1090 미사용.",
    suffix: "카포트 견적을 바꾸는 세부",
    keywords: ["알루미늄 카포트 제조사", "2대 카포트 맞춤", "주차 캐노피 알루미늄", "카포트 OEM 중국", "카포트 6063-T5"],
    faqs: [
      ["2대용?", "네. 유효 폭·길이·동선을 확인."],
      ["퍼골라 EN 1090 인용?", "안 됩니다. 카포트 모델 서류만."],
      ["인증 경로는?", "파빌리온·대문·캐노피 EN 1090을 카포트에 인용하지 마세요."],
    ],
  }),
  "aluminum-sliding-doors": cloneLanding(enLandings["aluminum-sliding-doors"], {
    title: "알루미늄 슬라이딩 도어 제조사",
    description: "미닫이 문짝과 자동 슬라이딩 대문. 마당 여닫이 대문이 아닙니다. OEM Shanghai.",
    h1: "미닫이문·자동 슬라이딩 대문 제조사",
    lead: "슬라이딩용: 파티오/발코니 미닫이문과 자동 슬라이딩 대문. 개구부, 레일, 유리/패널, 모터 제시. 서면 확인 없이 대문 EN 1090 목록으로 보지 마세요.",
    suffix: "슬라이딩 개구 확인 사항",
    keywords: ["알루미늄 슬라이딩 도어 제조사", "자동 슬라이딩 대문", "파티오 미닫이문", "슬라이딩 대문 OEM"],
    faqs: [
      ["대문과의 차이는?", "대문은 입구 이미지, 여기는 슬라이딩이 핵심."],
      ["대문에 모터?", "네. 유효 개구와 전원을 제시."],
      ["대문처럼 EN 1090인가요?", "기본은 아닙니다. 미닫이에 EN 1090을 쓰기 전에 확인하세요."],
    ],
  }),
  "aluminum-doors": cloneLanding(enLandings["aluminum-doors"], {
    title: "맞춤 알루미늄 대문 제조사",
    description: "CAD 마당·진입 대문. 유리 미닫이 시스템이 아닙니다. OEM Shanghai.",
    h1: "알루미늄 마당·진입 대문 제조사",
    lead: "입구 이미지: 마당·주·진입 대문(여닫이/슬라이딩). CAD, 개구, 문짝 수, 마감 제출. ICR 대문: EN 1090. 유리 미닫이는 슬라이딩 카테고리로.",
    suffix: "유통사를 위한 프로젝트 메모",
    keywords: ["맞춤 알루미늄 대문", "알루미늄 마당 대문", "진입 대문", "빌라 대문 OEM", "대문 EN 1090"],
    faqs: [
      ["CAD대로?", "네. 문양·문짝·하드웨어는 CAD와 개구를 따름."],
      ["EN 1090 대문은?", "ICR 대문 검증에 오른 모델만."],
      ["EN 1090 대문은?", "ICR 대문 검증에 오른 모델만."],
    ],
  }),
  awnings: cloneLanding(enLandings.awnings, {
    title: "알루미늄 어닝·캐노피 제조사",
    description: "돌출이 명확한 문·창·테라스 어닝. 카포트나 대형 퍼골라가 아닙니다. OEM Shanghai.",
    h1: "입구·테라스 어닝 제조사",
    lead: "입구·테라스 어닝은 폭과 돌출로 견적. 분체 프레임+폴리카가 일반적. ICR 캐노피: EN 1090. 카포트와 루버 퍼골라는 다른 카테고리.",
    suffix: "어닝에서 중요한 치수",
    keywords: ["알루미늄 어닝 제조사", "문 캐노피 맞춤", "테라스 어닝 알루미늄", "캐노피 OEM", "캐노피 EN 1090"],
    faqs: [
      ["카포트와 차이는?", "어닝은 건물에서 돌출, 카포트는 독립 주차."],
      ["견적 치수는?", "폭, 돌출, 설치 높이, 벽/기둥, 지붕재."],
      ["EN 1090 캐노피는?", "ICR 등재 모델만. 카포트는 해당 없음."],
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
