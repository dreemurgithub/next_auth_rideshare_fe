export default function Customer(){
    return <>
        <form className="mb-3 col-sm-12 col-md-6 col-lg-4">
            <h3>Customer Help</h3>
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
            <button type="submit" className="btn btn-primary btn-block mb-4">Send</button>
        </form>
    </>
}
