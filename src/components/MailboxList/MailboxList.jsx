const MailboxList =(props) =>{
    const {mailboxes} = props
    console.log(props.mailboxes)
    return(
        <>
            <ul>
                {mailboxes.map((box)=>(
                    <li key ={box._id}>
                        <div className="mail-box">
                            {box.boxOwner}
                        </div>
                    </li>

                ))}
            </ul>
        </>
    )
}

export default MailboxList