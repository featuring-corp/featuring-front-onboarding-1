import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * @swagger
 * components:
 *  schemas:
 *   Influencer:
 *    type: object
 *    properties:
 *      name:
 *        type: string
 *        description: 인플루언서 이름
 *        example: 김태리
 *      full_name:
 *        type: string
 *        description: 인플루언서의 handle 또는 id
 *        example: kim_tae_ri
 *      image:
 *        type: string
 *        description: 프로필 이미지
 *        example: https://picsum.photos/600/400
 *      link:
 *        type: string
 *        description: 인플루언서의 링크
 *        example: https://www.instagram.com/kim_tae_ri
 *      categories:
 *        type: array
 *        description: 인플루언서의 카테고리
 *        items:
 *          type: string
 *          enum: [beauty, fashion, food, travel, life]
 *      platform:
 *        type: string
 *        description: 인플루언서의 플랫폼
 *        enum: [ig, yt, nb, tt, tw]
 *      follower_count:
 *        type: number
 *        description: 인플루언서의 팔로워 수
 *        example: 1000000
 *
 */
type Influencer = {
	name: string;
	full_name: string;
	image: string;
	link: string;
	categories: Array<'beauty' | 'fashion' | 'food' | 'travel' | 'life'>;
	platform: 'ig' | 'yt' | 'nb' | 'tt' | 'tw';
	follower_count: number;
};

/**
 * @swagger
 * /api/influencer:
 *   get:
 *      description: 최근 조회한 인플루언서 정보를 가져옵니다.
 *      tags:
 *        - Influencer
 *      responses:
 *        200:
 *          description: 최근 조회한 인플루언서 배열을 반환합니다.
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  result:
 *                    type: array
 *                    items:
 *                      $ref: '#/components/schemas/Influencer'
 */
export default function handler(req: NextApiRequest, res: NextApiResponse<{ result: Influencer[] }>) {
	res.status(200).json({
		result: [
			{
				name: '김태리',
				full_name: 'kim_tae_ri',
				image: 'https://picsum.photos/600/400',
				link: 'https://www.instagram.com/kim_tae_ri',
				categories: ['beauty', 'fashion'],
				platform: 'ig',
				follower_count: 1000000,
			},
			{
				name: '김다미',
				full_name: 'kim_da_mi',
				image: 'https://picsum.photos/600/400',
				link: 'https://www.youtube.com/kim_da_mi',
				categories: ['fashion'],
				platform: 'yt',
				follower_count: 500000,
			},
			{
				name: '장동건',
				full_name: 'jang_dong_gun',
				image: 'https://picsum.photos/600/400',
				link: 'https://www.naver.com/jang_dong_gun',
				categories: ['food', 'travel', 'life'],
				platform: 'nb',
				follower_count: 2000000,
			},
			{
				name: '이종석',
				full_name: 'lee_jong_suk',
				image: 'https://picsum.photos/600/400',
				link: 'https://www.tiktok.com/lee_jong_suk',
				categories: ['travel'],
				platform: 'tt',
				follower_count: 3000000,
			},
			{
				name: '김우빈',
				full_name: 'kim_woo_bin',
				image: 'https://picsum.photos/600/400',
				link: 'https://www.twitch.com/kim_woo_bin',
				categories: ['life'],
				platform: 'tw',
				follower_count: 4000000,
			},
		],
	});
}
