import { Typography, Button, Paper, colors, Link } from '@mui/material'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import MuiButton from './MuiButton';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from '@mui/lab';
// import ReactToPrint from 'react-to-print';
// import { ComponentToPrint } from './ComponentToPrint';


export const ThemeSample = () => {
	const [themeMode, setThemeMode] = useState("light");
	const theme = createTheme({

		palette: {
			mode: themeMode,
		},
	});

	const handleChange = (params) => {
		// alert(JSON.stringify(params));
		console.log(params);
		setThemeMode(params.target.value);
	}
	const bull = (
		<Box
			component="span"
			sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
		>
		</Box>
	);
	return (
		<ThemeProvider theme={theme}>
			<Paper style={{ height: "100vh" }}>
				<div>
					<Box sx={{ flexGrow: 1 }}>
						<AppBar>
							<Toolbar color="blue">
								<Typography variant="h5">Themes</Typography>
							</Toolbar>
						</AppBar>
					</Box>

					<Container style={{ marginTop: "4.375rem", textAlign: "center" }}>
						<Typography variant="h4">Addanki V S D Krishna Vivek</Typography>
						<Typography variant="paragraph">Addanki V S D Krishna Vivek</Typography>

					</Container>

					<div style={{ marginTop: "1.375rem", textAlign: "center" }}>
						<Box width="2650px">
							<FormControl fullWidth={false}>
								<InputLabel id="demo-simple-select-label">Theme</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									value={themeMode}
									label="Theme"
									onChange={handleChange}
								>
									<MenuItem value={"light"}>Light</MenuItem>
									<MenuItem value={"dark"}>Dark</MenuItem>
									{/* <MenuItem value={"custom"}>Custom</MenuItem> */}
								</Select>
								

							</FormControl>
						</Box>
					</div>

					<div>
						<MuiButton />
					</div>
					<div>
						<Card textAlign="center" sx={{ minWidth: 275 }}>
							<CardContent>
								<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
									Word of the Day
								</Typography>
								<Typography variant="h5" component="div">
									be{bull}nev{bull}o{bull}lent
								</Typography>
								<Typography sx={{ mb: 1.5 }} color="text.secondary">
									adjective
								</Typography>
								<Typography variant="body2">
									well meaning and kindly.
									<br />
									{'"a benevolent smile"'}
								</Typography>
							</CardContent>
							<CardActions>
								<Button size="small">Learn More</Button>
							</CardActions>
						</Card>
					</div>
					<Card>
						<div>
							<Avatar
								alt="Picture"
								src="C:\Users\DELL\Pictures\Saved Pictures\Picture.jpg"
								sx={{ width: 56, height: 56 }}
							/>
						</div>
					</Card>

					<Card>
						<div>
							<Link href="www.google.com" underline='hover'>About US</Link>
							<Link href="www.mui.com" variant='h6' color='secondary' underline='none'>Contact US</Link>
						</div>
					</Card>

					<Card>
						<Timeline position='alternate'>
							<TimelineItem>
								<TimelineOppositeContent color='text.secondary'>9:30 AM</TimelineOppositeContent>
								<TimelineSeparator>
									<TimelineDot color='secondary' />
									<TimelineConnector />
								</TimelineSeparator>
								<TimelineContent>
									City A
								</TimelineContent>
							</TimelineItem>

							<TimelineItem>
								<TimelineOppositeContent color='text.secondary'>10:00 AM</TimelineOppositeContent>
								<TimelineSeparator>
									<TimelineDot color='secondary' />
									<TimelineConnector />
								</TimelineSeparator>
								<TimelineContent>
									City B
								</TimelineContent>
							</TimelineItem>

							<TimelineItem>
								<TimelineOppositeContent color='text.secondary'>10:30 AM</TimelineOppositeContent>
								<TimelineSeparator>
									<TimelineDot color='secondary' />
									<TimelineConnector />
								</TimelineSeparator>
								<TimelineContent>
									City C
								</TimelineContent>
							</TimelineItem>
						</Timeline>
					</Card>
					<div>
						<Card textAlign="center" sx={{ minWidth: 275 }}>
							<CardContent>
								<Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
									Word of the Day
								</Typography>
								<Typography variant="h5" component="div">
									be{bull}nev{bull}o{bull}lent
								</Typography>
								<Typography sx={{ mb: 1.5 }} color="text.secondary">
									adjective
								</Typography>
								<Typography variant="body2">
									well meaning and kindly.
									<br />
									{'"a benevolent smile"'}
								</Typography>
							</CardContent>
							<CardActions>
								<Button size="small">Learn More</Button>
							</CardActions>
						</Card>
					</div>
				</div>
			</Paper>
		</ThemeProvider>
	)
}

// export default ThemeSample;







