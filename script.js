const userInput = document.querySelector('#user-input');
const checkBtn = document.querySelector('#check-btn');
const clearBtn = document.querySelector('#clear-btn');
const resultsDiv = document.querySelector('#results-div');

function telephoneCheck(str) {
  return /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/.test(str);
}

checkBtn.addEventListener('click', () => {
  const phone = userInput.value;

  if (phone === '') {
    alert('Please provide a phone number.');
  } else {
    resultsDiv.innerHTML = `<span>${telephoneCheck(phone) ? 'Valid' : 'Invalid'} US number: ${phone}</span>`
  }
})

clearBtn.addEventListener('click', () => {
  userInput.value = '';
  resultsDiv.innerHTML = '<span></span>';
})
