import { NextApiRequest, NextApiResponse } from 'next';

const APP_ID = process.env.WECHAT_APP_ID;
const APP_SECRET = process.env.WECHAT_APP_SECRET;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).json({ message: 'Missing code parameter' });
  }

  try {
    // 获取access_token
    const tokenUrl = `https://api.weixin.qq.com/sns/oauth2/access_token?appid=${APP_ID}&secret=${APP_SECRET}&code=${code}&grant_type=authorization_code`;
    const resp = await fetch(tokenUrl, {
      method: 'GET',
    });

    const tokenData = await resp.json();

    // 获取用户信息
    const { access_token, openid } = tokenData;
    const userResp = await fetch(
      `https://api.weixin.qq.com/sns/userinfo?access_token=${access_token}&openid=${openid}&lang=zh_CN`,
      {
        method: 'GET',
      },
    );

    const userData = await userResp.json();

    // TODO: 在此处处理用户信息，例如存储到数据库中
    console.log('userData', userData);

    return res.json({ message: 'Success', data: userData });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Failed to get user info' });
  }
}
