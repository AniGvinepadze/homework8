// const elements = [
//     { showmore: '.show-more', arrow: '.img-one', line: '.line-one' },
//     { showmore: '.show-more-two', arrow: '.img-two', line: '.line-two' },
//     { showmore: '.show-more-three', arrow: '.img-three', line: '.line-three' },
//     { showmore: '.show-more-four', arrow: '.img-four', line: '.line-four' },
//     { showmore: '.show-more-five', arrow: '.img-five', line: '.line-five' },
//   ];
  


// elements.forEach((element) => {
//     const showmore = element.showmore;
//     const arrow = element.arrow;
//     const line = element.line;
  
//     const showmoreElement = document.querySelector(showmore);
//     const arrowElement = document.querySelector(arrow);
//     const lineElement = document.querySelector(line);
  
//     lineElement.addEventListener('click', function () {
//       if (showmoreElement.style.display === 'none' || showmoreElement.style.display === '') {
//         showmoreElement.style.display = 'flex';
//         arrowElement.style.transform = 'rotate(180deg)';
//         lineElement.style.fontWeight = 'bold';
//       } else {
//         showmoreElement.style.display = 'none';
//         arrowElement.style.transform = 'rotate(0deg)';
//         lineElement.style.fontWeight = 'normal';
//       }
//     });
//   });


const elements = [
    { added: '.show-more', arrow: '.img-one', line: '.line-one' },
    { added: '.show-more-two', arrow: '.img-two', line: '.line-two' },
    { added: '.show-more-three', arrow: '.img-three', line: '.line-three' },
    { added: '.show-more-four', arrow: '.img-four', line: '.line-four' },
    { added: '.show-more-five', arrow: '.img-five', line: '.line-five' },
  ];
  
 

elements.forEach(({ added, arrow, line }) => {
    const addedElement = document.querySelector(added);
    const arrowElement = document.querySelector(arrow);
    const lineElement = document.querySelector(line);


  
    lineElement.addEventListener("click", function () {
      if (addedElement.style.display === 'none' || addedElement.style.display === '') {
        addedElement.style.display = 'flex';
        arrowElement.style.transform = 'rotate(180deg)';
        lineElement.style.fontWeight = 'bold';
      }else {
          addedElement.style.display = 'none';
          arrowElement.style.transform = 'rotate(0deg)';
          lineElement.style.fontWeight = 'normal';
        }
});
})


