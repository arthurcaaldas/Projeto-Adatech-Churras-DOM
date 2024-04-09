const APP = () => {
  init();
}

const init = () => {  
  const savedName = localStorage.getItem('name');
  const savedEmail = localStorage.getItem('email');
  const savedCep = localStorage.getItem('cep');

  if (savedName && savedEmail && savedCep) {
    document.getElementById('name').value = savedName;
    document.getElementById('email').value = savedEmail;
    document.getElementById('cep').value = savedCep;
    document.getElementById('consent').checked = true;
  }
  
  const inputs = Array.from(document.getElementsByClassName('validate'));
  const buttons = Array.from(document.getElementsByClassName('change-step'));

  for (let index = 0; index < inputs.length; index++) {
    const element = inputs[index];
    validate(element)

    element.addEventListener(element.type === 'checkbox' ? 'change' : 'keyup', () => validate(element));
  }
  
  for (let index = 0; index < buttons.length; index++) {
    const element = buttons[index];
    const { step } = element.dataset;
    const steps = {
      [1]: goToStep1,
      [2]: validateStep1,
      [3]: validateStep2,
    }

    element.addEventListener('click', async () => steps[step]());
  }
}

const getRules = () => {
  return new Promise((resolve, reject) => {
    fetch('./rules.json')
    .then((response) => resolve(response.json()))
    .catch(err => reject(err))
  });
}

const validate = (element) => {
  if (element.type === 'text') {
    element.style = !element.value
      ? 'border-color: red'
      : 'border-color: green';
    return;
  }

  if (element.type == 'email') {
    element.style = (!element.value || (element.value && !element.checkValidity()))
      ? 'border-color: red'
      : 'border-color: green';
    return;
  }

  if (element.type === 'checkbox') {
    element.style = !element.checked
      ? 'outline-color: red'
      : 'outline-color: green';
    return;
  }
}

const validateStep1 = () => {
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const cep = document.getElementById('cep');
  const consent = document.getElementById('consent');
  
  if (!name.value || !email.checkValidity() || cep.value.length != 8 || !consent.checked) {
    return;
  }
  
  name.classList.remove('invalid');
  email.classList.remove('invalid');
  cep.classList.remove('invalid');
  
  localStorage.setItem('name', name.value);
  localStorage.setItem('email', email.value);
  localStorage.setItem('cep', cep.value);
  
  goToStep2();
}

const validateStep2 = () => {
  const men = parseInt(document.getElementById('men').value) || 0;
  const women = parseInt(document.getElementById('women').value) || 0;
  const adults = men + women;
  
  if (adults <= 0) {
    alert('Deve ter ao menos um adulto.');
    return;
  }
  
  goToStep3();
}

const calculate = async () => {
  const rules = await getRules();

  const men = parseInt(document.getElementById('men').value);
  const women = parseInt(document.getElementById('women').value);
  const children = parseInt(document.getElementById('children').value);
  const drinkers = parseInt(document.getElementById('drinkers').value);
  
  const totalPeople = men + women + children;
  const totalDrinkers = drinkers;
  
  const resultItems = document.getElementById('resultItems');
  resultItems.innerHTML = `
    <div>  
      <h3>Carne</h3>
      <p>${((men * rules.meat.men) + (women * rules.meat.women) + (children * rules.meat.children)).toFixed(2)} KG</p>
    </div>
    
    <div>
      <h3>Pão de Alho</h3>
      <p>${((men * rules.bread.men) + (women * rules.bread.women) + (children * rules.bread.children))}</p>
    </div>
    
    <div>
      <h3>Carvão</h3>
      <p>${((men * rules.charcoal.men) + (women * rules.charcoal.women) + (children * rules.charcoal.children))} KG</p>
    </div>
    
    <div>
      <h3>Sal</h3>
      <p>${(totalPeople + totalDrinkers) * 0.04} KG</p>
    </div>
    
    <div>
      <h3>Gelo</h3>
      <p>${(totalPeople / 10) * 5} KG</p>
    </div>
    
    <div>
      <h3>Refrigerante</h3>
      <p>${Math.ceil((totalPeople) / 5)} garrafas de 2L</p>
    </div>
    
    <div>
      <h3>Água</h3>
      <p>${Math.ceil((totalPeople) / 5)} garrafas de 1L</p>
    </div>
    
    <div>
      <h3>Cerveja</h3>
      <p>${totalDrinkers * 3} garrafas de 600ml</p>
    </div>
  `;
}

const goToStep1 = () => {
  document.getElementById('step1').classList.add('show');
  document.getElementById('step2').classList.remove('show');
  document.getElementById('result').classList.remove('show');
}

const goToStep2 = () => {
  document.getElementById('step1').classList.remove('show');
  document.getElementById('step2').classList.add('show');
  document.getElementById('result').classList.remove('show');
}

const goToStep3 = () => {
  document.getElementById('step1').classList.remove('show');
  document.getElementById('step2').classList.remove('show');
  document.getElementById('result').classList.add('show');
  calculate();
}

APP();