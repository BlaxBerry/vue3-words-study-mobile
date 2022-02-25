import { gql } from "graphql-tag";

export const getExampleUser = gql`
    query {
        exampleUser {
            name
            age
        }   
    }
`


export const getWordsList = gql`
    query wordsList{
        wordsList {
            name
            id
            createAt
            expressions {
                a
                b
            }
        }   
    }
`