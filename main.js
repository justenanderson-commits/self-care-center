//variables here// 
var arrayName;
var requestedMessage;
var randomIndex;

var mantras = [
  'Be the little engine that could.',
  'Fake it \'til you make it.',
  'Patience is bitter but its fruit is sweet.',
  'Worrying is like betting against yourself.',
  'Relax and release.',
  'My body is a temple. I keep my temple clean.',
  'Good health is a practice, and I have patience.',
  'I surrender to the flow and have faith in the ultimate good.',
  'I will speak with confidence and self-assurance.',
  'My mind is brilliant. My body is healthy. My spirit is tranquil.'
];

var affirmations = [
  'I have the best sense of humor out of all the voices in my head.',
  'I make people laugh...at me.',
  'Others laugh about my problems.',
  'I can find the humerus in any body.',
  'The voices in my head always think of something funny to say.',
  'I have perfect comedy timing...after the fact.',
  'I will always find a way to have fun...usually.',
  'Every cell in my body is alive and beautiful.',
  'My potential is limitless, and I choose where to spend my energy.',
  'I am conquering my fears and becoming stronger each day.'
];

// query selectors here//
var affirmationButton = document.querySelector('#affirmation-button');
var mantraButton = document.querySelector('#mantra-button');
var receiveMessageButton = document.querySelector('#receive-message-button');
var messageBox = document.querySelector('p');

// event listeners here //
affirmationButton.addEventListener('click', selectAffirmation);
mantraButton.addEventListener('click', selectMantra);
receiveMessageButton.addEventListener('click', returnMessage);

// functions here //
function getRandomIndex(arrayName) {
  randomIndex = Math.floor(Math.random() * arrayName.length);
}

function selectAffirmation() {
  requestedMessage = 'affirmation';
  getRandomIndex(affirmations);
}

function selectMantra() {
  requestedMessage = 'mantra';
  getRandomIndex(mantras);
}

function returnMessage() {
  if (requestedMessage === 'affirmation') {
    messageBox.innerHTML = `<p>${affirmations[randomIndex]}</p>`;
  } else if (requestedMessage === 'mantra') {
    messageBox.innerHTML = `<p>${mantras[randomIndex]}</p>`;
  } else {
    alert('Please select mantra or affirmation.')
  }
 }
