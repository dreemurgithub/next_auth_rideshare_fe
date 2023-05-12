import {Delete_request_withID, move_request_to_history} from "@/utils/user_driver/submitRequest";
import styles from './style.module.css'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import {SetStateAction, useState, ReactNode} from "react";
import Typography from '@mui/material/Typography';
import * as React from 'react'
import {useSession} from "next-auth/react";
import {Gmap} from "@/components/user_driver/submit_form";

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
    if (driver) return <div className={'col-sm-12 col-md-6 col-lg-4 col-xxl-3 border'} style={{borderRadius:'1em'} }>
        <BasicRating viewer={driver.viewer} user={driver.user} driver={driver}>
            <div key={index}>
                <div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Total: <b>{(driver.price * driver.road).toLocaleString()} VND</b>
                        </li>
                        <li className="list-group-item">To: {driver.street} Đà Nẵng</li>
                        <li className="list-group-item">Customer: {driver.user}</li>
                        <li className="list-group-item">
                            <h5>From</h5>
                            <Gmap location={{latitude: driver.lat, longitude: driver.long}}/>
                        </li>
                    </ul>
                </div>
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
    const vv = (value) ? value : 0
    const vv2 = (value2) ? value2 : 0
    const vv3 = (value3) ? value3 : 0
    const vv4 = (value4) ? value4 : 0
    return (
        // className={'col-sm-8 col-md-5 col-lg-3'}
        <div className={'row'}>
            <div>
                {children}
                {(user === viewer) ? <>
                        <div>
                            <span>Safety</span>
                            <Rating
                                name="simple-controlled"
                                value={value}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </div>
                        <div>
                            <span>Efficient</span>
                            <Rating
                                name="simple-controlled"
                                value={value2}
                                onChange={(event, newValue) => {
                                    setValue2(newValue);
                                }}
                            />

                        </div>
                        <div>
                            <span>Speed</span>
                            <Rating
                                name="simple-controlled"
                                value={value3}
                                onChange={(event, newValue) => {
                                    setValue3(newValue);
                                }}
                            />

                        </div>
                        <div>
                            <span>Attitude</span>
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
                                any_request.rating = (vv + vv2 + vv3 + vv4) / 4
                                move_request_to_history(any_request)
                            }
                        }}>Finish
                        </button>
                        <span>Rating: {(vv + vv2 + vv3 + vv4) / 4}</span>
                    </div>
                    : null}
            </div>
        </div>

    )
}
