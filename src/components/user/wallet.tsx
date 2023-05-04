export default function Wallet() {
    return <>
        <div className="padding">
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-header" style={{display:'flex',justifyContent:'space-between'}}>
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
                                            <input className="form-control" type="text"
                                                   placeholder="0000 0000 0000 0000" autoComplete="email"/>
                                            <div className="input-group-append">
                                                <span className="input-group-text">
                                                <i className="mdi mdi-credit-card"></i>
                                                </span>
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
                                        <input className="form-control" id="cvv" type="text" placeholder="123"/>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="card-footer">
                            <button className="btn btn-sm btn-primary float-right" type="submit">
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
    </>
}
