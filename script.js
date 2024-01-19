const elements = [
  { symbol: 'H', name: 'Hydrogen', atomicNumber: 1, discoveredBy: 'Henry Cavendish', namedBy: 'Antoine Lavoisier', atomicMass: '1.008', density: '0.0000899', interestingFact: 'Used in fuel cells for clean energy production.' },
  { symbol: 'He', name: 'Helium', atomicNumber: 2, discoveredBy: 'Pierre Janssen', namedBy: 'Léon Teisserenc de Bort', atomicMass: '4.0026', density: '0.0001786', interestingFact: 'Used in cryogenics and as a cooling medium in various applications.' },
  { symbol: 'Li', name: 'Lithium', atomicNumber: 3, discoveredBy: 'Johan August Arfwedson', namedBy: 'Jöns Jakob Berzelius', atomicMass: '6.94', density: '0.534', interestingFact: 'Key component in rechargeable batteries.' },
  { symbol: 'Be', name: 'Beryllium', atomicNumber: 4, discoveredBy: 'Louis Nicolas Vauquelin', namedBy: 'Friedrich Wöhler', atomicMass: '9.0122', density: '1.85', interestingFact: 'Used in nuclear reactors due to its ability to reflect neutrons.' },
  { symbol: 'B', name: 'Boron', atomicNumber: 5, discoveredBy: 'Joseph Louis Gay-Lussac and Louis Jacques Thénard', namedBy: 'Humphry Davy', atomicMass: '10.81', density: '2.34', interestingFact: 'Used in fiberglass, borosilicate glass, and as a neutron-capturing agent.' },
  { symbol: 'C', name: 'Carbon', atomicNumber: 6, discoveredBy: 'Ancient World', namedBy: 'Antoine Lavoisier', atomicMass: '12.011', density: '2.267', interestingFact: 'Forms the basis of life; exists in diverse forms such as diamonds and graphite.' },
  { symbol: 'N', name: 'Nitrogen', atomicNumber: 7, discoveredBy: 'Daniel Rutherford', namedBy: 'Jean-Antoine Chaptal', atomicMass: '14.007', density: '0.0012506', interestingFact: 'Used in the production of ammonia, essential for fertilizer production.' },
  { symbol: 'O', name: 'Oxygen', atomicNumber: 8, discoveredBy: 'Carl Wilhelm Scheele', namedBy: 'Antoine Lavoisier', atomicMass: '15.999', density: '0.001429', interestingFact: 'Critical for respiration and combustion processes.' },
  { symbol: 'F', name: 'Fluorine', atomicNumber: 9, discoveredBy: 'Henri Moissan', namedBy: 'Humphry Davy', atomicMass: '18.998', density: '0.001696', interestingFact: 'Used in the production of various chemicals, including fluoropolymers.' },
  { symbol: 'Ne', name: 'Neon', atomicNumber: 10, discoveredBy: 'Sir William Ramsay', namedBy: 'Morris Travers', atomicMass: '20.180', density: '0.0008999', interestingFact: 'Used in neon signs and as a cryogenic refrigerant.' },
  { symbol: 'Na', name: 'Sodium', atomicNumber: 11, discoveredBy: 'Humphry Davy', namedBy: 'Humphry Davy', atomicMass: '22.990', density: '0.971', interestingFact: 'Essential for various biological processes and widely used in the food industry.' },
  { symbol: 'Mg', name: 'Magnesium', atomicNumber: 12, discoveredBy: 'Joseph Black', namedBy: 'Sir Humphry Davy', atomicMass: '24.305', density: '1.738', interestingFact: 'Used in lightweight alloys, fireworks, and as a component in certain medicines.' },
  { symbol: 'Al', name: 'Aluminum', atomicNumber: 13, discoveredBy: 'Hans Christian Ørsted', namedBy: 'Sir Humphry Davy', atomicMass: '26.982', density: '2.7', interestingFact: 'Widely used in construction, transportation, and packaging due to its low density and corrosion resistance.' },
  { symbol: 'Si', name: 'Silicon', atomicNumber: 14, discoveredBy: 'Jöns Jakob Berzelius', namedBy: 'Thomas Thomson', atomicMass: '28.085', density: '2.329', interestingFact: 'Essential for the electronics industry and as a component of glass and concrete.' },
  { symbol: 'P', name: 'Phosphorus', atomicNumber: 15, discoveredBy: 'Hennig Brand', namedBy: 'Philippus Aureolus Paracelsus', atomicMass: '30.974', density: '1.82', interestingFact: 'Used in fertilizers, detergents, and the production of matches and fireworks.' },
  { symbol: 'S', name: 'Sulfur', atomicNumber: 16, discoveredBy: 'Ancient World', namedBy: 'Antoine Lavoisier', atomicMass: '32.06', density: '2.067', interestingFact: 'Used in the production of sulfuric acid and various chemicals.' },
  { symbol: 'Cl', name: 'Chlorine', atomicNumber: 17, discoveredBy: 'Carl Wilhelm Scheele', namedBy: 'Sir Humphry Davy', atomicMass: '35.45', density: '0.003214', interestingFact: 'Used in water treatment, disinfectants, and the production of PVC.' },
  { symbol: 'Ar', name: 'Argon', atomicNumber: 18, discoveredBy: 'Lord Rayleigh and Sir William Ramsay', namedBy: null, atomicMass: '39.948', density: '0.0017837', interestingFact: 'Used in various applications such as welding and as a protective gas in incandescent and fluorescent lighting.'},
  { symbol: 'K', name: 'Potassium', atomicNumber: 19, discoveredBy: 'Sir Humphry Davy', namedBy: 'Sir Humphry Davy', atomicMass: '39.098', density: '0.862', interestingFact: 'Essential for plant growth and commonly used in fertilizers.' },
  { symbol: 'Ca', name: 'Calcium', atomicNumber: 20, discoveredBy: 'Sir Humphry Davy', namedBy: 'Sir Humphry Davy', atomicMass: '40.078', density: '1.55', interestingFact: 'Critical for bone health and used in the production of cement and metals.'},
  { symbol: 'Sc', name: 'Scandium', atomicNumber: 21, discoveredBy: 'Lars Fredrik Nilson', namedBy: 'Nilson', atomicMass: '44.956', density: '2.985', interestingFact: 'Used in aerospace industry and in the production of high-intensity lights.' },
  { symbol: 'Ti', name: 'Titanium', atomicNumber: 22, discoveredBy: 'William Gregor', namedBy: 'Martin Heinrich Klaproth', atomicMass: '47.867', density: '4.506', interestingFact: 'Known for its high strength-to-weight ratio; used in aerospace, medical implants, and sports equipment.' },
  { symbol: 'V', name: 'Vanadium', atomicNumber: 23, discoveredBy: 'Andrés Manuel del Río', namedBy: 'Nils Sefström', atomicMass: '50.942', density: '6.0', interestingFact: 'Used in the production of steel alloys for tools and construction.' },
  { symbol: 'Cr', name: 'Chromium', atomicNumber: 24, discoveredBy: 'Louis Nicolas Vauquelin', namedBy: 'Nicholas Louis Vauquelin', atomicMass: '51.996', density: '7.14', interestingFact: 'Used in stainless steel production and as a corrosion-resistant plating for various applications.' },
  { symbol: 'Mn', name: 'Manganese', atomicNumber: 25, discoveredBy: 'Ancient World', namedBy: 'Carl Wilhelm Scheele', atomicMass: '54.938', density: '7.21', interestingFact: 'Used in steelmaking, batteries, and as a trace element in human nutrition.' },
  { symbol: 'Fe', name: 'Iron', atomicNumber: 26, discoveredBy: 'Ancient World', namedBy: 'Ancient World', atomicMass: '55.845', density: '7.874', interestingFact: 'One of the most abundant elements on Earth; crucial for the production of steel and hemoglobin.' },
  { symbol: 'Co', name: 'Cobalt', atomicNumber: 27, discoveredBy: 'Georg Brandt', namedBy: null, atomicMass: '58.933', density: '8.9', interestingFact: 'Used in the production of magnetic, wear-resistant, and high-strength alloys.' },
  { symbol: 'Ni', name: 'Nickel', atomicNumber: 28, discoveredBy: 'Axel Fredrik Cronstedt', namedBy: 'Axel Fredrik Cronstedt', atomicMass: '58.693', density: '8.908', interestingFact: 'Used in the production of stainless steel, coins, and rechargeable batteries.' },
  { symbol: 'Cu', name: 'Copper', atomicNumber: 29, discoveredBy: 'Ancient World', namedBy: 'Ancient World', atomicMass: '63.546', density: '8.96', interestingFact: 'One of the first metals used by humans; essential in electrical wiring and various alloys.' },
  { symbol: 'Zn', name: 'Zinc', atomicNumber: 30, discoveredBy: 'India', namedBy: 'India', atomicMass: '65.38', density: '7.14', interestingFact: 'Used in galvanizing iron and steel to prevent corrosion, and in various alloys.' },
  { symbol: 'Ga', name: 'Gallium', atomicNumber: 31, discoveredBy: 'Lecoq de Boisbaudran', namedBy: 'Lecoq de Boisbaudran', atomicMass: '69.723', density: '5.907', interestingFact: 'Has a low melting point and is used in some LED technologies and solar panels.' },
  { symbol: 'Ge', name: 'Germanium', atomicNumber: 32, discoveredBy: 'Clemens Winkler', namedBy: 'Clemens Winkler', atomicMass: '72.630', density: '5.323', interestingFact: 'Used in fiber optics, infrared optics, and as a semiconductor in electronics.' },
  { symbol: 'As', name: 'Arsenic', atomicNumber: 33, discoveredBy: 'Ancient World', namedBy: 'Ancient World', atomicMass: '74.922', density: '5.776', interestingFact: 'Historically used as a poison; also used in the semiconductor industry.' },
  { symbol: 'Se', name: 'Selenium', atomicNumber: 34, discoveredBy: 'Jöns Jakob Berzelius', namedBy: 'Jöns Jakob Berzelius', atomicMass: '78.971', density: '4.809', interestingFact: 'Used in photovoltaic solar cells and as a dietary supplement.' },
  { symbol: 'Br', name: 'Bromine', atomicNumber: 35, discoveredBy: 'Antoine Jérôme Balard', namedBy: 'Antoine Jérôme Balard', atomicMass: '79.904', density: '3.122', interestingFact: 'Used in flame retardants and certain medications.' },
  { symbol: 'Kr', name: 'Krypton', atomicNumber: 36, discoveredBy: 'Sir William Ramsay', namedBy: 'Sir William Ramsay', atomicMass: '83.798', density: '0.003733', interestingFact: 'Used in some photographic flashes and as a filling gas for energy-efficient windows.' },
  { symbol: 'Rb', name: 'Rubidium', atomicNumber: 37, discoveredBy: 'Robert Bunsen', namedBy: 'Robert Bunsen', atomicMass: '85.468', density: '1.532', interestingFact: 'Used in certain types of atomic clocks and as a component in specialized glasses.' },
  { symbol: 'Sr', name: 'Strontium', atomicNumber: 38, discoveredBy: 'Adair Crawford', namedBy: 'Thomas Charles Hope', atomicMass: '87.62', density: '2.64', interestingFact: 'Used in pyrotechnics to produce red colors and in certain medical applications.' },
  { symbol: 'Y', name: 'Yttrium', atomicNumber: 39, discoveredBy: 'Johan Gadolin', namedBy: 'Johan Gadolin', atomicMass: '88.906', density: '4.469', interestingFact: 'Used in LED technology, lasers, and certain medical devices.' },
  { symbol: 'Zr', name: 'Zirconium', atomicNumber: 40, discoveredBy: 'Martin Heinrich Klaproth', namedBy: 'Martin Heinrich Klaproth', atomicMass: '91.224', density: '6.506', interestingFact: 'Used in nuclear reactors, aerospace applications, and as a corrosion-resistant material.' },
  { symbol: 'Nb', name: 'Niobium', atomicNumber: 41, discoveredBy: 'Charles Hatchett', namedBy: 'Heinrich Rose', atomicMass: '92.906', density: '8.57', interestingFact: 'Used in superalloys for jet engines and in the production of high-strength steel.' },
  { symbol: 'Mo', name: 'Molybdenum', atomicNumber: 42, discoveredBy: 'Carl Wilhelm Scheele', namedBy: 'Peter Jacob Hjelm', atomicMass: '95.95', density: '10.28', interestingFact: 'Used in alloys, lubricants, and as a catalyst in petroleum refining.' },
  { symbol: 'Tc', name: 'Technetium', atomicNumber: 43, discoveredBy: 'Carlo Perrier', namedBy: 'Albert Ghiorso', atomicMass: '(97)', density: '11', interestingFact: 'An artificial element; used in medical imaging equipment.' },
  { symbol: 'Ru', name: 'Ruthenium', atomicNumber: 44, discoveredBy: 'Karl Ernst Claus', namedBy: 'Karl Ernst Claus', atomicMass: '101.07', density: '12.37', interestingFact: 'Used in electrical contacts, wear-resistant coatings, and certain types of jewelry.' },
  { symbol: 'Rh', name: 'Rhodium', atomicNumber: 45, discoveredBy: 'William Hyde Wollaston', namedBy: 'William Hyde Wollaston', atomicMass: '102.91', density: '12.41', interestingFact: 'Used in catalytic converters, electrical contacts, and as a reflective coating for optics.' },
  { symbol: 'Pd', name: 'Palladium', atomicNumber: 46, discoveredBy: 'William Hyde Wollaston', namedBy: 'William Hyde Wollaston', atomicMass: '106.42', density: '12.02', interestingFact: 'Used in catalytic converters, electronics, and as a catalyst in chemical reactions.' },
  { symbol: 'Ag', name: 'Silver', atomicNumber: 47, discoveredBy: 'Ancient World', namedBy: 'Ancient World', atomicMass: '107.87', density: '10.49', interestingFact: 'Known for its luster and conductivity; used in jewelry, coins, and electrical contacts.' },
  { symbol: 'Cd', name: 'Cadmium', atomicNumber: 48, discoveredBy: 'Karl Samuel Leberecht Hermann', namedBy: 'Friedrich Stromeyer', atomicMass: '112.41', density: '8.65', interestingFact: 'Used in batteries, pigments, and as a corrosion-resistant plating for iron and steel.' },
  { symbol: 'In', name: 'Indium', atomicNumber: 49, discoveredBy: 'Ferdinand Reich', namedBy: 'Ferdinand Reich', atomicMass: '114.82', density: '7.31', interestingFact: 'Used in electronics, as an alloy with other metals, and in some medical applications.' },
  { symbol: 'Sn', name: 'Tin', atomicNumber: 50, discoveredBy: 'Ancient World', namedBy: 'Ancient World', atomicMass: '118.71', density: '7.29', interestingFact: 'Used in the production of solder, coatings, and as an alloy with copper to create bronze.' },
  { symbol: 'Sb', name: 'Antimony', atomicNumber: 51, discoveredBy: 'Ancient World', namedBy: 'Ancient World', atomicMass: '121.76', density: '6.69', interestingFact: 'Used in flame retardants, batteries, and certain alloys.' },
  { symbol: 'Te', name: 'Tellurium', atomicNumber: 52, discoveredBy: 'Franz-Joseph Müller von Reichenstein', namedBy: 'Martin Heinrich Klaproth', atomicMass: '127.60', density: '6.24', interestingFact: 'Used in certain types of solar panels, as a coloring agent in ceramics, and in metallurgy.' },
  { symbol: 'I', name: 'Iodine', atomicNumber: 53, discoveredBy: 'Bernard Courtois', namedBy: 'Joseph Louis Gay-Lussac', atomicMass: '126.90', density: '4.94', interestingFact: 'Used in medicine, photography, and as a disinfectant.' },
  { symbol: 'Xe', name: 'Xenon', atomicNumber: 54, discoveredBy: 'Sir William Ramsay', namedBy: 'Sir William Ramsay', atomicMass: '131.29', density: '0.005887', interestingFact: 'Used in certain types of lighting, such as xenon arc lamps, and in medical imaging.' },
  { symbol: 'Cs', name: 'Cesium', atomicNumber: 55, discoveredBy: 'Robert Bunsen', namedBy: 'Robert Bunsen', atomicMass: '132.91', density: '1.93', interestingFact: 'Used in atomic clocks, drilling fluids, and in some photoelectric cells.' },
  { symbol: 'Ba', name: 'Barium', atomicNumber: 56, discoveredBy: 'Carl Wilhelm Scheele', namedBy: 'Humphry Davy', atomicMass: '137.33', density: '3.51', interestingFact: 'Used in drilling fluids, fireworks (green color), and in the production of certain alloys.' },
  { symbol: 'La', name: 'Lanthanum', atomicNumber: 57, discoveredBy: 'Carl Gustaf Mosander', namedBy: 'Carl Gustaf Mosander', atomicMass: '138.91', density: '6.15', interestingFact: 'Used in high-performance optics, carbon arc lamps, and as a catalyst in petroleum refining.' },
  { symbol: 'Ce', name: 'Cerium', atomicNumber: 58, discoveredBy: 'Martin Heinrich Klaproth', namedBy: 'Martin Heinrich Klaproth', atomicMass: '140.12', density: '6.77', interestingFact: 'Used in catalysts, self-cleaning ovens, and in the production of some types of glass.' },
  { symbol: 'Pr', name: 'Praseodymium', atomicNumber: 59, discoveredBy: 'Carl Auer von Welsbach', namedBy: 'Carl Auer von Welsbach', atomicMass: '140.91', density: '6.77', interestingFact: 'Used in rare-earth magnets, studio lighting, and in some electronic components.' },
  { symbol: 'Nd', name: 'Neodymium', atomicNumber: 60, discoveredBy: 'Carl Auer von Welsbach', namedBy: 'Carl Auer von Welsbach', atomicMass: '144.24', density: '7.01', interestingFact: 'Used in powerful magnets, laser technology, and in certain types of glass.' },
  { symbol: 'Pm', name: 'Promethium', atomicNumber: 61, discoveredBy: 'Grace Mary Coryell', namedBy: 'Isotopes of promethium', atomicMass: '(145)', density: '7.26', interestingFact: 'A radioactive element; used in nuclear batteries and some types of luminous paint.' },
  { symbol: 'Sm', name: 'Samarium', atomicNumber: 62, discoveredBy: 'Lecoq de Boisbaudran', namedBy: 'Lecoq de Boisbaudran', atomicMass: '150.36', density: '7.52', interestingFact: 'Used in certain types of magnets, nuclear reactors, and as a neutron absorber.' },
  { symbol: 'Eu', name: 'Europium', atomicNumber: 63, discoveredBy: 'Eugène-Anatole Demarçay', namedBy: 'Eugène-Anatole Demarçay', atomicMass: '151.96', density: '5.24', interestingFact: 'Used in red and blue phosphors for color television tubes and LED lights.' },
  { symbol: 'Gd', name: 'Gadolinium', atomicNumber: 64, discoveredBy: 'Jean Charles Galissard de Marignac', namedBy: 'Jean Charles Galissard de Marignac', atomicMass: '157.25', density: '7.90', interestingFact: 'Used in medical imaging, neutron capture therapy, and as a component in some types of magnets.' },
  { symbol: 'Tb', name: 'Terbium', atomicNumber: 65, discoveredBy: 'Carl Gustaf Mosander', namedBy: 'Carl Gustaf Mosander', atomicMass: '158.93', density: '8.23', interestingFact: 'Used in phosphors for color television tubes, LED lights, and certain types of lasers.' },
  { symbol: 'Dy', name: 'Dysprosium', atomicNumber: 66, discoveredBy: 'Lecoq de Boisbaudran', namedBy: 'Lecoq de Boisbaudran', atomicMass: '162.50', density: '8.55', interestingFact: 'Used in magnets, lasers, and in certain types of nuclear reactors.' },
  { symbol: 'Ho', name: 'Holmium', atomicNumber: 67, discoveredBy: 'Per Teodor Cleve', namedBy: 'Per Teodor Cleve', atomicMass: '164.93', density: '8.80', interestingFact: 'Used in some electronic components, lasers, and as a flux in the production of certain metals.' },
  { symbol: 'Er', name: 'Erbium', atomicNumber: 68, discoveredBy: 'Carl Gustaf Mosander', namedBy: 'Carl Gustaf Mosander', atomicMass: '167.26', density: '9.07', interestingFact: 'Used in some types of lasers, amplifiers in fiber-optic communication, and as a coloring agent in glasses and glazes.' },
  { symbol: 'Tm', name: 'Thulium', atomicNumber: 69, discoveredBy: 'Per Teodor Cleve', namedBy: 'Per Teodor Cleve', atomicMass: '168.93', density: '9.32', interestingFact: 'Used in portable X-ray devices, lasers, and as a radiation source in some medical treatments.' },
  { symbol: 'Yb', name: 'Ytterbium', atomicNumber: 70, discoveredBy: 'Jean Charles Galissard de Marignac', namedBy: 'Jean Charles Galissard de Marignac', atomicMass: '173.05', density: '6.90', interestingFact: 'Used in certain types of lasers, in medical imaging, and as a component in certain alloys.' },
  { symbol: 'Lu', name: 'Lutetium', atomicNumber: 71, discoveredBy: 'Georges Urbain', namedBy: 'Georges Urbain', atomicMass: '174.97', density: '9.84', interestingFact: 'Used in certain types of cancer treatment, as a catalyst in petroleum refining, and in some electronic devices.' },
  { symbol: 'Hf', name: 'Hafnium', atomicNumber: 72, discoveredBy: 'Dirk Coster', namedBy: 'Dirk Coster', atomicMass: '178.49', density: '13.31', interestingFact: 'Used in nuclear reactors, as a getter in vacuum tubes, and in certain types of alloys.' },
  { symbol: 'Ta', name: 'Tantalum', atomicNumber: 73, discoveredBy: 'Anders Gustaf Ekeberg', namedBy: 'Anders Gustaf Ekeberg', atomicMass: '180.95', density: '16.69', interestingFact: 'Used in electronics, surgical implants, and in the production of corrosion-resistant equipment.' },
  { symbol: 'W', name: 'Tungsten', atomicNumber: 74, discoveredBy: 'Carl Wilhelm Scheele', namedBy: 'Carl Wilhelm Scheele', atomicMass: '183.84', density: '19.25', interestingFact: 'Known for its high melting point; used in light bulb filaments, aerospace applications, and as an alloy in the production of hard materials.' },
  { symbol: 'Re', name: 'Rhenium', atomicNumber: 75, discoveredBy: 'Masataka Ogawa', namedBy: 'Masataka Ogawa', atomicMass: '186.21', density: '21.02', interestingFact: 'Used in high-temperature superalloys, in the production of catalysts, and as an electrical contact material.' },
  { symbol: 'Os', name: 'Osmium', atomicNumber: 76, discoveredBy: 'Smithson Tennant', namedBy: 'Smithson Tennant', atomicMass: '190.23', density: '22.59', interestingFact: 'Known for its density; used in certain types of alloys, electrical contacts, and in the production of fountain pen tips.' },
  { symbol: 'Ir', name: 'Iridium', atomicNumber: 77, discoveredBy: 'Smithson Tennant', namedBy: 'Smithson Tennant', atomicMass: '192.22', density: '22.56', interestingFact: 'Used in electrical contacts, spark plugs, and as a hardening agent in platinum alloys.' },
  { symbol: 'Pt', name: 'Platinum', atomicNumber: 78, discoveredBy: 'Antonio de Ulloa', namedBy: 'Antonio de Ulloa', atomicMass: '195.08', density: '21.45', interestingFact: 'Known for its corrosion resistance; used in jewelry, catalytic converters, and in certain medical devices.' },
  { symbol: 'Au', name: 'Gold', atomicNumber: 79, discoveredBy: 'Middle East', namedBy: 'Middle East', atomicMass: '196.97', density: '19.32', interestingFact: 'Highly valued for its rarity and beauty; used in jewelry, electronics, and in the production of certain medical treatments.' },
  { symbol: 'Hg', name: 'Mercury', atomicNumber: 80, discoveredBy: 'Ancient Chinese and Indians', namedBy: 'Ancient Chinese and Indians', atomicMass: '200.59', density: '13.53', interestingFact: 'The only metal that is liquid at room temperature; used in thermometers, barometers, and in some electrical switches.' },
  { symbol: 'Tl', name: 'Thallium', atomicNumber: 81, discoveredBy: 'William Crookes', namedBy: 'William Crookes', atomicMass: '204.38', density: '11.85', interestingFact: 'Used in some types of infrared detectors and in the production of certain types of glass.' },
  { symbol: 'Pb', name: 'Lead', atomicNumber: 82, discoveredBy: 'Middle East', namedBy: 'Middle East', atomicMass: '207.2', density: '11.34', interestingFact: 'Has been used by various cultures for thousands of years; used in batteries, radiation shielding, and in the production of certain types of glass and alloys.' },
  { symbol: 'Bi', name: 'Bismuth', atomicNumber: 83, discoveredBy: 'Claude François Geoffroy', namedBy: 'Claude François Geoffroy', atomicMass: '208.98', density: '9.78', interestingFact: 'Has a low toxicity and is used in some medications; also used in cosmetics and certain types of alloys.' },
  { symbol: 'Po', name: 'Polonium', atomicNumber: 84, discoveredBy: 'Pierre Curie', namedBy: 'Pierre Curie', atomicMass: '(209)', density: '9.20', interestingFact: 'Highly radioactive; used in certain types of nuclear reactors and in the production of antistatic devices.' },
  { symbol: 'At', name: 'Astatine', atomicNumber: 85, discoveredBy: 'Dale R. Corson', namedBy: 'Dale R. Corson', atomicMass: '(210)', density: 'N/A', interestingFact: 'One of the rarest naturally occurring elements; has no significant industrial use due to its scarcity and radioactivity.' },
  { symbol: 'Rn', name: 'Radon', atomicNumber: 86, discoveredBy: 'Friedrich Ernst Dorn', namedBy: 'Friedrich Ernst Dorn', atomicMass: '(222)', density: 'N/A', interestingFact: 'A radioactive noble gas; used in some medical treatments and as a tracer in leak detection.' },
  { symbol: 'Fr', name: 'Francium', atomicNumber: 87, discoveredBy: 'Marguerite Perey', namedBy: 'Marguerite Perey', atomicMass: '(223)', density: 'N/A', interestingFact: 'Highly radioactive and rare; no significant industrial use due to its scarcity and radioactivity.' },
  { symbol: 'Ra', name: 'Radium', atomicNumber: 88, discoveredBy: 'Pierre Curie', namedBy: 'Pierre Curie', atomicMass: '(226)', density: '5.50', interestingFact: 'Highly radioactive; historically used in self-luminous paints, but its use has declined due to its health risks.' },
  { symbol: 'Ac', name: 'Actinium', atomicNumber: 89, discoveredBy: 'Friedrich Oskar Giesel', namedBy: 'Friedrich Oskar Giesel', atomicMass: '(227)', density: '10.07', interestingFact: 'A source of neutrons and used in radiation therapy for cancer treatment.' },
  { symbol: 'Th', name: 'Thorium', atomicNumber: 90, discoveredBy: 'Jöns Jacob Berzelius', namedBy: 'Jöns Jacob Berzelius', atomicMass: '232.04', density: '11.72', interestingFact: 'Used in certain types of nuclear reactors, as a fuel for nuclear power, and in the production of certain types of glass.' },
  { symbol: 'Pa', name: 'Protactinium', atomicNumber: 91, discoveredBy: 'William Crookes', namedBy: 'William Crookes', atomicMass: '231.04', density: '15.37', interestingFact: 'A source of neutrons; used in scientific research and as a precursor to uranium-235.' },
  { symbol: 'U', name: 'Uranium', atomicNumber: 92, discoveredBy: 'Martin Heinrich Klaproth', namedBy: 'Martin Heinrich Klaproth', atomicMass: '238.03', density: '19.05', interestingFact: 'Used as a fuel in nuclear reactors, in nuclear weapons, and as a coloring agent in glass and ceramics.' },
  { symbol: 'Np', name: 'Neptunium', atomicNumber: 93, discoveredBy: 'Edwin McMillan', namedBy: 'Albert Ghiorso', atomicMass: '(237)', density: 'N/A', interestingFact: 'First synthetic transuranium element; used in scientific research and the production of plutonium-239.' },
  { symbol: 'Pu', name: 'Plutonium', atomicNumber: 94, discoveredBy: 'Glenn T. Seaborg', namedBy: 'Glenn T. Seaborg', atomicMass: '(244)', density: 'N/A', interestingFact: 'Used in nuclear weapons, nuclear reactors, and in some spacecraft power systems.' },
  { symbol: 'Am', name: 'Americium', atomicNumber: 95, discoveredBy: 'Glenn T. Seaborg', namedBy: 'Glenn T. Seaborg', atomicMass: '(243)', density: 'N/A', interestingFact: 'Used in smoke detectors and as a neutron source in some industrial gauges.' },
  { symbol: 'Cm', name: 'Curium', atomicNumber: 96, discoveredBy: 'Glenn T. Seaborg', namedBy: 'Glenn T. Seaborg', atomicMass: '(247)', density: 'N/A', interestingFact: 'Used in scientific research and as a neutron source.' },
  { symbol: 'Bk', name: 'Berkelium', atomicNumber: 97, discoveredBy: 'Glenn T. Seaborg', namedBy: 'Glenn T. Seaborg', atomicMass: '(247)', density: 'N/A', interestingFact: 'Used in scientific research and as a neutron source.' },
  { symbol: 'Cf', name: 'Californium', atomicNumber: 98, discoveredBy: 'Glenn T. Seaborg', namedBy: 'Glenn T. Seaborg', atomicMass: '(251)', density: 'N/A', interestingFact: 'Used in scientific research and as a neutron source.' },
  { symbol: 'Es', name: 'Einsteinium', atomicNumber: 99, discoveredBy: 'Albert Ghiorso', namedBy: 'Albert Ghiorso', atomicMass: '(252)', density: 'N/A', interestingFact: 'Used in scientific research and as a neutron source.' },
  { symbol: 'Fm', name: 'Fermium', atomicNumber: 100, discoveredBy: 'Albert Ghiorso', namedBy: 'Albert Ghiorso', atomicMass: '(257)', density: 'N/A', interestingFact: 'Used in scientific research and as a neutron source.' },
  { symbol: 'Md', name: 'Mendelevium', atomicNumber: 101, discoveredBy: 'Albert Ghiorso', namedBy: 'Ghiorso, Sikkeland, Larsh, and Latimer', atomicMass: '(258)', density: 'N/A', interestingFact: 'Named after Dmitri Mendeleev, the creator of the periodic table; used in scientific research and as a neutron source.' },
  { symbol: 'No', name: 'Nobelium', atomicNumber: 102, discoveredBy: 'Albert Ghiorso', namedBy: 'Ghiorso, Sikkeland, Larsh, and Latimer', atomicMass: '(259)', density: 'N/A', interestingFact: 'Named after Alfred Nobel; used in scientific research and as a neutron source.' },
  { symbol: 'Lr', name: 'Lawrencium', atomicNumber: 103, discoveredBy: 'Albert Ghiorso', namedBy: 'Ghiorso, Sikkeland, Larsh, and Latimer', atomicMass: '(266)', density: 'N/A', interestingFact: 'Named after Ernest O. Lawrence; used in scientific research and as a neutron source.' },
  { symbol: 'Rf', name: 'Rutherfordium', atomicNumber: 104, discoveredBy: 'Joint Institute for Nuclear Research (JINR)', namedBy: 'Joint Institute for Nuclear Research (JINR)', atomicMass: '(267)', density: 'N/A', interestingFact: 'Named after Ernest Rutherford; a synthetic element used in scientific research.' },
  { symbol: 'Db', name: 'Dubnium', atomicNumber: 105, discoveredBy: 'Joint Institute for Nuclear Research (JINR)', namedBy: 'Joint Institute for Nuclear Research (JINR)', atomicMass: '(270)', density: 'N/A', interestingFact: 'Named after Dubna, Russia; used in scientific research.' },
  { symbol: 'Sg', name: 'Seaborgium', atomicNumber: 106, discoveredBy: 'Lawrence Berkeley National Laboratory', namedBy: 'Lawrence Berkeley National Laboratory', atomicMass: '(271)', density: 'N/A', interestingFact: 'Named after Glenn T. Seaborg; used in scientific research.' },
  { symbol: 'Bh', name: 'Bohrium', atomicNumber: 107, discoveredBy: 'Gesellschaft für Schwerionenforschung (GSI) (Institute for Heavy Ion Research)', namedBy: 'Gesellschaft für Schwerionenforschung (GSI) (Institute for Heavy Ion Research)', atomicMass: '(270)', density: 'N/A', interestingFact: 'Named after Niels Bohr; used in scientific research.' },
  { symbol: 'Hs', name: 'Hassium', atomicNumber: 108, discoveredBy: 'Gesellschaft für Schwerionenforschung (GSI) (Institute for Heavy Ion Research)', namedBy: 'Gesellschaft für Schwerionenforschung (GSI) (Institute for Heavy Ion Research)', atomicMass: '(277)', density: 'N/A', interestingFact: 'Named after the Latin name for the German state of Hesse; used in scientific research.' },
  { symbol: 'Mt', name: 'Meitnerium', atomicNumber: 109, discoveredBy: 'Gesellschaft für Schwerionenforschung (GSI) (Institute for Heavy Ion Research)', namedBy: 'Gesellschaft für Schwerionenforschung (GSI) (Institute for Heavy Ion Research)', atomicMass: '(276)', density: 'N/A', interestingFact: 'Named after Lise Meitner; used in scientific research.' },
  { symbol: 'Ds', name: 'Darmstadtium', atomicNumber: 110, discoveredBy: 'Gesellschaft für Schwerionenforschung (GSI) (Institute for Heavy Ion Research)', namedBy: 'Gesellschaft für Schwerionenforschung (GSI) (Institute for Heavy Ion Research)', atomicMass: '(281)', density: 'N/A', interestingFact: 'Named after Darmstadt, Germany; used in scientific research.' },
  { symbol: 'Rg', name: 'Roentgenium', atomicNumber: 111, discoveredBy: 'Gesellschaft für Schwerionenforschung (GSI) (Institute for Heavy Ion Research)', namedBy: 'Gesellschaft für Schwerionenforschung (GSI) (Institute for Heavy Ion Research)', atomicMass: '(280)', density: 'N/A', interestingFact: 'Named after Wilhelm Conrad Röntgen; used in scientific research.' },
  { symbol: 'Cn', name: 'Copernicium', atomicNumber: 112, discoveredBy: 'Gesellschaft für Schwerionenforschung (GSI) (Institute for Heavy Ion Research)', namedBy: 'Gesellschaft für Schwerionenforschung (GSI) (Institute for Heavy Ion Research)', atomicMass: '(285)', density: 'N/A', interestingFact: 'Named after Nicolaus Copernicus; used in scientific research.' },
  { symbol: 'Nh', name: 'Nihonium', atomicNumber: 113, discoveredBy: 'RIKEN', namedBy: 'RIKEN', atomicMass: '(284)', density: 'N/A', interestingFact: 'Named after Nihon, the Japanese name for Japan; used in scientific research.' },
  { symbol: 'Fl', name: 'Flerovium', atomicNumber: 114, discoveredBy: 'Joint Institute for Nuclear Research (JINR)', namedBy: 'Joint Institute for Nuclear Research (JINR)', atomicMass: '(289)', density: 'N/A', interestingFact: 'Named after Georgy Flyorov; used in scientific research.' },
  { symbol: 'Mc', name: 'Moscovium', atomicNumber: 115, discoveredBy: 'Joint Institute for Nuclear Research (JINR)', namedBy: 'Joint Institute for Nuclear Research (JINR)', atomicMass: '(288)', density: 'N/A', interestingFact: 'Named after Moscow, Russia; used in scientific research.' },
  { symbol: 'Lv', name: 'Livermorium', atomicNumber: 116, discoveredBy: 'Joint Institute for Nuclear Research (JINR)', namedBy: 'Joint Institute for Nuclear Research (JINR)', atomicMass: '(293)', density: 'N/A', interestingFact: 'Named after Lawrence Livermore National Laboratory; used in scientific research.' },
  { symbol: 'Ts', name: 'Tennessine', atomicNumber: 117, discoveredBy: 'Joint Institute for Nuclear Research (JINR)', namedBy: 'Joint Institute for Nuclear Research (JINR)', atomicMass: '(294)', density: 'N/A', interestingFact: 'Named after the state of Tennessee; used in scientific research.' },
  { symbol: 'Og', name: 'Oganesson', atomicNumber: 118, discoveredBy: 'Joint Institute for Nuclear Research (JINR)', namedBy: 'Joint Institute for Nuclear Research (JINR)', atomicMass: '(294)', density: 'N/A', interestingFact: 'Named after Yuri Oganessian; used in scientific research.' }
];



function arrange(){
  for(let i=0; i<118; i++)
  {   
      var element_no= document.querySelector('.atomic_no[id = "'+(i+1)+'"]');
      var element_name= document.querySelector('.name[id ="'+(i+1)+'"]');
      var element_symbol= document.querySelector('.Symbol[id = "'+(i+1)+'"]');
      element_no.textContent = elements[i].atomicNumber;
      element_name.textContent= elements[i].name;
      element_symbol.textContent= elements[i].symbol;
  }
    hoverTds();
}

window.onload = arrange();

function hoverTds(){
  var col_q = document.getElementsByClassName('q');

  // var col_name = document.getElementsByClassName('name');

  for (let i = 0; i < col_q.length; i++) {
    col_q[i].addEventListener('mouseover', function () {
        this.style.transform = 'scale(1.2)';
        this.style.transformOrigin = 'center center';
        // this.style.position = ;
        //col_name[i].style.maxWidth = 'none';
    });

    col_q[i].addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
        //col_name[i].style.maxWidth = '55px';
    });
  }
}

function showElementDetails(ele) {
  // element = element- 1;
  document.querySelector(".details-container").style.display = 'block';
  Number(ele);


      document.getElementById('Z').textContent = elements[ele].atomicNumber;
      document.getElementById('sym').textContent = elements[ele].symbol;
      document.getElementById('Z_name').textContent = elements[ele].name;
      document.getElementById('A').textContent = elements[ele].atomicMass;
      document.getElementById('Disc-By').textContent = elements[ele].discoveredBy;
      document.getElementById('Named-By').textContent = elements[ele].namedBy;
      document.getElementById('Atomic-Mass').textContent = elements[ele].atomicMass;
      document.getElementById('Density').textContent = elements[ele].density;
      document.getElementById('element-description').textContent = elements[ele].interestingFact;

}

for(let i=1; i<=118;i++){
document.querySelector('[id ="'+i+'"]').addEventListener('click',function(){
  let index = i-1;
  showElementDetails(index);
});
}

var Td_q = document.getElementsByClassName('q');

for (let i = 0; i < Td_q.length; i++) {
  Td_q[i].addEventListener('click', () => {
    var child_nodes = Td_q[i].childNodes;
    for(let j=0; j<child_nodes.length;j++ ){
      if(child_nodes[j].nodeType == Node.ELEMENT_NODE){
        let Id = child_nodes[j].id;
        showElementDetails(Id - 1);
      }
    }
  });
}


document.querySelector('.cross').addEventListener('click', ()=>{
  document.querySelector('.details-container').style.display = 'none';
});

const postTransitionMetals = [13, 49, 50, 81, 82, 83, 84, 113, 114, 115, 116, 117, 118];
const lanthanides = [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71];
const actinides = [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103];
const Alkali_metals = [3, 11, 19, 37, 55, 87];
    var alkali = document.getElementById('Alkaline-metals');

    alkali.addEventListener('change', function () {
      for (let i = 0; i < Alkali_metals.length; i++) {
      
        var childTd = document.querySelector('.q [id="' + Alkali_metals[i] + '"]');
        var parentTd = childTd.parentNode;
        if (parentTd && !alkali.checked) {
          parentTd.style.visibility = "hidden";
        } else if (parentTd) {
          parentTd.style.visibility = "visible";
        }
      }
    });
  const Alkali_Earths = [4, 12, 20, 38, 56, 88];
    var earths = document.getElementById('Alkaline-earth-metals');

  earths.addEventListener('change', function () {
      for (let i = 0; i < Alkali_Earths.length; i++) {
        var childTd = document.querySelector('.q [id="' + Alkali_Earths[i] + '"]');
        var parentTd = childTd.parentNode;
        if (parentTd && !earths.checked) {
          parentTd.style.visibility = "hidden";
        } else if (parentTd) {
          parentTd.style.visibility = "visible";
        }
      }
    });
 
  const Metalloids = [5,14,32,33,51,52,84];
       var Metalloid = document.getElementById('Metalloids');
       Metalloid.addEventListener('change', function () {
        for (let i = 0; i < Metalloids.length; i++) {
          var childTd = document.querySelector('.q [id="' + Metalloids[i] + '"]');
          var parentTd = childTd.parentNode;
          if (parentTd && !Metalloid.checked) {
            parentTd.style.visibility = "hidden";
          } else if (parentTd) {
            parentTd.style.visibility = "visible";
          }
        }
      });
      const Non_metals = [1, 2, 6, 7, 8, 9, 10, 15, 16, 17, 18, 34, 35, 36, 53, 54, 86];
      var Non_metal = document.getElementById('Non-metals');
      Non_metal.addEventListener('change', function () {
       for (let i = 0; i < Non_metals.length; i++) {
         var childTd = document.querySelector('.q [id="' + Non_metals[i] + '"]');
         var parentTd = childTd.parentNode;
         if (parentTd && !Non_metal.checked) {
           
           parentTd.style.visibility = "hidden";
         } else if (parentTd) {
           
           parentTd.style.visibility = "visible";
         }
       }
     });
     const Transition_metals = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48];
     var Transition_metal = document.getElementById('Transition-metals');
     Transition_metal.addEventListener('change', function () {
      for (let i = 0; i < Transition_metals.length; i++) {
        
        var childTd = document.querySelector('.q [id="' + Transition_metals[i] + '"]');
        var parentTd = childTd.parentNode;
        if (parentTd && !Transition_metal.checked) {
          
          parentTd.style.visibility = "hidden";
        } else if (parentTd) {
          
          parentTd.style.visibility = "visible";
        }
      }
    });

    const Halogens = [9, 17, 35, 53] ;
    var Halogen = document.getElementById('Halogens');
    Halogen.addEventListener('change', function () {
     for (let i = 0; i < Halogens.length; i++) {
       
       var childTd = document.querySelector('.q [id="' + Halogens[i] + '"]');
       var parentTd = childTd.parentNode;
       if (parentTd && !Halogen.checked) {
         
         parentTd.style.visibility = "hidden";
       } else if (parentTd) {
         
         parentTd.style.visibility = "visible";
       }
     }
   });

   const Noble_Gases = [2, 10, 18, 36, 54, 86];
   var Noble_Gas = document.getElementById('Noble-Gases');
   Noble_Gas.addEventListener('change', function () {
    for (let i = 0; i < Noble_Gases.length; i++) {
      
      var childTd = document.querySelector('.q [id="' + Noble_Gases[i] + '"]');
      var parentTd = childTd.parentNode;
      if (parentTd && !Noble_Gas.checked) {
        
        parentTd.style.visibility = "hidden";
      } else if (parentTd) {
        
        parentTd.style.visibility = "visible";
      }
    }
  });
    
  var postTransitionMetal = document.getElementById('postTransitionMetals');
  postTransitionMetal.addEventListener('change', function () {
    for (let i = 0; i < postTransitionMetals.length; i++) {
      
      var childTd = document.querySelector('.q [id="' + postTransitionMetals[i] + '"]');
      var parentTd = childTd.parentNode;
      if (parentTd && !postTransitionMetal.checked) {
        
        parentTd.style.visibility = "hidden";
      } else if (parentTd) {
        
        parentTd.style.visibility = "visible";
      }
    }
  });

  var lanthanide = document.getElementById('lanthanides');
  lanthanide.addEventListener('change', function () {
    for (let i = 0; i < lanthanides.length; i++) {
      
      var childTd = document.querySelector('.q [id="' + lanthanides[i] + '"]');
      var parentTd = childTd.parentNode;
      if (parentTd && !lanthanide.checked) {
        
        parentTd.style.visibility = "hidden";
      } else if (parentTd) {
        
        parentTd.style.visibility = "visible";
      }
    }
  });

  var actinide = document.getElementById('actinides');
  actinide.addEventListener('change', function () {
    for (let i = 0; i < actinides.length; i++) {
      
      var childTd = document.querySelector('.q [id="' + actinides[i] + '"]');
      var parentTd = childTd.parentNode;
      if (parentTd && !actinide.checked) {
        
        parentTd.style.visibility = "hidden";
      } else if (parentTd) {
        
        parentTd.style.visibility = "visible";
      }
    }
  });
  let isDragging = false;
let offsetX, offsetY;
const detailsContainer = document.querySelector('.details-container');
var row1 = document.querySelector('.row1');
row1.addEventListener('mousedown', startDrag);
row1.addEventListener('touchstart', startDrag);

function startDrag(e) {
    isDragging = true;
    const { clientX, clientY } = e.touches ? e.touches[0] : e;
    offsetX = clientX - detailsContainer.getBoundingClientRect().left;
    offsetY = clientY - detailsContainer.getBoundingClientRect().top;

    const moveHandler = (e) => {
        if (isDragging) {
            const { clientX, clientY } = e.touches ? e.touches[0] : e;
            detailsContainer.style.left = `${clientX - offsetX}px`;
            detailsContainer.style.top = `${clientY - offsetY}px`;
         }
    };

     const endDrag = () => {
        isDragging = false;
        document.removeEventListener('mousemove', moveHandler);
        document.removeEventListener('touchmove', moveHandler);
        document.removeEventListener('mouseup', endDrag);
        document.removeEventListener('touchend', endDrag);
    };

    document.addEventListener('mousemove', moveHandler);
    document.addEventListener('touchmove', moveHandler);
    document.addEventListener('mouseup', endDrag);
    document.addEventListener('touchend', endDrag);
}
