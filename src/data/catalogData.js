export const COMPANY_INFO = {
  name: "CENKAMAK San. Tic. Ltd. Şti.",
  shortName: "CENKAMAK",
  tagline: {
    tr: "DIŞ CEPHE ÇALIŞMA PLATFORMLARI",
    en: "FACADE WORK PLATFORMS"
  },
  heroSlogan: {
    tr: "Yüksekte Güven, Şantiyede Maksimum Verimlilik",
    en: "Safety at Height, Maximum Efficiency on Site"
  },
  heroSubtext: {
    tr: "St52 (S355JR) yüksek mukavemetli çelik gövde, otomatik platform dengeleme otomasyonu ve çift kademeli paraşüt fren sistemiyle güvenli dış cephe erişim çözümleri.",
    en: "Safe facade access solutions engineered with St52 (S355JR) high-tensile steel structure, automatic platform leveling automation, and dual-stage parachute braking systems."
  },
  phone: "0532 401 7872",
  email: "info@cenkamak.com",
  secondaryEmail: "cenkamak@hotmail.com",
  instagram: "cenkamak_makine",
  website: "www.cenkamak.com",
  stats: [
    {
      value: 150,
      suffix: "+ m",
      label: { tr: "Maksimum Yükseklik", en: "Maximum Height" },
      sub: { tr: "Özel Cephe Ankrajlı Platform", en: "Custom Facade Anchored Platform" }
    },
    {
      value: 30,
      suffix: " m",
      label: { tr: "Azami Cephe Genişliği", en: "Maximum Facade Span" },
      sub: { tr: "Çift Kolonlu Çalışma Platformu", en: "Twin Column Work Platform" }
    },
    {
      value: 12,
      suffix: " m/dk",
      suffixEn: " m/min",
      label: { tr: "Dikey Tırmanma Hızı", en: "Vertical Climbing Speed" },
      sub: { tr: "4x2.2 kW Senkron Kremayer Tahrik", en: "4x2.2 kW Sync Rack-and-Pinion Drive" }
    },
    {
      value: 10,
      suffix: "+ Ülke",
      suffixEn: "+ Countries",
      label: { tr: "Uluslararası İhracat", en: "Global Exports" },
      sub: { tr: "Ortadoğu & Türk Cumhuriyetleri", en: "Middle East & Turkic Republics" }
    }
  ],
  corporateStory: {
    tr: [
      "Kahramanmaraş merkezli bir firma olan CENKAMAK, genç ve çağdaş kadrosu, geniş vizyonlu kararlı yapısı ile başarı grafiğini emin adımlarla yükseltmektedir.",
      "CENKAMAK yatırımları sürekli olarak geliştirerek, yurt içindeki başarısını yurt dışına da taşımıştır. Bugün ağırlıklı olarak Ortadoğu ülkeleri ve Türk Cumhuriyetlerine yaptığı ihracatları ile dış pazar payını her geçen gün arttırmaktadır.",
      "CENKAMAK 7 yılı aşkın tecrübesiyle yapmış olduğu kaliteli üretimiyle Türkiye ve Dünya pazarına farklı bir boyut getirmiştir.",
      "CENKAMAK satış sonrası yedek parça ve servis hizmetine çok önem vermekle birlikte, yetkili servislerdeki orijinal yedek parçalarda iş ortaklarımıza ekonomik ve kesin çözümler sunmaktadır."
    ],
    en: [
      "Based in Kahramanmaraş, CENKAMAK takes firm steps forward in its success chart with its young, contemporary engineering team, broad vision, and determined structure.",
      "CENKAMAK continuously expands its industrial investments, carrying its domestic leadership abroad with growing market share across Middle Eastern countries and Turkic Republics.",
      "With high-precision manufacturing backed by deep field experience, CENKAMAK has brought a new dimension to the Turkish and global vertical access market.",
      "CENKAMAK places paramount importance on after-sales spare parts and technical service, providing economical and definitive solutions with 100% original spare parts through authorized service centers."
    ]
  }
};

export const PRODUCTS = [
  {
    id: "twin-platform",
    code: "CK-ÇİFT KOLON",
    badge: { tr: "30 METRE CEPHE • EN 1495", en: "30M FACADE SPAN • EN 1495" },
    name: {
      tr: "Çift Kolonlu Dış Cephe Platformu (Twin Work Platform)",
      en: "Twin Column Facade Work Platform"
    },
    shortName: {
      tr: "Çift Kolonlu Platform",
      en: "Twin Work Platform"
    },
    category: "platform",
    steelGrade: "St52 (S355JR)",
    capacity: {
      tr: "2.000 – 3.000 kg (Genişliğe Göre)",
      en: "2,000 – 3,000 kg (Span Dependent)"
    },
    image: "catalog/product-twin-platform.jpg",
    secondaryImage: "catalog/project-twin-upward.jpg",
    gallery: [
      "catalog/product-twin-platform.jpg",
      "catalog/project-twin-upward.jpg",
      "catalog/project-twin-skyscraper.jpg"
    ],
    summary: {
      tr: "Yeni inşaat projelerinde ve mevcut binaların bakım, onarım, cam, alüminyum, granit kaplama, mantolama, boyama ve sıvama işlerinde 30 metre uzunluğa ve 150m+ yüksekliğe ulaşan çift kolonlu cephe platformu.",
      en: "Double-column mast climbing work platform spanning up to 30m in width and 150m+ in height for glass curtain wall installation, granite cladding, insulation, painting, and facade maintenance."
    },
    highlights: [
      { label: { tr: "Maks. Yükseklik", en: "Max Height" }, value: "150 m (Özel: 150m+)" },
      { label: { tr: "Taşıma Kapasitesi", en: "Payload Capacity" }, value: "2.000 – 3.000 kg" },
      { label: { tr: "Azami Genişlik", en: "Max Span Width" }, value: "30 m (Derinlik: 1360mm)" },
      { label: { tr: "Çalışma Hızı", en: "Climbing Speed" }, value: "12 m/dk" },
      { label: { tr: "Motor Gücü", en: "Motor Power" }, value: "4 x 2.2 kW" },
      { label: { tr: "Ankraj Mesafesi", en: "Tie Interval" }, value: "6 m" }
    ],
    fullSpecs: [
      { key: { tr: "Taşıma Kapasitesi / Payload Capacity", en: "Payload Capacity (Span Dependent)" }, val: "2.000 kg – 3.000 kg (Kurulum Genişliğine Göre)" },
      { key: { tr: "Maksimum Yükseklik / Maximum Height", en: "Maximum Height" }, val: "150 m (Özel ankraj ile 150m+)" },
      { key: { tr: "Azami Genişlik / Maximum Width", en: "Maximum Platform Length" }, val: "30 m" },
      { key: { tr: "Platform Genişliği / Platform Width", en: "Platform Deck Depth" }, val: "1360 mm" },
      { key: { tr: "Hız / Nominal Speed", en: "Nominal Climbing Speed" }, val: "12 m/dk" },
      { key: { tr: "Motor Gücü / Power of Motor", en: "Motor Power" }, val: "4 x 2.2 kW" },
      { key: { tr: "Voltaj / Voltage", en: "Operating Voltage" }, val: "380 V (3 Faz)" },
      { key: { tr: "Tüketilen Güç / Maximum Current", en: "Maximum Current" }, val: "12 A" },
      { key: { tr: "Platform Bölümü Ölçüler / Dimensions", en: "Modular Deck Section Size" }, val: "1500 x 1360 mm" },
      { key: { tr: "Platform Modül Ağırlığı", en: "Chassis Module Weight" }, val: "75 kg" },
      { key: { tr: "Komple Ağırlık (Zemin Sacı + Arka Korkuluk)", en: "Complete Deck Weight (Floor + Barrier)" }, val: "125 kg" },
      { key: { tr: "Uzatma Bölümü / Extension", en: "Standard Extension" }, val: "900 mm" },
      { key: { tr: "Özel Uzatma (Opsiyonel) / Special Extension", en: "Special Extension (Optional)" }, val: "1800 mm" },
      { key: { tr: "Kolon (Mast) Ölçüleri", en: "Mast Section Dimensions" }, val: "525 x 525 x 1500 mm" },
      { key: { tr: "Kolon (Mast) Ağırlığı", en: "Mast Section Weight" }, val: "74 kg" },
      { key: { tr: "Bağlantı Mesafesi / Freestanding Height", en: "Tie Interval / Freestanding" }, val: "6 m" }
    ]
  },
  {
    id: "single-platform",
    code: "CK-TEK KOLON",
    badge: { tr: "KOMPAKT & EKONOMİK • EN 1495", en: "COMPACT & AGILE • EN 1495" },
    name: {
      tr: "Tek Kolonlu Dış Cephe Platformu (Single Work Platform)",
      en: "Single Column Facade Work Platform"
    },
    shortName: {
      tr: "Tek Kolonlu Platform",
      en: "Single Work Platform"
    },
    category: "platform",
    steelGrade: "St52 (S355JR)",
    capacity: {
      tr: "1.000 – 1.500 kg",
      en: "1,000 – 1,500 kg"
    },
    image: "catalog/product-single-platform-1.jpg",
    secondaryImage: "catalog/product-single-platform-2.jpg",
    gallery: [
      "catalog/product-single-platform-1.jpg",
      "catalog/product-single-platform-2.jpg",
      "catalog/part-chassis-rollers.jpg"
    ],
    summary: {
      tr: "Dar cepheler, apartman blokları ve hızlı kurulum gerektiren şantiyeler için 10 metre genişliğe ve 150 metre yüksekliğe kadar tek kolon üzerinde maksimum verimlilik sağlayan dış cephe platformu.",
      en: "Single-mast climbing platform engineered for narrow facades, residential towers, and rapid-deployment maintenance works up to 10m platform span and 150m height."
    },
    highlights: [
      { label: { tr: "Maks. Yükseklik", en: "Max Height" }, value: "150 m" },
      { label: { tr: "Taşıma Kapasitesi", en: "Payload Capacity" }, value: "1.000 – 1.500 kg" },
      { label: { tr: "Azami Genişlik", en: "Max Span Width" }, value: "10 m (Derinlik: 1360mm)" },
      { label: { tr: "Çalışma Hızı", en: "Climbing Speed" }, value: "12 m/dk" },
      { label: { tr: "Motor Gücü", en: "Motor Power" }, value: "2 x 2.2 kW" },
      { label: { tr: "Ankraj Mesafesi", en: "Tie Interval" }, value: "6 m" }
    ],
    fullSpecs: [
      { key: { tr: "Taşıma Kapasitesi / Payload Capacity", en: "Payload Capacity" }, val: "1.000 kg – 1.500 kg (Platform Uzunluğuna Göre)" },
      { key: { tr: "Maksimum Yükseklik / Maximum Height", en: "Maximum Height" }, val: "150 m (Özel ankraj ile 150m+)" },
      { key: { tr: "Azami Genişlik / Maximum Width", en: "Maximum Platform Length" }, val: "10 m" },
      { key: { tr: "Platform Genişliği / Platform Width", en: "Platform Deck Depth" }, val: "1360 mm" },
      { key: { tr: "Hız / Nominal Speed", en: "Nominal Climbing Speed" }, val: "12 m/dk" },
      { key: { tr: "Motor Gücü / Power of Motor", en: "Motor Power" }, val: "2 x 2.2 kW" },
      { key: { tr: "Voltaj / Voltage", en: "Operating Voltage" }, val: "380 V" },
      { key: { tr: "Tüketilen Güç / Maximum Current", en: "Maximum Current" }, val: "12 A" },
      { key: { tr: "Platform Bölümü Ölçüler / Dimensions", en: "Modular Deck Section Size" }, val: "1500 x 1360 mm" },
      { key: { tr: "Ağırlık (Zemin Sacı ve Arka Korkuluk Dahil)", en: "Complete Section Weight" }, val: "75 kg / 125 kg" },
      { key: { tr: "Uzatma Bölümü / Özel Uzatma", en: "Standard / Special Extension" }, val: "900 mm / 1800 mm" },
      { key: { tr: "Kolon / Mast Ölçüleri", en: "Mast Section Dimensions" }, val: "525 x 525 x 1500 mm (74 kg)" },
      { key: { tr: "Bağlantı Mesafesi", en: "Anchorage Interval" }, val: "6 m" }
    ]
  },
  {
    id: "corner-platform",
    code: "CK 2000 ÇİFT KÖŞE",
    badge: { tr: "ÖZEL MİMARİ KÖŞE SİSTEMİ", en: "ARCHITECTURAL CORNER SYSTEM" },
    name: {
      tr: "Çift Kolonlu Köşe Sistem (CK 2000 Çift Köşe)",
      en: "Twin Column Corner Platform (CK 2000 Twin Corner)"
    },
    shortName: {
      tr: "CK 2000 Çift Köşe",
      en: "CK 2000 Corner System"
    },
    category: "platform",
    steelGrade: "St52 (S355JR)",
    capacity: {
      tr: "2.000 – 2.500 kg (Çift Kolon Köşe)",
      en: "2,000 – 2,500 kg (Twin Corner)"
    },
    image: "catalog/product-corner-platform-1.jpg",
    secondaryImage: "catalog/product-corner-platform-2.jpg",
    gallery: [
      "catalog/product-corner-platform-1.jpg",
      "catalog/product-corner-platform-2.jpg",
      "catalog/project-residential-1.jpg"
    ],
    summary: {
      tr: "Girintili, çıkıntılı ve L/U tipi açılı mimari cepheler için özel olarak geliştirilen, bina köşelerini tek seferde saran 21 metre toplam genişliğe sahip çift kolonlu köşe platform sistemi.",
      en: "Custom-engineered twin-column corner platform designed for recessed, protruding, and L-shaped architectural facades with 21m total wrap-around width."
    },
    highlights: [
      { label: { tr: "Maks. Yükseklik", en: "Max Height" }, value: "150 m" },
      { label: { tr: "Taşıma Kapasitesi", en: "Payload Capacity" }, value: "2.000 – 2.500 kg" },
      { label: { tr: "Toplam Genişlik", en: "Total Width" }, value: "21 m (12m Kolon Arası)" },
      { label: { tr: "Çalışma Hızı", en: "Climbing Speed" }, value: "12 m/dk" },
      { label: { tr: "Motor Gücü", en: "Motor Power" }, value: "4 x 2.2 kW" },
      { label: { tr: "Tüketilen Akım", en: "Max Current" }, value: "24 A (380V)" }
    ],
    fullSpecs: [
      { key: { tr: "Taşıma Kapasitesi / Payload Capacity", en: "Payload Capacity (Corner Span)" }, val: "2.000 kg – 2.500 kg (Çift Kolon Köşe Yükü)" },
      { key: { tr: "Maksimum Yükseklik / Maximum Height", en: "Maximum Height" }, val: "150 m" },
      { key: { tr: "Kolon Arası Azami Genişlik / Maximum Width", en: "Max Width Between Masts" }, val: "12 m" },
      { key: { tr: "Toplam Genişlik / Total Width", en: "Total Corner Span Width" }, val: "21 m" },
      { key: { tr: "Platform Genişliği / Platform Width", en: "Platform Deck Depth" }, val: "1360 mm" },
      { key: { tr: "Hız / Nominal Speed", en: "Nominal Climbing Speed" }, val: "12 m/dk" },
      { key: { tr: "Motor Gücü / Power of Motor", en: "Motor Power" }, val: "4 x 2.2 kW" },
      { key: { tr: "Voltaj / Voltage", en: "Operating Voltage" }, val: "380 V" },
      { key: { tr: "Tüketilen Güç / Maximum Current", en: "Maximum Current" }, val: "24 A" }
    ]
  }
];

export const COMPONENTS_GALLERY = [
  {
    id: "dikey-mast-kare",
    code: "525x525x1500 mm",
    category: "mast",
    title: { tr: "Dikey Mast Kare (St52 Çelik)", en: "Square Vertical Mast (St52 Steel)" },
    dimensions: "50x50x150 cm (525x525x1500 mm)",
    weight: "74 kg",
    image: "catalog/comp-dikey-mast-kare.jpg",
    desc: {
      tr: "Kare taban üzerinde yuvarlak St52 profilden imal edilen, kremayer dişlisi cıvatalı, korozyona ve dış etkenlere tam dayanıklı dikey çelik kolon.",
      en: "Manufactured from St52 tubular profiles on a square base with bolted rack gear and high-durability corrosion protection."
    }
  },
  {
    id: "ucgen-mast",
    code: "150x130x850",
    category: "mast",
    title: { tr: "Üçgen Mast & Platform Şase Kafesi", en: "Triangular Mast & Platform Truss Section" },
    dimensions: "150x130x850 mm (Modül: 1500x1360 mm)",
    weight: "75 kg",
    image: "catalog/comp-ucgen-mast.jpg",
    desc: {
      tr: "Dış cephe platformlarında 30 metreye kadar esnemeden yatay köprü kurulumu sağlayan yüksek mukavemetli üçgen şase modülü.",
      en: "High-rigidity triangular bridge truss module enabling up to 30m horizontal platform spans without deflection."
    }
  },
  {
    id: "emniyet-masti",
    code: "50x50x75",
    category: "safety",
    title: { tr: "Yarım Boy Son Kolon (Emniyet Mastı)", en: "Half-Length Top Safety Mast" },
    dimensions: "50x50x75 cm (Dişlisiz Üst Sonlandırıcı)",
    weight: "38 kg",
    image: "catalog/comp-emniyet-masti.jpg",
    desc: {
      tr: "En üst kolonda yer alan kremayer dişlisiz kırmızı ikaz boyalı emniyet mastı; kolon bitim dedektörü ile birlikte platformun kolondan çıkmasını %100 önler.",
      en: "Safety-red top terminator mast without rack teeth; works with the column-end detector to physically and electronically prevent over-travel."
    }
  },
  {
    id: "reduktor-parasut",
    code: "2.2 kW + PARAŞÜT FREN",
    category: "drive",
    title: { tr: "Redüktör + Paraşüt Fren Mekanizması", en: "Gearbox + Parachute Brake Unit" },
    dimensions: "1:16 Hız Oranı | Santrifüj Emniyet Frenli",
    weight: "Ağır Hizmet Tipi",
    image: "catalog/comp-reduktor-parasut.jpg",
    desc: {
      tr: "Kendinden elektromanyetik frenli motor redüktör grubu ve aşırı hızlanmada otomatik kilitlenen santrifüj paraşüt fren ünitesi.",
      en: "Self-braking electromagnetic geared motor integrated with a centrifugal overspeed parachute brake mechanism."
    }
  },
  {
    id: "ana-unite",
    code: "ANA TAŞIYICI ÜNİTE",
    category: "drive",
    title: { tr: "Platform Ana Taşıyıcı Ünite & Şase", en: "Main Drive Unit & Climbing Chassis" },
    dimensions: "Çift Motorlu Kremayer-Pinyon Tahrik",
    weight: "Komple Ünite",
    image: "catalog/comp-ana-unite.jpg",
    desc: {
      tr: "Üzerinde çift motor, otomatik dengeleme sistemi, kılavuz makaralar ve elektrik kumanda panosunu barındıran ana tırmanma ünitesi.",
      en: "Complete climbing drive unit housing dual motors, automatic leveling sensors, guide rollers, and integrated control board."
    }
  },
  {
    id: "kumanda-paneli",
    code: "AKILLI PLC PANO",
    category: "control",
    title: { tr: "Akıllı PLC Kumanda ve Dengeleme Paneli", en: "Smart PLC Control & Leveling Panel" },
    dimensions: "380V 50Hz | IP65 Endüstriyel Pano",
    weight: "Otomatik Senkronizasyon",
    image: "catalog/comp-kumanda-paneli.jpg",
    desc: {
      tr: "Faz koruma, aşırı yük kontrolü, otomatik platform dengeleme, sesli ikaz ve acil stop sistemlerini yöneten endüstriyel kumanda panosu.",
      en: "Industrial control panel managing phase protection, overload cutoff, automatic leveling, audible alarm, and emergency stop."
    }
  },
  {
    id: "zemin-saci",
    code: "150x85.5 & 30x70",
    category: "deck",
    title: { tr: "Kaymaz Platform Zemin & Uzatma Sacı", en: "Non-Slip Steel Deck & Extension Plate" },
    dimensions: "150x85.5 cm Ana Sac | 30x70 cm Uzatma Sacı",
    weight: "Kabartmalı Kaymaz Yüzey",
    image: "catalog/comp-zemin-saci.jpg",
    desc: {
      tr: "Yağışlı ve zorlu şantiye koşullarında iş güvenliğini maksimize eden zımbalı/kabartmalı çelik kaymaz yürüme zemini.",
      en: "Punched embossed steel flooring providing superior slip resistance in wet and dusty construction site conditions."
    }
  },
  {
    id: "muhafaza-korkuluk",
    code: "150x64 & 120x150",
    category: "safety",
    title: { tr: "Çevre Güvenlik Korkuluğu & Muhafaza", en: "Perimeter Safety Guardrail & Barrier" },
    dimensions: "150x64 cm Muhafaza | 120x150 cm Korkuluk",
    weight: "Elektrostatik Fırın Boyalı",
    image: "catalog/comp-muhafaza-korkulugu.jpg",
    desc: {
      tr: "Emniyet mandallı platform giriş kapısı ve yüksek mukavemetli çelik tel örgü çevre korkulukları. Kapı açıkken hareketi otomatik keser.",
      en: "Interlocked safety access gate and heavy-duty mesh perimeter guardrails. Automatically prevents motion when any gate is open."
    }
  },
  {
    id: "baglanti-ankraj",
    code: "ANKRAJ & PİMLER",
    category: "mast",
    title: { tr: "Ankraj Bağlantı Kolu & Emniyet Pimleri", en: "Anchorage Tie Arm & Safety Locking Pins" },
    dimensions: "6m Aralık | 900mm - 1800mm Uzatma Profili",
    weight: "Yüksek Kesme Mukavemetli",
    image: "catalog/comp-baglanti-kolu.jpg",
    desc: {
      tr: "İstenilen cephe mesafelerinde kolay ayarlama imkanı sunan teleskopik ankraj kolları, uzatma profilleri ve R-kopilyalı çelik bağlantı pimleri.",
      en: "Telescopic wall tie arms, extension profiles, and R-clip high-shear steel locking pins for rapid facade adjustment."
    }
  }
];

export const SECURITY_SYSTEMS = [
  {
    id: "sec-1",
    title: { tr: "Santrifüj Paraşüt Fren Sistemi", en: "Centrifugal Parachute Braking System" },
    desc: {
      tr: "Hıza duyarlı paraşüt fren mekanizması ile aşırı hızlanmada sarsıntısız mekanik kilitlenme.",
      en: "Overspeed-sensitive parachute brake mechanism providing immediate mechanical arrest."
    }
  },
  {
    id: "sec-2",
    title: { tr: "Çift / Dörtlü Motorlu Frenleme Sistemi", en: "Dual / Quad Motor Electromagnetic Braking" },
    desc: {
      tr: "Her pinyon dişlide bağımsız elektromanyetik disk fren ile tam yükte bile sıfır kayma.",
      en: "Independent fail-safe electromagnetic disc brakes on every drive motor for zero-slip holding."
    }
  },
  {
    id: "sec-3",
    title: { tr: "Otomatik Platform Dengeleme Sistemi", en: "Automatic Platform Leveling System" },
    desc: {
      tr: "Çift kolonlu 30m platformlarda her iki kolon arasında milimetrik senkronizasyon ve eğim koruma.",
      en: "Millimetric synchronization and tilt protection across 30m twin-column platforms."
    }
  },
  {
    id: "sec-4",
    title: { tr: "Aşırı Yük & Faz Koruma Kontrolü", en: "Overload & Phase Protection Control" },
    desc: {
      tr: "Platform üzerinde aşırı yük ve faz hatası algılandığında sesli/görsel ikaz ve otomatik hareket kilidi.",
      en: "Visual/audible alarm and automatic motion lockout upon overload or phase sequence fault."
    }
  },
  {
    id: "sec-5",
    title: { tr: "Kolon Bitim Dedektörü & Yarım Boy Son Kolon", en: "Column End Detector & Half-Length Top Mast" },
    desc: {
      tr: "Son kolonda çift limit switch ve dişlisiz kırmızı emniyet mastı ile üst sınır koruması.",
      en: "Dual upper limit switches paired with a toothless red safety top mast."
    }
  },
  {
    id: "sec-6",
    title: { tr: "Acil Durumlarda Manuel İniş Sistemi", en: "Emergency Manual Landing System" },
    desc: {
      tr: "Elektrik kesintisi halinde platform üzerinden güvenli ve sabit hızla manuel indirme kolu.",
      en: "Controlled manual brake release lever allowing safe gravity descent during power outages."
    }
  },
  {
    id: "sec-7",
    title: { tr: "Kaymaz Perfore Çelik Zemin", en: "Non-Slip Perforated Steel Flooring" },
    desc: {
      tr: "Perfore kabartmalı yüzey ile çamur, su ve buzlanmaya karşı maksimum taban tutunması.",
      en: "Embossed perforated steel deck preventing slips in wet or icy conditions."
    }
  },
  {
    id: "sec-8",
    title: { tr: "Sesli Hareket Uyarı & Kapı Emniyet Mandalı", en: "Audible Motion Alarm & Gate Interlock" },
    desc: {
      tr: "Seyir esnasında sesli ikaz sireni ve platform giriş kapısı açıkken çalışmayı önleyen emniyet switchi.",
      en: "Audible travel siren and safety interlock switches halting operation if any gate is open."
    }
  }
];

export const REFERENCE_PROJECTS = [
  {
    id: "proj-1",
    title: { tr: "Kavisli Cam Gökdelen Cephe Uygulaması", en: "Curved Glass Skyscraper Facade Installation" },
    category: "curved",
    height: "185 m",
    system: "Çift Kolonlu Özel Eğimli Platform",
    image: "catalog/project-curved-tower-1.jpg",
    span: "tall"
  },
  {
    id: "proj-2",
    title: { tr: "Yüksek Katlı Rezidans & Kule Projesi", en: "High-Rise Residence & Tower Project" },
    category: "skyscraper",
    height: "160 m",
    system: "Çift Kolonlu Dış Cephe Platformu",
    image: "catalog/project-glass-skyscraper-1.jpg",
    span: "normal"
  },
  {
    id: "proj-3",
    title: { tr: "Eğimli Mimari Kolon & Ray Uygulaması", en: "Curved Architectural Mast & Track Engineering" },
    category: "curved",
    height: "140 m",
    system: "Özel Kavisli Mast Ankraj Sistemi",
    image: "catalog/project-curved-mast.jpg",
    span: "normal"
  },
  {
    id: "proj-4",
    title: { tr: "30m Genişlikli İkiz Kule Cephe Kaplama", en: "30m Span Twin Tower Cladding Project" },
    category: "skyscraper",
    height: "150 m",
    system: "Çift Kolonlu Platform (30m)",
    image: "catalog/project-twin-skyscraper.jpg",
    span: "wide"
  },
  {
    id: "proj-6",
    title: { tr: "Girintili Cephe CK 2000 Çift Köşe Kurulumu", en: "Recessed Facade CK 2000 Twin Corner Setup" },
    category: "corner",
    height: "120 m",
    system: "CK 2000 Çift Köşe (21m)",
    image: "catalog/product-corner-platform-1.jpg",
    span: "tall"
  },
  {
    id: "proj-7",
    title: { tr: "Kavisli Kule Çoklu Platform Operasyonu", en: "Curved Tower Multi-Platform Operation" },
    category: "curved",
    height: "165 m",
    system: "Çoklu Çift Kolonlu Platform",
    image: "catalog/project-curved-tower-2.jpg",
    span: "normal"
  },
  {
    id: "proj-8",
    title: { tr: "Granit & Alüminyum Kompozit Cephe Montajı", en: "Granite & Aluminum Composite Cladding" },
    category: "skyscraper",
    height: "135 m",
    system: "Çift Kolonlu Dış Cephe Platformu",
    image: "catalog/project-facade-cladding.jpg",
    span: "normal"
  }
];
