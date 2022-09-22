import * as React from 'react'; 
import { Container } from '@mantine/core';
import { Footer, Divider } from '@mantine/core'


export const SimpleFooter: React.FC = () => {
	  
	return (

		<div id='footer-container'> 
			<Container className='mt-footer' size='xl'>
				<Divider variant='dashed'/>
				<Footer height={60} style={{ backgroundColor : 'transparent', border : 'none'}}>
				</Footer>
			</Container>
		</div>
	);
}


