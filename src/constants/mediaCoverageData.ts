import { MediaData } from '@/types/ExperienceTypes';
import { imageLibrary } from '@/helpers';
const mediaData: MediaData[] = [
  {
    title: 'IMDB',
    description:
      'IMDb is a comprehensive online repository, providing information on movies, TV shows, and celebrities.',
    url: imageLibrary.imdb(),
    srcImg: imageLibrary.imdb(),
  },
  {
    title: 'Develop: Brighton',
    description: 'Conference for global game developers to connect, innovate, and inspire seaside.',
    url: imageLibrary.develop(),
    srcImg: imageLibrary.develop(),
  },
  {
    title: 'USC Screen Scoring',
    description:
      'Where students master composing music for film, TV, and games through industry collaborations in LA.',
    url: imageLibrary.usc(),
    srcImg: imageLibrary.usc(),
  },
  {
    title: 'Playstation Official Blog',
    description: "Sony's official platform for news and updates on PlayStation games and consoles.",
    url: imageLibrary.playstation(),
    srcImg: imageLibrary.playstation(),
  },
];

export default mediaData;
