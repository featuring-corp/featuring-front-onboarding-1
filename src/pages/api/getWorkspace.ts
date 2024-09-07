import axios from 'axios';

const getNotification = async () => {
	const { data } = await axios.get('https://featuring-front-onboarding-1.vercel.app/api/workspace');
	return data;
};

export default getNotification;
