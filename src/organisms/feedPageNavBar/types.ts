export interface FeedPageNavBarProps {
  label: string;
  selectPlaceholder: string;
  selectOptions: {};
  selectValue: string | undefined;
  selectOnChange: (e: any) => void;
  account: string | null;
  onConnectClick: () => void;
}
