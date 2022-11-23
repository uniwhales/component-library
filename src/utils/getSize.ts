export const getCheckboxSvgSize = (size: CheckboxSize) => {
  switch (size) {
    case 'big':
      return '20px';
    default:
      return '16px';
  }
};

export const getCheckboxSize = (size: CheckboxSize) => {
  switch (size) {
    case 'big':
      return '24px';
    default:
      return '18px';
  }
};
