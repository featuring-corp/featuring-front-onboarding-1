import axios from 'axios';

const getInfluencer = async () => {
	const { data } = await axios.get('https://featuring-front-onboarding-1.vercel.app/api/influencer');
	return data;
};

export default getInfluencer;
