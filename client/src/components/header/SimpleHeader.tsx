
import * as React from "react";  
import { Container, Header } from '@mantine/core'
import { BrandReactNative } from "tabler-icons-react";


export const SimpleHeader: React.FC = () => {
    const HEADER_HEIGHT = 80; 

    return (
        <Header height={HEADER_HEIGHT} id='header-root'> 
            <Container size='xl' id='header-container'>
                    <BrandReactNative size={ 60 }></BrandReactNative>
            </Container>
        </ Header>
    )
}
