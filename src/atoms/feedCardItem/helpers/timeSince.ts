export const timeSince = (timestamp: number) => {
  const diff = Math.abs(new Date().getTime() - timestamp);
  const minutes = Math.floor((diff / 1000) / 60);
  if (minutes > 60) {
    return '';
  }
  if (minutes === 1) {
    return `${minutes} mins ago`;
  }
  return `${minutes} min ago`;
};
