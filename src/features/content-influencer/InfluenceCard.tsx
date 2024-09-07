import { CoreAvatar, CoreTag } from '@featuring-corp/components';
import { useQuery } from '@tanstack/react-query';
import Image from 'next/image';
import SwiperCore from 'swiper';
import { Navigation, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { flex } from '@/styles/utils/flex.css';

import * as S from './style.css';
import getInfluencer from '../../pages/api/getInfluencer';

interface Influencer {
	name: string;
	full_name: string;
	image: string;
	link: string;
	categories: string[];
	platform: string;
	follower_count: number;
}

/** 인플루언서가 가지는 태그의 색상 값을 리턴하는 함수 */
const getTagType = (category: string) => {
	if (category === 'beauty') {
		return 'magenta';
	} else if (category === 'fashion') {
		return 'lightGreen';
	} else if (category === 'life') {
		return 'orange';
	} else {
		return 'primary';
	}
};

/** 인플루언서 link를 잘라서 마지막 값(인플루언서 아이디) 값을 가져오는 함수  */
const getSnsId = (link: string): string | undefined => {
	return link.split('/').pop();
};

/** 인플루언서 이미지 불러오는 함수, 플랫폼 종류에 따라서 로고 달라짐. */
const getPlatformImage = (platform: string) => {
	if (platform === 'tw') {
		return '/images/tw.svg';
	} else if (platform === 'yt') {
		return '/images/yt.svg';
	} else if (platform === 'tt') {
		return '/images/tt.svg';
	} else if (platform === 'nb') {
		return '/images/nb.svg';
	} else if (platform === 'ig') {
		return '/images/ig.svg';
	} else {
		return '/images/youtube.svg';
	}
};

/** 인플루언서 카드 컴포넌트. 인플루언서 하나당 하나의 카드를 가짐. */
const InfluencerCard = ({ influencer }: { influencer: Influencer }) => (
	<div className={S.influenceCard}>
		<div className={flex({ gap: 'spacing-100' })}>
			{influencer.categories.map((category: string, index: number) => (
				<CoreTag key={index} size="md" text={category} tagType={getTagType(category)} />
			))}
		</div>
		<div className={flex({ gap: 'spacing-0' })}>
			<CoreAvatar text={influencer.name} colorType="gray" shape="circle" size="lg" src={influencer.image} />

			<div className={flex({ direction: 'column' })}>
				<div className={flex({ gap: 'spacing-0' })}>
					<Image
						src="/images/youtube.svg"
						width={110.63}
						height={12}
						alt="Platform logo"
						onClick={() => (location.href = '/')}
					/>

					<p>{influencer.name}</p>
				</div>
				<p>@{getSnsId(influencer.link)}</p>
			</div>
		</div>
		<div>
			<p>{influencer.follower_count.toLocaleString()} 구독자</p>
			<p>Platform: {influencer.platform}</p>
		</div>
	</div>
);

/** 인플루언서 카드를 보여주는 컴포넌트. */
export default function InfluencerCardDisplay() {
	const { data, isLoading, error } = useQuery<{ result: Influencer[] }>({
		queryKey: ['influencerData'],
		queryFn: getInfluencer,
	});

	//swiper 라이브러리를 이용한 캐러셀 구현
	SwiperCore.use([Navigation, Scrollbar, Autoplay]);

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>An error occurred: {(error as Error).message}</div>;

	return (
		<div>
			<h3 className={S.title}>최근 조회한 인플루언서</h3>

			<div className="swiper-container">
				<Swiper
					loop={true} // 슬라이드 루프
					spaceBetween={12} // 슬라이스 사이 간격
					slidesPerView={4} // 보여질 슬라이스 수
					navigation={true} // prev, next button
					autoplay={{
						delay: 4000,
						disableOnInteraction: false,
					}}
					className={S.influenceCardWrapper}
				>
					{data?.result.map((influencer, index) => (
						<SwiperSlide key={index}>
							<InfluencerCard key={index} influencer={influencer} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
}
