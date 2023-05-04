import { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';
import xml2js from 'xml2js';

export const config = {
  api: {
    bodyParser: 'text/xml',
  },
};

const TOKEN = process.env.TOKEN;

export default function wechatHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    console.log('wechatHandler GET');

    const query = req.query;
    const { signature, timestamp, nonce, echostr } = query;
    const arr = [TOKEN, timestamp, nonce].sort();
    const str = arr.join('');
    const sha1 = crypto.createHash('sha1');
    sha1.update(str);
    const result = sha1.digest('hex');
    if (result === signature) {
      res.send(echostr);
    } else {
      res.send('Error');
    }
  }
  if (req.method === 'POST') {
    xml2js.parseString(req.body, (err, xmlData) => {
      const fromUser = xmlData.xml.FromUserName[0];
      const toUser = xmlData.xml.ToUserName[0];
      const content = xmlData.xml.Content[0];
      const createTime = Date.now();

      const responseXml = `<xml>
        <ToUserName><![CDATA[${fromUser}]]></ToUserName>
        <FromUserName><![CDATA[${toUser}]]></FromUserName>
        <CreateTime>${createTime}</CreateTime>
        <MsgType><![CDATA[text]]></MsgType>
        <Content><![CDATA[收到]]></Content>
    </xml>`;

      res.send(responseXml);
    });
  }
}
