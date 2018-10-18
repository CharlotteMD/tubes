console.log('working');

window.onload = function() {

  const central = [
    'SheBu',
    'HollP',
    'NottH',
    'QueenW',
    'LancG',
    'MarbA',
    'Bond'
    // 'OxCir',
    // 'TotC',
    // 'Holb',
    // 'ChaLane',
    // 'StP',
    // 'Bank',
    // 'LPSt'
  ];

  // const jubilee = [
  //   'Baker',
  //   'Bond',
  //   'GreenP',
  //   'WestM',
  //   'WLoo',
  //   'SWark',
  //   'LB'
  // ];

  // input a tube station arrival and destination
    // when you click the station, you get the index value


  // take index b from a - that's how many stops it is
  // divide the amount of stops by 2
  // add this number of stops to the highest indexed station
  // count in the array which index relates to this new station

  let depart = 'MarbA';
  let arrive = 'SheBu';

  var stationStart = central.indexOf(depart);
  var stationEnd = central.indexOf(arrive);

  console.log(stationStart);
  console.log(stationEnd);

  const distance = stationEnd - stationStart;

  console.log(distance);

  const stops = parseInt(distance/2);

  console.log(stops);

  const meetPoint = stationEnd > stationStart ? stationEnd + stops : stationStart + stops;

  console.log(meetPoint);


  // if stationA > stationB {
  //   const middle = stationA - stationB;
  //   console.log(middle);
  // } else {
  //   const middle =
  // }

  // find the index of depart


};
