export enum CheckboxSize {
  'Big' = 'Big',
  'Small' = 'Small',
}

export const getCheckboxSvgSize = (size: CheckboxSize) => {
  switch (size) {
    case 'Big':
      return '20px';
    default:
      return '16px';
  }
};

export const getCheckboxSize = (size: CheckboxSize) => {
  switch (size) {
    case 'Big':
      return '24px';
    default:
      return '20px';
  }
};

export enum RadioSize {
  'Big' = 'Big',
  'Small' = 'Small',
}

export const getRadioSize = (size: RadioSize) => {
  switch (size) {
    case 'Big':
      return '20px';
    default:
      return '16px';
  }
};
