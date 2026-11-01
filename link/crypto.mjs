// Web Crypto interoperability: RSA-OAEP SHA-256 + MGF1 SHA-256, AES-256-GCM.
export const bytes = value => Uint8Array.from(atob(value), c=>c.charCodeAt(0));
export const base64 = value => btoa(Array.from(new Uint8Array(value), b=>String.fromCharCode(b)).join(''));
export async function fingerprint(publicKey) {
  return Array.from(new Uint8Array(await crypto.subtle.digest('SHA-256',bytes(publicKey))),b=>b.toString(16).padStart(2,'0')).join('');
}
export function validateCredentials(serverUrl,username,password) {
  const server=serverUrl.trim().replace(/\/+$/,'');let url;
  try{url=new URL(server);}catch{throw new Error('URL');}
  if(!/^https?:$/.test(url.protocol)||!url.hostname||url.username||url.password||url.search||url.hash||/[\s\\]/.test(server)||url.port==='0')throw new Error('URL');
  if(!username.trim()||!password.trim())throw new Error('REQUIRED');
  if(server.length>2048||username.length>256||password.length>1024)throw new Error('SIZE');
  const credentials={serverUrl:server,username:username.trim(),password};
  if(new TextEncoder().encode(JSON.stringify(credentials)).length>4400)throw new Error('SIZE');
  return credentials;
}
export async function encryptCredentials(publicKey, code, credentials) {
  const key=await crypto.subtle.importKey('spki',bytes(publicKey),{name:'RSA-OAEP',hash:'SHA-256'},false,['encrypt']);
  const aes=await crypto.subtle.generateKey({name:'AES-GCM',length:256},true,['encrypt']);
  const raw=new Uint8Array(await crypto.subtle.exportKey('raw',aes));
  const iv=crypto.getRandomValues(new Uint8Array(12));
  const plain=new TextEncoder().encode(JSON.stringify(credentials));
  try{
    const ciphertext=await crypto.subtle.encrypt({name:'AES-GCM',iv,additionalData:new TextEncoder().encode('YAYOMS-TV-PAIRING-v1:'+code),tagLength:128},aes,plain);
    const wrapped=await crypto.subtle.encrypt({name:'RSA-OAEP'},key,raw);
    return {version:1,iv:base64(iv),wrappedKey:base64(wrapped),ciphertext:base64(ciphertext)};
  }finally{raw.fill(0);plain.fill(0);}
}
