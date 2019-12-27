export const colors = {
  black: '#111',
  gold: '#FFD702',
  magenta: '#E600EB',
  blue: '#4266C3',
  gray: '#848484',
  white: '#E9ECF3',
};

// theme.js
export const lightTheme = {
  body: '#E9ECF3',
  text: '#111',
};

export const darkTheme = {
  body: '#111',
  text: '#E9ECF3',
};

export const randomColor = (min, max) => {
  const colorArr = [ '#FFD702', '#E600EB', '#4266C3']
  const randomInt =  Math.floor(Math.random() * (colorArr.length - 0 + 1) + 0);

  return colorArr[randomInt]
}

// export const randomColor = [ '#FFD702', '#E600EB', '#4266C3']