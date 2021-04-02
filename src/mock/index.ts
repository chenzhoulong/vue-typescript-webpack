import Mock from 'mockjs';
import user from '@/mock/user'

Mock.mock('/user/login', 'post' , user.login);

Mock.mock(RegExp("/user/permission.*"), 'get' , user.getPermission);

export default Mock