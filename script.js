const Ele = {
    1: ['H', 'Hydrogen'],
    2: ['He', 'Helium'],
    3: ['Li', 'Lithium'],
    4: ['Be', 'Beryllium'],
    5: ['B', 'Boron'],
    6: ['C', 'Carbon'],
    7: ['N', 'Nitrogen'],
    8: ['O', 'Oxygen'],
    9: ['F', 'Fluorine'],
    10: ['Ne', 'Neon'],
    11: ['Na', 'Sodium'],
    12: ['Mg', 'Magnesium'],
    13: ['Al', 'Aluminum'],
    14: ['Si', 'Silicon'],
    15: ['P', 'Phosphorus'],
    16: ['S', 'Sulfur'],
    17: ['Cl', 'Chlorine'],
    18: ['Ar', 'Argon'],
    19: ['K', 'Potassium'],
    20: ['Ca', 'Calcium'],
    21: ['Sc', 'Scandium'],
    22: ['Ti', 'Titanium'],
    23: ['V', 'Vanadium'],
    24: ['Cr', 'Chromium'],
    25: ['Mn', 'Manganese'],
    26: ['Fe', 'Iron'],
    27: ['Ni', 'Nickel'],
    28: ['Co', 'Cobalt'],
    29: ['Cu', 'Copper'],
    30: ['Zn', 'Zinc'],
    31: ['Ga', 'Gallium'],
    32: ['Ge', 'Germanium'],
    33: ['As', 'Arsenic'],
    34: ['Se', 'Selenium'],
    35: ['Br', 'Bromine'],
    36: ['Kr', 'Krypton'],
    37: ['Rb', 'Rubidium'],
    38: ['Sr', 'Strontium'],
    39: ['Y', 'Yttrium'],
    40: ['Zr', 'Zirconium'],
    41: ['Nb', 'Niobium'],
    42: ['Mo', 'Molybdenum'],
    43: ['Tc', 'Technetium'],
    44: ['Ru', 'Ruthenium'],
    45: ['Rh', 'Rhodium'],
    46: ['Pd', 'Palladium'],
    47: ['Ag', 'Silver'],
    48: ['Cd', 'Cadmium'],
    49: ['In', 'Indium'],
    50: ['Sn', 'Tin'],
    51: ['Sb', 'Antimony'],
    52: ['Te', 'Tellurium'],
    53: ['I', 'Iodine'],
    54: ['Xe', 'Xenon'],
    55: ['Cs', 'Cesium'],
    56: ['Ba', 'Barium'],
    57: ['La', 'Lanthanum'],
    58: ['Ce', 'Cerium'],
    59: ['Pr', 'Praseodymium'],
    60: ['Nd', 'Neodymium'],
    61: ['Pm', 'Promethium'],
    62: ['Sm', 'Samarium'],
    63: ['Eu', 'Europium'],
    64: ['Gd', 'Gadolinium'],
    65: ['Tb', 'Terbium'],
    66: ['Dy', 'Dysprosium'],
    67: ['Ho', 'Holmium'],
    68: ['Er', 'Erbium'],
    69: ['Tm', 'Thulium'],
    70: ['Yb', 'Ytterbium'],
    71: ['Lu', 'Lutetium'],
    72: ['Hf', 'Hafnium'],
    73: ['Ta', 'Tantalum'],
    74: ['W', 'Tungsten'],
    75: ['Re', 'Rhenium'],
    76: ['Os', 'Osmium'],
    77: ['Ir', 'Iridium'],
    78: ['Pt', 'Platinum'],
    79: ['Au', 'Gold'],
    80: ['Hg', 'Mercury'],
    81: ['Tl', 'Thallium'],
    82: ['Pb', 'Lead'],
    83: ['Bi', 'Bismuth'],
    84: ['Po', 'Polonium'],
    85: ['At', 'Astatine'],
    86: ['Rn', 'Radon'],
    87: ['Fr', 'Francium'],
    88: ['Ra', 'Radium'],
    89: ['Ac', 'Actinium'],
    90: ['Th', 'Thorium'],
    91: ['Pa', 'Protactinium'],
    92: ['U', 'Uranium'],
    93: ['Np', 'Neptunium'],
    94: ['Pu', 'Plutonium'],
    95: ['Am', 'Americium'],
    96: ['Cm', 'Curium'],
    97: ['Bk', 'Berkelium'],
    98: ['Cf', 'Californium'],
    99: ['Es', 'Einsteinium'],
    100: ['Fm', 'Fermium'],
    101: ['Md', 'Mendelevium'],
    102: ['No', 'Nobelium'],
    103: ['Lr', 'Lawrencium'],
    104: ['Rf', 'Rutherfordium'],
    105: ['Db', 'Dubnium'],
    106: ['Sg', 'Seaborgium'],
    107: ['Bh', 'Bohrium'],
    108: ['Hs', 'Hassium'],
    109: ['Mt', 'Meitnerium'],
    110: ['Ds', 'Darmstadtium'],
    111: ['Rg', 'Roentgenium'],
    112: ['Cn', 'Copernicium'],
    113: ['Nh', 'Nihonium'],
    114: ['Fl', 'Flerovium'],
    115: ['Mc', 'Moscovium'],
    116: ['Lv', 'Livermorium'],
    117: ['Ts', 'Tennessine'],
    118: ['Og', 'Oganesson'],
  };

// console.log(Ele[1]); =>Array
// console.log(Ele[1][0]) =>Symbol
// console.log(Ele[1][1]); =>name

for(let i=1; i<=118; i++)
{   
    i = String(i);
    var element_no= document.querySelector('.atomic_no[id = "'+i+'"]');
    var element_name= document.querySelector('.name[id ="'+i+'"]');
    var element_symbol= document.querySelector('.Symbol[id = "'+i+'"]');
    element_no.textContent = String(i);
    element_name.textContent= Ele[i][1];
    element_symbol.textContent= Ele[i][0];
    i = Number(i);
}

document.addEventListener('DOMContentLoaded',function(){
  var col_q = document.getElementsByClassName('q');
  var col_name = document.getElementsByClassName('name');

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
})
var elements = [
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
  { symbol: 'K', name: 'Potassium', atomicNumber: 19, discoveredBy: 'Humphry Davy', namedBy: 'Humphry Davy', atomicMass: '39.098', density: '0.89' },
  { symbol: 'Ar', name: 'Argon', atomicNumber: 18, discoveredBy: 'Lord Rayleigh and Sir William Ramsay', namedBy: 'Lord Rayleigh and Sir William Ramsay', atomicMass: '39.948', density: '0.0017837' },
  { symbol: 'Ca', name: 'Calcium', atomicNumber: 20, discoveredBy: 'Humphry Davy', namedBy: 'Humphry Davy', atomicMass: '40.078', density: '1.55' },
  { symbol: 'Sc', name: 'Scandium', atomicNumber: 21, discoveredBy: 'Lars Fredrik Nilson', namedBy: 'Nilson', atomicMass: '44.956', density: '2.98' },
  { symbol: 'Ti', name: 'Titanium', atomicNumber: 22, discoveredBy: 'William Gregor', namedBy: 'Martin Heinrich Klaproth', atomicMass: '47.867', density: '4.506' },
  { symbol: 'V', name: 'Vanadium', atomicNumber: 23, discoveredBy: 'Andrés Manuel del Río', namedBy: 'Nils Gabriel Sefström', atomicMass: '50.942', density: '6' },
  { symbol: 'Cr', name: 'Chromium', atomicNumber: 24, discoveredBy: 'Louis Nicolas Vauquelin', namedBy: 'Louis Nicolas Vauquelin', atomicMass: '51.996', density: '7.15' },
  { symbol: 'Mn', name: 'Manganese', atomicNumber: 25, discoveredBy: 'Carl Wilhelm Scheele', namedBy: 'Gahn and Scheele', atomicMass: '54.938', density: '7.3' },
  { symbol: 'Fe', name: 'Iron', atomicNumber: 26, discoveredBy: 'Ancient Egypt', namedBy: 'Ancient Egypt', atomicMass: '55.845', density: '7.874' },
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
    function createElementDiv(element) {
      var div = document.createElement('div');
      div.className = 'element';
      div.textContent = `${element.symbol} - ${element.name} (${element.atomicNumber})`;
      return div;
    }
    
    function showElementDetails(element) {
      document.getElementById('Z').textContent = element.atomicNumber;
      document.getElementById('sym').textContent = element.symbol;
      document.getElementById('Z_name').textContent = element.name;
      document.getElementById('A').textContent = element.atomicMass;
      document.getElementById('Disc-By').textContent = element.discoveredBy;
      document.getElementById('Named-By').textContent = element.namedBy;
      document.getElementById('Atomic-Mass').textContent = element.atomicMass;
      document.getElementById('Density').textContent = element.density;
      //document.getElementById('element-description').textContent = `${element.name} is an element with atomic number ${element.atomicNumber} and symbol ${element.symbol}.`;
    }
    var container = document.querySelector('.details.container');
    for (var i = 0; i < elements.length; i++) {
     // var elementDiv = createElementDiv(elements[i]);
     var elementDiv=document.getElementsByClassName ("q")[i];
      //container.appendChild(elementDiv);
      elementDiv.addEventListener('click', function (event) {
       // var selectedElement=container.getElementsByClassName ("row2")[0];
       var selectedElement = elements.find(el => el.symbol === event.target.textContent);
        showElementDetails(selectedElement);
        document.querySelector('.details.container').style.display = 'block';
      });
    }
    document.querySelector('.cross').addEventListener('click', function () {
      document.querySelector('.details.container').style.display = 'none';
    });
    




