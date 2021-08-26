import Header from '../../components/Header'
import SideMenu from '../../components/SideMenu'

import Grid from '@material-ui/core/Grid'
import Drafts from '../../components/Drafts'
import { BrowserRouter as Router } from 'react-router-dom';


const DashBoard = () => {
	return (
		<Router>
			<Header />
			<SideMenu/>
			<Drafts />
				
			
		</Router>
	)
}

export default DashBoard;