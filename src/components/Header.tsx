import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import 'styles/Header.scss';

export default function Header(){
	return(
		<div className = "Header">
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6">
						TodoList with TypeScript
					</Typography>
				</Toolbar>
			</AppBar>
		</div>
	);
}