import { NextApiRequest, NextApiResponse } from 'next';
import { getOnlyOneScene } from './sceneManager';
import { getAccessToken } from './accessToken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // 场景值
  const scene = getOnlyOneScene();
  console.log('/api/oauth/qrcode scene', scene);

  const accessToken = await getAccessToken();
  console.log('/api/oauth/qrcode accessToken', accessToken);
  // 构建请求url
  const getQrCodeUrl = `https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token=${accessToken}`;
  console.log('/api/oauth/qrcode getQrCodeUrl');

  // {"ticket":"gQH47joAAAAAAAAAASxodHRwOi8vd2VpeGluLnFxLmNvbS9xL2taZ2Z3TVRtNzJXV1Brb3ZhYmJJAAIEZ23sUwMEmm
  // 3sUw==","expire_seconds":60,"url":"http://weixin.qq.com/q/kZgfwMTm72WWPkovabbI"}
  // 文档：https://developers.weixin.qq.com/doc/offiaccount/Account_Management/Generating_a_Parametric_QR_Code.html
  // 获取ticket
  const response = await fetch(getQrCodeUrl, {
    method: 'POST',
    body: JSON.stringify({
      expire_seconds: 604800,
      action_name: 'QR_STR_SCENE',
      action_info: {
        scene: {
          scene_str: scene,
        },
      },
    }),
  });

  const data = await response.json();
  console.log('/api/oauth/qrcode getQrCodeUrl response', data);

  const { ticket, expire_seconds, url } = data || {};
  console.log('/api/oauth/qrcode ticket', ticket);
  console.log('/api/oauth/qrcode url', url);

  // 生成二维码图片的URL
  const qrcodeUrl = `https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=${encodeURIComponent(
    ticket,
  )}`;

  const result = {
    qrcodeUrl,
    scene,
  };
  console.log('/api/oauth/qrcode result', result);
  return res.send(JSON.stringify(result));
}
