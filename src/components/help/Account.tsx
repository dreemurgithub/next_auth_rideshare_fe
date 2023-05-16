import styles from './styles.module.css'
export default function Account(){
    return <>
        <form className="mb-3 col-sm-12 col-md-6 col-lg-4">
            <h3>Account Information</h3>
            <div className="mb-3">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <label className="form-label">Email Account</label>
            </div>
            <div className="mb-3">
                <input type="tel" className="form-control" />
                <label htmlFor="exampleInputPassword1" className="form-label">Phone Number</label>
            </div>
            <div className="mb-3">
                <textarea className="form-control"> </textarea>
                <label htmlFor="exampleFormControlTextarea1" className="form-label">What is the problem?</label>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </>
}
