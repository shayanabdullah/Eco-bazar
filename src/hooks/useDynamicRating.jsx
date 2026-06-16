 export const useDynamicRating = (rating) => {
   let ratingArr = [];
   let halfStar = rating.toString().split('.')[1]
   let index = Math.floor(rating)

   for(let i=1; i<=5; i++){
    if(i <= rating){
      ratingArr.push('full')
    }else {
      ratingArr.push(i)
    }  
   }
   if(halfStar){
   ratingArr[index] = 'half'
   }
 return ratingArr;
 
  }