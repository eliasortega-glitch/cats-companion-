export function parseDate(value) {
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

export function shouldArchive(dueDate, daysOld = 30) {
  const date = parseDate(dueDate);
  if (!date) return false;
  const threshold = new Date();
  threshold.setDate(threshold.getDate() - daysOld);
  return date < threshold;
}
