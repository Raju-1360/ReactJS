import { useState } from "react";

export const Registration = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNo, setPhoneNo] = useState("");

    const handle = (e) => {
        const { name, value } = e.target;

        switch (name) {
            case "firstName":
                setFirstName(value);
                break;
            case "lastName":
                setLastName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "phoneNo":
                setPhoneNo(value);
                break;
            default:
                break;
        }
    };

    const handleform = (event) => {
        event.preventDefault();
        const data = {
            firstName,
            lastName,
            email,
            phoneNo,
        };
        console.log(data);
    };

    return (
        <>
            <h1>Form</h1>
            <form onSubmit={handleform}>
                <label>
                    First Name: <input type="text" name="firstName" required value={firstName} onChange={handle} />
                </label>
                <br />
                <label>
                    Last Name: <input type="text" name="lastName" required value={lastName} onChange={handle} />
                </label>
                <br />
                <label>
                    Email: <input type="email" name="email" required value={email} onChange={handle} />
                </label>
                <br />
                <label>
                    Phone No: <input type="text" name="phoneNo" required value={phoneNo} onChange={handle} />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};






/* 
import { useState } from "react";

export const Registration = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNo: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name: 
                    <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Last Name: 
                    <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Email: 
                    <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Phone No: 
                    <input
                        type="text"
                        name="phoneNo"
                        required
                        value={formData.phoneNo}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    );
};











*/