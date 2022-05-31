export interface TagProps {
  name: string;
  isOn: boolean;
  id: number;
  tabIndex: number;
  background: any;
  border: any;
  type: 'tag1' | 'tag2' | 'tag3' | 'tag4' | 'tag5' | 'tag6';
  onClick: () => void;
}
