export default function Driver(){
    return <>
        <form className="mb-3 col-sm-12 col-md-6 col-lg-4">
            <h3>Driver Help</h3>
            <div className="form-outline mb-4">
                <input type="text" className="form-control"/>
                <label className="form-label" htmlFor="form4Example1">Your name</label>
            </div>
            <div className="form-outline mb-4">
                <input type="email"  className="form-control"/>
                <label className="form-label" htmlFor="form4Example2">Email address</label>
            </div>
            <div className="form-outline mb-4">
                <input type="tel"  className="form-control"/>
                <label className="form-label" htmlFor="form4Example2">Phone</label>
            </div>
            <div className="form-outline mb-4">
                <textarea className="form-control"  ></textarea>
                <label className="form-label" htmlFor="form4Example3">Details of your problems</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Problem 1
                    </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
                <label className="form-check-label" htmlFor="flexCheckDefault">Problem 2</label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value=""  checked/>
                    <label className="form-check-label" htmlFor="flexCheckChecked">
                        Do you want this to be recorded?
                    </label>
            </div>
            <button type="submit" className="btn btn-primary btn-block mb-4">Send</button>
        </form>
    </>
}
