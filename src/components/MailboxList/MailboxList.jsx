import { Link } from "react-router"

const MailboxList =(props) =>{
    const {mailboxes} = props
    return(
        <>
            <h1>Mailbox List</h1>
            <ul>
                {mailboxes.map((box)=>(
                    <li key ={box._id}>
                        <Link to ={`/mailboxes/${box._id}`}>
                            <div className="mail-box">
                                    {`Mailbox ${box._id}`}
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default MailboxList