import * as React from 'react'

import { TextInput, Loader } from '@mantine/core' 

interface Props {
    query: string,
    onChange: (event: React.ChangeEvent<any>) => void
}

export const QueryBar: React.FC<Props> = ({ query, onChange }) => {

    // loading bar for input smoothing 
    if (true) {
        return (
            <>
                <TextInput 
                    label='Generate Domain Names' 
                    id='query-bar-input'
                    size='xl'
                    type='search'
                    variant='default'
                    value={ query } 
                    onChange={ (e) => onChange(e) }
                    rightSection={<Loader variant='dots' size='lg'/>}
                    rightSectionWidth={65}
                    style={{

                    }}
                    >
                </TextInput>


            </>
        ); 
    }

    return (
        <>
            <TextInput 
                label='testing' 
                size='xl'
                radius='md'
                value={ query } 
                onChange={ (e) => onChange(e) }>

            </TextInput>
        </>
    )

} 
