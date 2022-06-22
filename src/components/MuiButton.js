import React from 'react'
import ReactDOM from 'react-dom';
import {Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton} from "@mui/material"

import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

const MuiButton = () => {
	return (
		<Stack spacing={4}>
	{/* The 3 variants of buttons*/}
			<Stack spacing={2} direction='row'>
				<Button variant="text">Text</Button>
				<Button variant="contained">Contained</Button>
				<Button variant="outlined">Outlined</Button>
			</Stack>
			
	 {/* Color of the buttons */}
			<Stack spacing={2} direction='row'>
				<Button variant='contained' color='primary'>Primary</Button>
				<Button variant='contained' color='secondary'>Secondary</Button>
				<Button variant='contained' color='error'>Error</Button>
				<Button variant='contained' color='warning'>Warning</Button>
				<Button variant='contained' color='info'>Info</Button>
				<Button variant='contained' color='success'>Success</Button>
			</Stack>
			
	{/* // Size of the buttons */}
			<Stack display='block' spacing={2} direction='row'>
				<Button variant='contained' size='small'>Small</Button>
				<Button variant='contained' size='medium'>Medium</Button>
				<Button variant='contained' size='large'>Large</Button>
			</Stack>
			
	{/* //Adding Icons to buttons */}
			<Stack spacing={2} direction='row'>
				<Button variant='contained' startIcon={<SendIcon />} disableRipple onClick={() => alert('Clicked')} >Send</Button>
				<Button variant='contained' endIcon={<SendIcon />} disableElevation>Send</Button>				
			</Stack>
			
	{/* //Buttons with only icons without text(mui provides second component called icon button component) */}
			<IconButton aria-label='send' color='success' size='large'>
				<SendIcon/>
			</IconButton>
			
	{/* //Button Group Component */}
			<Stack  direction='row'>
				<ButtonGroup variant='contained' orientation='vertical' color='secondary' size='small' aria-label='alignment button group'>
					<Button   startIcon={<SendIcon />} >Left</Button>
					<Button   endIcon={<SendIcon />} >Center</Button>			
					<Button   endIcon={<SendIcon />} >Right</Button>
				</ButtonGroup>		
			</Stack>
			
			<Stack direction='row'>
				<ToggleButtonGroup aria-label='text formatting'>
					<ToggleButton value='bold' aria-label='bold'>
						<FormatBoldIcon />
					</ToggleButton>
					<ToggleButton  value='italic' aria-label='italic'>
						<FormatItalicIcon />
					</ToggleButton>
					<ToggleButton value='unerlined' aria-label='unerlined'>
						<FormatUnderlinedIcon />
					</ToggleButton>
				</ToggleButtonGroup>
			</Stack>
		</Stack>	
	)
}

export default MuiButton;