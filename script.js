const elements = [
  { symbol: 'H', name: 'Hydrogen', atomicNumber: 1, discoveredBy: 'Henry Cavendish', namedBy: 'Antoine Lavoisier', atomicMass: '1.008', density: '0.0000899' },
  { symbol: 'He', name: 'Helium', atomicNumber: 2, discoveredBy: 'Pierre Janssen', namedBy: 'Léon Teisserenc de Bort', atomicMass: '4.0026', density: '0.0001786' },
  { symbol: 'Li', name: 'Lithium', atomicNumber: 3, discoveredBy: 'Johan August Arfwedson', namedBy: 'Jöns Jakob Berzelius', atomicMass: '6.94', density: '0.534' },
  { symbol: 'Be', name: 'Beryllium', atomicNumber: 4, discoveredBy: 'Louis Nicolas Vauquelin', namedBy: 'Friedrich Wöhler', atomicMass: '9.0122', density: '1.85' },
  { symbol: 'B', name: 'Boron', atomicNumber: 5, discoveredBy: 'Joseph Louis Gay-Lussac and Louis Jacques Thénard', namedBy: 'Humphry Davy', atomicMass: '10.81', density: '2.34' },
  { symbol: 'C', name: 'Carbon', atomicNumber: 6, discoveredBy: 'Ancient Egypt', namedBy: 'Antoine Lavoisier', atomicMass: '12.011', density: '2.267' },
  { symbol: 'N', name: 'Nitrogen', atomicNumber: 7, discoveredBy: 'Daniel Rutherford', namedBy: 'Jean-Antoine Chaptal', atomicMass: '14.007', density: '0.0012506' },
  { symbol: 'O', name: 'Oxygen', atomicNumber: 8, discoveredBy: 'Carl Wilhelm Scheele', namedBy: 'Antoine Lavoisier', atomicMass: '15.999', density: '0.001429' },
  { symbol: 'F', name: 'Fluorine', atomicNumber: 9, discoveredBy: 'André-Marie Ampère', namedBy: 'Humphry Davy', atomicMass: '18.998', density: '0.001696' },
  { symbol: 'Ne', name: 'Neon', atomicNumber: 10, discoveredBy: 'Morris Travers and William Ramsay', namedBy: 'William Ramsay', atomicMass: '20.180', density: '0.0008999' },
  { symbol: 'Na', name: 'Sodium', atomicNumber: 11, discoveredBy: 'Humphry Davy', namedBy: 'Humphry Davy', atomicMass: '22.990', density: '0.971' },
  { symbol: 'Mg', name: 'Magnesium', atomicNumber: 12, discoveredBy: 'Joseph Black', namedBy: 'Humphry Davy', atomicMass: '24.305', density: '1.738' },
  { symbol: 'Al', name: 'Aluminum', atomicNumber: 13, discoveredBy: 'Hans Christian Ørsted', namedBy: 'Humphry Davy', atomicMass: '26.982', density: '2.7' },
  { symbol: 'Si', name: 'Silicon', atomicNumber: 14, discoveredBy: 'Jöns Jakob Berzelius', namedBy: 'Thomas Thomson (chemist)', atomicMass: '28.085', density: '2.3296' },
  { symbol: 'P', name: 'Phosphorus', atomicNumber: 15, discoveredBy: 'Hennig Brand', namedBy: 'Antoine Lavoisier', atomicMass: '30.974', density: '1.82' },
  { symbol: 'S', name: 'Sulfur', atomicNumber: 16, discoveredBy: 'Ancient China', namedBy: 'Antoine Lavoisier', atomicMass: '32.06', density: '2.067' },
  { symbol: 'Cl', name: 'Chlorine', atomicNumber: 17, discoveredBy: 'Carl Wilhelm Scheele', namedBy: 'Humphry Davy', atomicMass: '35.45', density: '0.003214' },
  { symbol: 'Ar', name: 'Argon', atomicNumber: 18, discoveredBy: 'Lord Rayleigh and Sir William Ramsay', namedBy: 'Lord Rayleigh and Sir William Ramsay', atomicMass: '39.948', density: '0.0017837' },
  { symbol: 'K', name: 'Potassium', atomicNumber: 19, discoveredBy: 'Humphry Davy', namedBy: 'Humphry Davy', atomicMass: '39.098', density: '0.89' },
  { symbol: 'Ca', name: 'Calcium', atomicNumber: 20, discoveredBy: 'Humphry Davy', namedBy: 'Humphry Davy', atomicMass: '40.078', density: '1.55' },
  { symbol: 'Sc', name: 'Scandium', atomicNumber: 21, discoveredBy: 'Lars Fredrik Nilson', namedBy: 'Nilson', atomicMass: '44.956', density: '2.98' },
  { symbol: 'Ti', name: 'Titanium', atomicNumber: 22, discoveredBy: 'William Gregor', namedBy: 'Martin Heinrich Klaproth', atomicMass: '47.867', density: '4.506' },
  { symbol: 'V', name: 'Vanadium', atomicNumber: 23, discoveredBy: 'Andrés Manuel del Río', namedBy: 'Nils Gabriel Sefström', atomicMass: '50.942', density: '6' },
  { symbol: 'Cr', name: 'Chromium', atomicNumber: 24, discoveredBy: 'Louis Nicolas Vauquelin', namedBy: 'Louis Nicolas Vauquelin', atomicMass: '51.996', density: '7.15' },
  { symbol: 'Mn', name: 'Manganese', atomicNumber: 25, discoveredBy: 'Carl Wilhelm Scheele', namedBy: 'Gahn and Scheele', atomicMass: '54.938', density: '7.3' },
  { symbol: 'Fe', name: 'Iron', atomicNumber: 26, discoveredBy: 'Ancient Egypt', namedBy: 'Ancient Egypt', atomicMass: '55.845', density: '7.874' },
  { symbol: 'Co', name: 'Cobalt', atomicNumber: 27, discoveredBy: 'Georg Brandt', namedBy: 'Georg Brandt', atomicMass: '58.93', density: '8.90' },
  { symbol: 'Ni', name: 'Nickel', atomicNumber: 28, discoveredBy: 'Axel Fredrik Cronstedt', namedBy: 'Axel Fredrik Cronstedt', atomicMass: '58.693', density: '8.908' },
  { symbol: 'Cu', name: 'Copper', atomicNumber: 29, discoveredBy: 'Ancient Egypt', namedBy: 'Ancient Egypt', atomicMass: '63.546', density: '8.96' },
  { symbol: 'Zn', name: 'Zinc', atomicNumber: 30, discoveredBy: 'India', namedBy: 'India', atomicMass: '65.38', density: '7.14' },
  { symbol: 'Ga', name: 'Gallium', atomicNumber: 31, discoveredBy: 'Lecoq de Boisbaudran', namedBy: 'Lecoq de Boisbaudran', atomicMass: '69.723', density: '5.904' },
  { symbol: 'Ge', name: 'Germanium', atomicNumber: 32, discoveredBy: 'Clemens Winkler', namedBy: 'Clemens Winkler', atomicMass: '72.630', density: '5.323' },
  { symbol: 'As', name: 'Arsenic', atomicNumber: 33, discoveredBy: 'Ancient Egypt', namedBy: 'Ancient Egypt', atomicMass: '74.922', density: '5.776' },
  { symbol: 'Se', name: 'Selenium', atomicNumber: 34, discoveredBy: 'Jöns Jakob Berzelius', namedBy: 'Jöns Jakob Berzelius', atomicMass: '78.971', density: '4.809' },
  { symbol: 'Br', name: 'Bromine', atomicNumber: 35, discoveredBy: 'Antoine Jérôme Balard', namedBy: 'Antoine Jérôme Balard', atomicMass: '79.904', density: '3.1028' },
  { symbol: 'Kr', name: 'Krypton', atomicNumber: 36, discoveredBy: 'Sir William Ramsay and Morris Travers', namedBy: 'Sir William Ramsay and Morris Travers', atomicMass: '83.798', density: '0.003733' },
  { symbol: 'Rb', name: 'Rubidium', atomicNumber: 37, discoveredBy: 'Robert Bunsen and Gustav Kirchhoff', namedBy: 'Robert Bunsen', atomicMass: '85.468', density: '1.532' },
  { symbol: 'Sr', name: 'Strontium', atomicNumber: 38, discoveredBy: 'Adair Crawford and William Cruickshank', namedBy: 'Thomas Charles Hope', atomicMass: '87.620', density: '2.64' },
  { symbol: 'Y', name: 'Yttrium', atomicNumber: 39, discoveredBy: 'Johan Gadolin', namedBy: 'Johan Gadolin', atomicMass: '88.906', density: '4.469' },
  { symbol: 'Zr', name: 'Zirconium', atomicNumber: 40, discoveredBy: 'Martin Heinrich Klaproth', namedBy: 'Martin Heinrich Klaproth', atomicMass: '91.224', density: '6.506' },
  { symbol: 'Nb', name: 'Niobium', atomicNumber: 41, discoveredBy: 'Charles Hatchett', namedBy: 'Charles Hatchett', atomicMass: '92.906', density: '8.57' },
  { symbol: 'Mo', name: 'Molybdenum', atomicNumber: 42, discoveredBy: 'Carl Wilhelm Scheele', namedBy: 'Peter Jacob Hjelm', atomicMass: '95.951', density: '10.22' },
  { symbol: 'Tc', name: 'Technetium', atomicNumber: 43, discoveredBy: 'Carlo Perrier and Emilio Segrè', namedBy: 'Emilio Segrè', atomicMass: '(98)', density: '11' },
  { symbol: 'Ru', name: 'Ruthenium', atomicNumber: 44, discoveredBy: 'Karl Ernst Claus', namedBy: 'Karl Ernst Claus', atomicMass: '101.07', density: '12.45' },
  { symbol: 'Rh', name: 'Rhodium', atomicNumber: 45, discoveredBy: 'William Hyde Wollaston', namedBy: 'William Hyde Wollaston', atomicMass: '102.91', density: '12.41' },
  { symbol: 'Pd', name: 'Palladium', atomicNumber: 46, discoveredBy: 'William Hyde Wollaston', namedBy: 'William Hyde Wollaston', atomicMass: '106.42', density: '12.02' },
  { symbol: 'Ag', name: 'Silver', atomicNumber: 47, discoveredBy: 'Ancient Egypt', namedBy: 'Ancient Egypt', atomicMass: '107.87', density: '10.49' },
  { symbol: 'Cd', name: 'Cadmium', atomicNumber: 48, discoveredBy: 'Karl Samuel Leberecht Hermann and Friedrich Stromeyer', namedBy: 'Karl Samuel Leberecht Hermann', atomicMass: '112.41', density: '8.65' },
  { symbol: 'In', name: 'Indium', atomicNumber: 49, discoveredBy: 'Ferdinand Reich and Hieronymous Theodor Richter', namedBy: 'Ferdinand Reich and Hieronymous Theodor Richter', atomicMass: '114.82', density: '7.31' },
  { symbol: 'Sn', name: 'Tin', atomicNumber: 50, discoveredBy: 'Ancient Egypt', namedBy: 'Ancient Egypt', atomicMass: '118.71', density: '7.31' },
  { symbol: 'Sb', name: 'Antimony', atomicNumber: 51, discoveredBy: 'Ancient Egypt', namedBy: 'Ancient Egypt', atomicMass: '121.76', density: '6.697' },
  { symbol: 'Te', name: 'Tellurium', atomicNumber: 52, discoveredBy: 'Franz-Joseph Müller von Reichenstein', namedBy: 'Martin Heinrich Klaproth', atomicMass: '127.60', density: '6.24' },
  { symbol: 'I', name: 'Iodine', atomicNumber: 53, discoveredBy: 'Bernard Courtois', namedBy: 'Joseph Louis Gay-Lussac and Louis Jacques Thénard', atomicMass: '126.90', density: '4.933' },
  { symbol: 'Xe', name: 'Xenon', atomicNumber: 54, discoveredBy: 'Sir William Ramsay and Morris Travers', namedBy: 'Sir William Ramsay and Morris Travers', atomicMass: '131.29', density: '0.005887' },
  { symbol: 'Cs', name: 'Cesium', atomicNumber: 55, discoveredBy: 'Robert Bunsen and Gustav Kirchhoff', namedBy: 'Robert Bunsen', atomicMass: '132.91', density: '1.93' },
  { symbol: 'Ba', name: 'Barium', atomicNumber: 56, discoveredBy: 'Carl Wilhelm Scheele', namedBy: 'Humphry Davy', atomicMass: '137.33', density: '3.51' },
  { symbol: 'La', name: 'Lanthanum', atomicNumber: 57, discoveredBy: 'Carl Gustaf Mosander', namedBy: 'Carl Gustaf Mosander', atomicMass: '138.91', density: '6.15' },
  { symbol: 'Ce', name: 'Cerium', atomicNumber: 58, discoveredBy: 'Martin Heinrich Klaproth and Jöns Jakob Berzelius', namedBy: 'Martin Heinrich Klaproth', atomicMass: '140.12', density: '6.77' },
  { symbol: 'Pr', name: 'Praseodymium', atomicNumber: 59, discoveredBy: 'Carl Auer von Welsbach', namedBy: 'Carl Auer von Welsbach', atomicMass: '140.91', density: '6.77' },
  { symbol: 'Nd', name: 'Neodymium', atomicNumber: 60, discoveredBy: 'Carl Auer von Welsbach', namedBy: 'Carl Auer von Welsbach', atomicMass: '144.24', density: '7.01' },
  { symbol: 'Pm', name: 'Promethium', atomicNumber: 61, discoveredBy: 'Grace Mary Coryell and Albert Ghiorso', namedBy: 'IUPAC', atomicMass: '(145)', density: '7.26' },
  { symbol: 'Sm', name: 'Samarium', atomicNumber: 62, discoveredBy: 'Lecoq de Boisbaudran', namedBy: 'Lecoq de Boisbaudran', atomicMass: '150.36', density: '7.52' },
  { symbol: 'Eu', name: 'Europium', atomicNumber: 63, discoveredBy: 'Eugène-Antole Demarçay', namedBy: 'IUPAC', atomicMass: '151.96', density: '5.24' },
  { symbol: 'Gd', name: 'Gadolinium', atomicNumber: 64, discoveredBy: 'Jean Charles Galissard de Marignac', namedBy: 'Jean Charles Galissard de Marignac', atomicMass: '157.25', density: '7.90' },
  { symbol: 'Tb', name: 'Terbium', atomicNumber: 65, discoveredBy: 'Carl Gustaf Mosander', namedBy: 'IUPAC', atomicMass: '158.93', density: '8.23' },
  { symbol: 'Dy', name: 'Dysprosium', atomicNumber: 66, discoveredBy: 'Lecoq de Boisbaudran', namedBy: 'Lecoq de Boisbaudran', atomicMass: '162.50', density: '8.55' },
  { symbol: 'Ho', name: 'Holmium', atomicNumber: 67, discoveredBy: 'Marc Delafontaine and Jacques-Louis Soret', namedBy: 'IUPAC', atomicMass: '164.93', density: '8.79' },
  { symbol: 'Er', name: 'Erbium', atomicNumber: 68, discoveredBy: 'Carl Gustaf Mosander', namedBy: 'IUPAC', atomicMass: '167.26', density: '9.07' },
  { symbol: 'Tm', name: 'Thulium', atomicNumber: 69, discoveredBy: 'Per Teodor Cleve', namedBy: 'IUPAC', atomicMass: '168.93', density: '9.32' },
  { symbol: 'Yb', name: 'Ytterbium', atomicNumber: 70, discoveredBy: 'Jean Charles Galissard de Marignac', namedBy: 'IUPAC', atomicMass: '173.05', density: '6.90' },
  { symbol: 'Lu', name: 'Lutetium', atomicNumber: 71, discoveredBy: 'Georges Urbain and Carl Auer von Welsbach', namedBy: 'IUPAC', atomicMass: '174.97', density: '9.84' },
  { symbol: 'Hf', name: 'Hafnium', atomicNumber: 72, discoveredBy: 'Dirk Coster and George de Hevesy', namedBy: 'IUPAC', atomicMass: '178.49', density: '13.31' },
  { symbol: 'Ta', name: 'Tantalum', atomicNumber: 73, discoveredBy: 'Anders Gustaf Ekeberg', namedBy: 'IUPAC', atomicMass: '180.95', density: '16.69' },
  { symbol: 'W', name: 'Tungsten', atomicNumber: 74, discoveredBy: 'Carl Wilhelm Scheele', namedBy: 'IUPAC', atomicMass: '183.84', density: '19.25' },
  { symbol: 'Re', name: 'Rhenium', atomicNumber: 75, discoveredBy: 'Masataka Ogawa', namedBy: 'Masataka Ogawa', atomicMass: '186.21', density: '21.02' },
  { symbol: 'Os', name: 'Osmium', atomicNumber: 76, discoveredBy: 'Smithson Tennant', namedBy: 'Smithson Tennant', atomicMass: '190.23', density: '22.59' },
  { symbol: 'Ir', name: 'Iridium', atomicNumber: 77, discoveredBy: 'Smithson Tennant', namedBy: 'Smithson Tennant', atomicMass: '192.22', density: '22.56' },
  { symbol: 'Pt', name: 'Platinum', atomicNumber: 78, discoveredBy: 'Ancient Egypt', namedBy: 'Ancient Egypt', atomicMass: '195.08', density: '21.45' },
  { symbol: 'Au', name: 'Gold', atomicNumber: 79, discoveredBy: 'Ancient Egypt', namedBy: 'Ancient Egypt', atomicMass: '196.97', density: '19.32' },
  { symbol: 'Hg', name: 'Mercury', atomicNumber: 80, discoveredBy: 'Ancient China', namedBy: 'Ancient China', atomicMass: '200.59', density: '13.55' },
  { symbol: 'Tl', name: 'Thallium', atomicNumber: 81, discoveredBy: 'William Crookes', namedBy: 'William Crookes', atomicMass: '204.38', density: '11.85' },
    { symbol: 'Pb', name: 'Lead', atomicNumber: 82, discoveredBy: 'Ancient Egypt', namedBy: 'Ancient Egypt', atomicMass: '207.2', density: '11.34' },
    { symbol: 'Bi', name: 'Bismuth', atomicNumber: 83, discoveredBy: 'Claude François Geoffroy', namedBy: 'Claude François Geoffroy', atomicMass: '208.98', density: '9.78' },
    { symbol: 'Po', name: 'Polonium', atomicNumber: 84, discoveredBy: 'Pierre Curie and Marie Curie', namedBy: 'IUPAC', atomicMass: '(209)', density: '9.20' },
    { symbol: 'At', name: 'Astatine', atomicNumber: 85, discoveredBy: 'Dale R. Corson, Kenneth Ross MacKenzie, and Emilio Segrè', namedBy: 'IUPAC', atomicMass: '(210)', density: 'unknown' },
    { symbol: 'Rn', name: 'Radon', atomicNumber: 86, discoveredBy: 'Friedrich Ernst Dorn', namedBy: 'IUPAC', atomicMass: '(222)', density: '9.73' },
    { symbol: 'Fr', name: 'Francium', atomicNumber: 87, discoveredBy: 'Marguerite Perey', namedBy: 'IUPAC', atomicMass: '(223)', density: 'unknown' },
    { symbol: 'Ra', name: 'Radium', atomicNumber: 88, discoveredBy: 'Pierre Curie and Marie Curie', namedBy: 'Pierre Curie and Marie Curie', atomicMass: '(226)', density: '5.50' },
    { symbol: 'Ac', name: 'Actinium', atomicNumber: 89, discoveredBy: 'Friedrich Oskar Giesel', namedBy: 'Friedrich Oskar Giesel', atomicMass: '(227)', density: '10.07' },
    { symbol: 'Th', name: 'Thorium', atomicNumber: 90, discoveredBy: 'Jöns Jakob Berzelius', namedBy: 'Jöns Jakob Berzelius', atomicMass: '232.04', density: '11.72' },
  { symbol: 'Pa', name: 'Protactinium', atomicNumber: 91, discoveredBy: 'William Crookes', namedBy: 'IUPAC', atomicMass: '231.04', density: '15.37' },
  { symbol: 'U', name: 'Uranium', atomicNumber: 92, discoveredBy: 'Martin Heinrich Klaproth', namedBy: 'Martin Heinrich Klaproth', atomicMass: '238.03', density: '19.05' },
  { symbol: 'Np', name: 'Neptunium', atomicNumber: 93, discoveredBy: 'Edwin McMillan and Philip H. Abelson', namedBy: 'IUPAC', atomicMass: '(237)', density: '20.45' },
  { symbol: 'Pu', name: 'Plutonium', atomicNumber: 94, discoveredBy: 'Glenn T. Seaborg', namedBy: 'IUPAC', atomicMass: '(244)', density: '19.86' },
  { symbol: 'Am', name: 'Americium', atomicNumber: 95, discoveredBy: 'Glenn T. Seaborg and Ralph A. James', namedBy: 'IUPAC', atomicMass: '(243)', density: '13.67' },
  { symbol: 'Cm', name: 'Curium', atomicNumber: 96, discoveredBy: 'Glenn T. Seaborg, Ralph A. James, and Albert Ghiorso', namedBy: 'IUPAC', atomicMass: '(247)', density: '13.51' },
  { symbol: 'Bk', name: 'Berkelium', atomicNumber: 97, discoveredBy: 'Glenn T. Seaborg, Ralph A. James, and Albert Ghiorso', namedBy: 'IUPAC', atomicMass: '(247)', density: '14.79' },
  { symbol: 'Cf', name: 'Californium', atomicNumber: 98, discoveredBy: 'Glenn T. Seaborg, Ralph A. James, and Albert Ghiorso', namedBy: 'IUPAC', atomicMass: '(251)', density: '15.10' },
  { symbol: 'Es', name: 'Einsteinium', atomicNumber: 99, discoveredBy: 'Glenn T. Seaborg, Ralph A. James, and Albert Ghiorso', namedBy: 'IUPAC', atomicMass: '(252)', density: '13.50' },
  { symbol: 'Fm', name: 'Fermium', atomicNumber: 100, discoveredBy: 'Glenn T. Seaborg, Ralph A. James, and Albert Ghiorso', namedBy: 'IUPAC', atomicMass: '(257)', density: '15.10' },
  { symbol: 'Md', name: 'Mendelevium', atomicNumber: 101, discoveredBy: 'Albert Ghiorso, Glenn T. Seaborg, Ralph A. James', namedBy: 'IUPAC', atomicMass: '(258)', density: 'None' },
    { symbol: 'No', name: 'Nobelium', atomicNumber: 102, discoveredBy: 'Albert Ghiorso, Glenn T. Seaborg, Ralph A. James', namedBy: 'IUPAC', atomicMass: '(259)', density: 'None' },
    { symbol: 'Lr', name: 'Lawrencium', atomicNumber: 103, discoveredBy: 'Albert Ghiorso, Glenn T. Seaborg, Ralph A. James', namedBy: 'IUPAC', atomicMass: '(262)', density: 'None' },
    { symbol: 'Rf', name: 'Rutherfordium', atomicNumber: 104, discoveredBy: 'Joint Institute for Nuclear Research (JINR) and Lawrence Livermore National Laboratory (LLNL)', namedBy: 'IUPAC', atomicMass: '(267)', density: 'None' },
    { symbol: 'Db', name: 'Dubnium', atomicNumber: 105, discoveredBy: 'Joint Institute for Nuclear Research (JINR) and Lawrence Livermore National Laboratory (LLNL)', namedBy: 'IUPAC', atomicMass: '(270)', density: 'None' },
    { symbol: 'Sg', name: 'Seaborgium', atomicNumber: 106, discoveredBy: 'Joint Institute for Nuclear Research (JINR) and Lawrence Livermore National Laboratory (LLNL)', namedBy: 'IUPAC', atomicMass: '(271)', density: 'None' },
    { symbol: 'Bh', name: 'Bohrium', atomicNumber: 107, discoveredBy: 'Gesellschaft für Schwerionenforschung (GSI) Helmholtz Centre for Heavy Ion Research', namedBy: 'IUPAC', atomicMass: '(270)', density: 'None' },
    { symbol: 'Hs', name: 'Hassium', atomicNumber: 108, discoveredBy: 'Gesellschaft für Schwerionenforschung (GSI) Helmholtz Centre for Heavy Ion Research', namedBy: 'IUPAC', atomicMass: '(277)', density: 'None' },
    { symbol: 'Mt', name: 'Meitnerium', atomicNumber: 109, discoveredBy: 'Gesellschaft für Schwerionenforschung (GSI) Helmholtz Centre for Heavy Ion Research', namedBy: 'IUPAC', atomicMass: '(276)', density: 'None' },
    { symbol: 'Ds', name: 'Darmstadtium', atomicNumber: 110, discoveredBy: 'Gesellschaft für Schwerionenforschung (GSI) Helmholtz Centre for Heavy Ion Research', namedBy: 'IUPAC', atomicMass: '(281)', density: 'None' },
    { symbol: 'Rg', name: 'Roentgenium', atomicNumber: 111, discoveredBy: 'Gesellschaft für Schwerionenforschung (GSI) Helmholtz Centre for Heavy Ion Research', namedBy: 'IUPAC', atomicMass: '(280)', density: 'None' },
    { symbol: 'Cn', name: 'Copernicium', atomicNumber: 112, discoveredBy: 'Gesellschaft für Schwerionenforschung (GSI) Helmholtz Centre for Heavy Ion Research', namedBy: 'IUPAC', atomicMass: '(285)', density: 'None' },
    { symbol: 'Nh', name: 'Nihonium', atomicNumber: 113, discoveredBy: 'RIKEN in Japan', namedBy: 'IUPAC', atomicMass: '(284)', density: 'None' },
    { symbol: 'Fl', name: 'Flerovium', atomicNumber: 114, discoveredBy: 'Joint Institute for Nuclear Research (JINR) in Russia and Lawrence Livermore National Laboratory (LLNL) in the USA', namedBy: 'IUPAC', atomicMass: '(289)', density: 'None' },
    { symbol: 'Mc', name: 'Moscovium', atomicNumber: 115, discoveredBy: 'Joint Institute for Nuclear Research (JINR) in Russia and Lawrence Livermore National Laboratory (LLNL) in the USA', namedBy: 'IUPAC', atomicMass: '(288)', density: 'None' },
    { symbol: 'Lv', name: 'Livermorium', atomicNumber: 116, discoveredBy: 'Joint Institute for Nuclear Research (JINR) in Russia and Lawrence Livermore National Laboratory (LLNL) in the USA', namedBy: 'IUPAC', atomicMass: '(293)', density: 'None' },
    { symbol: 'Ts', name: 'Tennessine', atomicNumber: 117, discoveredBy: 'Joint Institute for Nuclear Research (JINR) in Russia and Oak Ridge National Laboratory (ORNL) in the USA', namedBy: 'IUPAC', atomicMass: '(294)', density: 'None' },
    { symbol: 'Og', name: 'Oganesson', atomicNumber: 118, discoveredBy: 'Joint Institute for Nuclear Research (JINR) in Russia and Lawrence Livermore National Laboratory (LLNL) in the USA', namedBy: 'IUPAC', atomicMass: '(294)', density: 'None' }];



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
};

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
      document.getElementById('element-description').textContent = `${elements[ele].name} is an element with atomic number ${elements[ele].atomicNumber} and symbol ${elements[ele].symbol}.`;

}
 
// function onClickEvent() {
//   var container = document.querySelector('.details-container');
//   var elementDiv = document.getElementsByClassName("q");
//   for (let i = 0; i < elements.length; i++) {

//     elementDiv[i].addEventListener('click', function (event) {
//       var selectedElement = null;
//       const items = ['atomicNumber', 'symbol', 'name'];

//       for (let i = 0; i < items.length; i++) {
//         selectedElement = elements.find(el => el[items[i]] === event.target.textContent);
//       }

//       if (selectedElement) {
//         showElementDetails(selectedElement);
//         container.style.display = 'block';
//       } else {
//         console.log("Element not found");
//       }
//     });
//   }
  
//   document.querySelector('.cross').addEventListener('click', function () {
//     container.style.display = 'none';
//   });
// }
// onClickEvent();

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

  