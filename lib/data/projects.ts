import type { Project } from '../../types';

export const projects: Project[] = [
    {
    title: 'HailPath',
    description:
    'A full-stack iOS app for NYC yellow cab drivers that predicts high-demand fare zones using real TLC trip data, XGBoost ML scoring, and live weather/event signals. Drivers see a ranked zone list, tap GO to navigate, and log fare feedback that improves the model over time.',
    tags: ['React Native', 'FastAPI', 'PostgreSQL', 'XGBoost', 'RevenueCat', 'Railway'],
    youtubeId: 'GIA3NFYVKyU',
    liveUrl: 'https://hailpath.app',
    videoOrientation: 'portrait',
  },
	{
		title: 'Scarfy',
		description:
			'A 2D side-scrolling game character animation built with C++ and Raylib, featuring smooth sprite animations and physics-based movement.',
		tags: ['C++', 'Raylib', 'Game Development'],
    youtubeId: 'KJt0HXWpgLg',
    liveUrl: 'https://youtu.be/KJt0HXWpgLg',
    videoOrientation: 'portrait',
	},
  {
    title: 'Mansa Musa',
    description: "A 3D game based on Mansa Musa known as one of the richest man in history",
    tags: ['C++', '3D Modeling', 'Unreal Engine','Game Development'],
    youtubeId: 'i-FIV6oMjOU',
    liveUrl: 'https://youtu.be/i-FIV6oMjOU',
    videoOrientation: 'portrait',
  }
];
