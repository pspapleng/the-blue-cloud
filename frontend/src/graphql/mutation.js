import { gql } from '@apollo/client'

export const LOGIN = gql`
    mutation Mutation($password: String!, $email: String) {
        login(password: $password, email: $email) {
            token
            user {
                email
            }
        }
    }
`

export const CREATE_ONE_POST = gql`
    mutation Mutation($record: CreateOnePostInput!) {
        createOnePost(record: $record) {
            record {
                title
                desc
                topic
                post_by {
                    _id
                }
            }
        }
    }
`

export const CREATE_ONE_FORM = gql`
    mutation CreateOneForm($record: CreateOneFormInput!) {
        createOneForm(record: $record) {
            record {
                title
                desc
                post_by {
                    _id
                }
                file
                status
            }
        }
    }
`

export const UPDATE_POST_BY_ID = gql`
    mutation UpdateFormId($id: MongoID!, $record: UpdateByIdPostInput!) {
        updatePostId(_id: $id, record: $record) {
            record {
                title
                desc
                post_by {
                    _id
                }
                topic
            }
        }
    }
`

export const UPDATE_SUBMISSION_BY_ID = gql`
    mutation UpdateFormId($id: MongoID!, $record: UpdateByIdSubmissionInput!) {
        updateSubmissionId(_id: $id, record: $record) {
            record {
                status
                file
                submitted_by {
                    _id
                }
                note
            }
        }
    }
`