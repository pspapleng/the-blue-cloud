import { Fragment } from "react";
import { IconButton } from '@mui/material';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import { useMutation, useQuery } from "@apollo/client";
import { ALL_FORM } from "../../../graphql/query";

const Postspage = () => {

    const { data, loading } = useQuery(ALL_FORM)

    return (
        <Fragment>
            <div className="w-full grow flex flex-col space-y-8">
                <div className="h-12 w-full grid grid-cols-2 py-8 px-12">
                    <h1 className="text-2xl font-bold">EDIT FORM</h1>
                    <div className="w-full h-full flex justify-end">
                        <div className="justify-center">
                    <label className="pr-3">ACTIVE FORM</label>
                    <input type="checkbox" value="" /></div>
                    {/* <input class="form-check-input appearance-none w-9 -ml-10 rounded-full float-left h-5 align-top bg-no-repeat bg-contain bg-blue-500 focus:outline-none cursor-pointer shadow-sm" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked/> */}
                    </div>
                </div>

                <div className="grow px-12">
                    <div className="w-full h-auto shadow-xl bg-white rounded-t-xl border border-gray-200 p-6">
                        <label>Title</label>
                        <input type="text" placeholder="Enter your title" className="border-2 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                        <label>Description</label>
                        <textarea placeholder="Enter your title" className="border-2 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                        <label>Attachments</label>   
                        <input type="file" placeholder="Enter your title" className="border-2 px-2 py-2 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm focus:outline-none focus:ring w-full ease-linear transition-all duration-150"/>
                        <div className="flex justify-end p-5">
                            <button className="bg-blue-500 border-2 rounded text-white p-2 mr-2">Upload now</button>
                            <button className="p-2">Cancel</button>
                        </div>
                    </div>

                </div>

            </div>
        </Fragment>
    )
}

export default Postspage