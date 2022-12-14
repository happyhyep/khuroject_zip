import React from 'react';
import { Link } from 'react-router-dom';

const menuList = [
    { ref: '', label: '๐ ใํ' },
    { ref: 'search-friend', label: '๐ใ์น๊ตฌ ์ถ๊ฐํ๊ธฐ' },
    { ref: 'search-group', label: '๐ใ๊ทธ๋ฃน ์ฐธ์ฌํ๊ธฐ' },
    { ref: 'new-group', label: 'โใ์คํฐ๋๊ทธ๋ฃน ์์ฑํ๊ธฐ' },
    { ref: 'record', label: '๐ใ๋ถ์ํ๊ธฐ' },
    { ref: 'friends', label: '๐งพใ์น๊ตฌ ๋ชฉ๋ก' },
    { ref: 'groups', label: '๐งพใ๊ทธ๋ฃน ๋ชฉ๋ก' },
    { ref: 'cam', label: 'โคใ๊ณต๋ถํ๋ฌ๊ฐ๊ธฐ' },
];

const SideMenu = () => {
    return (
        <div className="SideMenu">
            {menuList.map(({ label, ref }) => (
                <Link key={ref} to={ref}>
                    <div>  
                    <button>{label}</button>
                    </div>
                </Link>
            ))}
            <div style={{ position: 'fixed', bottom: '20px'}}>
                <div style={{
                        paddingBottom: '20px',
                        fontSize: '13px',
                        backgroundColor: 'rgb(48, 48, 48)',
                        color: 'rgb(134, 134, 134)',
                        textAlign: 'center'
                }}>
                    ยฉ DCOM ํฌํํฌํ. All Rights Reserved.
                </div>
                <div style={{
                        fontSize: '11px',
                        backgroundColor: 'rgb(48, 48, 48)',
                        color: 'rgb(134, 134, 134)',
                        textAlign: 'left'
                }}>
                    ๋ฉํ  : ๋ฐ๋ฏผ์ฌ / ์ ์ง์
                </div>
                <div style={{
                        fontSize: '11px',
                        backgroundColor: 'rgb(48, 48, 48)',
                        color: 'rgb(134, 134, 134)',
                        textAlign: 'left'
                }}>
                    ํ๋ก ํธ์๋ : ์ดํ๋ฏธ, ์ ํ์ธ
                </div>
                <div style={{
                        fontSize: '11px',
                        backgroundColor: 'rgb(48, 48, 48)',
                        color: 'rgb(134, 134, 134)',
                        textAlign: 'left',
                        verticalAlign: 'bottom'
                }}>
                    ๋ฐฑ์๋ : ๊ฐ๋คํ, ๊น๋ํ
                </div>
            </div>
        </div>
    );
};

export default SideMenu;