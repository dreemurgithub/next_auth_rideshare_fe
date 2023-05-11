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
        <BasicRating viewer={driver.viewer} user={driver.user}>
            <div key={index}>
                <p>{JSON.stringify(driver)}</p>
                <p>{index}</p>
                {(driver.viewer === driver.user) ? <div>
                        <button onClick={() => {
                            if (driver !== null) Delete_request_withID(driver.id)
                        }}>Cancel
                        </button>

                        <button onClick={() => {
                            if (driver !== null) {
                                const any_request = driver as any
                                move_request_to_history(any_request)
                            }
                        }}>Finish
                        </button>
                    </div>
                    : null}
            {/*Only in /user, where session.user.email===trip viewer, the delete/rate... can appear*/}

            </div>
        </BasicRating>
    </div>

    if (driver === null) return null
    return null
}

function BasicRating({children, user, viewer}: { children: ReactNode, user: string, viewer: string }) {
    const [value, setValue] = useState<number | null>(null);
    return (
        <Box
            sx={{
                '& > legend': {mt: 2},
            }}
        >
            {children}
            {(user === viewer) ? <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            /> : null}
        </Box>
    )
}
