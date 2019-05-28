const mockData = [
{
    "balance": "$1,260.28",
    "registered": "2019-03-29T07:31:14 -03:00",
    "name": "Johns Wagner"
},
{
    "balance": "$519.31",
    "registered": "2019-05-01T06:10:48 -03:00",
    "name": "Gutierrez Sherman"
},
{
    "balance": "$2,192.08",
    "registered": "2019-01-02T10:34:03 -03:00",
    "name": "Kirsten Keith"
},
{
    "balance": "$1,990.50",
    "registered": "2019-03-30T12:29:39 -03:00",
    "name": "Adela Richmond"
},
{
    "balance": "$1,117.42",
    "registered": "2019-01-18T08:01:00 -03:00",
    "name": "Erica Hendrix"
},
{
    "balance": "$277.84",
    "registered": "2019-02-17T07:12:10 -03:00",
    "name": "Hahn Dennis"
},
{
    "balance": "$721.04",
    "registered": "2019-04-30T02:35:19 -03:00",
    "name": "Helga Pickett"
},
{
    "balance": "$1,061.05",
    "registered": "2019-04-04T11:37:22 -03:00",
    "name": "Silva Zamora"
},
{
    "balance": "$880.97",
    "registered": "2019-03-07T06:45:36 -03:00",
    "name": "Susana Ramsey"
},
{
    "balance": "$3,806.94",
    "registered": "2019-04-15T01:04:46 -03:00",
    "name": "Wilkinson Francis"
},
{
    "balance": "$3,378.09",
    "registered": "2019-03-23T05:59:57 -03:00",
    "name": "Roxanne Holcomb"
},
{
    "balance": "$2,445.45",
    "registered": "2019-03-23T07:59:41 -03:00",
    "name": "Vance Morse"
},
{
    "balance": "$782.86",
    "registered": "2019-04-26T09:49:37 -03:00",
    "name": "Tammy Kidd"
},
{
    "balance": "$782.99",
    "registered": "2019-04-22T12:58:56 -03:00",
    "name": "Rosalie Rose"
},
{
    "balance": "$3,065.93",
    "registered": "2019-04-22T06:26:32 -03:00",
    "name": "Kristin Glenn"
},
{
    "balance": "$1,862.96",
    "registered": "2019-03-31T01:38:08 -03:00",
    "name": "Hendrix Russell"
},
{
    "balance": "$546.84",
    "registered": "2019-02-05T01:51:46 -03:00",
    "name": "Maxine Parks"
},
{
    "balance": "$2,233.08",
    "registered": "2019-04-17T01:57:48 -03:00",
    "name": "Dyer Payne"
},
{
    "balance": "$3,621.56",
    "registered": "2019-04-24T08:17:54 -03:00",
    "name": "Guy Sawyer"
},
{
    "balance": "$2,397.23",
    "registered": "2019-05-17T03:33:15 -03:00",
    "name": "Petersen Chaney"
},
{
    "balance": "$536.35",
    "registered": "2019-04-25T07:31:02 -03:00",
    "name": "Charlene Patel"
},
{
    "balance": "$3,144.35",
    "registered": "2019-02-21T05:18:00 -03:00",
    "name": "Hyde Day"
},
{
    "balance": "$3,341.19",
    "registered": "2019-01-10T08:28:02 -03:00",
    "name": "Lyons Solomon"
},
{
    "balance": "$3,113.61",
    "registered": "2019-02-11T12:18:23 -03:00",
    "name": "Carmella Harris"
},
{
    "balance": "$1,346.52",
    "registered": "2019-03-29T09:19:05 -03:00",
    "name": "Bernadine Bowen"
},
{
    "balance": "$2,430.14",
    "registered": "2019-03-12T01:08:02 -03:00",
    "name": "Callie Gilbert"
},
{
    "balance": "$2,601.98",
    "registered": "2019-03-10T12:14:57 -03:00",
    "name": "Tonia Chen"
},
{
    "balance": "$2,691.12",
    "registered": "2019-04-16T11:32:25 -03:00",
    "name": "Hillary Nixon"
},
{
    "balance": "$2,668.69",
    "registered": "2019-02-20T05:59:49 -03:00",
    "name": "Kirkland Cote"
},
{
    "balance": "$387.76",
    "registered": "2019-03-08T03:42:00 -03:00",
    "name": "Wanda Howell"
},
{
    "balance": "$840.68",
    "registered": "2019-03-08T12:05:57 -03:00",
    "name": "Moon Benson"
},
{
    "balance": "$3,225.72",
    "registered": "2019-05-12T07:40:40 -03:00",
    "name": "Mallory Carroll"
},
{
    "balance": "$1,660.91",
    "registered": "2019-01-28T06:04:10 -03:00",
    "name": "Peterson Melendez"
},
{
    "balance": "$574.64",
    "registered": "2019-02-26T03:26:55 -03:00",
    "name": "Barrett Burt"
},
{
    "balance": "$3,763.28",
    "registered": "2019-02-20T05:23:22 -03:00",
    "name": "Tammi Bullock"
},
{
    "balance": "$1,262.49",
    "registered": "2019-04-08T01:28:19 -03:00",
    "name": "Bauer Salas"
},
{
    "balance": "$1,340.93",
    "registered": "2019-05-18T12:25:04 -03:00",
    "name": "Maryanne Jarvis"
},
{
    "balance": "$1,364.87",
    "registered": "2019-01-24T08:45:03 -03:00",
    "name": "Lillie Lynn"
},
{
    "balance": "$3,831.70",
    "registered": "2019-02-14T05:59:14 -03:00",
    "name": "Lola Garza"
},
{
    "balance": "$921.57",
    "registered": "2019-01-14T07:50:14 -03:00",
    "name": "Burgess Roth"
},
{
    "balance": "$568.18",
    "registered": "2019-04-10T01:23:44 -03:00",
    "name": "Jody Hobbs"
},
{
    "balance": "$1,639.41",
    "registered": "2019-01-14T06:52:03 -03:00",
    "name": "June Byrd"
},
{
    "balance": "$638.69",
    "registered": "2019-05-02T04:05:55 -03:00",
    "name": "Josefina Mills"
},
{
    "balance": "$1,680.26",
    "registered": "2019-01-26T07:29:01 -03:00",
    "name": "Armstrong Callahan"
},
{
    "balance": "$3,014.95",
    "registered": "2019-02-24T02:23:23 -03:00",
    "name": "Lilian Gray"
},
{
    "balance": "$1,797.39",
    "registered": "2019-05-16T04:41:28 -03:00",
    "name": "Gordon Benjamin"
},
{
    "balance": "$2,227.30",
    "registered": "2019-05-24T02:01:04 -03:00",
    "name": "Jimenez Roy"
},
{
    "balance": "$2,723.07",
    "registered": "2019-04-22T10:44:35 -03:00",
    "name": "Reid Joyce"
},
{
    "balance": "$526.78",
    "registered": "2019-03-03T09:40:16 -03:00",
    "name": "Olive Mason"
},
{
    "balance": "$3,734.36",
    "registered": "2019-04-04T05:45:26 -03:00",
    "name": "Eaton Tyler"
},
{
    "balance": "$3,378.98",
    "registered": "2019-04-04T07:47:37 -03:00",
    "name": "Carrie Goodwin"
},
{
    "balance": "$3,250.10",
    "registered": "2019-03-05T03:40:31 -03:00",
    "name": "Burt Holloway"
},
{
    "balance": "$3,188.16",
    "registered": "2019-02-07T10:30:02 -03:00",
    "name": "Kate Donaldson"
},
{
    "balance": "$2,648.52",
    "registered": "2019-04-25T02:01:09 -03:00",
    "name": "Cristina Massey"
}
]

export default mockData;










{
    y : 2648.52,
    x: new Date(2019, 4, 25),
    // name: Cristina Massey
  }
  ];
  
  // const data = [
  //   {
  //       y : 126028,
  //       x: new Date(2019, 3, 29),
  //       // name: Johns Wagner
  //   },
  //   {
  //       y : 59.31,
  //       x: new Date(2019, 5, 1),
  //       // name: Gutierrez Sherman
  //   },
  //   {
  //       y : 2192.08,
  //       x: new Date(2019, 1, 2),
  //       // name: Kirsten Keith
  //   },
  //   {
  //       y : 1990.50,
  //       x: new Date(2019, 3, 30),
  //       // name: Adela Richmond
  //   },
  //   {
  //       y : 1117.42,
  //       x: new Date(2019, 1, 18),
  //       // name: Erica Hendrix
  //   },
  //   {
  //       y : 27.84,
  //       x: new Date(2019, 2, 17),
  //       // name: Hahn Dennis
  //   },
  //   {
  //       y : 71.04,
  //       x: new Date(2019, 4, 30),
  //       // name: Helga Pickett
  //   },
  //   {
  //       y : 1061.05,
  //       x: new Date(2019, 4, 4),
  //       // name: Silva Zamora
  //   },
  //   {
  //       y : 80.97,
  //       x: new Date(2019, 3, 7),
  //       // name: Susana Ramsey
  //   },
  //   {
  //       y : 3806.94,
  //       x: new Date(2019, 4, 15),
  //       // name: Wilkinson Francis
  //   },
  //   {
  //       y : 3378.09,
  //       x: new Date(2019, 3, 23),
  //       // name: Roxanne Holcomb
  //   },
  //   {
  //       y : 2445.45,
  //       x: new Date(2019, 3, 23),
  //       // name: Vance Morse
  //   },
  //   {
  //       y : 72.86,
  //       x: new Date(2019, 4, 26),
  //       // name: Tammy Kid
  //   },
  //   {
  //       y : 72.99,
  //       x: new Date(2019, 4, 22),
  //       // name: Rosalie Rose
  //   },
  //   {
  //       y : 3065.93,
  //       x: new Date(2019, 4, 22),
  //       // name: Kristin Glenn
  //   },
  //   {
  //       y : 1862.96,
  //       x: new Date(2019, 3, 31),
  //       // name: Hendrix Russell
  //   },
  //   {
  //       y : 56.84,
  //       x: new Date(2019, 2, 5),
  //       // name: Maxine Parks
  //   },
  //   {
  //       y : 2233.08,
  //       x: new Date(2019, 4, 17),
  //       // name: Dyer Pyne
  // },
  //   {
  //       y : 3621.56,
  //       x: new Date(2019, 4, 24),
  //       // name: Guy Sawer
  // },
  //   {
  //       y : 2397.23,
  //       x: new Date(2019, 5, 17),
  //       // name: Petersen Chaney
  //   },
  //   {
  //       y : 56.35,
  //       x: new Date(2019, 4, 25),
  //       // name: Charlene Patel
  //   },
  //   {
  //       y : 3144.35,
  //       x: new Date(2019, 2, 21),
  //       // name: Hyde Dy
  //   },
  //   {
  //       y : 3341.19,
  //       x: new Date(2019, 1, 10),
  //       // name: Lyons olomon
  //   },
  //   {
  //       y : 3113.61,
  //       x: new Date(2019, 2, 11),
  //       // name: Carmella Harris
  //   },
  //   {
  //       y : 1346.52,
  //       x: new Date(2019, 3, 29),
  //       // name: Bernadine Bowen
  //   },
  //   {
  //       y : 2430.14,
  //       x: new Date(2019, 3, 12),
  //       // name: Callie Gilbert
  //   },
  //   {
  //       y : 2601.98,
  //       x: new Date(2019, 3, 10),
  //       // name: Tonia Chen
  //   },
  //   {
  //       y : 2691.12,
  //       x: new Date(2019, 4, 16),
  //       // name: Hillary Nixn
  //   },
  //   {
  //       y : 2668.69,
  //       x: new Date(2019, 2, 20),
  //       // name: Kirkland Cote
  //   },
  //   {
  //       y : 37.76,
  //       x: new Date(2019, 3, 8),
  //       // name: Wanda Howell
  //   },
  //   {
  //       y : 80.68,
  //       x: new Date(2019, 3, 8),
  //       // name: Moon Benson
  //   },
  //   {
  //       y : 3225.72,
  //       x: new Date(2019, 5, 12),
  //       // name: Mallory Caroll
  //   },
  //   {
  //       y : 1660.91,
  //       x: new Date(2019, 1, 28),
  //       // name: Peterson Melendez
  //   },
  //   {
  //       y : 54.64,
  //       x: new Date(2019, 2, 26),
  //       // name: Barrett Burt
  //   },
  //   {
  //       y : 3763.28,
  //       x: new Date(2019, 2, 20),
  //       // name: Tammi Bullock
  //   },
  //   {
  //       y : 1262.49,
  //       x: new Date(2019, 4, 8),
  //       // name: Bauer Salas
  //   },
  //   {
  //       y : 1340.93,
  //       x: new Date(2019, 5, 18),
  //       // name: MaryanneJarvis
  //   },
  //   {
  //       y : 1364.87,
  //       x: new Date(2019, 1, 24),
  //       // name: Lillie Lynn
  // },
  //   {
  //       y : 3831.70,
  //       x: new Date(2019, 2, 14),
  //       // name: Lola Garza
  //   },
  //   {
  //       y : 91.57,
  //       x: new Date(2019, 1, 14),
  //       // name: Burgess Roth
  //   },
  //   {
  //       y : 58.18,
  //       x: new Date(2019, 4, 10),
  //       // name: Jody Hobs
  //   },
  //   {
  //       y : 1639.41,
  //       x: new Date(2019, 1, 14),
  //       // name: June Byrd
  // },
  //   {
  //       y : 68.69,
  //       x: new Date(2019, 5, 2),
  //       // name: Josefina Mills
  //   },
  //   {
  //       y : 1680.26,
  //       x: new Date(2019, 1, 26),
  //       // name: Armstrong Callahan
  //   },
  //   {
  //       y : 3014.95,
  //       x: new Date(2019, 2, 24),
  //       // name: Lilian Gray
  //   },
  //   {
  //       y : 1797.39,
  //       x: new Date(2019, 5, 16),
  //       // name: Gordon Benjamin
  //   },
  //   {
  //       y : 2227.30,
  //       x: new Date(2019, 5, 24),
  //       // name: Jimenez Roy
  //   },
  //   {
  //       y : 2723.07,
  //       x: new Date(2019, 4, 22),
  //       // name: Reid Joyce
  // },
  //   {
  //       y : 56.78,
  //       x: new Date(2019, 3, 3),
  //       // name: Olive Mason
  //   },
  //   {
  //       y : 3734.36,
  //       x: new Date(2019, 4, 4),
  //       // name: Eaton Tyler
  // },
  //   {
  //       y : 3378.98,
  //       x: new Date(2019, 4, 4),
  //       // name: Carrie Goodwin
  //   },
  //   {
  //       y : 3250.10,
  //       x: new Date(2019, 3, 5),
  //       // name: Burt Holloway
  //   },
  //   {
  //       y : 3188.16,
  //       x: new Date(2019, 2, 7),
  //       // name: Kate Donaldson
  //   },
  //   {
  //       y : 2648.52,
  //       x: new Date(2019, 4, 25),
  //       // name: Cristina Massey
  //   }
  //   ]