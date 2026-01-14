import { useState } from "react";
import { useNavigate } from "react-router";


const initialState = {
    mailboxId: "",
    recipient: "",
    message: ""
}
const LetterForm =(props)=>{

    const {mailboxes, addLetter}= props;
    const navigate = useNavigate()
    const [formData, setFormData] = useState(initialState)

    const handleSubmit = (evt) =>{
        evt.preventDefault()
        const id= formData.mailboxId
        addLetter(formData)
        setFormData(initialState)
        navigate(`/mailboxes/${id}`)

    }

    const handleChange = ({target}) =>{
        setFormData({...formData,[target.name]: target.value})
    }

    return(
        <>
            <h1>New Letter</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="mailboxId">Select a Mailbox</label>
                <select
                    name="mailboxId"
                    value={formData.mailboxId}
                    onChange={handleChange}
                >
                    <option value=""> Select a mailbox </option>
                    {mailboxes.map((box)=>(
                        <option key={box._id} value={box._id}>{`Mailbox ${box._id}`}</option>
                    ))}
                </select>
                <label htmlFor="recipient">Recipient Name</label>
                <input 
                    name="recipient"
                    type="text"
                    value={formData.recipient} 
                    onChange={handleChange}   
                />

                <label htmlFor="message"></label>
                <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>

                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default LetterForm