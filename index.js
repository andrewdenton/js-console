const carData = [
  {
    manufacturer: 'Porsche',
    model: '928 S4',
    engineSize: 5.0,
    configuration: 'V8'
  },
  {
    manufacturer: 'Porsche',
    model: '911',
    engineSize: 3.4,
    configuration: 'Flat 6'
  },
  {
    manufacturer: 'Aston Martin',
    model: 'DB9',
    engineSize: 5.9,
    configuration: 'V12'
  },
  {
    manufacturer: 'Lamborghini',
    model: 'Diablo',
    engineSize: 6.0,
    configuration: 'V12'
  },
  {
    manufacturer: 'Ferrari',
    model: '355',
    engineSize: 3.5,
    configuration: 'V8'
  }
];


/* Console.Table demo */
async function displayData() {
  console.table(carData);
}

/* Live Issues */
function liveIssues() {
  const myCar = { name: "Porsche 928 S4" };
  console.log(myCar);
  myCar.name = "Volvo XC40 Inscription Pro";
}

function logActualValue(obj) {
  console.log(JSON.parse(JSON.stringify(obj)));
}

function liveIssuesFix() {
  const myCar = { name: "Porsche 928 S4" };
  logActualValue(myCar);
  myCar.name = "Volvo XC40 Inscription Pro"; 
  logActualValue(myCar);
}

/* console.group demo */
function groupFunction1() {
  console.group("testFunction1");
  console.log('This is a call from Function1');
  console.log('And this is another');
  console.groupEnd();
}

function groupFunction2() {
  console.groupCollapsed("testFunction2");
  console.log('This is a call from Function2');
  console.log('And this is another');
  console.groupEnd();
}

function groupDemo() {
  console.group('groupDemo');
  groupFunction1();
  groupFunction2();
  console.groupEnd();
}

/* console.time demo */
function aSlowishFunction() {
  console.time('Time');
  for (let i=0; i<1000000000; i++) {
    if (i % 100000000 === 0) {
      console.timeLog('Time');
    }
  };
  console.timeEnd("Time");
}

async function displayDataInstrumented() {
  console.time("fetchData");
  const data = await fetchData('posts');
  console.timeLog("fetchData");
  console.table(data);
  console.timeEnd("fetchData");
}


/* console.trace Demo */
function subRoutine2() {
  console.log('I am sub 2');
  console.trace();
}

function subRoutine1() {
  console.log('I am sub 1');
  subRoutine2();
}

function reTracingOurSteps() {
  subRoutine1();
}

/* Console.assert Demo*/
function beMoreAssertive() {
  const car = 911;
  console.assert(car === 928, "Oh no! You've chosen the wrong Porsche! ;)");
}