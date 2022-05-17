// Start model types -> should be moved to global declaration to share w/ server

// TldType
export interface TLDType {

}

// TLD
export interface TLD {
    domain: string,
    type: string 
}


//-------------------------------------------------------------------------------- 

// Settings
export interface QuerySettings {

}

// Query info
export interface QueryInfo {
    query: string,
    tlds: Array<string>, 
    settings: QuerySettings
}

// Variants for whitespace in query string
export interface SpaceVariant {
    variant: '' | '_' | '-'
}



// Filter


// Variant