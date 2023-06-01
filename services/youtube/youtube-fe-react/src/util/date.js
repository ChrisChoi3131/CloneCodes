import { format } from 'timeago.js';


export function formatTimeAgo(date, lang = 'en_US') {
  return format(date, lang)
}