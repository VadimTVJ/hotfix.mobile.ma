import React, {useEffect, useState} from 'react';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

import {Button, PanelHeaderButton, Progress, Separator, PanelHeaderContent, FixedLayout, HorizontalScroll} from "@vkontakte/vkui";
import {Icon24Dismiss, Icon16Dropdown, Icon12Dropdown, Icon20UserOutline, Icon16Recent} from "@vkontakte/icons";
import Div from "@vkontakte/vkui/dist/components/Div/Div";

const NewsfeedEdit = ({id, go}) => {
    const [data, setData] = useState({});
    const [value, setText] = useState("");

    useEffect(() => {
        let i = JSON.parse(localStorage.cache);
        setData(i);
    }, []);

    useEffect(() => {
        console.log(data);
    }, [data])

    const check = () => {
        let i = JSON.parse(localStorage.cache);
        i.text = value;
        localStorage.cache = JSON.stringify(i);
        go('newsfeed');
    };

    return (
        <Panel id={id}>
            <PanelHeader
                left={<Icon24Dismiss onClick={() => { go('home') }} width={28} height={28} style={{ marginLeft: 7 }} fill="#818C99"/>}
                right={
                    <PanelHeaderButton style={{ marginRight: 7 }} onClick={() => {
                        check()
                    }}>
                        <svg width="28" height="28" viewBox="0 0 28 28" fill="#3F8AE0" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28ZM19.7071 12.2929L14.7071 7.29289C14.3166 6.90237 13.6834 6.90237 13.2929 7.29289L8.29289 12.2929C7.90237 12.6834 7.90237 13.3166 8.29289 13.7071C8.68342 14.0976 9.31658 14.0976 9.70711 13.7071L13 10.4142V20C13 20.5523 13.4477 21 14 21C14.5523 21 15 20.5523 15 20V10.4142L18.2929 13.7071C18.6834 14.0976 19.3166 14.0976 19.7071 13.7071C20.0976 13.3166 20.0976 12.6834 19.7071 12.2929Z" fill="#3F8AE0"/>
                        </svg>
                    </PanelHeaderButton>}
            >
                <PanelHeaderContent aside={<Icon16Dropdown />}>
                    Матвей
                </PanelHeaderContent>
            </PanelHeader>
            <input type="textarea" value={value} autoFocus onChange={e => {
                setText(e.target.value)
            }} placeholder="Что у Вас нового?" className="Newsfeed_input"/>
            <Div style={{padding: "10px 8px"}}>
                <div className="Attachment">
                    {data.image !== 'none' && <img className="Attachment_img" src={data.image} />}
                    <div className="Attachment_Infobar">
                        <div className="Attachment_titles">
                            <div className="Attachment_title">{data.name}</div>
                            <div className="Attachment_subtitle">Матвей Правосудов
                                · {data.type === "targeted" ? "Закончится через n дней" : "Помощь нужна каждый месяц"}</div>
                        </div>
                        <Separator wide/>
                        <div className="Attachment_status">
                            <div className="Attachment_progress">
                                <div className="Attachment_progress_title">Помогите первым</div>
                                <Progress/>
                            </div>
                            <div className="Att_button">
                                <Button disabled mode="outline">Помочь</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </Div>

            <FixedLayout vertical="bottom">
                <Separator wide/>
                <HorizontalScroll className="scrolled">
                    <div style={{ display: 'flex' }}>
                        <div className="item">
                            <Icon20UserOutline width={12} height={12} />
                            <span>Видно всем</span>
                            <Icon12Dropdown />
                        </div>
                        <div className="item">
                            <Icon16Recent width={12} height={12} />
                            <span>Сейчас</span>
                            <Icon12Dropdown />
                        </div>
                        <div className="item">
                            <span>Тематика</span>
                            <Icon12Dropdown />
                        </div>
                        <div className="item">
                            <Icon20UserOutline width={12} height={12} />
                            <span>Видно всем</span>
                            <Icon12Dropdown />
                        </div>
                        <div className="item">
                            <Icon16Recent width={12} height={12} />
                            <span>Сейчас</span>
                            <Icon12Dropdown />
                        </div>
                    </div>
                </HorizontalScroll>
                <Separator wide/>
            </FixedLayout>
        </Panel>
    );

};

export default NewsfeedEdit;
