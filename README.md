# Package is under development.

## Available Components
```js
import {
	// Elements
    Button,
    ButtonLink,
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
    Text,
    Pill,
    ButtonPill,
	
	// Components
    Alert
} from 'builtin-react'
```
### Colors
```js
white = '#FFFFFF';
lightGrey = '#FAFAF9';
blue = '#3454D1';
purple = '#731DD8';
grey = '#394053';
black = '#141115';
green = '#50FFB1';
info = '#1FB6FF';
success = '#50FFB1';
danger = '#EB1244';
warning = '#FFC82C';
```

### Alert
```js
<Alert
	type="info|warning|danger|success|{Any Colour Above}"
	hasClose={boolean} // optional
	onClose={function} // Required hasClose to be true
	positioned={boolean} // optional
	position={"top left|top right|bottom left|bottom right"} // required positioned to be true
	message="Message to display"
/>
```

### Buttons & Pills
```js
<Button
	bgColor="Any Color Above"
	fontColor="Any Color Above"
/>
```