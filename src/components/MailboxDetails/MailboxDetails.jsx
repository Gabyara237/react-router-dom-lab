import { useParams } from 'react-router';

const MailboxDetails = (props) =>{

    const { mailboxId } = useParams();
    const selectedBox = props.mailboxes.find(
        (mailbox) => mailbox._id === Number(mailboxId)
    );

    const selectedLetters = props.letters.filter((letter) => (
        letter.mailboxId === Number(mailboxId)
    ));

    if(!selectedBox){
        return (<h2>Mailbox Not Found!</h2>)
    }

    return(
        <>
            <h1>{`Mailbox ${selectedBox._id}`}</h1>
            <h3>Details</h3>
            <p>Boxholder: {selectedBox.boxOwner}</p>
            <p>Box Size: {selectedBox.boxSize}</p>

            <h3>Letters</h3>
            {selectedLetters.length>0?

                selectedLetters.map((letter)=>(
                    <p>{letter.message}</p>
                ))
            :<h2>No letters yet</h2>}
        </>
    )

}

export default MailboxDetails