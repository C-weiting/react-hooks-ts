import { Divider } from 'antd'
import React, {PropsWithChildren} from 'react';
import {withRouter, RouteComponentProps} from 'react-router-dom';
import { LeftOutlined } from '@ant-design/icons';
import "./index.less";

type Props = PropsWithChildren<RouteComponentProps>;

function NavHeader(props: Props) {
    return (
        <div className="nav-header">
            <LeftOutlined onClick={() => props.history.goBack()} />
            {props.children}
        </div>
    );
}

export default withRouter(NavHeader);