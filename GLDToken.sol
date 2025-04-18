pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract GLDToken is ERC721 {
    string private _description; //custom
    mapping(address => bool) verify;

    constructor(uint256 initialSupply) ERC721("Gold", "GLD") public { // 토큰이름은 공연의 이름으로 할듯 ?
        _mint(msg.sender, initialSupply);
    }

    function mint(address to, uint value) public {
        _mint(to, value);
    }
}



/* 구매자가 생기면 이걸 호출
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
*/