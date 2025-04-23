export type Term = {
  name: string
  definition: string
}

export type Division = {
  id: string
  number: string
  name: string
  terms: Term[]
}

export const constructionData: Division[] = [
  {
    id: "division-00",
    number: "00",
    name: "Procurement and Contracting Requirements",
    terms: [
      {
        name: "Invitation to Bid",
        definition: "A formal request for contractors to submit proposals for a construction project.",
      },
      {
        name: "Instructions to Bidders",
        definition: "Information provided to bidders about the procedures and requirements for submitting bids.",
      },
      {
        name: "Bid Form",
        definition: "A document on which bidders provide their proposed price and other required information.",
      },
      {
        name: "Bid Bond",
        definition: "A guarantee that the bidder will enter into a contract if awarded the project.",
      },
      {
        name: "Agreement Form",
        definition: "The contract document that establishes the legal relationship between the owner and contractor.",
      },
      {
        name: "General Conditions",
        definition:
          "Standard provisions that govern the rights and responsibilities of parties involved in the construction project.",
      },
      {
        name: "Supplementary Conditions",
        definition: "Modifications or additions to the General Conditions specific to a particular project.",
      },
      {
        name: "Performance Bond",
        definition: "A guarantee that the contractor will complete the project according to the contract documents.",
      },
      {
        name: "Payment Bond",
        definition: "A guarantee that the contractor will pay subcontractors, laborers, and material suppliers.",
      },
      {
        name: "Notice to Proceed",
        definition: "A formal notification from the owner authorizing the contractor to begin work.",
      },
      {
        name: "Request for Information (RFI)",
        definition: "A formal process for contractors to request clarification about the contract documents.",
      },
      {
        name: "Change Order",
        definition: "A written document that modifies the original contract scope, time, or cost.",
      },
      {
        name: "Addendum",
        definition: "A written document issued before bids are received that modifies the bidding documents.",
      },
      {
        name: "Liquidated Damages",
        definition: "Predetermined amounts that the contractor must pay if the project is not completed on time.",
      },
      {
        name: "Retainage",
        definition: "A percentage of payment withheld until the project is completed satisfactorily.",
      },
      {
        name: "Substantial Completion",
        definition: "The stage when the project is sufficiently complete for its intended use.",
      },
      {
        name: "Final Completion",
        definition: "The stage when all work has been completed according to the contract documents.",
      },
      {
        name: "Certificate of Occupancy",
        definition: "A document issued by a local government agency certifying that a building is safe for occupancy.",
      },
      {
        name: "Warranty",
        definition: "A guarantee from the contractor regarding the quality of materials and workmanship.",
      },
      {
        name: "Lien Waiver",
        definition: "A document in which a party waives their right to place a lien on the property.",
      },
    ],
  },
  {
    id: "division-01",
    number: "01",
    name: "General Requirements",
    terms: [
      {
        name: "Mobilization",
        definition: "The process of assembling resources at a job site to begin construction.",
      },
      {
        name: "Demobilization",
        definition: "The process of removing resources from a job site after construction is complete.",
      },
      {
        name: "Temporary Facilities",
        definition: "Structures and services used during construction but not part of the final building.",
      },
      {
        name: "Construction Schedule",
        definition: "A timeline of construction activities showing start dates, durations, and completion dates.",
      },
      {
        name: "Submittals",
        definition: "Documents provided by contractors to demonstrate compliance with specifications.",
      },
      {
        name: "Project Meetings",
        definition: "Regular gatherings of project stakeholders to discuss progress, issues, and coordination.",
      },
      {
        name: "Quality Control",
        definition: "Procedures to ensure that construction meets specified requirements.",
      },
      {
        name: "Project Closeout",
        definition: "The final phase of construction when all work is completed and documented.",
      },
      {
        name: "Construction Waste Management",
        definition: "Procedures for handling, reducing, and disposing of waste generated during construction.",
      },
      {
        name: "Allowances",
        definition:
          "Specified amounts included in the contract for items that cannot be fully defined at the time of bidding.",
      },
      {
        name: "Alternates",
        definition: "Optional items or methods of construction that may be accepted or rejected by the owner.",
      },
      {
        name: "Unit Prices",
        definition: "Predetermined amounts for specific units of work that may be added or deducted from the contract.",
      },
      {
        name: "Progress Documentation",
        definition: "Records of construction activities, including photographs, reports, and logs.",
      },
      {
        name: "Regulatory Requirements",
        definition: "Laws, codes, and regulations that govern construction activities.",
      },
      {
        name: "Reference Standards",
        definition: "Published documents that establish criteria for products, materials, and workmanship.",
      },
      {
        name: "Mock-Ups",
        definition:
          "Full-size models of building components used to verify selections and establish quality standards.",
      },
      {
        name: "Construction Facilities",
        definition: "Temporary structures and services that support construction activities.",
      },
      {
        name: "Construction Aids",
        definition: "Temporary devices and equipment that facilitate construction activities.",
      },
      {
        name: "Field Engineering",
        definition: "Services that establish lines, grades, and reference points for construction.",
      },
      {
        name: "Warranties",
        definition: "Guarantees from contractors and manufacturers regarding the quality of materials and workmanship.",
      },
    ],
  },
  {
    id: "division-02",
    number: "02",
    name: "Existing Conditions",
    terms: [
      {
        name: "Demolition",
        definition: "The process of removing existing structures or building elements.",
      },
      {
        name: "Hazardous Material Remediation",
        definition: "The removal or containment of dangerous substances like asbestos or lead.",
      },
      {
        name: "Site Assessment",
        definition: "Evaluation of existing site conditions before construction begins.",
      },
      {
        name: "Selective Demolition",
        definition: "Careful removal of specific building elements while preserving others.",
      },
      {
        name: "Subsurface Investigation",
        definition: "Examination of soil and underground conditions at a construction site.",
      },
      {
        name: "Asbestos Remediation",
        definition: "The removal or containment of asbestos-containing materials.",
      },
      {
        name: "Lead Remediation",
        definition: "The removal or containment of lead-based paint and other lead-containing materials.",
      },
      {
        name: "PCB Remediation",
        definition: "The removal or containment of polychlorinated biphenyls.",
      },
      {
        name: "Mold Remediation",
        definition: "The removal or containment of mold and mildew.",
      },
      {
        name: "Underground Storage Tank Removal",
        definition: "The removal of tanks that have been used to store fuels or other substances below ground.",
      },
      {
        name: "Building Demolition",
        definition: "The complete removal of an existing structure.",
      },
      {
        name: "Structure Moving",
        definition: "The relocation of an entire building from one site to another.",
      },
      {
        name: "Salvage",
        definition: "The recovery of valuable or reusable materials from existing structures.",
      },
      {
        name: "Deconstruction",
        definition: "The systematic disassembly of a structure to maximize material recovery and recycling.",
      },
      {
        name: "Utility Location",
        definition: "The identification and marking of existing underground utilities.",
      },
      {
        name: "Soil Boring",
        definition: "The extraction of soil samples for analysis of subsurface conditions.",
      },
      {
        name: "Ground Penetrating Radar",
        definition: "A non-destructive method for detecting objects below the surface of the ground.",
      },
      {
        name: "Existing Conditions Documentation",
        definition: "The recording of the state of a site or structure before construction begins.",
      },
      {
        name: "Hazardous Waste Transportation",
        definition: "The movement of dangerous materials from a construction site to a disposal facility.",
      },
      {
        name: "Environmental Monitoring",
        definition: "The measurement of air, water, and soil quality during remediation activities.",
      },
    ],
  },
  {
    id: "division-03",
    number: "03",
    name: "Concrete",
    terms: [
      {
        name: "Cast-in-Place Concrete",
        definition: "Concrete that is poured and cured directly at the construction site.",
      },
      {
        name: "Precast Concrete",
        definition: "Concrete elements manufactured off-site and transported to the construction site.",
      },
      {
        name: "Reinforcement",
        definition: "Steel bars or mesh embedded in concrete to increase its strength.",
      },
      {
        name: "Formwork",
        definition: "Temporary molds into which concrete is poured and allowed to harden.",
      },
      {
        name: "Curing",
        definition:
          "The process of maintaining moisture and temperature conditions to allow concrete to develop strength.",
      },
      {
        name: "Admixtures",
        definition: "Materials added to concrete to modify its properties, such as setting time or workability.",
      },
      {
        name: "Aggregate",
        definition: "Granular materials such as sand, gravel, or crushed stone used in concrete mixes.",
      },
      {
        name: "Cement",
        definition: "A binding material that hardens when mixed with water and other ingredients to form concrete.",
      },
      {
        name: "Slump",
        definition: "A measure of the consistency and workability of fresh concrete.",
      },
      {
        name: "Control Joint",
        definition: "A groove or formed joint that creates a weakened plane to control cracking in concrete.",
      },
      {
        name: "Expansion Joint",
        definition:
          "A separation between adjacent sections of concrete to allow for movement due to temperature changes.",
      },
      {
        name: "Concrete Finishing",
        definition:
          "The process of treating the surface of freshly placed concrete to achieve a desired appearance or texture.",
      },
      {
        name: "Concrete Sealers",
        definition: "Products applied to concrete surfaces to protect them from moisture, stains, or chemicals.",
      },
      {
        name: "Concrete Strength",
        definition: "The ability of concrete to resist forces, typically measured in pounds per square inch (psi).",
      },
      {
        name: "Concrete Mix Design",
        definition: "The specification of ingredients and proportions for a concrete mixture.",
      },
      {
        name: "Concrete Pumping",
        definition: "The process of transferring liquid concrete through hoses to the placement location.",
      },
      {
        name: "Post-Tensioning",
        definition: "A method of reinforcing concrete by applying compression after the concrete has hardened.",
      },
      {
        name: "Tilt-Up Construction",
        definition: "A building technique where concrete elements are cast on-site and then tilted up into position.",
      },
      {
        name: "Shotcrete",
        definition: "Concrete conveyed through a hose and pneumatically projected at high velocity onto a surface.",
      },
      {
        name: "Self-Consolidating Concrete",
        definition: "A highly flowable concrete that can spread into place under its own weight without segregation.",
      },
    ],
  },
  {
    id: "division-04",
    number: "04",
    name: "Masonry",
    terms: [
      {
        name: "Brick",
        definition: "A small rectangular block typically made of fired clay used in construction.",
      },
      {
        name: "CMU (Concrete Masonry Unit)",
        definition: "A hollow or solid block made of concrete used in construction.",
      },
      {
        name: "Mortar",
        definition: "A mixture of cement, sand, and water used to bond masonry units together.",
      },
      {
        name: "Grout",
        definition: "A fluid form of concrete used to fill cavities in masonry construction.",
      },
      {
        name: "Veneer",
        definition: "A thin layer of masonry applied as a facing over another material.",
      },
      {
        name: "Bond Pattern",
        definition: "The arrangement of masonry units in a wall, such as running bond or stack bond.",
      },
      {
        name: "Wythe",
        definition: "A continuous vertical section of masonry one unit in thickness.",
      },
      {
        name: "Cavity Wall",
        definition: "A wall consisting of two wythes with an air space between them.",
      },
      {
        name: "Masonry Reinforcement",
        definition: "Steel bars or mesh embedded in mortar joints or grouted cells to strengthen masonry.",
      },
      {
        name: "Masonry Anchors",
        definition: "Devices used to connect masonry to structural elements or to other wythes of masonry.",
      },
      {
        name: "Masonry Flashing",
        definition: "Materials installed to prevent water penetration through masonry walls.",
      },
      {
        name: "Weep Holes",
        definition: "Small openings in masonry walls that allow water to drain from cavities.",
      },
      {
        name: "Expansion Joint",
        definition: "A separation in masonry to allow for movement due to temperature changes.",
      },
      {
        name: "Control Joint",
        definition: "A groove or formed joint that creates a weakened plane to control cracking in masonry.",
      },
      {
        name: "Repointing",
        definition: "The process of removing deteriorated mortar from joints and replacing it with new mortar.",
      },
      {
        name: "Stone Masonry",
        definition: "Construction using natural stone units with mortar.",
      },
      {
        name: "Masonry Cleaning",
        definition: "The process of removing dirt, stains, or efflorescence from masonry surfaces.",
      },
      {
        name: "Masonry Sealer",
        definition: "A product applied to masonry surfaces to protect them from moisture or stains.",
      },
      {
        name: "Masonry Scaffold",
        definition: "A temporary structure that provides access for masons to construct walls.",
      },
      {
        name: "Masonry Heater",
        definition: "A heating appliance constructed of masonry materials that stores and radiates heat.",
      },
    ],
  },
  {
    id: "division-05",
    number: "05",
    name: "Metals",
    terms: [
      {
        name: "Structural Steel",
        definition: "Steel elements that form the building's load-bearing frame.",
      },
      {
        name: "Metal Fabrications",
        definition: "Custom-made metal items for specific construction applications.",
      },
      {
        name: "Metal Stairs",
        definition: "Stairways constructed primarily of metal components.",
      },
      {
        name: "Metal Railings",
        definition: "Guardrails and handrails made of metal.",
      },
      {
        name: "Metal Decking",
        definition: "Corrugated metal sheets used as a base for concrete floor slabs.",
      },
      {
        name: "Steel Joists",
        definition: "Lightweight steel trusses used to support floors and roofs.",
      },
      {
        name: "Steel Trusses",
        definition: "Structural frameworks composed of triangular units constructed with straight members.",
      },
      {
        name: "Metal Grating",
        definition: "Open grids of metal used for flooring, walkways, or ventilation.",
      },
      {
        name: "Expansion Control",
        definition: "Systems that accommodate building movement due to temperature changes.",
      },
      {
        name: "Metal Framing",
        definition: "Light gauge steel members used for non-load-bearing walls and ceilings.",
      },
      {
        name: "Welding",
        definition: "The process of joining metal parts by heating and fusing them together.",
      },
      {
        name: "Bolted Connections",
        definition: "Joints between metal components secured with bolts.",
      },
      {
        name: "Galvanizing",
        definition: "The process of applying a protective zinc coating to steel or iron.",
      },
      {
        name: "Powder Coating",
        definition: "A dry finishing process that applies a protective and decorative coating to metal.",
      },
      {
        name: "Anodizing",
        definition: "An electrochemical process that increases the thickness of the natural oxide layer on aluminum.",
      },
      {
        name: "Metal Cladding",
        definition: "Metal sheets or panels used as exterior wall coverings.",
      },
      {
        name: "Metal Roofing",
        definition: "Roofing systems made of metal sheets or panels.",
      },
      {
        name: "Ornamental Metal",
        definition: "Decorative metal elements such as railings, grilles, and gates.",
      },
      {
        name: "Metal Ceiling",
        definition: "Ceiling systems made of metal panels or tiles.",
      },
      {
        name: "Metal Column Covers",
        definition: "Decorative enclosures for structural columns.",
      },
    ],
  },
  {
    id: "division-06",
    number: "06",
    name: "Wood, Plastics, and Composites",
    terms: [
      {
        name: "Rough Carpentry",
        definition: "Structural wood framing and other wood elements not visible in the finished building.",
      },
      {
        name: "Finish Carpentry",
        definition: "Wood elements that are visible in the completed building.",
      },
      {
        name: "Architectural Woodwork",
        definition: "Custom-made wood products for interior finishes.",
      },
      {
        name: "FRP (Fiber-Reinforced Plastic)",
        definition: "Composite material consisting of a polymer matrix reinforced with fibers.",
      },
      {
        name: "Plastic Fabrications",
        definition: "Custom-made plastic items for specific construction applications.",
      },
      {
        name: "Wood Framing",
        definition: "The construction of structural frameworks using dimensional lumber.",
      },
      {
        name: "Engineered Wood Products",
        definition: "Manufactured wood products such as plywood, OSB, and LVL.",
      },
      {
        name: "Wood Treatment",
        definition: "Processes that protect wood from decay, insects, or fire.",
      },
      {
        name: "Wood Trim",
        definition: "Decorative wood elements used to finish edges and transitions.",
      },
      {
        name: "Wood Paneling",
        definition: "Wood sheets or boards used as wall coverings.",
      },
      {
        name: "Wood Flooring",
        definition: "Flooring materials made from solid wood or engineered wood products.",
      },
      {
        name: "Laminate",
        definition: "A multi-layer synthetic product fused together with a lamination process.",
      },
      {
        name: "Solid Surface",
        definition: "Non-porous countertop material composed of acrylic, polyester, or blends.",
      },
      {
        name: "Plastic Laminate",
        definition: "Thin layers of plastic bonded to a substrate for countertops or other surfaces.",
      },
      {
        name: "Wood-Plastic Composite",
        definition: "Material made from wood fibers and thermoplastic resin.",
      },
      {
        name: "Millwork",
        definition: "Ready-made wood products manufactured in a mill.",
      },
      {
        name: "Cabinetry",
        definition: "Fixed or built-in storage units with doors or drawers.",
      },
      {
        name: "Countertops",
        definition: "Horizontal work surfaces in kitchens, bathrooms, or other areas.",
      },
      {
        name: "Structural Plastic",
        definition: "Plastic materials used for load-bearing applications.",
      },
      {
        name: "Wood Sheathing",
        definition: "Panels attached to framing to provide structural support and a nailing base.",
      },
    ],
  },
  {
    id: "division-07",
    number: "07",
    name: "Thermal and Moisture Protection",
    terms: [
      {
        name: "Waterproofing",
        definition: "Materials and systems that prevent water penetration into building elements.",
      },
      {
        name: "Insulation",
        definition: "Materials that reduce heat transfer through building elements.",
      },
      {
        name: "Roofing",
        definition: "Materials and systems that cover the top of a building to protect it from weather.",
      },
      {
        name: "Vapor Barrier",
        definition: "Material that prevents the diffusion of moisture through building elements.",
      },
      {
        name: "Flashing",
        definition: "Thin pieces of impervious material installed to prevent water penetration at joints.",
      },
      {
        name: "Air Barrier",
        definition: "Materials that prevent air leakage through the building envelope.",
      },
      {
        name: "Dampproofing",
        definition:
          "Materials applied to surfaces to resist the passage of water in the absence of hydrostatic pressure.",
      },
      {
        name: "Sealants",
        definition: "Flexible materials used to seal joints and gaps in construction.",
      },
      {
        name: "Firestopping",
        definition: "Materials used to seal openings and joints in fire-rated assemblies.",
      },
      {
        name: "Roof Accessories",
        definition: "Components such as vents, hatches, and equipment curbs installed on roofs.",
      },
      {
        name: "Siding",
        definition: "Materials applied to the exterior walls of a building as a protective and decorative layer.",
      },
      {
        name: "EIFS (Exterior Insulation and Finish System)",
        definition: "A non-load bearing exterior wall cladding system with insulation and a finish coat.",
      },
      {
        name: "Rainscreen",
        definition: "A wall system that provides a drainage plane behind the exterior cladding.",
      },
      {
        name: "Green Roof",
        definition: "A roof covered with vegetation planted over a waterproofing membrane.",
      },
      {
        name: "Single-Ply Roofing",
        definition: "Roofing systems consisting of one layer of membrane material.",
      },
      {
        name: "Built-Up Roofing",
        definition: "Roofing systems composed of multiple layers of bitumen and reinforcing fabrics.",
      },
      {
        name: "Modified Bitumen Roofing",
        definition: "Roofing systems using asphalt modified with polymers for increased flexibility.",
      },
      {
        name: "Metal Roofing",
        definition: "Roofing systems made of metal sheets or panels.",
      },
      {
        name: "Roof Coatings",
        definition: "Materials applied to roofs to extend their life or improve energy efficiency.",
      },
      {
        name: "Gutters and Downspouts",
        definition: "Components that collect and direct rainwater away from a building.",
      },
    ],
  },
  {
    id: "division-08",
    number: "08",
    name: "Openings",
    terms: [
      {
        name: "Doors",
        definition: "Movable barriers that allow access to and from a building or room.",
      },
      {
        name: "Windows",
        definition: "Openings in walls or roofs that allow light and air to enter a building.",
      },
      {
        name: "Skylights",
        definition: "Windows installed in a roof to admit daylight.",
      },
      {
        name: "Hardware",
        definition: "Metal fittings used to operate and secure doors and windows.",
      },
      {
        name: "Glazing",
        definition: "Glass installed in windows, doors, and other openings.",
      },
      {
        name: "Door Frames",
        definition: "The structural components that surround and support a door.",
      },
      {
        name: "Window Frames",
        definition: "The structural components that surround and support a window.",
      },
      {
        name: "Storefront",
        definition: "Non-residential systems of doors and windows at the ground level of a building.",
      },
      {
        name: "Curtain Wall",
        definition: "Non-load-bearing exterior wall cladding that is hung on the building structure.",
      },
      {
        name: "Entrances",
        definition: "Door assemblies that provide access to a building.",
      },
      {
        name: "Door Types",
        definition: "Classifications of doors based on operation, such as swinging, sliding, or revolving.",
      },
      {
        name: "Window Types",
        definition: "Classifications of windows based on operation, such as casement, double-hung, or awning.",
      },
      {
        name: "Door Schedule",
        definition: "A list of doors in a building with information about size, type, hardware, and location.",
      },
      {
        name: "Window Schedule",
        definition: "A list of windows in a building with information about size, type, and location.",
      },
      {
        name: "Weatherstripping",
        definition: "Materials installed around doors and windows to prevent air and water infiltration.",
      },
      {
        name: "Thresholds",
        definition: "Strips of material installed at the bottom of door openings.",
      },
      {
        name: "Louvers",
        definition: "Assemblies of horizontal slats that allow air to pass while excluding rain and light.",
      },
      {
        name: "Glass Types",
        definition: "Classifications of glass based on properties such as strength, insulation, or safety.",
      },
      {
        name: "Door Operators",
        definition: "Devices that automatically open and close doors.",
      },
      {
        name: "Window Treatments",
        definition: "Coverings for windows such as blinds, shades, and curtains.",
      },
    ],
  },
  {
    id: "division-09",
    number: "09",
    name: "Finishes",
    terms: [
      {
        name: "Gypsum Board",
        definition:
          "Panels made of gypsum plaster sandwiched between paper layers, used for interior walls and ceilings.",
      },
      {
        name: "Plaster",
        definition: "A material applied in a plastic state to walls and ceilings to form a hard surface when dry.",
      },
      {
        name: "Tile",
        definition: "Thin pieces of durable material such as ceramic, stone, or vinyl used to cover surfaces.",
      },
      {
        name: "Flooring",
        definition: "Materials used to create a walking surface.",
      },
      {
        name: "Painting",
        definition: "The application of paint to surfaces for protection and decoration.",
      },
      {
        name: "Acoustical Ceilings",
        definition: "Ceiling systems designed to absorb sound and reduce noise.",
      },
      {
        name: "Wall Coverings",
        definition: "Materials such as wallpaper or fabric applied to walls for decoration.",
      },
      {
        name: "Terrazzo",
        definition: "A composite material consisting of chips of marble, quartz, or other materials in a binder.",
      },
      {
        name: "Carpet",
        definition: "A textile floor covering consisting of an upper layer of pile attached to a backing.",
      },
      {
        name: "Resilient Flooring",
        definition: "Flooring materials such as vinyl, rubber, or linoleum that have some elasticity.",
      },
      {
        name: "Wood Flooring",
        definition: "Flooring materials made from solid wood or engineered wood products.",
      },
      {
        name: "Stone Flooring",
        definition: "Flooring materials made from natural stone such as marble, granite, or slate.",
      },
      {
        name: "Stucco",
        definition: "A plaster material used as a decorative and protective coating for walls and ceilings.",
      },
      {
        name: "Suspended Ceilings",
        definition: "Ceiling systems hung below the structural ceiling.",
      },
      {
        name: "Acoustic Treatment",
        definition: "Materials and systems designed to control sound within a space.",
      },
      {
        name: "Epoxy Flooring",
        definition: "A durable flooring system made from epoxy resins.",
      },
      {
        name: "Concrete Finishing",
        definition: "Processes that create decorative or functional finishes on concrete surfaces.",
      },
      {
        name: "Drywall Finishing",
        definition: "The process of preparing gypsum board surfaces for painting or other finishes.",
      },
      {
        name: "Trim",
        definition: "Decorative elements used to finish edges and transitions.",
      },
      {
        name: "Grout",
        definition: "A material used to fill the joints between tiles.",
      },
    ],
  },
  {
    id: "division-10",
    number: "10",
    name: "Specialties",
    terms: [
      {
        name: "Signage",
        definition: "Visual graphics that convey information within a building.",
      },
      {
        name: "Toilet Partitions",
        definition: "Dividers between toilet stalls in restrooms.",
      },
      {
        name: "Fire Extinguisher Cabinets",
        definition: "Enclosures for storing fire extinguishers.",
      },
      {
        name: "Lockers",
        definition: "Small lockable compartments for storing personal items.",
      },
      {
        name: "Toilet Accessories",
        definition: "Items such as soap dispensers, paper towel dispensers, and grab bars in restrooms.",
      },
      {
        name: "Operable Partitions",
        definition: "Movable wall systems that divide spaces.",
      },
      {
        name: "Wall and Door Protection",
        definition: "Materials installed to prevent damage to walls and doors.",
      },
      {
        name: "Toilet Compartments",
        definition: "Enclosures for toilets in restrooms.",
      },
      {
        name: "Shower and Tub Enclosures",
        definition: "Partitions that surround showers and tubs.",
      },
      {
        name: "Cubicles",
        definition: "Partially enclosed workspaces in an office.",
      },
      {
        name: "Directories",
        definition: "Displays that list occupants or departments in a building.",
      },
      {
        name: "Bulletin Boards",
        definition: "Surfaces for posting notices and information.",
      },
      {
        name: "Display Cases",
        definition: "Enclosures with glass fronts for exhibiting items.",
      },
      {
        name: "Flagpoles",
        definition: "Poles for displaying flags.",
      },
      {
        name: "Postal Specialties",
        definition: "Equipment for mail delivery and collection.",
      },
      {
        name: "Fireplaces",
        definition: "Structures designed for containing fires.",
      },
      {
        name: "Access Flooring",
        definition: "Elevated floor systems that create a void for the passage of mechanical and electrical services.",
      },
      {
        name: "Pest Control",
        definition: "Systems and devices for preventing or eliminating pests.",
      },
      {
        name: "Bird Control",
        definition: "Systems and devices for preventing birds from roosting on buildings.",
      },
      {
        name: "Sun Control Devices",
        definition: "Systems that regulate the amount of sunlight entering a building.",
      },
    ],
  },
  {
    id: "division-11",
    number: "11",
    name: "Equipment",
    terms: [
      {
        name: "Commercial Kitchen Equipment",
        definition: "Appliances and fixtures used in professional food preparation areas.",
      },
      {
        name: "Laboratory Equipment",
        definition: "Specialized tools and devices used in scientific research facilities.",
      },
      {
        name: "Medical Equipment",
        definition: "Devices used in healthcare facilities for diagnosis and treatment.",
      },
      {
        name: "Audio-Visual Equipment",
        definition: "Devices for presenting and recording sound and images.",
      },
      {
        name: "Athletic Equipment",
        definition: "Items used for sports and physical activities.",
      },
      {
        name: "Food Service Equipment",
        definition: "Appliances and fixtures used in commercial food service operations.",
      },
      {
        name: "Residential Equipment",
        definition: "Appliances and fixtures used in residential settings.",
      },
      {
        name: "Waste Handling Equipment",
        definition: "Devices for collecting, compacting, and disposing of waste.",
      },
      {
        name: "Loading Dock Equipment",
        definition: "Devices used to facilitate the loading and unloading of vehicles.",
      },
      {
        name: "Detention Equipment",
        definition: "Specialized items used in correctional facilities.",
      },
      {
        name: "Library Equipment",
        definition: "Specialized items used in libraries, such as book stacks and circulation desks.",
      },
      {
        name: "Theater Equipment",
        definition: "Specialized items used in theaters, such as stages and seating.",
      },
      {
        name: "Ecclesiastical Equipment",
        definition: "Specialized items used in religious facilities.",
      },
      {
        name: "Parking Equipment",
        definition: "Devices used to control access to parking facilities and collect fees.",
      },
      {
        name: "Laundry Equipment",
        definition:
          "Appliances and fixtures used for washing and drying clothes in commercial or institutional settings.",
      },
      {
        name: "Vending Equipment",
        definition: "Machines that dispense products automatically when money is inserted.",
      },
      {
        name: "Fitness Equipment",
        definition: "Machines and devices used for physical exercise and training.",
      },
      {
        name: "Darkroom Equipment",
        definition: "Specialized items used in photographic processing facilities.",
      },
      {
        name: "Projection Screens",
        definition: "Surfaces onto which images are projected for viewing.",
      },
      {
        name: "Recycling Equipment",
        definition: "Devices used to process materials for recycling.",
      },
    ],
  },
  {
    id: "division-12",
    number: "12",
    name: "Furnishings",
    terms: [
      {
        name: "Casework",
        definition: "Custom-made cabinets and storage units.",
      },
      {
        name: "Window Treatments",
        definition: "Coverings for windows such as blinds, shades, and curtains.",
      },
      {
        name: "Furniture",
        definition: "Movable objects that support human activities such as seating and storage.",
      },
      {
        name: "Rugs and Mats",
        definition: "Textile floor coverings that are not installed wall-to-wall.",
      },
      {
        name: "Art",
        definition: "Decorative objects displayed in a building.",
      },
      {
        name: "Office Furniture",
        definition: "Furniture designed for use in office environments.",
      },
      {
        name: "Seating",
        definition: "Furniture designed for sitting, such as chairs, sofas, and benches.",
      },
      {
        name: "Tables",
        definition: "Furniture with a flat top and one or more legs.",
      },
      {
        name: "Systems Furniture",
        definition: "Modular furniture designed to divide space and provide work surfaces and storage.",
      },
      {
        name: "Hospitality Furniture",
        definition: "Furniture designed for use in hotels, restaurants, and similar facilities.",
      },
      {
        name: "Healthcare Furniture",
        definition: "Furniture designed for use in medical facilities.",
      },
      {
        name: "Educational Furniture",
        definition: "Furniture designed for use in schools and other educational facilities.",
      },
      {
        name: "Laboratory Furniture",
        definition: "Furniture designed for use in scientific research facilities.",
      },
      {
        name: "Dormitory Furniture",
        definition: "Furniture designed for use in residential facilities for students.",
      },
      {
        name: "Upholstery",
        definition: "The materials used to cover, pad, and fill furniture.",
      },
      {
        name: "Draperies",
        definition: "Fabric window coverings that hang in folds.",
      },
      {
        name: "Blinds",
        definition: "Window coverings with adjustable horizontal or vertical slats.",
      },
      {
        name: "Shades",
        definition: "Window coverings that roll or fold up.",
      },
      {
        name: "Fabrics",
        definition: "Cloth materials used for furnishings.",
      },
      {
        name: "Planters",
        definition: "Containers for growing plants indoors.",
      },
    ],
  },
  {
    id: "division-13",
    number: "13",
    name: "Special Construction",
    terms: [
      {
        name: "Pre-Engineered Structures",
        definition: "Buildings designed and manufactured off-site and assembled on-site.",
      },
      {
        name: "Swimming Pools",
        definition: "Water-filled structures designed for swimming and other water activities.",
      },
      {
        name: "Clean Rooms",
        definition: "Controlled environments with low levels of pollutants such as dust and microbes.",
      },
      {
        name: "Sound-Controlled Rooms",
        definition: "Spaces designed to minimize sound transmission in or out.",
      },
      {
        name: "Radiation Protection",
        definition: "Systems that shield occupants from harmful radiation.",
      },
      {
        name: "Air-Supported Structures",
        definition: "Buildings that are supported by pressurized air.",
      },
      {
        name: "Cable-Supported Structures",
        definition: "Buildings that are supported by cables under tension.",
      },
      {
        name: "Space Frames",
        definition: "Three-dimensional truss-like structures.",
      },
      {
        name: "Geodesic Domes",
        definition: "Hemispherical thin-shell structures based on a geodesic polyhedron.",
      },
      {
        name: "Tensile Structures",
        definition: "Buildings that are supported by elements under tension rather than compression.",
      },
      {
        name: "Prefabricated Buildings",
        definition: "Structures manufactured off-site and transported to the building site for assembly.",
      },
      {
        name: "Modular Buildings",
        definition: "Structures composed of multiple factory-built sections.",
      },
      {
        name: "Controlled Environment Rooms",
        definition: "Spaces with regulated temperature, humidity, and other conditions.",
      },
      {
        name: "Vaults",
        definition: "Secure rooms for storing valuable items.",
      },
      {
        name: "Observatories",
        definition: "Structures designed for observing astronomical events.",
      },
      {
        name: "Aquariums",
        definition: "Facilities for keeping and displaying aquatic animals and plants.",
      },
      {
        name: "Kennels",
        definition: "Facilities for housing dogs or other animals.",
      },
      {
        name: "Aviaries",
        definition: "Enclosures for keeping birds.",
      },
      {
        name: "Greenhouses",
        definition: "Structures with transparent walls and roof for growing plants.",
      },
      {
        name: "Saunas",
        definition: "Small rooms designed to experience dry or wet heat sessions.",
      },
    ],
  },
  {
    id: "division-14",
    number: "14",
    name: "Conveying Equipment",
    terms: [
      {
        name: "Elevators",
        definition: "Vertical transportation devices that move people or goods between floors.",
      },
      {
        name: "Escalators",
        definition: "Moving staircases that transport people between floors.",
      },
      {
        name: "Moving Walks",
        definition: "Slow-moving conveyor mechanisms that transport people horizontally or on an incline.",
      },
      {
        name: "Dumbwaiters",
        definition: "Small freight elevators used to transport objects rather than people.",
      },
      {
        name: "Material Handling Systems",
        definition: "Equipment used to move goods within a building.",
      },
      {
        name: "Pneumatic Tube Systems",
        definition: "Systems that propel cylindrical containers through tubes using compressed air.",
      },
      {
        name: "Lifts",
        definition: "Devices that raise and lower people or objects over a short vertical distance.",
      },
      {
        name: "Cranes",
        definition: "Machines equipped with a hoist, wire ropes, and sheaves used to lift and lower materials.",
      },
      {
        name: "Hoists",
        definition: "Devices used for lifting or lowering loads by means of a drum or lift-wheel.",
      },
      {
        name: "Conveyors",
        definition: "Mechanical systems for moving materials or objects.",
      },
      {
        name: "Turntables",
        definition: "Rotating platforms used to change the direction of vehicles or other objects.",
      },
      {
        name: "Wheelchair Lifts",
        definition: "Devices designed to transport people in wheelchairs up and down stairs or between levels.",
      },
      {
        name: "Vehicle Lifts",
        definition: "Devices used to raise vehicles for maintenance or storage.",
      },
      {
        name: "Dock Levelers",
        definition: "Devices that bridge the gap between a loading dock and a vehicle.",
      },
      {
        name: "Chutes",
        definition: "Inclined or vertical channels for conveying materials downward by gravity.",
      },
      {
        name: "Monorails",
        definition: "Transportation systems in which vehicles travel along a single rail.",
      },
      {
        name: "Automated Guided Vehicles",
        definition: "Driverless transport systems used for material handling.",
      },
      {
        name: "Elevator Cabs",
        definition: "The enclosures that carry passengers or freight in an elevator system.",
      },
      {
        name: "Elevator Controls",
        definition: "Systems that regulate the operation of elevators.",
      },
      {
        name: "Elevator Doors",
        definition: "Barriers that open and close to allow access to elevator cabs.",
      },
    ],
  },
  {
    id: "division-21",
    number: "21",
    name: "Fire Suppression",
    terms: [
      {
        name: "Fire Sprinkler Systems",
        definition: "Networks of pipes and sprinkler heads that discharge water when activated by heat.",
      },
      {
        name: "Fire Pumps",
        definition: "Devices that increase water pressure for fire suppression systems.",
      },
      {
        name: "Clean Agent Systems",
        definition: "Fire suppression systems that use gases or chemicals instead of water.",
      },
      {
        name: "Standpipe Systems",
        definition: "Pipes that provide water for firefighting operations within a building.",
      },
      {
        name: "Fire Extinguishers",
        definition: "Portable devices used to control small fires.",
      },
      {
        name: "Fire Department Connections",
        definition: "Fittings through which fire departments can pump water into a building's fire suppression system.",
      },
      {
        name: "Fire Hose Cabinets",
        definition: "Enclosures containing fire hoses and other firefighting equipment.",
      },
      {
        name: "Sprinkler Heads",
        definition: "Devices that distribute water from a fire sprinkler system when activated by heat.",
      },
      {
        name: "Deluge Systems",
        definition: "Fire suppression systems in which all sprinkler heads open simultaneously when activated.",
      },
      {
        name: "Pre-Action Systems",
        definition: "Fire suppression systems that require two separate events to occur before water is discharged.",
      },
      {
        name: "Foam Systems",
        definition: "Fire suppression systems that use a mixture of water and foam concentrate.",
      },
      {
        name: "Water Mist Systems",
        definition: "Fire suppression systems that use very fine water droplets.",
      },
      {
        name: "Carbon Dioxide Systems",
        definition: "Fire suppression systems that use carbon dioxide gas.",
      },
      {
        name: "Halon Replacement Systems",
        definition: "Fire suppression systems that use environmentally acceptable alternatives to Halon.",
      },
      {
        name: "Dry Chemical Systems",
        definition: "Fire suppression systems that use powder-based agents.",
      },
      {
        name: "Wet Chemical Systems",
        definition:
          "Fire suppression systems that use a solution of water and potassium acetate, potassium carbonate, or potassium citrate.",
      },
      {
        name: "Fire Suppression Water Storage Tanks",
        definition: "Reservoirs that hold water for fire suppression systems.",
      },
      {
        name: "Fire Hydrants",
        definition: "Connections that provide access to a water supply for firefighting purposes.",
      },
      {
        name: "Fire Valves",
        definition: "Devices that control the flow of water in fire suppression systems.",
      },
      {
        name: "Fire Suppression Monitoring",
        definition: "Systems that detect and report the status of fire suppression systems.",
      },
    ],
  },
  {
    id: "division-22",
    number: "22",
    name: "Plumbing",
    terms: [
      {
        name: "Plumbing Fixtures",
        definition: "Devices that use water and are connected to a plumbing system, such as sinks and toilets.",
      },
      {
        name: "Domestic Water Distribution",
        definition: "Systems that deliver potable water throughout a building.",
      },
      {
        name: "Sanitary Waste",
        definition: "Systems that remove wastewater from a building.",
      },
      {
        name: "Storm Drainage",
        definition: "Systems that collect and remove rainwater from a building.",
      },
      {
        name: "Plumbing Insulation",
        definition: "Materials that reduce heat transfer through plumbing pipes.",
      },
      {
        name: "Plumbing Piping",
        definition: "Tubes that convey fluids in plumbing systems.",
      },
      {
        name: "Plumbing Valves",
        definition: "Devices that regulate the flow of fluids in plumbing systems.",
      },
      {
        name: "Plumbing Pumps",
        definition: "Devices that move fluids in plumbing systems.",
      },
      {
        name: "Water Heaters",
        definition: "Appliances that heat water for domestic use.",
      },
      {
        name: "Backflow Preventers",
        definition: "Devices that prevent water from flowing backward in a plumbing system.",
      },
      {
        name: "Pressure Regulators",
        definition: "Devices that reduce water pressure to a desired level.",
      },
      {
        name: "Water Softeners",
        definition: "Devices that remove minerals from hard water.",
      },
      {
        name: "Water Filters",
        definition: "Devices that remove impurities from water.",
      },
      {
        name: "Grease Interceptors",
        definition: "Devices that trap grease from wastewater before it enters the sanitary sewer system.",
      },
      {
        name: "Sewage Ejectors",
        definition: "Pumps that lift sewage to a higher elevation.",
      },
      {
        name: "Sump Pumps",
        definition: "Pumps that remove water collected in sump pits.",
      },
      {
        name: "Plumbing Fixtures Schedule",
        definition: "A list of plumbing fixtures in a building with information about type, size, and location.",
      },
      {
        name: "Plumbing Risers",
        definition: "Vertical pipes that distribute water or remove waste in multi-story buildings.",
      },
      {
        name: "Plumbing Vents",
        definition: "Pipes that allow air to enter a drainage system to maintain proper pressure.",
      },
      {
        name: "Plumbing Traps",
        definition: "Devices that prevent sewer gases from entering a building through drain pipes.",
      },
    ],
  },
  {
    id: "division-23",
    number: "23",
    name: "Heating, Ventilating, and Air Conditioning (HVAC)",
    terms: [
      {
        name: "HVAC Ducts",
        definition: "Conduits used to deliver and remove air in HVAC systems.",
      },
      {
        name: "HVAC Piping",
        definition: "Pipes that carry water, steam, or refrigerant in HVAC systems.",
      },
      {
        name: "Air Handling Units",
        definition: "Equipment that conditions and circulates air as part of an HVAC system.",
      },
      {
        name: "Chillers",
        definition: "Devices that remove heat from a liquid via a vapor-compression or absorption refrigeration cycle.",
      },
      {
        name: "Boilers",
        definition: "Vessels in which water or other fluid is heated for use in heating systems.",
      },
      {
        name: "HVAC Fans",
        definition: "Devices that move air in HVAC systems.",
      },
      {
        name: "HVAC Pumps",
        definition: "Devices that move water or other fluids in HVAC systems.",
      },
      {
        name: "HVAC Controls",
        definition: "Systems that regulate the operation of HVAC equipment.",
      },
      {
        name: "Thermostats",
        definition: "Devices that control heating and cooling systems to maintain a desired temperature.",
      },
      {
        name: "Diffusers",
        definition: "Devices that distribute air from HVAC systems into a space.",
      },
      {
        name: "Grilles",
        definition: "Coverings for air openings in HVAC systems.",
      },
      {
        name: "Registers",
        definition: "Grilles with dampers that control airflow.",
      },
      {
        name: "Dampers",
        definition: "Devices that regulate airflow in HVAC systems.",
      },
      {
        name: "Heat Exchangers",
        definition: "Devices that transfer heat between two or more fluids without mixing them.",
      },
      {
        name: "Cooling Towers",
        definition: "Devices that reject heat from HVAC systems to the atmosphere.",
      },
      {
        name: "VAV (Variable Air Volume) Boxes",
        definition: "Devices that vary the amount of air delivered to a space based on heating and cooling needs.",
      },
      {
        name: "HVAC Insulation",
        definition: "Materials that reduce heat transfer through HVAC components.",
      },
      {
        name: "Refrigerant",
        definition: "A substance used in a heat cycle that undergoes phase changes from a gas to a liquid and back.",
      },
      {
        name: "HVAC Filters",
        definition: "Devices that remove particles from air in HVAC systems.",
      },
      {
        name: "HVAC Balancing",
        definition: "The process of adjusting HVAC systems to achieve proper air and water flow rates.",
      },
    ],
  },
  {
    id: "division-25",
    number: "25",
    name: "Integrated Automation",
    terms: [
      {
        name: "Building Automation System (BAS)",
        definition:
          "Computer-based control system installed in buildings to control and monitor mechanical and electrical equipment.",
      },
      {
        name: "Control Dampers",
        definition: "Devices that regulate airflow in HVAC systems.",
      },
      {
        name: "Control Valves",
        definition: "Devices that regulate fluid flow in building systems.",
      },
      {
        name: "Sensors",
        definition: "Devices that detect and respond to physical stimuli such as temperature or pressure.",
      },
      {
        name: "Actuators",
        definition: "Devices that convert energy into motion to operate building systems.",
      },
      {
        name: "Controllers",
        definition: "Devices that receive input from sensors and send commands to actuators.",
      },
      {
        name: "Building Management System (BMS)",
        definition:
          "A computer-based system that monitors and controls a building's mechanical and electrical equipment.",
      },
      {
        name: "Direct Digital Control (DDC)",
        definition:
          "A type of automated control system in which digital computers or microprocessors are used to control processes or machines.",
      },
      {
        name: "Energy Management System (EMS)",
        definition: "A system that monitors, controls, and optimizes the energy consumption of a building.",
      },
      {
        name: "Programmable Logic Controller (PLC)",
        definition: "A digital computer used for automation of industrial processes.",
      },
      {
        name: "Human-Machine Interface (HMI)",
        definition: "The user interface that connects an operator to a controller for an industrial system.",
      },
      {
        name: "SCADA (Supervisory Control and Data Acquisition)",
        definition:
          "A system that uses computers, networked data communications, and graphical user interfaces for high-level process supervisory management.",
      },
      {
        name: "Network",
        definition: "A system of interconnected computers and devices that can communicate with each other.",
      },
      {
        name: "Protocol",
        definition: "A set of rules governing the exchange or transmission of data between devices.",
      },
      {
        name: "Gateway",
        definition: "A device that connects two different networks or systems and translates between their protocols.",
      },
      {
        name: "Interoperability",
        definition: "The ability of different systems to work together and exchange information.",
      },
      {
        name: "Integration",
        definition: "The process of bringing together different systems to function as a coordinated whole.",
      },
      {
        name: "Automation Sequence",
        definition: "A series of programmed instructions that control the operation of building systems.",
      },
      {
        name: "Trending",
        definition: "The recording and analysis of data over time to identify patterns and anomalies.",
      },
      {
        name: "Alarming",
        definition: "The process of notifying operators of abnormal conditions in building systems.",
      },
    ],
  },
  {
    id: "division-26",
    number: "26",
    name: "Electrical",
    terms: [
      {
        name: "Wiring",
        definition: "Conductors used to carry electricity throughout a building.",
      },
      {
        name: "Panelboards",
        definition: "Enclosures containing circuit breakers or fuses that distribute electricity to branch circuits.",
      },
      {
        name: "Transformers",
        definition:
          "Devices that transfer electrical energy between two or more circuits through electromagnetic induction.",
      },
      {
        name: "Lighting Fixtures",
        definition: "Devices that produce artificial light in a building.",
      },
      {
        name: "Emergency Power Systems",
        definition: "Equipment that provides electricity when the normal power supply is interrupted.",
      },
      {
        name: "Switchgear",
        definition: "Equipment that controls, protects, and isolates electrical equipment.",
      },
      {
        name: "Motor Control Centers",
        definition: "Assemblies of motor starters and associated equipment.",
      },
      {
        name: "Generators",
        definition: "Machines that convert mechanical energy into electrical energy.",
      },
      {
        name: "Uninterruptible Power Supply (UPS)",
        definition: "A device that provides emergency power when the input power source fails.",
      },
      {
        name: "Transfer Switches",
        definition: "Devices that switch a load between two power sources.",
      },
      {
        name: "Circuit Breakers",
        definition:
          "Automatically operated electrical switches designed to protect an electrical circuit from damage caused by excess current.",
      },
      {
        name: "Fuses",
        definition:
          "Electrical safety devices that operate to provide overcurrent protection of an electrical circuit.",
      },
      {
        name: "Grounding",
        definition: "The connection of electrical circuits or equipment to the earth.",
      },
      {
        name: "Lightning Protection",
        definition: "Systems that protect buildings from damage due to lightning strikes.",
      },
      {
        name: "Electrical Raceways",
        definition: "Enclosed conduits that form a physical pathway for electrical wiring.",
      },
      {
        name: "Junction Boxes",
        definition: "Enclosures housing electrical connections.",
      },
      {
        name: "Outlets",
        definition: "Points of connection for electrical devices.",
      },
      {
        name: "Switches",
        definition: "Devices for making and breaking the connection in an electrical circuit.",
      },
      {
        name: "Electrical Load Calculation",
        definition: "The process of determining the electrical demand of a building or system.",
      },
      {
        name: "Electrical Schedule",
        definition: "A list of electrical equipment in a building with information about type, size, and location.",
      },
    ],
  },
  {
    id: "division-27",
    number: "27",
    name: "Communications",
    terms: [
      {
        name: "Structured Cabling",
        definition:
          "Infrastructure of cables and associated hardware that provides a comprehensive telecommunications system.",
      },
      {
        name: "Data Networks",
        definition: "Systems that allow computers and other devices to exchange data.",
      },
      {
        name: "Voice Communications",
        definition: "Systems that allow people to speak to each other over distances.",
      },
      {
        name: "Audio-Video Systems",
        definition: "Equipment that produces and manages sound and images for communication or entertainment.",
      },
      {
        name: "Distributed Antenna Systems",
        definition: "Networks of antennas that provide wireless service within a building.",
      },
      {
        name: "Telecommunications Rooms",
        definition: "Spaces dedicated to housing telecommunications equipment.",
      },
      {
        name: "Cable Trays",
        definition: "Support systems for cables that run horizontally through a building.",
      },
      {
        name: "Patch Panels",
        definition: "Hardware units containing ports for connecting and managing cables.",
      },
      {
        name: "Network Switches",
        definition: "Devices that connect devices on a computer network.",
      },
      {
        name: "Routers",
        definition: "Devices that forward data packets between computer networks.",
      },
      {
        name: "Wireless Access Points",
        definition: "Devices that allow wireless devices to connect to a wired network.",
      },
      {
        name: "Fiber Optic Cable",
        definition: "A type of cable that uses glass or plastic fibers to transmit data as pulses of light.",
      },
      {
        name: "Copper Cable",
        definition: "A type of cable that uses copper conductors to transmit electrical signals.",
      },
      {
        name: "Coaxial Cable",
        definition: "A type of cable with a central conductor surrounded by insulation and a conductive shield.",
      },
      {
        name: "Telecommunications Outlets",
        definition: "Points of connection for telecommunications devices.",
      },
      {
        name: "Public Address Systems",
        definition:
          "Electronic sound amplification and distribution systems used to allow a person to address a large public.",
      },
      {
        name: "Intercom Systems",
        definition: "Two-way communication systems for use within a building or small collection of buildings.",
      },
      {
        name: "Sound Masking Systems",
        definition:
          "Systems that add background noise to reduce the intelligibility of human speech and reduce distractions.",
      },
      {
        name: "Telecommunications Grounding",
        definition: "The connection of telecommunications equipment to the earth.",
      },
      {
        name: "Telecommunications Testing",
        definition: "The process of verifying that telecommunications systems meet specified requirements.",
      },
    ],
  },
  {
    id: "division-28",
    number: "28",
    name: "Electronic Safety and Security",
    terms: [
      {
        name: "Fire Detection and Alarm",
        definition: "Systems that detect fires and alert occupants.",
      },
      {
        name: "Access Control",
        definition: "Systems that restrict entry to authorized persons.",
      },
      {
        name: "Video Surveillance",
        definition: "Systems that monitor and record activities in and around a building.",
      },
      {
        name: "Intrusion Detection",
        definition: "Systems that detect unauthorized entry into a building.",
      },
      {
        name: "Mass Notification",
        definition: "Systems that provide information to large groups of people in emergency situations.",
      },
      {
        name: "Electronic Security Systems",
        definition: "Integrated systems that protect buildings and occupants from various threats.",
      },
      {
        name: "Card Readers",
        definition: "Devices that read data from cards for access control purposes.",
      },
      {
        name: "Biometric Readers",
        definition:
          "Devices that identify people based on physical characteristics such as fingerprints or facial features.",
      },
      {
        name: "Door Controllers",
        definition: "Devices that manage access to doors in a building.",
      },
      {
        name: "Security Cameras",
        definition: "Devices that capture video images for surveillance purposes.",
      },
      {
        name: "Digital Video Recorders",
        definition: "Devices that record video from security cameras.",
      },
      {
        name: "Motion Detectors",
        definition: "Devices that detect movement in a monitored area.",
      },
      {
        name: "Glass Break Detectors",
        definition: "Devices that detect the sound or vibration of breaking glass.",
      },
      {
        name: "Duress Alarms",
        definition: "Systems that allow people to signal for help in emergency situations.",
      },
      {
        name: "Security Management System",
        definition: "Software that integrates and manages various security systems.",
      },
      {
        name: "Visitor Management",
        definition: "Systems that track and control visitor access to a building.",
      },
      {
        name: "Emergency Call Stations",
        definition: "Devices that allow people to call for help in emergency situations.",
      },
      {
        name: "Security Gates",
        definition: "Barriers that control vehicle access to a property.",
      },
      {
        name: "Security Bollards",
        definition: "Short posts that prevent vehicle access to pedestrian areas or buildings.",
      },
      {
        name: "Security Lighting",
        definition: "Lighting designed to deter crime and enhance security.",
      },
    ],
  },
  {
    id: "division-31",
    number: "31",
    name: "Earthwork",
    terms: [
      {
        name: "Excavation",
        definition: "The process of removing earth to form a cavity in the ground.",
      },
      {
        name: "Grading",
        definition: "The process of ensuring land has an even slope for proper drainage.",
      },
      {
        name: "Erosion Control",
        definition: "Measures taken to prevent soil from being moved by water or wind.",
      },
      {
        name: "Soil Stabilization",
        definition: "Methods used to improve soil properties for construction purposes.",
      },
      {
        name: "Dewatering",
        definition: "The removal of water from soil or an excavation site.",
      },
      {
        name: "Clearing and Grubbing",
        definition: "The removal of trees, shrubs, and other vegetation from a site.",
      },
      {
        name: "Backfill",
        definition: "The process of refilling an excavation with soil or other material.",
      },
      {
        name: "Compaction",
        definition: "The process of increasing the density of soil by applying pressure.",
      },
      {
        name: "Cut and Fill",
        definition:
          "The process of excavating material from one area and using it to create embankments or fill in another area.",
      },
      {
        name: "Trenching",
        definition: "The process of digging narrow excavations for utilities or foundations.",
      },
      {
        name: "Shoring",
        definition: "Temporary supports used to prevent soil or structures from collapsing during excavation.",
      },
      {
        name: "Underpinning",
        definition: "The process of strengthening the foundation of an existing structure.",
      },
      {
        name: "Geotextiles",
        definition:
          "Permeable fabrics used with soil for separation, filtration, reinforcement, protection, or drainage.",
      },
      {
        name: "Soil Testing",
        definition: "The process of analyzing soil to determine its properties and suitability for construction.",
      },
      {
        name: "Rock Removal",
        definition: "The process of breaking and removing rock from a construction site.",
      },
      {
        name: "Earthwork Calculations",
        definition: "The process of determining the volume of earth to be moved in a construction project.",
      },
      {
        name: "Borrow Pit",
        definition: "An area where soil, gravel, or sand is excavated for use at another location.",
      },
      {
        name: "Spoil Area",
        definition: "A location where excess excavated material is deposited.",
      },
      {
        name: "Slope Protection",
        definition: "Measures taken to prevent erosion or collapse of sloped surfaces.",
      },
      {
        name: "Soil Classification",
        definition: "The categorization of soil based on its properties and characteristics.",
      },
    ],
  },
  {
    id: "division-32",
    number: "32",
    name: "Exterior Improvements",
    terms: [
      {
        name: "Paving",
        definition: "The process of laying a hard surface such as asphalt or concrete on an area of ground.",
      },
      {
        name: "Curbs and Gutters",
        definition:
          "Structures along the edge of a road that direct water flow and separate the road from other areas.",
      },
      {
        name: "Fences and Gates",
        definition: "Structures that enclose an area or control access to it.",
      },
      {
        name: "Landscaping",
        definition:
          "The process of making an area of land more attractive by altering the existing design and planting trees, shrubs, etc.",
      },
      {
        name: "Site Furnishings",
        definition: "Objects placed in outdoor spaces for use by people, such as benches and trash receptacles.",
      },
      {
        name: "Irrigation",
        definition: "Systems that supply water to plants in a controlled manner.",
      },
      {
        name: "Planting",
        definition: "The process of putting plants in the ground.",
      },
      {
        name: "Turf and Grasses",
        definition: "Ground cover consisting of grass and the soil beneath it.",
      },
      {
        name: "Retaining Walls",
        definition: "Structures designed to restrain soil to a slope that it would not naturally keep to.",
      },
      {
        name: "Parking Lots",
        definition: "Areas designated for parking vehicles.",
      },
      {
        name: "Walkways",
        definition: "Paths designed for pedestrian use.",
      },
      {
        name: "Bike Paths",
        definition: "Paths designed for bicycle use.",
      },
      {
        name: "Athletic Fields",
        definition: "Areas designed for sports and recreational activities.",
      },
      {
        name: "Playground Equipment",
        definition: "Structures designed for children to play on.",
      },
      {
        name: "Site Drainage",
        definition: "Systems that collect and remove water from a site.",
      },
      {
        name: "Bollards",
        definition: "Short posts used to prevent vehicle access to an area.",
      },
      {
        name: "Signage",
        definition: "Visual graphics that convey information in outdoor spaces.",
      },
      {
        name: "Outdoor Lighting",
        definition: "Fixtures that provide illumination for exterior spaces.",
      },
      {
        name: "Hardscape",
        definition: "The non-living elements of landscaping, such as paving, walls, and structures.",
      },
      {
        name: "Softscape",
        definition: "The living elements of landscaping, such as plants, trees, and shrubs.",
      },
    ],
  },
  {
    id: "division-33",
    number: "33",
    name: "Utilities",
    terms: [
      {
        name: "Water Utilities",
        definition: "Systems that supply water to a site from an external source.",
      },
      {
        name: "Sanitary Sewerage Utilities",
        definition: "Systems that remove wastewater from a site to an external treatment facility.",
      },
      {
        name: "Storm Drainage Utilities",
        definition: "Systems that collect and remove rainwater from a site.",
      },
      {
        name: "Electrical Utilities",
        definition: "Systems that supply electricity to a site from an external source.",
      },
      {
        name: "Communications Utilities",
        definition: "Systems that provide telecommunications services to a site from external sources.",
      },
      {
        name: "Natural Gas Utilities",
        definition: "Systems that supply natural gas to a site from an external source.",
      },
      {
        name: "Utility Manholes",
        definition: "Access points to underground utility systems.",
      },
      {
        name: "Utility Vaults",
        definition: "Underground enclosures that house utility equipment.",
      },
      {
        name: "Utility Poles",
        definition: "Structures that support overhead utility lines.",
      },
      {
        name: "Utility Trenches",
        definition: "Narrow excavations for installing underground utilities.",
      },
      {
        name: "Utility Markers",
        definition: "Devices that indicate the location of underground utilities.",
      },
      {
        name: "Utility Meters",
        definition: "Devices that measure the consumption of utilities such as water, gas, or electricity.",
      },
      {
        name: "Backflow Preventers",
        definition: "Devices that prevent water from flowing backward in a water supply system.",
      },
      {
        name: "Catch Basins",
        definition: "Receptacles designed to trap debris that might otherwise enter a storm drainage system.",
      },
      {
        name: "Culverts",
        definition: "Structures that allow water to flow under a road, railroad, or similar obstruction.",
      },
      {
        name: "Fire Hydrants",
        definition: "Connections that provide access to a water supply for firefighting purposes.",
      },
      {
        name: "Transformers",
        definition: "Devices that change the voltage of electricity in a power distribution system.",
      },
      {
        name: "Utility Easements",
        definition: "Legal rights to use another person's land for utility purposes.",
      },
      {
        name: "Utility Coordination",
        definition: "The process of managing the installation and maintenance of multiple utilities in a shared space.",
      },
      {
        name: "Utility Locating",
        definition: "The process of identifying and marking the location of underground utilities.",
      },
    ],
  },
  {
    id: "division-34",
    number: "34",
    name: "Transportation",
    terms: [
      {
        name: "Railway Track and Accessories",
        definition: "Components of railway systems including rails, ties, and ballast.",
      },
      {
        name: "Railway Signals",
        definition: "Devices that communicate information to train operators.",
      },
      {
        name: "Roadways",
        definition: "Paved surfaces designed for vehicular traffic.",
      },
      {
        name: "Traffic Signals",
        definition: "Devices that control vehicular traffic flow at intersections.",
      },
      {
        name: "Airfield Paving",
        definition: "Surfaces designed for aircraft operations.",
      },
      {
        name: "Railway Stations",
        definition: "Facilities where trains stop to load and unload passengers and freight.",
      },
      {
        name: "Bus Stations",
        definition: "Facilities where buses stop to load and unload passengers.",
      },
      {
        name: "Parking Structures",
        definition: "Multi-level facilities designed for parking vehicles.",
      },
      {
        name: "Traffic Signs",
        definition: "Devices that provide information to vehicle operators and pedestrians.",
      },
      {
        name: "Pavement Markings",
        definition: "Lines, symbols, and words painted on roadways to provide information to vehicle operators.",
      },
      {
        name: "Guardrails",
        definition: "Barriers installed along roadways to prevent vehicles from leaving the road.",
      },
      {
        name: "Toll Plazas",
        definition: "Facilities where tolls are collected from vehicles using a road, bridge, or tunnel.",
      },
      {
        name: "Traffic Barriers",
        definition: "Structures designed to prevent vehicle access to certain areas or to separate traffic.",
      },
      {
        name: "Noise Barriers",
        definition: "Structures designed to reduce the noise from traffic that reaches adjacent areas.",
      },
      {
        name: "Railway Crossings",
        definition: "Intersections where railways and roadways meet at the same level.",
      },
      {
        name: "Bridges",
        definition: "Structures that span obstacles such as bodies of water, valleys, or roads.",
      },
      {
        name: "Tunnels",
        definition: "Underground passages for transportation.",
      },
      {
        name: "Heliports",
        definition: "Areas designated for helicopter landings and takeoffs.",
      },
      {
        name: "Runways",
        definition: "Surfaces on which aircraft take off and land.",
      },
      {
        name: "Taxiways",
        definition: "Paths for aircraft to travel between runways and other areas of an airport.",
      },
    ],
  },
  {
    id: "division-35",
    number: "35",
    name: "Waterway and Marine Construction",
    terms: [
      {
        name: "Dredging",
        definition: "The process of removing sediment from the bottom of bodies of water.",
      },
      {
        name: "Marine Structures",
        definition: "Constructions built in or over water, such as piers and docks.",
      },
      {
        name: "Shoreline Protection",
        definition: "Measures taken to prevent erosion of land along bodies of water.",
      },
      {
        name: "Navigation Aids",
        definition: "Devices that assist in the navigation of vessels, such as buoys and beacons.",
      },
      {
        name: "Locks and Dams",
        definition:
          "Structures that control water levels and allow vessels to pass between different water elevations.",
      },
      {
        name: "Marinas",
        definition: "Facilities for docking and servicing pleasure boats.",
      },
      {
        name: "Breakwaters",
        definition: "Structures built to protect a shore area, harbor, or basin from waves.",
      },
      {
        name: "Seawalls",
        definition: "Structures built along shorelines to prevent erosion and damage from waves.",
      },
      {
        name: "Jetties",
        definition: "Structures extending into a body of water to influence water currents or tides.",
      },
      {
        name: "Groins",
        definition: "Structures extending from a shore to prevent beach erosion.",
      },
      {
        name: "Revetments",
        definition: "Facing materials placed on embankments to prevent erosion.",
      },
      {
        name: "Bulkheads",
        definition: "Vertical walls designed to hold back earth and water.",
      },
      {
        name: "Piers",
        definition: "Structures extending from shore into water, supported by piles.",
      },
      {
        name: "Wharves",
        definition: "Structures built along the shore where ships may dock to load and unload cargo or passengers.",
      },
      {
        name: "Dolphins",
        definition:
          "Structures extending above the water surface, not connected to shore, used for mooring or guiding vessels.",
      },
      {
        name: "Fenders",
        definition: "Devices installed on marine structures to absorb the impact of vessels.",
      },
      {
        name: "Moorings",
        definition: "Devices to which vessels can be secured.",
      },
      {
        name: "Boat Ramps",
        definition: "Inclined planes extending from shore into water for launching and retrieving boats.",
      },
      {
        name: "Docks",
        definition: "Structures where vessels can be moored for loading, unloading, or storage.",
      },
      {
        name: "Floating Docks",
        definition: "Platforms that float on water, rising and falling with water levels, used for mooring vessels.",
      },
    ],
  },
]
