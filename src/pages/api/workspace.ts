import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * @swagger
 * components:
 *  schemas:
 *   Workspace:
 *    type: object
 *    properties:
 *      code:
 *        type: string
 *        description: 워크스페이스 코드 (8자리 영문 대문자 & 숫자 조합)
 *        example: A1B2C3D4
 *      name:
 *        type: string
 *        description: 워크스페이스 이름
 *        example: 라지도커페이스
 *
 */
type Workspace = {
	code: string;
	name: string;
};

/**
 * @swagger
 * /api/workspace:
 *   get:
 *      description: 워크스페이스 목록을 가져옵니다.
 *      tags:
 *        - Workspace
 *      responses:
 *        200:
 *          description: 워크스페이스 목록을 가져옵니다.
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  result:
 *                    type: array
 *                    items:
 *                      $ref: '#/components/schemas/Workspace'
 */
export default function handler(req: NextApiRequest, res: NextApiResponse<{ result: Workspace[] }>) {
	res.status(200).json({
		result: [
			{
				code: 'A1B2C3D4',
				name: '라지도커페이스',
			},
			{
				code: 'B2C3D4E5',
				name: '커피빈',
			},
			{
				code: 'C3D4E5F6',
				name: '스타벅스',
			},
			{
				code: 'D4E5F6G7',
				name: '투썸플레이스',
			},
		],
	});
}
