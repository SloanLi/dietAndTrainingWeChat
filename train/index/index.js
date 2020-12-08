    // page.js示例代码
const originalData=[{trainName:"",trainCount:""}]
Page({
        data: {
            dialogShow:false,
            buttons: [{text: '取消'}, {text: '确定'}],
            oneButton: [{text: '确定'}],
            modifyData:[{trainName:"",trainCount:""}]
        },
        openDialog(e) {
            this.setData({
                dialogShow: true
            })
        },
        tapDialogButton(e) {
            const {detail:{item:{text},index}}=e
            if(index){
                this.postTrain()
            }else{
                this.setData({
                    dialogShow: false,
                    modifyData:originalData
                })
            }
           
        },
        getTrainValue(e){
         const {detail:{value},target:{dataset:{index,field}}}=e
         const {data:{modifyData}}=this
         const currentData=modifyData[index]
         currentData[field]=value
         modifyData.slice(index,1,currentData)
         this.setData({
             modifyData
         })
        },
        addTrainInput(){
            const {modifyData}=this.data;
            if(modifyData.length>9){
                return
            }
            modifyData.push({trainName:"",trainCount:""})
            this.setData({
                modifyData
            })
        },
        postTrain(){
            const {modifyData}=this.data
            if(modifyData.length===0){
                return
            }
            const vaild= modifyData.every(item=>{
                return !item.trainName||!item.trainCount
            })
            if(vaild){
                wx.showToast({
                  title: '请补充数据',
                  icon:"none"
                })
                return
            }
        },
        deleteModifyData(e){
            const {modifyData}=this.data
            const {target:{dataset:{index}}}=e
            console.log(index)
            // modifyData.splice(index,1)
            console.log(modifyData.splice(index,1))
            this.setData({
                modifyData
            })
        }
    });