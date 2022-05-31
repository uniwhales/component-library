import { ReactChild } from 'react';

export interface ModalProps {
  show: boolean;
  toggle: () => void;
  header: ReactChild;
  title: string;
  subtitle?: string;
  content: string;
  link: { text: string, href: string }
}
