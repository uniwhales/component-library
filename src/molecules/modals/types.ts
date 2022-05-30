import { ReactNode } from 'react';

export interface ModalProps {
  show: boolean;
  toggle: () => void;
  header: ReactNode | string;
  title: string;
  subtitle?: string;
  content: string;
  link: { text: string, href: string }
}
