export function convertHourStringToMinutes(hour: string) {
  const [hours, minutes] = hour.split(":").map(Number);

  const amount = (hours * 60) + minutes;

  return amount;
}

export function convertMinutesToHourString(minute: number) {
  const hours = Math.floor(minute / 60);
  const minutes = minute % 60;

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
}