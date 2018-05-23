import * as colors from './styles/colors';

import {
    typeXXL,
    typeXL,
    typeL,
    typeM,
    typeN,
    typeS,
    typeXS
} from './styles/typography';

export { Button, ButtonLink } from './elements/Button';
export { H1, H2, H3, H4 } from './elements/Headings';
export { Text } from './elements/Type';
export { AlertWrapper } from './elements/Alert';
export { Box, Separator } from './elements/Structure';
export { Pill, ButtonPill } from './elements/Pill';

export { Alert } from './components/Alert';

export const palette = {...colors};
export const fontSizes = { typeXXL, typeXL, typeL, typeM, typeN, typeS, typeXS };