// Static coordinate lookup for event locations.
// Primary: shortLocation string → [lat, lng]
// Fallback: country string → [lat, lng] (approximate center)

const LOCATION_COORDS = {
  // Canada
  'Alberta, Canada': [51.05, -114.07],
  'Ontario, Canada': [43.65, -79.38],
  'Mississauga, Ontario, Canada': [43.59, -79.64],
  'Lethbridge, Alberta, Canada': [49.69, -112.84],
  'Quebec, Canada': [46.81, -71.21],
  'Belleville, Ontario, Canada': [44.16, -77.38],
  'Simcoe, Ontario, Canada': [42.84, -80.30],

  // United States
  'Las Vegas, Nevada, United States': [36.17, -115.14],
  'Manhomen, Minnesota, United States': [47.31, -95.97],
  'Suquamish, Washington, United States': [47.73, -122.55],
  'Ontario, Ohio, United States': [40.76, -82.59],
  'Woodford, Virginia, United States': [38.09, -77.43],
  'Cherry Hill, New Jersey, United States': [39.93, -75.00],
  'Aurora, Illinois, United States': [41.76, -88.32],
  'Mitchell, Nebraska, United States': [41.94, -103.81],
  'Manassas, Virginia, United States': [38.75, -77.47],
  'Tampa, Florida, United States': [27.95, -82.46],
  'Clearwater, Florida, United States': [27.97, -82.76],
  'Springfield, Missouri, United States': [37.22, -93.29],
  'Miami, Florida, United States': [25.76, -80.19],
  'Salem, Virginia, United States': [37.29, -80.05],
  'Venice, Florida, United States': [27.10, -82.45],
  'Los Angeles, California, United States': [34.05, -118.24],
  'Lavaca, Texas, United States': [29.37, -96.92],
  'Aurora, Colorado, United States': [39.73, -104.83],
  'Fort Pierce, Florida, United States': [27.45, -80.33],
  'Houston, Texas, United States': [29.76, -95.37],
  'Salt Lake City, Utah, United States': [40.76, -111.89],
  'Columbus, Ohio, United States': [39.96, -82.99],
  'New York, New York, United States': [40.71, -74.01],
  'Ridgefield, Washington, United States': [45.81, -122.74],
  'Colorado Springs, Colorado, United States': [38.83, -104.82],
  'Boonsboro, Maryland, United States': [39.51, -77.65],
  'Cadillac, Michigan, United States': [44.25, -85.40],
  'Sallisaw, Oklahoma, United States': [35.46, -94.79],
  'Missoula, Montana, United States': [46.87, -114.00],
  'Auburn, Washington, United States': [47.31, -122.23],
  'Tupelo, Mississippi, United States': [34.26, -88.70],
  'Atlanta, Georgia, United States': [33.75, -84.39],
  'Peru, Indiana, United States': [40.75, -86.07],
  'Porterville, California, United States': [36.07, -119.02],
  'Crossville, Tennessee, United States': [35.95, -85.03],
  'Wayne, West Virginia, United States': [38.22, -82.44],
  'Fort Yates, North Dakota, United States': [46.09, -100.63],
  'Laughlin, Nevada, United States': [35.17, -114.57],
  'St. Charles, Missouri, United States': [38.78, -90.48],
  'Memphis, Tennessee, United States': [35.15, -90.05],
  'Port Huron, Michigan, United States': [42.97, -82.42],
  'Las Cruces, New Mexico, United States': [32.35, -106.76],
  'Yuma, Arizona, United States': [32.69, -114.63],
  'North Versailles, Pennsylvania, United States': [40.38, -79.81],
  'North Platte, Nebraska, United States': [41.12, -100.76],
  'Kentucky, United States': [37.84, -84.27],
  'Victorville, California, United States': [34.54, -117.29],
  'Newport, Kentucky, United States': [39.09, -84.50],
  'Kalispell, Montana, United States': [48.20, -114.31],
  'Uptown Charlotte, North Carolina, United States': [35.23, -80.84],
  'Rochester, New York, United States': [43.16, -77.61],
  'Wichita Falls, Texas, United States': [33.91, -98.49],
  'Akron, Ohio, United States': [41.08, -81.52],
  'Commerce, California, United States': [33.99, -118.16],
  'Chandler, Arizona, United States': [33.30, -111.84],

  // United Kingdom / England / Scotland / Wales / Northern Ireland
  'Aberdeen, Scotland': [57.15, -2.09],
  'Nottingham, England': [52.95, -1.15],
  'Neath, Wales': [51.66, -3.81],
  'Grangemouth, Scotland': [56.01, -3.72],
  'Rosyth, Scotland': [56.03, -3.44],
  'Darlington, England': [54.52, -1.55],
  'Gateshead, England': [54.96, -1.60],
  'Liverpool, Merseyside, England': [53.41, -2.98],
  'Manchester, Greater Manchester, England': [53.48, -2.24],
  'London, Greater London, England': [51.51, -0.13],
  'Preston, United Kingdom': [53.76, -2.70],
  England: [52.36, -1.17],
  'Northern Ireland': [54.61, -5.93],

  // France
  'Aix-En-Provence, France': [43.53, 5.45],
  'Strasbourg, France': [48.57, 7.75],

  // Mexico
  'Mexico City, Federal District, Mexico': [19.43, -99.13],
  'Santiago de Queretaro, Queretaro, Mexico': [20.59, -100.39],
  'Queretaro, Queretaro, Mexico': [20.59, -100.39],
  'Mexico City, Mexico': [19.43, -99.13],
  'Monterrey, Nuevo Leon, Mexico': [25.69, -100.32],
  'Nuevo Leon, Mexico': [25.69, -100.32],

  // Poland
  'Sosnowiec, Poland': [50.29, 19.13],
  'Koluszki, Poland': [51.74, 19.83],
  Poland: [51.92, 19.15],
  'Debica, Poland': [50.05, 21.41],
  'Skarzysko-Kamienna, Poland': [51.11, 20.86],
  'Koszalin, Poland': [54.19, 16.17],
  'Gorzow Wielkopolski, Poland': [52.73, 15.23],
  'Wrocław, Poland': [51.11, 17.04],
  'Mosina, Poland': [52.24, 16.85],

  // Australia
  'Melbourne, Victoria, Australia': [-37.81, 144.96],
  'Southport, Queensland, Australia': [-27.97, 153.40],

  // Brazil
  'Rio de Janeiro, Rio de Janeiro, Brazil': [-22.91, -43.17],
  'Itaquaquecetuba, Brazil': [-23.49, -46.35],
  'Cruzeiro do Sul, Acre, Brazil': [-7.63, -72.68],
  'Paranagua, Parana, Brazil': [-25.52, -48.51],
  'Distrito Federal, Brazil': [-15.79, -47.88],
  'Brasilia, Federal District, Brazil': [-15.79, -47.88],
  'Curitiba, Parana, Brazil': [-25.43, -49.27],
  'Tabuleiro do Norte, Ceara, Brazil': [-5.24, -38.13],
  'Sao Paulo, Brazil': [-23.55, -46.63],
  'Rio de Janeiro, Brazil': [-22.91, -43.17],
  'Amazonas, Brazil': [-3.12, -60.02],
  'Biguacu, Santa Catarina, Brazil': [-27.49, -48.66],

  // Japan
  'Shinjuku, Tokyo, Japan': [35.69, 139.70],
  '\u200BShinjuku, Tokyo, Japan': [35.69, 139.70],
  'Koto, Tokyo, Japan': [35.67, 139.82],
  'Osaka, Osaka, Japan': [34.69, 135.50],
  'Yokohama, Kanagawa, Japan': [35.44, 139.64],
  'Bunkyo, Tokyo, Japan': [35.71, 139.75],

  // South Korea
  'Cheongju, Chungcheongbuk, South Korea': [36.64, 127.49],
  'Dobong District, Seoul, South Korea': [37.67, 127.03],
  'Jung District, Seoul, South Korea': [37.56, 126.99],

  // Europe
  'Slavonski Brod, Croatia': [45.16, 18.01],
  'Vukovar, Croatia': [45.35, 19.00],
  Italy: [41.90, 12.50],
  'Cornaredo, Italy': [45.50, 9.03],
  'Rome, Italy': [41.90, 12.50],
  'Kolding, Denmark': [55.49, 9.47],
  'Bardejov, Slovakia': [49.29, 21.28],
  'Bratislava, Slovakia': [48.15, 17.11],
  'Rostock, Germany': [54.09, 12.10],
  'Hamburg, Germany': [53.55, 9.99],
  'Gelsenkirchen, Germany': [51.52, 7.10],
  Germany: [51.16, 10.45],
  'Goteborg, Sweden': [57.71, 11.97],
  'Gijon, Asturias, Spain': [43.54, -5.66],
  'Madrid, Spain': [40.42, -3.70],
  'Barcelona, Spain': [41.39, 2.17],
  'Salou, Spain': [41.08, 1.14],
  'Landgraaf, Limburg, Netherlands': [50.90, 6.02],
  'Vienna, Austria': [48.21, 16.37],
  'Bor, Serbia': [44.07, 22.10],
  'Zvornik, Bosnia and Herzegovina': [44.39, 19.10],

  // Asia / Oceania
  'Bangkok, Thailand': [13.76, 100.50],
  'Tbilisi, Georgia': [41.72, 44.79],
  'Luliang, Shanxi, China': [37.52, 111.14],
  'Phuoc Thuan, Ba Ria - Vung Tau, Vietnam': [10.53, 107.05],
  'Auckland, New Zealand': [-36.85, 174.76],

  // Central / South America
  'La Troncal, Canar, Ecuador': [-2.43, -79.34],
  'Santa Cruz de la Sierra, Santa Cruz, Bolivia': [-17.78, -63.18],
  'Panama City, Panama': [8.98, -79.52],
  'Tegucigalpa, Francisco Morazan, Honduras': [14.07, -87.19],
  'Buenos Aires, Argentina': [-34.60, -58.38],
  'Los Libertadores, Valparaiso, Chile': [-32.84, -70.60],

  // Other
  Russia: [55.75, 37.62],
};

const COUNTRY_COORDS = {
  Canada: [56.13, -106.35],
  Scotland: [56.49, -4.20],
  France: [46.23, 2.21],
  England: [52.36, -1.17],
  Mexico: [23.63, -102.55],
  'United States': [39.83, -98.58],
  Poland: [51.92, 19.15],
  Australia: [-25.27, 133.78],
  Brazil: [-14.24, -51.93],
  Croatia: [45.10, 15.20],
  Italy: [41.87, 12.57],
  Denmark: [56.26, 9.50],
  Wales: [52.13, -3.78],
  Slovakia: [48.67, 19.70],
  Ecuador: [-1.83, -78.18],
  Germany: [51.17, 10.45],
  Georgia: [42.32, 43.36],
  'New Zealand': [-40.90, 174.89],
  Sweden: [60.13, 18.64],
  Spain: [40.46, -3.75],
  'South Korea': [35.91, 127.77],
  Thailand: [15.87, 100.99],
  Bolivia: [-16.29, -63.59],
  Panama: [8.54, -80.78],
  Honduras: [15.20, -86.24],
  Japan: [36.20, 138.25],
  Argentina: [-38.42, -63.62],
  China: [35.86, 104.20],
  Vietnam: [14.06, 108.28],
  Russia: [61.52, 105.32],
  'United Kingdom': [55.38, -3.44],
  Netherlands: [52.13, 5.29],
  Austria: [47.52, 14.55],
  Serbia: [44.02, 21.01],
  'Bosnia and Herzegovina': [43.92, 17.68],
  'Northern Ireland': [54.61, -5.93],
  Chile: [-35.68, -71.54],
  Colombia: [4.57, -74.30],
  Tennessee: [35.52, -86.58],
};

// eslint-disable-next-line import/prefer-default-export
export function getEventCoordinates(shortLocation, country) {
  if (shortLocation && LOCATION_COORDS[shortLocation]) {
    return LOCATION_COORDS[shortLocation];
  }
  if (country && COUNTRY_COORDS[country]) {
    return COUNTRY_COORDS[country];
  }
  return null;
}
