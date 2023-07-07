export type IdenticonProps = {
  size: 'big' | 'small';
  id: string;
  $hasInteraction: boolean;
  onClick?: () => void;
  href?: string;
  target?: string;
  onMouseEnter?: () => void;
  $isLink?: boolean;
};
