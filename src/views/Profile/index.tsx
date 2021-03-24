import React, { PropsWithChildren } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { Descriptions, Button, Alert, message } from 'antd';
import { IRootState, IProfileState } from '@/typings/state';
import LOGIN_TYPES from '@/typings/login-types';
import mapDispathToProps from '@/store/actions/profile';
import NavHeader from '@/components/NavHeader';
import './index.less';

type Props = PropsWithChildren<RouteComponentProps & ReturnType<typeof mapStateToProps> & typeof mapDispathToProps>;

function Profile(props: Props) {
    let content = null;
    if (props.loginState == LOGIN_TYPES.UN_VALIDATE) {
        content = null;
    } else if (props.loginState == LOGIN_TYPES.LOGINED) {
        content = (
            <div className="user-info">
                <Descriptions title="当前登录用户">
                    <Descriptions.Item label="用户名">{props.user.username}</Descriptions.Item>
                    <Descriptions.Item label="邮箱">{props.user.email}</Descriptions.Item>
                </Descriptions>
                <Button type="ghost" onClick={async () => {
                    props.history.push('/login');
                }}>退出登录</Button>
            </div>
        )
    } else {
        content = (
            <>
                <Alert type="warning" message="当前未登录" description="亲爱的用户你好，你当前尚未登录，请你选择注册或者登录" />
                <div style={{ textAlign: 'center', padding: '.5rem' }}>
                    <Button type="dashed" onClick={() => props.history.push('/login')}>登录</Button>
                    <Button type="dashed" style={{ marginLeft: '.5rem' }} onClick={() => props.history.push('/register')}>注册</Button>
                </div>
            </>
        )
    }
    return (
        <section>
            <NavHeader>个人中心</NavHeader>
            {content}
        </section>
    )
}

const mapStateToProps = (state: IRootState): IProfileState => state.profile;

export default connect(mapStateToProps, mapDispathToProps)(Profile);
