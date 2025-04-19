# ticket-safe

# 블럭체인 개념

## address
- EOA : 공개키 비밀키 -> 비밀키를 알고있는 공개키.
    - 메타마스크를 들어가면 우리한테 비밀키를 준다.
    -> 이를 가공해서 공개킥를 발급 그게 EOA
- OA : 비밀키를 모르는 일반적인 공개키
    -> 컨트렉트 작성하고 배포하면 나오는 주소가 OA

큰 차이점 : 백엔드는 여러개를 동시 처리 컨트렉트는 무조건 하나씩 순차적으로 처리

컨트렉트 만들 때
    - hard hat 프레임워크같은 것
    - 설치 간편화된것 -> remix

- [ ] [chain list](https://chainlist.org/)

가스비를 원래 내야하는데
-> testnet 이런거에 내기 아까우니까 faucet 에서 뿌려준다.


gentle tomato veteran dirt gate weasel polar keep argue novel embrace crew

## L1 / L2
- L1 -> 이더리움
- L2 -> 실리콘 -> 브릿지를 통해서 가져온다. 이더리움의 eth를 브릿지를 통해서 가져온다.
    -> 이더리움에 컨트렉트가 하나 있따 (vault => 우리 지갑같은 느낌 ) 10 이더를 볼트에 넣을 떄 -> 우리가 백엔드에서 ㅇㅇ 너 넣었구나를 검증하고
    -> 실리콘에서 9.999eth를 넣어준다... ?
    -> 이러한 과정이 브릿지
    브릿지 사이트에서 어디서 어디 체인으로 보낼지 해서 실제 kairos -> silicon testnet

컽트렉트를 만들다보면 개발자마다 코드 스타일이 다르니까 오픈제플린 open zeppelin 여기서 표준을 만들어두었다.
[ ] [open zeppelin 표준](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/token/ERC20/ERC20.sol)
-> 토큰 담당 표준

nft : token의 심화버전

구매자가 생기면 이걸 호출
1. nft 생성
    토큰에 들어갈 정보
    1. 공연의 이름
    2. 공연의 설명
    3. 시작시간/ 종료시간
    4. 공연 이미지 token _ baseurl 에 공연 이미지가 들어간다
    5. 공연 장송
2. nft verify 변경 -> 입장 체크
판매자 호출시
1. 토큰생성

지갑을 연결하면 바로 그냥 지갑 주소로 nft주소를 넘겨주고 ,이를 위해 본인인증 과정이 필요하곡, ( 아마 휴대폰 문자메시지 ) -> 관리를 한다.

클라우드에 로우한 도메인 튀어나오게 하면 될 것 같다.
>


1.

2.

3.
