const actions = {
    //修改info
    changeInfoAction(context,info){
        context.commit("changeInfo",info)
    },
    changeUserIdAction(context,id){
        context.commit("changeUserId",id)
    }
}
export default actions