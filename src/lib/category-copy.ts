import type { Locale } from "@/i18n/routing";
import type { CategorySlug } from "@/lib/catalog";

export type CategoryCopy = {
  name: string;
  summary: string;
  description: string;
  features: string[];
  applications: string[];
  faqs: { question: string; answer: string }[];
  specLabels: [string, string, string, string];
  material: string;
  surface: string;
};

const specEn: CategoryCopy["specLabels"] = [
  "Material",
  "Surface",
  "Reference price",
  "Minimum order",
];

type PartialCopy = Omit<CategoryCopy, "specLabels" | "material" | "surface"> & {
  specLabels?: CategoryCopy["specLabels"];
  material?: string;
  surface?: string;
};

function pack(
  localeCopy: Record<CategorySlug, PartialCopy>,
  specLabels: CategoryCopy["specLabels"],
  material: string,
  surface: string,
): Record<CategorySlug, CategoryCopy> {
  return Object.fromEntries(
    Object.entries(localeCopy).map(([slug, copy]) => [
      slug,
      {
        ...copy,
        specLabels: copy.specLabels ?? specLabels,
        material: copy.material ?? material,
        surface: copy.surface ?? surface,
      },
    ]),
  ) as Record<CategorySlug, CategoryCopy>;
}

const en = pack(
  {
    "aluminum-gazebos": {
      name: "Aluminum Gazebo & Pergola",
      summary: "Louvered and fixed outdoor living roofs for villas, restaurants, and hotel courtyards—not a carport or door canopy.",
      description:
        "This line is for outdoor living: bioclimatic louvered pergolas, fixed-top gazebos, and pavilion-style shade structures. Buyers usually specify free span, post layout, motorized or manual louvers, drainage, and RAL finish. Frames are 6063-T5. Pavilion models named on our ICR file follow EN 1090; carports and entrance canopies are separate categories.",
      features: [
        "Bioclimatic louver or fixed roof",
        "6063-T5 outdoor frame",
        "Motor options on louver models",
        "RAL powder coat or PVDF on request",
        "Sized from drawings or site measures",
      ],
      applications: ["Villa gardens", "Restaurant terraces", "Hotel courtyards", "Residential outdoor rooms"],
      faqs: [
        {
          question: "Is a pergola the same product as a carport?",
          answer: "No. Pergolas and gazebos are outdoor living roofs. Carports are a separate parking category and do not use the pavilion certificate.",
        },
        {
          question: "Can louver angle and motor be specified?",
          answer: "Yes. Louvered models can be motorized or manual; span, bay count, and finish follow your drawing.",
        },
      ],
    },
    "aluminum-fences": {
      name: "Aluminum Fence",
      summary: "Model-by-model perimeter systems: privacy slats, louvers, pickets, pool barriers, and anti-climb panels.",
      description:
        "Fence buying is about the panel type, not a generic “aluminum fence.” Listings stay separated as horizontal louvers, vertical privacy slats, pickets, pool barriers, wood-grain screens, and anti-climb security panels. Quote height, module width, post detail, and gate openings with the fence run. Coating is powder coat on 6063-T5. Listed fence models on the ICR file follow EN 1090.",
      features: [
        "One model per listing",
        "Privacy, pool, or security roles",
        "Cut-to-height panel modules",
        "RAL powder-coated finish",
        "Posts and gates quoted with the run",
      ],
      applications: ["Villa perimeters", "Pool safety lines", "Garden privacy screens", "Commercial boundaries"],
      faqs: [
        {
          question: "Why are fence styles on separate product pages?",
          answer: "Because height, infill, and fixing differ. Privacy slats, pool barriers, and security panels are not interchangeable SKUs.",
        },
        {
          question: "What do you need for a fence quote?",
          answer: "Total length, height, panel style, post preference, gate positions, and finish. A site plan speeds production.",
        },
      ],
    },
    "aluminum-carports": {
      name: "Aluminum Carport",
      summary: "Freestanding single- and double-bay parking shelters sized for vehicles—not pergola living roofs.",
      description:
        "Carports protect vehicles on driveways and parking lots. Specs focus on bay width, length, clear height, roof sheet (polycarbonate or metal), and wind or snow notes for the destination. Structures are freestanding 6063-T5 frames with powder coating. This category does not use pavilion, gate, or canopy EN 1090 certificates.",
      features: [
        "Single or double vehicle bays",
        "Polycarbonate or metal roof sheet",
        "Freestanding 6063-T5 frame",
        "Driveway width and length to drawing",
        "Export packing for overseas sites",
      ],
      applications: ["Home driveways", "Villa parking courts", "Small commercial lots", "Hotel drop-off bays"],
      faqs: [
        {
          question: "Can one carport cover two cars?",
          answer: "Yes. Double-bay models are in the catalog; confirm clear width, length, and approach path on your plan.",
        },
        {
          question: "Does the carport share the pergola EN 1090 file?",
          answer: "No. Carports are a parking product line. Do not cite pavilion or canopy certificates for carport tenders.",
        },
      ],
    },
    "aluminum-sliding-doors": {
      name: "Aluminum Sliding Door",
      summary: "Architectural sliding door leaves and automatic sliding gates for openings—not courtyard swing gates.",
      description:
        "Use this category for sliding operation: glazed patio or balcony sliding doors, and automatic aluminum sliding gates for driveways. Quotes need opening width and height, track type, glass or solid infill, and whether a motor is required. Powder-coated 6063-T5 profiles. Sliding doors are not covered by the courtyard-gate EN 1090 list unless a specific model is confirmed in writing.",
      features: [
        "Sliding door or sliding gate",
        "Tempered glass options",
        "Automatic motor packages",
        "Opening size from site measure",
        "Powder-coated profiles",
      ],
      applications: ["Hotel balconies", "Villa patio openings", "Driveway sliding gates", "Commercial shopfronts"],
      faqs: [
        {
          question: "What is the difference from courtyard gates?",
          answer: "Courtyard gates are mainly swing or decorative entrance gates. This page focuses on sliding leaves and automatic sliding gate runs.",
        },
        {
          question: "Can you motorize a sliding gate?",
          answer: "Yes. Several models ship as automatic sliding gates; share clear opening and power availability.",
        },
      ],
    },
    "aluminum-doors": {
      name: "Aluminum Door & Gate",
      summary: "Swing and decorative courtyard entrance gates made from CAD—not patio sliding door systems.",
      description:
        "This category is for entrance identity: courtyard gates, villa main gates, and driveway gates in swing or sliding layouts, including decorative house gates. Buyers send CAD, clear opening, leaf count, and finish. Listed gate models on our ICR verification follow EN 1090 and CPR (EU) 305/2011. Architectural glazed sliding doors belong under sliding doors.",
      features: [
        "Courtyard and main entrance gates",
        "Swing or sliding layouts",
        "CAD-based OEM patterns",
        "Outdoor powder coating",
        "EN 1090 on listed gate models",
      ],
      applications: ["Villa entrances", "Community gates", "Site and ranch gates", "House front gates"],
      faqs: [
        {
          question: "Can you build from our CAD gate drawing?",
          answer: "Yes. Pattern, leaf size, and hardware side are produced from your CAD and site opening.",
        },
        {
          question: "Which gates carry EN 1090 verification?",
          answer: "Only models named on the ICR gate verification. Send the model number before you lock a tender spec.",
        },
      ],
    },
    awnings: {
      name: "Awning & Canopy",
      summary: "Door, window, and terrace canopies with defined projection—not freestanding carports or full pergolas.",
      description:
        "Awnings and canopies cover entrances and terraces with a projection from the wall or a light frame. Quotes need width, projection, mounting height, and cover material (usually polycarbonate on a powder-coated aluminum frame). Listed canopy models on the ICR file follow EN 1090. Freestanding parking shelters belong under carports; large louver roofs belong under pergolas.",
      features: [
        "Entrance and terrace coverage",
        "Projection and width to drawing",
        "Polycarbonate cover options",
        "6063-T5 powder-coated frame",
        "EN 1090 on listed canopy models",
      ],
      applications: ["Door canopies", "Window awnings", "Villa terraces", "Shop entrance covers"],
      faqs: [
        {
          question: "How is an awning different from a carport?",
          answer: "Awnings usually project from a building. Carports are freestanding vehicle shelters with parking bay sizes.",
        },
        {
          question: "What do you need to quote a canopy?",
          answer: "Width, projection, mounting height, wall or post type, and preferred cover sheet.",
        },
      ],
    },
  },
  specEn,
  "6063-T5 aluminum",
  "Powder coating",
);

const zh = pack(
  {
    "aluminum-gazebos": {
      name: "铝艺凉亭 / 遮阳棚",
      summary: "别墅、餐厅、酒店户外空间用的百叶顶与固定顶凉亭，不是车棚或门头雨棚。",
      description:
        "这一品类面向户外起居：电动百叶凉亭、固定顶凉棚与亭式遮阳结构。采购通常要明确净跨、立柱布局、电动或手动百叶、排水与 RAL 颜色。框架为 6063-T5。列入 ICR 的凉亭型号按 EN 1090 核查；车棚与入口雨棚是另两个品类。",
      features: [
        "百叶顶或固定顶",
        "6063-T5 户外框架",
        "百叶款可选电机",
        "RAL 粉末喷涂，可询 PVDF",
        "按图纸或现场尺寸生产",
      ],
      applications: ["别墅庭院", "餐厅露台", "酒店中庭", "住宅户外起居区"],
      faqs: [
        {
          question: "凉亭和车棚是同一类产品吗？",
          answer: "不是。凉亭用于户外起居遮阳；车棚是停车品类，不能套用凉亭证书。",
        },
        {
          question: "百叶角度和电机可以指定吗？",
          answer: "可以。百叶款可做电动或手动，跨度、开间与表面处理按图纸执行。",
        },
      ],
    },
    "aluminum-fences": {
      name: "铝艺围栏",
      summary: "按型号分开的围界系统：隐私格栅、百叶、竖条、泳池围栏与防攀爬板。",
      description:
        "买围栏要看板型，不是笼统的“铝艺围栏”。目录按横百叶、竖向隐私格栅、尖桩、泳池围栏、木纹屏风和防攀爬安防板分开。询价请带高度、模数宽度、立柱做法与门洞位置。型材 6063-T5，粉末喷涂。列入 ICR 的围栏型号按 EN 1090 核查。",
      features: [
        "一款一页，型号独立",
        "隐私 / 泳池 / 安防用途清晰",
        "按高度裁切模数板",
        "RAL 粉末喷涂",
        "立柱与门洞随围栏一起报价",
      ],
      applications: ["别墅围界", "泳池安全线", "庭院隐私屏", "商业边界"],
      faqs: [
        {
          question: "为什么围栏要分那么多型号页？",
          answer: "因为高度、填芯和安装方式不同。隐私格栅、泳池围栏与安防板不能互相替代。",
        },
        {
          question: "围栏报价需要提供什么？",
          answer: "总长度、高度、板型、立柱偏好、门洞位置和颜色。有总平图会更快。",
        },
      ],
    },
    "aluminum-carports": {
      name: "铝艺车棚",
      summary: "按车位尺寸定制的独立式单车 / 双车停车棚，不是凉亭起居顶。",
      description:
        "车棚用于车道和停车场遮车。规格重点是车位净宽、长度、净高、顶板（阳光板或金属板）以及目的地风雪说明。结构为独立式 6063-T5 框架，粉末喷涂。本品类不使用凉亭、大门或雨棚的 EN 1090 证书。",
      features: [
        "单车位或双车位",
        "阳光板或金属顶板",
        "独立式 6063-T5 框架",
        "按车道尺寸出图生产",
        "支持出口包装",
      ],
      applications: ["家用车道", "别墅停车院", "小型商业车位", "酒店落客区"],
      faqs: [
        {
          question: "一个车棚能遮两辆车吗？",
          answer: "可以。目录含双车位型号；请确认净宽、长度和进出路径。",
        },
        {
          question: "车棚能用凉亭的 EN 1090 证书吗？",
          answer: "不能。车棚是停车产品线，投标时不要引用凉亭或雨棚证书。",
        },
      ],
    },
    "aluminum-sliding-doors": {
      name: "铝艺推拉门",
      summary: "建筑推拉门扇与自动平移门，侧重洞口滑动开启，不是庭院平开装饰门。",
      description:
        "本类用于滑动开启：阳台 / 露台推拉门，以及车道自动铝艺平移门。询价需洞口宽高、轨道形式、玻璃或实心填芯、是否配电机。型材 6063-T5，粉末喷涂。除书面确认的具体型号外，推拉门一般不套用庭院大门 EN 1090 清单。",
      features: [
        "推拉门或平移门",
        "可选钢化玻璃",
        "可选自动门机",
        "按洞口尺寸定制",
        "粉末喷涂型材",
      ],
      applications: ["酒店阳台", "别墅露台洞口", "车道平移门", "商业门面"],
      faqs: [
        {
          question: "和庭院大门有什么区别？",
          answer: "庭院大门偏平开或装饰入口门；本页聚焦推拉门扇与自动平移门系统。",
        },
        {
          question: "平移门可以配电机吗？",
          answer: "可以。多款为自动平移门，请提供净开洞口与电源条件。",
        },
      ],
    },
    "aluminum-doors": {
      name: "铝艺大门",
      summary: "按 CAD 制作的平开 / 装饰庭院入口门，不是建筑玻璃推拉门系统。",
      description:
        "本类强调入口形象：庭院门、别墅主门、车道大门（平开或平移），以及装饰住宅门。采购通常提供 CAD、净开洞口、门扇数量与颜色。列入 ICR 的大门型号按 EN 1090 与 CPR (EU) 305/2011 核查。建筑玻璃推拉门请看推拉门品类。",
      features: [
        "庭院门与主入口门",
        "平开或平移布局",
        "按 CAD 做 OEM 花型",
        "户外粉末喷涂",
        "列入证书的型号具备 EN 1090",
      ],
      applications: ["别墅入口", "社区大门", "场地大门", "住宅正门"],
      faqs: [
        {
          question: "可以按我们的 CAD 大门图纸生产吗？",
          answer: "可以。花型、门扇尺寸和五金方向按 CAD 与现场洞口制作。",
        },
        {
          question: "哪些大门有 EN 1090 验证？",
          answer: "仅 ICR 大门证书上列出的型号。投标前把型号发给我们核对。",
        },
      ],
    },
    awnings: {
      name: "雨棚 / 遮阳篷",
      summary: "有明确出挑的门窗与露台雨棚，不是独立车棚或大型百叶凉亭。",
      description:
        "雨棚用于入口与露台遮蔽，通常带出挑宽度。询价需宽度、出挑、安装高度和顶面材料（多为粉末喷涂铝框 + 阳光板）。列入 ICR 的雨棚型号按 EN 1090 核查。独立停车棚归车棚；大型百叶顶归凉亭。",
      features: [
        "门口与露台遮盖",
        "宽度与出挑按图定制",
        "可选阳光板顶面",
        "6063-T5 粉末喷涂框架",
        "列入证书的型号具备 EN 1090",
      ],
      applications: ["门口雨棚", "窗上遮阳", "别墅露台", "商铺入口"],
      faqs: [
        {
          question: "雨棚和车棚有什么不同？",
          answer: "雨棚多从建筑外墙出挑；车棚是按车位尺寸做的独立停车棚。",
        },
        {
          question: "雨棚报价要提供什么？",
          answer: "宽度、出挑、安装高度、墙面或立柱条件，以及偏好的顶板材料。",
        },
      ],
    },
  },
  ["材质", "表面", "参考价格", "起订量"],
  "6063-T5 铝合金",
  "粉末喷涂",
);

const es = pack(
  {
    "aluminum-gazebos": {
      name: "Pérgola y cenador de aluminio",
      summary: "Cubiertas de ocio con lamas o techo fijo—no cochera ni marquesina de puerta.",
      description: "Outdoor living: pérgolas bioclimáticas, cenadores fijos y pabellones. Indique luz, postes, lamas manuales o motorizadas, drenaje y RAL. 6063-T5. Pabellones ICR: EN 1090. Cocheras y marquesinas son otras categorías.",
      features: ["Techo de lamas o fijo", "Estructura 6063-T5", "Motor opcional", "Lacado RAL o PVDF", "Medidas según plano"],
      applications: ["Jardines de villa", "Terrazas de restaurante", "Patios de hotel", "Salas exteriores"],
      faqs: [
        { question: "¿Pérgola = cochera?", answer: "No. La pérgola es ocio; la cochera es aparcamiento sin certificado de pabellón." },
        { question: "¿Motor y color RAL?", answer: "Sí. Lamas manuales o motorizadas según plano." },
      ],
    },
    "aluminum-fences": {
      name: "Valla de aluminio",
      summary: "Perímetro por modelo: privacidad, lamas, piquete, piscina y antiescalada.",
      description: "Cada ficha es un modelo distinto. Indique longitud, altura, módulo, postes y puertas. 6063-T5 lacado. Modelos ICR de valla: EN 1090.",
      features: ["Un modelo por ficha", "Privacidad, piscina o seguridad", "Paneles a altura de obra", "Lacado RAL", "Postes y puertas en el presupuesto"],
      applications: ["Perímetro de villa", "Línea de piscina", "Privacidad de jardín", "Límite comercial"],
      faqs: [
        { question: "¿Por qué tantas páginas?", answer: "Altura, relleno y fijación cambian; no son intercambiables." },
        { question: "¿Datos para cotizar?", answer: "Longitud, altura, estilo, postes, puertas y color." },
      ],
    },
    "aluminum-carports": {
      name: "Cochera de aluminio",
      summary: "Aparcamiento de una o dos plazas—no pérgola de ocio.",
      description: "Cocheras exentas: ancho de plaza, largo, altura libre, cubierta policarbonato/metal, viento o nieve. Sin EN 1090 de pabellón, portón o marquesina.",
      features: ["Una o dos plazas", "Cubierta policarbonato o metal", "Estructura exenta 6063-T5", "Medidas de entrada", "Embalaje export"],
      applications: ["Entradas de vivienda", "Parking de villa", "Lotes comerciales", "Drop-off de hotel"],
      faqs: [
        { question: "¿Dos coches?", answer: "Sí. Confirme ancho libre, largo y acceso." },
        { question: "¿Citar EN 1090 de pérgola?", answer: "No. Solo documentos del modelo de cochera." },
      ],
    },
    "aluminum-sliding-doors": {
      name: "Puerta corredera de aluminio",
      summary: "Hojas correderas y cancelas automáticas—no portones batientes.",
      description: "Para deslizamiento: puertas de patio/balcón y cancelas automáticas. Cotice hueco, carril, vidrio/panel y motor. No es la lista EN 1090 de portones sin confirmación escrita.",
      features: ["Puerta o cancela corredera", "Vidrio templado opcional", "Paquetes con motor", "Hueco a medida", "Perfiles lacados"],
      applications: ["Balcones de hotel", "Huecos de patio", "Cancelas de acceso", "Frentes comerciales"],
      faqs: [
        { question: "¿Diferencia con el portón?", answer: "El portón es identidad de entrada; aquí el foco es deslizar." },
        { question: "¿Motor en la cancela?", answer: "Sí. Indique hueco y alimentación." },
      ],
    },
    "aluminum-doors": {
      name: "Puerta y cancela de aluminio",
      summary: "Portones de patio según CAD—no correderas acristaladas.",
      description: "Identidad de entrada: portones de patio y acceso, batiente o corredera. Envíe CAD, hueco, hojas y acabado. Portones ICR: EN 1090. Correderas acristaladas van en la categoría corredera.",
      features: ["Portones de patio y acceso", "Batiente o corredera", "OEM según CAD", "Lacado exterior", "EN 1090 en modelos listados"],
      applications: ["Accesos de villa", "Portones de comunidad", "Portones de obra", "Fachada de vivienda"],
      faqs: [
        { question: "¿Según nuestro CAD?", answer: "Sí. Dibujo, hoja y herrajes siguen CAD y hueco." },
        { question: "¿Qué portones EN 1090?", answer: "Solo los del ICR de portones." },
      ],
    },
    awnings: {
      name: "Toldo y marquesina",
      summary: "Marquesinas con vuelo definido—no cocheras ni pérgolas grandes.",
      description: "Toldos de entrada/terraza con ancho y vuelo, marco lacado + policarbonato. Modelos ICR: EN 1090. Cocheras y pérgolas de lamas son otras categorías.",
      features: ["Cubierta de entrada y terraza", "Ancho y vuelo según plano", "Cubierta de policarbonato", "Marco 6063-T5 lacado", "EN 1090 en modelos listados"],
      applications: ["Marquesinas de puerta", "Toldos de ventana", "Terrazas de villa", "Entradas de local"],
      faqs: [
        { question: "¿Diferencia con cochera?", answer: "El toldo vuela del edificio; la cochera es aparcamiento exento." },
        { question: "¿Datos para cotizar?", answer: "Ancho, vuelo, altura, muro/poste y cubierta." },
      ],
    },
  },
  ["Material", "Superficie", "Precio de referencia", "Pedido mínimo"],
  "Aluminio 6063-T5",
  "Recubrimiento en polvo",
);

const fr = pack(
  {
    "aluminum-gazebos": {
      name: "Pergola et gazebo aluminium",
      summary: "Toits de vie extérieure à lames ou fixes—pas un carport ni une marquise de porte.",
      description: "Outdoor living : pergolas bioclimatiques, gazebos fixes et pavillons. Indiquez portée, poteaux, lames manuelles ou motorisées, drainage et RAL. 6063-T5. Pavillons ICR : EN 1090. Carports et marquises : autres catégories.",
      features: ["Toit à lames ou fixe", "Ossature 6063-T5", "Moteur optionnel", "Thermolaquage RAL ou PVDF", "Cotes sur plan"],
      applications: ["Jardins de villa", "Terrasses de restaurant", "Cours d’hôtel", "Pièces extérieures"],
      faqs: [
        { question: "Pergola = carport ?", answer: "Non. La pergola est un toit de séjour ; le carport est un abri parking." },
        { question: "Motoriser et RAL ?", answer: "Oui. Lames manuelles ou motorisées selon plan." },
      ],
    },
    "aluminum-fences": {
      name: "Clôture aluminium",
      summary: "Périmètres par modèle : occultation, lames, barreaux, piscine et anti-escalade.",
      description: "Chaque fiche est un modèle distinct. Indiquez longueur, hauteur, module, poteaux et portillons. 6063-T5 thermolaqué. Modèles ICR clôture : EN 1090.",
      features: ["Un modèle par fiche", "Occultation, piscine ou sécurité", "Panneaux à hauteur de chantier", "Thermolaquage RAL", "Poteaux et portillons au devis"],
      applications: ["Périmètre de villa", "Ligne de piscine", "Jardin occultant", "Limite commerciale"],
      faqs: [
        { question: "Pourquoi tant de pages ?", answer: "Hauteur, remplissage et fixations diffèrent." },
        { question: "Infos pour devis ?", answer: "Longueur, hauteur, style, poteaux, portillons et teinte." },
      ],
    },
    "aluminum-carports": {
      name: "Carport aluminium",
      summary: "Abris parking une ou deux places—pas des pergolas de séjour.",
      description: "Carports autoportants : largeur de place, longueur, hauteur libre, couverture polycarbonate/métal, notes vent/neige. Pas d’EN 1090 pavillon/portail/marquise.",
      features: ["Une ou deux places", "Toit polycarbonate ou métal", "Structure autoportante 6063-T5", "Cotes d’allée", "Emballage export"],
      applications: ["Allées résidentielles", "Parking de villa", "Petits parkings", "Dépose-minute hôtel"],
      faqs: [
        { question: "Deux voitures ?", answer: "Oui. Confirmez largeur libre, longueur et accès." },
        { question: "Citer EN 1090 pergola ?", answer: "Non. Uniquement les documents du modèle carport." },
      ],
    },
    "aluminum-sliding-doors": {
      name: "Porte coulissante aluminium",
      summary: "Vantaux coulissants et portails automatiques—pas des portails battants de cour.",
      description: "Pour le coulissement : portes patio/balcon et portails coulissants automatiques. Cotez ouverture, rail, vitrage/panneau et moteur. Pas la liste EN 1090 portail sans confirmation écrite.",
      features: ["Porte ou portail coulissant", "Vitrage trempé optionnel", "Packs motorisés", "Ouverture sur mesure", "Profils laqués"],
      applications: ["Balcons d’hôtel", "Ouvertures de patio", "Portails d’accès", "Façades commerciales"],
      faqs: [
        { question: "Différence avec le portail ?", answer: "Le portail vise l’entrée ; ici le focus est le coulissement." },
        { question: "Portail motorisé ?", answer: "Oui. Indiquez ouverture et alimentation." },
      ],
    },
    "aluminum-doors": {
      name: "Portail aluminium",
      summary: "Portails de cour selon CAO—pas des portes coulissantes vitrées.",
      description: "Identité d’entrée : portails de cour et d’accès, battants ou coulissants. Envoyez CAO, ouverture, vantaux et finition. Portails ICR : EN 1090. Les coulissants vitrés sont dans la catégorie coulissante.",
      features: ["Portails de cour et d’accès", "Battant ou coulissant", "OEM selon CAO", "Laquage extérieur", "EN 1090 sur modèles listés"],
      applications: ["Entrées de villa", "Portails de résidence", "Portails de chantier", "Façade maison"],
      faqs: [
        { question: "Selon notre CAO ?", answer: "Oui. Motif, vantail et quincaillerie suivent CAO et ouverture." },
        { question: "Quels portails EN 1090 ?", answer: "Uniquement ceux du ICR portail." },
      ],
    },
    awnings: {
      name: "Auvent et marquise",
      summary: "Marquises à projection définie—pas carports ni grandes pergolas.",
      description: "Auvents d’entrée/terrasse avec largeur et projection, cadre laqué + polycarbonate. Modèles marquise ICR : EN 1090. Carports et pergolas à lames : autres catégories.",
      features: ["Couverture entrée et terrasse", "Largeur et projection sur plan", "Couverture polycarbonate", "Cadre 6063-T5 laqué", "EN 1090 sur modèles listés"],
      applications: ["Marquises de porte", "Auvents de fenêtre", "Terrasses de villa", "Entrées de magasin"],
      faqs: [
        { question: "Différence avec carport ?", answer: "L’auvent déborde du bâtiment ; le carport est un abri parking." },
        { question: "Infos pour devis ?", answer: "Largeur, projection, hauteur, mur/poteau et couverture." },
      ],
    },
  },
  ["Matière", "Surface", "Prix indicatif", "Commande minimum"],
  "Aluminium 6063-T5",
  "Thermolaquage",
);

const de = pack(
  {
    "aluminum-gazebos": {
      name: "Alu-Pergola und Pavillon",
      summary: "Outdoor-Living mit Lamellen- oder Festdach—kein Carport und kein Türvordach.",
      description: "Outdoor-Living: bioklimatische Lamellenpergolen und feste Pavillons. Spannweite, Pfosten, manuelle/motorisierte Lamellen, Entwässerung und RAL. 6063-T5. ICR-Pavillons: EN 1090. Carports und Eingangsvordächer sind andere Kategorien.",
      features: ["Lamellen- oder Festdach", "Rahmen 6063-T5", "Motor optional", "RAL-Pulver oder PVDF", "Maße nach Plan"],
      applications: ["Villengärten", "Restaurantterrassen", "Hotelhöfe", "Outdoor-Räume"],
      faqs: [
        { question: "Pergola = Carport?", answer: "Nein. Pergolen sind Wohnüberdachungen; Carports sind Parkprodukte." },
        { question: "Motor und RAL?", answer: "Ja. Manuell oder motorisiert nach Zeichnung." },
      ],
    },
    "aluminum-fences": {
      name: "Alu-Zaun",
      summary: "Perimeter nach Modell: Sichtschutz, Lamellen, Staketen, Pool und Anti-Kletter.",
      description: "Jeder Eintrag ist ein eigenes Modell. Länge, Höhe, Modul, Pfosten und Tore angeben. 6063-T5 pulverbeschichtet. ICR-Zaunmodelle: EN 1090.",
      features: ["Ein Modell pro Seite", "Sichtschutz, Pool oder Sicherheit", "Felder auf Bauhöhe", "RAL-Pulver", "Pfosten und Tore im Angebot"],
      applications: ["Villenumgrenzung", "Poollinie", "Gartensichtschutz", "Gewerbegrenze"],
      faqs: [
        { question: "Warum so viele Seiten?", answer: "Höhe, Füllung und Befestigung unterscheiden sich." },
        { question: "Angaben für Angebot?", answer: "Länge, Höhe, Stil, Pfosten, Tore und Farbe." },
      ],
    },
    "aluminum-carports": {
      name: "Alu-Carport",
      summary: "Freistehende Ein- und Doppelstellplätze—keine Wohnpergola.",
      description: "Carports für Fahrzeuge: Stellplatzbreite, Länge, lichte Höhe, Dach Polycarbonat/Metall, Wind-/Schneehinweise. Kein EN-1090 von Pavillon, Tor oder Vordach.",
      features: ["Ein oder zwei Stellplätze", "Polycarbonat- oder Metalldach", "Freistehend 6063-T5", "Einfahrtsmaße", "Exportverpackung"],
      applications: ["Hauseinfahrten", "Villenparkplätze", "Kleine Gewerbehöfe", "Hotel-Drop-off"],
      faqs: [
        { question: "Doppelcarport?", answer: "Ja. Lichte Breite, Länge und Zufahrt bestätigen." },
        { question: "Pergola-EN-1090 zitieren?", answer: "Nein. Nur Dokumente des Carport-Modells." },
      ],
    },
    "aluminum-sliding-doors": {
      name: "Alu-Schiebetür",
      summary: "Schiebeflügel und Automatik-Schiebetore—keine Drehtore.",
      description: "Für Schiebebetrieb: Patio-/Balkontüren und Automatik-Schiebetore. Öffnung, Laufschiene, Glas/Füllung, Motor. Nicht die EN-1090-Torliste ohne Bestätigung.",
      features: ["Schiebetür oder Schiebetor", "ESG optional", "Motorpakete", "Öffnung nach Aufmaß", "Pulverbeschichtete Profile"],
      applications: ["Hotelbalkone", "Patio-Öffnungen", "Zufahrtstore", "Ladenfronten"],
      faqs: [
        { question: "Unterschied zum Hoftor?", answer: "Hoftore sind Eingangsidentität; hier geht es um Schieben." },
        { question: "Tor mit Motor?", answer: "Ja. Lichte Öffnung und Strom angeben." },
      ],
    },
    "aluminum-doors": {
      name: "Alu-Tor und Tür",
      summary: "Hof- und Einfahrtstore nach CAD—keine verglasten Schiebesysteme.",
      description: "Eingangsidentität: Hof- und Einfahrtstore, Dreh oder Schiebe. CAD, Öffnung, Flügel und Finish senden. ICR-Tore: EN 1090. Verglaste Schiebetüren gehören zur Kategorie Schiebetür.",
      features: ["Hof- und Einfahrtstore", "Dreh- oder Schiebe", "OEM nach CAD", "Außenpulver", "EN 1090 bei gelisteten Modellen"],
      applications: ["Villeneinfahrten", "Anlagentore", "Bautore", "Hausfront"],
      faqs: [
        { question: "Nach unserem CAD?", answer: "Ja. Motiv, Flügel und Beschlag folgen CAD und Öffnung." },
        { question: "Welche Tore EN 1090?", answer: "Nur Modelle auf der ICR-Torverifizierung." },
      ],
    },
    awnings: {
      name: "Vordach und Markise",
      summary: "Tür-/Fenstervordächer mit definierter Ausladung—keine Carports.",
      description: "Vordächer mit Breite und Ausladung, Rahmen mit Polycarbonat. ICR-Vordachmodelle: EN 1090. Carports und Lamellenpergolen sind andere Kategorien.",
      features: ["Eingangs- und Terrassenabdeckung", "Breite und Ausladung nach Plan", "Polycarbonat-Eindeckung", "Rahmen 6063-T5", "EN 1090 bei gelisteten Modellen"],
      applications: ["Türvordächer", "Fenstermarkisen", "Villenterrassen", "Ladeneingänge"],
      faqs: [
        { question: "Unterschied zum Carport?", answer: "Das Vordach kragt vom Gebäude; der Carport ist freistehender Parkplatz." },
        { question: "Angaben für Angebot?", answer: "Breite, Ausladung, Höhe, Wand/Pfosten und Eindeckung." },
      ],
    },
  },
  ["Werkstoff", "Oberfläche", "Richtpreis", "Mindestmenge"],
  "Aluminium 6063-T5",
  "Pulverbeschichtung",
);

const pt = pack(
  {
    "aluminum-gazebos": {
      name: "Pérgola e gazebo de alumínio",
      summary: "Coberturas de lazer com lâminas ou teto fixo—não é carport nem marquise de porta.",
      description: "Outdoor living: pérgolas bioclimáticas, gazebos fixos e pavilhões. Indique vão, postes, lâminas manuais ou motorizadas, drenagem e RAL. 6063-T5. Pavilhões ICR: EN 1090. Carports e marquises são outras categorias.",
      features: ["Telhado de lâminas ou fixo", "Estrutura 6063-T5", "Motor opcional", "Pintura RAL ou PVDF", "Medidas sob desenho"],
      applications: ["Jardins de villa", "Terraços de restaurante", "Pátios de hotel", "Salas exteriores"],
      faqs: [
        { question: "Pérgola = carport?", answer: "Não. A pérgola é lazer; o carport é estacionamento." },
        { question: "Motor e RAL?", answer: "Sim. Lâminas manuais ou motorizadas conforme desenho." },
      ],
    },
    "aluminum-fences": {
      name: "Cerca de alumínio",
      summary: "Perímetro por modelo: privacidade, lâminas, piquete, piscina e anti-escalada.",
      description: "Cada ficha é um modelo distinto. Indique comprimento, altura, módulo, postes e portões. 6063-T5 com pintura a pó. Modelos ICR de cerca: EN 1090.",
      features: ["Um modelo por ficha", "Privacidade, piscina ou segurança", "Painéis à altura da obra", "Pintura RAL", "Postes e portões no orçamento"],
      applications: ["Perímetro de villa", "Linha de piscina", "Privacidade de jardim", "Limite comercial"],
      faqs: [
        { question: "Por que tantas páginas?", answer: "Altura, preenchimento e fixação mudam." },
        { question: "Dados para orçar?", answer: "Comprimento, altura, estilo, postes, portões e cor." },
      ],
    },
    "aluminum-carports": {
      name: "Carport de alumínio",
      summary: "Estacionamento de uma ou duas vagas—não é pérgola de lazer.",
      description: "Carports independentes: largura da vaga, comprimento, altura livre, cobertura policarbonato/metal, vento/neve. Sem EN 1090 de pavilhão, portão ou marquise.",
      features: ["Uma ou duas vagas", "Cobertura policarbonato ou metal", "Estrutura independente 6063-T5", "Medidas da entrada", "Embalagem export"],
      applications: ["Entradas residenciais", "Estacionamento de villa", "Lotes comerciais", "Drop-off de hotel"],
      faqs: [
        { question: "Dois carros?", answer: "Sim. Confirme largura livre, comprimento e acesso." },
        { question: "Citar EN 1090 da pérgola?", answer: "Não. Só documentos do modelo de carport." },
      ],
    },
    "aluminum-sliding-doors": {
      name: "Porta de correr de alumínio",
      summary: "Folhas de correr e portões automáticos—não portões de batente.",
      description: "Para deslizar: portas de pátio/varanda e portões de correr automáticos. Orce vão, trilho, vidro/painel e motor. Não é a lista EN 1090 de portões sem confirmação escrita.",
      features: ["Porta ou portão de correr", "Vidro temperado opcional", "Pacotes com motor", "Vão sob medida", "Perfis pintados"],
      applications: ["Varandas de hotel", "Vãos de pátio", "Portões de acesso", "Frentes comerciais"],
      faqs: [
        { question: "Diferença do portão de pátio?", answer: "O portão é identidade de entrada; aqui o foco é deslizar." },
        { question: "Portão com motor?", answer: "Sim. Informe vão livre e energia." },
      ],
    },
    "aluminum-doors": {
      name: "Portão de alumínio",
      summary: "Portões de pátio sob CAD—não sistemas de correr envidraçados.",
      description: "Identidade de entrada: portões de pátio e acesso, batente ou correr. Envie CAD, vão, folhas e acabamento. Portões ICR: EN 1090. Portas de correr envidraçadas ficam na categoria de correr.",
      features: ["Portões de pátio e acesso", "Batente ou correr", "OEM sob CAD", "Pintura externa", "EN 1090 em modelos listados"],
      applications: ["Acessos de villa", "Portões de condomínio", "Portões de obra", "Fachada residencial"],
      faqs: [
        { question: "Segundo nosso CAD?", answer: "Sim. Desenho, folha e ferragens seguem CAD e vão." },
        { question: "Quais portões EN 1090?", answer: "Só os do ICR de portões." },
      ],
    },
    awnings: {
      name: "Toldo e marquise",
      summary: "Marquises com balanço definido—não carports nem grandes pérgolas.",
      description: "Toldos de entrada/terraço com largura e balanço, quadro pintado + policarbonato. Modelos ICR: EN 1090. Carports e pérgolas de lâminas são outras categorias.",
      features: ["Cobertura de entrada e terraço", "Largura e balanço sob desenho", "Cobertura de policarbonato", "Quadro 6063-T5 pintado", "EN 1090 em modelos listados"],
      applications: ["Marquises de porta", "Toldos de janela", "Terraços de villa", "Entradas de loja"],
      faqs: [
        { question: "Diferença do carport?", answer: "O toldo avança do edifício; o carport é estacionamento independente." },
        { question: "Dados para orçar?", answer: "Largura, balanço, altura, parede/poste e cobertura." },
      ],
    },
  },
  ["Material", "Superfície", "Preço de referência", "Pedido mínimo"],
  "Alumínio 6063-T5",
  "Pintura a pó",
);

const ru = pack(
  {
    "aluminum-gazebos": {
      name: "Алюминиевая пергола",
      summary: "Крыши для outdoor living с ламелями или глухие—не автонавес и не козырёк двери.",
      description: "Outdoor living: биоклиматические перголы, стационарные беседки. Укажите пролёт, стойки, ручные/моторные ламели, дренаж и RAL. 6063-T5. Павильоны ICR: EN 1090. Автонавесы и входные козырьки — другие категории.",
      features: ["Ламели или глухая крыша", "Каркас 6063-T5", "Мотор опционально", "RAL или PVDF", "Размеры по чертежу"],
      applications: ["Сады вилл", "Террасы ресторанов", "Дворы отелей", "Уличные комнаты"],
      faqs: [
        { question: "Пергола = навес для авто?", answer: "Нет. Пергола — для отдыха; навес — для парковки." },
        { question: "Мотор и RAL?", answer: "Да. Ламели вручную или с мотором по чертежу." },
      ],
    },
    "aluminum-fences": {
      name: "Алюминиевый забор",
      summary: "Периметр по моделям: приватность, ламели, штакетник, бассейн и антиподъём.",
      description: "Каждая карточка — отдельная модель. Укажите длину, высоту, модуль, столбы и калитки. 6063-T5 с порошковой окраской. Модели ICR забора: EN 1090.",
      features: ["Отдельная модель на странице", "Приватность, бассейн или охрана", "Панели по высоте объекта", "RAL порошок", "Столбы и калитки в расчёте"],
      applications: ["Периметр виллы", "Линия бассейна", "Садовая приватность", "Коммерческая граница"],
      faqs: [
        { question: "Зачем столько страниц?", answer: "Высота, заполнение и крепления разные." },
        { question: "Что нужно для расчёта?", answer: "Длина, высота, стиль, столбы, калитки и цвет." },
      ],
    },
    "aluminum-carports": {
      name: "Алюминиевый навес для авто",
      summary: "Парковка на одно–два авто—не пергола для отдыха.",
      description: "Отдельно стоящие навесы: ширина места, длина, высота, кровля поликарбонат/металл, ветер/снег. Без EN 1090 павильона, ворот или козырька.",
      features: ["Одно или два авто", "Поликарбонат или металл", "Отдельно стоящий 6063-T5", "Размеры подъезда", "Экспортная упаковка"],
      applications: ["Подъезды домов", "Парковка вилл", "Небольшие стоянки", "Drop-off отеля"],
      faqs: [
        { question: "На два авто?", answer: "Да. Подтвердите ширину, длину и подъезд." },
        { question: "Цитировать EN 1090 перголы?", answer: "Нет. Только документы модели навеса." },
      ],
    },
    "aluminum-sliding-doors": {
      name: "Алюминиевая раздвижная дверь",
      summary: "Раздвижные створки и автоматические откатные ворота—не распашные дворовые.",
      description: "Для сдвига: двери патио/балкона и автоматические откатные ворота. Укажите проём, направляющую, стекло/заполнение и мотор. Не список EN 1090 ворот без письменного подтверждения.",
      features: ["Дверь или откатные ворота", "Закалённое стекло опционально", "Пакеты с мотором", "Проём по замеру", "Окрашенный профиль"],
      applications: ["Балконы отелей", "Проёмы патио", "Въездные ворота", "Витрины"],
      faqs: [
        { question: "Отличие от дворовых ворот?", answer: "Дворовые ворота — образ входа; здесь фокус на сдвиге." },
        { question: "Ворота с мотором?", answer: "Да. Укажите проём и питание." },
      ],
    },
    "aluminum-doors": {
      name: "Алюминиевые ворота",
      summary: "Дворовые ворота по CAD—не остеклённые раздвижные системы.",
      description: "Образ входа: дворовые и въездные ворота, распашные или откатные. Пришлите CAD, проём, створки и отделку. Ворота ICR: EN 1090. Остеклённые раздвижные — в категории раздвижных дверей.",
      features: ["Дворовые и въездные ворота", "Распашные или откатные", "OEM по CAD", "Наружная окраска", "EN 1090 у перечисленных моделей"],
      applications: ["Въезды вилл", "Ворота посёлков", "Ворота площадок", "Фасад дома"],
      faqs: [
        { question: "По нашему CAD?", answer: "Да. Рисунок, створка и фурнитура по CAD и проёму." },
        { question: "Какие ворота EN 1090?", answer: "Только модели из ICR по воротам." },
      ],
    },
    awnings: {
      name: "Козырёк и навес",
      summary: "Козырьки с заданным вылетом—не автонавесы и не крупные перголы.",
      description: "Входные и террасные козырьки с шириной и вылетом, рама с поликарбонатом. Модели ICR: EN 1090. Автонавесы и ламельные перголы — другие категории.",
      features: ["Покрытие входа и террасы", "Ширина и вылет по чертежу", "Поликарбонат", "Рама 6063-T5", "EN 1090 у перечисленных моделей"],
      applications: ["Козырьки над дверью", "Навесы окон", "Террасы вилл", "Входы магазинов"],
      faqs: [
        { question: "Отличие от автонавеса?", answer: "Козырёк выносится от здания; автонавес — отдельно стоящая парковка." },
        { question: "Данные для расчёта?", answer: "Ширина, вылет, высота, стена/стойка и покрытие." },
      ],
    },
  },
  ["Материал", "Поверхность", "Ориентир цены", "Минимальный заказ"],
  "Алюминий 6063-T5",
  "Порошковая окраска",
);

const ar = pack(
  {
    "aluminum-gazebos": {
      name: "برجولا ومظلة ألمنيوم",
      summary: "أسقف معيشة خارجية بشفرات أو ثابتة—ليست مظلة سيارات ولا مظلة باب.",
      description: "للمعيشة الخارجية: برجولات مناخية وشرفات ثابتة. حدّدوا البحر والأعمدة والشفرات اليدوية أو بمحرك والصرف وRAL. 6063-T5. أجنحة ICR: EN 1090. مظلات السيارات ومداخل الأبواب فئات أخرى.",
      features: ["سقف شفرات أو ثابت", "هيكل 6063-T5", "محرك اختياري", "طلاء RAL أو PVDF", "مقاسات حسب المخطط"],
      applications: ["حدائق الفلل", "تراس المطاعم", "أفنية الفنادق", "غرف خارجية"],
      faqs: [
        { question: "هل البرجولا = مظلة سيارات؟", answer: "لا. البرجولا للمعيشة؛ مظلة السيارات للوقوف." },
        { question: "محرك ولون RAL؟", answer: "نعم. شفرات يدوية أو بمحرك حسب المخطط." },
      ],
    },
    "aluminum-fences": {
      name: "سياج ألمنيوم",
      summary: "حدود حسب الموديل: خصوصية وشفرات وأعمدة ومسبح ومضاد للتسلق.",
      description: "كل بطاقة موديل مستقل. اذكروا الطول والارتفاع والوحدة والأعمدة والأبواب. 6063-T5 بطلاء مسحوق. موديلات ICR للسياج: EN 1090.",
      features: ["موديل لكل صفحة", "خصوصية أو مسبح أو أمن", "ألواح بارتفاع الموقع", "طلاء RAL", "أعمدة وأبواب في العرض"],
      applications: ["حدود الفيلا", "خط المسبح", "خصوصية الحديقة", "حدود تجارية"],
      faqs: [
        { question: "لماذا صفحات كثيرة؟", answer: "الارتفاع والتعبئة والتثبيت تختلف." },
        { question: "بيانات العرض؟", answer: "الطول والارتفاع والطراز والأعمدة والأبواب واللون." },
      ],
    },
    "aluminum-carports": {
      name: "مظلة سيارات ألمنيوم",
      summary: "موقف لسيارة أو سيارتين—ليست برجولا للمعيشة.",
      description: "مظلات مستقلة: عرض الموقف والطول والارتفاع الحر والسقف بولي كربونات/معدن والرياح/الثلج. بلا EN 1090 للجناح أو البوابة أو مظلة المدخل.",
      features: ["سيارة أو سيارتان", "بولي كربونات أو معدن", "هيكل مستقل 6063-T5", "مقاسات المدخل", "تعبئة تصدير"],
      applications: ["مداخل المنازل", "مواقف الفلل", "ساحات صغيرة", "Drop-off الفندق"],
      faqs: [
        { question: "سيارتان؟", answer: "نعم. أكّدوا العرض الحر والطول والمسار." },
        { question: "استشهاد EN 1090 للبرجولا؟", answer: "لا. فقط وثائق موديل مظلة السيارات." },
      ],
    },
    "aluminum-sliding-doors": {
      name: "باب ألمنيوم منزلق",
      summary: "ضلف منزلقة وبوابات أوتوماتيكية—ليست بوابات مفصلية للفناء.",
      description: "للانزلاق: أبواب فناء/شرفة وبوابات منزلقة أوتوماتيكية. سعّروا الفتحة والمسار والزجاج/التعبئة والمحرك. ليست قائمة EN 1090 للبوابات دون تأكيد كتابي.",
      features: ["باب أو بوابة منزلقة", "زجاج مقسى اختياري", "حزم بمحرك", "فتحة حسب المقاس", "مقاطع مطلية"],
      applications: ["شرفات الفنادق", "فتحات الفناء", "بوابات الدخول", "واجهات تجارية"],
      faqs: [
        { question: "الفرق عن بوابة الفناء؟", answer: "بوابة الفناء لهوية المدخل؛ هنا التركيز على الانزلاق." },
        { question: "بوابة بمحرك؟", answer: "نعم. اذكروا الفتحة والطاقة." },
      ],
    },
    "aluminum-doors": {
      name: "بوابة ألمنيوم",
      summary: "بوابات فناء حسب CAD—ليست أنظمة منزلقة زجاجية.",
      description: "هوية المدخل: بوابات فناء ومداخل، مفصلية أو منزلقة. أرسلوا CAD والفتحة والضلف والتشطيب. بوابات ICR: EN 1090. الأبواب المنزلقة الزجاجية في فئة المنزلقة.",
      features: ["بوابات فناء ومداخل", "مفصلي أو منزلق", "OEM حسب CAD", "طلاء خارجي", "EN 1090 للموديلات المدرجة"],
      applications: ["مداخل الفلل", "بوابات المجمعات", "بوابات المواقع", "واجهة المنزل"],
      faqs: [
        { question: "حسب CAD لدينا؟", answer: "نعم. الرسم والضلفة والملحقات حسب CAD والفتحة." },
        { question: "أي بوابات EN 1090؟", answer: "فقط موديلات ICR للبوابات." },
      ],
    },
    awnings: {
      name: "مظلة ومدخل",
      summary: "مظلات ببروز محدد—ليست مظلات سيارات ولا برجولات كبيرة.",
      description: "مظلات مدخل وتراس بعرض وبروز، إطار مطلي + بولي كربونات. موديلات ICR: EN 1090. مظلات السيارات وبرجولات الشفرات فئات أخرى.",
      features: ["تغطية مدخل وتراس", "عرض وبروز حسب المخطط", "بولي كربونات", "إطار 6063-T5", "EN 1090 للموديلات المدرجة"],
      applications: ["مظلات أبواب", "مظلات نوافذ", "تراس الفلل", "مداخل المحلات"],
      faqs: [
        { question: "الفرق عن مظلة السيارات؟", answer: "المظلة تبرز من المبنى؛ مظلة السيارات موقف مستقل." },
        { question: "بيانات العرض؟", answer: "العرض والبروز والارتفاع والجدار/العمود والغطاء." },
      ],
    },
  },
  ["الخامة", "السطح", "سعر مرجعي", "الحد الأدنى"],
  "ألمنيوم 6063-T5",
  "طلاء مسحوق",
);

const ja = pack(
  {
    "aluminum-gazebos": {
      name: "アルミパーゴラ",
      summary: "ルーバーまたは固定のアウトドアリビング屋根。カーポートやドア庇ではありません。",
      description: "アウトドアリビング向け：バイオクライマティックなルーバーパーゴラと固定ガゼボ。スパン、柱、手動/電動ルーバー、排水、RAL を指定。6063-T5。ICR パビリオンは EN 1090。カーポートと入口庇は別カテゴリ。",
      features: ["ルーバーまたは固定屋根", "6063-T5 フレーム", "モーター任意", "RAL 粉体または PVDF", "図面寸法"],
      applications: ["ヴィラの庭", "レストランテラス", "ホテル中庭", "屋外リビング"],
      faqs: [
        { question: "パーゴラ＝カーポート？", answer: "いいえ。パーゴラは居住用屋根、カーポートは駐車です。" },
        { question: "モーターと RAL？", answer: "はい。手動または電動を図面どおりに。" },
      ],
    },
    "aluminum-fences": {
      name: "アルミフェンス",
      summary: "モデル別の境界：目隠し、ルーバー、縦桟、プール、よじ登り防止。",
      description: "各掲載は別モデル。長さ、高さ、モジュール、柱、門扉を提示。6063-T5 粉体。ICR フェンスは EN 1090。",
      features: ["型ごとに別ページ", "目隠し・プール・防犯", "現場高さのパネル", "RAL 粉体", "柱と門を見積に含める"],
      applications: ["ヴィラ境界", "プールライン", "庭の目隠し", "商業境界"],
      faqs: [
        { question: "なぜページが多い？", answer: "高さ・充填・固定が違うため。" },
        { question: "見積に必要な情報は？", answer: "長さ、高さ、スタイル、柱、門、色。" },
      ],
    },
    "aluminum-carports": {
      name: "アルミカーポート",
      summary: "1台・2台の駐車シェルター。居住用パーゴラではありません。",
      description: "独立カーポート：車幅、長さ、有効高さ、ポリカ/金属屋根、風雪条件。パビリオン/門/庇の EN 1090 は使いません。",
      features: ["1台または2台", "ポリカまたは金属屋根", "独立 6063-T5", "駐車寸法", "輸出梱包"],
      applications: ["住宅アプローチ", "ヴィラ駐車", "小規模駐車場", "ホテル降車場"],
      faqs: [
        { question: "2台用は？", answer: "はい。有効幅・長さ・動線を確認。" },
        { question: "パーゴラ EN 1090 を引用可？", answer: "不可。カーポート型番の書類のみ。" },
      ],
    },
    "aluminum-sliding-doors": {
      name: "アルミ引き戸",
      summary: "引き戸と自動スライドゲート。庭の開き門扉ではありません。",
      description: "スライド用途：パティオ/バルコニー引き戸と自動スライドゲート。開口、棚、ガラス/パネル、モーターを提示。書面確認なしに門の EN 1090 一覧とみなさないでください。",
      features: ["引き戸またはスライドゲート", "強化ガラス任意", "モーター付き", "開口寸法", "粉体形材"],
      applications: ["ホテルバルコニー", "パティオ開口", "進入ゲート", "店舗正面"],
      faqs: [
        { question: "門扉との違いは？", answer: "門扉は入口の顔、ここはスライド動作が焦点。" },
        { question: "ゲートにモーターは？", answer: "はい。有効開口と電源を提示。" },
      ],
    },
    "aluminum-doors": {
      name: "アルミ門扉",
      summary: "CAD による庭・進入門扉。ガラス引き戸システムではありません。",
      description: "入口の顔：庭門・主門・進入門（開き/引き）。CAD、開口、扉枚数、仕上げを送付。ICR 門は EN 1090。ガラス引き戸は引き戸カテゴリへ。",
      features: ["庭門と進入門", "開きまたは引き", "CAD OEM", "屋外粉体", "掲載型は EN 1090"],
      applications: ["ヴィラ入口", "団地ゲート", "現場ゲート", "住宅正面"],
      faqs: [
        { question: "CAD どおり？", answer: "はい。意匠・扉・金物は CAD と開口に従う。" },
        { question: "EN 1090 の門は？", answer: "ICR 門検証に載る型番のみ。" },
      ],
    },
    awnings: {
      name: "庇・オーニング",
      summary: "出幅が明確なドア・窓・テラス庇。カーポートや大型パーゴラではありません。",
      description: "入口・テラス庇は幅と出幅で見積。粉体フレーム＋ポリカが一般的。ICR 庇は EN 1090。カーポートとルーバーパーゴラは別カテゴリ。",
      features: ["入口とテラスの覆い", "幅と出幅を図面どおり", "ポリカ屋根", "6063-T5 フレーム", "掲載型は EN 1090"],
      applications: ["ドア庇", "窓オーニング", "ヴィラテラス", "店舗入口"],
      faqs: [
        { question: "カーポートとの違いは？", answer: "庇は建物から出る。カーポートは独立駐車。" },
        { question: "見積に必要な寸法は？", answer: "幅、出幅、取付高さ、壁/柱、屋根材。" },
      ],
    },
  },
  ["材質", "表面", "参考価格", "最小注文"],
  "6063-T5 アルミニウム",
  "粉体塗装",
);

const ko = pack(
  {
    "aluminum-gazebos": {
      name: "알루미늄 퍼골라",
      summary: "루버 또는 고정 아웃도어 리빙 지붕. 카포트나 문 캐노피가 아닙니다.",
      description: "아웃도어 리빙: 바이오클리매틱 루버 퍼골라와 고정 가제보. 경간, 기둥, 수동/전동 루버, 배수, RAL 지정. 6063-T5. ICR 파빌리온은 EN 1090. 카포트와 입구 캐노피는 다른 카테고리.",
      features: ["루버 또는 고정 지붕", "6063-T5 프레임", "모터 옵션", "RAL 분체 또는 PVDF", "도면 치수"],
      applications: ["빌라 정원", "레스토랑 테라스", "호텔 중정", "아웃도어 룸"],
      faqs: [
        { question: "퍼골라=카포트?", answer: "아니요. 퍼골라는 거주용 지붕, 카포트는 주차입니다." },
        { question: "모터와 RAL?", answer: "네. 수동 또는 전동을 도면대로." },
      ],
    },
    "aluminum-fences": {
      name: "알루미늄 펜스",
      summary: "모델별 경계: 프라이버시, 루버, 피켓, 수영장, 기어오름 방지.",
      description: "각 항목은 별도 모델. 길이, 높이, 모듈, 기둥, 대문 제시. 6063-T5 분체. ICR 펜스는 EN 1090.",
      features: ["모델별 페이지", "프라이버시·수영장·보안", "현장 높이 패널", "RAL 분체", "기둥·대문을 견적에 포함"],
      applications: ["빌라 경계", "수영장 라인", "정원 가림", "상업 경계"],
      faqs: [
        { question: "왜 페이지가 많나요?", answer: "높이·채움·고정이 다르기 때문입니다." },
        { question: "견적에 필요한 정보는?", answer: "길이, 높이, 스타일, 기둥, 대문, 색상." },
      ],
    },
    "aluminum-carports": {
      name: "알루미늄 카포트",
      summary: "1·2대 주차 셸터. 거주용 퍼골라가 아닙니다.",
      description: "독립 카포트: 주차 폭, 길이, 유효 높이, 폴리카/금속 지붕, 풍설 조건. 파빌리온/대문/캐노피 EN 1090 미사용.",
      features: ["1대 또는 2대", "폴리카 또는 금속 지붕", "독립 6063-T5", "진입 치수", "수출 포장"],
      applications: ["주택 진입로", "빌라 주차", "소규모 주차장", "호텔 드롭오프"],
      faqs: [
        { question: "2대용?", answer: "네. 유효 폭·길이·동선을 확인." },
        { question: "퍼골라 EN 1090 인용?", answer: "안 됩니다. 카포트 모델 서류만." },
      ],
    },
    "aluminum-sliding-doors": {
      name: "알루미늄 슬라이딩 도어",
      summary: "미닫이 문짝과 자동 슬라이딩 대문. 마당 여닫이 대문이 아닙니다.",
      description: "슬라이딩용: 파티오/발코니 미닫이문과 자동 슬라이딩 대문. 개구부, 레일, 유리/패널, 모터 제시. 서면 확인 없이 대문 EN 1090 목록으로 보지 마세요.",
      features: ["미닫이문 또는 슬라이딩 대문", "강화유리 옵션", "모터 패키지", "맞춤 개구부", "분체 프로파일"],
      applications: ["호텔 발코니", "파티오 개구", "진입 대문", "매장 전면"],
      faqs: [
        { question: "대문과의 차이는?", answer: "대문은 입구 이미지, 여기는 슬라이딩이 핵심." },
        { question: "대문에 모터?", answer: "네. 유효 개구와 전원을 제시." },
      ],
    },
    "aluminum-doors": {
      name: "알루미늄 대문",
      summary: "CAD 마당·진입 대문. 유리 미닫이 시스템이 아닙니다.",
      description: "입구 이미지: 마당·주·진입 대문(여닫이/슬라이딩). CAD, 개구, 문짝 수, 마감 제출. ICR 대문: EN 1090. 유리 미닫이는 슬라이딩 카테고리로.",
      features: ["마당·진입 대문", "여닫이 또는 슬라이딩", "CAD OEM", "실외 분체", "등재 모델 EN 1090"],
      applications: ["빌라 입구", "단지 대문", "현장 대문", "주택 정면"],
      faqs: [
        { question: "CAD대로?", answer: "네. 문양·문짝·하드웨어는 CAD와 개구를 따름." },
        { question: "EN 1090 대문은?", answer: "ICR 대문 검증에 오른 모델만." },
      ],
    },
    awnings: {
      name: "어닝·캐노피",
      summary: "돌출이 명확한 문·창·테라스 어닝. 카포트나 대형 퍼골라가 아닙니다.",
      description: "입구·테라스 어닝은 폭과 돌출로 견적. 분체 프레임+폴리카가 일반적. ICR 캐노피: EN 1090. 카포트와 루버 퍼골라는 다른 카테고리.",
      features: ["입구·테라스 커버", "폭·돌출 도면대로", "폴리카 지붕", "6063-T5 프레임", "등재 모델 EN 1090"],
      applications: ["문 캐노피", "창 어닝", "빌라 테라스", "매장 입구"],
      faqs: [
        { question: "카포트와 차이는?", answer: "어닝은 건물에서 돌출, 카포트는 독립 주차." },
        { question: "견적 치수는?", answer: "폭, 돌출, 설치 높이, 벽/기둥, 지붕재." },
      ],
    },
  },
  ["재질", "표면", "참고 가격", "최소 주문"],
  "6063-T5 알루미늄",
  "분체 도장",
);

const copies: Record<Locale, Record<CategorySlug, CategoryCopy>> = {
  en,
  zh,
  es,
  fr,
  de,
  pt,
  ru,
  ar,
  ja,
  ko,
};

export function getCategoryCopy(locale: string, slug: CategorySlug): CategoryCopy {
  const table = copies[locale as Locale] ?? en;
  return table[slug];
}
