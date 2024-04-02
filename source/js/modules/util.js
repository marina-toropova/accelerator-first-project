// Tabs

function bindTabs(titleClass, contentClass, activeClass, startTitleClass, startContentClass) {

  const title = document.querySelectorAll(titleClass);
  const content = document.querySelectorAll(contentClass);
  const startTitle = document.querySelector(startTitleClass);
  const startContent = document.querySelector(startContentClass);

  // Обработчик нажатия клавиш на табах
  title.forEach((item, index) => {
    item.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') {
        // Если нажата клавиша влево, выбираем предыдущий таб
        const prevIndex = (index - 1 + title.length) % title.length;
        title[prevIndex].focus();
        event.preventDefault();
      } else if (event.key === 'ArrowRight') {
        // Если нажата клавиша вправо, выбираем следующий таб
        const nextIndex = (index + 1) % title.length;
        title[nextIndex].focus();
        event.preventDefault();
      } else if (event.key === 'Enter' || event.key === ' ') {
        // Если нажата клавиша Enter или пробел, активируем таб
        item.click();
        event.preventDefault();
      }
    });
  });

  // Обработчик кликов на табах
  title.forEach((item) => item.addEventListener('click', () => {
    if (item.classList.contains(activeClass)) {
      return;
    }

    title.forEach((element) => {
      element.classList.remove(activeClass);
    });

    item.classList.add(activeClass);

    content.forEach((element) => {
      element.classList.remove(activeClass);
    });

    const activeContent = document.querySelector(`#${item.dataset.tab}`);
    activeContent.classList.add(activeClass);
  }));

  // При первой загрузке страницы, активны эти табы
  startTitle.classList.add(activeClass);
  startContent.classList.add(activeClass);
}

// Accordion

function playAccordion(buttonClass, startTitleContainer, startButton, activeClass) {
  const buttons = document.querySelectorAll(buttonClass);
  const activeQuestion = document.querySelector(startTitleContainer);
  const openbutton = activeQuestion.querySelector(startButton);

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      const isActive = button.classList.contains(activeClass);

      if (!isActive) {
        button.classList.add(activeClass);
        answer.classList.add(activeClass);
      } else {
        button.classList.remove(activeClass);
        answer.classList.remove(activeClass);
      }
    });

    button.addEventListener('keydown', (key) => {
      if (key === 'Enter' || key === ' ') {
        const answer = button.nextElementSibling;
        const isActive = button.classList.contains(activeClass);

        if (!isActive) {
          button.classList.add(activeClass);
          answer.classList.add(activeClass);
        } else {
          button.classList.remove(activeClass);
          answer.classList.remove(activeClass);
        }
      }
    });
  });

  openbutton.classList.add(activeClass);
  openbutton.nextElementSibling.classList.add(activeClass);
}


export { bindTabs, playAccordion };
