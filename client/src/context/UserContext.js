import { createContext, useState } from "react";

export const UserContext = createContext();

const UserState = (props) => {
	const state = {
		authenticated: false,
	};

	const [userData, setUserData] = useState(state);

	const update = (newData) => {
		let finalData = { ...newData };
		setUserData(finalData);
	};

	return <UserContext.Provider value={{ userData, update }}>{props.children}</UserContext.Provider>;
};

export default UserState;
