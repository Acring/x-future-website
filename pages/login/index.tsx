import { useEffect } from 'react';

function isWXBrowser() {
  return String(navigator.userAgent.toLowerCase().match(/MicroMessenger/i)) === 'micromessenger';
}

export default function login() {
  useEffect(() => {
    if (isWXBrowser()) {
      console.log('is wx browser')
      window.location.href = '/api/wechat-auth';
    }
  }, []);
  return null;
}
