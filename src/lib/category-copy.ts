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
      summary: "Motorized and fixed aluminum pergolas and gazebos for gardens, restaurants, and villas.",
      description:
        "Outdoor aluminum gazebos and pergolas from the Zhenlong catalog, including bioclimatic louvered roofs and fixed structures. Sizes, colors, and motor options are made to drawing.",
      features: ["6063-T5 aluminum frame", "Louvered or fixed roof", "Powder-coated finish", "Custom plan sizes"],
      applications: ["Villa gardens", "Restaurant terraces", "Hotel courtyards", "Residential backyards"],
      faqs: [
        {
          question: "Can the pergola size be customized?",
          answer: "Yes. Span, length, and height are produced from your drawings or site measurements.",
        },
      ],
    },
    "aluminum-fences": {
      name: "Aluminum Fence",
      summary: "Separate fence models: horizontal louver, slat privacy, vertical picket, pool barrier, and security fence.",
      description:
        "Each listing is a distinct fence model from the Zhenlong store, covering privacy screens, louvered panels, vertical pickets, pool fences, wood-grain slats, and anti-climb security fencing.",
      features: ["Separate models, not one generic fence", "Powder-coated colors", "Privacy or open picket", "Cut-to-size panels"],
      applications: ["Villa perimeters", "Pool safety", "Garden privacy", "Commercial boundaries"],
      faqs: [
        {
          question: "Are fence styles listed as separate models?",
          answer: "Yes. Horizontal louver, vertical slat, picket, pool, and security fences each have their own product page.",
        },
      ],
    },
    "aluminum-carports": {
      name: "Aluminum Carport",
      summary: "Single- and double-bay aluminum carports and parking canopies.",
      description:
        "Freestanding aluminum carports and garage canopies for one or two vehicles, with polycarbonate or metal roofs and powder-coated frames.",
      features: ["Single or double vehicle", "Polycarbonate or metal roof", "Freestanding frame", "Custom width and length"],
      applications: ["Home driveways", "Villa parking", "Commercial parking", "Hotel drop-off"],
      faqs: [
        {
          question: "Do you build double carports?",
          answer: "Yes. The catalog includes single shelters and double-vehicle parking canopies.",
        },
      ],
    },
    "aluminum-sliding-doors": {
      name: "Aluminum Sliding Door",
      summary: "Architectural sliding doors and automatic aluminum sliding gates.",
      description:
        "Aluminum sliding doors with tempered glazing, plus automatic sliding driveway gates for residential and hotel projects.",
      features: ["Sliding door or gate", "Tempered glazing options", "Powder-coated profiles", "Automatic gate options"],
      applications: ["Hotel balconies", "Villa entrances", "Driveway gates", "Commercial fronts"],
      faqs: [
        {
          question: "Are automatic sliding gates available?",
          answer: "Yes. Several listings are automatic aluminum sliding gates with powder-coated finishes.",
        },
      ],
    },
    "aluminum-doors": {
      name: "Aluminum Door & Gate",
      summary: "Courtyard entrance gates, main gates, and metal house gates.",
      description:
        "Aluminum courtyard and driveway gates, including sliding electric gates and decorative house gates for villas and communities.",
      features: ["Entrance and courtyard gates", "Sliding or swing layouts", "Custom CAD designs", "Outdoor powder coating"],
      applications: ["Villa entrances", "Community gates", "Ranch and site gates", "House front gates"],
      faqs: [
        {
          question: "Can gates be made from our drawings?",
          answer: "Yes. Entrance gates can be produced from your CAD drawings and site dimensions.",
        },
      ],
    },
    awnings: {
      name: "Awning & Canopy",
      summary: "Aluminum terrace awnings and door or window entrance canopies.",
      description:
        "Powder-coated aluminum awnings and canopies for villa terraces, patio doors, and window entrances, including polycarbonate covers.",
      features: ["Terrace and entrance covers", "Aluminum alloy frame", "Polycarbonate options", "Corrosion-resistant coating"],
      applications: ["Villa terraces", "Door canopies", "Window awnings", "Patio shelters"],
      faqs: [
        {
          question: "What roof materials are used on awnings?",
          answer: "Most awnings use a powder-coated aluminum frame with polycarbonate or similar weather covers.",
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
      summary: "电动百叶与固定顶铝艺凉亭、凉棚，适用于庭院、餐厅和别墅。",
      description: "来自振龙店铺的铝艺凉亭与 pergola，含电动百叶顶和固定顶。跨度、颜色和电机可按图纸定制。",
      features: ["6063-T5 铝型材框架", "百叶顶或固定顶", "粉末喷涂", "按图纸定制尺寸"],
      applications: ["别墅庭院", "餐厅露台", "酒店中庭", "住宅后院"],
      faqs: [{ question: "凉亭尺寸可以定制吗？", answer: "可以。跨度、长度和高度按图纸或现场尺寸生产。" }],
    },
    "aluminum-fences": {
      name: "铝艺围栏",
      summary: "围栏按型号分开：横百叶、格栅隐私、竖条、泳池围栏和安防围栏。",
      description: "每条产品都是店铺里的独立围栏型号，包括隐私屏、百叶板、竖条尖桩、泳池围栏、木纹格栅和防攀爬安防围栏。",
      features: ["按型号分开，不是一种通用围栏", "粉末喷涂配色", "隐私或镂空立柱", "可裁切板宽"],
      applications: ["别墅围界", "泳池安全", "庭院隐私", "商业边界"],
      faqs: [{ question: "围栏会按款式分开吗？", answer: "会。横百叶、竖条、尖桩、泳池和安防围栏各自有产品页。" }],
    },
    "aluminum-carports": {
      name: "铝艺车棚",
      summary: "单车位与双车位铝艺车棚、停车棚。",
      description: "独立式铝艺车棚和车库雨棚，覆盖单车与双车，顶面可选阳光板或金属板，框架粉末喷涂。",
      features: ["单车或双车", "阳光板或金属顶", "独立框架", "宽度和长度可定制"],
      applications: ["家用车道", "别墅停车", "商业停车", "酒店落客区"],
      faqs: [{ question: "有双车位车棚吗？", answer: "有。目录里包含单车棚和双车位停车棚。" }],
    },
    "aluminum-sliding-doors": {
      name: "铝艺推拉门",
      summary: "建筑推拉门，以及自动铝艺平移门。",
      description: "带钢化玻璃的铝艺推拉门，以及住宅和酒店用的自动车道平移门。",
      features: ["推拉门或平移门", "可选钢化玻璃", "粉末喷涂型材", "可选自动门机"],
      applications: ["酒店阳台", "别墅入口", "车道大门", "商业门面"],
      faqs: [{ question: "有自动平移门吗？", answer: "有。多款为粉末喷涂的自动铝艺平移门。" }],
    },
    "aluminum-doors": {
      name: "铝艺大门",
      summary: "庭院入口大门、主门和住宅金属门。",
      description: "铝艺庭院门和车道门，包括电动平移门和装饰住宅大门，适用于别墅和社区。",
      features: ["入口门与庭院门", "平移或平开", "按 CAD 定制", "户外粉末喷涂"],
      applications: ["别墅入口", "社区大门", "场地大门", "住宅正门"],
      faqs: [{ question: "大门可以按图纸做吗？", answer: "可以。入口大门可按 CAD 图纸和现场尺寸生产。" }],
    },
    awnings: {
      name: "雨棚 / 遮阳篷",
      summary: "铝艺露台雨棚，以及门窗入口遮阳篷。",
      description: "别墅露台、门斗和窗上入口用的粉末喷涂铝艺雨棚，可选阳光板顶。",
      features: ["露台与入口遮盖", "铝合金框架", "可选阳光板", "耐腐蚀涂层"],
      applications: ["别墅露台", "门口雨棚", "窗户遮阳", "庭院遮蔽"],
      faqs: [{ question: "雨棚顶面用什么材料？", answer: "多数为粉末喷涂铝框，配阳光板或同类防雨顶面。" }],
    },
  },
  ["材质", "表面", "参考价格", "起订量"],
  "6063-T5 铝合金",
  "粉末喷涂",
);

const es = pack(
  {
    "aluminum-gazebos": { name: "Pérgola y cenador de aluminio", summary: "Pérgolas motorizadas y fijas para jardines, restaurantes y villas.", description: "Cenadores y pérgolas de aluminio del catálogo Zhenlong, con cubierta bioclimática de lamas y estructuras fijas. Medidas, colores y motorización se fabrican según plano.", features: ["Estructura 6063-T5", "Cubierta de lamas o fija", "Recubrimiento en polvo", "Medidas a medida"], applications: ["Jardines", "Terrazas", "Hoteles", "Patios"], faqs: [{ question: "¿Se puede personalizar el tamaño de la pérgola?", answer: "Sí. El vano, la longitud y la altura se fabrican a partir de sus planos o de las medidas de obra." }] },
    "aluminum-fences": { name: "Valla de aluminio", summary: "Modelos separados: lama horizontal, privacidad, piquete, piscina y seguridad.", description: "Cada ficha es un modelo distinto de la tienda Zhenlong: pantallas de privacidad, paneles de lamas, piquetes verticales, vallas de piscina, lamas efecto madera y vallado de seguridad antiescalada.", features: ["Un modelo por ficha", "Colores en polvo", "Privacidad o piquete", "Paneles a medida"], applications: ["Perímetro", "Piscina", "Jardín", "Límite comercial"], faqs: [{ question: "¿Los estilos de valla aparecen como modelos separados?", answer: "Sí. Lama horizontal, lama vertical, piquete, piscina y seguridad tienen cada uno su página de producto." }] },
    "aluminum-carports": { name: "Cochera de aluminio", summary: "Cocheras de una o dos plazas y marquesinas de aparcamiento.", description: "Cocheras de aluminio exentas y marquesinas de garaje para uno o dos vehículos, con techo de policarbonato o metal y estructura lacada en polvo.", features: ["Una o dos plazas", "Techo de policarbonato o metal", "Estructura exenta", "Ancho y largo a medida"], applications: ["Entrada de casa", "Villa", "Aparcamiento", "Hotel"], faqs: [{ question: "¿Fabrican cocheras dobles?", answer: "Sí. El catálogo incluye refugios de una plaza y marquesinas para dos vehículos." }] },
    "aluminum-sliding-doors": { name: "Puerta corredera de aluminio", summary: "Puertas correderas arquitectónicas y cancelas automáticas.", description: "Puertas correderas de aluminio con vidrio templado, y cancelas correderas automáticas para viviendas y hoteles.", features: ["Puerta o cancela corredera", "Vidrio templado", "Perfiles lacados", "Opción automática"], applications: ["Balcones", "Accesos", "Entrada de coches", "Fachadas"], faqs: [{ question: "¿Hay cancelas correderas automáticas?", answer: "Sí. Varias fichas son cancelas correderas automáticas de aluminio con acabado en polvo." }] },
    "aluminum-doors": { name: "Puerta y cancela de aluminio", summary: "Cancelas de patio, puertas principales y portones de vivienda.", description: "Cancelas de patio y de acceso en aluminio, incluidas cancelas correderas eléctricas y portones decorativos para villas y comunidades.", features: ["Acceso y patio", "Corredera o batiente", "Diseño CAD", "Lacado exterior"], applications: ["Villa", "Comunidad", "Obra", "Fachada"], faqs: [{ question: "¿Se pueden fabricar las cancelas según nuestros planos?", answer: "Sí. Las cancelas de acceso se producen a partir de sus planos CAD y de las medidas de obra." }] },
    awnings: { name: "Toldo y marquesina", summary: "Toldos de terraza y marquesinas de puerta o ventana.", description: "Toldos y marquesinas de aluminio lacado para terrazas de villa, puertas de patio y entradas de ventana, con cubierta de policarbonato.", features: ["Terraza y entrada", "Marco de aluminio", "Policarbonato", "Acabado anticorrosión"], applications: ["Terrazas", "Puertas", "Ventanas", "Patios"], faqs: [{ question: "¿Qué material lleva el techo de los toldos?", answer: "La mayoría usa un marco de aluminio lacado en polvo con policarbonato u otra cubierta para intemperie." }] },
  },
  ["Material", "Superficie", "Precio de referencia", "Pedido mínimo"],
  "Aluminio 6063-T5",
  "Recubrimiento en polvo",
);

const fr = pack(
  {
    "aluminum-gazebos": { name: "Pergola et gazebo aluminium", summary: "Pergolas motorisées et fixes pour jardins, restaurants et villas.", description: "Gazebos et pergolas aluminium du catalogue Zhenlong, y compris toits bioclimatiques à lames et structures fixes. Dimensions, couleurs et motorisation sont réalisés sur plan.", features: ["Ossature 6063-T5", "Toit à lames ou fixe", "Thermolaquage", "Dimensions sur plan"], applications: ["Jardins", "Terrasses", "Hôtels", "Cours"], faqs: [{ question: "La taille de la pergola peut-elle être personnalisée ?", answer: "Oui. La portée, la longueur et la hauteur sont produites d'après vos plans ou les cotes du site." }] },
    "aluminum-fences": { name: "Clôture aluminium", summary: "Modèles séparés : lame horizontale, occultation, barreaux, piscine et sécurité.", description: "Chaque fiche est un modèle distinct de la boutique Zhenlong : écrans occultants, panneaux à lames, barreaux verticaux, clôtures de piscine, lames aspect bois et clôtures de sécurité anti-escalade.", features: ["Un modèle par fiche", "Couleurs thermolaquées", "Occultant ou barreaux", "Panneaux sur mesure"], applications: ["Périmètre", "Piscine", "Jardin", "Limite commerciale"], faqs: [{ question: "Les styles de clôture sont-ils des modèles séparés ?", answer: "Oui. Lame horizontale, lame verticale, barreaux, piscine et sécurité ont chacun leur page produit." }] },
    "aluminum-carports": { name: "Carport aluminium", summary: "Carports une ou deux places et auvents de stationnement.", description: "Carports aluminium autoportants et auvents de garage pour un ou deux véhicules, avec toit polycarbonate ou métal et ossature thermolaquée.", features: ["Une ou deux places", "Toit polycarbonate ou métal", "Structure autoportante", "Largeur et longueur sur mesure"], applications: ["Allée", "Villa", "Parking", "Hôtel"], faqs: [{ question: "Fabriquez-vous des carports doubles ?", answer: "Oui. Le catalogue comprend des abris simples et des auvents pour deux véhicules." }] },
    "aluminum-sliding-doors": { name: "Porte coulissante aluminium", summary: "Portes coulissantes et portails coulissants automatiques.", description: "Portes coulissantes aluminium à vitrage trempé, ainsi que portails coulissants automatiques pour maisons et hôtels.", features: ["Porte ou portail coulissant", "Vitrage trempé", "Profils laqués", "Option motorisée"], applications: ["Balcons", "Entrées", "Allées", "Façades"], faqs: [{ question: "Des portails coulissants automatiques sont-ils disponibles ?", answer: "Oui. Plusieurs fiches sont des portails coulissants automatiques en aluminium thermolaqué." }] },
    "aluminum-doors": { name: "Portail aluminium", summary: "Portails de cour, portes principales et portails de maison.", description: "Portails de cour et d'allée en aluminium, y compris portails coulissants électriques et portails décoratifs pour villas et résidences.", features: ["Entrée et cour", "Coulissant ou battant", "Plans CAO", "Laquage extérieur"], applications: ["Villa", "Résidence", "Chantier", "Façade"], faqs: [{ question: "Les portails peuvent-ils être fabriqués d'après nos plans ?", answer: "Oui. Les portails d'entrée sont produits à partir de vos plans CAO et des cotes du site." }] },
    awnings: { name: "Auvent et marquise", summary: "Auvents de terrasse et marquises de porte ou fenêtre.", description: "Auvents et marquises aluminium thermolaqués pour terrasses de villa, portes-fenêtres et entrées de fenêtre, avec couverture polycarbonate.", features: ["Terrasse et entrée", "Cadre aluminium", "Polycarbonate", "Finition anticorrosion"], applications: ["Terrasses", "Portes", "Fenêtres", "Cours"], faqs: [{ question: "Quels matériaux de toit sont utilisés sur les auvents ?", answer: "La plupart utilisent un cadre aluminium thermolaqué avec polycarbonate ou une couverture similaire pour l'extérieur." }] },
  },
  ["Matière", "Surface", "Prix indicatif", "Commande minimum"],
  "Aluminium 6063-T5",
  "Thermolaquage",
);

const de = pack(
  {
    "aluminum-gazebos": { name: "Alu-Pergola und Pavillon", summary: "Motorisierte und feste Pergolen für Gärten, Restaurants und Villen.", description: "Aluminium-Pavillons und Pergolen aus dem Zhenlong-Katalog, einschließlich bioklimatischer Lamellendächer und fester Konstruktionen. Maße, Farben und Motorisierung werden nach Zeichnung gefertigt.", features: ["Rahmen 6063-T5", "Lamellen- oder Festdach", "Pulverbeschichtung", "Maße nach Plan"], applications: ["Gärten", "Terrassen", "Hotels", "Höfe"], faqs: [{ question: "Kann die Pergolagröße angepasst werden?", answer: "Ja. Spannweite, Länge und Höhe werden nach Ihren Zeichnungen oder Aufmaßen gefertigt." }] },
    "aluminum-fences": { name: "Alu-Zaun", summary: "Getrennte Modelle: Horizontallamelle, Sichtschutz, Staketen, Pool und Sicherheit.", description: "Jeder Eintrag ist ein eigenes Zaunmodell aus dem Zhenlong-Shop: Sichtschutz, Lamellenfelder, senkrechte Staketen, Poolzäune, Holzoptik-Lamellen und klettersichere Sicherheitszäune.", features: ["Ein Modell pro Seite", "Pulverfarben", "Sichtschutz oder Staketen", "Zuschnitt"], applications: ["Grundstück", "Pool", "Garten", "Gewerbegrenze"], faqs: [{ question: "Werden Zaunstile als eigene Modelle geführt?", answer: "Ja. Horizontallamelle, Vertikallamelle, Stakete, Pool und Sicherheit haben jeweils eine eigene Produktseite." }] },
    "aluminum-carports": { name: "Alu-Carport", summary: "Einzel- und Doppelcarports sowie Parküberdachungen.", description: "Freistehende Aluminium-Carports und Garagenüberdachungen für ein oder zwei Fahrzeuge, mit Polycarbonat- oder Metalldach und pulverbeschichtetem Rahmen.", features: ["Ein oder zwei Fahrzeuge", "Polycarbonat- oder Metalldach", "Freistehend", "Breite und Länge nach Maß"], applications: ["Einfahrt", "Villa", "Parkplatz", "Hotel"], faqs: [{ question: "Bauen Sie Doppelcarports?", answer: "Ja. Der Katalog umfasst Einzelunterstände und Überdachungen für zwei Fahrzeuge." }] },
    "aluminum-sliding-doors": { name: "Alu-Schiebetür", summary: "Schiebetüren und automatische Schiebetore aus Aluminium.", description: "Aluminium-Schiebetüren mit ESG-Verglasung sowie automatische Schiebetore für Wohn- und Hotelprojekte.", features: ["Schiebetür oder Tor", "ESG-Verglasung", "Pulverbeschichtete Profile", "Automatik optional"], applications: ["Balkone", "Zugänge", "Einfahrten", "Fassaden"], faqs: [{ question: "Gibt es automatische Schiebetore?", answer: "Ja. Mehrere Einträge sind automatische Aluminium-Schiebetore mit Pulverbeschichtung." }] },
    "aluminum-doors": { name: "Alu-Tor und Tür", summary: "Hoftore, Haupttore und Haustore aus Aluminium.", description: "Aluminium-Hof- und Einfahrtstore, einschließlich elektrischer Schiebetore und dekorativer Haustore für Villen und Anlagen.", features: ["Eingang und Hof", "Schiebe- oder Drehtor", "CAD-Design", "Außenbeschichtung"], applications: ["Villa", "Anlage", "Baustelle", "Fassade"], faqs: [{ question: "Können Tore nach unseren Zeichnungen gefertigt werden?", answer: "Ja. Einfahrtstore werden nach Ihren CAD-Zeichnungen und den Maßen vor Ort gefertigt." }] },
    awnings: { name: "Vordach und Markise", summary: "Terrassenvordächer und Tür- oder Fenstermarkisen.", description: "Pulverbeschichtete Aluminium-Vordächer und Markisen für Villenterrassen, Terrassentüren und Fenstereingänge, auch mit Polycarbonat-Eindeckung.", features: ["Terrasse und Eingang", "Aluminiumrahmen", "Polycarbonat", "Korrosionsschutz"], applications: ["Terrassen", "Türen", "Fenster", "Höfe"], faqs: [{ question: "Welche Dachmaterialien werden bei Markisen verwendet?", answer: "Die meisten nutzen einen pulverbeschichteten Aluminiumrahmen mit Polycarbonat oder einer ähnlichen Wetterabdeckung." }] },
  },
  ["Werkstoff", "Oberfläche", "Richtpreis", "Mindestmenge"],
  "Aluminium 6063-T5",
  "Pulverbeschichtung",
);

const pt = pack(
  {
    "aluminum-gazebos": { name: "Pérgola e gazebo de alumínio", summary: "Pérgolas motorizadas e fixas para jardins, restaurantes e villas.", description: "Gazebos e pérgolas de alumínio do catálogo Zhenlong, incluindo coberturas bioclimáticas de lâminas e estruturas fixas. Medidas, cores e motorização são feitas conforme desenho.", features: ["Estrutura 6063-T5", "Telhado de lâminas ou fixo", "Pintura a pó", "Medidas sob desenho"], applications: ["Jardins", "Terraços", "Hotéis", "Pátios"], faqs: [{ question: "O tamanho da pérgola pode ser personalizado?", answer: "Sim. Vão, comprimento e altura são produzidos a partir dos seus desenhos ou das medidas da obra." }] },
    "aluminum-fences": { name: "Cerca de alumínio", summary: "Modelos separados: lâmina horizontal, privacidade, piquete, piscina e segurança.", description: "Cada ficha é um modelo distinto da loja Zhenlong: telas de privacidade, painéis de lâminas, piquetes verticais, cercas de piscina, lâminas com aspeto de madeira e cercas de segurança anti-escalada.", features: ["Um modelo por ficha", "Cores em pó", "Privacidade ou piquete", "Painéis sob medida"], applications: ["Perímetro", "Piscina", "Jardim", "Limite comercial"], faqs: [{ question: "Os estilos de cerca aparecem como modelos separados?", answer: "Sim. Lâmina horizontal, lâmina vertical, piquete, piscina e segurança têm cada um a sua página de produto." }] },
    "aluminum-carports": { name: "Carport de alumínio", summary: "Carports para um ou dois carros e coberturas de estacionamento.", description: "Carports de alumínio independentes e coberturas de garagem para um ou dois veículos, com telhado de policarbonato ou metal e estrutura pintada a pó.", features: ["Uma ou duas vagas", "Telhado de policarbonato ou metal", "Estrutura independente", "Largura e comprimento sob medida"], applications: ["Entrada", "Villa", "Estacionamento", "Hotel"], faqs: [{ question: "Fabricam carports duplos?", answer: "Sim. O catálogo inclui abrigos simples e coberturas para dois veículos." }] },
    "aluminum-sliding-doors": { name: "Porta de correr de alumínio", summary: "Portas de correr e portões automáticos de alumínio.", description: "Portas de correr de alumínio com vidro temperado e portões de correr automáticos para residências e hotéis.", features: ["Porta ou portão de correr", "Vidro temperado", "Perfis pintados", "Opção automática"], applications: ["Varandas", "Acessos", "Entrada de carros", "Fachadas"], faqs: [{ question: "Há portões de correr automáticos?", answer: "Sim. Várias fichas são portões de correr automáticos de alumínio com pintura a pó." }] },
    "aluminum-doors": { name: "Portão de alumínio", summary: "Portões de pátio, portas principais e portões residenciais.", description: "Portões de pátio e de acesso em alumínio, incluindo portões elétricos de correr e portões decorativos para villas e condomínios.", features: ["Entrada e pátio", "Correr ou abrir", "Desenho CAD", "Pintura externa"], applications: ["Villa", "Condomínio", "Obra", "Fachada"], faqs: [{ question: "Os portões podem ser feitos segundo os nossos desenhos?", answer: "Sim. Os portões de entrada são produzidos a partir dos seus desenhos CAD e das medidas da obra." }] },
    awnings: { name: "Toldo e marquise", summary: "Toldos de terraço e marquises de porta ou janela.", description: "Toldos e marquises de alumínio pintados a pó para terraços de villa, portas de pátio e entradas de janela, com cobertura de policarbonato.", features: ["Terraço e entrada", "Estrutura de alumínio", "Policarbonato", "Acabamento anticorrosão"], applications: ["Terraços", "Portas", "Janelas", "Pátios"], faqs: [{ question: "Que materiais de cobertura são usados nos toldos?", answer: "A maioria usa estrutura de alumínio pintada a pó com policarbonato ou cobertura semelhante para intempérie." }] },
  },
  ["Material", "Superfície", "Preço de referência", "Pedido mínimo"],
  "Alumínio 6063-T5",
  "Pintura a pó",
);

const ru = pack(
  {
    "aluminum-gazebos": { name: "Алюминиевая пергола", summary: "Моторизованные и стационарные перголы для садов, ресторанов и вилл.", description: "Алюминиевые беседки и перголы из каталога Zhenlong, включая биоклиматические ламельные крыши и стационарные конструкции. Размеры, цвета и мотор изготавливаются по чертежу.", features: ["Каркас 6063-T5", "Ламели или глухая крыша", "Порошковая окраска", "Размеры по чертежу"], applications: ["Сады", "Террасы", "Отели", "Дворы"], faqs: [{ question: "Можно ли изменить размер перголы?", answer: "Да. Пролёт, длина и высота изготавливаются по вашим чертежам или замерам объекта." }] },
    "aluminum-fences": { name: "Алюминиевый забор", summary: "Отдельные модели: горизонтальные ламели, экран, штакетник, бассейн и охрана.", description: "Каждая карточка — отдельная модель забора магазина Zhenlong: экраны приватности, ламельные панели, вертикальный штакетник, ограждения бассейна, ламели под дерево и противоподъёмные охранные заборы.", features: ["Отдельная модель", "Цвета порошковой окраски", "Экран или штакетник", "Панели в размер"], applications: ["Участок", "Бассейн", "Сад", "Коммерческая граница"], faqs: [{ question: "Стили забора указаны отдельными моделями?", answer: "Да. Горизонтальные ламели, вертикальные ламели, штакетник, бассейн и охрана имеют свою страницу товара." }] },
    "aluminum-carports": { name: "Алюминиевый навес для авто", summary: "Навесы на одно и два авто и парковочные козырьки.", description: "Отдельно стоящие алюминиевые навесы и гаражные козырьки на одно или два авто, с крышей из поликарбоната или металла и порошковым каркасом.", features: ["Одно или два авто", "Поликарбонат или металл", "Отдельно стоящий каркас", "Ширина и длина на заказ"], applications: ["Подъезд", "Вилла", "Парковка", "Отель"], faqs: [{ question: "Делаете ли вы навесы на два авто?", answer: "Да. В каталоге есть укрытия на одно авто и навесы на два." }] },
    "aluminum-sliding-doors": { name: "Алюминиевая раздвижная дверь", summary: "Раздвижные двери и автоматические откатные ворота.", description: "Алюминиевые раздвижные двери с закалённым стеклом и автоматические откатные ворота для домов и отелей.", features: ["Дверь или ворота", "Закалённое стекло", "Окрашенный профиль", "Автоматика"], applications: ["Балконы", "Входы", "Въезд", "Фасады"], faqs: [{ question: "Есть ли автоматические откатные ворота?", answer: "Да. Несколько позиций — автоматические алюминиевые откатные ворота с порошковой окраской." }] },
    "aluminum-doors": { name: "Алюминиевые ворота", summary: "Дворовые, въездные и домовые ворота из алюминия.", description: "Алюминиевые дворовые и въездные ворота, включая электрические откатные и декоративные ворота для вилл и посёлков.", features: ["Вход и двор", "Откатные или распашные", "Чертежи CAD", "Наружная окраска"], applications: ["Вилла", "Посёлок", "Площадка", "Фасад"], faqs: [{ question: "Можно ли изготовить ворота по нашим чертежам?", answer: "Да. Въездные ворота производятся по вашим чертежам CAD и размерам объекта." }] },
    awnings: { name: "Козырёк и навес", summary: "Навесы для террас и козырьки над дверями и окнами.", description: "Порошковые алюминиевые козырьки и навесы для террас вилл, дверей патио и оконных входов, в том числе с поликарбонатом.", features: ["Терраса и вход", "Алюминиевый каркас", "Поликарбонат", "Антикоррозийное покрытие"], applications: ["Террасы", "Двери", "Окна", "Дворы"], faqs: [{ question: "Из чего делают кровлю навесов?", answer: "Чаще всего это порошковый алюминиевый каркас с поликарбонатом или похожим уличным покрытием." }] },
  },
  ["Материал", "Поверхность", "Ориентир цены", "Минимальный заказ"],
  "Алюминий 6063-T5",
  "Порошковая окраска",
);

const ar = pack(
  {
    "aluminum-gazebos": { name: "برجولا ومظلة ألمنيوم", summary: "برجولات متحركة وثابتة للحدائق والمطاعم والفلل.", description: "شرفات ومظلات ألمنيوم من كتالوج Zhenlong، بما فيها أسقف شفرات مناخية وهياكل ثابتة. المقاسات والألوان والمحرك تُصنع حسب المخطط.", features: ["هيكل 6063-T5", "سقف شفرات أو ثابت", "طلاء مسحوق", "مقاسات حسب المخطط"], applications: ["حدائق", "تراس", "فنادق", "أفنية"], faqs: [{ question: "هل يمكن تخصيص مقاس البرجولا؟", answer: "نعم. البحر والطول والارتفاع تُنتج من مخططاتكم أو مقاسات الموقع." }] },
    "aluminum-fences": { name: "سياج ألمنيوم", summary: "موديلات منفصلة: شفرات أفقية، خصوصية، أعمدة، مسبح، وأمن.", description: "كل بطاقة موديل سياج مستقل من متجر Zhenlong: حواجز خصوصية، ألواح شفرات، أعمدة رأسية، سياج مسبح، شرائح بمظهر الخشب، وسياج أمني مانع للتسلق.", features: ["موديل لكل صفحة", "ألوان طلاء مسحوق", "خصوصية أو أعمدة", "ألواح حسب المقاس"], applications: ["حدود العقار", "مسبح", "حديقة", "حدود تجارية"], faqs: [{ question: "هل أنماط السياج مدرجة كموديلات منفصلة؟", answer: "نعم. الشفرات الأفقية والرأسية والأعمدة وسياج المسبح والأمن لكل منها صفحة منتج." }] },
    "aluminum-carports": { name: "مظلة سيارات ألمنيوم", summary: "مظلات لسيارة أو سيارتين ومواقف مغطاة.", description: "مظلات سيارات ألمنيوم قائمة بذاتها وتغطيات كراج لسيارة أو سيارتين، بسقف بولي كربونات أو معدن وهيكل بطلاء مسحوق.", features: ["سيارة أو سيارتان", "بولي كربونات أو معدن", "هيكل مستقل", "عرض وطول حسب الطلب"], applications: ["مدخل المنزل", "فيلا", "موقف", "فندق"], faqs: [{ question: "هل تصنعون مظلات لسيارتين؟", answer: "نعم. الكتالوج يشمل مظلات لسيارة واحدة وتغطيات لسيارتين." }] },
    "aluminum-sliding-doors": { name: "باب ألمنيوم منزلق", summary: "أبواب منزلقة وبوابات منزلقة أوتوماتيكية.", description: "أبواب ألمنيوم منزلقة بزجاج مقسى، وبوابات منزلقة أوتوماتيكية للمشاريع السكنية والفنادق.", features: ["باب أو بوابة منزلقة", "زجاج مقسى", "مقاطع مطلية", "خيار أوتوماتيكي"], applications: ["شرفات", "مداخل", "ممرات سيارات", "واجهات"], faqs: [{ question: "هل تتوفر بوابات منزلقة أوتوماتيكية؟", answer: "نعم. عدة بطاقات هي بوابات ألمنيوم منزلقة أوتوماتيكية بطلاء مسحوق." }] },
    "aluminum-doors": { name: "بوابة ألمنيوم", summary: "بوابات فناء ومداخل رئيسية وبوابات منازل.", description: "بوابات فناء ومداخل من الألمنيوم، بما فيها بوابات منزلقة كهربائية وبوابات منزل مزخرفة للفلل والمجمعات.", features: ["مدخل وفناء", "منزلق أو مفصلي", "تصميم CAD", "طلاء خارجي"], applications: ["فيلا", "مجمع", "موقع", "واجهة"], faqs: [{ question: "هل يمكن صنع البوابات حسب مخططاتنا؟", answer: "نعم. بوابات المدخل تُنتج من مخططات CAD ومقاسات الموقع." }] },
    awnings: { name: "مظلة ومدخل", summary: "مظلات تراس وتغطيات أبواب ونوافذ.", description: "مظلات ألمنيوم بطلاء مسحوق لشرفات الفلل وأبواب الفناء ومداخل النوافذ، مع تغطية بولي كربونات.", features: ["تراس ومدخل", "إطار ألمنيوم", "بولي كربونات", "طلاء مقاوم للتآكل"], applications: ["تراس", "أبواب", "نوافذ", "أفنية"], faqs: [{ question: "ما مواد سقف المظلات؟", answer: "معظمها إطار ألمنيوم بطلاء مسحوق مع بولي كربونات أو غطاء مماثل للعوامل الجوية." }] },
  },
  ["الخامة", "السطح", "سعر مرجعي", "الحد الأدنى"],
  "ألمنيوم 6063-T5",
  "طلاء مسحوق",
);

const ja = pack(
  {
    "aluminum-gazebos": { name: "アルミパーゴラ", summary: "庭・レストラン・ヴィラ向けの電動および固定パーゴラ。", description: "Zhenlong カタログのアルミガゼボとパーゴラです。バイオクライマティックのルーバー屋根と固定構造を含みます。寸法、色、モーターは図面どおりに製作します。", features: ["6063-T5 フレーム", "ルーバーまたは固定屋根", "粉体塗装", "図面寸法"], applications: ["庭", "テラス", "ホテル", "中庭"], faqs: [{ question: "パーゴラのサイズは特注できますか？", answer: "はい。スパン、長さ、高さは図面または現場寸法から製作します。" }] },
    "aluminum-fences": { name: "アルミフェンス", summary: "横ルーバー、目隠し、縦桟、プール、防犯を型番ごとに分離。", description: "各掲載は Zhenlong 店舗の別モデルです。目隠し、ルーバーパネル、縦桟、プールフェンス、木目スラット、よじ登り防止の防犯フェンスを含みます。", features: ["型ごとに別ページ", "粉体カラー", "目隠しまたは縦桟", "寸法カット"], applications: ["敷地境界", "プール", "庭", "商業境界"], faqs: [{ question: "フェンスのスタイルは別モデルとして掲載されていますか？", answer: "はい。横ルーバー、縦スラット、ピケット、プール、防犯はそれぞれ商品ページがあります。" }] },
    "aluminum-carports": { name: "アルミカーポート", summary: "1台用・2台用カーポートと駐車キャノピー。", description: "1台または2台用の独立型アルミカーポートとガレージキャノピーです。ポリカまたは金属屋根、粉体塗装フレームです。", features: ["1台または2台", "ポリカまたは金属屋根", "独立フレーム", "幅と長さを特注"], applications: ["駐車", "ヴィラ", "駐車場", "ホテル"], faqs: [{ question: "2台用カーポートはありますか？", answer: "はい。カタログに1台用シェルターと2台用駐車キャノピーがあります。" }] },
    "aluminum-sliding-doors": { name: "アルミ引き戸", summary: "建築用引き戸と自動アルミ引き戸ゲート。", description: "強化ガラスのアルミ引き戸と、住宅・ホテル向けの自動引き戸ゲートです。", features: ["引き戸またはゲート", "強化ガラス", "粉体塗装形材", "自動オプション"], applications: ["バルコニー", "入口", "車路", "ファサード"], faqs: [{ question: "自動スライドゲートはありますか？", answer: "はい。粉体塗装の自動アルミ引き戸ゲートが複数あります。" }] },
    "aluminum-doors": { name: "アルミ門扉", summary: "中庭・主門・住宅用のアルミ門扉。", description: "中庭と車路のアルミ門扉です。電動引き戸と、ヴィラや集合住宅向けの装飾門扉を含みます。", features: ["入口と中庭", "引き戸または開き戸", "CAD 製作", "屋外粉体塗装"], applications: ["ヴィラ", "集合住宅", "敷地", "正面"], faqs: [{ question: "図面どおりに門扉を作れますか？", answer: "はい。入口門扉は CAD 図面と現場寸法から製作できます。" }] },
    awnings: { name: "庇・オーニング", summary: "テラス庇とドア・窓の入口キャノピー。", description: "ヴィラのテラス、パティオドア、窓入口向けの粉体塗装アルミ庇で、ポリカーボネート屋根を含みます。", features: ["テラスと入口", "アルミフレーム", "ポリカーボネート", "耐食塗装"], applications: ["テラス", "ドア", "窓", "中庭"], faqs: [{ question: "オーニングの屋根材は何ですか？", answer: "多くは粉体塗装のアルミフレームに、ポリカーボネートまたは同等の耐候カバーです。" }] },
  },
  ["材質", "表面", "参考価格", "最小注文"],
  "6063-T5 アルミニウム",
  "粉体塗装",
);

const ko = pack(
  {
    "aluminum-gazebos": { name: "알루미늄 퍼골라", summary: "정원, 레스토랑, 빌라용 전동 및 고정 퍼골라.", description: "Zhenlong 카탈로그의 알루미늄 가제보와 퍼골라입니다. 바이오클리매틱 루버 지붕과 고정 구조를 포함하며, 치수·색상·모터는 도면대로 제작합니다.", features: ["6063-T5 프레임", "루버 또는 고정 지붕", "분체 도장", "도면 치수"], applications: ["정원", "테라스", "호텔", "마당"], faqs: [{ question: "퍼골라 크기를 맞출 수 있나요?", answer: "예. 경간, 길이, 높이는 도면 또는 현장 치수로 제작합니다." }] },
    "aluminum-fences": { name: "알루미늄 펜스", summary: "가로 루버, 프라이버시, 세로 피켓, 수영장, 보안을 모델별로 분리.", description: "각 항목은 Zhenlong 스토어의 별도 모델입니다. 프라이버시 스크린, 루버 패널, 세로 피켓, 수영장 펜스, 나뭇결 슬랫, 기어오름 방지 보안 펜스를 포함합니다.", features: ["모델별 페이지", "분체 색상", "가림 또는 피켓", "규격 재단"], applications: ["부지 경계", "수영장", "정원", "상업 경계"], faqs: [{ question: "펜스 스타일이 모델별로 나뉘어 있나요?", answer: "예. 가로 루버, 세로 슬랫, 피켓, 수영장, 보안은 각각 제품 페이지가 있습니다." }] },
    "aluminum-carports": { name: "알루미늄 카포트", summary: "1대·2대 카포트와 주차 캐노피.", description: "1대 또는 2대용 독립형 알루미늄 카포트와 차고 캐노피입니다. 폴리카보네이트 또는 금속 지붕, 분체 도장 프레임입니다.", features: ["1대 또는 2대", "폴리카보네이트 또는 금속 지붕", "독립 프레임", "폭·길이 맞춤"], applications: ["진입로", "빌라", "주차장", "호텔"], faqs: [{ question: "2대용 카포트를 만드나요?", answer: "예. 카탈로그에 1대용 셸터와 2대용 주차 캐노피가 있습니다." }] },
    "aluminum-sliding-doors": { name: "알루미늄 슬라이딩 도어", summary: "건축용 미닫이문과 자동 슬라이딩 대문.", description: "강화 유리 알루미늄 미닫이문과 주거·호텔용 자동 슬라이딩 대문입니다.", features: ["미닫이문 또는 대문", "강화 유리", "분체 프로파일", "자동 옵션"], applications: ["발코니", "출입구", "차량 진입", "파사드"], faqs: [{ question: "자동 슬라이딩 대문이 있나요?", answer: "예. 여러 항목이 분체 도장 자동 알루미늄 슬라이딩 대문입니다." }] },
    "aluminum-doors": { name: "알루미늄 대문", summary: "마당 출입문, 주 대문, 주택 금속 대문.", description: "마당과 진입로 알루미늄 대문입니다. 전동 슬라이딩 대문과 빌라·단지의 장식 대문을 포함합니다.", features: ["출입과 마당", "슬라이딩 또는 여닫이", "CAD 제작", "실외 분체 도장"], applications: ["빌라", "단지", "부지", "정면"], faqs: [{ question: "도면대로 대문을 만들 수 있나요?", answer: "예. 출입 대문은 CAD 도면과 현장 치수로 제작합니다." }] },
    awnings: { name: "어닝·캐노피", summary: "테라스 어닝과 문·창 입구 캐노피.", description: "빌라 테라스, 파티오 문, 창 입구용 분체 도장 알루미늄 어닝과 캐노피입니다. 폴리카보네이트 덮개를 포함합니다.", features: ["테라스와 입구", "알루미늄 프레임", "폴리카보네이트", "내식 도장"], applications: ["테라스", "문", "창", "마당"], faqs: [{ question: "어닝 지붕 재료는 무엇인가요?", answer: "대부분은 분체 도장 알루미늄 프레임에 폴리카보네이트 또는 비슷한 내후 커버입니다." }] },
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
