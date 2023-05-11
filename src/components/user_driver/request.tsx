import {Delete_request_withID, move_request_to_history} from "@/utils/user_driver/submitRequest";
import styles from './style.module.css'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import {SetStateAction, useState, ReactNode} from "react";
import Typography from '@mui/material/Typography';
import * as React from 'react'
import {useSession} from "next-auth/react";

export default function Request(driver: {
    driver: string,
    price: number,
    road: number,
    user: string,
    lat: number,
    long: number,
    id: string,
    street: string,
    viewer: string
} | null, index: number) {

    // const {data : session} = useSession() // bad: session render twice
    if (driver) return <div className={'border border-primary'}>
        <BasicRating viewer={driver.viewer} user={driver.user} driver={driver}>
            <div key={index}>
                <p>{JSON.stringify(driver)}</p>
                <p>{index}</p>

                {/*Only in /user, where session.user.email===trip viewer, the delete/rate... can appear*/}

            </div>
        </BasicRating>
    </div>

    if (driver === null) return null
    return null
}

function BasicRating({children, user, viewer, driver}: {
    children: ReactNode, user: string, viewer: string, driver: {
        driver: string,
        price: number,
        road: number,
        user: string,
        lat: number,
        long: number,
        id: string,
        street: string,
        viewer: string
    } | null
}) {
    const [value, setValue] = useState<number | null>(null);
    const [value2, setValue2] = useState<number | null>(null);
    const [value3, setValue3] = useState<number | null>(null);
    const [value4, setValue4] = useState<number | null>(null);
    const vv = (value)? value : 0
    const vv2 = (value2)? value2 : 0
    const vv3 = (value3)? value3 : 0
    const vv4 = (value4)? value4 : 0
    return (
        <Box
            sx={{
                '& > legend': {mt: 2},
            }}
        >
            {children}
            {(user === viewer) ? <>
                    <div>
                        <Typography component="legend">Safety</Typography>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </div>
                    <div>
                        <Typography component="legend">Efficient</Typography>

                        <Rating
                            name="simple-controlled"
                            value={value2}
                            onChange={(event, newValue) => {
                                setValue2(newValue);
                            }}
                        />

                    </div>
                    <div>
                        <Typography component="legend">Speed</Typography>

                        <Rating
                            name="simple-controlled"
                            value={value3}
                            onChange={(event, newValue) => {
                                setValue3(newValue);
                            }}
                        />

                    </div>
                    <div>
                        <Typography component="legend">Attitude</Typography>

                        <Rating
                            name="simple-controlled"
                            value={value4}
                            onChange={(event, newValue) => {
                                setValue4(newValue);
                            }}
                        />

                    </div>

                </>
                : null}
            {(viewer === user) ? <div>
                    <button onClick={() => {
                        if (driver !== null) Delete_request_withID(driver.id)
                    }}>Cancel
                    </button>

                    <button onClick={() => {
                        if (driver !== null) {
                            const any_request = driver as any
                            any_request.rating = (vv+vv2+vv3+vv4)/4
                            move_request_to_history(any_request)
                        }
                    }}>Finish
                    </button>
                </div>
                : null}
            <p>Rating: {(vv+vv2+vv3+vv4)/4}</p>
            <p>Driver: {JSON.stringify(driver)}</p>
        </Box>
    )
}
