const products =  [
    { 
        id: 'iphone-14-pro', 
        name: 'Iphone 14 Pro', 
        price: 1400, 
        category: 'Apple', 
        img:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-compare-iphone-14-pro-202209?wid=366&hei=508&fmt=jpeg&qlt=90&.v=1661471046256', 
        stock: 15, 
        description:'Iphone 14 pro de 128gb de almacenamiento, color purple'
    },
    { 
        id: 'macbook-pro-13', 
        name: 'Macbook Pro 13"', 
        price: 1600, 
        category: 'Apple', 
        img:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp-spacegray-select-202206?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653493200207', 
        stock: 10, 
        description:'Macbook pro de 13", con 250gb de almacenamiento y procesador apple M2'
    },
    { 
        id: 'airpods-max', 
        name: 'AirPods Max', 
        price: 800, 
        category: 'Apple', 
        img:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/airpods-max-select-skyblue-202011?wid=940&hei=1112&fmt=png-alpha&.v=1604022365000', 
        stock: 8, 
        description:'Cascos inalambricos Apple, color blue'
    },
    { 
        id: 'tv-samsung-50', 
        name: 'Tv Samsung 50" Neo QLED 4K', 
        price: 1200, 
        category: 'Electronica', 
        img:'https://image-us.samsung.com/SamsungUS/home/easy-asset/02252022/01_QN65QN90BAFXZA_011_Front3_Titan-Black.jpg?$product-details-jpg$', 
        stock: 12, 
        description:'Televisor Samsung de 50", nueva tecnologia QLED 4k'
    },
    { 
        id: 'formation-wedge-v&w', 
        name: 'Formation Wedge - Bower&Wilkins', 
        price: 1500, 
        category: 'Electronica', 
        img:'https://www.bowerswilkins.com/-/media/images/bowerswilkins/formation-wedge/formation_wedge_img_black_1.png', 
        stock: 15, 
        description:'Equipo de sonido inalambrico B&W, Hi-Res sound'
    },
    { 
        id: 'dji-mavic-3', 
        name: 'Dron DJI Mavic 3', 
        price: 2200, 
        category: 'Electronica', 
        img:'https://stormsend1.djicdn.com/tpc/uploads/carousel/image/16315879822d523ac4429e8738cbc7f5@ultra.jpg', 
        stock: 5, 
        description:'Dron DJI Mavic 3, 4/3 CMOS Hasselblad Camera y rango maximo de vuelo de 15km  '
    },
    { 
        id: 'playstation-5', 
        name: 'Playstation 5', 
        price: 700, 
        category: 'Gaming', 
        img:'https://stylewatch.vtexassets.com/arquivos/ids/220381/PlayStation_5_PS5343_02.jpg?v=637995425722630000', 
        stock: 5, 
        description:'Consola Sony Ps5 digital edition, con mando incluido'
    },
    { 
        id: 'notebook-dell-alienware', 
        name: 'Notebook Dell Alienware x14 R1', 
        price: 2400, 
        category: 'Gaming', 
        img:'https://i.dell.com/sites/csimages/Merchandizing_Images/all/prod-1651-notebook-alienware-x14-800x550-silver.png', 
        stock: 7, 
        description:'Notebook Dell Alienware gamer, pantalla de 14" y procesadro Itel Core i7'
    },
    { 
        id: 'silla-gamer-secret-lab', 
        name: 'Silla Gamer Secret Lab - Titan Evo', 
        price: 500, 
        category: 'Gaming', 
        img:'https://images.secretlab.co/theme/common/2022-titan-evo-splash-right-min.png', 
        stock: 4, 
        description:'Silla gamer Secret Lab, material cuero ecológico'
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.find(prod => {
                return prod.id === id
            }))
        }, 1500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1500)
    })
}