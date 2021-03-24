import React, { useState } from 'react';
import { UnorderedListOutlined } from '@ant-design/icons';
import classnames from 'classnames';
import './index.less';
const logo = require('@/assets/images/zfkelogo.png');

interface Props {
    currentCategory: string,
    setCurrentCategory: (currentCategory: string) => any
}

function HomeHeader(props: Props) {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const setCurrentCategory = (event: React.MouseEvent<HTMLUListElement>) => {
        let target = event.target as HTMLUListElement;
        let currentCategory = target.dataset.category;

        props.setCurrentCategory(currentCategory);
        setIsMenuVisible(false);
    }

    return (
        <header className="home-header">
            <div className="logo-header">
                <img src={logo.default} />
                <UnorderedListOutlined onClick={() => setIsMenuVisible(!isMenuVisible)} />
            </div>
            {
                isMenuVisible && (<ul
                    className="category"
                    onClick={setCurrentCategory}
                >
                    <li data-category="all" className={classnames({ active: props.currentCategory === 'all' })}>全部课程</li>
                    <li data-category="react" className={classnames({ active: props.currentCategory === 'react' })}>React课程</li>
                    <li data-category="vue" className={classnames({ active: props.currentCategory === 'vue' })}>Vue课程</li>
                </ul>)
            }
        </header>
    )
}

export default HomeHeader