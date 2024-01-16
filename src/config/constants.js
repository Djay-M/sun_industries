export const localTimeZone = "Asia/Kolkata";
export const defaultTheme = "light";
export const underLineColor = "#facf0f"; // #7843e9
export const linkedInProfile =
  "https://www.linkedin.com/in/dhananjaya-mulukaledu/";
export const githubProfile = "https://github.com/Djay-M";
export const getformLink =
  "https://getform.io/f/bab29933-25ed-48df-90ae-e9bdc2ab2f8a";

export const themesConfig = {
  hoverTextColor: "blue",
  dark: {
    backgroundImage: "darkBackGround",
    backgroundColor: `#1A1A1D`, //`#1A1A1D`, //`#282828`, //`#282c34`,
    navBarBackgroundColor: `#0a192f`,
    textColor: "white",
  },
  light: {
    backgroundImage: "lightBackGround",
    backgroundColor: "#282c34", //`#fff`,
    navBarBackgroundColor: `#0a192f`,
    textColor: "black",
  },
};

function importAll(r) {
  return r.keys().map(r);
}

export const serviceImages = [];
// importAll(
//   require.context("../assets/service_images", false, /\.(png|jpe?g|svg)$/)
// );

export const founderImages = [];
// importAll(
//   require.context("../assets/profile_photo", false, /\.(png|jpe?g|svg)$/)
// );

export const slides = [];
// importAll(
//   require.context("../assets/slides", false, /\.(png|jpe?g|svg)$/)
// );

export const serviceCardsData = [
  {
    name: "Machine components",
    imageUrl: serviceImages[0],
  },
  {
    name: "SS and MS materials",
    imageUrl: serviceImages[1],
  },
  {
    name: "Aluminum  components",
    imageUrl: serviceImages[2],
  },
  {
    name: "Die - Moulding components",
    imageUrl: serviceImages[3],
  },
  {
    name: "High and low density Plastic and elastic  components",
    imageUrl: serviceImages[4],
  },
];

export const clientReviews = [
  {
    clientName: "Bosch Limited Bidadi",
    review:
      "Sun Industries provided Good service and great products andd Sun Industries provided Good service and great products",
  },
  {
    clientName: "Bosch Automotive electronic India  Pvt Ltd",
    review: "Sun Industries provided Good service and great products",
  },
  {
    clientName: "Bosch Limited Naganathapura spark plug",
    review: "Sun Industries provided Good service and great products",
  },
  {
    clientName: "Mivin Engineering Technologies Private Limited (REXROTH)",
    review: "Sun Industries provided Good service and great products",
  },
];

export const clientLogo = importAll(
  require.context("../assets/logos", false, /\.(png|jpe?g|svg)$/)
);

export const productDetails = [
  {
    name: "SS Square Basket",
    description: `This  SS 316 Square basket is used to place the tool for phospating purpose.
    The basket with the tool placed in a barrel and placed in a chemical tank with mixture of phosphate and used as blackening and hardening surface.`,
    materialUsed: "SS 316 round, rodTeflon and tube 3mm",
    images: importAll(
      require.context(
        "../assets/products/ss_square_basket",
        false,
        /\.(png|jpe?g|svg)$/
      )
    ),
  },
  {
    name: "Mesh and Handle",
    description: `Mesh and handle where the parts are place and kept in the furnaces for heat treatment.`,
    materialUsed: "die moulded tray, SS 316 Mesh, round rod handle",
    images: importAll(
      require.context(
        "../assets/products/mesh_and_handle",
        false,
        /\.(png|jpe?g|svg)$/
      )
    ),
  },
  {
    name: "Bottom Trays For Machine",
    description: `The bottom tray is used to place machine and collecting waste oil.`,
    materialUsed:
      "SS 304  sheet 3mm thickness with long-lasting, SS tube, CNC cutting and bending",
    images: importAll(
      require.context(
        "../assets/products/bottom_trays_for_machine",
        false,
        /\.(png|jpe?g|svg)$/
      )
    ),
  },
  {
    name: "MS Roller Trolley",
    description: `MS roller trolley used to take the trays and other parts and also its connected to  runway vehicle.`,
    materialUsed: "MS round rod, apex wheel, MS round  pipe and square pipeg",
    images: importAll(
      require.context(
        "../assets/products/ms_roller_trolley",
        false,
        /\.(png|jpe?g|svg)$/
      )
    ),
  },
  {
    name: "Aluminum super market",
    description: `This super market trolley with ESD conductivity is used for bin storage `,
    materialUsed:
      "aluminum 40X 40 profile, L–clamp, channel with roller, ESD wheel",
    images: importAll(
      require.context(
        "../assets/products/aluminum_super_market",
        false,
        /\.(png|jpe?g|svg)$/
      )
    ),
  },
  {
    name: "SMT SUPER MARKET",
    description: `This super market trolley with ESD conductivity is used for bin storage `,
    materialUsed:
      "aluminum 40X 40 profile, L–clamp, channel with roller, ESD wheel",
    images: importAll(
      require.context(
        "../assets/products/smt_super_market",
        false,
        /\.(png|jpe?g|svg)$/
      )
    ),
  },
  {
    name: "FIFO chute rack",
    description: `This super market trolley with ESD conductivity is used for bin storage `,
    materialUsed:
      "aluminum 40X 40 profile, L–clamp, channel with roller, ESD wheel",
    images: importAll(
      require.context(
        "../assets/products/fifo_chute_rack",
        false,
        /\.(png|jpe?g|svg)$/
      )
    ),
  },
  {
    name: "Aluminum table top",
    description: `Aluminum table top for computer desktop setup`,
    materialUsed: "aluminum profile 40X40, wooden table, switches, and lights",
    images: importAll(
      require.context(
        "../assets/products/aluminum_table_top",
        false,
        /\.(png|jpe?g|svg)$/
      )
    ),
  },
  {
    name: "Aluminum bin chute gravity type loading and unloading",
    description: ` This material is used for manually loading and unloading`,
    materialUsed: "aluminum profile 45 and 30",
    images: importAll(
      require.context(
        "../assets/products/aluminum_bin_chute",
        false,
        /\.(png|jpe?g|svg)$/
      )
    ),
  },
  {
    name: "ESD Consumable Line accessories cupboard",
    description: `It is used to store all kind files and documents of the products and also some minute parts.`,
    materialUsed:
      "Aluminum profile 45X45, MS Powder coated sheet and hinges and handle",
    images: importAll(
      require.context(
        "../assets/products/esd_consumable_cupboard",
        false,
        /\.(png|jpe?g|svg)$/
      )
    ),
  },
  {
    name: "ESD Stencil movement trolley",
    description: `It is used to store stencil parts.`,
    materialUsed:
      "Aluminum profile 45X45, MS Powder coated sheet and hinges and handle",
    images: importAll(
      require.context(
        "../assets/products/esd_stencil_trolley",
        false,
        /\.(png|jpe?g|svg)$/
      )
    ),
  },
  {
    name: "PCB preparation trolley",
    description: `It is used  for Printed circuit boards.`,
    materialUsed: "Aluminum profile 45 X 45  SS square rod and ESD wheel",
    images: importAll(
      require.context(
        "../assets/products/pcb_preparation_trolley",
        false,
        /\.(png|jpe?g|svg)$/
      )
    ),
  },
  {
    name: "Solder paste change over trolley",
    description: ``,
    materialUsed: "",
    images: importAll(
      require.context(
        "../assets/products/solder_trolley",
        false,
        /\.(png|jpe?g|svg)$/
      )
    ),
  },
  {
    name: "MTM WORK STATION TABLE",
    description: ``,
    materialUsed: "",
    images: importAll(
      require.context(
        "../assets/products/mtm_table",
        false,
        /\.(png|jpe?g|svg)$/
      )
    ),
  },
  {
    name: "Aluminum Super market rails for trolley bins",
    description: `It is used box or bin dolly storage with n numbers`,
    materialUsed:
      "6 set MS angle with CNC Bending 45 aluminum profile and ‘L’ Brackets and 3M caution tapes",
    images: importAll(
      require.context(
        "../assets/products/aluminum_market_rails",
        false,
        /\.(png|jpe?g|svg)$/
      )
    ),
  },
  {
    name: "Pigeon locker cupboard",
    description: `made up of MS material with ISI certified locking system`,
    materialUsed: "",
    images: importAll(
      require.context(
        "../assets/products/pigeon_locker_cupboard",
        false,
        /\.(png|jpe?g|svg)$/
      )
    ),
  },
  {
    name: "Reihenroste trays",
    description: `It is the die moulded material use to place spark plugs`,
    materialUsed: "hips plastic chips",
    images: importAll(
      require.context(
        "../assets/products/reihenroste_trays",
        false,
        /\.(png|jpe?g|svg)$/
      )
    ),
  },
  {
    name: "Plastic blister for component",
    description: ``,
    materialUsed: "",
    images: importAll(
      require.context(
        "../assets/products/plastic_blister",
        false,
        /\.(png|jpe?g|svg)$/
      )
    ),
  },
  {
    name: "Rubber foam tray",
    description: `It is used for soft electronic parts to avoid from damage`,
    materialUsed: "",
    images: importAll(
      require.context(
        "../assets/products/rubber_tray",
        false,
        /\.(png|jpe?g|svg)$/
      )
    ),
  },
  {
    name: "Production control fifo chute",
    description: `It is used to note down the reading of  production unit`,
    materialUsed: "",
    images: importAll(
      require.context(
        "../assets/products/fifo_chute",
        false,
        /\.(png|jpe?g|svg)$/
      )
    ),
  },
];
