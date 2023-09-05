export default function getRandomColor() {
  // Generate a random value for each RGB component (0-255)
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  // Create the RGB color string in the format "rgb(r, g, b)"
  const color = `rgb(${red}, ${green}, ${blue})`;

  return color;
}
