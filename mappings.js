/**
 * ============================================================================
 * RECYCLE CAM - MATERIAL MAPPINGS (DEMO VERSION)
 * ============================================================================
 *
 * Simplified mappings for school project demo.
 * Only includes the 4 items being demonstrated.
 *
 * EXPANDED with many MobileNet/ImageNet label variations!
 *
 * Demo Items:
 * - Water bottle → Plastic
 * - Pen → Landfill
 * - Onion → Compost
 * - Prescription glasses → Landfill
 *
 * Author: [Your Name]
 * Project: Recycle Cam - AI Waste Sorting Assistant
 * ============================================================================
 */

const materialMappings = {
  // ========================================
  // COMPOST - Organic/Food items
  // ========================================
  compost: [
    // Onion variations
    "onion",
    "red onion",
    "yellow onion",
    "white onion",
    "shallot",
    "garlic",
    "leek",

    // MobileNet might confuse with other round vegetables
    "Granny Smith",
    "head cabbage",
    "bell pepper",
    "acorn squash",
    "butternut squash",
    "cucumber",
    "zucchini",
    "eggplant",
    "artichoke",
    "mushroom",
    "turnip",
    "kohlrabi",
  ],

  // ========================================
  // PAPER / CARDBOARD
  // ========================================
  paper: [],

  // ========================================
  // METAL
  // ========================================
  metal: [],

  // ========================================
  // GLASS
  // ========================================
  glass: [],

  // ========================================
  // PLASTIC
  // ========================================
  plastic: [
    // Water bottle variations
    "water bottle",
    "plastic bottle",
    "bottle",
    "pop bottle",
    "water jug",
    "flask",
    "pitcher",
    "carafe",
    "jug",
    "canteen",
    "thermos",
    // MobileNet confuses bottles with these!
    "punching bag",
    "punch bag",
    "punching ball",
    "vacuum",
    "vase",
    "shaker",
    "cocktail shaker",
    "beer bottle",
    "wine bottle",
    "pill bottle",
    "water tower",
    "cylinder",
    "container",
    "tumbler",
    "mug",
    "cup",
    "barrel",
    "cask",
    "drum",
  ],

  // ========================================
  // LANDFILL / NON-RECYCLABLE
  // ========================================
  landfill: [
    // Pen variations (MobileNet ImageNet classes)
    "ballpoint",
    "ballpoint pen",
    "ball pen",
    "pen",
    "fountain pen",
    "quill",
    "quill pen",
    "pencil",
    "mechanical pencil",
    "marker",
    "felt-tip",
    "highlighter",
    "writing implement",
    "stylus",
    "rule", // ruler sometimes confused
    "rubber eraser",
    "plunger", // MobileNet confuses pens with plungers!
    "plumber's helper",
    "screwdriver", // long thin objects
    "hammer",
    "nail",
    "lipstick", // cylinder shape
    "torch",
    "flashlight",
    "lighter",
    "candle",
    "missile",
    "projectile",
    "stick",
    "baton",
    "drumstick",
    "match",
    "matchstick",
    "stethoscope",
    "syringe",
    "thermometer",

    // Glasses variations (MobileNet ImageNet classes)
    "sunglass",
    "sunglasses",
    "eyeglass",
    "eyeglasses",
    "glasses",
    "spectacles",
    "reading glasses",
    "eye glasses",
    "goggles",
    "loupe",
    "magnifying glass",
    "lens",
    "optical",
    "frame",
    "rimless",
    "bifocal",
    "monocle",
  ],
};
