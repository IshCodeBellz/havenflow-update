/**
 * The four Contentful assets already in use on havenflowcare.co.uk
 * (homepage, about, services, team). The design has more photo slots than
 * there are assets, so pages reuse these in the most fitting order.
 */
export const photos = {
  home: {
    src: 'https://images.ctfassets.net/bdlach144dfs/1bd1ds9i8dPqohGVg9jPWw/b9601a7e16a5953b049639565294c7dd/1.png',
    alt: 'A Haven Flow carer supporting someone at home.',
  },
  about: {
    src: 'https://images.ctfassets.net/bdlach144dfs/qoOXhLAATLeuvfgzxvaFr/a9597d905141f069e4617445c68e1478/2.png',
    alt: 'Haven Flow Care — compassion and respect in everyday support.',
  },
  services: {
    src: 'https://images.ctfassets.net/bdlach144dfs/77TIUP4qXKpHpXO40ANphF/7d507108a6178f515a513bfe76d31d17/3.png',
    alt: 'Haven Flow Care — daily support and independence skills.',
  },
  team: {
    src: 'https://images.ctfassets.net/bdlach144dfs/33HGtY6TL7SPrX1yl22Aho/e9af22ed0aca1a2add7d014a14e126a6/stock-staff-1.png',
    alt: 'A member of the Haven Flow Care team.',
  },
} as const

export type Photo = { src: string; alt: string }
