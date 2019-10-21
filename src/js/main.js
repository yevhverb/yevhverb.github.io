tippy.setDefaults({
   theme: 'light',
   arrow: true,
   placement: 'right',
   distance: 30,
   animation: 'scale',
   interactive: true,
});

const elems = ['casino-slots', 'docket', 'notes', 'cvstore', 'caring-service', 'dr-qi', 'escape'];

elems.forEach(el => {
   tippy(`#${el}`, {
      content: document.querySelector(`.${el}`).innerHTML
   });
});
