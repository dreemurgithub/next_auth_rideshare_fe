export default function Restaurant(){
    return <>
        <form className="mb-3 col-sm-12 col-md-6 col-lg-4">
            <h3>Restaurant Contact</h3>
            <div className="form-outline mb-4">
                <input type="text" className="form-control"/>
                <label className="form-label" htmlFor="form4Example1">Restaurant name</label>
            </div>
            <div className="form-outline mb-4">
                <input type="email"  className="form-control"/>
                <label className="form-label" htmlFor="form4Example2">Email address</label>
            </div>
            <div className="form-outline mb-4">
                <textarea className="form-control" ></textarea>
                <label className="form-label" htmlFor="form4Example3">Message</label>
            </div>
            <div className="form-check d-flex justify-content-center mb-4">
                <input className="form-check-input me-2" type="checkbox"  checked/>
                <label className="form-check-label" htmlFor="form4Example4">
                    Send me a copy of this message
                </label>
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-4">Send</button>
        </form>
    </>
}
