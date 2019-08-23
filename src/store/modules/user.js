/**
 * user对象
 * @author Black_FatMan
 * @date 2019-08-22
 * @param null
 * @return
 */
const user = {
  //const常量
  state: sessionStorage.getItem('userState') != null ? JSON.parse(sessionStorage.getItem('userState')) : {
    user: {
      username: ''
    }
  },
//计算属性
//获取
  getters: {
    getUser(state) {
      return state.user;
    }
  },
//设置
  mutations: {
    updateUser(state, user) {
      state.user = user;
    }
  },
//异步进行修改
  actions: {
    asyneUpdateUser(context, user) {
      context.commit('updateUser', user);
    }
  }
};

export default user;
