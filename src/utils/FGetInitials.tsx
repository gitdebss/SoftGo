export function getInitials(name: string): string {
  const initial= name.slice(0, 1).toUpperCase()
  const initialSecond = name.split(" ")[1].slice(0, 1).toUpperCase()
  return initial + initialSecond;
}