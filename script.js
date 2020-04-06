const TEXTAREA = document.createElement('textarea');
const KEYBOARD = document.createElement('div');
const INFO = document.createElement('p');
const KEYS_NUMBER = 64;
const BUTTONS = [
  {
    code: 'Backquote', en: '`', en_shift: '~', ru: 'ё', ru_shift: 'Ё', class: 'changeable',
  },
  {
    code: 'Digit1', en: '1', en_shift: '!', ru: '1', ru_shift: '!', class: 'changeable',
  },
  {
    code: 'Digit2', en: '2', en_shift: '@', ru: '2', ru_shift: '"', class: 'changeable',
  },
  {
    code: 'Digit3', en: '3', en_shift: '#', ru: '3', ru_shift: '№', class: 'changeable',
  },
  {
    code: 'Digit4', en: '4', en_shift: '$', ru: '4', ru_shift: ';', class: 'changeable',
  },
  {
    code: 'Digit5', en: '5', en_shift: '%', ru: '5', ru_shift: '%', class: 'changeable',
  },
  {
    code: 'Digit6', en: '6', en_shift: '^', ru: '6', ru_shift: ':', class: 'changeable',
  },
  {
    code: 'Digit7', en: '7', en_shift: '&', ru: '7', ru_shift: '?', class: 'changeable',
  },
  {
    code: 'Digit8', en: '8', en_shift: '*', ru: '8', ru_shift: '*', class: 'changeable',
  },
  {
    code: 'Digit9', en: '9', en_shift: '(', ru: '9', ru_shift: '(', class: 'changeable',
  },
  {
    code: 'Digit0', en: '0', en_shift: ')', ru: '0', ru_shift: ')', class: 'changeable',
  },
  {
    code: 'Minus', en: '-', en_shift: '_', ru: '-', ru_shift: '_', class: 'changeable',
  },
  {
    code: 'Equal', en: '=', en_shift: '+', ru: '=', ru_shift: '+', class: 'changeable',
  },
  {
    code: 'Backspace', en: 'Backspace', ru: 'Backspace', class: 'backspace',
  },
  { code: 'Tab', en: 'Tab', ru: 'Tab' },
  {
    code: 'KeyQ', en: 'q', en_shift: 'Q', ru: 'й', ru_shift: 'Й', class: 'changeable',
  },
  {
    code: 'KeyW', en: 'w', en_shift: 'W', ru: 'ц', ru_shift: 'Ц', class: 'changeable',
  },
  {
    code: 'KeyE', en: 'e', en_shift: 'E', ru: 'у', ru_shift: 'У', class: 'changeable',
  },
  {
    code: 'KeyR', en: 'r', en_shift: 'R', ru: 'к', ru_shift: 'К', class: 'changeable',
  },
  {
    code: 'KeyT', en: 't', en_shift: 'T', ru: 'е', ru_shift: 'Е', class: 'changeable',
  },
  {
    code: 'KeyY', en: 'y', en_shift: 'Y', ru: 'н', ru_shift: 'Н', class: 'changeable',
  },
  {
    code: 'KeyU', en: 'u', en_shift: 'U', ru: 'г', ru_shift: 'Г', class: 'changeable',
  },
  {
    code: 'KeyI', en: 'i', en_shift: 'I', ru: 'ш', ru_shift: 'Ш', class: 'changeable',
  },
  {
    code: 'KeyO', en: 'o', en_shift: 'O', ru: 'щ', ru_shift: 'Щ', class: 'changeable',
  },
  {
    code: 'KeyP', en: 'p', en_shift: 'P', ru: 'з', ru_shift: 'З', class: 'changeable',
  },
  {
    code: 'BracketLeft', en: '[', en_shift: '{', ru: 'х', ru_shift: 'Х', class: 'changeable',
  },
  {
    code: 'BracketRight', en: ']', en_shift: '}', ru: 'ъ', ru_shift: 'Ъ', class: 'changeable',
  },
  {
    code: 'Backslash', en: '\\', en_shift: '|', ru: '\\', ru_shift: '/', class: 'changeable',
  },
  { code: 'Delete', en: 'Del', ru: 'Del' },
  {
    code: 'CapsLock', en: 'Caps Lock', ru: 'Caps Lock', class: 'capslock',
  },
  {
    code: 'KeyA', en: 'a', en_shift: 'A', ru: 'ф', ru_shift: 'Ф', class: 'changeable',
  },
  {
    code: 'KeyS', en: 's', en_shift: 'S', ru: 'ы', ru_shift: 'Ы', class: 'changeable',
  },
  {
    code: 'KeyD', en: 'd', en_shift: 'D', ru: 'в', ru_shift: 'В', class: 'changeable',
  },
  {
    code: 'KeyF', en: 'f', en_shift: 'F', ru: 'а', ru_shift: 'А', class: 'changeable',
  },
  {
    code: 'KeyG', en: 'g', en_shift: 'G', ru: 'п', ru_shift: 'П', class: 'changeable',
  },
  {
    code: 'KeyH', en: 'h', en_shift: 'H', ru: 'р', ru_shift: 'Р', class: 'changeable',
  },
  {
    code: 'KeyJ', en: 'j', en_shift: 'J', ru: 'о', ru_shift: 'О', class: 'changeable',
  },
  {
    code: 'KeyK', en: 'k', en_shift: 'K', ru: 'л', ru_shift: 'Л', class: 'changeable',
  },
  {
    code: 'KeyL', en: 'l', en_shift: 'L', ru: 'д', ru_shift: 'Д', class: 'changeable',
  },
  {
    code: 'Semicolon', en: ';', en_shift: ':', ru: 'ж', ru_shift: 'Ж', class: 'changeable',
  },
  {
    code: 'Quote', en: '\'', en_shift: '"', ru: 'э', ru_shift: 'Э', class: 'changeable',
  },
  {
    code: 'Enter', en: 'Enter', ru: 'Enter', class: 'enter',
  },
  {
    code: 'ShiftLeft', en: 'Shift', ru: 'Shift', class: 'shift',
  },
  {
    code: 'KeyZ', en: 'z', en_shift: 'Z', ru: 'я', ru_shift: 'Я', class: 'changeable',
  },
  {
    code: 'KeyX', en: 'x', en_shift: 'X', ru: 'ч', ru_shift: 'Ч', class: 'changeable',
  },
  {
    code: 'KeyC', en: 'c', en_shift: 'C', ru: 'с', ru_shift: 'С', class: 'changeable',
  },
  {
    code: 'KeyV', en: 'v', en_shift: 'V', ru: 'м', ru_shift: 'М', class: 'changeable',
  },
  {
    code: 'KeyB', en: 'b', en_shift: 'B', ru: 'и', ru_shift: 'И', class: 'changeable',
  },
  {
    code: 'KeyN', en: 'n', en_shift: 'N', ru: 'т', ru_shift: 'Т', class: 'changeable',
  },
  {
    code: 'KeyM', en: 'm', en_shift: 'M', ru: 'ь', ru_shift: 'Ь', class: 'changeable',
  },
  {
    code: 'Comma', en: ',', en_shift: '<', ru: 'б', ru_shift: 'Б', class: 'changeable',
  },
  {
    code: 'Period', en: '.', en_shift: '>', ru: 'ю', ru_shift: 'Ю', class: 'changeable',
  },
  {
    code: 'Slash', en: '/', en_shift: '?', ru: '.', ru_shift: ',', class: 'changeable',
  },
  { code: 'ArrowUp', en: '▲', ru: '▲' },
  {
    code: 'ShiftRight', en: 'Shift', ru: 'Shift', class: 'shift',
  },
  { code: 'ControlLeft', en: 'Ctrl', ru: 'Ctrl' },
  { code: 'MetaLeft', en: '', ru: '' },
  { code: 'AltLeft', en: 'Alt', ru: 'Alt' },
  {
    code: 'Space', en: ' ', ru: ' ', class: 'space',
  },
  { code: 'AltRight', en: 'Alt', ru: 'Alt' },
  { code: 'ArrowLeft', en: '◄', ru: '◄' },
  { code: 'ArrowDown', en: '▼', ru: '▼' },
  { code: 'ArrowRight', en: '►', ru: '►' },
  { code: 'ControlRight', en: 'Ctrl', ru: 'Ctrl' },
];

document.body.append(TEXTAREA);
TEXTAREA.classList.add('textarea');
TEXTAREA.autofocus = true;

document.body.append(KEYBOARD);
KEYBOARD.classList.add('keyboard');

document.body.append(INFO);
INFO.innerHTML = 'Смена языка ввода - Ctrl + Alt<br />Сделано в ОС Ubuntu';

if (!localStorage.lang) localStorage.setItem('lang', 'en');

for (let i = 0; i < KEYS_NUMBER; i += 1) {
  const key = document.createElement('span');
  KEYBOARD.append(key);
  key.classList.add('key');
  key.id = BUTTONS[i].code;
  key.textContent = BUTTONS[i][localStorage.lang];
  if (BUTTONS[i].class) {
    key.classList.add(BUTTONS[i].class);
  }
}

function fillButtons() {
  const keys = document.querySelectorAll('.key');
  for (let i = 0; i < keys.length; i += 1) {
    if (document.querySelector('.capslock.on') && keys[i].classList.contains('changeable')) keys[i].textContent = BUTTONS[i][localStorage.lang].toUpperCase();
    else keys[i].textContent = BUTTONS[i][localStorage.lang];
  }
}

function changeLanguage(e) {
  if ((document.querySelector('#AltLeft').classList.contains('active') && document.querySelector('#ControlLeft').classList.contains('active'))
        || e.id === 'MetaLeft') {
    if (localStorage.lang === 'ru') localStorage.lang = 'en';
    else localStorage.lang = 'ru';
    fillButtons();
  }
}

function printSymbol(e, mouseClick) {
  TEXTAREA.setRangeText(e.textContent, TEXTAREA.selectionStart, TEXTAREA.selectionEnd, 'end');
  if (document.querySelector('.shift.on') && mouseClick) {
    document.querySelectorAll('.shift.on').forEach((el) => el.classList.remove('on'));
    fillButtons();
  }
}

function backspacePressHandler() {
  if (TEXTAREA.selectionStart === TEXTAREA.selectionEnd) TEXTAREA.setRangeText('', TEXTAREA.selectionStart - 1, TEXTAREA.selectionStart, 'end');
  else TEXTAREA.setRangeText('', TEXTAREA.selectionStart, TEXTAREA.selectionEnd, 'end');
}

function tabPressHandler() {
  TEXTAREA.setRangeText('\t', TEXTAREA.selectionStart, TEXTAREA.selectionEnd, 'end');
}

function deletePressHandler() {
  if (TEXTAREA.selectionStart === TEXTAREA.selectionEnd) TEXTAREA.setRangeText('', TEXTAREA.selectionStart, TEXTAREA.selectionStart + 1, 'end');
  else TEXTAREA.setRangeText('', TEXTAREA.selectionStart, TEXTAREA.selectionEnd, 'end');
}

function enterPressHandler() {
  TEXTAREA.setRangeText('\n', TEXTAREA.selectionStart, TEXTAREA.selectionEnd, 'end');
}

function capslockPressHandler(e) {
  e.classList.toggle('on');
  const keys = document.querySelectorAll('.changeable');
  for (let i = 0; i < keys.length; i += 1) {
    if (e.classList.contains('on')) keys[i].textContent = keys[i].textContent.toUpperCase();
    else {
      if (document.querySelector('.shift.on')) document.querySelector('.shift.on').classList.remove('on');
      keys[i].textContent = keys[i].textContent.toLowerCase();
    }
  }
}

function shiftPressHandler(e, mouseClick) {
  if (mouseClick) document.querySelectorAll('.shift').forEach((el) => el.classList.toggle('on'));
  else e.classList.toggle('on');
  const keys = document.querySelectorAll('.key');
  for (let i = 0; i < keys.length; i += 1) {
    const prop = `${localStorage.lang}_shift`;
    if (BUTTONS[i][prop]) keys[i].textContent = BUTTONS[i][prop];
    if (document.querySelector('.capslock.on') && keys[i].classList.contains('changeable')) keys[i].textContent = keys[i].textContent.toLowerCase();
  }
}

function moveCursor(e) {
  if (e.id === 'ArrowLeft' || e.id === 'ArrowUp') {
    TEXTAREA.selectionStart -= 1;
    TEXTAREA.selectionEnd = TEXTAREA.selectionStart;
  } else {
    TEXTAREA.selectionStart += 1;
    TEXTAREA.selectionEnd = TEXTAREA.selectionStart;
  }
}

function pressButtonHandler(e, mouseClick = false) {
  if (!e.classList.contains('key')) {
    return;
  }

  e.classList.add('active');

  switch (e.id) {
    case 'Backspace':
      backspacePressHandler();
      break;
    case 'Tab':
      tabPressHandler();
      break;
    case 'Delete':
      deletePressHandler();
      break;
    case 'CapsLock':
      capslockPressHandler(e);
      break;
    case 'Enter':
      enterPressHandler();
      break;
    case 'ShiftLeft':
    case 'ShiftRight':
      shiftPressHandler(e, mouseClick);
      break;
    case 'ArrowUp':
    case 'ArrowDown':
    case 'ArrowLeft':
    case 'ArrowRight':
      moveCursor(e);
      break;
    case 'AltLeft':
    case 'AltRight':
    case 'ControlLeft':
    case 'ControlRight':
    case 'MetaLeft':
      changeLanguage(e);
      break;
    default:
      printSymbol(e, mouseClick);
      break;
  }
}

function mouseUpOutHandler(e) {
  if (!e.target.classList.contains('key')) {
    return;
  }

  e.target.classList.remove('active');

  if (e.target.classList.contains('shift') && !e.target.classList.contains('on')) fillButtons();

  TEXTAREA.focus();
}

KEYBOARD.addEventListener('mousedown', (e) => pressButtonHandler(e.target, true));
KEYBOARD.addEventListener('mouseup', mouseUpOutHandler);
KEYBOARD.addEventListener('mouseout', mouseUpOutHandler);

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  pressButtonHandler(document.querySelector(`[id="${e.code}"]`));
});
document.addEventListener('keyup', (event) => {
  const currentElement = document.querySelector(`[id="${event.code}"]`);
  currentElement.classList.remove('active');
  if (currentElement.classList.contains('shift')) {
    fillButtons();
    currentElement.classList.remove('on');
  }
});
