import * as React from 'react';
import { Button } from "@material-tailwind/react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";

export default function Example(props) {
    return (
        <>
            <div className='border-2 lg:border-gray-200 border-gray-300 bg-white w-96 h-full rounded-2xl shadow-xl my-10 lg:my-16'>
                <img className='rounded-xl w-[310px] h-[200px] lg:w-[345px] mx-auto lg:h-[230px] relative bottom-6' src={props.IMG} alt="" />
                <h3 className=' text-center text-[18px]'>{props.TITLE}</h3>
                <p className='py-4 text-center text-[14px] leading-6 font-light px-[22px] text-gray-900'>{props.PARA}</p>
                <hr />
                <div className='text-center p-4'><a href={props.LINK} target="_blank"><Button style={{ backgroundColor: '#009FFD' }} >VIEW</Button></a></div>
            </div>
        </>
    );
}