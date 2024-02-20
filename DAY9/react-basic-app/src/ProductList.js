import React, { useState } from 'react'

const ProductList = () => {
    //상품목록 데이터
    const [products, setProducts] = useState([
        {
            id: 1,
            productName: '삼성노트북',
            price: 1000,
        },
        {
            id: 2,
            productName: 'LG노트북',
            price: 2000,
        },
        {
            id: 3,
            productName: '한성노트북',
            price: 3000,
        },
        {
            id: 4,
            productName: 'HP노트북',
            price: 4000,
        },
    ])

    //단일 상품정보 관리 상태값 정의하기
    const [product, setProduct] = useState({
        id: 0,
        productName: '',
        price: 0,
    })

    //제품 고유번호 생성 상태값 정의하기
    const [productId, setProductId] = useState(5)

    //상품목록 데이터 조회
    const [productList, setProductList] = useState([])

    //제품정보 입력처리 이벤트 핸들러
    const handleProduct = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    //저장버튼 클릭 이벤트 핸들러
    const handleSave = () => {
        //기본 상품 배열 목록에 등록하려는 단일 상품 객체의 복사본을 만들어 추가해준다
        setProductList([...productList, { ...product }])
    }

    const productUIList = productList.map((pro, i) => (
        // UI요소에 반복적으로 map을 이용해 바인딩하는경우 ui요소에 key속성을 유일값으로 바인딩 해줘야한다
        <tr key={i}>
            <td>{pro.id}</td>
            <td>{pro.productName}</td>
            <td>{pro.price}</td>
            <td>
                <button>선택</button>
                <button>삭제</button>
            </td>
        </tr>
    ))

    //단일 상품정보 선택시 상단 폼에 선택정보 표시하기
    const handleSelect = (pro) => {
        //배열에서 선택한 단일 상품정보로 폼에 바인딩된 단일 상품정보로 변경처리한다.
        setProduct(pro)
    }

    //상품 목록 배열에서 선택 상품정보 삭제처리하고 재바인딩하기
    const handleRemove = (pro) => {
        //배열데이터에서 특정조건에 해당하는 데이터 복사본 목록을 조회할때는 filter()메소드 사용
        //배열안에 제품명이 삭제하려는 제품명과 다른것으로 조회하면 결국 삭제하려는 아이템만 빼고 모두 조회하는 결과물이 만들어진다.
        const filteredProductList = productList.filter((p) => p.productName !== pro.productName)
        setProductList(filteredProductList)
    }

    return (
        <div>
            신규 제품 등록 <br></br>
            제품명:
            <input
                type="text"
                name="productName"
                value={product.productName}
                placeholder="제품명"
                onChange={handleProduct}
            />
            가격:
            <input type="text" name="price" value={product.price} placeholder="0" onChange={handleProduct} />
            <button onClick={handleSave}>저장</button>
            <hr></hr>
            <table style={{ width: '100%' }}>
                <thead>
                    <tr>
                        <th>제품번호</th>
                        <th>제품명</th>
                        <th>가격</th>
                        <th>선택</th>
                        <th>삭제</th>
                    </tr>
                </thead>

                <tbody>
                    {productList.map((p, i) => (
                        <tr key={i}>
                            <td>{p.id}</td>
                            <td>{p.productName}</td>
                            <td>{p.price}</td>
                            <td>
                                <button onClick={() => handleSelect(p)}>선택</button>
                            </td>
                            <td>
                                <button onClick={() => handleRemove(p)}>삭제</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductList
