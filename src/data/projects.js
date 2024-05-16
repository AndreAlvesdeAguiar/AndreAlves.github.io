// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Projeto 1',
		category: 'Aplicações Web',
		img: require('@/assets/images/web-project-2.jpg'),
	},
	{
		id: 2,
		title: 'Projeto 2',
		category: 'Análise de Dados',
		img: require('@/assets/images/mobile-project-2.jpg'),
	},
	{
		id: 3,
		title: 'Project Management UI',
		category: 'Outros',
		img: require('@/assets/images/ui-project-1.jpg'),
	} //,
	// {
	// 	id: 4,
	// 	title: 'Cloud Storage Platform',
	// 	category: 'UI/UX Design',
	// 	img: require('@/assets/images/ui-project-2.jpg'),
	// },
	// {
	// 	id: 5,
	// 	title: 'React Social App',
	// 	category: 'Mobile Application',
	// 	img: require('@/assets/images/mobile-project-1.jpg'),
	// },
	// {
	// 	id: 6,
	// 	title: 'Apple Design System',
	// 	category: 'Web Application',
	// 	img: require('@/assets/images/web-project-1.jpg'),
	// },
];

export default projects;
