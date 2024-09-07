import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * @swagger
 * components:
 *  schemas:
 *   Notification:
 *    type: object
 *    properties:
 *      text:
 *        type: string
 *        description: 알림 텍스트
 *        example: cob_2023에게 제안서를 발송했습니다.
 *      read:
 *        type: boolean
 *        description: 읽음 여부
 *        example: false
 *
 */
type Notification = {
	text: string;
	read: boolean;
};

/**
 * @swagger
 * /api/notification:
 *   get:
 *      description: 알림 목록을 가져옵니다.
 *      tags:
 *        - Notification
 *      responses:
 *        200:
 *          description: 알림 목록을 가져옵니다.
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  result:
 *                    type: array
 *                    items:
 *                      $ref: '#/components/schemas/Notification'
 */
export default function handler(req: NextApiRequest, res: NextApiResponse<{ result: Notification[] }>) {
	res.status(200).json({
		result: [
			{
				text: 'cob_2023에게 제안서를 발송했습니다.',
				read: false,
			},
			{
				text: 'gildong_hong에게 제안서를 발송했습니다.',
				read: false,
			},
			{
				text: 'sophia님이 제안서를 수락했습니다.',
				read: false,
			},
			{
				text: 'sophia에게 제안서를 발송했습니다.',
				read: true,
			},
		],
	});
}
