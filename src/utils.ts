export function formatDateIt(date: Date) {
  return new Intl.DateTimeFormat('it-IT', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

export function formatTypeIt(type: string) {
  return {
    'review': 'recensione',
    'news': 'notizia'
  }[type];
}

export function formatMediumIt(medium: string) {
  return {
    'videogames': 'videogiochi',
    'comics': 'fumetti'
  }[medium];
}
