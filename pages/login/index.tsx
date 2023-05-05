import { useEffect, useState } from 'react';

function isWXBrowser() {
  return String(navigator.userAgent.toLowerCase().match(/MicroMessenger/i)) === 'micromessenger';
}

export default function login() {
  const [qrCodeSrc, setQrCodeSrc] = useState('');

  useEffect(() => {
    if (isWXBrowser()) {
      console.log('is wx browser');
      window.location.href = '/api/wechat/auth';
    }
    fetch('/api/wechat/qrcode').then(async (res: any) => {
      console.log('res', res);
      const data = await res.json();
      const { qrcodeUrl, scene } = data;
      console.log(data);
      setQrCodeSrc(qrcodeUrl);
      // startMonitorLogin(scene)
    });
  }, []);

  return <img src={qrCodeSrc}></img>;
}
