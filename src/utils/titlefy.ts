export default function titlefy(fullName: string) {
  return fullName.split(' ').map(name => {
    const firstChar = name.charAt(0).toUpperCase();
    const rest = name.substr(1).toLowerCase();
    return firstChar + rest;
  }).join(' ');
}