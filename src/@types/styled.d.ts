// import original module declarations
import 'styled-components';
import { CieloThemeInterface } from '../theme';

declare module 'styled-components' {
  export interface DefaultTheme extends CieloThemeInterface {}
}
