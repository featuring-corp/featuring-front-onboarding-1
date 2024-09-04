import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * @swagger
 * components:
 *  schemas:
 *   User:
 *    type: object
 *    properties:
 *      name:
 *        type: string
 *        description: 인플루언서 이름
 *        example: 김태리
 *      usage:
 *        type: object
 *        properties:
 *          manage_influencer_count:
 *            type: number
 *            description: 관리 중인 인플루언서 수
 *            example: 10
 *          campaign_count:
 *            type: number
 *            description: 광고 캠페인 수
 *            example: 5
 *          remaining_recommendation_count:
 *            type: number
 *            description: 잔여 추천 리스트업
 *            example: 3
 *          auto_proposal_count:
 *            type: number
 *            description: 자동 제안 가능 횟수 - 9999는 무제한
 *            example: 9999
 *      membership:
 *        type: object
 *        properties:
 *          grade:
 *            type: string
 *            enum: [basic, premium]
 *            description: 멤버십 등급
 *            example: premium
 *          start_date:
 *            type: string
 *            format: string
 *            description: 시작일
 *            example: 2021-08-01
 *          end_date:
 *            type: string
 *            format: string
 *            description: 종료일
 *            example: 2022-08-01
 *
 */
type User = {
	name: string;
	usage: {
		// 관리 중인 인플루언서 수
		manage_influencer_count: number;
		// 광고 캠페인 수
		campaign_count: number;
		// 잔여 추천 리스트업
		remaining_recommendation_count: number;
		// 자동 제안 가능 횟수 - 9999는 무제한
		auto_proposal_count: number;
	};
	membership: {
		// 멤버십 등급
		grade: 'basic' | 'premium';
		// 시작일
		start_date: string;
		// 종료일
		end_date: string;
	};
};

/**
 * @swagger
 * /api/user:
 *   get:
 *      description: 사용자 정보를 가져옵니다.
 *      tags:
 *        - User
 *      responses:
 *        200:
 *          description: 사용자 정보를 가져옵니다.
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  result:
 *                    type: array
 *                    items:
 *                      $ref: '#/components/schemas/User'
 */
export default function handler(req: NextApiRequest, res: NextApiResponse<{ result: User }>) {
	res.status(200).json({
		result: {
			name: 'Sophia',
			usage: {
				manage_influencer_count: 167,
				campaign_count: 25,
				remaining_recommendation_count: 3,
				auto_proposal_count: 9999,
			},
			membership: {
				grade: 'premium',
				start_date: '2024-09-01',
				end_date: '2024-12-31',
			},
		},
	});
}
