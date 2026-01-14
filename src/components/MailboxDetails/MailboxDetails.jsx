import { useParams } from 'react-router';

const MailboxDetails = (props) =>{

    const { mailboxId } = useParams();
    const selectedBox = props.mailboxes.find(
        (mailbox) => mailbox._id === Number(mailboxId)
    );

    if(!selectedBox){
        return (<h2>Mailbox Not Found!</h2>)
    }
    
    return(
        <>
            <h1>{`Mailbox ${selectedBox._id}`}</h1>
            <h3>Details</h3>
            <p>Boxholder: {selectedBox.boxOwner}</p>
            <p>Box Size: {selectedBox.boxSize}</p>
        </>
    )

}

export default MailboxDetails