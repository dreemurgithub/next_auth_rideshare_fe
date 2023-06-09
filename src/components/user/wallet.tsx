import {useEffect, useState} from "react";
import styles from './style.module.css'
import {add_card , removeCard , read_card} from "@/utils/user/wallet";
import {useSession} from "next-auth/react";
export default function Wallet() {
    const {data : session} = useSession()
    const [wallet, setwallet] = useState([])
    useEffect(() => {
        async function read_c(){
            const email = (session&&session.user)? session.user.email : null
            const new_read = await read_card()
            const new_filter = new_read.filter((el: any)=>el.user===email)
            setwallet(new_filter)
        }
        read_c()
    }, [])
    async function add_card_state(){
        const email = (session&&session.user)? session.user.email : null
        const new_state = await add_card(email)
        const new_filter = new_state.filter((el: any)=>el.user===email)
        setwallet(new_filter)
    }
    async function remove_card_state(card:{ creditnumber: string}){
        const email = (session&&session.user)? session.user.email : null
        const new_card_remove = await removeCard(card)
        const new_filter = new_card_remove.filter((el: any)=>el.user===email)
        setwallet(new_filter)
    }

    return <>
        <div id={'wallet'}>
            <div className="padding">
                <div className="row">
                    <div className="col-sm-12 col-md-8 col-lg-6">
                        <div className="card">
                            <div className="card-header" style={{display: 'flex', justifyContent: 'space-between'}}>
                                <strong>Credit Card</strong>
                                <small>enter your card details</small>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input className="form-control" id="name" type="text"
                                                   placeholder="Enter your name"/>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="ccnumber">Credit Card Number</label>


                                            <div className="input-group">
                                                <input className="form-control" type="number" id={'creditNumber'}
                                                       placeholder="0000 0000 0000 0000"/>
                                                <div className="input-group-append">
                                                {/*<span className="input-group-text">*/}
                                                {/*<i className="mdi mdi-credit-card"></i>*/}
                                                {/*</span>*/}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-group col-sm-4">
                                        <label htmlFor="ccmonth">Month</label>
                                        <select className="form-control" id="ccmonth">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                            <option>6</option>
                                            <option>7</option>
                                            <option>8</option>
                                            <option>9</option>
                                            <option>10</option>
                                            <option>11</option>
                                            <option>12</option>
                                        </select>
                                    </div>
                                    <div className="form-group col-sm-4">
                                        <label htmlFor="ccyear">Year</label>
                                        <select className="form-control" id="ccyear">
                                            <option>2014</option>
                                            <option>2015</option>
                                            <option>2016</option>
                                            <option>2017</option>
                                            <option>2018</option>
                                            <option>2019</option>
                                            <option>2020</option>
                                            <option>2021</option>
                                            <option>2022</option>
                                            <option>2023</option>
                                            <option>2024</option>
                                            <option>2025</option>
                                        </select>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="form-group">
                                            <label htmlFor="cvv">CVV/CVC</label>
                                            <input className="form-control" id="cvv" type="number" placeholder="123" max={'999'}/>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="card-footer">
                                <button className="btn btn-sm btn-primary float-right" type="submit" onClick={add_card_state}>
                                    <i className="mdi mdi-gamepad-circle"></i> Save
                                </button>
                                <button className="btn btn-sm btn-danger" type="reset">
                                    <i className="mdi mdi-lock-reset"></i> Reset
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.wallet}>
            {wallet.map((el: any , index:number) => <div className={'card border'} key={index}>
                <div className={styles.card_cvv}>
                    <h4 className={'btn btn-dark'}>{el.name}</h4>
                    <h4 className={'btn btn-outline-danger'} onClick={()=>remove_card_state(el)}>Remove card</h4>
                </div>
                <div className={'card-body input-group flex-nowrap'}>
                    <input type="number" className={'form-control'} min='0'  />
                    {/*<label className={'btn btn-outline-primary'}>+</label>*/}
                    <button type="submit" className="btn btn-primary input-group-text">Add money</button>
                </div>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Card
                        number: <b>****{el.creditnumber.slice(el.creditnumber.length - 4, el.creditnumber.length)} </b>
                    </li>
                    <div className={styles.card_cvv}>
                        <li className="list-group-item">Expired: {el.expM}/{el.expY} </li>
                        <li className="list-group-item">CVV: {el.CVV}</li>
                    </div>

                </ul>
            </div>)
            }
        </div>
    </>
}
