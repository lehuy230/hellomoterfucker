import * as types from './../constants/actionType'

var data = JSON.parse(localStorage.getItem('CART'))
var initialState =data?data:[];
// var initialState =[
//     {
//         product:{
//             id:3,
//             name:'Iphone 9',
//             image:'https://cellphones.com.vn/sforum/wp-content/uploads/2020/04/iphone1.jpg',
//             description:'sản phẩm do apple sản xuất',
//             price:900,
//             inventory:11,
//             raiting:2

//         },
//         quantity:5
//     },{
//         product:{
//             id:2,
//             name:'Iphone 8s',
//             image:'data:image/jpeg;base64,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',
//             description:'sản phẩm do apple sản xuất',
//             price:600,
//             inventory:9,
//             raiting:5
//         },quantity:2
//     }
// ];

const products =(state = initialState,action)=>{
    var {product,quantity} = action;
    var index = -1;
    switch(action.type){
        case types.ADD_TO_CART:
            console.log(action);
            index =findProductInCart(state,product);
            if(index!==-1){
                state[index].quantity+=quantity;
            }else{
                state.push({
                    product,
                    quantity
                });
            }
           localStorage.setItem('CART',JSON.stringify(state));
            console.log(action);
            return [...state];
        case types.DELETE_PRODUCT_IN_CART:
            index =findProductInCart(state,product);
            if(index!==-1){
                state.splice(index,1);
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
        case types.UPDATE_PRODUCT_INCART:
            index =findProductInCart(state,product);
            if(index!==-1){
                console.log(quantity);
                state[index].quantity =quantity;
            }
            localStorage.setItem('CART',JSON.stringify(state));
            return [...state];
        default:return [...state];
    }
}
var findProductInCart=(cart,product)=>{
    var index = -1;
    if(cart.length>0){
        for(var i =0;i<cart.length;i++){
            if(cart[i].product.id===product.id){
                index=i;
                break;
            }
        }
    }
    return index;
}
export default products;