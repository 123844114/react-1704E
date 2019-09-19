let data=[
    {txt:'公安彻查保时捷女',num:856},
    {txt:'杨紫工作室回应',num:856},
    {txt:'乔家大院被撤5A',num:440},
    {txt:'巩俐探班女排训练',num:436},
    {txt:'李现粉丝活动取消',num:334}
]
function Lis() {
    return data.map((item,index)=><li key={index}><i>{index+1}</i> <span>{item.txt}</span><span className='num'>{item.num}</span></li>)
  }
  console.log(Lis)
export default Lis