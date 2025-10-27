import { projects } from '$lib/data/projects';
import type { PageLoad } from './$types';

export const load: PageLoad = () => {
	return {
		projects
	};
};
