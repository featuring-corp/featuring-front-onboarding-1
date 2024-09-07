import axios from 'axios';

const getUser = async () => {
	const { data } = await axios.get('https://featuring-front-onboarding-1.vercel.app/api/user');
	return data;
};

export default getUser;
