import { CoreAvatar, CoreSideNavigation, CoreTextInput } from '@featuring-corp/components';

import InfluencerCardDisplay from '../features/content-influencer/InfluenceCard';
import * as S from '../features/style.css';

export default function Home() {
	return (
		<div className={S.wapper}>
			<div className={S.navContainer}>
				<div>
					<CoreAvatar colorType="gray" shape="square" size="sm" text="L" />
					<h5>라지도커페이스</h5>
				</div>

				<CoreTextInput size="md" status="none" />
				<CoreSideNavigation
					menuList={[
						{
							pathname: '/menu/1',
							text: '대시보드',
						},
						{
							pathname: '/menu/2',
							text: '알림',
						},
					]}
					onClick={function Ya() {}}
					title=""
					width="216px"
				/>
				<p>깃허브 바로가기</p>
			</div>

			<div className={S.mainContainer}>
				<div className={S.header}>대시보드</div>
				<InfluencerCardDisplay />

				<h3 className={S.title}> 나의 이용 현황</h3>
				<div className={S.membershipContainer}>
					<div className={S.membershipInfoBox}>
						프리미엄 멤버십
						<button>팀원 계정 (6/10) 보러가기</button>
					</div>
					<div className={S.membershipDetailBoxWrapper}>
						<div className={S.membershipDetailBox}>관리 중인 인플루언서</div>
						<div className={S.membershipDetailBox}>관리 중인 인플루언서</div>
						<div className={S.membershipDetailBox}>관리 중인 인플루언서</div>
						<div className={S.membershipDetailBox}>관리 중인 인플루언서</div>
					</div>
				</div>
			</div>
		</div>
	);
}
