import React, { useState, useEffect } from 'react'
import { users } from '../../Data/User'
const statuses = ['all','active', 'inactive', 'pending']
const User = () => {


    const [documents, setDocuments] = useState([])
    const [status, setStatus] = useState("active")
    useEffect(() => {
        if (status !== "all") {
            let filtered = users.filter((user) => {
                return user.status === status
            })
            setDocuments(filtered)
        }else{
            setDocuments(users)
        }
    }, [status])




    return (
        <div className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1>Users</h1>
                        <select className='form-control w-25 mx-auto' onChange={(e) => { setStatus(e.target.value) }}>
                            {statuses.map((status) => {
                                return <option value={status} key={status}>{status}</option>
                            })}
                        </select>
                        <ol>
                            {documents.map((user, i) => {
                                return <li key={i}>Name: {user.name} and the status is {user.status}</li>
                            })}
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User