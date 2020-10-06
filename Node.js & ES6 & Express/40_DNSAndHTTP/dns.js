//DNS 모듈 사용법
//dns : domain name server :
//실제 서버의 주소는 IP. 
//DNS는 www.xxx.xxxx와 같은 도메인 네임을 컴퓨터가 이해할 수 있는 주소 체계로 변경하는 역할
`use strict`
const dns = require('dns'); //dns모듈 

//실제 ip 조회
dns.lookup('www.google.com', (err, address, family) => { //dns.lookup(url, 콜백메서드)
    console.log(`address : ${address} family : ${family}`);
});   
//address : IP , family : IPv4와 같은 사용하고 있는 ip 체계 버전

//IPv4체계에서 사용 : resolve4(호스트 주소, 콜백메서드)
dns.resolve4("archive.org", (err, addresses) => {
    if(err) throw err; //도메인이 존재하지 않는 경우, 해당 resolve를 지원하지 않는 경우 등에서 에러

    const res = JSON.stringify(addresses); //객체를 json string형태로 변경
    console.log(res);
    addresses.forEach(addr => {
        dns.reverse(addr, (err, hostnames) => {
            if(err) throw err;  
            //지정된 IP주소의 도메인명을 찾아낸다
            console.log(`reverse for ${addr}; ${JSON.stringify(hostnames)}`);
        })
    })
})