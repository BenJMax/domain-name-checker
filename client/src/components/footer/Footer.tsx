import * as React from 'react'; 
import { Container } from '@mantine/core';
import { Footer, Divider } from '@mantine/core'


export const SimpleFooter: React.FC = () => {
	  
	return (

		<div id='footer-container'> 
			<Divider my='sm' variant='dashed'></Divider>
			<Container size='xl'>
				<Footer height={60} style={{ backgroundColor : 'transparent', border : 'none'}}>
					Text
				</Footer>
			</Container>
		</div>
	);
}


