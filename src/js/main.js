tippy.setDefaults({
  theme: 'light',
  arrow: true,
  placement: 'right',
  distance: 30,
  animation: 'scale',
  interactive: true,
});

const elems = [
  'casts',
  'filtrum',
  'jq',
  'petshop',
  'casino-slots',
  'docket',
  'caring-service',
  'dr-qi',
];

elems.forEach((el) => {
  tippy(`#${el}`, {
    content: document.querySelector(`.${el}`).innerHTML,
  });
});
