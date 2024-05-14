import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Soluciones',
      links: [
        {
          text: 'Diseño gráfico',
          href: getPermalink('/graphicdesign'),
        },
        {
          text: 'Branding',
          href: getPermalink('/branding'),
        },
        {
          text: 'Software',
          href: getPermalink('/software-dev'),
        },
      ],
    },
    {
      text: 'Promociones',
      href: getPermalink('/products-packs')
    },
    {
      text: 'Blog',
      links: [
        {
          text: 'Blog',
          href: getBlogPermalink(),
        },
        {
          text: 'Diseño gráfico',
          href: getPermalink('diseno-grafico', 'category'),
        },
        {
          text: 'Marketing',
          href: getPermalink('marketing', 'category'),
        },
        {
          text: 'Desarrollo',
          href: getPermalink('desarrollo-software', 'category'),
        },
        {
          text: 'Cuarta revolución',
          href: getPermalink('cuarta-revolucion-industrial', 'tag'),
        },
        
      ],
    },
    {
      text: 'Contacto',
      href: getPermalink('/contact'),
    },
  ]
};

export const footerData = {
  links: [
    {
      title: 'Soluciones',
      links: [
        { text: 'Diseño Gráfico', href: '/graphicdesign' },
        { text: 'Branding', href: '/branding' },
        { text: 'Páginas de Presentación', href: '/software-dev' },
        { text: 'Desarrollo de Software', href: '/software-dev' },
      ],
    },
    {
      title: 'Blog',
      links: [
        {
          text: 'Blog',
          href: getBlogPermalink(),
        },
        { text: 'Diseño Gáfico', href: getPermalink('diseno-grafico', 'category') },
        { text: 'Marketing', href: getPermalink('marketing', 'category') },
        { text: 'Desarrollo Software', href: getPermalink('desarrollo-software', 'category') },
        
      ],
    },
    {
      title: 'Términos y Privacidad',
      links: [
        { text: 'Términos', href: getPermalink('/terms') },
        { text: 'Políticas de Privacidad', href: getPermalink('/privacy') },
      ],
    },
    
  ],
  socialLinks: [
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/channel/UCOUoIhVbOC-8sEBaAbFrUzg'},
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/adiseniar_/'},
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    
  ]
};
