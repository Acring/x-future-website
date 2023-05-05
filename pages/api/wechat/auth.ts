import { NextApiRequest, NextApiResponse } from 'next';
import queryString from 'query-string';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const scope = 'snsapi_userinfo';
  const appId = process.env.WECHAT_APP_ID;

  const params = {
    appid: appId,
    redirect_uri: `https://${process.env.CALLBACK_HOST}/api/wechat/callback`,
    response_type: 'code',
    scope: scope,
    state: process.env.WECHAT_STATE,
  };

  const url = `https://open.weixin.qq.com/connect/oauth2/authorize?${queryString.stringify(
    params,
  )}#wechat_redirect`;

  console.log('params', params);
  return res.redirect(url);
}
