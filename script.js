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

  for (var i = 0; i < col_q.length; i++) {
    (function (index) 
    {
      col_q[i].addEventListener('mouseover', function () {
        this.style.transform = 'scale(1.3)';
        this.style.transformOrigin = 'center center';
        // this.style.position = ;
        //col_name[index].style.maxWidth = 'none';
      });
  
      col_q[i].addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
        //col_name[index].style.maxWidth = '55px';

      });
    })(i);
  }
});