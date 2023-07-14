import { ReactNode, Ref } from 'react';

export interface Option {
  value: string,
  label: string,
  id: number;
  icon?: JSX.Element,
  isSelected?: boolean;
  order?: number;
  required?: boolean;
}
export interface SelectGroupOption {
  label: string;
  options: Option[]
}

export interface SelectOption extends Option { }

export type SelectVariation = 'single' | 'multi' | 'group' | 'multi-group';
export type SelectVal<T extends SelectVariation> = T extends 'single' ? SelectOption : T extends 'multi' ? SelectOption[] : T extends 'group' ? SelectOption
  : SelectOption[];
export type SelectOptions<T extends SelectVariation> = T extends 'single' ? SelectOption[] : T extends 'multi' ? SelectOption[] : T extends 'group' ? SelectGroupOption[]
  : SelectGroupOption[];

export interface SelectProps<T extends SelectVariation> {
  width?: string,
  onSelectChange?: (o: SelectVal<T>) => void,
  selectOptions: SelectOptions<T>,
  selectValue?: SelectVal<T> | null,
  readOnly?: boolean,
  isMulti?: boolean,
  isCheckBox?: boolean,
  placeholder: string | ReactNode,
  isXL?: boolean,
  isClearable?: boolean,
  isSearchable?: boolean,
  showValue?: boolean,
  clearButtonText?: string,
  handleClearValue?: () => void;
  maxMenuHeight?: number;
  isDisabled?: boolean;
  onInputChange?: (e: string) => void;
  required?: boolean
  tabIndex?: number
  ref?: Ref<HTMLDivElement>
  error?: boolean
  errorMessage?: string
  showOnTop?: boolean
  noOptionsMessage?: string;
  smallText?: boolean;
}

export type StyledProps = {
  isFocused?: boolean
  isSelected?: boolean
  menuIsOpen?: boolean
  options?: any;
  theme: any;
  readOnly?: boolean;
  isMulti?: boolean;
  isCheckBox?: boolean;
  label?: string;
  isDisabled?: boolean;
  error?: boolean;
  showOnTop?: boolean;
};

export const isSelectOptionGuard = (
  o: SelectOption[] | SelectGroupOption[],
  // @ts-ignore
): o is SelectOption[] => Array.isArray(o) && o.every((group: SelectOption | SelectGroupOption): group is SelectOption => !('options' in group));

export enum BulkSelectOption {
  SelectAll = 'Select All',
  DeselectAll = 'Deselect All',
}
