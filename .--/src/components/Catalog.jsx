import SingleUser from "./SingleUser";

import { useState, useEffect } from "react";
import * as userService from "../services/userService";

const Catalog = () => {
    const [users, setUser] = useState([]);

    useEffect(() => {
        userService.getAll().then((result) => setUser(result));
    }, []);
    console.log(users);
    return (
        <>
            {users.map((user) => (
                <SingleUser key={user._id} {...user} />
            ))}
        </>
    );
};

export default Catalog;
