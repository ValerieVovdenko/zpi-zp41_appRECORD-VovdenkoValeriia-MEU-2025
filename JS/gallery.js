const images = [
    // 1
    {
      preview: 'https://picsum.photos/seed/1/300/200',
      original: 'https://picsum.photos/seed/1/1024/768',
      description: 'Природний пейзаж 1',
    },
    // 2
    {
      preview: 'https://picsum.photos/seed/2/300/200',
      original: 'https://picsum.photos/seed/2/1024/768',
      description: 'Природний пейзаж 2',
    },
    // 3
    {
      preview: 'https://picsum.photos/seed/3/300/200',
      original: 'https://picsum.photos/seed/3/1024/768',
      description: 'Природний пейзаж 3',
    },
    // 4
    {
      preview: 'https://picsum.photos/seed/4/300/200',
      original: 'https://picsum.photos/seed/4/1024/768',
      description: 'Природний пейзаж 4',
    },
    // 5
    {
      preview: 'https://picsum.photos/seed/5/300/200',
      original: 'https://picsum.photos/seed/5/1024/768',
      description: 'Природний пейзаж 5',
    },
    // 6
    {
      preview: 'https://picsum.photos/seed/6/300/200',
      original: 'https://picsum.photos/seed/6/1024/768',
      description: 'Природний пейзаж 6',
    },
    // 7
    {
      preview: 'https://picsum.photos/seed/7/300/200',
      original: 'https://picsum.photos/seed/7/1024/768',
      description: 'Природний пейзаж 7',
    },
    // 8
    {
      preview: 'https://picsum.photos/seed/8/300/200',
      original: 'https://picsum.photos/seed/8/1024/768',
      description: 'Природний пейзаж 8',
    },
    // 9
    {
      preview: 'https://picsum.photos/seed/9/300/200',
      original: 'https://picsum.photos/seed/9/1024/768',
      description: 'Природний пейзаж 9',
    },
    // 10
    {
      preview: 'https://picsum.photos/seed/10/300/200',
      original: 'https://picsum.photos/seed/10/1024/768',
      description: 'Природний пейзаж 10',
    },
    // 11
    {
      preview: 'https://picsum.photos/seed/11/300/200',
      original: 'https://picsum.photos/seed/11/1024/768',
      description: 'Природний пейзаж 11',
    },
    // 12
    {
      preview: 'https://picsum.photos/seed/12/300/200',
      original: 'https://picsum.photos/seed/12/1024/768',
      description: 'Природний пейзаж 12',
    },
  ];
  
  const gallery = document.getElementById('photoView');
  
  // Створення розмітки
  const markup = images.map(({ preview, original, description }) => `
    <li class="pic-box">
      <img src="${preview}" data-source="${original}" alt="${description}" />
    </li>
  `).join('');
  
  gallery.innerHTML = markup;
  
  // Делегування кліку
  gallery.addEventListener('click', evt => {
    evt.preventDefault();
  
    const clickedImg = evt.target;
  
    if (clickedImg.tagName !== 'IMG') return;
  
    const largeImg = clickedImg.dataset.source;
    const description = clickedImg.alt;
  
    const instance = basicLightbox.create(`
      <img src="${largeImg}" alt="${description}" />
    `);
  
    instance.show();
  });