export function formatPublishedAt(date: String) {
	return new Date(date).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		timeZone: 'UTC' // don't convert to client's local timezone
	});
}
