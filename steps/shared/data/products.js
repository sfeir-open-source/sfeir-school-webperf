export default [
  {
    id: '964663',
    name: 'Peluche Axolotl',
    descriptionShort:
      "Découvrez la peluche Axolotl de SFEIR, un adorable compagnon bleu qui incarne à merveille l'esprit innovant et chaleureux de notre entreprise !<br>Ce petit axolotl, véritable mascotte de SFEIR, est conçu pour apporter de la douceur et de la bonne humeur à vos journées, que ce soit au bureau ou à la maison.",
    description: `
    <p>
Découvrez la peluche Axolotl de SFEIR, un adorable compagnon bleu qui incarne à merveille l'esprit innovant et
chaleureux de notre entreprise !<br>Ce petit axolotl, véritable mascotte de SFEIR, est conçu pour apporter de la douceur
et de la bonne humeur à vos journées, que ce soit au bureau ou à la maison.
</p>
<h3>Caractéristiques :</h3>
<ul>
    <li><strong>Douceur irrésistible :</strong> Fabriqué avec des matériaux de qualité supérieure, l'axolotl SFEIR est
        incroyablement moelleux et doux au toucher, idéal pour des câlins réconfortants.</li>
    <li><strong>Design unique :</strong> Avec son sourire bienveillant, ses grands yeux expressifs et ses petites
        nageoires toutes mignonnes, notre mascotte bleue est instantanément reconnaissable. Elle reflète l'originalité
        et l'audace qui font l'ADN de SFEIR.</li>
    <li><strong>Taille idéale :</strong> Compact mais suffisamment grand pour être un compagnon visible et inspirant, il
        est facile à emporter partout ou à exposer fièrement sur votre bureau.</li>
</ul>
    `,
    categories: [],
    sizes: [
      {
        id: '572108',
        name: 'Petite',
        code: 'small',
        availableQuantity: 8,
      },
      {
        id: '572109',
        name: 'Moyenne',
        code: 'mid',
        availableQuantity: 98,
      },
      {
        id: '572110',
        name: 'Grande',
        code: 'big',
        availableQuantity: 0,
      },
    ],
    images: [
      {
        source: '/images/product/964663/1.jpg',
        name: 'Visuel de la peluche',
      },
      {
        source: '/images/product/964663/2.jpg',
        name: 'Un groupe de peluches',
      },
      {
        source: '/images/product/964663/3.jpg',
        name: 'La peluche qui tient un téléphone',
      },
    ],
    video: {
      iframeUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      cover: '/images/product/964663/2.jpg',
    },
    price: {
      discountPercent: 0,
      amount: '25.9',
      currency: 'EUR',
    },
    reviews: {
      score: 4,
      userReviews: [
        {
          id: '1',
          author: {
            id: '1',
            name: 'John Doe',
            avatar: '/images/avatars/1.jpg',
          },
          date: '12 juillet 2022',
          text: 'This plant is amazing!',
          rating: 5,
        },
        {
          id: '2',
          author: {
            id: '2',
            name: 'Jane Doe',
            avatar: '/images/avatars/2.jpg',
          },
          date: '29 février 2002',
          text: "I love this plant! It's so beautiful and peaceful.",
          rating: 5,
        },
        {
          id: '3',
          author: {
            id: '3',
            name: 'Bob Smith',
            avatar: '/images/avatars/3.jpg',
          },
          date: '13  avril 2023',
          text: 'This plant is perfect for my office. It adds a touch of calm to my space.',
          rating: 5,
        },
        {
          id: '4',
          author: {
            id: '4',
            name: 'Alice Brown',
            avatar: '/images/avatars/4.jpg',
          },
          date: '02 juin 2023',
          text: 'This plant is too green.',
          rating: 2,
        },
      ],
    },
  },
];
