import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom'

const BookingForm = () => {
    const [name, setname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [phone, setphone] = useState("");
    const [ticket, settickets] = useState("");
    const [date, setdate] = useState("");
    const [moviename, setmoviename] = useState("");
    const [data, setData] = useState(null)
    const { id } = useParams()
    const navigate = useNavigate();

    const submit = () => {
        localStorage.setItem('login', true)
        let details = { name, lastname, email, phone, ticket, date, moviename }
        console.log(details)
    }
    useEffect(() => {
        fetch(`https://api.tvmaze.com/shows/${id}`)
            .then((res) => res.json())
            .then((data) => setData(data))
        submit()
    }, [id])
    return (
        <div className='dark'>
            <div className='container'>
                <section >
                    <br></br>
                    <form>
                        <div class="row mb-4">
                            <div class="mb-3">
                                <label for="disabledTextInput" class="form-label">Movie Name</label>
                                <input type="text" value={data?.name} id="disabledTextInput" class="form-control" placeholder={data?.name} />
                            </div>
                            <div class="col">
                                <div class="form-outline">
                                    <label class="form-label" for="form6Example1">Your First name</label>
                                    <input type="text" value={name} onChange={(e) => setname(e.target.value)} id="form6Example1" class="form-control" />
                                </div>
                            </div>
                            <div class="col">
                                <div class="form-outline">
                                    <label class="form-label" for="form6Example2">Your Last name</label>
                                    <input type="text" value={lastname} onChange={(e) => setlastname(e.target.value)} id="form6Example2" class="form-control" />
                                </div>
                            </div>
                        </div>

                        <div class="form-outline mb-4">
                            <label class="form-label" for="form6Example3">Company name</label>
                            <input type="text" value={email} onChange={(e) => setemail(e.target.value)} id="form6Example3" class="form-control" />

                        </div>

                        <div class="form-outline mb-4">
                            <label class="form-label" for="form6Example4">Phone Number</label>
                            <input id="form6Example4" value={phone} onChange={(e) => setphone(e.target.value)} class="form-control" />

                        </div>

                        <div class="form-outline mb-4">
                            <label class="form-label" for="form6Example5">No of Tickets </label>
                            <input type="number" id="form6Example5" value={ticket} onChange={(e) => settickets(e.target.value)} class="form-control" required />
                        </div>

                        <div class="form-outline mb-4">
                            <label class="form-label" for="form6Example6">Date</label>
                            <input type="number" value={date} onChange={(e) => setdate(e.target.value)} id="form6Example6" class="form-control" />

                        </div>


                        <button type='submit' class="btn btn-primary btn-block mb-4">Book Ticket</button>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default BookingForm