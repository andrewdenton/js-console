
const apiEndpoint = 'https://jsonplaceholder.typicode.com/';

async function fetchData(entity) {
  try {
    let data = await fetch(`${apiEndpoint}${entity}`);
    return await data.json();
  } catch (error) {
    console.error(error);
  }
}


/* Console.Table demo */
async function displayData() {
  const data = await fetchData('posts');
  console.table(data);
}

/* *** Live Issues *** */
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

function aSlowishFunction() {
  console.time('Time');
  for (let i=0; i<10000000000; i++) {
    if (i % 1000000000 === 0) {
      console.timeLog('Time');
    }
  };
}

async function displayDataInstrumented() {
  console.time("fetchData");
  const data = await fetchData('posts');
  console.timeLog("fetchData");
  console.table(data);
  console.timeEnd("fetchData");
}


/* Console.Trace Demo */
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