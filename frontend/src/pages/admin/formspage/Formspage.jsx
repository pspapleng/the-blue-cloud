import { useQuery } from '@apollo/client'
import EditIcon from '@mui/icons-material/Edit'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye'
import { IconButton } from '@mui/material'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { ALL_FORM } from '../../../graphql/query'

const Formspage = () => {
    const { data, loading } = useQuery(ALL_FORM)

    return (
        <Fragment>
            <div className="w-full grow flex flex-col space-y-8">
                <div className="h-12 w-full grid grid-cols-2 py-8 px-12">
                    <h1 className="text-2xl font-bold">All Forms</h1>
                    <div className="w-full h-full flex justify-end">
                        <Link
                            to="/form/create"
                            type="button"
                            className="p-2 h-full rounded-xl bg-gray-700 text-white hover:duration-100 transition hover:bg-gray-900 shadow-lg"
                        >
                            + NEW FORM
                        </Link>
                    </div>
                </div>

                <div className="grow px-12">
                    <div className="w-full h-full shadow-xl bg-white rounded-t-xl border border-gray-200">
                        <div className="w-full h-14 bg-gray-200 rounded-t-xl grid-cols-5 grid grid-rows-1">
                            <h1 className="w-full h-full flex justify-center items-center text-gray-500 font-bold">
                                TITLE
                            </h1>
                            <h1 className="w-full h-full flex justify-center items-center text-gray-500 font-bold">
                                POST BY
                            </h1>
                            <h1 className="w-full h-full flex justify-center items-center text-gray-500 font-bold">
                                SUBMISSION
                            </h1>
                            <h1 className="w-full h-full flex justify-center items-center text-gray-500 font-bold">
                                DATE CREATED
                            </h1>
                        </div>

                        <div className="grow w-full grid grid-cols-5 grid-rows-1 p-4">
                            {data?.forms?.map((form, index) => {
                                return (
                                    <Fragment key={index}>
                                        <h1 className="text-center pb-3 flex items-center justify-start truncate">
                                            {form?.title}
                                        </h1>
                                        <h1 className="text-center pb-3 flex items-center justify-center">
                                            {form?.post_by?.email}
                                        </h1>
                                        <h1 className="text-center pb-3 flex items-center justify-center">
                                            {form?.submissions.length}
                                        </h1>
                                        <h1 className="text-center pb-3 flex items-center justify-center">
                                            {form?.timestamp.split('T')[0]}
                                        </h1>
                                        <div className="flex h-full -mt-1 justify-center">
                                            <Link
                                                to={`/submission/${form?._id}`}
                                            >
                                                <IconButton aria-label="delete">
                                                    <RemoveRedEyeIcon />
                                                </IconButton>
                                            </Link>
                                            <Link
                                                to={`/form/edit/${form?._id}`}
                                            >
                                                <IconButton aria-label="delete">
                                                    <EditIcon />
                                                </IconButton>
                                            </Link>
                                        </div>
                                    </Fragment>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Formspage
