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
  console.log(carData);
  console.table(carData);
}

/* Live Issues */
function liveIssues() {
  const myCar = { name: "Porsche 928 S4" };
  console.log(myCar);
  myCar.name = "Volvo XC40 Inscription Pro";
  console.log(myCar);
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
const apiEndpoint = 'https://jsonplaceholder.typicode.com/';

async function fetchData(entity) {
  try {
    let data = await fetch(`${apiEndpoint}${entity}`);
    return await data.json();
  } catch (error) {
    console.error(error);
  }
}

async function displayDataInstrumented() {
  console.time("fetchData");
  const data = await fetchData('posts');
  console.timeLog("fetchData");
  console.table(data);
  console.timeEnd("fetchData");
}

async function aSlowishFunction() {
  console.time('Time');
  for (let i=0; i<1000000000; i++) {
    if (i % 100000000 === 0) {
      console.timeLog('Time');
    }
  };
  await displayDataInstrumented();
  console.timeEnd("Time");
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

/* Totally frivolous CSS styling in console.log() */
/* Doesn't work in Safari but who cares? */
function styleMeOut() {
  const exclamation = 'background-color:white;color:red;font-family:system-ui;font-size:4rem;font-weight:bold';
  const funkyText = 'background-color:magenta;color:yellow;border:1px solid black';
  const altError = 'background-color:white;color:red;font-weight:bold';
  const comment = 'color:greenlfont-weight:bold;font-size:2rem';
  console.clear();
  console.log('%c OMG!',exclamation);
  console.log('%c What witchcraft is this?', funkyText);
  console.log('%c Custom styling for errors?', altError);
  console.log('%c Just how far could we take this?',comment);
};

const svg = `
<svg width="200" height="200" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" 
  xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
  viewBox="0 0 50 55" style="enable-background:new 0 0 50 50;" xml:space="preserve">
<style type="text/css">
  .st0{fill:#FDDA3E;}
  .st1{fill:#FFFFFF;}
  .bounce{
    transform-origin: center center;
    animation-name: bounce;
    animation-duration: 720ms;
    animation-timing-function: cubic-bezier(.25,.72,.15,1.17);
    animation-iteration-count: infinite;
  }
  @keyframes bounce {
    0%, 50%, 100% {
      transform:
        rotate3d(0, 0, 0, 0deg)
        translate3d(0, 5px, 0);
    }
    20% {
      transform:
        rotate3d(0, 0, 1, 4deg)
        translate3d(0, 0, 0);
    }
    70% {
      transform:
        rotate3d(0, 0, 1, -4deg)
        translate3d(0, 0, 0);
    }
  }
</style>
<g class="bounce">
  <circle class="st0" cx="25" cy="25" r="25"/>
  <polygon points="44.5,21 3.9,21 3.9,24.3 5.7,24.3 5.7,25.9 7.1,25.9 7.1,27.4 8.8,27.4 8.8,29 20.2,29 20.2,27.4 21.8,27.4
        21.8,25.9 23.4,25.9 23.4,24.3 26.7,24.3 26.7,25.9 28.2,25.9 28.2,27.4 29.8,27.4 29.8,29 41.2,29 41.2,27.4 42.8,27.4
        42.8,25.9 44.5,25.9 44.5,24.3 44.5,24.2 46.1,24.2 46.1,22.6 46.1,21"/>
  <rect x="7.1" y="22.5" class="st1" width="1.6" height="1.6"/>
  <rect x="10.5" y="22.5" class="st1" width="1.6" height="1.6"/>
  <rect x="8.8" y="24.2" class="st1" width="1.6" height="1.6"/>
  <rect x="12.1" y="24.2" class="st1" width="1.6" height="1.6"/>
  <rect x="10.5" y="25.8" class="st1" width="1.6" height="1.6"/>
  <rect x="13.8" y="25.8" class="st1" width="1.6" height="1.6"/>
  <rect x="28.2" y="22.5" class="st1" width="1.6" height="1.6"/>
  <rect x="31.5" y="22.5" class="st1" width="1.6" height="1.6"/>
  <rect x="29.8" y="24.2" class="st1" width="1.6" height="1.6"/>
  <rect x="33.1" y="24.2" class="st1" width="1.6" height="1.6"/>
  <rect x="31.5" y="25.8" class="st1" width="1.6" height="1.6"/>
  <rect x="34.8" y="25.8" class="st1" width="1.6" height="1.6"/>
</g>
</svg>
`

function wtf() {
  const svgDataUrl = `data:image/svg+xml;base64,${btoa(svg)}`
  console.log('%c ', `
    background-image: url(${ svgDataUrl });
    padding-bottom: 100px;
    padding-left: 100px;
    margin: 20px;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
`);
};