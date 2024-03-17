const cards = Array.from(document.querySelectorAll('.card'));

const setPriceShadow = () => {
  cards.forEach((card, index) => {
    const price = card.querySelector('.card__price').textContent.trim();
    const priceElement = card.querySelector('.card__price');

    // Создаем уникальный класс для каждой цены
    const uniqueClass = `price-shadow-${index + 1}`;

    const style = `
      .${uniqueClass}::before {
        content: "${price}";
        position: absolute;
        bottom: 43px;
        left: 18px;
        font-weight: 700;
        font-size: 80px;
        color: #e8e8e8;
        pointer-events: none;
        z-index: -1;
      }
    `;

    // Добавляем класс к элементу с ценой
    priceElement.classList.add(uniqueClass);

    const styleElement = document.createElement('style');
    styleElement.textContent = style;

    document.head.appendChild(styleElement);
  });
};

export { setPriceShadow };
